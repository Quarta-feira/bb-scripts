import * as comlink from "/libs/comlink";
import { getOptimalBoostMaterialQuantities, getProductMarkup, isProduct, Logger } from "/corporationUtils";
import {
  CityName,
  formatNumber,
  getAdVertCost,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionProductionMultiplier,
  getDivisionRawProduction,
  getEmployeeProductionByJobs,
  getMarketFactor,
  getMaxAffordableAdVertLevel,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  getResearchAdvertisingMultiplier,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getUpgradeBenefit,
  getUpgradeCost,
  getUpgradeWarehouseCost,
  getWarehouseSize,
  UpgradeName
} from "/corporationFormulas";
import { CorpMaterialsData } from "/data/CorpMaterialsData";
import { CorpUpgradesData } from "/data/CorpUpgradesData";
import { PriorityQueue } from "/libs/priorityQueue";
import { scaleValueToRange } from "/libs/utils";
var BenchmarkType = /* @__PURE__ */ ((BenchmarkType2) => {
  BenchmarkType2[BenchmarkType2["STORAGE_FACTORY"] = 0] = "STORAGE_FACTORY";
  BenchmarkType2[BenchmarkType2["WILSON_ADVERT"] = 1] = "WILSON_ADVERT";
  BenchmarkType2[BenchmarkType2["OFFICE"] = 2] = "OFFICE";
  return BenchmarkType2;
})(BenchmarkType || {});
const defaultMinForNormalization = 5;
const defaultMaxForNormalization = 200;
const referenceValueModifier = 10;
const precalculatedEmployeeRatioForSupportDivisions = {
  operations: 0.22,
  engineer: 0.632,
  business: 0,
  management: 0.148
};
const precalculatedEmployeeRatioForProfitSetupOfRound3 = {
  operations: 49 / 138,
  // 0.35507246376811594202898550724638
  engineer: 5 / 138,
  // 0.03623188405797101449275362318841
  business: 51 / 138,
  // 0.36956521739130434782608695652174
  management: 33 / 138
  // 0.23913043478260869565217391304348
};
const precalculatedEmployeeRatioForProfitSetupOfRound4 = {
  operations: 68 / 369,
  // 0.18428184281842818428184281842818
  engineer: 12 / 369,
  // 0.03252032520325203252032520325203
  business: 244 / 369,
  // 0.66124661246612466124661246612466
  management: 45 / 369
  // 0.12195121951219512195121951219512
};
const precalculatedEmployeeRatioForProductDivisionRound3 = {
  operations: 0.037,
  engineer: 0.513,
  business: 0.011,
  management: 0.44
};
const precalculatedEmployeeRatioForProductDivisionRound4 = {
  operations: 0.03,
  engineer: 0.531,
  business: 3e-3,
  management: 0.436
};
const precalculatedEmployeeRatioForProductDivisionRound5_1 = {
  operations: 0.032,
  engineer: 0.462,
  business: 0.067,
  management: 0.439
};
const precalculatedEmployeeRatioForProductDivisionRound5_2 = {
  operations: 0.064,
  engineer: 0.317,
  business: 0.298,
  management: 0.321
};
async function getReferenceData(division, industryData, nonRnDEmployees, item, useCurrentItemData, customData) {
  const operations = Math.floor(nonRnDEmployees * 0.031);
  const engineer = Math.floor(nonRnDEmployees * 0.489);
  const business = Math.floor(nonRnDEmployees * 0.067);
  const management = nonRnDEmployees - (operations + engineer + business);
  return await calculateOfficeBenchmarkData(
    division,
    industryData,
    item,
    useCurrentItemData,
    customData,
    operations,
    engineer,
    business,
    management,
    0,
    getUpgradeBenefit(
      UpgradeName.ABC_SALES_BOTS,
      customData.corporationUpgradeLevels[UpgradeName.ABC_SALES_BOTS]
    ),
    getResearchSalesMultiplier(customData.divisionResearches),
    false
  );
}
function normalizeProfit(profit, referenceValue) {
  return scaleValueToRange(
    profit,
    referenceValue / referenceValueModifier,
    referenceValue * referenceValueModifier,
    defaultMinForNormalization,
    defaultMaxForNormalization
  );
}
function normalizeProgress(progress) {
  return scaleValueToRange(progress, 0, 100, defaultMinForNormalization, defaultMaxForNormalization);
}
function getComparator(benchmarkType, sortType, customData) {
  switch (benchmarkType) {
    case 0 /* STORAGE_FACTORY */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (a.production !== b.production) {
          return a.production - b.production;
        }
        return b.totalCost - a.totalCost;
      };
    case 1 /* WILSON_ADVERT */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (sortType === "totalCost") {
          return b.totalCost - a.totalCost;
        }
        if (a.advertisingFactor !== b.advertisingFactor) {
          return a.advertisingFactor - b.advertisingFactor;
        }
        return b.totalCost - a.totalCost;
      };
    case 2 /* OFFICE */:
      return (a, b) => {
        if (!a || !b) {
          return 1;
        }
        if (a.totalExperience !== b.totalExperience) {
          return a.totalExperience - b.totalExperience;
        }
        if (sortType === "rawProduction") {
          return a.rawProduction - b.rawProduction;
        }
        if (sortType === "progress") {
          return a.productDevelopmentProgress - b.productDevelopmentProgress;
        }
        if (sortType === "profit") {
          return a.profit - b.profit;
        }
        if (!customData) {
          throw new Error(`Invalid custom data`);
        }
        const normalizedProfitOfA = normalizeProfit(a.profit, customData.referenceData.profit);
        const normalizedProgressOfA = normalizeProgress(Math.ceil(100 / a.productDevelopmentProgress));
        const normalizedProfitOfB = normalizeProfit(b.profit, customData.referenceData.profit);
        const normalizedProgressOfB = normalizeProgress(Math.ceil(100 / b.productDevelopmentProgress));
        if (!Number.isFinite(normalizedProfitOfA) || !Number.isFinite(normalizedProfitOfB)) {
          throw new Error(
            `Invalid profit: a.profit: ${a.profit.toExponential()}, b.profit: ${b.profit.toExponential()}, referenceData.profit: ${customData.referenceData.profit.toExponential()}`
          );
        }
        if (sortType === "profit_progress") {
          return customData.balancingModifierForProfitProgress.profit * normalizedProfitOfA - customData.balancingModifierForProfitProgress.progress * normalizedProgressOfA - (customData.balancingModifierForProfitProgress.profit * normalizedProfitOfB - customData.balancingModifierForProfitProgress.progress * normalizedProgressOfB);
        }
        throw new Error(`Invalid sort type: ${sortType}`);
      };
    default:
      throw new Error(`Invalid benchmark type`);
  }
}
const awarenessMap = /* @__PURE__ */ new Map();
const popularityMap = /* @__PURE__ */ new Map();
const defaultLengthOfBenchmarkDataArray = 10;
const defaultPerformanceModifierForOfficeBenchmark = 40;
const minStepForOfficeBenchmark = 2;
async function calculateOfficeBenchmarkData(division, industryData, item, useCurrentItemData, customData, operations, engineer, business, management, rnd, salesBotUpgradeBenefit, researchSalesMultiplier, enableLogging = false) {
  const itemIsProduct = isProduct(item);
  const employeesProduction = getEmployeeProductionByJobs(
    {
      avgIntelligence: customData.office.avgIntelligence,
      avgCharisma: customData.office.avgCharisma,
      avgCreativity: customData.office.avgCreativity,
      avgEfficiency: customData.office.avgEfficiency,
      avgMorale: customData.office.avgMorale,
      avgEnergy: customData.office.avgEnergy,
      totalExperience: customData.office.totalExperience,
      employeeJobs: {
        operations,
        engineer,
        business,
        management,
        researchAndDevelopment: rnd,
        intern: 0,
        unassigned: 0
      }
    },
    customData.corporationUpgradeLevels,
    customData.divisionResearches
  );
  const rawProduction = getDivisionRawProduction(
    itemIsProduct,
    {
      operationsProduction: employeesProduction.operationsProduction,
      engineerProduction: employeesProduction.engineerProduction,
      managementProduction: employeesProduction.managementProduction
    },
    division.productionMult,
    customData.corporationUpgradeLevels,
    customData.divisionResearches
  );
  let productDevelopmentProgress = 0;
  let estimatedRP = 0;
  let productEffectiveRating = 0;
  let productMarkup = 0;
  let demand;
  let competition;
  let itemMultiplier;
  let markupLimit;
  let marketPrice;
  if (itemIsProduct) {
    const totalProductionForProductDev = employeesProduction.operationsProduction + employeesProduction.engineerProduction + employeesProduction.managementProduction;
    const managementFactor = 1 + employeesProduction.managementProduction / (1.2 * totalProductionForProductDev);
    productDevelopmentProgress = 0.01 * (Math.pow(employeesProduction.engineerProduction, 0.34) + Math.pow(employeesProduction.operationsProduction, 0.2)) * managementFactor;
    if (!useCurrentItemData) {
      const cycles = 100 / productDevelopmentProgress;
      const employeesProductionInSupportCities = getEmployeeProductionByJobs(
        {
          // Reuse employees' stats of main office. This is fine because we only calculate the estimated value,
          // not the exact value.
          avgIntelligence: customData.office.avgIntelligence,
          avgCharisma: customData.office.avgCharisma,
          avgCreativity: customData.office.avgCreativity,
          avgEfficiency: customData.office.avgEfficiency,
          avgMorale: customData.office.avgMorale,
          avgEnergy: customData.office.avgEnergy,
          totalExperience: customData.office.totalExperience,
          employeeJobs: {
            operations: 1,
            engineer: 1,
            business: 1,
            management: 1,
            researchAndDevelopment: operations + engineer + business + management - 4,
            intern: 0,
            unassigned: 0
          }
        },
        customData.corporationUpgradeLevels,
        customData.divisionResearches
      );
      const researchPointGainPerCycle = 5 * 4 * 4e-3 * Math.pow(employeesProductionInSupportCities.researchAndDevelopmentProduction, 0.5) * getUpgradeBenefit(UpgradeName.PROJECT_INSIGHT, customData.corporationUpgradeLevels[UpgradeName.PROJECT_INSIGHT]) * getResearchRPMultiplier(customData.divisionResearches);
      estimatedRP = division.researchPoints + researchPointGainPerCycle * cycles;
      const productStats = {
        quality: 0,
        performance: 0,
        durability: 0,
        reliability: 0,
        aesthetics: 0,
        features: 0
      };
      const totalProduction = employeesProduction.engineerProduction + employeesProduction.managementProduction + employeesProduction.researchAndDevelopmentProduction + employeesProduction.operationsProduction + employeesProduction.businessProduction;
      const engineerRatio = employeesProduction.engineerProduction / totalProduction;
      const managementRatio = employeesProduction.managementProduction / totalProduction;
      const researchAndDevelopmentRatio = employeesProduction.researchAndDevelopmentProduction / totalProduction;
      const operationsRatio = employeesProduction.operationsProduction / totalProduction;
      const businessRatio = employeesProduction.businessProduction / totalProduction;
      const designInvestmentMultiplier = 1 + Math.pow(item.designInvestment, 0.1) / 100;
      const scienceMultiplier = 1 + Math.pow(estimatedRP, industryData.scienceFactor) / 800;
      const balanceMultiplier = 1.2 * engineerRatio + 0.9 * managementRatio + 1.3 * researchAndDevelopmentRatio + 1.5 * operationsRatio + businessRatio;
      const totalMultiplier = balanceMultiplier * designInvestmentMultiplier * scienceMultiplier;
      productStats.quality = totalMultiplier * (0.1 * employeesProduction.engineerProduction + 0.05 * employeesProduction.managementProduction + 0.05 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.02 * employeesProduction.businessProduction);
      productStats.performance = totalMultiplier * (0.15 * employeesProduction.engineerProduction + 0.02 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.02 * employeesProduction.businessProduction);
      productStats.durability = totalMultiplier * (0.05 * employeesProduction.engineerProduction + 0.02 * employeesProduction.managementProduction + 0.08 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.05 * employeesProduction.businessProduction);
      productStats.reliability = totalMultiplier * (0.02 * employeesProduction.engineerProduction + 0.08 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.08 * employeesProduction.businessProduction);
      productStats.aesthetics = totalMultiplier * (0.08 * employeesProduction.managementProduction + 0.05 * employeesProduction.researchAndDevelopmentProduction + 0.02 * employeesProduction.operationsProduction + 0.1 * employeesProduction.businessProduction);
      productStats.features = totalMultiplier * (0.08 * employeesProduction.engineerProduction + 0.05 * employeesProduction.managementProduction + 0.02 * employeesProduction.researchAndDevelopmentProduction + 0.05 * employeesProduction.operationsProduction + 0.05 * employeesProduction.businessProduction);
      let productRating = 0;
      const weights = industryData.product.ratingWeights;
      for (const [statName, coefficient] of Object.entries(weights)) {
        productRating += productStats[statName] * coefficient;
      }
      productEffectiveRating = productRating;
      const advertisingInvestmentMultiplier = 1 + Math.pow(item.advertisingInvestment, 0.1) / 100;
      const businessManagementRatio = Math.max(
        businessRatio + managementRatio,
        1 / totalProduction
      );
      productMarkup = 100 / (advertisingInvestmentMultiplier * Math.pow(productStats.quality + 1e-3, 0.65) * businessManagementRatio);
      demand = division.awareness === 0 ? 20 : Math.min(
        100,
        advertisingInvestmentMultiplier * (100 * (division.popularity / division.awareness))
      );
      competition = 35;
    } else {
      productEffectiveRating = item.effectiveRating;
      productMarkup = await getProductMarkup(
        division,
        industryData,
        CityName.Sector12,
        item,
        void 0
      );
      if (!item.demand || !item.competition) {
        throw new Error(`You need to unlock "Market Research - Demand" and "Market Data - Competition"`);
      }
      demand = item.demand;
      competition = item.competition;
    }
    itemMultiplier = 0.5 * Math.pow(productEffectiveRating, 0.65);
    markupLimit = Math.max(productEffectiveRating, 1e-3) / productMarkup;
    marketPrice = item.productionCost;
  } else {
    if (!item.demand || !item.competition) {
      throw new Error(`You need to unlock "Market Research - Demand" and "Market Data - Competition"`);
    }
    demand = item.demand;
    competition = item.competition;
    itemMultiplier = item.quality + 1e-3;
    markupLimit = item.quality / CorpMaterialsData[item.name].baseMarkup;
    marketPrice = item.marketPrice;
  }
  const marketFactor = getMarketFactor(demand, competition);
  const businessFactor = getBusinessFactor(employeesProduction.businessProduction);
  const advertisingFactor = getAdvertisingFactors(
    division.awareness,
    division.popularity,
    industryData.advertisingFactor
  )[0];
  const maxSalesVolume = itemMultiplier * businessFactor * advertisingFactor * marketFactor * salesBotUpgradeBenefit * researchSalesMultiplier;
  let marginErrorRatio = 1;
  if (!itemIsProduct) {
    marginErrorRatio = 0.9;
  }
  if (maxSalesVolume < rawProduction * marginErrorRatio && business > 0) {
    const logger = new Logger(enableLogging);
    logger.warn(`WARNING: operations: ${operations}, engineer: ${engineer}, business: ${business}, management: ${management}`);
    logger.warn(`WARNING: rawProduction: ${rawProduction}, maxSalesVolume: ${maxSalesVolume}`);
  }
  const optimalPrice = markupLimit / Math.sqrt(rawProduction / maxSalesVolume) + marketPrice;
  const profit = rawProduction * 10 * optimalPrice;
  return {
    operations,
    engineer,
    business,
    management,
    totalExperience: customData.office.totalExperience,
    rawProduction,
    maxSalesVolume,
    optimalPrice,
    productDevelopmentProgress,
    estimatedRP,
    productRating: productEffectiveRating,
    productMarkup,
    profit
  };
}
class CorporationOptimizer {
  getScriptUrl() {
    return import.meta.url;
  }
  optimizeStorageAndFactory(industryData, currentSmartStorageLevel, currentWarehouseLevel, currentSmartFactoriesLevel, divisionResearches, maxCost, enableLogging = false, boostMaterialTotalSizeRatio = 0.8) {
    if (currentSmartStorageLevel < 0 || currentWarehouseLevel < 0 || currentSmartFactoriesLevel < 0) {
      throw new Error("Invalid parameter");
    }
    const logger = new Logger(enableLogging);
    const maxSmartStorageLevel = getMaxAffordableUpgradeLevel(UpgradeName.SMART_STORAGE, currentSmartStorageLevel, maxCost);
    const maxWarehouseLevel = getMaxAffordableWarehouseLevel(currentWarehouseLevel, maxCost / 6);
    const comparator = getComparator(0 /* STORAGE_FACTORY */);
    const priorityQueue = new PriorityQueue(comparator);
    let minSmartStorageLevel = currentSmartStorageLevel;
    if (maxSmartStorageLevel - minSmartStorageLevel > 1e3) {
      minSmartStorageLevel = maxSmartStorageLevel - 1e3;
    }
    let minWarehouseLevel = currentWarehouseLevel;
    if (maxWarehouseLevel - minWarehouseLevel > 1e3) {
      minWarehouseLevel = maxWarehouseLevel - 1e3;
    }
    logger.log(`minSmartStorageLevel: ${minSmartStorageLevel}`);
    logger.log(`minWarehouseLevel: ${minWarehouseLevel}`);
    logger.log(`maxSmartStorageLevel: ${maxSmartStorageLevel}`);
    logger.log(`maxWarehouseLevel: ${maxWarehouseLevel}`);
    logger.time("StorageAndFactory benchmark");
    for (let smartStorageLevel = minSmartStorageLevel; smartStorageLevel <= maxSmartStorageLevel; smartStorageLevel++) {
      const upgradeSmartStorageCost = getUpgradeCost(
        UpgradeName.SMART_STORAGE,
        currentSmartStorageLevel,
        smartStorageLevel
      );
      for (let warehouseLevel = minWarehouseLevel; warehouseLevel <= maxWarehouseLevel; warehouseLevel++) {
        const upgradeWarehouseCost = getUpgradeWarehouseCost(
          currentWarehouseLevel,
          warehouseLevel
        ) * 6;
        if (upgradeSmartStorageCost + upgradeWarehouseCost > maxCost) {
          break;
        }
        const warehouseSize = getWarehouseSize(
          smartStorageLevel,
          warehouseLevel,
          divisionResearches
        );
        const boostMaterials = getOptimalBoostMaterialQuantities(industryData, warehouseSize * boostMaterialTotalSizeRatio);
        const boostMaterialMultiplier = getDivisionProductionMultiplier(industryData, boostMaterials);
        const budgetForSmartFactoriesUpgrade = maxCost - (upgradeSmartStorageCost + upgradeWarehouseCost);
        const maxAffordableSmartFactoriesLevel = getMaxAffordableUpgradeLevel(
          UpgradeName.SMART_FACTORIES,
          currentSmartFactoriesLevel,
          budgetForSmartFactoriesUpgrade
        );
        const upgradeSmartFactoriesCost = getUpgradeCost(
          UpgradeName.SMART_FACTORIES,
          currentSmartFactoriesLevel,
          maxAffordableSmartFactoriesLevel
        );
        const totalCost = upgradeSmartStorageCost + upgradeWarehouseCost + upgradeSmartFactoriesCost;
        const smartFactoriesMultiplier = 1 + CorpUpgradesData[UpgradeName.SMART_FACTORIES].benefit * maxAffordableSmartFactoriesLevel;
        const production = boostMaterialMultiplier * smartFactoriesMultiplier;
        const dataEntry = {
          smartStorageLevel,
          warehouseLevel,
          smartFactoriesLevel: maxAffordableSmartFactoriesLevel,
          upgradeSmartStorageCost,
          upgradeWarehouseCost,
          warehouseSize,
          totalCost,
          production,
          costPerProduction: totalCost / production,
          boostMaterials,
          boostMaterialMultiplier
        };
        if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
          priorityQueue.push(dataEntry);
        } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
          priorityQueue.pop();
          priorityQueue.push(dataEntry);
        }
      }
    }
    logger.timeEnd("StorageAndFactory benchmark");
    const data = priorityQueue.toArray();
    data.forEach((data2) => {
      logger.log(
        `{storage:${data2.smartStorageLevel}, warehouse:${data2.warehouseLevel}, factory:${data2.smartFactoriesLevel}, totalCost:${formatNumber(data2.totalCost)}, warehouseSize:${formatNumber(data2.warehouseSize)}, production:${formatNumber(data2.production)}, costPerProduction:${formatNumber(data2.costPerProduction)}, boostMaterialMultiplier:${formatNumber(data2.boostMaterialMultiplier)}, boostMaterials:${data2.boostMaterials}}`
      );
    });
    return data;
  }
  optimizeWilsonAndAdvert(industryData, currentWilsonLevel, currentAdvertLevel, currentAwareness, currentPopularity, divisionResearches, maxCost, enableLogging = false) {
    awarenessMap.clear();
    popularityMap.clear();
    if (currentWilsonLevel < 0 || currentAdvertLevel < 0) {
      throw new Error("Invalid parameter");
    }
    const logger = new Logger(enableLogging);
    const maxWilsonLevel = getMaxAffordableUpgradeLevel(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, maxCost);
    const maxAdvertLevel = getMaxAffordableAdVertLevel(currentAdvertLevel, maxCost);
    logger.log(`maxWilsonLevel: ${maxWilsonLevel}`);
    logger.log(`maxAdvertLevel: ${maxAdvertLevel}`);
    const researchAdvertisingMultiplier = getResearchAdvertisingMultiplier(divisionResearches);
    const comparator = getComparator(1 /* WILSON_ADVERT */);
    const priorityQueue = new PriorityQueue(comparator);
    logger.time("WilsonAndAdvert benchmark");
    for (let wilsonLevel = currentWilsonLevel; wilsonLevel <= maxWilsonLevel; wilsonLevel++) {
      const wilsonCost = getUpgradeCost(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, wilsonLevel);
      for (let advertLevel = currentAdvertLevel + 1; advertLevel <= maxAdvertLevel; advertLevel++) {
        const advertCost = getAdVertCost(currentAdvertLevel, advertLevel);
        const totalCost = wilsonCost + advertCost;
        if (totalCost > maxCost) {
          break;
        }
        const previousAwareness = awarenessMap.get(`${wilsonLevel}|${advertLevel - 1}`) ?? currentAwareness;
        const previousPopularity = popularityMap.get(`${wilsonLevel}|${advertLevel - 1}`) ?? currentPopularity;
        const advertisingMultiplier = (1 + CorpUpgradesData[UpgradeName.WILSON_ANALYTICS].benefit * wilsonLevel) * researchAdvertisingMultiplier;
        let awareness = (previousAwareness + 3 * advertisingMultiplier) * (1.005 * advertisingMultiplier);
        let popularity = (previousPopularity + advertisingMultiplier) * ((1 + 2 / 200) * advertisingMultiplier);
        awareness = Math.min(awareness, Number.MAX_VALUE);
        popularity = Math.min(popularity, Number.MAX_VALUE);
        awarenessMap.set(`${wilsonLevel}|${advertLevel}`, awareness);
        popularityMap.set(`${wilsonLevel}|${advertLevel}`, popularity);
        const [advertisingFactor] = getAdvertisingFactors(awareness, popularity, industryData.advertisingFactor);
        const dataEntry = {
          wilsonLevel,
          advertLevel,
          totalCost,
          popularity,
          awareness,
          ratio: popularity / awareness,
          advertisingFactor,
          costPerAdvertisingFactor: totalCost / advertisingFactor
        };
        if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
          priorityQueue.push(dataEntry);
        } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
          priorityQueue.pop();
          priorityQueue.push(dataEntry);
        }
      }
    }
    logger.timeEnd("WilsonAndAdvert benchmark");
    const data = priorityQueue.toArray();
    data.forEach((data2) => {
      logger.log(
        `{wilson:${data2.wilsonLevel}, advert:${data2.advertLevel}, totalCost:${formatNumber(data2.totalCost)}, advertisingFactor:${formatNumber(data2.advertisingFactor)}, popularity:${formatNumber(data2.popularity)}, awareness:${formatNumber(data2.awareness)}, ratio:${formatNumber(data2.ratio)}, costPerAdvertisingFactor:${formatNumber(data2.costPerAdvertisingFactor)}}`
      );
    });
    return data;
  }
  async optimizeOffice(division, industryData, operationsJob, engineerJob, managementJob, rndEmployee, nonRnDEmployees, item, useCurrentItemData, customData, sortType, comparatorCustomData, enableLogging = false, employeeJobsRequirement) {
    const salesBotUpgradeBenefit = getUpgradeBenefit(
      UpgradeName.ABC_SALES_BOTS,
      customData.corporationUpgradeLevels[UpgradeName.ABC_SALES_BOTS]
    );
    const researchSalesMultiplier = getResearchSalesMultiplier(customData.divisionResearches);
    let performanceModifier = defaultPerformanceModifierForOfficeBenchmark;
    if (customData.performanceModifier) {
      performanceModifier = customData.performanceModifier;
    }
    const operationsStep = Math.max(
      Math.floor((operationsJob.max - operationsJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const engineerStep = Math.max(
      Math.floor((engineerJob.max - engineerJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const managementStep = Math.max(
      Math.floor((managementJob.max - managementJob.min) / performanceModifier),
      minStepForOfficeBenchmark
    );
    const maxStep = Math.max(
      operationsStep,
      engineerStep,
      managementStep
    );
    const comparator = getComparator(2 /* OFFICE */, sortType, comparatorCustomData);
    const priorityQueue = new PriorityQueue(comparator);
    for (let operations = operationsJob.min; operations <= operationsJob.max; operations += maxStep) {
      for (let engineer = engineerJob.min; engineer <= engineerJob.max; engineer += maxStep) {
        for (let management = managementJob.min; management <= managementJob.max; management += maxStep) {
          if (operations + engineer === 0 || operations + engineer + management >= nonRnDEmployees) {
            continue;
          }
          let effectiveEngineer = engineer;
          let business = nonRnDEmployees - (operations + engineer + management);
          if (employeeJobsRequirement) {
            if (employeeJobsRequirement.business !== 0) {
              throw new Error(`Invalid valid of employeeJobsRequirement.business: ${employeeJobsRequirement.business}`);
            }
            effectiveEngineer += business;
            business = 0;
          }
          const dataEntry = await calculateOfficeBenchmarkData(
            division,
            industryData,
            item,
            useCurrentItemData,
            customData,
            operations,
            effectiveEngineer,
            business,
            management,
            rndEmployee,
            salesBotUpgradeBenefit,
            researchSalesMultiplier,
            enableLogging
          );
          if (priorityQueue.size() < defaultLengthOfBenchmarkDataArray) {
            priorityQueue.push(dataEntry);
          } else if (comparator(dataEntry, priorityQueue.front()) > 0) {
            priorityQueue.pop();
            priorityQueue.push(dataEntry);
          }
        }
      }
    }
    return {
      step: maxStep,
      data: priorityQueue.toArray()
    };
  }
}
comlink.expose(new CorporationOptimizer());
export {
  BenchmarkType,
  CorporationOptimizer,
  calculateOfficeBenchmarkData,
  defaultPerformanceModifierForOfficeBenchmark,
  getComparator,
  getReferenceData,
  minStepForOfficeBenchmark,
  normalizeProfit,
  normalizeProgress,
  precalculatedEmployeeRatioForProductDivisionRound3,
  precalculatedEmployeeRatioForProductDivisionRound4,
  precalculatedEmployeeRatioForProductDivisionRound5_1,
  precalculatedEmployeeRatioForProductDivisionRound5_2,
  precalculatedEmployeeRatioForProfitSetupOfRound3,
  precalculatedEmployeeRatioForProfitSetupOfRound4,
  precalculatedEmployeeRatioForSupportDivisions
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uT3B0aW1pemVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBDb3JwSW5kdXN0cnlEYXRhLCBEaXZpc2lvbiwgTWF0ZXJpYWwsIFByb2R1Y3QgfSBmcm9tIFwiQG5zXCI7XG5pbXBvcnQgKiBhcyBjb21saW5rIGZyb20gXCIvbGlicy9jb21saW5rXCI7XG5pbXBvcnQgeyBnZXRPcHRpbWFsQm9vc3RNYXRlcmlhbFF1YW50aXRpZXMsIGdldFByb2R1Y3RNYXJrdXAsIGlzUHJvZHVjdCwgTG9nZ2VyIH0gZnJvbSBcIi9jb3Jwb3JhdGlvblV0aWxzXCI7XG5pbXBvcnQge1xuICAgIENpdHlOYW1lLFxuICAgIENvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcbiAgICBEaXZpc2lvblJlc2VhcmNoZXMsXG4gICAgZm9ybWF0TnVtYmVyLFxuICAgIGdldEFkVmVydENvc3QsXG4gICAgZ2V0QWR2ZXJ0aXNpbmdGYWN0b3JzLFxuICAgIGdldEJ1c2luZXNzRmFjdG9yLFxuICAgIGdldERpdmlzaW9uUHJvZHVjdGlvbk11bHRpcGxpZXIsXG4gICAgZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uLFxuICAgIGdldEVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9icyxcbiAgICBnZXRNYXJrZXRGYWN0b3IsXG4gICAgZ2V0TWF4QWZmb3JkYWJsZUFkVmVydExldmVsLFxuICAgIGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwsXG4gICAgZ2V0TWF4QWZmb3JkYWJsZVdhcmVob3VzZUxldmVsLFxuICAgIGdldFJlc2VhcmNoQWR2ZXJ0aXNpbmdNdWx0aXBsaWVyLFxuICAgIGdldFJlc2VhcmNoUlBNdWx0aXBsaWVyLFxuICAgIGdldFJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyLFxuICAgIGdldFVwZ3JhZGVCZW5lZml0LFxuICAgIGdldFVwZ3JhZGVDb3N0LFxuICAgIGdldFVwZ3JhZGVXYXJlaG91c2VDb3N0LFxuICAgIGdldFdhcmVob3VzZVNpemUsXG4gICAgVXBncmFkZU5hbWVcbn0gZnJvbSBcIi9jb3Jwb3JhdGlvbkZvcm11bGFzXCI7XG5pbXBvcnQgeyBDb3JwTWF0ZXJpYWxzRGF0YSB9IGZyb20gXCIvZGF0YS9Db3JwTWF0ZXJpYWxzRGF0YVwiO1xuaW1wb3J0IHsgQ29ycFVwZ3JhZGVzRGF0YSB9IGZyb20gXCIvZGF0YS9Db3JwVXBncmFkZXNEYXRhXCI7XG5pbXBvcnQgeyBQcmlvcml0eVF1ZXVlIH0gZnJvbSBcIi9saWJzL3ByaW9yaXR5UXVldWVcIjtcbmltcG9ydCB7IHNjYWxlVmFsdWVUb1JhbmdlIH0gZnJvbSBcIi9saWJzL3V0aWxzXCI7XG5cbmV4cG9ydCBlbnVtIEJlbmNobWFya1R5cGUge1xuICAgIFNUT1JBR0VfRkFDVE9SWSxcbiAgICBXSUxTT05fQURWRVJULFxuICAgIE9GRklDRVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VGYWN0b3J5QmVuY2htYXJrRGF0YSB7XG4gICAgc21hcnRTdG9yYWdlTGV2ZWw6IG51bWJlcjtcbiAgICB3YXJlaG91c2VMZXZlbDogbnVtYmVyO1xuICAgIHNtYXJ0RmFjdG9yaWVzTGV2ZWw6IG51bWJlcjtcbiAgICB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdDogbnVtYmVyO1xuICAgIHVwZ3JhZGVXYXJlaG91c2VDb3N0OiBudW1iZXI7XG4gICAgd2FyZWhvdXNlU2l6ZTogbnVtYmVyO1xuICAgIHRvdGFsQ29zdDogbnVtYmVyO1xuICAgIHByb2R1Y3Rpb246IG51bWJlcjtcbiAgICBjb3N0UGVyUHJvZHVjdGlvbjogbnVtYmVyO1xuICAgIGJvb3N0TWF0ZXJpYWxzOiBudW1iZXJbXTtcbiAgICBib29zdE1hdGVyaWFsTXVsdGlwbGllcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbHNvbkFkdmVydEJlbmNobWFya0RhdGEge1xuICAgIHdpbHNvbkxldmVsOiBudW1iZXI7XG4gICAgYWR2ZXJ0TGV2ZWw6IG51bWJlcjtcbiAgICB0b3RhbENvc3Q6IG51bWJlcjtcbiAgICBwb3B1bGFyaXR5OiBudW1iZXI7XG4gICAgYXdhcmVuZXNzOiBudW1iZXI7XG4gICAgcmF0aW86IG51bWJlcjtcbiAgICBhZHZlcnRpc2luZ0ZhY3RvcjogbnVtYmVyO1xuICAgIGNvc3RQZXJBZHZlcnRpc2luZ0ZhY3RvcjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9mZmljZUJlbmNobWFya0RhdGEge1xuICAgIG9wZXJhdGlvbnM6IG51bWJlcjtcbiAgICBlbmdpbmVlcjogbnVtYmVyO1xuICAgIGJ1c2luZXNzOiBudW1iZXI7XG4gICAgbWFuYWdlbWVudDogbnVtYmVyO1xuICAgIHRvdGFsRXhwZXJpZW5jZTogbnVtYmVyO1xuICAgIHJhd1Byb2R1Y3Rpb246IG51bWJlcjtcbiAgICBtYXhTYWxlc1ZvbHVtZTogbnVtYmVyO1xuICAgIG9wdGltYWxQcmljZTogbnVtYmVyO1xuICAgIHByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzOiBudW1iZXI7XG4gICAgZXN0aW1hdGVkUlA6IG51bWJlcjtcbiAgICBwcm9kdWN0UmF0aW5nOiBudW1iZXI7XG4gICAgcHJvZHVjdE1hcmt1cDogbnVtYmVyO1xuICAgIHByb2ZpdDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBPZmZpY2VCZW5jaG1hcmtTb3J0VHlwZSA9IFwicmF3UHJvZHVjdGlvblwiIHwgXCJwcm9ncmVzc1wiIHwgXCJwcm9maXRcIiB8IFwicHJvZml0X3Byb2dyZXNzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2ZmaWNlQmVuY2htYXJrQ3VzdG9tRGF0YSB7XG4gICAgb2ZmaWNlOiB7XG4gICAgICAgIGF2Z01vcmFsZTogbnVtYmVyO1xuICAgICAgICBhdmdFbmVyZ3k6IG51bWJlcjtcbiAgICAgICAgYXZnSW50ZWxsaWdlbmNlOiBudW1iZXI7XG4gICAgICAgIGF2Z0NoYXJpc21hOiBudW1iZXI7XG4gICAgICAgIGF2Z0NyZWF0aXZpdHk6IG51bWJlcjtcbiAgICAgICAgYXZnRWZmaWNpZW5jeTogbnVtYmVyO1xuICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICB9O1xuICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzO1xuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzO1xuICAgIHBlcmZvcm1hbmNlTW9kaWZpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbXBsb3llZUpvYlJlcXVpcmVtZW50IHtcbiAgICBlbmdpbmVlcjogbnVtYmVyO1xuICAgIGJ1c2luZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGFyYXRvckN1c3RvbURhdGEge1xuICAgIHJlZmVyZW5jZURhdGE6IE9mZmljZUJlbmNobWFya0RhdGE7XG4gICAgYmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzczoge1xuICAgICAgICBwcm9maXQ6IG51bWJlcjtcbiAgICAgICAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSBCYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzID0gQ29tcGFyYXRvckN1c3RvbURhdGFbXCJiYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzXCJdO1xuXG5jb25zdCBkZWZhdWx0TWluRm9yTm9ybWFsaXphdGlvbiA9IDU7XG5jb25zdCBkZWZhdWx0TWF4Rm9yTm9ybWFsaXphdGlvbiA9IDIwMDtcbmNvbnN0IHJlZmVyZW5jZVZhbHVlTW9kaWZpZXIgPSAxMDtcblxuZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9ucyA9IHtcbiAgICBvcGVyYXRpb25zOiAwLjIyLFxuICAgIGVuZ2luZWVyOiAwLjYzMixcbiAgICBidXNpbmVzczogMCxcbiAgICBtYW5hZ2VtZW50OiAwLjE0OFxufTtcblxuLy8gZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kMyA9IHtcbi8vICAgICBvcGVyYXRpb25zOiA1MCAvIDE3NCwgLy8gMC4yODczNTYzMjE4MzkwODA0NTk3NzAxMTQ5NDI1Mjg3NFxuLy8gICAgIGVuZ2luZWVyOiA2IC8gMTc0LCAvLyAwLjAzNDQ4Mjc1ODYyMDY4OTY1NTE3MjQxMzc5MzEwMzQ1XG4vLyAgICAgYnVzaW5lc3M6IDgyIC8gMTc0LCAvLyAwLjQ3MTI2NDM2NzgxNjA5MTk1NDAyMjk4ODUwNTc0NzEzXG4vLyAgICAgbWFuYWdlbWVudDogMzYgLyAxNzQgLy8gMC4yMDY4OTY1NTE3MjQxMzc5MzEwMzQ0ODI3NTg2MjA2OVxuLy8gfTtcbi8vXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQ0ID0ge1xuLy8gICAgIG9wZXJhdGlvbnM6IDgwIC8gNDQxLCAvLyAwLjE4MTQwNTg5NTY5MTYwOTk3NzMyNDI2MzAzODU0ODc1XG4vLyAgICAgZW5naW5lZXI6IDE0IC8gNDQxLCAvLyAwLjAzMTc0NjAzMTc0NjAzMTc0NjAzMTc0NjAzMTc0NjAzXG4vLyAgICAgYnVzaW5lc3M6IDI5NCAvIDQ0MSwgLy8gMC42NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2N1xuLy8gICAgIG1hbmFnZW1lbnQ6IDUzIC8gNDQxIC8vIDAuMTIwMTgxNDA1ODk1NjkxNjA5OTc3MzI0MjYzMDM4NTVcbi8vIH07XG5cbi8qXG4xMHRcbiAqL1xuZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kMyA9IHtcbiAgICBvcGVyYXRpb25zOiA0OSAvIDEzOCwgLy8gMC4zNTUwNzI0NjM3NjgxMTU5NDIwMjg5ODU1MDcyNDYzOFxuICAgIGVuZ2luZWVyOiA1IC8gMTM4LCAvLyAwLjAzNjIzMTg4NDA1Nzk3MTAxNDQ5Mjc1MzYyMzE4ODQxXG4gICAgYnVzaW5lc3M6IDUxIC8gMTM4LCAvLyAwLjM2OTU2NTIxNzM5MTMwNDM0NzgyNjA4Njk1NjUyMTc0XG4gICAgbWFuYWdlbWVudDogMzMgLyAxMzggLy8gMC4yMzkxMzA0MzQ3ODI2MDg2OTU2NTIxNzM5MTMwNDM0OFxufTtcblxuZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kNCA9IHtcbiAgICBvcGVyYXRpb25zOiA2OCAvIDM2OSwgLy8gMC4xODQyODE4NDI4MTg0MjgxODQyODE4NDI4MTg0MjgxOFxuICAgIGVuZ2luZWVyOiAxMiAvIDM2OSwgLy8gMC4wMzI1MjAzMjUyMDMyNTIwMzI1MjAzMjUyMDMyNTIwM1xuICAgIGJ1c2luZXNzOiAyNDQgLyAzNjksIC8vIDAuNjYxMjQ2NjEyNDY2MTI0NjYxMjQ2NjEyNDY2MTI0NjZcbiAgICBtYW5hZ2VtZW50OiA0NSAvIDM2OSAvLyAwLjEyMTk1MTIxOTUxMjE5NTEyMTk1MTIxOTUxMjE5NTEyXG59O1xuXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDMgPSB7XG4vLyAgICAgb3BlcmF0aW9uczogMC4wMjksXG4vLyAgICAgZW5naW5lZXI6IDAuNTIzLFxuLy8gICAgIGJ1c2luZXNzOiAwLjAwNixcbi8vICAgICBtYW5hZ2VtZW50OiAwLjQ0M1xuLy8gfTtcbi8vXG4vLyBleHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDQgPSB7XG4vLyAgICAgb3BlcmF0aW9uczogMC4wMjksXG4vLyAgICAgZW5naW5lZXI6IDAuNTI0LFxuLy8gICAgIGJ1c2luZXNzOiAwLjAxLFxuLy8gICAgIG1hbmFnZW1lbnQ6IDAuNDM2XG4vLyB9O1xuLy9cbi8vIGV4cG9ydCBjb25zdCBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8xID0ge1xuLy8gICAgIG9wZXJhdGlvbnM6IDAuMDMyLFxuLy8gICAgIGVuZ2luZWVyOiAwLjQ2NCxcbi8vICAgICBidXNpbmVzczogMC4wNjcsXG4vLyAgICAgbWFuYWdlbWVudDogMC40Mzdcbi8vIH07XG4vL1xuLy8gZXhwb3J0IGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQ1XzIgPSB7XG4vLyAgICAgb3BlcmF0aW9uczogMC4wODQsXG4vLyAgICAgZW5naW5lZXI6IDAuMjYwLFxuLy8gICAgIGJ1c2luZXNzOiAwLjM3OSxcbi8vICAgICBtYW5hZ2VtZW50OiAwLjI3N1xuLy8gfTtcblxuLypcbjEwdFxuICovXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDMgPSB7XG4gICAgb3BlcmF0aW9uczogMC4wMzcsXG4gICAgZW5naW5lZXI6IDAuNTEzLFxuICAgIGJ1c2luZXNzOiAwLjAxMSxcbiAgICBtYW5hZ2VtZW50OiAwLjQ0XG59O1xuXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDQgPSB7XG4gICAgb3BlcmF0aW9uczogMC4wMyxcbiAgICBlbmdpbmVlcjogMC41MzEsXG4gICAgYnVzaW5lc3M6IDAuMDAzLFxuICAgIG1hbmFnZW1lbnQ6IDAuNDM2XG59O1xuXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMSA9IHtcbiAgICBvcGVyYXRpb25zOiAwLjAzMixcbiAgICBlbmdpbmVlcjogMC40NjIsXG4gICAgYnVzaW5lc3M6IDAuMDY3LFxuICAgIG1hbmFnZW1lbnQ6IDAuNDM5XG59O1xuXG5leHBvcnQgY29uc3QgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMiA9IHtcbiAgICBvcGVyYXRpb25zOiAwLjA2NCxcbiAgICBlbmdpbmVlcjogMC4zMTcsXG4gICAgYnVzaW5lc3M6IDAuMjk4LFxuICAgIG1hbmFnZW1lbnQ6IDAuMzIxXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlRGF0YShcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxuICAgIG5vblJuREVtcGxveWVlczogbnVtYmVyLFxuICAgIGl0ZW06IE1hdGVyaWFsIHwgUHJvZHVjdCxcbiAgICB1c2VDdXJyZW50SXRlbURhdGE6IGJvb2xlYW4sXG4gICAgY3VzdG9tRGF0YTogT2ZmaWNlQmVuY2htYXJrQ3VzdG9tRGF0YVxuKTogUHJvbWlzZTxPZmZpY2VCZW5jaG1hcmtEYXRhPiB7XG4gICAgY29uc3Qgb3BlcmF0aW9ucyA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogMC4wMzEpO1xuICAgIGNvbnN0IGVuZ2luZWVyID0gTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiAwLjQ4OSk7XG4gICAgY29uc3QgYnVzaW5lc3MgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIDAuMDY3KTtcbiAgICBjb25zdCBtYW5hZ2VtZW50ID0gbm9uUm5ERW1wbG95ZWVzIC0gKG9wZXJhdGlvbnMgKyBlbmdpbmVlciArIGJ1c2luZXNzKTtcbiAgICByZXR1cm4gYXdhaXQgY2FsY3VsYXRlT2ZmaWNlQmVuY2htYXJrRGF0YShcbiAgICAgICAgZGl2aXNpb24sXG4gICAgICAgIGluZHVzdHJ5RGF0YSxcbiAgICAgICAgaXRlbSxcbiAgICAgICAgdXNlQ3VycmVudEl0ZW1EYXRhLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICBvcGVyYXRpb25zLFxuICAgICAgICBlbmdpbmVlcixcbiAgICAgICAgYnVzaW5lc3MsXG4gICAgICAgIG1hbmFnZW1lbnQsXG4gICAgICAgIDAsXG4gICAgICAgIGdldFVwZ3JhZGVCZW5lZml0KFxuICAgICAgICAgICAgVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFMsXG4gICAgICAgICAgICBjdXN0b21EYXRhLmNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UU11cbiAgICAgICAgKSxcbiAgICAgICAgZ2V0UmVzZWFyY2hTYWxlc011bHRpcGxpZXIoY3VzdG9tRGF0YS5kaXZpc2lvblJlc2VhcmNoZXMpLFxuICAgICAgICBmYWxzZVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVQcm9maXQocHJvZml0OiBudW1iZXIsIHJlZmVyZW5jZVZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBzY2FsZVZhbHVlVG9SYW5nZShcbiAgICAgICAgcHJvZml0LFxuICAgICAgICByZWZlcmVuY2VWYWx1ZSAvIHJlZmVyZW5jZVZhbHVlTW9kaWZpZXIsXG4gICAgICAgIHJlZmVyZW5jZVZhbHVlICogcmVmZXJlbmNlVmFsdWVNb2RpZmllcixcbiAgICAgICAgZGVmYXVsdE1pbkZvck5vcm1hbGl6YXRpb24sXG4gICAgICAgIGRlZmF1bHRNYXhGb3JOb3JtYWxpemF0aW9uXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVByb2dyZXNzKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBzY2FsZVZhbHVlVG9SYW5nZShwcm9ncmVzcywgMCwgMTAwLCBkZWZhdWx0TWluRm9yTm9ybWFsaXphdGlvbiwgZGVmYXVsdE1heEZvck5vcm1hbGl6YXRpb24pO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBhcmF0b3IoYmVuY2htYXJrVHlwZTogQmVuY2htYXJrVHlwZSwgc29ydFR5cGU/OiBzdHJpbmcsIGN1c3RvbURhdGE/OiBDb21wYXJhdG9yQ3VzdG9tRGF0YSk6IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyIHtcbiAgICBzd2l0Y2ggKGJlbmNobWFya1R5cGUpIHtcbiAgICAgICAgY2FzZSBCZW5jaG1hcmtUeXBlLlNUT1JBR0VfRkFDVE9SWTpcbiAgICAgICAgICAgIHJldHVybiAoYTogU3RvcmFnZUZhY3RvcnlCZW5jaG1hcmtEYXRhLCBiOiBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWEgfHwgIWIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLnByb2R1Y3Rpb24gIT09IGIucHJvZHVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcm9kdWN0aW9uIC0gYi5wcm9kdWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYi50b3RhbENvc3QgLSBhLnRvdGFsQ29zdDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgQmVuY2htYXJrVHlwZS5XSUxTT05fQURWRVJUOlxuICAgICAgICAgICAgcmV0dXJuIChhOiBXaWxzb25BZHZlcnRCZW5jaG1hcmtEYXRhLCBiOiBXaWxzb25BZHZlcnRCZW5jaG1hcmtEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhIHx8ICFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IFwidG90YWxDb3N0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudG90YWxDb3N0IC0gYS50b3RhbENvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhLmFkdmVydGlzaW5nRmFjdG9yICE9PSBiLmFkdmVydGlzaW5nRmFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmFkdmVydGlzaW5nRmFjdG9yIC0gYi5hZHZlcnRpc2luZ0ZhY3RvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudG90YWxDb3N0IC0gYS50b3RhbENvc3Q7XG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIEJlbmNobWFya1R5cGUuT0ZGSUNFOlxuICAgICAgICAgICAgcmV0dXJuIChhOiBPZmZpY2VCZW5jaG1hcmtEYXRhLCBiOiBPZmZpY2VCZW5jaG1hcmtEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhIHx8ICFiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS50b3RhbEV4cGVyaWVuY2UgIT09IGIudG90YWxFeHBlcmllbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnRvdGFsRXhwZXJpZW5jZSAtIGIudG90YWxFeHBlcmllbmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IFwicmF3UHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJhd1Byb2R1Y3Rpb24gLSBiLnJhd1Byb2R1Y3Rpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzb3J0VHlwZSA9PT0gXCJwcm9ncmVzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzIC0gYi5wcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRUeXBlID09PSBcInByb2ZpdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnByb2ZpdCAtIGIucHJvZml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWN1c3RvbURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGN1c3RvbSBkYXRhYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm9maXRPZkEgPSBub3JtYWxpemVQcm9maXQoYS5wcm9maXQsIGN1c3RvbURhdGEucmVmZXJlbmNlRGF0YS5wcm9maXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm9ncmVzc09mQSA9IG5vcm1hbGl6ZVByb2dyZXNzKE1hdGguY2VpbCgxMDAgLyBhLnByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzKSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb2ZpdE9mQiA9IG5vcm1hbGl6ZVByb2ZpdChiLnByb2ZpdCwgY3VzdG9tRGF0YS5yZWZlcmVuY2VEYXRhLnByb2ZpdCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByb2dyZXNzT2ZCID0gbm9ybWFsaXplUHJvZ3Jlc3MoTWF0aC5jZWlsKDEwMCAvIGIucHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3MpKTtcbiAgICAgICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShub3JtYWxpemVkUHJvZml0T2ZBKSB8fCAhTnVtYmVyLmlzRmluaXRlKG5vcm1hbGl6ZWRQcm9maXRPZkIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBJbnZhbGlkIHByb2ZpdDogYS5wcm9maXQ6ICR7YS5wcm9maXQudG9FeHBvbmVudGlhbCgpfSwgYi5wcm9maXQ6ICR7Yi5wcm9maXQudG9FeHBvbmVudGlhbCgpfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYCwgcmVmZXJlbmNlRGF0YS5wcm9maXQ6ICR7Y3VzdG9tRGF0YS5yZWZlcmVuY2VEYXRhLnByb2ZpdC50b0V4cG9uZW50aWFsKCl9YFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc29ydFR5cGUgPT09IFwicHJvZml0X3Byb2dyZXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjdXN0b21EYXRhLmJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MucHJvZml0ICogbm9ybWFsaXplZFByb2ZpdE9mQVxuICAgICAgICAgICAgICAgICAgICAgICAgLSBjdXN0b21EYXRhLmJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MucHJvZ3Jlc3MgKiBub3JtYWxpemVkUHJvZ3Jlc3NPZkEpXG4gICAgICAgICAgICAgICAgICAgICAgICAtIChjdXN0b21EYXRhLmJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MucHJvZml0ICogbm9ybWFsaXplZFByb2ZpdE9mQlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gY3VzdG9tRGF0YS5iYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzLnByb2dyZXNzICogbm9ybWFsaXplZFByb2dyZXNzT2ZCKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNvcnQgdHlwZTogJHtzb3J0VHlwZX1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYmVuY2htYXJrIHR5cGVgKTtcbiAgICB9XG59XG5cbmNvbnN0IGF3YXJlbmVzc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5jb25zdCBwb3B1bGFyaXR5TWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuY29uc3QgZGVmYXVsdExlbmd0aE9mQmVuY2htYXJrRGF0YUFycmF5ID0gMTA7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0UGVyZm9ybWFuY2VNb2RpZmllckZvck9mZmljZUJlbmNobWFyayA9IDQwO1xuZXhwb3J0IGNvbnN0IG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmsgPSAyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlT2ZmaWNlQmVuY2htYXJrRGF0YShcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxuICAgIGl0ZW06IE1hdGVyaWFsIHwgUHJvZHVjdCxcbiAgICB1c2VDdXJyZW50SXRlbURhdGE6IGJvb2xlYW4sXG4gICAgY3VzdG9tRGF0YToge1xuICAgICAgICBvZmZpY2U6IHtcbiAgICAgICAgICAgIGF2Z01vcmFsZTogbnVtYmVyO1xuICAgICAgICAgICAgYXZnRW5lcmd5OiBudW1iZXI7XG4gICAgICAgICAgICBhdmdJbnRlbGxpZ2VuY2U6IG51bWJlcjtcbiAgICAgICAgICAgIGF2Z0NoYXJpc21hOiBudW1iZXI7XG4gICAgICAgICAgICBhdmdDcmVhdGl2aXR5OiBudW1iZXI7XG4gICAgICAgICAgICBhdmdFZmZpY2llbmN5OiBudW1iZXI7XG4gICAgICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICAgICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzOiBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM7XG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzO1xuICAgICAgICBzdGVwPzogbnVtYmVyO1xuICAgIH0sXG4gICAgb3BlcmF0aW9uczogbnVtYmVyLFxuICAgIGVuZ2luZWVyOiBudW1iZXIsXG4gICAgYnVzaW5lc3M6IG51bWJlcixcbiAgICBtYW5hZ2VtZW50OiBudW1iZXIsXG4gICAgcm5kOiBudW1iZXIsXG4gICAgc2FsZXNCb3RVcGdyYWRlQmVuZWZpdDogbnVtYmVyLFxuICAgIHJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyOiBudW1iZXIsXG4gICAgZW5hYmxlTG9nZ2luZyA9IGZhbHNlXG4pOiBQcm9taXNlPE9mZmljZUJlbmNobWFya0RhdGE+IHtcbiAgICBjb25zdCBpdGVtSXNQcm9kdWN0ID0gaXNQcm9kdWN0KGl0ZW0pO1xuICAgIGNvbnN0IGVtcGxveWVlc1Byb2R1Y3Rpb24gPSBnZXRFbXBsb3llZVByb2R1Y3Rpb25CeUpvYnMoXG4gICAgICAgIHtcbiAgICAgICAgICAgIGF2Z0ludGVsbGlnZW5jZTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnSW50ZWxsaWdlbmNlLFxuICAgICAgICAgICAgYXZnQ2hhcmlzbWE6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0NoYXJpc21hLFxuICAgICAgICAgICAgYXZnQ3JlYXRpdml0eTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnQ3JlYXRpdml0eSxcbiAgICAgICAgICAgIGF2Z0VmZmljaWVuY3k6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z0VmZmljaWVuY3ksXG4gICAgICAgICAgICBhdmdNb3JhbGU6IGN1c3RvbURhdGEub2ZmaWNlLmF2Z01vcmFsZSxcbiAgICAgICAgICAgIGF2Z0VuZXJneTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnRW5lcmd5LFxuICAgICAgICAgICAgdG90YWxFeHBlcmllbmNlOiBjdXN0b21EYXRhLm9mZmljZS50b3RhbEV4cGVyaWVuY2UsXG4gICAgICAgICAgICBlbXBsb3llZUpvYnM6IHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb25zOiBvcGVyYXRpb25zLFxuICAgICAgICAgICAgICAgIGVuZ2luZWVyOiBlbmdpbmVlcixcbiAgICAgICAgICAgICAgICBidXNpbmVzczogYnVzaW5lc3MsXG4gICAgICAgICAgICAgICAgbWFuYWdlbWVudDogbWFuYWdlbWVudCxcbiAgICAgICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50OiBybmQsXG4gICAgICAgICAgICAgICAgaW50ZXJuOiAwLFxuICAgICAgICAgICAgICAgIHVuYXNzaWduZWQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tRGF0YS5jb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMsXG4gICAgICAgIGN1c3RvbURhdGEuZGl2aXNpb25SZXNlYXJjaGVzXG4gICAgKTtcbiAgICBjb25zdCByYXdQcm9kdWN0aW9uID0gZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uKFxuICAgICAgICBpdGVtSXNQcm9kdWN0LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvbixcbiAgICAgICAgICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogZW1wbG95ZWVzUHJvZHVjdGlvbi5lbmdpbmVlclByb2R1Y3Rpb24sXG4gICAgICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAgZGl2aXNpb24ucHJvZHVjdGlvbk11bHQsXG4gICAgICAgIGN1c3RvbURhdGEuY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxuICAgICAgICBjdXN0b21EYXRhLmRpdmlzaW9uUmVzZWFyY2hlc1xuICAgICk7XG5cbiAgICBsZXQgcHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3MgPSAwO1xuICAgIGxldCBlc3RpbWF0ZWRSUCA9IDA7XG4gICAgbGV0IHByb2R1Y3RFZmZlY3RpdmVSYXRpbmcgPSAwO1xuICAgIGxldCBwcm9kdWN0TWFya3VwID0gMDtcbiAgICBsZXQgZGVtYW5kOiBudW1iZXI7XG4gICAgbGV0IGNvbXBldGl0aW9uOiBudW1iZXI7XG5cbiAgICBsZXQgaXRlbU11bHRpcGxpZXI6IG51bWJlcjtcbiAgICBsZXQgbWFya3VwTGltaXQ6IG51bWJlcjtcbiAgICBsZXQgbWFya2V0UHJpY2U6IG51bWJlcjtcblxuICAgIGlmIChpdGVtSXNQcm9kdWN0KSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBwcm9ncmVzc1xuICAgICAgICBjb25zdCB0b3RhbFByb2R1Y3Rpb25Gb3JQcm9kdWN0RGV2ID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxuICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvblxuICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLm1hbmFnZW1lbnRQcm9kdWN0aW9uO1xuICAgICAgICBjb25zdCBtYW5hZ2VtZW50RmFjdG9yID0gMSArIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb24gLyAoMS4yICogdG90YWxQcm9kdWN0aW9uRm9yUHJvZHVjdERldik7XG4gICAgICAgIHByb2R1Y3REZXZlbG9wbWVudFByb2dyZXNzID0gMC4wMSAqIChcbiAgICAgICAgICAgIE1hdGgucG93KGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uLCAwLjM0KVxuICAgICAgICAgICAgKyBNYXRoLnBvdyhlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uLCAwLjIpXG4gICAgICAgIClcbiAgICAgICAgICAgICogbWFuYWdlbWVudEZhY3RvcjtcblxuICAgICAgICBpZiAoIXVzZUN1cnJlbnRJdGVtRGF0YSkge1xuICAgICAgICAgICAgLy8gRXN0aW1hdGUgUlAgZ2FpblxuICAgICAgICAgICAgY29uc3QgY3ljbGVzID0gMTAwIC8gcHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3M7XG4gICAgICAgICAgICBjb25zdCBlbXBsb3llZXNQcm9kdWN0aW9uSW5TdXBwb3J0Q2l0aWVzID0gZ2V0RW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JzKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV1c2UgZW1wbG95ZWVzJyBzdGF0cyBvZiBtYWluIG9mZmljZS4gVGhpcyBpcyBmaW5lIGJlY2F1c2Ugd2Ugb25seSBjYWxjdWxhdGUgdGhlIGVzdGltYXRlZCB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHRoZSBleGFjdCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgYXZnSW50ZWxsaWdlbmNlOiBjdXN0b21EYXRhLm9mZmljZS5hdmdJbnRlbGxpZ2VuY2UsXG4gICAgICAgICAgICAgICAgICAgIGF2Z0NoYXJpc21hOiBjdXN0b21EYXRhLm9mZmljZS5hdmdDaGFyaXNtYSxcbiAgICAgICAgICAgICAgICAgICAgYXZnQ3JlYXRpdml0eTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnQ3JlYXRpdml0eSxcbiAgICAgICAgICAgICAgICAgICAgYXZnRWZmaWNpZW5jeTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnRWZmaWNpZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgYXZnTW9yYWxlOiBjdXN0b21EYXRhLm9mZmljZS5hdmdNb3JhbGUsXG4gICAgICAgICAgICAgICAgICAgIGF2Z0VuZXJneTogY3VzdG9tRGF0YS5vZmZpY2UuYXZnRW5lcmd5LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IGN1c3RvbURhdGEub2ZmaWNlLnRvdGFsRXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVKb2JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25zOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5naW5lZXI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzczogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZW1lbnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50OiBvcGVyYXRpb25zICsgZW5naW5lZXIgKyBidXNpbmVzcyArIG1hbmFnZW1lbnQgLSA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgdW5hc3NpZ25lZDogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjdXN0b21EYXRhLmNvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcbiAgICAgICAgICAgICAgICBjdXN0b21EYXRhLmRpdmlzaW9uUmVzZWFyY2hlc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2VhcmNoUG9pbnRHYWluUGVyQ3ljbGUgPVxuICAgICAgICAgICAgICAgIDUgLy8gNSBzdXBwb3J0IGNpdGllc1xuICAgICAgICAgICAgICAgICogNCAqIDAuMDA0ICogTWF0aC5wb3coZW1wbG95ZWVzUHJvZHVjdGlvbkluU3VwcG9ydENpdGllcy5yZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbiwgMC41KVxuICAgICAgICAgICAgICAgICogZ2V0VXBncmFkZUJlbmVmaXQoVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hULCBjdXN0b21EYXRhLmNvcnBvcmF0aW9uVXBncmFkZUxldmVsc1tVcGdyYWRlTmFtZS5QUk9KRUNUX0lOU0lHSFRdKVxuICAgICAgICAgICAgICAgICogZ2V0UmVzZWFyY2hSUE11bHRpcGxpZXIoY3VzdG9tRGF0YS5kaXZpc2lvblJlc2VhcmNoZXMpO1xuICAgICAgICAgICAgZXN0aW1hdGVkUlAgPSBkaXZpc2lvbi5yZXNlYXJjaFBvaW50cyArIHJlc2VhcmNoUG9pbnRHYWluUGVyQ3ljbGUgKiBjeWNsZXM7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwcm9kdWN0LnN0YXRzXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0U3RhdHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7XG4gICAgICAgICAgICAgICAgcXVhbGl0eTogMCxcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZTogMCxcbiAgICAgICAgICAgICAgICBkdXJhYmlsaXR5OiAwLFxuICAgICAgICAgICAgICAgIHJlbGlhYmlsaXR5OiAwLFxuICAgICAgICAgICAgICAgIGFlc3RoZXRpY3M6IDAsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gSWYgd2UgYXNzdW1lIHRoYXQgb2ZmaWNlIHNldHVwIGRvZXMgbm90IGNoYW5nZSwgd2UgY2FuIHVzZSBlbXBsb3llZXNQcm9kdWN0aW9uIGluc3RlYWQgb2YgY3JlYXRpb25Kb2JGYWN0b3JzXG4gICAgICAgICAgICBjb25zdCB0b3RhbFByb2R1Y3Rpb24gPVxuICAgICAgICAgICAgICAgIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLm1hbmFnZW1lbnRQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyBlbXBsb3llZXNQcm9kdWN0aW9uLmJ1c2luZXNzUHJvZHVjdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgZW5naW5lZXJSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uIC8gdG90YWxQcm9kdWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudFJhdGlvID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvbiAvIHRvdGFsUHJvZHVjdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb24gLyB0b3RhbFByb2R1Y3Rpb247XG4gICAgICAgICAgICBjb25zdCBvcGVyYXRpb25zUmF0aW8gPSBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uIC8gdG90YWxQcm9kdWN0aW9uO1xuICAgICAgICAgICAgY29uc3QgYnVzaW5lc3NSYXRpbyA9IGVtcGxveWVlc1Byb2R1Y3Rpb24uYnVzaW5lc3NQcm9kdWN0aW9uIC8gdG90YWxQcm9kdWN0aW9uO1xuICAgICAgICAgICAgLy8gUmV1c2UgZGVzaWduSW52ZXN0bWVudCBvZiBsYXRlc3QgcHJvZHVjdFxuICAgICAgICAgICAgY29uc3QgZGVzaWduSW52ZXN0bWVudE11bHRpcGxpZXIgPSAxICsgKE1hdGgucG93KGl0ZW0uZGVzaWduSW52ZXN0bWVudCwgMC4xKSkgLyAxMDA7XG4gICAgICAgICAgICBjb25zdCBzY2llbmNlTXVsdGlwbGllciA9IDEgKyAoTWF0aC5wb3coZXN0aW1hdGVkUlAsIGluZHVzdHJ5RGF0YS5zY2llbmNlRmFjdG9yISkpIC8gODAwO1xuICAgICAgICAgICAgY29uc3QgYmFsYW5jZU11bHRpcGxpZXIgPVxuICAgICAgICAgICAgICAgIDEuMiAqIGVuZ2luZWVyUmF0aW9cbiAgICAgICAgICAgICAgICArIDAuOSAqIG1hbmFnZW1lbnRSYXRpb1xuICAgICAgICAgICAgICAgICsgMS4zICogcmVzZWFyY2hBbmREZXZlbG9wbWVudFJhdGlvXG4gICAgICAgICAgICAgICAgKyAxLjUgKiBvcGVyYXRpb25zUmF0aW9cbiAgICAgICAgICAgICAgICArIGJ1c2luZXNzUmF0aW87XG4gICAgICAgICAgICBjb25zdCB0b3RhbE11bHRpcGxpZXIgPSBiYWxhbmNlTXVsdGlwbGllciAqIGRlc2lnbkludmVzdG1lbnRNdWx0aXBsaWVyICogc2NpZW5jZU11bHRpcGxpZXI7XG4gICAgICAgICAgICBwcm9kdWN0U3RhdHMucXVhbGl0eSA9IHRvdGFsTXVsdGlwbGllciAqIChcbiAgICAgICAgICAgICAgICAwLjEgKiBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uYnVzaW5lc3NQcm9kdWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvZHVjdFN0YXRzLnBlcmZvcm1hbmNlID0gdG90YWxNdWx0aXBsaWVyICogKFxuICAgICAgICAgICAgICAgIDAuMTUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDIgKiBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uYnVzaW5lc3NQcm9kdWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvZHVjdFN0YXRzLmR1cmFiaWxpdHkgPSB0b3RhbE11bHRpcGxpZXIgKiAoXG4gICAgICAgICAgICAgICAgMC4wNSAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjA1ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9kdWN0U3RhdHMucmVsaWFiaWxpdHkgPSB0b3RhbE11bHRpcGxpZXIgKiAoXG4gICAgICAgICAgICAgICAgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjA4ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjA4ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9kdWN0U3RhdHMuYWVzdGhldGljcyA9IHRvdGFsTXVsdGlwbGllciAqIChcbiAgICAgICAgICAgICAgICArMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjAyICogZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4xICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9kdWN0U3RhdHMuZmVhdHVyZXMgPSB0b3RhbE11bHRpcGxpZXIgKiAoXG4gICAgICAgICAgICAgICAgMC4wOCAqIGVtcGxveWVlc1Byb2R1Y3Rpb24uZW5naW5lZXJQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjA1ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5tYW5hZ2VtZW50UHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICsgMC4wMiAqIGVtcGxveWVlc1Byb2R1Y3Rpb24ucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICArIDAuMDUgKiBlbXBsb3llZXNQcm9kdWN0aW9uLm9wZXJhdGlvbnNQcm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgKyAwLjA1ICogZW1wbG95ZWVzUHJvZHVjdGlvbi5idXNpbmVzc1Byb2R1Y3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwcm9kdWN0LnJhdGluZ1xuICAgICAgICAgICAgbGV0IHByb2R1Y3RSYXRpbmcgPSAwO1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0cyA9IGluZHVzdHJ5RGF0YS5wcm9kdWN0IS5yYXRpbmdXZWlnaHRzO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbc3RhdE5hbWUsIGNvZWZmaWNpZW50XSBvZiBPYmplY3QuZW50cmllcyh3ZWlnaHRzKSkge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RSYXRpbmcgKz0gcHJvZHVjdFN0YXRzW3N0YXROYW1lXSAqIGNvZWZmaWNpZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBhc3N1bWUgdGhhdCBpbnB1dCBtYXRlcmlhbHMnIGF2ZXJhZ2UgcXVhbGl0eSBpcyBoaWdoIGVub3VnaCwgd2UgY2FuIHVzZSBwcm9kdWN0UmF0aW5nXG4gICAgICAgICAgICAvLyBkaXJlY3RseSBpbnN0ZWFkIG9mIGhhdmluZyB0byBjYWxjdWxhdGUgZWZmZWN0aXZlUmF0aW5nLiBDYWxjdWxhdGluZyBlZmZlY3RpdmVSYXRpbmcgaXMgbm90IGltcG9ydGFudFxuICAgICAgICAgICAgLy8gaGVyZSBiZWNhdXNlIHdlIG9ubHkgd2FudCB0byBrbm93IHRoZSByZWxhdGl2ZSBkaWZmZXJlbmNlIGJldHdlZW4gZGlmZmVyZW50IG9mZmljZSBzZXR1cHMuXG4gICAgICAgICAgICBwcm9kdWN0RWZmZWN0aXZlUmF0aW5nID0gcHJvZHVjdFJhdGluZztcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHByb2R1Y3QubWFya3VwXG4gICAgICAgICAgICAvLyBSZXVzZSBhZHZlcnRpc2luZ0ludmVzdG1lbnQgb2YgbGF0ZXN0IHByb2R1Y3RcbiAgICAgICAgICAgIGNvbnN0IGFkdmVydGlzaW5nSW52ZXN0bWVudE11bHRpcGxpZXIgPSAxICsgKE1hdGgucG93KGl0ZW0uYWR2ZXJ0aXNpbmdJbnZlc3RtZW50LCAwLjEpKSAvIDEwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ1c2luZXNzTWFuYWdlbWVudFJhdGlvID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgYnVzaW5lc3NSYXRpbyArIG1hbmFnZW1lbnRSYXRpbyxcbiAgICAgICAgICAgICAgICAxIC8gdG90YWxQcm9kdWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvZHVjdE1hcmt1cCA9IDEwMCAvIChcbiAgICAgICAgICAgICAgICBhZHZlcnRpc2luZ0ludmVzdG1lbnRNdWx0aXBsaWVyICogTWF0aC5wb3cocHJvZHVjdFN0YXRzLnF1YWxpdHkgKyAwLjAwMSwgMC42NSkgKiBidXNpbmVzc01hbmFnZW1lbnRSYXRpb1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGRlbWFuZC9jb21wZXRpdGlvblxuICAgICAgICAgICAgZGVtYW5kID0gZGl2aXNpb24uYXdhcmVuZXNzID09PSAwXG4gICAgICAgICAgICAgICAgPyAyMFxuICAgICAgICAgICAgICAgIDogTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0aXNpbmdJbnZlc3RtZW50TXVsdGlwbGllciAqICgxMDAgKiAoZGl2aXNpb24ucG9wdWxhcml0eSAvIGRpdmlzaW9uLmF3YXJlbmVzcykpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIEhhcmQtY29kZWQgdmFsdWUgb2YgZ2V0UmFuZG9tSW50KDAsIDcwKS4gV2UgZG9uJ3Qgd2FudCBSTkcgaGVyZS5cbiAgICAgICAgICAgIGNvbXBldGl0aW9uID0gMzU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0RWZmZWN0aXZlUmF0aW5nID0gaXRlbS5lZmZlY3RpdmVSYXRpbmc7XG4gICAgICAgICAgICBwcm9kdWN0TWFya3VwID0gYXdhaXQgZ2V0UHJvZHVjdE1hcmt1cChcbiAgICAgICAgICAgICAgICBkaXZpc2lvbixcbiAgICAgICAgICAgICAgICBpbmR1c3RyeURhdGEsXG4gICAgICAgICAgICAgICAgQ2l0eU5hbWUuU2VjdG9yMTIsXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGVtYW5kIHx8ICFpdGVtLmNvbXBldGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbmVlZCB0byB1bmxvY2sgXCJNYXJrZXQgUmVzZWFyY2ggLSBEZW1hbmRcIiBhbmQgXCJNYXJrZXQgRGF0YSAtIENvbXBldGl0aW9uXCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbWFuZCA9IGl0ZW0uZGVtYW5kO1xuICAgICAgICAgICAgY29tcGV0aXRpb24gPSBpdGVtLmNvbXBldGl0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSAwLjUgKiBNYXRoLnBvdyhwcm9kdWN0RWZmZWN0aXZlUmF0aW5nLCAwLjY1KTtcbiAgICAgICAgbWFya3VwTGltaXQgPSBNYXRoLm1heChwcm9kdWN0RWZmZWN0aXZlUmF0aW5nLCAwLjAwMSkgLyBwcm9kdWN0TWFya3VwO1xuICAgICAgICAvLyBSZXVzZSBtYXJrZXRQcmljZSBvZiBsYXRlc3QgcHJvZHVjdC4gcHJvZHVjdGlvbkNvc3Qgb25seSBkZXBlbmRzIG9uIGlucHV0IG1hdGVyaWFscycgbWFya2V0XG4gICAgICAgIC8vIHByaWNlIGFuZCBjb2VmZmljaWVudC5cbiAgICAgICAgbWFya2V0UHJpY2UgPSBpdGVtLnByb2R1Y3Rpb25Db3N0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaXRlbS5kZW1hbmQgfHwgIWl0ZW0uY29tcGV0aXRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG5lZWQgdG8gdW5sb2NrIFwiTWFya2V0IFJlc2VhcmNoIC0gRGVtYW5kXCIgYW5kIFwiTWFya2V0IERhdGEgLSBDb21wZXRpdGlvblwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVtYW5kID0gaXRlbS5kZW1hbmQ7XG4gICAgICAgIGNvbXBldGl0aW9uID0gaXRlbS5jb21wZXRpdGlvbjtcbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSBpdGVtLnF1YWxpdHkgKyAwLjAwMTtcbiAgICAgICAgbWFya3VwTGltaXQgPSBpdGVtLnF1YWxpdHkgLyBDb3JwTWF0ZXJpYWxzRGF0YVtpdGVtLm5hbWVdLmJhc2VNYXJrdXA7XG4gICAgICAgIG1hcmtldFByaWNlID0gaXRlbS5tYXJrZXRQcmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZXRGYWN0b3IgPSBnZXRNYXJrZXRGYWN0b3IoZGVtYW5kLCBjb21wZXRpdGlvbik7XG4gICAgY29uc3QgYnVzaW5lc3NGYWN0b3IgPSBnZXRCdXNpbmVzc0ZhY3RvcihlbXBsb3llZXNQcm9kdWN0aW9uLmJ1c2luZXNzUHJvZHVjdGlvbik7XG4gICAgY29uc3QgYWR2ZXJ0aXNpbmdGYWN0b3IgPSBnZXRBZHZlcnRpc2luZ0ZhY3RvcnMoXG4gICAgICAgIGRpdmlzaW9uLmF3YXJlbmVzcyxcbiAgICAgICAgZGl2aXNpb24ucG9wdWxhcml0eSxcbiAgICAgICAgaW5kdXN0cnlEYXRhLmFkdmVydGlzaW5nRmFjdG9yISlbMF07XG4gICAgY29uc3QgbWF4U2FsZXNWb2x1bWUgPVxuICAgICAgICBpdGVtTXVsdGlwbGllciAqXG4gICAgICAgIGJ1c2luZXNzRmFjdG9yICpcbiAgICAgICAgYWR2ZXJ0aXNpbmdGYWN0b3IgKlxuICAgICAgICBtYXJrZXRGYWN0b3IgKlxuICAgICAgICBzYWxlc0JvdFVwZ3JhZGVCZW5lZml0ICpcbiAgICAgICAgcmVzZWFyY2hTYWxlc011bHRpcGxpZXI7XG5cbiAgICBsZXQgbWFyZ2luRXJyb3JSYXRpbyA9IDE7XG4gICAgaWYgKCFpdGVtSXNQcm9kdWN0KSB7XG4gICAgICAgIC8vIEFkZCBtYXJnaW4gZXJyb3IgaW4gY2FzZSBvZiBvdXRwdXQgbWF0ZXJpYWxzXG4gICAgICAgIG1hcmdpbkVycm9yUmF0aW8gPSAwLjk7XG4gICAgfVxuICAgIGlmIChtYXhTYWxlc1ZvbHVtZSA8IHJhd1Byb2R1Y3Rpb24gKiBtYXJnaW5FcnJvclJhdGlvICYmIGJ1c2luZXNzID4gMCkge1xuICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xuICAgICAgICBsb2dnZXIud2FybihgV0FSTklORzogb3BlcmF0aW9uczogJHtvcGVyYXRpb25zfSwgZW5naW5lZXI6ICR7ZW5naW5lZXJ9LCBidXNpbmVzczogJHtidXNpbmVzc30sIG1hbmFnZW1lbnQ6ICR7bWFuYWdlbWVudH1gKTtcbiAgICAgICAgbG9nZ2VyLndhcm4oYFdBUk5JTkc6IHJhd1Byb2R1Y3Rpb246ICR7cmF3UHJvZHVjdGlvbn0sIG1heFNhbGVzVm9sdW1lOiAke21heFNhbGVzVm9sdW1lfWApO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGltYWxQcmljZSA9IG1hcmt1cExpbWl0IC8gTWF0aC5zcXJ0KHJhd1Byb2R1Y3Rpb24gLyBtYXhTYWxlc1ZvbHVtZSkgKyBtYXJrZXRQcmljZTtcblxuICAgIGNvbnN0IHByb2ZpdCA9IChyYXdQcm9kdWN0aW9uICogMTApICogb3B0aW1hbFByaWNlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BlcmF0aW9uczogb3BlcmF0aW9ucyxcbiAgICAgICAgZW5naW5lZXI6IGVuZ2luZWVyLFxuICAgICAgICBidXNpbmVzczogYnVzaW5lc3MsXG4gICAgICAgIG1hbmFnZW1lbnQ6IG1hbmFnZW1lbnQsXG4gICAgICAgIHRvdGFsRXhwZXJpZW5jZTogY3VzdG9tRGF0YS5vZmZpY2UudG90YWxFeHBlcmllbmNlLFxuICAgICAgICByYXdQcm9kdWN0aW9uOiByYXdQcm9kdWN0aW9uLFxuICAgICAgICBtYXhTYWxlc1ZvbHVtZTogbWF4U2FsZXNWb2x1bWUsXG4gICAgICAgIG9wdGltYWxQcmljZTogb3B0aW1hbFByaWNlLFxuICAgICAgICBwcm9kdWN0RGV2ZWxvcG1lbnRQcm9ncmVzczogcHJvZHVjdERldmVsb3BtZW50UHJvZ3Jlc3MsXG4gICAgICAgIGVzdGltYXRlZFJQOiBlc3RpbWF0ZWRSUCxcbiAgICAgICAgcHJvZHVjdFJhdGluZzogcHJvZHVjdEVmZmVjdGl2ZVJhdGluZyxcbiAgICAgICAgcHJvZHVjdE1hcmt1cDogcHJvZHVjdE1hcmt1cCxcbiAgICAgICAgcHJvZml0OiBwcm9maXQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENvcnBvcmF0aW9uT3B0aW1pemVyIHtcbiAgICBwdWJsaWMgZ2V0U2NyaXB0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBpbXBvcnQubWV0YS51cmw7XG4gICAgfVxuXG4gICAgcHVibGljIG9wdGltaXplU3RvcmFnZUFuZEZhY3RvcnkoXG4gICAgICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICAgICAgY3VycmVudFNtYXJ0U3RvcmFnZUxldmVsOiBudW1iZXIsXG4gICAgICAgIGN1cnJlbnRXYXJlaG91c2VMZXZlbDogbnVtYmVyLFxuICAgICAgICBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbDogbnVtYmVyLFxuICAgICAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICAgICAgbWF4Q29zdDogbnVtYmVyLFxuICAgICAgICBlbmFibGVMb2dnaW5nID0gZmFsc2UsXG4gICAgICAgIGJvb3N0TWF0ZXJpYWxUb3RhbFNpemVSYXRpbyA9IDAuOFxuICAgICk6IFN0b3JhZ2VGYWN0b3J5QmVuY2htYXJrRGF0YVtdIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbCA8IDAgfHwgY3VycmVudFdhcmVob3VzZUxldmVsIDwgMCB8fCBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbCA8IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGFyYW1ldGVyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XG4gICAgICAgIGNvbnN0IG1heFNtYXJ0U3RvcmFnZUxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFLCBjdXJyZW50U21hcnRTdG9yYWdlTGV2ZWwsIG1heENvc3QpO1xuICAgICAgICBjb25zdCBtYXhXYXJlaG91c2VMZXZlbCA9IGdldE1heEFmZm9yZGFibGVXYXJlaG91c2VMZXZlbChjdXJyZW50V2FyZWhvdXNlTGV2ZWwsIG1heENvc3QgLyA2KTtcbiAgICAgICAgY29uc3QgY29tcGFyYXRvciA9IGdldENvbXBhcmF0b3IoQmVuY2htYXJrVHlwZS5TVE9SQUdFX0ZBQ1RPUlkpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVF1ZXVlID0gbmV3IFByaW9yaXR5UXVldWUoY29tcGFyYXRvcik7XG4gICAgICAgIGxldCBtaW5TbWFydFN0b3JhZ2VMZXZlbCA9IGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbDtcbiAgICAgICAgaWYgKG1heFNtYXJ0U3RvcmFnZUxldmVsIC0gbWluU21hcnRTdG9yYWdlTGV2ZWwgPiAxMDAwKSB7XG4gICAgICAgICAgICBtaW5TbWFydFN0b3JhZ2VMZXZlbCA9IG1heFNtYXJ0U3RvcmFnZUxldmVsIC0gMTAwMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWluV2FyZWhvdXNlTGV2ZWwgPSBjdXJyZW50V2FyZWhvdXNlTGV2ZWw7XG4gICAgICAgIGlmIChtYXhXYXJlaG91c2VMZXZlbCAtIG1pbldhcmVob3VzZUxldmVsID4gMTAwMCkge1xuICAgICAgICAgICAgbWluV2FyZWhvdXNlTGV2ZWwgPSBtYXhXYXJlaG91c2VMZXZlbCAtIDEwMDA7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmxvZyhgbWluU21hcnRTdG9yYWdlTGV2ZWw6ICR7bWluU21hcnRTdG9yYWdlTGV2ZWx9YCk7XG4gICAgICAgIGxvZ2dlci5sb2coYG1pbldhcmVob3VzZUxldmVsOiAke21pbldhcmVob3VzZUxldmVsfWApO1xuICAgICAgICBsb2dnZXIubG9nKGBtYXhTbWFydFN0b3JhZ2VMZXZlbDogJHttYXhTbWFydFN0b3JhZ2VMZXZlbH1gKTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgbWF4V2FyZWhvdXNlTGV2ZWw6ICR7bWF4V2FyZWhvdXNlTGV2ZWx9YCk7XG4gICAgICAgIGxvZ2dlci50aW1lKFwiU3RvcmFnZUFuZEZhY3RvcnkgYmVuY2htYXJrXCIpO1xuICAgICAgICBmb3IgKGxldCBzbWFydFN0b3JhZ2VMZXZlbCA9IG1pblNtYXJ0U3RvcmFnZUxldmVsOyBzbWFydFN0b3JhZ2VMZXZlbCA8PSBtYXhTbWFydFN0b3JhZ2VMZXZlbDsgc21hcnRTdG9yYWdlTGV2ZWwrKykge1xuICAgICAgICAgICAgY29uc3QgdXBncmFkZVNtYXJ0U3RvcmFnZUNvc3QgPSBnZXRVcGdyYWRlQ29zdChcbiAgICAgICAgICAgICAgICBVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbWFydFN0b3JhZ2VMZXZlbCxcbiAgICAgICAgICAgICAgICBzbWFydFN0b3JhZ2VMZXZlbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZvciAobGV0IHdhcmVob3VzZUxldmVsID0gbWluV2FyZWhvdXNlTGV2ZWw7IHdhcmVob3VzZUxldmVsIDw9IG1heFdhcmVob3VzZUxldmVsOyB3YXJlaG91c2VMZXZlbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBncmFkZVdhcmVob3VzZUNvc3QgPSBnZXRVcGdyYWRlV2FyZWhvdXNlQ29zdChcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFdhcmVob3VzZUxldmVsLFxuICAgICAgICAgICAgICAgICAgICB3YXJlaG91c2VMZXZlbFxuICAgICAgICAgICAgICAgICkgKiA2O1xuICAgICAgICAgICAgICAgIGlmICh1cGdyYWRlU21hcnRTdG9yYWdlQ29zdCArIHVwZ3JhZGVXYXJlaG91c2VDb3N0ID4gbWF4Q29zdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FyZWhvdXNlU2l6ZSA9IGdldFdhcmVob3VzZVNpemUoXG4gICAgICAgICAgICAgICAgICAgIHNtYXJ0U3RvcmFnZUxldmVsLFxuICAgICAgICAgICAgICAgICAgICB3YXJlaG91c2VMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBib29zdE1hdGVyaWFscyA9IGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIHdhcmVob3VzZVNpemUgKiBib29zdE1hdGVyaWFsVG90YWxTaXplUmF0aW8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvb3N0TWF0ZXJpYWxNdWx0aXBsaWVyID0gZ2V0RGl2aXNpb25Qcm9kdWN0aW9uTXVsdGlwbGllcihpbmR1c3RyeURhdGEsIGJvb3N0TWF0ZXJpYWxzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWRnZXRGb3JTbWFydEZhY3Rvcmllc1VwZ3JhZGUgPSBtYXhDb3N0IC0gKHVwZ3JhZGVTbWFydFN0b3JhZ2VDb3N0ICsgdXBncmFkZVdhcmVob3VzZUNvc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heEFmZm9yZGFibGVTbWFydEZhY3Rvcmllc0xldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbChcbiAgICAgICAgICAgICAgICAgICAgVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U21hcnRGYWN0b3JpZXNMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgYnVkZ2V0Rm9yU21hcnRGYWN0b3JpZXNVcGdyYWRlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGdyYWRlU21hcnRGYWN0b3JpZXNDb3N0ID0gZ2V0VXBncmFkZUNvc3QoXG4gICAgICAgICAgICAgICAgICAgIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUyxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNtYXJ0RmFjdG9yaWVzTGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIG1heEFmZm9yZGFibGVTbWFydEZhY3Rvcmllc0xldmVsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdCArIHVwZ3JhZGVXYXJlaG91c2VDb3N0ICsgdXBncmFkZVNtYXJ0RmFjdG9yaWVzQ29zdDtcbiAgICAgICAgICAgICAgICBjb25zdCBzbWFydEZhY3Rvcmllc011bHRpcGxpZXIgPSAxICsgQ29ycFVwZ3JhZGVzRGF0YVtVcGdyYWRlTmFtZS5TTUFSVF9GQUNUT1JJRVNdLmJlbmVmaXQgKiBtYXhBZmZvcmRhYmxlU21hcnRGYWN0b3JpZXNMZXZlbDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0aW9uID0gYm9vc3RNYXRlcmlhbE11bHRpcGxpZXIgKiBzbWFydEZhY3Rvcmllc011bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YUVudHJ5ID0ge1xuICAgICAgICAgICAgICAgICAgICBzbWFydFN0b3JhZ2VMZXZlbDogc21hcnRTdG9yYWdlTGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIHdhcmVob3VzZUxldmVsOiB3YXJlaG91c2VMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgc21hcnRGYWN0b3JpZXNMZXZlbDogbWF4QWZmb3JkYWJsZVNtYXJ0RmFjdG9yaWVzTGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVTbWFydFN0b3JhZ2VDb3N0OiB1cGdyYWRlU21hcnRTdG9yYWdlQ29zdCxcbiAgICAgICAgICAgICAgICAgICAgdXBncmFkZVdhcmVob3VzZUNvc3Q6IHVwZ3JhZGVXYXJlaG91c2VDb3N0LFxuICAgICAgICAgICAgICAgICAgICB3YXJlaG91c2VTaXplOiB3YXJlaG91c2VTaXplLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbENvc3Q6IHRvdGFsQ29zdCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogcHJvZHVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29zdFBlclByb2R1Y3Rpb246IHRvdGFsQ29zdCAvIHByb2R1Y3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGJvb3N0TWF0ZXJpYWxzOiBib29zdE1hdGVyaWFscyxcbiAgICAgICAgICAgICAgICAgICAgYm9vc3RNYXRlcmlhbE11bHRpcGxpZXI6IGJvb3N0TWF0ZXJpYWxNdWx0aXBsaWVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAocHJpb3JpdHlRdWV1ZS5zaXplKCkgPCBkZWZhdWx0TGVuZ3RoT2ZCZW5jaG1hcmtEYXRhQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKGRhdGFFbnRyeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wYXJhdG9yKGRhdGFFbnRyeSwgcHJpb3JpdHlRdWV1ZS5mcm9udCgpKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlRdWV1ZS5wdXNoKGRhdGFFbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci50aW1lRW5kKFwiU3RvcmFnZUFuZEZhY3RvcnkgYmVuY2htYXJrXCIpO1xuICAgICAgICBjb25zdCBkYXRhOiBTdG9yYWdlRmFjdG9yeUJlbmNobWFya0RhdGFbXSA9IHByaW9yaXR5UXVldWUudG9BcnJheSgpO1xuICAgICAgICBkYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgICAgICAgIGB7c3RvcmFnZToke2RhdGEuc21hcnRTdG9yYWdlTGV2ZWx9LCB3YXJlaG91c2U6JHtkYXRhLndhcmVob3VzZUxldmVsfSwgZmFjdG9yeToke2RhdGEuc21hcnRGYWN0b3JpZXNMZXZlbH0sIGAgK1xuICAgICAgICAgICAgICAgIGB0b3RhbENvc3Q6JHtmb3JtYXROdW1iZXIoZGF0YS50b3RhbENvc3QpfSwgYCArXG4gICAgICAgICAgICAgICAgYHdhcmVob3VzZVNpemU6JHtmb3JtYXROdW1iZXIoZGF0YS53YXJlaG91c2VTaXplKX0sIGAgK1xuICAgICAgICAgICAgICAgIGBwcm9kdWN0aW9uOiR7Zm9ybWF0TnVtYmVyKGRhdGEucHJvZHVjdGlvbil9LCBgICtcbiAgICAgICAgICAgICAgICBgY29zdFBlclByb2R1Y3Rpb246JHtmb3JtYXROdW1iZXIoZGF0YS5jb3N0UGVyUHJvZHVjdGlvbil9LCBgICtcbiAgICAgICAgICAgICAgICBgYm9vc3RNYXRlcmlhbE11bHRpcGxpZXI6JHtmb3JtYXROdW1iZXIoZGF0YS5ib29zdE1hdGVyaWFsTXVsdGlwbGllcil9LCBgICtcbiAgICAgICAgICAgICAgICBgYm9vc3RNYXRlcmlhbHM6JHtkYXRhLmJvb3N0TWF0ZXJpYWxzfX1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIG9wdGltaXplV2lsc29uQW5kQWR2ZXJ0KFxuICAgICAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXG4gICAgICAgIGN1cnJlbnRXaWxzb25MZXZlbDogbnVtYmVyLFxuICAgICAgICBjdXJyZW50QWR2ZXJ0TGV2ZWw6IG51bWJlcixcbiAgICAgICAgY3VycmVudEF3YXJlbmVzczogbnVtYmVyLFxuICAgICAgICBjdXJyZW50UG9wdWxhcml0eTogbnVtYmVyLFxuICAgICAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICAgICAgbWF4Q29zdDogbnVtYmVyLFxuICAgICAgICBlbmFibGVMb2dnaW5nID0gZmFsc2VcbiAgICApOiBXaWxzb25BZHZlcnRCZW5jaG1hcmtEYXRhW10ge1xuICAgICAgICBhd2FyZW5lc3NNYXAuY2xlYXIoKTtcbiAgICAgICAgcG9wdWxhcml0eU1hcC5jbGVhcigpO1xuICAgICAgICBpZiAoY3VycmVudFdpbHNvbkxldmVsIDwgMCB8fCBjdXJyZW50QWR2ZXJ0TGV2ZWwgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xuICAgICAgICBjb25zdCBtYXhXaWxzb25MZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDUywgY3VycmVudFdpbHNvbkxldmVsLCBtYXhDb3N0KTtcbiAgICAgICAgY29uc3QgbWF4QWR2ZXJ0TGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlQWRWZXJ0TGV2ZWwoY3VycmVudEFkdmVydExldmVsLCBtYXhDb3N0KTtcbiAgICAgICAgbG9nZ2VyLmxvZyhgbWF4V2lsc29uTGV2ZWw6ICR7bWF4V2lsc29uTGV2ZWx9YCk7XG4gICAgICAgIGxvZ2dlci5sb2coYG1heEFkdmVydExldmVsOiAke21heEFkdmVydExldmVsfWApO1xuICAgICAgICBjb25zdCByZXNlYXJjaEFkdmVydGlzaW5nTXVsdGlwbGllciA9IGdldFJlc2VhcmNoQWR2ZXJ0aXNpbmdNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcyk7XG4gICAgICAgIGNvbnN0IGNvbXBhcmF0b3IgPSBnZXRDb21wYXJhdG9yKEJlbmNobWFya1R5cGUuV0lMU09OX0FEVkVSVCk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5UXVldWUgPSBuZXcgUHJpb3JpdHlRdWV1ZShjb21wYXJhdG9yKTtcbiAgICAgICAgbG9nZ2VyLnRpbWUoXCJXaWxzb25BbmRBZHZlcnQgYmVuY2htYXJrXCIpO1xuICAgICAgICBmb3IgKGxldCB3aWxzb25MZXZlbCA9IGN1cnJlbnRXaWxzb25MZXZlbDsgd2lsc29uTGV2ZWwgPD0gbWF4V2lsc29uTGV2ZWw7IHdpbHNvbkxldmVsKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbHNvbkNvc3QgPSBnZXRVcGdyYWRlQ29zdChVcGdyYWRlTmFtZS5XSUxTT05fQU5BTFlUSUNTLCBjdXJyZW50V2lsc29uTGV2ZWwsIHdpbHNvbkxldmVsKTtcbiAgICAgICAgICAgIGZvciAobGV0IGFkdmVydExldmVsID0gY3VycmVudEFkdmVydExldmVsICsgMTsgYWR2ZXJ0TGV2ZWwgPD0gbWF4QWR2ZXJ0TGV2ZWw7IGFkdmVydExldmVsKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZlcnRDb3N0ID0gZ2V0QWRWZXJ0Q29zdChjdXJyZW50QWR2ZXJ0TGV2ZWwsIGFkdmVydExldmVsKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvc3QgPSB3aWxzb25Db3N0ICsgYWR2ZXJ0Q29zdDtcbiAgICAgICAgICAgICAgICBpZiAodG90YWxDb3N0ID4gbWF4Q29zdCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNBd2FyZW5lc3MgPSBhd2FyZW5lc3NNYXAuZ2V0KGAke3dpbHNvbkxldmVsfXwke2FkdmVydExldmVsIC0gMX1gKSA/PyBjdXJyZW50QXdhcmVuZXNzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUG9wdWxhcml0eSA9IHBvcHVsYXJpdHlNYXAuZ2V0KGAke3dpbHNvbkxldmVsfXwke2FkdmVydExldmVsIC0gMX1gKSA/PyBjdXJyZW50UG9wdWxhcml0eTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZHZlcnRpc2luZ011bHRpcGxpZXIgPSAoMSArIENvcnBVcGdyYWRlc0RhdGFbVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDU10uYmVuZWZpdCAqIHdpbHNvbkxldmVsKSAqIHJlc2VhcmNoQWR2ZXJ0aXNpbmdNdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgIGxldCBhd2FyZW5lc3MgPSAocHJldmlvdXNBd2FyZW5lc3MgKyAzICogYWR2ZXJ0aXNpbmdNdWx0aXBsaWVyKSAqICgxLjAwNSAqIGFkdmVydGlzaW5nTXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgLy8gSGFyZC1jb2RlZCB2YWx1ZSBvZiBnZXRSYW5kb21JbnQoMSwgMykuIFdlIGRvbid0IHdhbnQgUk5HIGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBvcHVsYXJpdHkgPSAocHJldmlvdXNQb3B1bGFyaXR5ICsgYWR2ZXJ0aXNpbmdNdWx0aXBsaWVyKSAqICgoMSArIGdldFJhbmRvbUludCgxLCAzKSAvIDIwMCkgKiBhZHZlcnRpc2luZ011bHRpcGxpZXIpO1xuICAgICAgICAgICAgICAgIGxldCBwb3B1bGFyaXR5ID0gKHByZXZpb3VzUG9wdWxhcml0eSArIGFkdmVydGlzaW5nTXVsdGlwbGllcikgKiAoKDEgKyAyIC8gMjAwKSAqIGFkdmVydGlzaW5nTXVsdGlwbGllcik7XG4gICAgICAgICAgICAgICAgYXdhcmVuZXNzID0gTWF0aC5taW4oYXdhcmVuZXNzLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICAgICAgICAgICAgICBwb3B1bGFyaXR5ID0gTWF0aC5taW4ocG9wdWxhcml0eSwgTnVtYmVyLk1BWF9WQUxVRSk7XG4gICAgICAgICAgICAgICAgYXdhcmVuZXNzTWFwLnNldChgJHt3aWxzb25MZXZlbH18JHthZHZlcnRMZXZlbH1gLCBhd2FyZW5lc3MpO1xuICAgICAgICAgICAgICAgIHBvcHVsYXJpdHlNYXAuc2V0KGAke3dpbHNvbkxldmVsfXwke2FkdmVydExldmVsfWAsIHBvcHVsYXJpdHkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFthZHZlcnRpc2luZ0ZhY3Rvcl0gPSBnZXRBZHZlcnRpc2luZ0ZhY3RvcnMoYXdhcmVuZXNzLCBwb3B1bGFyaXR5LCBpbmR1c3RyeURhdGEuYWR2ZXJ0aXNpbmdGYWN0b3IhKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhRW50cnkgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbHNvbkxldmVsOiB3aWxzb25MZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgYWR2ZXJ0TGV2ZWw6IGFkdmVydExldmVsLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbENvc3Q6IHRvdGFsQ29zdCxcbiAgICAgICAgICAgICAgICAgICAgcG9wdWxhcml0eTogcG9wdWxhcml0eSxcbiAgICAgICAgICAgICAgICAgICAgYXdhcmVuZXNzOiBhd2FyZW5lc3MsXG4gICAgICAgICAgICAgICAgICAgIHJhdGlvOiAocG9wdWxhcml0eSAvIGF3YXJlbmVzcyksXG4gICAgICAgICAgICAgICAgICAgIGFkdmVydGlzaW5nRmFjdG9yOiBhZHZlcnRpc2luZ0ZhY3RvcixcbiAgICAgICAgICAgICAgICAgICAgY29zdFBlckFkdmVydGlzaW5nRmFjdG9yOiB0b3RhbENvc3QgLyBhZHZlcnRpc2luZ0ZhY3RvclxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5UXVldWUuc2l6ZSgpIDwgZGVmYXVsdExlbmd0aE9mQmVuY2htYXJrRGF0YUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUucHVzaChkYXRhRW50cnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGFyYXRvcihkYXRhRW50cnksIHByaW9yaXR5UXVldWUuZnJvbnQoKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUucHVzaChkYXRhRW50cnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIudGltZUVuZChcIldpbHNvbkFuZEFkdmVydCBiZW5jaG1hcmtcIik7XG4gICAgICAgIGNvbnN0IGRhdGE6IFdpbHNvbkFkdmVydEJlbmNobWFya0RhdGFbXSA9IHByaW9yaXR5UXVldWUudG9BcnJheSgpO1xuICAgICAgICBkYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKFxuICAgICAgICAgICAgICAgIGB7d2lsc29uOiR7ZGF0YS53aWxzb25MZXZlbH0sIGFkdmVydDoke2RhdGEuYWR2ZXJ0TGV2ZWx9LCBgICtcbiAgICAgICAgICAgICAgICBgdG90YWxDb3N0OiR7Zm9ybWF0TnVtYmVyKGRhdGEudG90YWxDb3N0KX0sIGAgK1xuICAgICAgICAgICAgICAgIGBhZHZlcnRpc2luZ0ZhY3Rvcjoke2Zvcm1hdE51bWJlcihkYXRhLmFkdmVydGlzaW5nRmFjdG9yKX0sIGAgK1xuICAgICAgICAgICAgICAgIGBwb3B1bGFyaXR5OiR7Zm9ybWF0TnVtYmVyKGRhdGEucG9wdWxhcml0eSl9LCBgICtcbiAgICAgICAgICAgICAgICBgYXdhcmVuZXNzOiR7Zm9ybWF0TnVtYmVyKGRhdGEuYXdhcmVuZXNzKX0sIGAgK1xuICAgICAgICAgICAgICAgIGByYXRpbzoke2Zvcm1hdE51bWJlcihkYXRhLnJhdGlvKX0sIGAgK1xuICAgICAgICAgICAgICAgIGBjb3N0UGVyQWR2ZXJ0aXNpbmdGYWN0b3I6JHtmb3JtYXROdW1iZXIoZGF0YS5jb3N0UGVyQWR2ZXJ0aXNpbmdGYWN0b3IpfX1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG9wdGltaXplT2ZmaWNlKFxuICAgICAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICAgICAgb3BlcmF0aW9uc0pvYjoge1xuICAgICAgICAgICAgbWluOiBudW1iZXI7XG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW5naW5lZXJKb2I6IHtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIG1hbmFnZW1lbnRKb2I6IHtcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xuICAgICAgICAgICAgbWF4OiBudW1iZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHJuZEVtcGxveWVlOiBudW1iZXIsXG4gICAgICAgIG5vblJuREVtcGxveWVlczogbnVtYmVyLFxuICAgICAgICBpdGVtOiBNYXRlcmlhbCB8IFByb2R1Y3QsXG4gICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YTogYm9vbGVhbixcbiAgICAgICAgY3VzdG9tRGF0YTogT2ZmaWNlQmVuY2htYXJrQ3VzdG9tRGF0YSxcbiAgICAgICAgc29ydFR5cGU6IE9mZmljZUJlbmNobWFya1NvcnRUeXBlLFxuICAgICAgICBjb21wYXJhdG9yQ3VzdG9tRGF0YTogQ29tcGFyYXRvckN1c3RvbURhdGEsXG4gICAgICAgIGVuYWJsZUxvZ2dpbmcgPSBmYWxzZSxcbiAgICAgICAgZW1wbG95ZWVKb2JzUmVxdWlyZW1lbnQ/OiBFbXBsb3llZUpvYlJlcXVpcmVtZW50XG4gICAgKTogUHJvbWlzZTx7IHN0ZXA6IG51bWJlcjsgZGF0YTogT2ZmaWNlQmVuY2htYXJrRGF0YVtdOyB9PiB7XG4gICAgICAgIGNvbnN0IHNhbGVzQm90VXBncmFkZUJlbmVmaXQgPSBnZXRVcGdyYWRlQmVuZWZpdChcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLkFCQ19TQUxFU19CT1RTLFxuICAgICAgICAgICAgY3VzdG9tRGF0YS5jb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFNdXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyID0gZ2V0UmVzZWFyY2hTYWxlc011bHRpcGxpZXIoY3VzdG9tRGF0YS5kaXZpc2lvblJlc2VhcmNoZXMpO1xuXG4gICAgICAgIGxldCBwZXJmb3JtYW5jZU1vZGlmaWVyID0gZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcms7XG4gICAgICAgIGlmIChjdXN0b21EYXRhLnBlcmZvcm1hbmNlTW9kaWZpZXIpIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlTW9kaWZpZXIgPSBjdXN0b21EYXRhLnBlcmZvcm1hbmNlTW9kaWZpZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1N0ZXAgPSBNYXRoLm1heChcbiAgICAgICAgICAgIE1hdGguZmxvb3IoKG9wZXJhdGlvbnNKb2IubWF4IC0gb3BlcmF0aW9uc0pvYi5taW4pIC8gcGVyZm9ybWFuY2VNb2RpZmllciksXG4gICAgICAgICAgICBtaW5TdGVwRm9yT2ZmaWNlQmVuY2htYXJrXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGVuZ2luZWVyU3RlcCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgTWF0aC5mbG9vcigoZW5naW5lZXJKb2IubWF4IC0gZW5naW5lZXJKb2IubWluKSAvIHBlcmZvcm1hbmNlTW9kaWZpZXIpLFxuICAgICAgICAgICAgbWluU3RlcEZvck9mZmljZUJlbmNobWFya1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBtYW5hZ2VtZW50U3RlcCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgTWF0aC5mbG9vcigobWFuYWdlbWVudEpvYi5tYXggLSBtYW5hZ2VtZW50Sm9iLm1pbikgLyBwZXJmb3JtYW5jZU1vZGlmaWVyKSxcbiAgICAgICAgICAgIG1pblN0ZXBGb3JPZmZpY2VCZW5jaG1hcmtcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF4U3RlcCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgb3BlcmF0aW9uc1N0ZXAsXG4gICAgICAgICAgICBlbmdpbmVlclN0ZXAsXG4gICAgICAgICAgICBtYW5hZ2VtZW50U3RlcCxcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb21wYXJhdG9yID0gZ2V0Q29tcGFyYXRvcihCZW5jaG1hcmtUeXBlLk9GRklDRSwgc29ydFR5cGUsIGNvbXBhcmF0b3JDdXN0b21EYXRhKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlRdWV1ZSA9IG5ldyBQcmlvcml0eVF1ZXVlKGNvbXBhcmF0b3IpO1xuICAgICAgICAvLyBXZSB1c2UgbWF4U3RlcCBmb3IgYWxsIGxvb3BzIGluc3RlYWQgb2Ygc3BlY2lmaWMgc3RlcCBmb3IgZWFjaCBsb29wIHRvIG1heGltaXplIHBlcmZvcm1hbmNlLiBUaGUgcmVzdWx0IGlzXG4gICAgICAgIC8vIHN0aWxsIGdvb2QgZW5vdWdoLlxuICAgICAgICBmb3IgKGxldCBvcGVyYXRpb25zID0gb3BlcmF0aW9uc0pvYi5taW47IG9wZXJhdGlvbnMgPD0gb3BlcmF0aW9uc0pvYi5tYXg7IG9wZXJhdGlvbnMgKz0gbWF4U3RlcCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZW5naW5lZXIgPSBlbmdpbmVlckpvYi5taW47IGVuZ2luZWVyIDw9IGVuZ2luZWVySm9iLm1heDsgZW5naW5lZXIgKz0gbWF4U3RlcCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG1hbmFnZW1lbnQgPSBtYW5hZ2VtZW50Sm9iLm1pbjsgbWFuYWdlbWVudCA8PSBtYW5hZ2VtZW50Sm9iLm1heDsgbWFuYWdlbWVudCArPSBtYXhTdGVwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRpb25zICsgZW5naW5lZXIgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IG9wZXJhdGlvbnMgKyBlbmdpbmVlciArIG1hbmFnZW1lbnQgPj0gbm9uUm5ERW1wbG95ZWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZWZmZWN0aXZlRW5naW5lZXIgPSBlbmdpbmVlcjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1c2luZXNzID0gbm9uUm5ERW1wbG95ZWVzIC0gKG9wZXJhdGlvbnMgKyBlbmdpbmVlciArIG1hbmFnZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW1wbG95ZWVKb2JzUmVxdWlyZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSwgd2Ugb25seSBzZXQgZW1wbG95ZWVKb2JzUmVxdWlyZW1lbnQgd2hlbiB3ZSBmaW5kIG9wdGltYWwgc2V0dXAgZm9yIHN1cHBvcnQgZGl2aXNpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCBlbXBsb3llZUpvYnNSZXF1aXJlbWVudC5idXNpbmVzcyBpcyBhbHdheXMgMC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbXBsb3llZUpvYnNSZXF1aXJlbWVudC5idXNpbmVzcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB2YWxpZCBvZiBlbXBsb3llZUpvYnNSZXF1aXJlbWVudC5idXNpbmVzczogJHtlbXBsb3llZUpvYnNSZXF1aXJlbWVudC5idXNpbmVzc31gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFwiVHJhbnNmZXJcIiBidXNpbmVzcyB0byBlbmdpbmVlci4gRW5naW5lZXIgaXMgaW1wb3J0YW50IGZvciBxdWFsaXR5IG9mIG91dHB1dCBtYXRlcmlhbHMgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1cHBvcnQgZGl2aXNpb25zLlxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlRW5naW5lZXIgKz0gYnVzaW5lc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUVudHJ5ID0gYXdhaXQgY2FsY3VsYXRlT2ZmaWNlQmVuY2htYXJrRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kdXN0cnlEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUN1cnJlbnRJdGVtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlRW5naW5lZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBybmRFbXBsb3llZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVzQm90VXBncmFkZUJlbmVmaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlYXJjaFNhbGVzTXVsdGlwbGllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByaW9yaXR5UXVldWUuc2l6ZSgpIDwgZGVmYXVsdExlbmd0aE9mQmVuY2htYXJrRGF0YUFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wYXJhdG9yKGRhdGFFbnRyeSwgcHJpb3JpdHlRdWV1ZS5mcm9udCgpKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5UXVldWUucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVF1ZXVlLnB1c2goZGF0YUVudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RlcDogbWF4U3RlcCxcbiAgICAgICAgICAgIGRhdGE6IHByaW9yaXR5UXVldWUudG9BcnJheSgpXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jb21saW5rLmV4cG9zZShuZXcgQ29ycG9yYXRpb25PcHRpbWl6ZXIoKSk7XG4iXSwKICAibWFwcGluZ3MiOiAiQUFDQSxZQUFZLGFBQWE7QUFDekIsU0FBUyxtQ0FBbUMsa0JBQWtCLFdBQVcsY0FBYztBQUN2RjtBQUFBLEVBQ0k7QUFBQSxFQUdBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEs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
