import {
  NetscriptExtension,
  parseAutoCompleteDataFromDefaultConfig
} from "/libs/NetscriptExtension";
import {
  CityName,
  CorpState,
  EmployeePosition,
  getMaxAffordableAdVertLevel,
  getMaxAffordableOfficeSize,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  IndustryType,
  MaterialName,
  ResearchName,
  UnlockName,
  UpgradeName
} from "/corporationFormulas";
import {
  assignJobs,
  buyAdvert,
  buyBoostMaterials,
  buyTeaAndThrowParty,
  buyUnlock,
  buyUpgrade,
  cities,
  clearPurchaseOrders,
  createDivision,
  createDummyDivisions,
  developNewProduct,
  DivisionName,
  exportString,
  findOptimalAmountOfBoostMaterials,
  generateMaterialsOrders,
  generateOfficeSetups,
  getDivisionResearches,
  getProductIdArray,
  getProductMarketPrice,
  getProfit,
  hasDivision,
  Logger,
  researchPrioritiesForProductDivision,
  researchPrioritiesForSupportDivision,
  sampleProductName,
  stockMaterials,
  upgradeOffices,
  upgradeWarehouse,
  waitForNumberOfCycles,
  waitForOffer,
  waitForNextTimeStateHappens,
  waitUntilHavingEnoughResearchPoints,
  generateOfficeSetupsForEarlyRounds
} from "/corporationUtils";
import { optimizeOffice } from "/corporationOptimizerTools";
import {
  CorporationOptimizer,
  defaultPerformanceModifierForOfficeBenchmark,
  precalculatedEmployeeRatioForProductDivisionRound3,
  precalculatedEmployeeRatioForProductDivisionRound4,
  precalculatedEmployeeRatioForProductDivisionRound5_1,
  precalculatedEmployeeRatioForProductDivisionRound5_2,
  precalculatedEmployeeRatioForProfitSetupOfRound3,
  precalculatedEmployeeRatioForProfitSetupOfRound4,
  precalculatedEmployeeRatioForSupportDivisions
} from "/corporationOptimizer";
import * as testingTools from "/corporationTestingTools";
import { corporationEventLogger } from "/corporationEventLogger";
import { exposeGameInternalObjects } from "/exploits";
function autocomplete(data, flags) {
  return parseAutoCompleteDataFromDefaultConfig(data, defaultConfig);
}
const PrecalculatedRound1Option = {
  // 1498 - 61.344e9 - 504.8e9 - 443.456e9 - 4.89m/s - 17.604b/h
  OPTION1: {
    agricultureOfficeSize: 3,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.89
    // boostMaterialsRatio: 0.88 // Smart Supply - Advert 1
  },
  // 1649 - 51.46e9 - 557.1e9 - 505.64e9 - 5.381e6/s - 19.371/h
  OPTION2: {
    agricultureOfficeSize: 4,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.86
    // boostMaterialsRatio: 0.84 // Smart Supply
  },
  // 1588 - 42.704e9 - 536.8e9 - 494.096e9 - 5.176m/s - 18.633b/h
  OPTION3: {
    agricultureOfficeSize: 5,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.84
  },
  // 1441 - 34.13e9 - 487.5e9 - 453.37e9 - 4.694m/s - 16.898b/h
  OPTION4: {
    agricultureOfficeSize: 6,
    waitForAgricultureRP: 55,
    boostMaterialsRatio: 0.815
  }
};
const PrecalculatedRound2Option = {
  // 15.266e12 17282 804.175
  OPTION1: {
    agricultureOfficeSize: 8,
    // 3-1-1-3
    increaseBusiness: false,
    waitForAgricultureRP: 903,
    waitForChemicalRP: 516,
    agricultureBoostMaterialsRatio: 0.75
  },
  // 14.57e12 16485 815.188
  OPTION2: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 703,
    waitForChemicalRP: 393,
    agricultureBoostMaterialsRatio: 0.76
  },
  // 14.474e12
  OPTION3: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 653,
    waitForChemicalRP: 362,
    agricultureBoostMaterialsRatio: 0.755
  },
  // 13.994e12
  OPTION4: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 602,
    waitForChemicalRP: 331,
    agricultureBoostMaterialsRatio: 0.74
  },
  // 13.742e12
  OPTION5: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 602,
    waitForChemicalRP: 331,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13.425e12
  OPTION6: {
    agricultureOfficeSize: 8,
    increaseBusiness: true,
    waitForAgricultureRP: 551,
    waitForChemicalRP: 300,
    agricultureBoostMaterialsRatio: 0.71
  },
  // 13.7e12
  OPTION7: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 551,
    waitForChemicalRP: 300,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13.6e12
  OPTION8: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 500,
    waitForChemicalRP: 269,
    agricultureBoostMaterialsRatio: 0.77
  },
  // 13e12
  OPTION9: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 450,
    waitForChemicalRP: 238,
    agricultureBoostMaterialsRatio: 0.73
  },
  // 10.884e12
  OPTION10: {
    agricultureOfficeSize: 8,
    // 2-1-3-2
    increaseBusiness: true,
    waitForAgricultureRP: 302,
    waitForChemicalRP: 148,
    agricultureBoostMaterialsRatio: 0.61
  }
};
const PrecalculatedRound3Option = {
  OPTION1: {}
};
const defaultBudgetRatioForSupportDivision = {
  warehouse: 0.1,
  office: 0.9
};
const defaultBudgetRatioForProductDivision = {
  rawProduction: 1 / 23,
  wilsonAdvert: 4 / 23,
  office: 8 / 23,
  employeeStatUpgrades: 8 / 23,
  salesBot: 1 / 23,
  projectInsight: 1 / 23
};
const budgetRatioForProductDivisionWithoutAdvert = {
  rawProduction: 1 / 19,
  wilsonAdvert: 0,
  office: 8 / 19,
  employeeStatUpgrades: 8 / 19,
  salesBot: 1 / 19,
  projectInsight: 1 / 19
};
const maxRerunWhenOptimizingOfficeForProductDivision = 0;
const usePrecalculatedEmployeeRatioForSupportDivisions = true;
const usePrecalculatedEmployeeRatioForProfitSetup = true;
const usePrecalculatedEmployeeRatioForProductDivision = true;
const maxNumberOfProductsInRound3 = 1;
const maxNumberOfProductsInRound4 = 2;
const thresholdOfFocusingOnAdvert = 1e18;
let ns;
let nsx;
let config;
let enableTestingTools = false;
let mainProductDevelopmentCity;
let supportProductDevelopmentCities;
let agricultureIndustryData;
let chemicalIndustryData;
let tobaccoIndustryData;
let budgetRatioForProductDivision = defaultBudgetRatioForProductDivision;
const defaultConfig = [
  ["benchmark", false],
  ["auto", false],
  ["selfFund", false],
  ["round1", false],
  ["round2", false],
  ["round3", false],
  ["improveAllDivisions", false],
  ["test", false],
  ["help", false]
];
function init(nsContext) {
  ns = nsContext;
  nsx = new NetscriptExtension(ns);
  mainProductDevelopmentCity = ns.enums.CityName.Sector12;
  supportProductDevelopmentCities = Object.values(ns.enums.CityName).filter((cityName) => cityName !== mainProductDevelopmentCity);
}
async function round1(option = PrecalculatedRound1Option.OPTION2) {
  ns.print(`Use: ${JSON.stringify(option)}`);
  await createDivision(ns, DivisionName.AGRICULTURE, option.agricultureOfficeSize, 1);
  for (const city of cities) {
    ns.corporation.sellMaterial(DivisionName.AGRICULTURE, city, MaterialName.PLANTS, "MAX", "MP");
    ns.corporation.sellMaterial(DivisionName.AGRICULTURE, city, MaterialName.FOOD, "MAX", "MP");
  }
  if (enableTestingTools && config.auto === false) {
    testingTools.setEnergyAndMorale(DivisionName.AGRICULTURE, 100, 100);
    testingTools.setResearchPoints(DivisionName.AGRICULTURE, option.waitForAgricultureRP);
  }
  await buyTeaAndThrowParty(ns, DivisionName.AGRICULTURE);
  buyAdvert(ns, DivisionName.AGRICULTURE, 2);
  const dataArray = new CorporationOptimizer().optimizeStorageAndFactory(
    agricultureIndustryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(DivisionName.AGRICULTURE, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    getDivisionResearches(ns, DivisionName.AGRICULTURE),
    ns.corporation.getCorporation().funds,
    false
  );
  if (dataArray.length === 0) {
    throw new Error("Cannot find optimal data");
  }
  const optimalData = dataArray[dataArray.length - 1];
  buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
  buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
  for (const city of cities) {
    upgradeWarehouse(ns, DivisionName.AGRICULTURE, city, optimalData.warehouseLevel);
  }
  await waitUntilHavingEnoughResearchPoints(
    ns,
    [
      {
        divisionName: DivisionName.AGRICULTURE,
        researchPoint: option.waitForAgricultureRP
      }
    ]
  );
  assignJobs(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetupsForEarlyRounds(
      option.agricultureOfficeSize,
      false
    )
  );
  const optimalAmountOfBoostMaterials = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.AGRICULTURE,
    agricultureIndustryData,
    CityName.Sector12,
    true,
    option.boostMaterialsRatio
  );
  await stockMaterials(
    ns,
    DivisionName.AGRICULTURE,
    generateMaterialsOrders(
      cities,
      [
        { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterials[0] },
        { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterials[1] },
        { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterials[2] },
        { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterials[3] }
      ]
    )
  );
  if (config.auto === true) {
    await waitForOffer(ns, 10, 10, 49e10);
    ns.print(`Round 1: Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    corporationEventLogger.generateOfferAcceptanceEvent(ns);
    ns.corporation.acceptInvestmentOffer();
    await round2();
  }
}
async function round2(option = PrecalculatedRound2Option.OPTION2) {
  ns.print(`Use: ${JSON.stringify(option)}`);
  if (enableTestingTools && config.auto === false) {
    resetStatistics();
    testingTools.setFunds(49e10);
  }
  buyUnlock(ns, UnlockName.EXPORT);
  ns.print("Upgrade Agriculture division");
  upgradeOffices(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetups(
      cities,
      option.agricultureOfficeSize,
      [
        { name: EmployeePosition.RESEARCH_DEVELOPMENT, count: option.agricultureOfficeSize }
      ]
    )
  );
  await createDivision(ns, DivisionName.CHEMICAL, 3, 2);
  for (const city of cities) {
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants", exportString);
    ns.corporation.cancelExportMaterial(DivisionName.CHEMICAL, city, DivisionName.AGRICULTURE, city, "Chemicals");
    ns.corporation.exportMaterial(DivisionName.CHEMICAL, city, DivisionName.AGRICULTURE, city, "Chemicals", exportString);
    ns.corporation.sellMaterial(DivisionName.CHEMICAL, city, MaterialName.CHEMICALS, "MAX", "MP");
  }
  testingTools.setResearchPoints(DivisionName.AGRICULTURE, 55);
  if (enableTestingTools && config.auto === false) {
    testingTools.setEnergyAndMorale(DivisionName.AGRICULTURE, 100, 100);
    testingTools.setEnergyAndMorale(DivisionName.CHEMICAL, 100, 100);
    testingTools.setResearchPoints(DivisionName.AGRICULTURE, option.waitForAgricultureRP);
    testingTools.setResearchPoints(DivisionName.CHEMICAL, option.waitForChemicalRP);
  }
  await buyTeaAndThrowParty(ns, DivisionName.AGRICULTURE);
  await buyTeaAndThrowParty(ns, DivisionName.CHEMICAL);
  buyAdvert(ns, DivisionName.AGRICULTURE, 8);
  const dataArray = new CorporationOptimizer().optimizeStorageAndFactory(
    agricultureIndustryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(DivisionName.AGRICULTURE, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    getDivisionResearches(ns, DivisionName.AGRICULTURE),
    ns.corporation.getCorporation().funds,
    false
  );
  if (dataArray.length === 0) {
    throw new Error("Cannot find optimal data");
  }
  const optimalData = dataArray[dataArray.length - 1];
  buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
  buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
  for (const city of cities) {
    upgradeWarehouse(ns, DivisionName.AGRICULTURE, city, optimalData.warehouseLevel);
  }
  await waitUntilHavingEnoughResearchPoints(
    ns,
    [
      {
        divisionName: DivisionName.AGRICULTURE,
        researchPoint: option.waitForAgricultureRP
      },
      {
        divisionName: DivisionName.CHEMICAL,
        researchPoint: option.waitForChemicalRP
      }
    ]
  );
  buyAdvert(
    ns,
    DivisionName.AGRICULTURE,
    getMaxAffordableAdVertLevel(
      ns.corporation.getHireAdVertCount(DivisionName.AGRICULTURE),
      ns.corporation.getCorporation().funds
    )
  );
  assignJobs(
    ns,
    DivisionName.AGRICULTURE,
    generateOfficeSetupsForEarlyRounds(
      option.agricultureOfficeSize,
      option.increaseBusiness
    )
  );
  assignJobs(
    ns,
    DivisionName.CHEMICAL,
    generateOfficeSetupsForEarlyRounds(3)
  );
  const optimalAmountOfBoostMaterialsForAgriculture = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.AGRICULTURE,
    agricultureIndustryData,
    CityName.Sector12,
    true,
    option.agricultureBoostMaterialsRatio
  );
  const optimalAmountOfBoostMaterialsForChemical = await findOptimalAmountOfBoostMaterials(
    ns,
    DivisionName.CHEMICAL,
    chemicalIndustryData,
    CityName.Sector12,
    true,
    0.95
  );
  await Promise.allSettled([
    stockMaterials(
      ns,
      DivisionName.AGRICULTURE,
      generateMaterialsOrders(
        cities,
        [
          { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterialsForAgriculture[0] },
          { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterialsForAgriculture[1] },
          { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterialsForAgriculture[2] },
          { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterialsForAgriculture[3] }
        ]
      )
    ),
    stockMaterials(
      ns,
      DivisionName.CHEMICAL,
      generateMaterialsOrders(
        cities,
        [
          { name: MaterialName.AI_CORES, count: optimalAmountOfBoostMaterialsForChemical[0] },
          { name: MaterialName.HARDWARE, count: optimalAmountOfBoostMaterialsForChemical[1] },
          { name: MaterialName.REAL_ESTATE, count: optimalAmountOfBoostMaterialsForChemical[2] },
          { name: MaterialName.ROBOTS, count: optimalAmountOfBoostMaterialsForChemical[3] }
        ]
      )
    )
  ]);
  if (config.auto === true) {
    await waitForOffer(ns, 15, 10, 11e12);
    ns.print(`Round 2: Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    corporationEventLogger.generateOfferAcceptanceEvent(ns);
    ns.corporation.acceptInvestmentOffer();
    await round3();
  }
}
async function round3(option = PrecalculatedRound3Option.OPTION1) {
  if (hasDivision(ns, DivisionName.TOBACCO)) {
    ns.spawn(ns.getScriptName(), { spawnDelay: 500 }, "--improveAllDivisions");
    return;
  }
  ns.print(`Use: ${JSON.stringify(option)}`);
  if (enableTestingTools && config.auto === false) {
    resetStatistics();
    testingTools.setFunds(11e12);
  }
  buyUnlock(ns, UnlockName.MARKET_RESEARCH_DEMAND);
  buyUnlock(ns, UnlockName.MARKET_DATA_COMPETITION);
  if (ns.corporation.getCorporation().divisions.length === 20) {
    throw new Error("You need to sell 1 division");
  }
  await createDivision(ns, DivisionName.TOBACCO, 3, 1);
  createDummyDivisions(ns, 20 - ns.corporation.getCorporation().divisions.length);
  for (const city of cities) {
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.TOBACCO, city, "Plants", exportString);
    ns.corporation.cancelExportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants");
    ns.corporation.exportMaterial(DivisionName.AGRICULTURE, city, DivisionName.CHEMICAL, city, "Plants", exportString);
  }
  const agricultureDivision = ns.corporation.getDivision(DivisionName.AGRICULTURE);
  const chemicalDivision = ns.corporation.getDivision(DivisionName.CHEMICAL);
  const tobaccoDivision = ns.corporation.getDivision(DivisionName.TOBACCO);
  const agricultureDivisionBudget = 15e10;
  const chemicalDivisionBudget = 3e10;
  while (ns.corporation.getDivision(DivisionName.TOBACCO).productionMult === 0) {
    await ns.corporation.nextUpdate();
  }
  await improveProductDivision(
    DivisionName.TOBACCO,
    ns.corporation.getCorporation().funds * 0.99 - agricultureDivisionBudget - chemicalDivisionBudget - 1e9,
    false,
    false,
    false
  );
  developNewProduct(
    ns,
    DivisionName.TOBACCO,
    mainProductDevelopmentCity,
    1e9
  );
  corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
  await improveSupportDivision(
    DivisionName.AGRICULTURE,
    agricultureDivisionBudget,
    defaultBudgetRatioForSupportDivision,
    false,
    false
  );
  await improveSupportDivision(
    DivisionName.CHEMICAL,
    chemicalDivisionBudget,
    defaultBudgetRatioForSupportDivision,
    false,
    false
  );
  await Promise.allSettled([
    buyBoostMaterials(ns, agricultureDivision),
    buyBoostMaterials(ns, chemicalDivision),
    buyBoostMaterials(ns, tobaccoDivision)
  ]);
  ns.spawn(ns.getScriptName(), { spawnDelay: 500 }, "--improveAllDivisions");
}
async function improveAllDivisions() {
  let cycleCount = corporationEventLogger.cycle;
  const pendingImprovingProductDivisions1 = /* @__PURE__ */ new Map();
  const pendingImprovingProductDivisions2 = /* @__PURE__ */ new Map();
  const pendingImprovingSupportDivisions = /* @__PURE__ */ new Map();
  const pendingBuyingBoostMaterialsDivisions = /* @__PURE__ */ new Set();
  const buyBoostMaterialsIfNeeded = (divisionName) => {
    if (!pendingBuyingBoostMaterialsDivisions.has(divisionName)) {
      pendingBuyingBoostMaterialsDivisions.add(divisionName);
      ns.print(`Buying boost materials for division: ${divisionName}`);
      buyBoostMaterials(ns, ns.corporation.getDivision(divisionName)).then(() => {
        ns.print(`Finish buying boost materials for division: ${divisionName}`);
        pendingBuyingBoostMaterialsDivisions.delete(divisionName);
      });
    }
  };
  await improveProductDivision(
    DivisionName.TOBACCO,
    ns.corporation.getCorporation().funds * 0.99 - 1e9,
    false,
    false,
    false
  );
  buyBoostMaterialsIfNeeded(DivisionName.TOBACCO);
  let reservedFunds = 0;
  const increaseReservedFunds = (amount) => {
    console.log(`Increase reservedFunds by ${ns.formatNumber(amount)}`);
    reservedFunds += amount;
    console.log(`New reservedFunds: ${ns.formatNumber(reservedFunds)}`);
  };
  const decreaseReservedFunds = (amount) => {
    console.log(`Decrease reservedFunds by ${ns.formatNumber(amount)}`);
    reservedFunds -= amount;
    console.log(`New reservedFunds: ${ns.formatNumber(reservedFunds)}`);
  };
  let preparingToAcceptOffer = false;
  while (true) {
    ++cycleCount;
    const currentRound = ns.corporation.getInvestmentOffer().round;
    const profit = getProfit(ns);
    console.log(
      `cycleCount: ${cycleCount}. Funds: ${ns.formatNumber(ns.corporation.getCorporation().funds)}. Profit: ${ns.formatNumber(profit)}` + (currentRound <= 4 ? `. Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}` : "")
    );
    await buyResearch();
    if (ns.corporation.getDivision(DivisionName.TOBACCO).awareness !== Number.MAX_VALUE) {
      const currentWilsonLevel = ns.corporation.getUpgradeLevel(UpgradeName.WILSON_ANALYTICS);
      const maxWilsonLevel = getMaxAffordableUpgradeLevel(UpgradeName.WILSON_ANALYTICS, currentWilsonLevel, profit);
      if (maxWilsonLevel > currentWilsonLevel) {
        buyUpgrade(ns, UpgradeName.WILSON_ANALYTICS, maxWilsonLevel);
      }
      if (profit >= thresholdOfFocusingOnAdvert) {
        const currentAdvertLevel = ns.corporation.getHireAdVertCount(DivisionName.TOBACCO);
        const maxAdvertLevel = getMaxAffordableAdVertLevel(
          currentAdvertLevel,
          (ns.corporation.getCorporation().funds - reservedFunds) * 0.6
        );
        if (maxAdvertLevel > currentAdvertLevel) {
          buyAdvert(ns, DivisionName.TOBACCO, maxAdvertLevel);
        }
      }
    }
    const totalFunds = ns.corporation.getCorporation().funds - reservedFunds;
    let availableFunds = totalFunds;
    let maxNumberOfProducts = maxNumberOfProductsInRound3;
    if (currentRound === 4) {
      maxNumberOfProducts = maxNumberOfProductsInRound4;
    }
    if (currentRound === 3 || currentRound === 4) {
      const productIdArray = getProductIdArray(ns, DivisionName.TOBACCO);
      let numberOfDevelopedProducts = 0;
      if (productIdArray.length > 0) {
        numberOfDevelopedProducts = Math.max(...productIdArray) + 1;
      }
      if (numberOfDevelopedProducts >= maxNumberOfProducts) {
        const products = ns.corporation.getDivision(DivisionName.TOBACCO).products;
        const allProductsAreFinished = products.every((productName) => {
          const product = ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, productName);
          return product.developmentProgress === 100;
        });
        const getNewestProduct = () => {
          return ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, products[products.length - 1]);
        };
        const newestProduct = getNewestProduct();
        if (!preparingToAcceptOffer && newestProduct.developmentProgress > 98 && newestProduct.developmentProgress < 100) {
          preparingToAcceptOffer = true;
        }
        if (allProductsAreFinished) {
          const productDevelopmentBudget = totalFunds * 0.01;
          const newProductName = developNewProduct(
            ns,
            DivisionName.TOBACCO,
            mainProductDevelopmentCity,
            productDevelopmentBudget
          );
          if (newProductName) {
            corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
            availableFunds -= productDevelopmentBudget;
          }
          while (getNewestProduct().effectiveRating === 0) {
            await waitForNumberOfCycles(ns, 1);
            ++cycleCount;
          }
          await switchAllOfficesToProfitSetup(
            tobaccoIndustryData,
            // We must use the latest data of product
            getNewestProduct()
          );
          let expectedOffer = Number.MAX_VALUE;
          if (currentRound === 3) {
            expectedOffer = 1e16;
          } else if (currentRound === 4) {
            expectedOffer = 1e20;
          }
          const currentCycle = corporationEventLogger.cycle;
          await waitForOffer(ns, 10, 5, expectedOffer);
          cycleCount += corporationEventLogger.cycle - currentCycle;
          console.log(
            `Cycle: ${cycleCount}. Accept offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`
          );
          corporationEventLogger.generateOfferAcceptanceEvent(ns);
          ns.corporation.acceptInvestmentOffer();
          preparingToAcceptOffer = false;
          continue;
        }
      }
    }
    if (profit <= 1e40 || availableFunds >= 1e72) {
      let productDevelopmentBudget = totalFunds * 0.01;
      if (availableFunds >= 1e72) {
        productDevelopmentBudget = Math.max(productDevelopmentBudget, 1e72);
      }
      const newProductName = developNewProduct(
        ns,
        DivisionName.TOBACCO,
        mainProductDevelopmentCity,
        productDevelopmentBudget
      );
      if (newProductName) {
        console.log(`Develop ${newProductName}`);
        corporationEventLogger.generateNewProductEvent(ns, DivisionName.TOBACCO);
        availableFunds -= productDevelopmentBudget;
      }
    } else {
      const products = ns.corporation.getDivision(DivisionName.TOBACCO).products;
      const allProductsAreFinished = products.every((productName) => {
        const product = ns.corporation.getProduct(DivisionName.TOBACCO, mainProductDevelopmentCity, productName);
        return product.developmentProgress === 100;
      });
      if (allProductsAreFinished) {
        corporationEventLogger.generateSkipDevelopingNewProductEvent(ns);
      }
    }
    const tobaccoHasRevenue = ns.corporation.getDivision(DivisionName.TOBACCO).lastCycleRevenue > 0;
    const budgetForTobaccoDivision = totalFunds * 0.9;
    if (tobaccoHasRevenue && (cycleCount % 5 === 0 || needToUpgradeDivision(DivisionName.TOBACCO, budgetForTobaccoDivision))) {
      availableFunds -= budgetForTobaccoDivision;
      if (!pendingImprovingProductDivisions1.has(DivisionName.TOBACCO)) {
        const nonOfficesBudget = budgetForTobaccoDivision * (1 - budgetRatioForProductDivision.office);
        increaseReservedFunds(nonOfficesBudget);
        pendingImprovingProductDivisions1.set(
          DivisionName.TOBACCO,
          nonOfficesBudget
        );
        console.log(`Upgrade ${DivisionName.TOBACCO}-1, budget: ${ns.formatNumber(nonOfficesBudget)}`);
        console.time(DivisionName.TOBACCO + "-1");
        improveProductDivision(
          DivisionName.TOBACCO,
          budgetForTobaccoDivision,
          true,
          false,
          false
        ).catch((reason) => {
          console.error(`Error occurred when upgrading ${DivisionName.TOBACCO}`, reason);
        }).finally(() => {
          console.timeEnd(DivisionName.TOBACCO + "-1");
          decreaseReservedFunds(pendingImprovingProductDivisions1.get(DivisionName.TOBACCO) ?? 0);
          pendingImprovingProductDivisions1.delete(DivisionName.TOBACCO);
          buyBoostMaterialsIfNeeded(DivisionName.TOBACCO);
        });
      }
      if (!pendingImprovingProductDivisions2.has(DivisionName.TOBACCO) && !preparingToAcceptOffer) {
        const officesBudget = budgetForTobaccoDivision * budgetRatioForProductDivision.office;
        increaseReservedFunds(officesBudget);
        pendingImprovingProductDivisions2.set(DivisionName.TOBACCO, officesBudget);
        console.log(`Upgrade ${DivisionName.TOBACCO}-2, budget: ${ns.formatNumber(officesBudget)}`);
        console.time(DivisionName.TOBACCO + "-2");
        improveProductDivisionOffices(
          DivisionName.TOBACCO,
          tobaccoIndustryData,
          officesBudget,
          false,
          false
        ).catch((reason) => {
          console.error(`Error occurred when upgrading ${DivisionName.TOBACCO}`, reason);
        }).finally(() => {
          console.timeEnd(DivisionName.TOBACCO + "-2");
          decreaseReservedFunds(pendingImprovingProductDivisions2.get(DivisionName.TOBACCO) ?? 0);
          pendingImprovingProductDivisions2.delete(DivisionName.TOBACCO);
        });
      }
    }
    const budgetForAgricultureDivision = Math.max(
      Math.min(profit * (currentRound <= 4 ? 0.9 : 0.99), totalFunds * 0.09, availableFunds),
      0
    );
    if (tobaccoHasRevenue && (cycleCount % 10 === 0 || needToUpgradeDivision(DivisionName.AGRICULTURE, budgetForAgricultureDivision)) && !pendingImprovingSupportDivisions.has(DivisionName.AGRICULTURE)) {
      availableFunds -= budgetForAgricultureDivision;
      increaseReservedFunds(budgetForAgricultureDivision);
      pendingImprovingSupportDivisions.set(DivisionName.AGRICULTURE, budgetForAgricultureDivision);
      console.log(`Upgrade ${DivisionName.AGRICULTURE}, budget: ${ns.formatNumber(budgetForAgricultureDivision)}`);
      console.time(DivisionName.AGRICULTURE);
      improveSupportDivision(
        DivisionName.AGRICULTURE,
        budgetForAgricultureDivision,
        defaultBudgetRatioForSupportDivision,
        false,
        false
      ).catch((reason) => {
        console.error(`Error occurred when upgrading ${DivisionName.AGRICULTURE}`, reason);
      }).finally(() => {
        console.timeEnd(DivisionName.AGRICULTURE);
        decreaseReservedFunds(pendingImprovingSupportDivisions.get(DivisionName.AGRICULTURE) ?? 0);
        pendingImprovingSupportDivisions.delete(DivisionName.AGRICULTURE);
        buyBoostMaterialsIfNeeded(DivisionName.AGRICULTURE);
      });
    }
    const budgetForChemicalDivision = Math.max(
      Math.min(profit * (currentRound <= 4 ? 0.1 : 0.01), totalFunds * 0.01, availableFunds),
      0
    );
    if (tobaccoHasRevenue && (cycleCount % 15 === 0 || needToUpgradeDivision(DivisionName.CHEMICAL, budgetForChemicalDivision)) && !pendingImprovingSupportDivisions.has(DivisionName.CHEMICAL)) {
      availableFunds -= budgetForChemicalDivision;
      increaseReservedFunds(budgetForChemicalDivision);
      pendingImprovingSupportDivisions.set(DivisionName.CHEMICAL, budgetForChemicalDivision);
      console.log(`Upgrade ${DivisionName.CHEMICAL}, budget: ${ns.formatNumber(budgetForChemicalDivision)}`);
      console.time(DivisionName.CHEMICAL);
      improveSupportDivision(
        DivisionName.CHEMICAL,
        budgetForChemicalDivision,
        defaultBudgetRatioForSupportDivision,
        false,
        false
      ).catch((reason) => {
        console.error(`Error occurred when upgrading ${DivisionName.CHEMICAL}`, reason);
      }).finally(() => {
        console.timeEnd(DivisionName.CHEMICAL);
        decreaseReservedFunds(pendingImprovingSupportDivisions.get(DivisionName.CHEMICAL) ?? 0);
        pendingImprovingSupportDivisions.delete(DivisionName.CHEMICAL);
        buyBoostMaterialsIfNeeded(DivisionName.CHEMICAL);
      });
    }
    const producedPlants = ns.corporation.getMaterial(DivisionName.AGRICULTURE, mainProductDevelopmentCity, MaterialName.PLANTS).productionAmount;
    const consumedPlants = Math.abs(
      ns.corporation.getMaterial(DivisionName.TOBACCO, mainProductDevelopmentCity, MaterialName.PLANTS).productionAmount
    );
    if (consumedPlants > 0 && producedPlants / consumedPlants < 1) {
      console.debug(`plants ratio: ${producedPlants / consumedPlants}`);
    }
    await waitForNextTimeStateHappens(ns, CorpState.START);
  }
}
function needToUpgradeDivision(divisionName, budget) {
  const office = ns.corporation.getOffice(divisionName, CityName.Sector12);
  let expectedUpgradeSize = 30;
  if (ns.corporation.getInvestmentOffer().round <= 4) {
    expectedUpgradeSize = Math.min(office.size / 2, 30);
  }
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budget / 6);
  const needToUpgrade = maxOfficeSize >= office.size + expectedUpgradeSize;
  if (needToUpgrade) {
    console.debug(
      `needToUpgrade ${divisionName}, budget: ${ns.formatNumber(budget)}, office.size: ${office.size}, maxOfficeSize: ${maxOfficeSize}}`
    );
  }
  return needToUpgrade;
}
function getBalancingModifierForProfitProgress() {
  if (getProfit(ns) >= 1e35) {
    return {
      profit: 1,
      progress: 2.5
    };
  }
  return {
    profit: 1,
    progress: 5
  };
}
async function switchAllOfficesToProfitSetup(industryData, newestProduct) {
  const mainOffice = ns.corporation.getOffice(DivisionName.TOBACCO, mainProductDevelopmentCity);
  const officeSetup = {
    city: mainProductDevelopmentCity,
    size: mainOffice.numEmployees,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": 0
    }
  };
  if (usePrecalculatedEmployeeRatioForProfitSetup) {
    const precalculatedEmployeeRatioForProfitSetup = ns.corporation.getInvestmentOffer().round === 3 ? precalculatedEmployeeRatioForProfitSetupOfRound3 : precalculatedEmployeeRatioForProfitSetupOfRound4;
    officeSetup.jobs.Operations = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.operations);
    officeSetup.jobs.Engineer = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.engineer);
    officeSetup.jobs.Business = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProfitSetup.business);
    officeSetup.jobs.Management = officeSetup.size - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
  } else {
    const dataArray = await optimizeOffice(
      nsx,
      ns.corporation.getDivision(DivisionName.TOBACCO),
      industryData,
      mainProductDevelopmentCity,
      mainOffice.numEmployees,
      0,
      newestProduct,
      true,
      "profit",
      getBalancingModifierForProfitProgress(),
      0,
      // Do not rerun
      20,
      // Half of defaultPerformanceModifierForOfficeBenchmark
      false
    );
    const optimalData = dataArray[dataArray.length - 1];
    console.log(`Optimize all offices for "profit"`, optimalData);
    officeSetup.jobs = {
      Operations: optimalData.operations,
      Engineer: optimalData.engineer,
      Business: optimalData.business,
      Management: optimalData.management,
      "Research & Development": 0
    };
  }
  assignJobs(
    ns,
    DivisionName.TOBACCO,
    [officeSetup]
  );
  for (const city of supportProductDevelopmentCities) {
    const office = ns.corporation.getOffice(DivisionName.TOBACCO, city);
    const operations = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Operations / mainOffice.numEmployees)),
      1
    );
    const engineer = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Engineer / mainOffice.numEmployees)),
      1
    );
    const business = Math.max(
      Math.floor(office.numEmployees * (officeSetup.jobs.Business / mainOffice.numEmployees)),
      1
    );
    const management = office.numEmployees - (operations + engineer + business);
    assignJobs(
      ns,
      DivisionName.TOBACCO,
      [
        {
          city,
          size: office.numEmployees,
          jobs: {
            Operations: operations,
            Engineer: engineer,
            Business: business,
            Management: management,
            "Research & Development": 0
          }
        }
      ]
    );
  }
}
async function buyResearch() {
  if (ns.corporation.getInvestmentOffer().round <= 3) {
    return;
  }
  const buyResearches = (divisionName) => {
    let researchPriorities;
    if (divisionName === DivisionName.AGRICULTURE || divisionName === DivisionName.CHEMICAL) {
      researchPriorities = researchPrioritiesForSupportDivision;
    } else {
      researchPriorities = researchPrioritiesForProductDivision;
    }
    for (const researchPriority of researchPriorities) {
      if (ns.corporation.getInvestmentOffer().round === 4 && researchPriority.research !== ResearchName.HI_TECH_RND_LABORATORY) {
        break;
      }
      if (ns.corporation.hasResearched(divisionName, researchPriority.research)) {
        continue;
      }
      const researchCost = ns.corporation.getResearchCost(divisionName, researchPriority.research);
      if (ns.corporation.getDivision(divisionName).researchPoints < researchCost * researchPriority.costMultiplier) {
        break;
      }
      ns.corporation.research(divisionName, researchPriority.research);
    }
  };
  buyResearches(DivisionName.AGRICULTURE);
  buyResearches(DivisionName.CHEMICAL);
  buyResearches(DivisionName.TOBACCO);
}
async function improveSupportDivision(divisionName, totalBudget, budgetRatio, dryRun, enableLogging) {
  if (totalBudget < 0) {
    return;
  }
  const logger = new Logger(enableLogging);
  const currentFunds = ns.corporation.getCorporation().funds;
  const warehouseBudget = totalBudget * budgetRatio.warehouse / 6;
  const officeBudget = totalBudget * budgetRatio.office / 6;
  const officeSetups = [];
  for (const city2 of cities) {
    logger.city = city2;
    const currentWarehouseLevel = ns.corporation.getWarehouse(divisionName, city2).level;
    const newWarehouseLevel = getMaxAffordableWarehouseLevel(currentWarehouseLevel, warehouseBudget);
    if (newWarehouseLevel > currentWarehouseLevel && !dryRun) {
      ns.corporation.upgradeWarehouse(divisionName, city2, newWarehouseLevel - currentWarehouseLevel);
    }
    logger.log(
      `Division ${divisionName}: currentWarehouseLevel: ${currentWarehouseLevel}, newWarehouseLevel: ${ns.corporation.getWarehouse(divisionName, city2).level}`
    );
  }
  const city = CityName.Sector12;
  logger.city = city;
  const office = ns.corporation.getOffice(divisionName, city);
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, officeBudget);
  logger.log(`City: ${city}. currentOfficeSize: ${office.size}, maxOfficeSize: ${maxOfficeSize}`);
  if (maxOfficeSize < 6) {
    throw new Error(`Budget for office is too low. Division: ${divisionName}. Office's budget: ${ns.formatNumber(officeBudget)}`);
  }
  const rndEmployee = Math.min(
    Math.floor(maxOfficeSize * 0.2),
    maxOfficeSize - 3
  );
  const nonRnDEmployees = maxOfficeSize - rndEmployee;
  const officeSetup = {
    city,
    size: maxOfficeSize,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": rndEmployee
    }
  };
  if (usePrecalculatedEmployeeRatioForSupportDivisions) {
    officeSetup.jobs.Operations = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.operations);
    officeSetup.jobs.Business = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.business);
    officeSetup.jobs.Management = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForSupportDivisions.management);
    officeSetup.jobs.Engineer = nonRnDEmployees - (officeSetup.jobs.Operations + officeSetup.jobs.Business + officeSetup.jobs.Management);
  } else {
    let item;
    switch (divisionName) {
      case DivisionName.AGRICULTURE:
        item = ns.corporation.getMaterial(divisionName, city, MaterialName.PLANTS);
        break;
      case DivisionName.CHEMICAL:
        item = ns.corporation.getMaterial(divisionName, city, MaterialName.CHEMICALS);
        break;
      default:
        throw new Error(`Invalid division: ${divisionName}`);
    }
    if (nonRnDEmployees <= 3) {
      throw new Error("Invalid R&D ratio");
    }
    const division = ns.corporation.getDivision(divisionName);
    const industryData = ns.corporation.getIndustryData(division.type);
    const dataArray = await optimizeOffice(
      nsx,
      division,
      industryData,
      city,
      nonRnDEmployees,
      rndEmployee,
      item,
      true,
      "rawProduction",
      getBalancingModifierForProfitProgress(),
      0,
      // Do not rerun
      20,
      // Half of defaultPerformanceModifierForOfficeBenchmark
      enableLogging,
      {
        engineer: Math.floor(nonRnDEmployees * 0.625),
        business: 0
      }
    );
    if (dataArray.length === 0) {
      throw new Error(`Cannot calculate optimal office setup. Division: ${divisionName}, nonRnDEmployees: ${nonRnDEmployees}`);
    } else {
      const optimalData = dataArray[dataArray.length - 1];
      officeSetup.jobs = {
        Operations: optimalData.operations,
        Engineer: optimalData.engineer,
        Business: optimalData.business,
        Management: optimalData.management,
        "Research & Development": rndEmployee
      };
    }
    logger.log("Optimal officeSetup:", JSON.stringify(officeSetup));
  }
  for (const city2 of cities) {
    officeSetups.push({
      city: city2,
      size: officeSetup.size,
      jobs: officeSetup.jobs
    });
  }
  logger.city = void 0;
  if (!dryRun) {
    upgradeOffices(ns, divisionName, officeSetups);
  }
  logger.log(`Spent: ${ns.formatNumber(currentFunds - ns.corporation.getCorporation().funds)}`);
}
function improveProductDivisionRawProduction(divisionName, industryData, divisionResearches, budget, dryRun, benchmark, enableLogging) {
  const logger = new Logger(enableLogging);
  const dataArray = benchmark.optimizeStorageAndFactory(
    industryData,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_STORAGE),
    // Assume that all warehouses are at the same level
    ns.corporation.getWarehouse(divisionName, CityName.Sector12).level,
    ns.corporation.getUpgradeLevel(UpgradeName.SMART_FACTORIES),
    divisionResearches,
    budget,
    enableLogging
  );
  if (dataArray.length === 0) {
    return;
  }
  const optimalData = dataArray[dataArray.length - 1];
  logger.log(`rawProduction: ${JSON.stringify(optimalData)}`);
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.SMART_STORAGE, optimalData.smartStorageLevel);
    buyUpgrade(ns, UpgradeName.SMART_FACTORIES, optimalData.smartFactoriesLevel);
    for (const city of cities) {
      const currentWarehouseLevel = ns.corporation.getWarehouse(divisionName, city).level;
      if (optimalData.warehouseLevel > currentWarehouseLevel) {
        ns.corporation.upgradeWarehouse(
          divisionName,
          city,
          optimalData.warehouseLevel - currentWarehouseLevel
        );
      }
    }
  }
}
function improveProductDivisionWilsonAdvert(divisionName, industryData, divisionResearches, budget, dryRun, benchmark, enableLogging) {
  const logger = new Logger(enableLogging);
  const division = ns.corporation.getDivision(divisionName);
  const dataArray = benchmark.optimizeWilsonAndAdvert(
    industryData,
    ns.corporation.getUpgradeLevel(UpgradeName.WILSON_ANALYTICS),
    ns.corporation.getHireAdVertCount(divisionName),
    division.awareness,
    division.popularity,
    divisionResearches,
    budget,
    enableLogging
  );
  if (dataArray.length === 0) {
    return;
  }
  const optimalData = dataArray[dataArray.length - 1];
  logger.log(`wilsonAdvert: ${JSON.stringify(optimalData)}`);
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.WILSON_ANALYTICS, optimalData.wilsonLevel);
    buyAdvert(ns, divisionName, optimalData.advertLevel);
  }
}
async function improveProductDivisionMainOffice(divisionName, industryData, budget, dryRun, enableLogging) {
  const logger = new Logger(enableLogging);
  const profit = getProfit(ns);
  const division = ns.corporation.getDivision(divisionName);
  const office = ns.corporation.getOffice(divisionName, mainProductDevelopmentCity);
  const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budget);
  if (maxOfficeSize < office.size) {
    return;
  }
  const officeSetup = {
    city: mainProductDevelopmentCity,
    size: maxOfficeSize,
    jobs: {
      Operations: 0,
      Engineer: 0,
      Business: 0,
      Management: 0,
      "Research & Development": 0
    }
  };
  const products = division.products;
  let item;
  let sortType;
  let useCurrentItemData = true;
  if (usePrecalculatedEmployeeRatioForProductDivision) {
    let precalculatedEmployeeRatioForProductDivision;
    if (ns.corporation.getInvestmentOffer().round === 3) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound3;
    } else if (ns.corporation.getInvestmentOffer().round === 4) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound4;
    } else if (ns.corporation.getInvestmentOffer().round === 5 && profit < 1e30) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound5_1;
    } else if (ns.corporation.getInvestmentOffer().round === 5 && profit >= 1e30) {
      precalculatedEmployeeRatioForProductDivision = precalculatedEmployeeRatioForProductDivisionRound5_2;
    } else {
      throw new Error("Invalid precalculated employee ratio");
    }
    officeSetup.jobs.Operations = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.operations);
    officeSetup.jobs.Engineer = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.engineer);
    officeSetup.jobs.Business = Math.floor(officeSetup.size * precalculatedEmployeeRatioForProductDivision.business);
    if (officeSetup.jobs.Business === 0) {
      officeSetup.jobs.Business = 1;
    }
    officeSetup.jobs.Management = officeSetup.size - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
  } else {
    if (ns.corporation.getInvestmentOffer().round === 3 || ns.corporation.getInvestmentOffer().round === 4) {
      sortType = "progress";
    } else {
      sortType = "profit_progress";
    }
    let bestProduct = null;
    let highestEffectiveRating = Number.MIN_VALUE;
    for (const productName of products) {
      const product = ns.corporation.getProduct(divisionName, mainProductDevelopmentCity, productName);
      if (product.developmentProgress < 100) {
        continue;
      }
      if (product.effectiveRating > highestEffectiveRating) {
        bestProduct = product;
        highestEffectiveRating = product.effectiveRating;
      }
    }
    if (!bestProduct) {
      useCurrentItemData = false;
      item = {
        name: sampleProductName,
        demand: 54,
        competition: 35,
        rating: 36e3,
        effectiveRating: 36e3,
        stats: {
          quality: 42e3,
          performance: 46e3,
          durability: 2e4,
          reliability: 31e3,
          aesthetics: 25e3,
          features: 37e3
        },
        // Material's market price is different between cities. We use Sector12's price as reference price.
        productionCost: getProductMarketPrice(ns, division, industryData, CityName.Sector12),
        desiredSellPrice: 0,
        desiredSellAmount: 0,
        stored: 0,
        productionAmount: 0,
        actualSellAmount: 0,
        developmentProgress: 100,
        advertisingInvestment: ns.corporation.getCorporation().funds * 0.01 / 2,
        designInvestment: ns.corporation.getCorporation().funds * 0.01 / 2,
        size: 0.05
      };
    } else {
      item = bestProduct;
      logger.log(`Use product: ${JSON.stringify(item)}`);
    }
    const dataArray = await optimizeOffice(
      nsx,
      division,
      industryData,
      mainProductDevelopmentCity,
      maxOfficeSize,
      0,
      item,
      useCurrentItemData,
      sortType,
      getBalancingModifierForProfitProgress(),
      maxRerunWhenOptimizingOfficeForProductDivision,
      defaultPerformanceModifierForOfficeBenchmark,
      enableLogging
    );
    if (dataArray.length === 0) {
      throw new Error(`Cannot calculate optimal office setup. maxTotalEmployees: ${maxOfficeSize}`);
    }
    const optimalData = dataArray[dataArray.length - 1];
    officeSetup.jobs = {
      Operations: optimalData.operations,
      Engineer: optimalData.engineer,
      Business: optimalData.business,
      Management: optimalData.management,
      "Research & Development": 0
    };
  }
  logger.log(`mainOffice: ${JSON.stringify(officeSetup)}`);
  if (!dryRun) {
    upgradeOffices(ns, divisionName, [officeSetup]);
  }
}
async function improveProductDivisionSupportOffices(divisionName, budget, dryRun, enableLogging) {
  const logger = new Logger(enableLogging);
  const officeSetups = [];
  if (budget > ns.corporation.getCorporation().funds) {
    console.warn(
      `Budget is higher than current funds. Budget: ${ns.formatNumber(budget)}, funds: ${ns.formatNumber(ns.corporation.getCorporation().funds)}`
    );
    budget = ns.corporation.getCorporation().funds * 0.9;
  }
  const budgetForEachOffice = budget / 5;
  for (const city of supportProductDevelopmentCities) {
    const office = ns.corporation.getOffice(divisionName, city);
    const maxOfficeSize = getMaxAffordableOfficeSize(office.size, budgetForEachOffice);
    if (maxOfficeSize < 5) {
      throw new Error(`Budget for office is too low. Division: ${divisionName}. Office's budget: ${ns.formatNumber(budgetForEachOffice)}`);
    }
    if (maxOfficeSize < office.size) {
      continue;
    }
    const officeSetup = {
      city,
      size: maxOfficeSize,
      jobs: {
        Operations: 0,
        Engineer: 0,
        Business: 0,
        Management: 0,
        "Research & Development": 0
      }
    };
    if (ns.corporation.getInvestmentOffer().round === 3 && maxNumberOfProductsInRound3 === 1) {
      officeSetup.jobs.Operations = 0;
      officeSetup.jobs.Engineer = 0;
      officeSetup.jobs.Business = 0;
      officeSetup.jobs.Management = 0;
      officeSetup.jobs["Research & Development"] = maxOfficeSize;
    } else if (ns.corporation.getInvestmentOffer().round === 3 || ns.corporation.getInvestmentOffer().round === 4) {
      officeSetup.jobs.Operations = 1;
      officeSetup.jobs.Engineer = 1;
      officeSetup.jobs.Business = 1;
      officeSetup.jobs.Management = 1;
      officeSetup.jobs["Research & Development"] = maxOfficeSize - 4;
    } else {
      const rndEmployee = Math.min(
        Math.floor(maxOfficeSize * 0.5),
        maxOfficeSize - 4
      );
      const nonRnDEmployees = maxOfficeSize - rndEmployee;
      officeSetup.jobs.Operations = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.operations);
      officeSetup.jobs.Engineer = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.engineer);
      officeSetup.jobs.Business = Math.floor(nonRnDEmployees * precalculatedEmployeeRatioForProfitSetupOfRound4.business);
      officeSetup.jobs.Management = nonRnDEmployees - (officeSetup.jobs.Operations + officeSetup.jobs.Engineer + officeSetup.jobs.Business);
      officeSetup.jobs["Research & Development"] = rndEmployee;
    }
    officeSetups.push(officeSetup);
  }
  logger.log(`supportOffices: ${JSON.stringify(officeSetups)}`);
  if (!dryRun) {
    upgradeOffices(ns, divisionName, officeSetups);
  }
}
async function improveProductDivisionOffices(divisionName, industryData, budget, dryRun, enableLogging) {
  let ratio = {
    mainOffice: 0.5,
    supportOffices: 0.5
  };
  if (ns.corporation.getInvestmentOffer().round === 3) {
    ratio = {
      mainOffice: 0.75,
      supportOffices: 0.25
    };
  }
  await improveProductDivisionMainOffice(
    divisionName,
    industryData,
    budget * ratio.mainOffice,
    dryRun,
    enableLogging
  );
  await improveProductDivisionSupportOffices(
    divisionName,
    budget * ratio.supportOffices,
    dryRun,
    enableLogging
  );
}
async function improveProductDivision(divisionName, totalBudget, skipUpgradingOffice, dryRun, enableLogging) {
  if (totalBudget < 0) {
    return;
  }
  const logger = new Logger(enableLogging);
  const division = ns.corporation.getDivision(divisionName);
  const industryData = ns.corporation.getIndustryData(division.type);
  const divisionResearches = getDivisionResearches(ns, divisionName);
  const benchmark = new CorporationOptimizer();
  const currentFunds = ns.corporation.getCorporation().funds;
  if (getProfit(ns) >= thresholdOfFocusingOnAdvert) {
    budgetRatioForProductDivision = budgetRatioForProductDivisionWithoutAdvert;
  }
  const employeeStatUpgradesBudget = totalBudget * budgetRatioForProductDivision.employeeStatUpgrades;
  const currentCreativityUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS);
  const currentCharismaUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.SPEECH_PROCESSOR_IMPLANTS);
  const currentIntelligenceUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.NEURAL_ACCELERATORS);
  const currentEfficiencyUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.FOCUS_WIRES);
  const newCreativityUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS,
    currentCreativityUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newCharismaUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.SPEECH_PROCESSOR_IMPLANTS,
    currentCharismaUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newIntelligenceUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.NEURAL_ACCELERATORS,
    currentIntelligenceUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  const newEfficiencyUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.FOCUS_WIRES,
    currentEfficiencyUpgradeLevel,
    employeeStatUpgradesBudget / 4
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS, newCreativityUpgradeLevel);
    buyUpgrade(ns, UpgradeName.SPEECH_PROCESSOR_IMPLANTS, newCharismaUpgradeLevel);
    buyUpgrade(ns, UpgradeName.NEURAL_ACCELERATORS, newIntelligenceUpgradeLevel);
    buyUpgrade(ns, UpgradeName.FOCUS_WIRES, newEfficiencyUpgradeLevel);
  }
  const salesBotBudget = totalBudget * budgetRatioForProductDivision.salesBot;
  const currentSalesBotUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.ABC_SALES_BOTS);
  const newSalesBotUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.ABC_SALES_BOTS,
    currentSalesBotUpgradeLevel,
    salesBotBudget
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.ABC_SALES_BOTS, newSalesBotUpgradeLevel);
  }
  const projectInsightBudget = totalBudget * budgetRatioForProductDivision.projectInsight;
  const currentProjectInsightUpgradeLevel = ns.corporation.getUpgradeLevel(UpgradeName.PROJECT_INSIGHT);
  const newProjectInsightUpgradeLevel = getMaxAffordableUpgradeLevel(
    UpgradeName.PROJECT_INSIGHT,
    currentProjectInsightUpgradeLevel,
    projectInsightBudget
  );
  if (!dryRun) {
    buyUpgrade(ns, UpgradeName.PROJECT_INSIGHT, newProjectInsightUpgradeLevel);
  }
  const rawProductionBudget = totalBudget * budgetRatioForProductDivision.rawProduction;
  improveProductDivisionRawProduction(
    division.name,
    industryData,
    divisionResearches,
    rawProductionBudget,
    dryRun,
    benchmark,
    enableLogging
  );
  const wilsonAdvertBudget = totalBudget * budgetRatioForProductDivision.wilsonAdvert;
  improveProductDivisionWilsonAdvert(
    division.name,
    industryData,
    divisionResearches,
    wilsonAdvertBudget,
    dryRun,
    benchmark,
    enableLogging
  );
  if (!skipUpgradingOffice) {
    const officesBudget = totalBudget * budgetRatioForProductDivision.office;
    await improveProductDivisionOffices(
      division.name,
      industryData,
      officesBudget,
      dryRun,
      enableLogging
    );
  }
  logger.log(`Spent: ${ns.formatNumber(currentFunds - ns.corporation.getCorporation().funds)}`);
}
function resetStatistics() {
  globalThis.Player.corporation.cycleCount = 0;
  globalThis.corporationCycleHistory = [];
  corporationEventLogger.cycle = 0;
  corporationEventLogger.clearEventData();
}
async function test() {
}
async function main(nsContext) {
  init(nsContext);
  if (ns.getResetInfo().currentNode !== 3) {
    throw new Error("This script is specialized for BN3");
  }
  config = ns.flags(defaultConfig);
  if (config.help === true) {
    ns.tprint(`Default config: ${defaultConfig}`);
    return;
  }
  ns.disableLog("ALL");
  ns.clearLog();
  if (!ns.corporation.hasCorporation()) {
    if (!ns.corporation.createCorporation("Corp", config.selfFund)) {
      ns.print(`Cannot create corporation`);
      return;
    }
  }
  nsx.addAtExitCallback(() => {
    clearPurchaseOrders(ns, false);
  });
  agricultureIndustryData = ns.corporation.getIndustryData(IndustryType.AGRICULTURE);
  chemicalIndustryData = ns.corporation.getIndustryData(IndustryType.CHEMICAL);
  tobaccoIndustryData = ns.corporation.getIndustryData(IndustryType.TOBACCO);
  if (config.benchmark === true) {
    exposeGameInternalObjects();
    testingTools.resetRNGData();
    enableTestingTools = true;
  }
  if (config.round1 === true) {
    await round1();
    return;
  }
  if (config.round2 === true) {
    await round2();
    return;
  }
  if (config.round3 === true) {
    await round3();
    return;
  }
  if (config.improveAllDivisions === true) {
    nsx.killProcessesSpawnFromSameScript();
    ns.tail();
    await improveAllDivisions();
    return;
  }
  if (config.test) {
    ns.tail();
    await test();
    return;
  }
}
export {
  autocomplete,
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBdXRvY29tcGxldGVEYXRhLCBDb3JwSW5kdXN0cnlEYXRhLCBNYXRlcmlhbCwgTlMsIFByb2R1Y3QgfSBmcm9tIFwiQG5zXCI7XG5pbXBvcnQge1xuICAgIE5ldHNjcmlwdEV4dGVuc2lvbixcbiAgICBOZXRzY3JpcHRGbGFncyxcbiAgICBOZXRzY3JpcHRGbGFnc1NjaGVtYSxcbiAgICBwYXJzZUF1dG9Db21wbGV0ZURhdGFGcm9tRGVmYXVsdENvbmZpZ1xufSBmcm9tIFwiL2xpYnMvTmV0c2NyaXB0RXh0ZW5zaW9uXCI7XG5pbXBvcnQge1xuICAgIENpdHlOYW1lLFxuICAgIENvcnBTdGF0ZSxcbiAgICBEaXZpc2lvblJlc2VhcmNoZXMsXG4gICAgRW1wbG95ZWVQb3NpdGlvbixcbiAgICBnZXRNYXhBZmZvcmRhYmxlQWRWZXJ0TGV2ZWwsXG4gICAgZ2V0TWF4QWZmb3JkYWJsZU9mZmljZVNpemUsXG4gICAgZ2V0TWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbCxcbiAgICBnZXRNYXhBZmZvcmRhYmxlV2FyZWhvdXNlTGV2ZWwsXG4gICAgSW5kdXN0cnlUeXBlLFxuICAgIE1hdGVyaWFsTmFtZSxcbiAgICBPZmZpY2VTZXR1cCxcbiAgICBSZXNlYXJjaE5hbWUsXG4gICAgUmVzZWFyY2hQcmlvcml0eSxcbiAgICBVbmxvY2tOYW1lLFxuICAgIFVwZ3JhZGVOYW1lXG59IGZyb20gXCIvY29ycG9yYXRpb25Gb3JtdWxhc1wiO1xuaW1wb3J0IHtcbiAgICBhc3NpZ25Kb2JzLFxuICAgIGJ1eUFkdmVydCxcbiAgICBidXlCb29zdE1hdGVyaWFscyxcbiAgICBidXlUZWFBbmRUaHJvd1BhcnR5LFxuICAgIGJ1eVVubG9jayxcbiAgICBidXlVcGdyYWRlLFxuICAgIGNpdGllcyxcbiAgICBjbGVhclB1cmNoYXNlT3JkZXJzLFxuICAgIGNyZWF0ZURpdmlzaW9uLFxuICAgIGNyZWF0ZUR1bW15RGl2aXNpb25zLFxuICAgIGRldmVsb3BOZXdQcm9kdWN0LFxuICAgIERpdmlzaW9uTmFtZSxcbiAgICBleHBvcnRTdHJpbmcsXG4gICAgZmluZE9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzLFxuICAgIGdlbmVyYXRlTWF0ZXJpYWxzT3JkZXJzLFxuICAgIGdlbmVyYXRlT2ZmaWNlU2V0dXBzLFxuICAgIGdldERpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICBnZXRQcm9kdWN0SWRBcnJheSxcbiAgICBnZXRQcm9kdWN0TWFya2V0UHJpY2UsXG4gICAgZ2V0UHJvZml0LFxuICAgIGhhc0RpdmlzaW9uLFxuICAgIExvZ2dlcixcbiAgICByZXNlYXJjaFByaW9yaXRpZXNGb3JQcm9kdWN0RGl2aXNpb24sXG4gICAgcmVzZWFyY2hQcmlvcml0aWVzRm9yU3VwcG9ydERpdmlzaW9uLFxuICAgIHNhbXBsZVByb2R1Y3ROYW1lLFxuICAgIHN0b2NrTWF0ZXJpYWxzLFxuICAgIHVwZ3JhZGVPZmZpY2VzLFxuICAgIHVwZ3JhZGVXYXJlaG91c2UsXG4gICAgd2FpdEZvck51bWJlck9mQ3ljbGVzLFxuICAgIHdhaXRGb3JPZmZlcixcbiAgICB3YWl0Rm9yTmV4dFRpbWVTdGF0ZUhhcHBlbnMsXG4gICAgd2FpdFVudGlsSGF2aW5nRW5vdWdoUmVzZWFyY2hQb2ludHMsXG4gICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kc1xufSBmcm9tIFwiL2NvcnBvcmF0aW9uVXRpbHNcIjtcbmltcG9ydCB7IG9wdGltaXplT2ZmaWNlIH0gZnJvbSBcIi9jb3Jwb3JhdGlvbk9wdGltaXplclRvb2xzXCI7XG5pbXBvcnQge1xuICAgIEJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MsXG4gICAgQ29ycG9yYXRpb25PcHRpbWl6ZXIsXG4gICAgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmssXG4gICAgT2ZmaWNlQmVuY2htYXJrU29ydFR5cGUsXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDMsXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDQsXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMSxcbiAgICBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNV8yLFxuICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kMyxcbiAgICBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDQsXG4gICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JTdXBwb3J0RGl2aXNpb25zXG59IGZyb20gXCIvY29ycG9yYXRpb25PcHRpbWl6ZXJcIjtcbmltcG9ydCAqIGFzIHRlc3RpbmdUb29scyBmcm9tIFwiL2NvcnBvcmF0aW9uVGVzdGluZ1Rvb2xzXCI7XG5pbXBvcnQgeyBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyIH0gZnJvbSBcIi9jb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyXCI7XG5pbXBvcnQgeyBleHBvc2VHYW1lSW50ZXJuYWxPYmplY3RzIH0gZnJvbSBcIi9leHBsb2l0c1wiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGRhdGE6IEF1dG9jb21wbGV0ZURhdGEsIGZsYWdzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gcGFyc2VBdXRvQ29tcGxldGVEYXRhRnJvbURlZmF1bHRDb25maWcoZGF0YSwgZGVmYXVsdENvbmZpZyk7XG59XG5cbmludGVyZmFjZSBSb3VuZDFPcHRpb24ge1xuICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogbnVtYmVyO1xuICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiBudW1iZXI7XG4gICAgYm9vc3RNYXRlcmlhbHNSYXRpbzogbnVtYmVyO1xufVxuXG5jb25zdCBQcmVjYWxjdWxhdGVkUm91bmQxT3B0aW9uID0ge1xuICAgIC8vIDE0OTggLSA2MS4zNDRlOSAtIDUwNC44ZTkgLSA0NDMuNDU2ZTkgLSA0Ljg5bS9zIC0gMTcuNjA0Yi9oXG4gICAgT1BUSU9OMTogPFJvdW5kMU9wdGlvbj57XG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogMyxcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDU1LFxuICAgICAgICBib29zdE1hdGVyaWFsc1JhdGlvOiAwLjg5XG4gICAgICAgIC8vIGJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuODggLy8gU21hcnQgU3VwcGx5IC0gQWR2ZXJ0IDFcbiAgICB9LFxuICAgIC8vIDE2NDkgLSA1MS40NmU5IC0gNTU3LjFlOSAtIDUwNS42NGU5IC0gNS4zODFlNi9zIC0gMTkuMzcxL2hcbiAgICBPUFRJT04yOiA8Um91bmQxT3B0aW9uPntcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA0LFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTUsXG4gICAgICAgIGJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuODZcbiAgICAgICAgLy8gYm9vc3RNYXRlcmlhbHNSYXRpbzogMC44NCAvLyBTbWFydCBTdXBwbHlcbiAgICB9LFxuICAgIC8vIDE1ODggLSA0Mi43MDRlOSAtIDUzNi44ZTkgLSA0OTQuMDk2ZTkgLSA1LjE3Nm0vcyAtIDE4LjYzM2IvaFxuICAgIE9QVElPTjM6IDxSb3VuZDFPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDUsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA1NSxcbiAgICAgICAgYm9vc3RNYXRlcmlhbHNSYXRpbzogMC44NFxuICAgIH0sXG4gICAgLy8gMTQ0MSAtIDM0LjEzZTkgLSA0ODcuNWU5IC0gNDUzLjM3ZTkgLSA0LjY5NG0vcyAtIDE2Ljg5OGIvaFxuICAgIE9QVElPTjQ6IDxSb3VuZDFPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDYsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA1NSxcbiAgICAgICAgYm9vc3RNYXRlcmlhbHNSYXRpbzogMC44MTVcbiAgICB9LFxufSBhcyBjb25zdDtcblxuaW50ZXJmYWNlIFJvdW5kMk9wdGlvbiB7XG4gICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiBudW1iZXI7XG4gICAgaW5jcmVhc2VCdXNpbmVzczogYm9vbGVhbjtcbiAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogbnVtYmVyO1xuICAgIHdhaXRGb3JDaGVtaWNhbFJQOiBudW1iZXI7XG4gICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiBudW1iZXI7XG59XG5cbmNvbnN0IFByZWNhbGN1bGF0ZWRSb3VuZDJPcHRpb24gPSB7XG4gICAgLy8gMTUuMjY2ZTEyIDE3MjgyIDgwNC4xNzVcbiAgICBPUFRJT04xOiA8Um91bmQyT3B0aW9uPntcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LCAvLyAzLTEtMS0zXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IGZhbHNlLFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogOTAzLFxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogNTE2LFxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzVcbiAgICB9LFxuICAgIC8vIDE0LjU3ZTEyIDE2NDg1IDgxNS4xODhcbiAgICBPUFRJT04yOiA8Um91bmQyT3B0aW9uPntcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LFxuICAgICAgICBpbmNyZWFzZUJ1c2luZXNzOiB0cnVlLFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNzAzLFxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMzkzLFxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzZcbiAgICB9LFxuICAgIC8vIDE0LjQ3NGUxMlxuICAgIE9QVElPTjM6IDxSb3VuZDJPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA2NTMsXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzNjIsXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC43NTVcbiAgICB9LFxuICAgIC8vIDEzLjk5NGUxMlxuICAgIE9QVElPTjQ6IDxSb3VuZDJPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA2MDIsXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzMzEsXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC43NFxuICAgIH0sXG4gICAgLy8gMTMuNzQyZTEyXG4gICAgT1BUSU9ONTogPFJvdW5kMk9wdGlvbj57XG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMi0xLTMtMlxuICAgICAgICBpbmNyZWFzZUJ1c2luZXNzOiB0cnVlLFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNjAyLFxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMzMxLFxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzdcbiAgICB9LFxuICAgIC8vIDEzLjQyNWUxMlxuICAgIE9QVElPTjY6IDxSb3VuZDJPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiA1NTEsXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAzMDAsXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC43MVxuICAgIH0sXG4gICAgLy8gMTMuN2UxMlxuICAgIE9QVElPTjc6IDxSb3VuZDJPcHRpb24+e1xuICAgICAgICBhZ3JpY3VsdHVyZU9mZmljZVNpemU6IDgsIC8vIDItMS0zLTJcbiAgICAgICAgaW5jcmVhc2VCdXNpbmVzczogdHJ1ZSxcbiAgICAgICAgd2FpdEZvckFncmljdWx0dXJlUlA6IDU1MSxcbiAgICAgICAgd2FpdEZvckNoZW1pY2FsUlA6IDMwMCxcbiAgICAgICAgYWdyaWN1bHR1cmVCb29zdE1hdGVyaWFsc1JhdGlvOiAwLjc3XG4gICAgfSxcbiAgICAvLyAxMy42ZTEyXG4gICAgT1BUSU9OODogPFJvdW5kMk9wdGlvbj57XG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMi0xLTMtMlxuICAgICAgICBpbmNyZWFzZUJ1c2luZXNzOiB0cnVlLFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNTAwLFxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMjY5LFxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzdcbiAgICB9LFxuICAgIC8vIDEzZTEyXG4gICAgT1BUSU9OOTogPFJvdW5kMk9wdGlvbj57XG4gICAgICAgIGFncmljdWx0dXJlT2ZmaWNlU2l6ZTogOCwgLy8gMi0xLTMtMlxuICAgICAgICBpbmNyZWFzZUJ1c2luZXNzOiB0cnVlLFxuICAgICAgICB3YWl0Rm9yQWdyaWN1bHR1cmVSUDogNDUwLFxuICAgICAgICB3YWl0Rm9yQ2hlbWljYWxSUDogMjM4LFxuICAgICAgICBhZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW86IDAuNzNcbiAgICB9LFxuICAgIC8vIDEwLjg4NGUxMlxuICAgIE9QVElPTjEwOiA8Um91bmQyT3B0aW9uPntcbiAgICAgICAgYWdyaWN1bHR1cmVPZmZpY2VTaXplOiA4LCAvLyAyLTEtMy0yXG4gICAgICAgIGluY3JlYXNlQnVzaW5lc3M6IHRydWUsXG4gICAgICAgIHdhaXRGb3JBZ3JpY3VsdHVyZVJQOiAzMDIsXG4gICAgICAgIHdhaXRGb3JDaGVtaWNhbFJQOiAxNDgsXG4gICAgICAgIGFncmljdWx0dXJlQm9vc3RNYXRlcmlhbHNSYXRpbzogMC42MVxuICAgIH1cbn0gYXMgY29uc3Q7XG5cbmludGVyZmFjZSBSb3VuZDNPcHRpb24ge1xufVxuXG5jb25zdCBQcmVjYWxjdWxhdGVkUm91bmQzT3B0aW9uID0ge1xuICAgIE9QVElPTjE6IDxSb3VuZDNPcHRpb24+e30sXG59IGFzIGNvbnN0O1xuXG5jb25zdCBkZWZhdWx0QnVkZ2V0UmF0aW9Gb3JTdXBwb3J0RGl2aXNpb24gPSB7XG4gICAgd2FyZWhvdXNlOiAwLjEsXG4gICAgb2ZmaWNlOiAwLjlcbn07XG5cbmNvbnN0IGRlZmF1bHRCdWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IHtcbiAgICByYXdQcm9kdWN0aW9uOiAxIC8gMjMsXG4gICAgd2lsc29uQWR2ZXJ0OiA0IC8gMjMsXG4gICAgb2ZmaWNlOiA4IC8gMjMsXG4gICAgZW1wbG95ZWVTdGF0VXBncmFkZXM6IDggLyAyMyxcbiAgICBzYWxlc0JvdDogMSAvIDIzLFxuICAgIHByb2plY3RJbnNpZ2h0OiAxIC8gMjMsXG59O1xuXG5jb25zdCBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbldpdGhvdXRBZHZlcnQgPSB7XG4gICAgcmF3UHJvZHVjdGlvbjogMSAvIDE5LFxuICAgIHdpbHNvbkFkdmVydDogMCxcbiAgICBvZmZpY2U6IDggLyAxOSxcbiAgICBlbXBsb3llZVN0YXRVcGdyYWRlczogOCAvIDE5LFxuICAgIHNhbGVzQm90OiAxIC8gMTksXG4gICAgcHJvamVjdEluc2lnaHQ6IDEgLyAxOSxcbn07XG5cbmNvbnN0IG1heFJlcnVuV2hlbk9wdGltaXppbmdPZmZpY2VGb3JQcm9kdWN0RGl2aXNpb24gPSAwO1xuXG5jb25zdCB1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclN1cHBvcnREaXZpc2lvbnMgPSB0cnVlO1xuXG5jb25zdCB1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwID0gdHJ1ZTtcblxuY29uc3QgdXNlUHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSB0cnVlO1xuXG5jb25zdCBtYXhOdW1iZXJPZlByb2R1Y3RzSW5Sb3VuZDMgPSAxO1xuXG5jb25zdCBtYXhOdW1iZXJPZlByb2R1Y3RzSW5Sb3VuZDQgPSAyO1xuXG5jb25zdCB0aHJlc2hvbGRPZkZvY3VzaW5nT25BZHZlcnQgPSAxZTE4O1xuXG5sZXQgbnM6IE5TO1xubGV0IG5zeDogTmV0c2NyaXB0RXh0ZW5zaW9uO1xubGV0IGNvbmZpZzogTmV0c2NyaXB0RmxhZ3M7XG5sZXQgZW5hYmxlVGVzdGluZ1Rvb2xzOiBib29sZWFuID0gZmFsc2U7XG5sZXQgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHk6IENpdHlOYW1lO1xubGV0IHN1cHBvcnRQcm9kdWN0RGV2ZWxvcG1lbnRDaXRpZXM6IENpdHlOYW1lW107XG5sZXQgYWdyaWN1bHR1cmVJbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGE7XG5sZXQgY2hlbWljYWxJbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGE7XG5sZXQgdG9iYWNjb0luZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YTtcbmxldCBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IGRlZmF1bHRCdWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbjtcblxuY29uc3QgZGVmYXVsdENvbmZpZzogTmV0c2NyaXB0RmxhZ3NTY2hlbWEgPSBbXG4gICAgW1wiYmVuY2htYXJrXCIsIGZhbHNlXSxcbiAgICBbXCJhdXRvXCIsIGZhbHNlXSxcbiAgICBbXCJzZWxmRnVuZFwiLCBmYWxzZV0sXG4gICAgW1wicm91bmQxXCIsIGZhbHNlXSxcbiAgICBbXCJyb3VuZDJcIiwgZmFsc2VdLFxuICAgIFtcInJvdW5kM1wiLCBmYWxzZV0sXG4gICAgW1wiaW1wcm92ZUFsbERpdmlzaW9uc1wiLCBmYWxzZV0sXG4gICAgW1widGVzdFwiLCBmYWxzZV0sXG4gICAgW1wiaGVscFwiLCBmYWxzZV0sXG5dO1xuXG5mdW5jdGlvbiBpbml0KG5zQ29udGV4dDogTlMpOiB2b2lkIHtcbiAgICBucyA9IG5zQ29udGV4dDtcbiAgICBuc3ggPSBuZXcgTmV0c2NyaXB0RXh0ZW5zaW9uKG5zKTtcbiAgICBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSA9IG5zLmVudW1zLkNpdHlOYW1lLlNlY3RvcjEyO1xuICAgIHN1cHBvcnRQcm9kdWN0RGV2ZWxvcG1lbnRDaXRpZXMgPSBPYmplY3QudmFsdWVzKG5zLmVudW1zLkNpdHlOYW1lKVxuICAgICAgICAuZmlsdGVyKGNpdHlOYW1lID0+IGNpdHlOYW1lICE9PSBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJvdW5kMShvcHRpb246IFJvdW5kMU9wdGlvbiA9IFByZWNhbGN1bGF0ZWRSb3VuZDFPcHRpb24uT1BUSU9OMik6IFByb21pc2U8dm9pZD4ge1xuICAgIG5zLnByaW50KGBVc2U6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9uKX1gKTtcblxuICAgIC8vIENyZWF0ZSBBZ3JpY3VsdHVyZSBkaXZpc2lvblxuICAgIGF3YWl0IGNyZWF0ZURpdmlzaW9uKG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIG9wdGlvbi5hZ3JpY3VsdHVyZU9mZmljZVNpemUsIDEpO1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlBMQU5UUywgXCJNQVhcIiwgXCJNUFwiKTtcbiAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgTWF0ZXJpYWxOYW1lLkZPT0QsIFwiTUFYXCIsIFwiTVBcIik7XG4gICAgfVxuXG4gICAgaWYgKGVuYWJsZVRlc3RpbmdUb29scyAmJiBjb25maWcuYXV0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEVuZXJneUFuZE1vcmFsZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDEwMCwgMTAwKTtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFJlc2VhcmNoUG9pbnRzKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgb3B0aW9uLndhaXRGb3JBZ3JpY3VsdHVyZVJQKTtcbiAgICB9XG5cbiAgICBhd2FpdCBidXlUZWFBbmRUaHJvd1BhcnR5KG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpO1xuXG4gICAgYnV5QWR2ZXJ0KG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDIpO1xuXG4gICAgY29uc3QgZGF0YUFycmF5ID0gbmV3IENvcnBvcmF0aW9uT3B0aW1pemVyKCkub3B0aW1pemVTdG9yYWdlQW5kRmFjdG9yeShcbiAgICAgICAgYWdyaWN1bHR1cmVJbmR1c3RyeURhdGEsXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFKSxcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgYWxsIHdhcmVob3VzZXMgYXJlIGF0IHRoZSBzYW1lIGxldmVsXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIENpdHlOYW1lLlNlY3RvcjEyKS5sZXZlbCxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUyksXG4gICAgICAgIGdldERpdmlzaW9uUmVzZWFyY2hlcyhucywgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKSxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyxcbiAgICAgICAgZmFsc2VcbiAgICApO1xuICAgIGlmIChkYXRhQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG9wdGltYWwgZGF0YVwiKTtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xuXG4gICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRSwgb3B0aW1hbERhdGEuc21hcnRTdG9yYWdlTGV2ZWwpO1xuICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUywgb3B0aW1hbERhdGEuc21hcnRGYWN0b3JpZXNMZXZlbCk7XG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICB1cGdyYWRlV2FyZWhvdXNlKG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIG9wdGltYWxEYXRhLndhcmVob3VzZUxldmVsKTtcbiAgICB9XG5cbiAgICBhd2FpdCB3YWl0VW50aWxIYXZpbmdFbm91Z2hSZXNlYXJjaFBvaW50cyhcbiAgICAgICAgbnMsXG4gICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXZpc2lvbk5hbWU6IERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcbiAgICAgICAgICAgICAgICByZXNlYXJjaFBvaW50OiBvcHRpb24ud2FpdEZvckFncmljdWx0dXJlUlBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICk7XG5cbiAgICBhc3NpZ25Kb2JzKFxuICAgICAgICBucyxcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICBnZW5lcmF0ZU9mZmljZVNldHVwc0ZvckVhcmx5Um91bmRzKFxuICAgICAgICAgICAgb3B0aW9uLmFncmljdWx0dXJlT2ZmaWNlU2l6ZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgY29uc3Qgb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHMgPSBhd2FpdCBmaW5kT3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHMoXG4gICAgICAgIG5zLFxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXG4gICAgICAgIGFncmljdWx0dXJlSW5kdXN0cnlEYXRhLFxuICAgICAgICBDaXR5TmFtZS5TZWN0b3IxMixcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgb3B0aW9uLmJvb3N0TWF0ZXJpYWxzUmF0aW9cbiAgICApO1xuICAgIGF3YWl0IHN0b2NrTWF0ZXJpYWxzKFxuICAgICAgICBucyxcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICBnZW5lcmF0ZU1hdGVyaWFsc09yZGVycyhcbiAgICAgICAgICAgIGNpdGllcyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5BSV9DT1JFUywgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzWzBdIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuSEFSRFdBUkUsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc1sxXSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogTWF0ZXJpYWxOYW1lLlJFQUxfRVNUQVRFLCBjb3VudDogb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHNbMl0gfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5ST0JPVFMsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc1szXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvID09PSB0cnVlKSB7XG4gICAgICAgIGF3YWl0IHdhaXRGb3JPZmZlcihucywgMTAsIDEwLCA0OTBlOSk7XG4gICAgICAgIG5zLnByaW50KGBSb3VuZCAxOiBBY2NlcHQgb2ZmZXI6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzKX1gKTtcbiAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU9mZmVyQWNjZXB0YW5jZUV2ZW50KG5zKTtcbiAgICAgICAgbnMuY29ycG9yYXRpb24uYWNjZXB0SW52ZXN0bWVudE9mZmVyKCk7XG4gICAgICAgIGF3YWl0IHJvdW5kMigpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcm91bmQyKG9wdGlvbjogUm91bmQyT3B0aW9uID0gUHJlY2FsY3VsYXRlZFJvdW5kMk9wdGlvbi5PUFRJT04yKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbnMucHJpbnQoYFVzZTogJHtKU09OLnN0cmluZ2lmeShvcHRpb24pfWApO1xuXG4gICAgaWYgKGVuYWJsZVRlc3RpbmdUb29scyAmJiBjb25maWcuYXV0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzZXRTdGF0aXN0aWNzKCk7XG4gICAgICAgIHRlc3RpbmdUb29scy5zZXRGdW5kcyg0OTBlOSk7XG4gICAgfVxuXG4gICAgYnV5VW5sb2NrKG5zLCBVbmxvY2tOYW1lLkVYUE9SVCk7XG5cbiAgICAvLyBVcGdyYWRlIEFncmljdWx0dXJlXG4gICAgbnMucHJpbnQoXCJVcGdyYWRlIEFncmljdWx0dXJlIGRpdmlzaW9uXCIpO1xuICAgIHVwZ3JhZGVPZmZpY2VzKFxuICAgICAgICBucyxcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICBnZW5lcmF0ZU9mZmljZVNldHVwcyhcbiAgICAgICAgICAgIGNpdGllcyxcbiAgICAgICAgICAgIG9wdGlvbi5hZ3JpY3VsdHVyZU9mZmljZVNpemUsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLlJFU0VBUkNIX0RFVkVMT1BNRU5ULCBjb3VudDogb3B0aW9uLmFncmljdWx0dXJlT2ZmaWNlU2l6ZSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgLy8gQ3JlYXRlIENoZW1pY2FsIGRpdmlzaW9uXG4gICAgYXdhaXQgY3JlYXRlRGl2aXNpb24obnMsIERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgMywgMik7XG4gICAgLy8gSW1wb3J0IG1hdGVyaWFscywgc2VsbC9leHBvcnQgcHJvZHVjZWQgbWF0ZXJpYWxzXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICAvLyBFeHBvcnQgUGxhbnRzIGZyb20gQWdyaWN1bHR1cmUgdG8gQ2hlbWljYWxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uY2FuY2VsRXhwb3J0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBjaXR5LCBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGNpdHksIFwiUGxhbnRzXCIpO1xuICAgICAgICBucy5jb3Jwb3JhdGlvbi5leHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgY2l0eSwgXCJQbGFudHNcIiwgZXhwb3J0U3RyaW5nKTtcblxuICAgICAgICAvLyBFeHBvcnQgQ2hlbWljYWxzIGZyb20gQ2hlbWljYWwgdG8gQWdyaWN1bHR1cmVcbiAgICAgICAgbnMuY29ycG9yYXRpb24uY2FuY2VsRXhwb3J0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIFwiQ2hlbWljYWxzXCIpO1xuICAgICAgICBucy5jb3Jwb3JhdGlvbi5leHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGNpdHksIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgXCJDaGVtaWNhbHNcIiwgZXhwb3J0U3RyaW5nKTtcbiAgICAgICAgLy8gU2VsbCBDaGVtaWNhbHNcbiAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgY2l0eSwgTWF0ZXJpYWxOYW1lLkNIRU1JQ0FMUywgXCJNQVhcIiwgXCJNUFwiKTtcbiAgICB9XG5cbiAgICB0ZXN0aW5nVG9vbHMuc2V0UmVzZWFyY2hQb2ludHMoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCA1NSk7XG4gICAgaWYgKGVuYWJsZVRlc3RpbmdUb29scyAmJiBjb25maWcuYXV0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEVuZXJneUFuZE1vcmFsZShEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIDEwMCwgMTAwKTtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEVuZXJneUFuZE1vcmFsZShEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIDEwMCwgMTAwKTtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFJlc2VhcmNoUG9pbnRzKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgb3B0aW9uLndhaXRGb3JBZ3JpY3VsdHVyZVJQKTtcbiAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFJlc2VhcmNoUG9pbnRzKERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgb3B0aW9uLndhaXRGb3JDaGVtaWNhbFJQKTtcbiAgICB9XG5cbiAgICBhd2FpdCBidXlUZWFBbmRUaHJvd1BhcnR5KG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpO1xuICAgIGF3YWl0IGJ1eVRlYUFuZFRocm93UGFydHkobnMsIERpdmlzaW9uTmFtZS5DSEVNSUNBTCk7XG5cbiAgICBidXlBZHZlcnQobnMsIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgOCk7XG5cbiAgICBjb25zdCBkYXRhQXJyYXkgPSBuZXcgQ29ycG9yYXRpb25PcHRpbWl6ZXIoKS5vcHRpbWl6ZVN0b3JhZ2VBbmRGYWN0b3J5KFxuICAgICAgICBhZ3JpY3VsdHVyZUluZHVzdHJ5RGF0YSxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UpLFxuICAgICAgICAvLyBBc3N1bWUgdGhhdCBhbGwgd2FyZWhvdXNlcyBhcmUgYXQgdGhlIHNhbWUgbGV2ZWxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgQ2l0eU5hbWUuU2VjdG9yMTIpLmxldmVsLFxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTKSxcbiAgICAgICAgZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zLCBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpLFxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzLFxuICAgICAgICBmYWxzZVxuICAgICk7XG4gICAgaWYgKGRhdGFBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgb3B0aW1hbCBkYXRhXCIpO1xuICAgIH1cbiAgICBjb25zdCBvcHRpbWFsRGF0YSA9IGRhdGFBcnJheVtkYXRhQXJyYXkubGVuZ3RoIC0gMV07XG5cbiAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFLCBvcHRpbWFsRGF0YS5zbWFydFN0b3JhZ2VMZXZlbCk7XG4gICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuU01BUlRfRkFDVE9SSUVTLCBvcHRpbWFsRGF0YS5zbWFydEZhY3Rvcmllc0xldmVsKTtcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgIHVwZ3JhZGVXYXJlaG91c2UobnMsIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgb3B0aW1hbERhdGEud2FyZWhvdXNlTGV2ZWwpO1xuICAgIH1cblxuICAgIGF3YWl0IHdhaXRVbnRpbEhhdmluZ0Vub3VnaFJlc2VhcmNoUG9pbnRzKFxuICAgICAgICBucyxcbiAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpdmlzaW9uTmFtZTogRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICAgICAgICAgIHJlc2VhcmNoUG9pbnQ6IG9wdGlvbi53YWl0Rm9yQWdyaWN1bHR1cmVSUFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXZpc2lvbk5hbWU6IERpdmlzaW9uTmFtZS5DSEVNSUNBTCxcbiAgICAgICAgICAgICAgICByZXNlYXJjaFBvaW50OiBvcHRpb24ud2FpdEZvckNoZW1pY2FsUlBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICk7XG5cbiAgICBidXlBZHZlcnQoXG4gICAgICAgIG5zLFxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXG4gICAgICAgIGdldE1heEFmZm9yZGFibGVBZFZlcnRMZXZlbChcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldEhpcmVBZFZlcnRDb3VudChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpLFxuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kc1xuICAgICAgICApXG4gICAgKTtcblxuICAgIGFzc2lnbkpvYnMoXG4gICAgICAgIG5zLFxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXG4gICAgICAgIGdlbmVyYXRlT2ZmaWNlU2V0dXBzRm9yRWFybHlSb3VuZHMoXG4gICAgICAgICAgICBvcHRpb24uYWdyaWN1bHR1cmVPZmZpY2VTaXplLFxuICAgICAgICAgICAgb3B0aW9uLmluY3JlYXNlQnVzaW5lc3NcbiAgICAgICAgKVxuICAgICk7XG4gICAgYXNzaWduSm9icyhcbiAgICAgICAgbnMsXG4gICAgICAgIERpdmlzaW9uTmFtZS5DSEVNSUNBTCxcbiAgICAgICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHNGb3JFYXJseVJvdW5kcygzKVxuICAgICk7XG5cbiAgICBjb25zdCBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckFncmljdWx0dXJlID0gYXdhaXQgZmluZE9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzKFxuICAgICAgICBucyxcbiAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICBhZ3JpY3VsdHVyZUluZHVzdHJ5RGF0YSxcbiAgICAgICAgQ2l0eU5hbWUuU2VjdG9yMTIsXG4gICAgICAgIHRydWUsXG4gICAgICAgIG9wdGlvbi5hZ3JpY3VsdHVyZUJvb3N0TWF0ZXJpYWxzUmF0aW9cbiAgICApO1xuICAgIGNvbnN0IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQ2hlbWljYWwgPSBhd2FpdCBmaW5kT3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHMoXG4gICAgICAgIG5zLFxuICAgICAgICBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsXG4gICAgICAgIGNoZW1pY2FsSW5kdXN0cnlEYXRhLFxuICAgICAgICBDaXR5TmFtZS5TZWN0b3IxMixcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgMC45NVxuICAgICk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcbiAgICAgICAgc3RvY2tNYXRlcmlhbHMoXG4gICAgICAgICAgICBucyxcbiAgICAgICAgICAgIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSxcbiAgICAgICAgICAgIGdlbmVyYXRlTWF0ZXJpYWxzT3JkZXJzKFxuICAgICAgICAgICAgICAgIGNpdGllcyxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogTWF0ZXJpYWxOYW1lLkFJX0NPUkVTLCBjb3VudDogb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHNGb3JBZ3JpY3VsdHVyZVswXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5IQVJEV0FSRSwgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQWdyaWN1bHR1cmVbMV0gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuUkVBTF9FU1RBVEUsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckFncmljdWx0dXJlWzJdIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogTWF0ZXJpYWxOYW1lLlJPQk9UUywgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQWdyaWN1bHR1cmVbM10gfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHN0b2NrTWF0ZXJpYWxzKFxuICAgICAgICAgICAgbnMsXG4gICAgICAgICAgICBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsXG4gICAgICAgICAgICBnZW5lcmF0ZU1hdGVyaWFsc09yZGVycyhcbiAgICAgICAgICAgICAgICBjaXRpZXMsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5BSV9DT1JFUywgY291bnQ6IG9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzRm9yQ2hlbWljYWxbMF0gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBNYXRlcmlhbE5hbWUuSEFSRFdBUkUsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckNoZW1pY2FsWzFdIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogTWF0ZXJpYWxOYW1lLlJFQUxfRVNUQVRFLCBjb3VudDogb3B0aW1hbEFtb3VudE9mQm9vc3RNYXRlcmlhbHNGb3JDaGVtaWNhbFsyXSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IE1hdGVyaWFsTmFtZS5ST0JPVFMsIGNvdW50OiBvcHRpbWFsQW1vdW50T2ZCb29zdE1hdGVyaWFsc0ZvckNoZW1pY2FsWzNdIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgXSk7XG5cbiAgICBpZiAoY29uZmlnLmF1dG8gPT09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgd2FpdEZvck9mZmVyKG5zLCAxNSwgMTAsIDExZTEyKTtcbiAgICAgICAgbnMucHJpbnQoYFJvdW5kIDI6IEFjY2VwdCBvZmZlcjogJHtucy5mb3JtYXROdW1iZXIobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMpfWApO1xuICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlT2ZmZXJBY2NlcHRhbmNlRXZlbnQobnMpO1xuICAgICAgICBucy5jb3Jwb3JhdGlvbi5hY2NlcHRJbnZlc3RtZW50T2ZmZXIoKTtcbiAgICAgICAgYXdhaXQgcm91bmQzKCk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByb3VuZDMob3B0aW9uOiBSb3VuZDNPcHRpb24gPSBQcmVjYWxjdWxhdGVkUm91bmQzT3B0aW9uLk9QVElPTjEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoaGFzRGl2aXNpb24obnMsIERpdmlzaW9uTmFtZS5UT0JBQ0NPKSkge1xuICAgICAgICBucy5zcGF3bihucy5nZXRTY3JpcHROYW1lKCksIHsgc3Bhd25EZWxheTogNTAwIH0sIFwiLS1pbXByb3ZlQWxsRGl2aXNpb25zXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbnMucHJpbnQoYFVzZTogJHtKU09OLnN0cmluZ2lmeShvcHRpb24pfWApO1xuXG4gICAgaWYgKGVuYWJsZVRlc3RpbmdUb29scyAmJiBjb25maWcuYXV0byA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVzZXRTdGF0aXN0aWNzKCk7XG4gICAgICAgIHRlc3RpbmdUb29scy5zZXRGdW5kcygxMWUxMik7XG4gICAgfVxuXG4gICAgYnV5VW5sb2NrKG5zLCBVbmxvY2tOYW1lLk1BUktFVF9SRVNFQVJDSF9ERU1BTkQpO1xuICAgIGJ1eVVubG9jayhucywgVW5sb2NrTmFtZS5NQVJLRVRfREFUQV9DT01QRVRJVElPTik7XG5cbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5kaXZpc2lvbnMubGVuZ3RoID09PSAyMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbmVlZCB0byBzZWxsIDEgZGl2aXNpb25cIik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIFRvYmFjY28gZGl2aXNpb25cbiAgICBhd2FpdCBjcmVhdGVEaXZpc2lvbihucywgRGl2aXNpb25OYW1lLlRPQkFDQ08sIDMsIDEpO1xuXG4gICAgLy8gQ3JlYXRlIGR1bW15IGRpdmlzaW9uc1xuICAgIGNyZWF0ZUR1bW15RGl2aXNpb25zKG5zLCAyMCAtIG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZGl2aXNpb25zLmxlbmd0aCk7XG5cbiAgICAvLyBJbXBvcnQgbWF0ZXJpYWxzXG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICAvLyBXZSBtdXN0IHByaW9yaXRpemUgVG9iYWNjbyBvdmVyIENoZW1pY2FsIHdoZW4gc2V0dGluZyB1cCBleHBvcnQgcm91dGVzXG4gICAgICAgIC8vIEV4cG9ydCBQbGFudHMgZnJvbSBBZ3JpY3VsdHVyZSB0byBUb2JhY2NvXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmNhbmNlbEV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLlRPQkFDQ08sIGNpdHksIFwiUGxhbnRzXCIpO1xuICAgICAgICBucy5jb3Jwb3JhdGlvbi5leHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBjaXR5LCBcIlBsYW50c1wiLCBleHBvcnRTdHJpbmcpO1xuXG4gICAgICAgIC8vIEV4cG9ydCBQbGFudHMgZnJvbSBBZ3JpY3VsdHVyZSB0byBDaGVtaWNhbFxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5jYW5jZWxFeHBvcnRNYXRlcmlhbChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGNpdHksIERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgY2l0eSwgXCJQbGFudHNcIik7XG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cG9ydE1hdGVyaWFsKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgY2l0eSwgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLCBjaXR5LCBcIlBsYW50c1wiLCBleHBvcnRTdHJpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IGFncmljdWx0dXJlRGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpO1xuICAgIGNvbnN0IGNoZW1pY2FsRGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpO1xuICAgIGNvbnN0IHRvYmFjY29EaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPKTtcblxuICAgIGNvbnN0IGFncmljdWx0dXJlRGl2aXNpb25CdWRnZXQgPSAxNTBlOTtcbiAgICBjb25zdCBjaGVtaWNhbERpdmlzaW9uQnVkZ2V0ID0gMzBlOTtcblxuICAgIC8vIGRpdmlzaW9uLnByb2R1Y3Rpb25NdWx0IGlzIDAgd2hlbiBkaXZpc2lvbiBpcyBjcmVhdGVkLiBJdCB3aWxsIGJlIHVwZGF0ZWQgaW4gbmV4dCBzdGF0ZS5cbiAgICB3aGlsZSAobnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oRGl2aXNpb25OYW1lLlRPQkFDQ08pLnByb2R1Y3Rpb25NdWx0ID09PSAwKSB7XG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uKFxuICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAqIDAuOTlcbiAgICAgICAgLSBhZ3JpY3VsdHVyZURpdmlzaW9uQnVkZ2V0IC0gY2hlbWljYWxEaXZpc2lvbkJ1ZGdldCAtIDFlOSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBkZXZlbG9wTmV3UHJvZHVjdChcbiAgICAgICAgbnMsXG4gICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxuICAgICAgICBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSxcbiAgICAgICAgMWU5XG4gICAgKTtcbiAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlTmV3UHJvZHVjdEV2ZW50KG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XG5cbiAgICBhd2FpdCBpbXByb3ZlU3VwcG9ydERpdmlzaW9uKFxuICAgICAgICBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsXG4gICAgICAgIGFncmljdWx0dXJlRGl2aXNpb25CdWRnZXQsXG4gICAgICAgIGRlZmF1bHRCdWRnZXRSYXRpb0ZvclN1cHBvcnREaXZpc2lvbixcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGF3YWl0IGltcHJvdmVTdXBwb3J0RGl2aXNpb24oXG4gICAgICAgIERpdmlzaW9uTmFtZS5DSEVNSUNBTCxcbiAgICAgICAgY2hlbWljYWxEaXZpc2lvbkJ1ZGdldCxcbiAgICAgICAgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcbiAgICAgICAgYnV5Qm9vc3RNYXRlcmlhbHMobnMsIGFncmljdWx0dXJlRGl2aXNpb24pLFxuICAgICAgICBidXlCb29zdE1hdGVyaWFscyhucywgY2hlbWljYWxEaXZpc2lvbiksXG4gICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzKG5zLCB0b2JhY2NvRGl2aXNpb24pLFxuICAgIF0pO1xuXG4gICAgbnMuc3Bhd24obnMuZ2V0U2NyaXB0TmFtZSgpLCB7IHNwYXduRGVsYXk6IDUwMCB9LCBcIi0taW1wcm92ZUFsbERpdmlzaW9uc1wiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZUFsbERpdmlzaW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgY3ljbGVDb3VudCA9IGNvcnBvcmF0aW9uRXZlbnRMb2dnZXIuY3ljbGU7XG4gICAgLy8gVGhpcyBpcyB1c2VkIGZvciBjYWxsaW5nIGltcHJvdmVQcm9kdWN0RGl2aXNpb24gd2l0aCBza2lwVXBncmFkaW5nT2ZmaWNlID0gdHJ1ZVxuICAgIGNvbnN0IHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgLy8gVGhpcyBpcyB1c2VkIGZvciBtYW51YWxseSBjYWxsaW5nIGltcHJvdmVQcm9kdWN0RGl2aXNpb25PZmZpY2VzXG4gICAgY29uc3QgcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMyID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICBjb25zdCBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG4gICAgY29uc3QgcGVuZGluZ0J1eWluZ0Jvb3N0TWF0ZXJpYWxzRGl2aXNpb25zID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgYnV5Qm9vc3RNYXRlcmlhbHNJZk5lZWRlZCA9IChkaXZpc2lvbk5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIXBlbmRpbmdCdXlpbmdCb29zdE1hdGVyaWFsc0RpdmlzaW9ucy5oYXMoZGl2aXNpb25OYW1lKSkge1xuICAgICAgICAgICAgcGVuZGluZ0J1eWluZ0Jvb3N0TWF0ZXJpYWxzRGl2aXNpb25zLmFkZChkaXZpc2lvbk5hbWUpO1xuICAgICAgICAgICAgbnMucHJpbnQoYEJ1eWluZyBib29zdCBtYXRlcmlhbHMgZm9yIGRpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX1gKTtcbiAgICAgICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzKG5zLCBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBucy5wcmludChgRmluaXNoIGJ1eWluZyBib29zdCBtYXRlcmlhbHMgZm9yIGRpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX1gKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nQnV5aW5nQm9vc3RNYXRlcmlhbHNEaXZpc2lvbnMuZGVsZXRlKGRpdmlzaW9uTmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uKFxuICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAqIDAuOTkgLSAxZTksXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2VcbiAgICApO1xuICAgIGJ1eUJvb3N0TWF0ZXJpYWxzSWZOZWVkZWQoRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xuXG4gICAgbGV0IHJlc2VydmVkRnVuZHMgPSAwO1xuICAgIGNvbnN0IGluY3JlYXNlUmVzZXJ2ZWRGdW5kcyA9IChhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgSW5jcmVhc2UgcmVzZXJ2ZWRGdW5kcyBieSAke25zLmZvcm1hdE51bWJlcihhbW91bnQpfWApO1xuICAgICAgICByZXNlcnZlZEZ1bmRzICs9IGFtb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coYE5ldyByZXNlcnZlZEZ1bmRzOiAke25zLmZvcm1hdE51bWJlcihyZXNlcnZlZEZ1bmRzKX1gKTtcbiAgICB9O1xuICAgIGNvbnN0IGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyA9IChhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRGVjcmVhc2UgcmVzZXJ2ZWRGdW5kcyBieSAke25zLmZvcm1hdE51bWJlcihhbW91bnQpfWApO1xuICAgICAgICByZXNlcnZlZEZ1bmRzIC09IGFtb3VudDtcbiAgICAgICAgY29uc29sZS5sb2coYE5ldyByZXNlcnZlZEZ1bmRzOiAke25zLmZvcm1hdE51bWJlcihyZXNlcnZlZEZ1bmRzKX1gKTtcbiAgICB9O1xuXG4gICAgLy8gV2UgdXNlIHByZXBhcmluZ1RvQWNjZXB0T2ZmZXIgdG8gcHJldmVudCBvcHRpbWl6aW5nIG9mZmljZSByaWdodCBiZWZvcmUgd2Ugc3dpdGNoIGFsbCBvZmZpY2VzIHRvIFwicHJvZml0XCIgc2V0dXAuXG4gICAgLy8gVGhpcyBlbGltaW5hdGVzIGEgcG90ZW50aWFsIHJhY2UgY29uZGl0aW9uLlxuICAgIGxldCBwcmVwYXJpbmdUb0FjY2VwdE9mZmVyID0gZmFsc2U7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEluZmluaXRlTG9vcEpTXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgKytjeWNsZUNvdW50O1xuICAgICAgICBjb25zdCBjdXJyZW50Um91bmQgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZDtcbiAgICAgICAgY29uc3QgcHJvZml0ID0gZ2V0UHJvZml0KG5zKTtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgY3ljbGVDb3VudDogJHtjeWNsZUNvdW50fS4gRnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMpfS4gUHJvZml0OiAke25zLmZvcm1hdE51bWJlcihwcm9maXQpfWBcbiAgICAgICAgICAgICsgKChjdXJyZW50Um91bmQgPD0gNCkgPyBgLiBPZmZlcjogJHtucy5mb3JtYXROdW1iZXIobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMpfWAgOiBcIlwiKVxuICAgICAgICApO1xuXG4gICAgICAgIGF3YWl0IGJ1eVJlc2VhcmNoKCk7XG5cbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPKS5hd2FyZW5lc3MgIT09IE51bWJlci5NQVhfVkFMVUUpIHtcbiAgICAgICAgICAgIC8vIEJ1eSBXaWxzb24gQVNBUCBpZiB3ZSBjYW4gYWZmb3JkIGl0IHdpdGggdGhlIGxhc3QgY3ljbGUncyBwcm9maXQuIEJ1ZGdldCBmb3IgV2lsc29uIGFuZCBBZHZlcnQgaXMganVzdCBwYXJ0IG9mXG4gICAgICAgICAgICAvLyBjdXJyZW50IGZ1bmRzLCBpdCdzIHVzdWFsbHkgdG9vIGxvdyBmb3Igb3VyIGJlbmNobWFyayB0byBjYWxjdWxhdGUgdGhlIG9wdGltYWwgY29tYmluYXRpb24uIFRoZSBiZW5jaG1hcmsgaXNcbiAgICAgICAgICAgIC8vIG1vc3Qgc3VpdGFibGUgZm9yIGJpZy1idWRnZXQgc2l0dWF0aW9uLCBsaWtlIGFmdGVyIGFjY2VwdGluZyBpbnZlc3RtZW50IG9mZmVyLlxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpbHNvbkxldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1MpO1xuICAgICAgICAgICAgY29uc3QgbWF4V2lsc29uTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1MsIGN1cnJlbnRXaWxzb25MZXZlbCwgcHJvZml0KTtcbiAgICAgICAgICAgIGlmIChtYXhXaWxzb25MZXZlbCA+IGN1cnJlbnRXaWxzb25MZXZlbCkge1xuICAgICAgICAgICAgICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1MsIG1heFdpbHNvbkxldmVsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUHJpb3JpdGl6ZSBBZHZlcnRcbiAgICAgICAgICAgIGlmIChwcm9maXQgPj0gdGhyZXNob2xkT2ZGb2N1c2luZ09uQWR2ZXJ0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFkdmVydExldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0SGlyZUFkVmVydENvdW50KERpdmlzaW9uTmFtZS5UT0JBQ0NPKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhBZHZlcnRMZXZlbCA9IGdldE1heEFmZm9yZGFibGVBZFZlcnRMZXZlbChcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFkdmVydExldmVsLFxuICAgICAgICAgICAgICAgICAgICAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAtIHJlc2VydmVkRnVuZHMpICogMC42XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWF4QWR2ZXJ0TGV2ZWwgPiBjdXJyZW50QWR2ZXJ0TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV5QWR2ZXJ0KG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTywgbWF4QWR2ZXJ0TGV2ZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvdGFsRnVuZHMgPSBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzIC0gcmVzZXJ2ZWRGdW5kcztcbiAgICAgICAgbGV0IGF2YWlsYWJsZUZ1bmRzID0gdG90YWxGdW5kcztcblxuICAgICAgICAvLyBJbiByb3VuZCAzIGFuZCA0LCB3ZSBvbmx5IGRldmVsb3AgdXAgdG8gbWF4TnVtYmVyT2ZQcm9kdWN0c1xuICAgICAgICBsZXQgbWF4TnVtYmVyT2ZQcm9kdWN0cyA9IG1heE51bWJlck9mUHJvZHVjdHNJblJvdW5kMztcbiAgICAgICAgaWYgKGN1cnJlbnRSb3VuZCA9PT0gNCkge1xuICAgICAgICAgICAgbWF4TnVtYmVyT2ZQcm9kdWN0cyA9IG1heE51bWJlck9mUHJvZHVjdHNJblJvdW5kNDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAzIHx8IGN1cnJlbnRSb3VuZCA9PT0gNCkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkQXJyYXkgPSBnZXRQcm9kdWN0SWRBcnJheShucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xuICAgICAgICAgICAgbGV0IG51bWJlck9mRGV2ZWxvcGVkUHJvZHVjdHMgPSAwO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RJZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBudW1iZXJPZkRldmVsb3BlZFByb2R1Y3RzID0gTWF0aC5tYXgoLi4ucHJvZHVjdElkQXJyYXkpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChudW1iZXJPZkRldmVsb3BlZFByb2R1Y3RzID49IG1heE51bWJlck9mUHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbGwgcHJvZHVjdHMgYXJlIGZpbmlzaGVkLCB3ZSB3YWl0IGZvciAxNSBjeWNsZXMsIHRoZW4gYWNjZXB0IGludmVzdG1lbnQgb2ZmZXIuXG4gICAgICAgICAgICAgICAgLy8gV2UgdGFrZSBhIFwic25hcHNob3RcIiBvZiBwcm9kdWN0IGxpc3QgaGVyZS4gV2hlbiB3ZSB1c2UgdGhlIHN0YW5kYXJkIHNldHVwLCB3ZSB1c2Ugb25seSAxIHNsb3Qgb2ZcbiAgICAgICAgICAgICAgICAvLyBwcm9kdWN0IHNsb3RzIHdoaWxlIHdhaXRpbmcgZm9yIG9mZmVyLiBJbiB0aGF0IGNhc2UsIHdlIGNhbiBkZXZlbG9wIHRoZSBuZXh0IHByb2R1Y3Qgd2hpbGUgd2FpdGluZy5cbiAgICAgICAgICAgICAgICAvLyBUaGlzIFwic25hcHNob3RcIiBlbnN1cmVzIHRoZSBwcm9kdWN0IGxpc3QgdGhhdCB3ZSB1c2UgdG8gY2FsY3VsYXRlIHRoZSBcInByb2ZpdFwiIHNldHVwIGRvZXMgbm90IGluY2x1ZGVcbiAgICAgICAgICAgICAgICAvLyB0aGUgZGV2ZWxvcGluZyBwcm9kdWN0LlxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oRGl2aXNpb25OYW1lLlRPQkFDQ08pLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFByb2R1Y3RzQXJlRmluaXNoZWQgPSBwcm9kdWN0cy5ldmVyeShwcm9kdWN0TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBucy5jb3Jwb3JhdGlvbi5nZXRQcm9kdWN0KERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgcHJvZHVjdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzID09PSAxMDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0TmV3ZXN0UHJvZHVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5zLmNvcnBvcmF0aW9uLmdldFByb2R1Y3QoRGl2aXNpb25OYW1lLlRPQkFDQ08sIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LCBwcm9kdWN0c1twcm9kdWN0cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdlc3RQcm9kdWN0ID0gZ2V0TmV3ZXN0UHJvZHVjdCgpO1xuICAgICAgICAgICAgICAgIGlmICghcHJlcGFyaW5nVG9BY2NlcHRPZmZlclxuICAgICAgICAgICAgICAgICAgICAmJiBuZXdlc3RQcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPiA5OFxuICAgICAgICAgICAgICAgICAgICAmJiBuZXdlc3RQcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyaW5nVG9BY2NlcHRPZmZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbGxQcm9kdWN0c0FyZUZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldCA9IHRvdGFsRnVuZHMgKiAwLjAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0TmFtZSA9IGRldmVsb3BOZXdQcm9kdWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9kdWN0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU5ld1Byb2R1Y3RFdmVudChucywgRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlRnVuZHMgLT0gcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2FpdCB1bnRpbCBuZXdlc3QgcHJvZHVjdCdzIGVmZmVjdGl2ZVJhdGluZyBpcyBub3QgMFxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZ2V0TmV3ZXN0UHJvZHVjdCgpLmVmZmVjdGl2ZVJhdGluZyA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvck51bWJlck9mQ3ljbGVzKG5zLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICsrY3ljbGVDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN3aXRjaCBhbGwgb2ZmaWNlcyB0byBcInByb2ZpdFwiIHNldHVwIHRvIG1heGltaXplIHRoZSBvZmZlclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzd2l0Y2hBbGxPZmZpY2VzVG9Qcm9maXRTZXR1cChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYmFjY29JbmR1c3RyeURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtdXN0IHVzZSB0aGUgbGF0ZXN0IGRhdGEgb2YgcHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TmV3ZXN0UHJvZHVjdCgpXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4cGVjdGVkT2ZmZXIgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJvdW5kID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZE9mZmVyID0gMWUxNjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50Um91bmQgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkT2ZmZXIgPSAxZTIwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDeWNsZSA9IGNvcnBvcmF0aW9uRXZlbnRMb2dnZXIuY3ljbGU7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JPZmZlcihucywgMTAsIDUsIGV4cGVjdGVkT2ZmZXIpO1xuICAgICAgICAgICAgICAgICAgICBjeWNsZUNvdW50ICs9IChjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmN5Y2xlIC0gY3VycmVudEN5Y2xlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgICAgICAgICBgQ3ljbGU6ICR7Y3ljbGVDb3VudH0uIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICsgYEFjY2VwdCBvZmZlcjogJHtucy5mb3JtYXROdW1iZXIobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMpfWBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5nZW5lcmF0ZU9mZmVyQWNjZXB0YW5jZUV2ZW50KG5zKTtcbiAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYWNjZXB0SW52ZXN0bWVudE9mZmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXBhcmluZ1RvQWNjZXB0T2ZmZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2tpcCBkZXZlbG9waW5nIG5ldyBwcm9kdWN0IGlmIHdlIGFyZSBhdCB0aGUgbmVhciBlbmQgb2YgZXhwb25lbnRpYWwgcGhhc2VcbiAgICAgICAgaWYgKHByb2ZpdCA8PSAxZTQwIHx8IGF2YWlsYWJsZUZ1bmRzID49IDFlNzIpIHtcbiAgICAgICAgICAgIGxldCBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQgPSB0b3RhbEZ1bmRzICogMC4wMTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHdlIHVzZSBhdCBsZWFzdCAxZTcyIGZvciBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQgYWZ0ZXIgZXhwb25lbnRpYWwgcGhhc2VcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVGdW5kcyA+PSAxZTcyKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0ID0gTWF0aC5tYXgocHJvZHVjdERldmVsb3BtZW50QnVkZ2V0LCAxZTcyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3ROYW1lID0gZGV2ZWxvcE5ld1Byb2R1Y3QoXG4gICAgICAgICAgICAgICAgbnMsXG4gICAgICAgICAgICAgICAgRGl2aXNpb25OYW1lLlRPQkFDQ08sXG4gICAgICAgICAgICAgICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHksXG4gICAgICAgICAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3ROYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERldmVsb3AgJHtuZXdQcm9kdWN0TmFtZX1gKTtcbiAgICAgICAgICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlTmV3UHJvZHVjdEV2ZW50KG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlRnVuZHMgLT0gcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTykucHJvZHVjdHM7XG4gICAgICAgICAgICBjb25zdCBhbGxQcm9kdWN0c0FyZUZpbmlzaGVkID0gcHJvZHVjdHMuZXZlcnkocHJvZHVjdE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBucy5jb3Jwb3JhdGlvbi5nZXRQcm9kdWN0KERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgcHJvZHVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmRldmVsb3BtZW50UHJvZ3Jlc3MgPT09IDEwMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFsbFByb2R1Y3RzQXJlRmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICBjb3Jwb3JhdGlvbkV2ZW50TG9nZ2VyLmdlbmVyYXRlU2tpcERldmVsb3BpbmdOZXdQcm9kdWN0RXZlbnQobnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9iYWNjb0hhc1JldmVudWUgPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTykubGFzdEN5Y2xlUmV2ZW51ZSA+IDA7XG4gICAgICAgIGNvbnN0IGJ1ZGdldEZvclRvYmFjY29EaXZpc2lvbiA9IHRvdGFsRnVuZHMgKiAwLjk7XG4gICAgICAgIGlmICh0b2JhY2NvSGFzUmV2ZW51ZVxuICAgICAgICAgICAgJiYgKGN5Y2xlQ291bnQgJSA1ID09PSAwIHx8IG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihEaXZpc2lvbk5hbWUuVE9CQUNDTywgYnVkZ2V0Rm9yVG9iYWNjb0RpdmlzaW9uKSkpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUZ1bmRzIC09IGJ1ZGdldEZvclRvYmFjY29EaXZpc2lvbjtcblxuICAgICAgICAgICAgLy8gU2tpcCB1cGdyYWRpbmcgb2ZmaWNlIGluIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gY2FsbC4gV2UgbmVlZCB0byBidXkgY29ycG9yYXRpb24ncyB1cGdyYWRlcyBBU0FQLCBzbyB3ZVxuICAgICAgICAgICAgLy8gd2lsbCB1cGdyYWRlIG9mZmljZXMgaW4gYSBzZXBhcmF0ZSBjYWxsIGxhdGVyLlxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczEuaGFzKERpdmlzaW9uTmFtZS5UT0JBQ0NPKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vbk9mZmljZXNCdWRnZXQgPSBidWRnZXRGb3JUb2JhY2NvRGl2aXNpb24gKiAoMSAtIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLm9mZmljZSk7XG4gICAgICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKG5vbk9mZmljZXNCdWRnZXQpO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdJbXByb3ZpbmdQcm9kdWN0RGl2aXNpb25zMS5zZXQoXG4gICAgICAgICAgICAgICAgICAgIERpdmlzaW9uTmFtZS5UT0JBQ0NPLFxuICAgICAgICAgICAgICAgICAgICBub25PZmZpY2VzQnVkZ2V0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXBncmFkZSAke0RpdmlzaW9uTmFtZS5UT0JBQ0NPfS0xLCBidWRnZXQ6ICR7bnMuZm9ybWF0TnVtYmVyKG5vbk9mZmljZXNCdWRnZXQpfWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZShEaXZpc2lvbk5hbWUuVE9CQUNDTyArIFwiLTFcIik7XG4gICAgICAgICAgICAgICAgaW1wcm92ZVByb2R1Y3REaXZpc2lvbihcbiAgICAgICAgICAgICAgICAgICAgRGl2aXNpb25OYW1lLlRPQkFDQ08sXG4gICAgICAgICAgICAgICAgICAgIGJ1ZGdldEZvclRvYmFjY29EaXZpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBvY2N1cnJlZCB3aGVuIHVwZ3JhZGluZyAke0RpdmlzaW9uTmFtZS5UT0JBQ0NPfWAsIHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuVE9CQUNDTyArIFwiLTFcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyhwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczEuZ2V0KERpdmlzaW9uTmFtZS5UT0JBQ0NPKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMxLmRlbGV0ZShEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1eUJvb3N0TWF0ZXJpYWxzSWZOZWVkZWQoRGl2aXNpb25OYW1lLlRPQkFDQ08pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGdyYWRlIG9mZmljZXMgb2YgcHJvZHVjdCBkaXZpc2lvblxuICAgICAgICAgICAgaWYgKCFwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczIuaGFzKERpdmlzaW9uTmFtZS5UT0JBQ0NPKVxuICAgICAgICAgICAgICAgICYmICFwcmVwYXJpbmdUb0FjY2VwdE9mZmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2ZmaWNlc0J1ZGdldCA9IGJ1ZGdldEZvclRvYmFjY29EaXZpc2lvbiAqIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLm9mZmljZTtcbiAgICAgICAgICAgICAgICBpbmNyZWFzZVJlc2VydmVkRnVuZHMob2ZmaWNlc0J1ZGdldCk7XG4gICAgICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMyLnNldChEaXZpc2lvbk5hbWUuVE9CQUNDTywgb2ZmaWNlc0J1ZGdldCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVwZ3JhZGUgJHtEaXZpc2lvbk5hbWUuVE9CQUNDT30tMiwgYnVkZ2V0OiAke25zLmZvcm1hdE51bWJlcihvZmZpY2VzQnVkZ2V0KX1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLlRPQkFDQ08gKyBcIi0yXCIpO1xuICAgICAgICAgICAgICAgIGltcHJvdmVQcm9kdWN0RGl2aXNpb25PZmZpY2VzKFxuICAgICAgICAgICAgICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcbiAgICAgICAgICAgICAgICAgICAgdG9iYWNjb0luZHVzdHJ5RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgb2ZmaWNlc0J1ZGdldCxcbiAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBvY2N1cnJlZCB3aGVuIHVwZ3JhZGluZyAke0RpdmlzaW9uTmFtZS5UT0JBQ0NPfWAsIHJlYXNvbik7XG4gICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuVE9CQUNDTyArIFwiLTJcIik7XG4gICAgICAgICAgICAgICAgICAgIGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyhwZW5kaW5nSW1wcm92aW5nUHJvZHVjdERpdmlzaW9uczIuZ2V0KERpdmlzaW9uTmFtZS5UT0JBQ0NPKSA/PyAwKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1Byb2R1Y3REaXZpc2lvbnMyLmRlbGV0ZShEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidWRnZXRGb3JBZ3JpY3VsdHVyZURpdmlzaW9uID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBNYXRoLm1pbihwcm9maXQgKiAoY3VycmVudFJvdW5kIDw9IDQgPyAwLjkgOiAwLjk5KSwgdG90YWxGdW5kcyAqIDAuMDksIGF2YWlsYWJsZUZ1bmRzKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRvYmFjY29IYXNSZXZlbnVlXG4gICAgICAgICAgICAmJiAoY3ljbGVDb3VudCAlIDEwID09PSAwIHx8IG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUsIGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24pKVxuICAgICAgICAgICAgJiYgIXBlbmRpbmdJbXByb3ZpbmdTdXBwb3J0RGl2aXNpb25zLmhhcyhEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVGdW5kcyAtPSBidWRnZXRGb3JBZ3JpY3VsdHVyZURpdmlzaW9uO1xuICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24pO1xuICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuc2V0KERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSwgYnVkZ2V0Rm9yQWdyaWN1bHR1cmVEaXZpc2lvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVXBncmFkZSAke0RpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRX0sIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYnVkZ2V0Rm9yQWdyaWN1bHR1cmVEaXZpc2lvbil9YCk7XG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcbiAgICAgICAgICAgIGltcHJvdmVTdXBwb3J0RGl2aXNpb24oXG4gICAgICAgICAgICAgICAgRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLFxuICAgICAgICAgICAgICAgIGJ1ZGdldEZvckFncmljdWx0dXJlRGl2aXNpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igb2NjdXJyZWQgd2hlbiB1cGdyYWRpbmcgJHtEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkV9YCwgcmVhc29uKTtcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkUpO1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyhwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5nZXQoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKSA/PyAwKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5kZWxldGUoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcbiAgICAgICAgICAgICAgICBidXlCb29zdE1hdGVyaWFsc0lmTmVlZGVkKERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWRnZXRGb3JDaGVtaWNhbERpdmlzaW9uID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBNYXRoLm1pbihwcm9maXQgKiAoY3VycmVudFJvdW5kIDw9IDQgPyAwLjEgOiAwLjAxKSwgdG90YWxGdW5kcyAqIDAuMDEsIGF2YWlsYWJsZUZ1bmRzKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRvYmFjY29IYXNSZXZlbnVlXG4gICAgICAgICAgICAmJiAoY3ljbGVDb3VudCAlIDE1ID09PSAwIHx8IG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihEaXZpc2lvbk5hbWUuQ0hFTUlDQUwsIGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24pKVxuICAgICAgICAgICAgJiYgIXBlbmRpbmdJbXByb3ZpbmdTdXBwb3J0RGl2aXNpb25zLmhhcyhEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVGdW5kcyAtPSBidWRnZXRGb3JDaGVtaWNhbERpdmlzaW9uO1xuICAgICAgICAgICAgaW5jcmVhc2VSZXNlcnZlZEZ1bmRzKGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24pO1xuICAgICAgICAgICAgcGVuZGluZ0ltcHJvdmluZ1N1cHBvcnREaXZpc2lvbnMuc2V0KERpdmlzaW9uTmFtZS5DSEVNSUNBTCwgYnVkZ2V0Rm9yQ2hlbWljYWxEaXZpc2lvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVXBncmFkZSAke0RpdmlzaW9uTmFtZS5DSEVNSUNBTH0sIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYnVkZ2V0Rm9yQ2hlbWljYWxEaXZpc2lvbil9YCk7XG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcbiAgICAgICAgICAgIGltcHJvdmVTdXBwb3J0RGl2aXNpb24oXG4gICAgICAgICAgICAgICAgRGl2aXNpb25OYW1lLkNIRU1JQ0FMLFxuICAgICAgICAgICAgICAgIGJ1ZGdldEZvckNoZW1pY2FsRGl2aXNpb24sXG4gICAgICAgICAgICAgICAgZGVmYXVsdEJ1ZGdldFJhdGlvRm9yU3VwcG9ydERpdmlzaW9uLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igb2NjdXJyZWQgd2hlbiB1cGdyYWRpbmcgJHtEaXZpc2lvbk5hbWUuQ0hFTUlDQUx9YCwgcmVhc29uKTtcbiAgICAgICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpO1xuICAgICAgICAgICAgICAgIGRlY3JlYXNlUmVzZXJ2ZWRGdW5kcyhwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5nZXQoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKSA/PyAwKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nSW1wcm92aW5nU3VwcG9ydERpdmlzaW9ucy5kZWxldGUoRGl2aXNpb25OYW1lLkNIRU1JQ0FMKTtcbiAgICAgICAgICAgICAgICBidXlCb29zdE1hdGVyaWFsc0lmTmVlZGVkKERpdmlzaW9uTmFtZS5DSEVNSUNBTCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y2VkUGxhbnRzID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgTWF0ZXJpYWxOYW1lLlBMQU5UUykucHJvZHVjdGlvbkFtb3VudDtcbiAgICAgICAgY29uc3QgY29uc3VtZWRQbGFudHMgPSBNYXRoLmFicyhcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKERpdmlzaW9uTmFtZS5UT0JBQ0NPLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgTWF0ZXJpYWxOYW1lLlBMQU5UUykucHJvZHVjdGlvbkFtb3VudFxuICAgICAgICApO1xuICAgICAgICBpZiAoY29uc3VtZWRQbGFudHMgPiAwICYmIHByb2R1Y2VkUGxhbnRzIC8gY29uc3VtZWRQbGFudHMgPCAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBwbGFudHMgcmF0aW86ICR7cHJvZHVjZWRQbGFudHMgLyBjb25zdW1lZFBsYW50c31gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JOZXh0VGltZVN0YXRlSGFwcGVucyhucywgQ29ycFN0YXRlLlNUQVJUKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5lZWRUb1VwZ3JhZGVEaXZpc2lvbihkaXZpc2lvbk5hbWU6IHN0cmluZywgYnVkZ2V0OiBudW1iZXIpIHtcbiAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBDaXR5TmFtZS5TZWN0b3IxMik7XG4gICAgbGV0IGV4cGVjdGVkVXBncmFkZVNpemUgPSAzMDtcbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPD0gNCkge1xuICAgICAgICBleHBlY3RlZFVwZ3JhZGVTaXplID0gTWF0aC5taW4ob2ZmaWNlLnNpemUgLyAyLCAzMCk7XG4gICAgfVxuICAgIC8vIEFzc3VtZSB0aGF0IHdlIHVzZSBlbnRpcmUgYnVkZ2V0IHRvIHVwZ3JhZGUgb2ZmaWNlcy4gVGhpcyBpcyBub3QgY29ycmVjdCwgYnV0IGl0IHNpbXBsaWZpZXMgdGhlIGNhbGN1bGF0aW9uLlxuICAgIGNvbnN0IG1heE9mZmljZVNpemUgPSBnZXRNYXhBZmZvcmRhYmxlT2ZmaWNlU2l6ZShvZmZpY2Uuc2l6ZSwgYnVkZ2V0IC8gNik7XG4gICAgY29uc3QgbmVlZFRvVXBncmFkZSA9IG1heE9mZmljZVNpemUgPj0gb2ZmaWNlLnNpemUgKyBleHBlY3RlZFVwZ3JhZGVTaXplO1xuICAgIGlmIChuZWVkVG9VcGdyYWRlKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXG4gICAgICAgICAgICBgbmVlZFRvVXBncmFkZSAke2RpdmlzaW9uTmFtZX0sIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYnVkZ2V0KX0sIG9mZmljZS5zaXplOiAke29mZmljZS5zaXplfSwgYFxuICAgICAgICAgICAgKyBgbWF4T2ZmaWNlU2l6ZTogJHttYXhPZmZpY2VTaXplfX1gXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuZWVkVG9VcGdyYWRlO1xufVxuXG5mdW5jdGlvbiBnZXRCYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzKCk6IEJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3Mge1xuICAgIGlmIChnZXRQcm9maXQobnMpID49IDFlMzUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2ZpdDogMSxcbiAgICAgICAgICAgIHByb2dyZXNzOiAyLjVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZml0OiAxLFxuICAgICAgICBwcm9ncmVzczogNVxuICAgIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHN3aXRjaEFsbE9mZmljZXNUb1Byb2ZpdFNldHVwKGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSwgbmV3ZXN0UHJvZHVjdDogUHJvZHVjdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG1haW5PZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoRGl2aXNpb25OYW1lLlRPQkFDQ08sIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5KTtcbiAgICBjb25zdCBvZmZpY2VTZXR1cDogT2ZmaWNlU2V0dXAgPSB7XG4gICAgICAgIGNpdHk6IG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICBzaXplOiBtYWluT2ZmaWNlLm51bUVtcGxveWVlcyxcbiAgICAgICAgam9iczoge1xuICAgICAgICAgICAgT3BlcmF0aW9uczogMCxcbiAgICAgICAgICAgIEVuZ2luZWVyOiAwLFxuICAgICAgICAgICAgQnVzaW5lc3M6IDAsXG4gICAgICAgICAgICBNYW5hZ2VtZW50OiAwLFxuICAgICAgICAgICAgXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCI6IDAsXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmICh1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwKSB7XG4gICAgICAgIGNvbnN0IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXAgPVxuICAgICAgICAgICAgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSAzKVxuICAgICAgICAgICAgICAgID8gcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9maXRTZXR1cE9mUm91bmQzXG4gICAgICAgICAgICAgICAgOiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDQ7XG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXAub3BlcmF0aW9ucyk7XG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgPSBNYXRoLmZsb29yKG9mZmljZVNldHVwLnNpemUgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwLmVuZ2luZWVyKTtcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXAuYnVzaW5lc3MpO1xuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk1hbmFnZW1lbnQgPSBvZmZpY2VTZXR1cC5zaXplIC0gKG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyArIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBhd2FpdCBvcHRpbWl6ZU9mZmljZShcbiAgICAgICAgICAgIG5zeCxcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKERpdmlzaW9uTmFtZS5UT0JBQ0NPKSxcbiAgICAgICAgICAgIGluZHVzdHJ5RGF0YSxcbiAgICAgICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICAgICAgbWFpbk9mZmljZS5udW1FbXBsb3llZXMsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgbmV3ZXN0UHJvZHVjdCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcInByb2ZpdFwiLFxuICAgICAgICAgICAgZ2V0QmFsYW5jaW5nTW9kaWZpZXJGb3JQcm9maXRQcm9ncmVzcygpLFxuICAgICAgICAgICAgMCwgLy8gRG8gbm90IHJlcnVuXG4gICAgICAgICAgICAyMCwgLy8gSGFsZiBvZiBkZWZhdWx0UGVyZm9ybWFuY2VNb2RpZmllckZvck9mZmljZUJlbmNobWFya1xuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zb2xlLmxvZyhgT3B0aW1pemUgYWxsIG9mZmljZXMgZm9yIFwicHJvZml0XCJgLCBvcHRpbWFsRGF0YSk7XG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMgPSB7XG4gICAgICAgICAgICBPcGVyYXRpb25zOiBvcHRpbWFsRGF0YS5vcGVyYXRpb25zLFxuICAgICAgICAgICAgRW5naW5lZXI6IG9wdGltYWxEYXRhLmVuZ2luZWVyLFxuICAgICAgICAgICAgQnVzaW5lc3M6IG9wdGltYWxEYXRhLmJ1c2luZXNzLFxuICAgICAgICAgICAgTWFuYWdlbWVudDogb3B0aW1hbERhdGEubWFuYWdlbWVudCxcbiAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiAwLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3NpZ25Kb2JzKFxuICAgICAgICBucyxcbiAgICAgICAgRGl2aXNpb25OYW1lLlRPQkFDQ08sXG4gICAgICAgIFtvZmZpY2VTZXR1cF1cbiAgICApO1xuICAgIC8vIFJldXNlIHRoZSByYXRpbyBvZiBtYWluIG9mZmljZS4gVGhpcyBpcyBub3QgZW50aXJlbHkgY29ycmVjdCwgYnV0IGl0J3Mgc3RpbGwgZ29vZCBlbm91Z2guIFdlIGRvXG4gICAgLy8gdGhpcyB0byByZWR1Y2UgdGhlIGNvbXB1dGluZyB0aW1lIG5lZWRlZCB0byBmaW5kIGFuZCBzd2l0Y2ggdG8gdGhlIG9wdGltYWwgb2ZmaWNlIHNldHVwcy5cbiAgICBmb3IgKGNvbnN0IGNpdHkgb2Ygc3VwcG9ydFByb2R1Y3REZXZlbG9wbWVudENpdGllcykge1xuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoRGl2aXNpb25OYW1lLlRPQkFDQ08sIGNpdHkpO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25zID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBNYXRoLmZsb29yKG9mZmljZS5udW1FbXBsb3llZXMgKiAob2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zIC8gbWFpbk9mZmljZS5udW1FbXBsb3llZXMpKSwgMVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBlbmdpbmVlciA9IE1hdGgubWF4KFxuICAgICAgICAgICAgTWF0aC5mbG9vcihvZmZpY2UubnVtRW1wbG95ZWVzICogKG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgLyBtYWluT2ZmaWNlLm51bUVtcGxveWVlcykpLCAxXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1c2luZXNzID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBNYXRoLmZsb29yKG9mZmljZS5udW1FbXBsb3llZXMgKiAob2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyAvIG1haW5PZmZpY2UubnVtRW1wbG95ZWVzKSksIDFcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWFuYWdlbWVudCA9IG9mZmljZS5udW1FbXBsb3llZXMgLSAob3BlcmF0aW9ucyArIGVuZ2luZWVyICsgYnVzaW5lc3MpO1xuICAgICAgICBhc3NpZ25Kb2JzKFxuICAgICAgICAgICAgbnMsXG4gICAgICAgICAgICBEaXZpc2lvbk5hbWUuVE9CQUNDTyxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IG9mZmljZS5udW1FbXBsb3llZXMsXG4gICAgICAgICAgICAgICAgICAgIGpvYnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wZXJhdGlvbnM6IG9wZXJhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBFbmdpbmVlcjogZW5naW5lZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXNpbmVzczogYnVzaW5lc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBNYW5hZ2VtZW50OiBtYW5hZ2VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBidXlSZXNlYXJjaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBEbyBub3QgYnV5IGFueSByZXNlYXJjaCBpbiByb3VuZCAzXG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kIDw9IDMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBidXlSZXNlYXJjaGVzID0gKGRpdmlzaW9uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCByZXNlYXJjaFByaW9yaXRpZXM6IFJlc2VhcmNoUHJpb3JpdHlbXTtcbiAgICAgICAgaWYgKGRpdmlzaW9uTmFtZSA9PT0gRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFIHx8IGRpdmlzaW9uTmFtZSA9PT0gRGl2aXNpb25OYW1lLkNIRU1JQ0FMKSB7XG4gICAgICAgICAgICByZXNlYXJjaFByaW9yaXRpZXMgPSByZXNlYXJjaFByaW9yaXRpZXNGb3JTdXBwb3J0RGl2aXNpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNlYXJjaFByaW9yaXRpZXMgPSByZXNlYXJjaFByaW9yaXRpZXNGb3JQcm9kdWN0RGl2aXNpb247XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCByZXNlYXJjaFByaW9yaXR5IG9mIHJlc2VhcmNoUHJpb3JpdGllcykge1xuICAgICAgICAgICAgLy8gT25seSBidXkgUiZEIExhYm9yYXRvcnkgaW4gcm91bmQgNFxuICAgICAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLnJvdW5kID09PSA0XG4gICAgICAgICAgICAgICAgJiYgcmVzZWFyY2hQcmlvcml0eS5yZXNlYXJjaCAhPT0gUmVzZWFyY2hOYW1lLkhJX1RFQ0hfUk5EX0xBQk9SQVRPUlkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgcmVzZWFyY2hQcmlvcml0eS5yZXNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc2VhcmNoQ29zdCA9IG5zLmNvcnBvcmF0aW9uLmdldFJlc2VhcmNoQ29zdChkaXZpc2lvbk5hbWUsIHJlc2VhcmNoUHJpb3JpdHkucmVzZWFyY2gpO1xuICAgICAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSkucmVzZWFyY2hQb2ludHMgPCByZXNlYXJjaENvc3QgKiByZXNlYXJjaFByaW9yaXR5LmNvc3RNdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5yZXNlYXJjaChkaXZpc2lvbk5hbWUsIHJlc2VhcmNoUHJpb3JpdHkucmVzZWFyY2gpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGJ1eVJlc2VhcmNoZXMoRGl2aXNpb25OYW1lLkFHUklDVUxUVVJFKTtcbiAgICBidXlSZXNlYXJjaGVzKERpdmlzaW9uTmFtZS5DSEVNSUNBTCk7XG4gICAgYnV5UmVzZWFyY2hlcyhEaXZpc2lvbk5hbWUuVE9CQUNDTyk7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYWxsIGNpdHkgc2V0dXBzIChvZmZpY2UgKyB3YXJlaG91c2UpIGluIHRoZSBkaXZpc2lvbiBhcmUgdGhlIHNhbWVcbiAqXG4gKiBAcGFyYW0gZGl2aXNpb25OYW1lXG4gKiBAcGFyYW0gdG90YWxCdWRnZXRcbiAqIEBwYXJhbSBidWRnZXRSYXRpb1xuICogQHBhcmFtIGRyeVJ1blxuICogQHBhcmFtIGVuYWJsZUxvZ2dpbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZVN1cHBvcnREaXZpc2lvbihcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcbiAgICB0b3RhbEJ1ZGdldDogbnVtYmVyLFxuICAgIGJ1ZGdldFJhdGlvOiB7XG4gICAgICAgIHdhcmVob3VzZTogbnVtYmVyO1xuICAgICAgICBvZmZpY2U6IG51bWJlcjtcbiAgICB9LFxuICAgIGRyeVJ1bjogYm9vbGVhbixcbiAgICBlbmFibGVMb2dnaW5nOiBib29sZWFuXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodG90YWxCdWRnZXQgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihlbmFibGVMb2dnaW5nKTtcbiAgICBjb25zdCBjdXJyZW50RnVuZHMgPSBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzO1xuXG4gICAgY29uc3Qgd2FyZWhvdXNlQnVkZ2V0ID0gdG90YWxCdWRnZXQgKiBidWRnZXRSYXRpby53YXJlaG91c2UgLyA2O1xuICAgIGNvbnN0IG9mZmljZUJ1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW8ub2ZmaWNlIC8gNjtcbiAgICBjb25zdCBvZmZpY2VTZXR1cHM6IE9mZmljZVNldHVwW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgIGxvZ2dlci5jaXR5ID0gY2l0eTtcbiAgICAgICAgY29uc3QgY3VycmVudFdhcmVob3VzZUxldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSkubGV2ZWw7XG4gICAgICAgIGNvbnN0IG5ld1dhcmVob3VzZUxldmVsID0gZ2V0TWF4QWZmb3JkYWJsZVdhcmVob3VzZUxldmVsKGN1cnJlbnRXYXJlaG91c2VMZXZlbCwgd2FyZWhvdXNlQnVkZ2V0KTtcbiAgICAgICAgaWYgKG5ld1dhcmVob3VzZUxldmVsID4gY3VycmVudFdhcmVob3VzZUxldmVsICYmICFkcnlSdW4pIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnVwZ3JhZGVXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5LCBuZXdXYXJlaG91c2VMZXZlbCAtIGN1cnJlbnRXYXJlaG91c2VMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgICAgIGBEaXZpc2lvbiAke2RpdmlzaW9uTmFtZX06IGN1cnJlbnRXYXJlaG91c2VMZXZlbDogJHtjdXJyZW50V2FyZWhvdXNlTGV2ZWx9LCBgXG4gICAgICAgICAgICArIGBuZXdXYXJlaG91c2VMZXZlbDogJHtucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5sZXZlbH1gXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gV2UgdXNlIFNlY3Rvci0xMidzIG9mZmljZSBhcyB0aGUgYmFzZSB0byBmaW5kIHRoZSBvcHRpbWFsIHNldHVwIGZvciBhbGwgY2l0aWVzJyBvZmZpY2VzLiBUaGlzIGlzIG5vdCBlbnRpcmVseVxuICAgIC8vIGFjY3VyYXRlLCBiZWNhdXNlIGVhY2ggb2ZmaWNlIGhhcyBkaWZmZXJlbnQgZW1wbG95ZWUncyBzdGF0cy4gSG93ZXZlciwgdGhlIG9wdGltYWwgc2V0dXAgb2YgZWFjaCBvZmZpY2Ugd29uJ3QgYmVcbiAgICAvLyBtdWNoIGRpZmZlcmVudCBldmVuIHdpdGggdGhhdCBjb25jZXJuLlxuICAgIGNvbnN0IGNpdHkgPSBDaXR5TmFtZS5TZWN0b3IxMjtcbiAgICBsb2dnZXIuY2l0eSA9IGNpdHk7XG4gICAgY29uc3Qgb2ZmaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0T2ZmaWNlKGRpdmlzaW9uTmFtZSwgY2l0eSk7XG4gICAgY29uc3QgbWF4T2ZmaWNlU2l6ZSA9IGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKG9mZmljZS5zaXplLCBvZmZpY2VCdWRnZXQpO1xuICAgIGxvZ2dlci5sb2coYENpdHk6ICR7Y2l0eX0uIGN1cnJlbnRPZmZpY2VTaXplOiAke29mZmljZS5zaXplfSwgbWF4T2ZmaWNlU2l6ZTogJHttYXhPZmZpY2VTaXplfWApO1xuICAgIGlmIChtYXhPZmZpY2VTaXplIDwgNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJ1ZGdldCBmb3Igb2ZmaWNlIGlzIHRvbyBsb3cuIERpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX0uIE9mZmljZSdzIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIob2ZmaWNlQnVkZ2V0KX1gKTtcbiAgICB9XG4gICAgY29uc3Qgcm5kRW1wbG95ZWUgPSBNYXRoLm1pbihcbiAgICAgICAgTWF0aC5mbG9vcihtYXhPZmZpY2VTaXplICogMC4yKSxcbiAgICAgICAgbWF4T2ZmaWNlU2l6ZSAtIDNcbiAgICApO1xuICAgIGNvbnN0IG5vblJuREVtcGxveWVlcyA9IG1heE9mZmljZVNpemUgLSBybmRFbXBsb3llZTtcbiAgICBjb25zdCBvZmZpY2VTZXR1cDogT2ZmaWNlU2V0dXAgPSB7XG4gICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgIHNpemU6IG1heE9mZmljZVNpemUsXG4gICAgICAgIGpvYnM6IHtcbiAgICAgICAgICAgIE9wZXJhdGlvbnM6IDAsXG4gICAgICAgICAgICBFbmdpbmVlcjogMCxcbiAgICAgICAgICAgIEJ1c2luZXNzOiAwLFxuICAgICAgICAgICAgTWFuYWdlbWVudDogMCxcbiAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiBybmRFbXBsb3llZSxcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKHVzZVByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9ucykge1xuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yU3VwcG9ydERpdmlzaW9ucy5vcGVyYXRpb25zKTtcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyA9IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JTdXBwb3J0RGl2aXNpb25zLmJ1c2luZXNzKTtcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclN1cHBvcnREaXZpc2lvbnMubWFuYWdlbWVudCk7XG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgPSBub25SbkRFbXBsb3llZXMgLSAob2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zICsgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyArIG9mZmljZVNldHVwLmpvYnMuTWFuYWdlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGl0ZW06IE1hdGVyaWFsO1xuICAgICAgICBzd2l0Y2ggKGRpdmlzaW9uTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBEaXZpc2lvbk5hbWUuQUdSSUNVTFRVUkU6XG4gICAgICAgICAgICAgICAgaXRlbSA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlBMQU5UUyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpdmlzaW9uTmFtZS5DSEVNSUNBTDpcbiAgICAgICAgICAgICAgICBpdGVtID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuQ0hFTUlDQUxTKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9uUm5ERW1wbG95ZWVzIDw9IDMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUiZEIHJhdGlvXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcbiAgICAgICAgY29uc3QgaW5kdXN0cnlEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBhd2FpdCBvcHRpbWl6ZU9mZmljZShcbiAgICAgICAgICAgIG5zeCxcbiAgICAgICAgICAgIGRpdmlzaW9uLFxuICAgICAgICAgICAgaW5kdXN0cnlEYXRhLFxuICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgIG5vblJuREVtcGxveWVlcyxcbiAgICAgICAgICAgIHJuZEVtcGxveWVlLFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcInJhd1Byb2R1Y3Rpb25cIixcbiAgICAgICAgICAgIGdldEJhbGFuY2luZ01vZGlmaWVyRm9yUHJvZml0UHJvZ3Jlc3MoKSxcbiAgICAgICAgICAgIDAsIC8vIERvIG5vdCByZXJ1blxuICAgICAgICAgICAgMjAsIC8vIEhhbGYgb2YgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmtcbiAgICAgICAgICAgIGVuYWJsZUxvZ2dpbmcsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZW5naW5lZXI6IE1hdGguZmxvb3Iobm9uUm5ERW1wbG95ZWVzICogMC42MjUpLFxuICAgICAgICAgICAgICAgIGJ1c2luZXNzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmIChkYXRhQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxjdWxhdGUgb3B0aW1hbCBvZmZpY2Ugc2V0dXAuIERpdmlzaW9uOiAke2RpdmlzaW9uTmFtZX0sIG5vblJuREVtcGxveWVlczogJHtub25SbkRFbXBsb3llZXN9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpbWFsRGF0YSA9IGRhdGFBcnJheVtkYXRhQXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzID0ge1xuICAgICAgICAgICAgICAgIE9wZXJhdGlvbnM6IG9wdGltYWxEYXRhLm9wZXJhdGlvbnMsXG4gICAgICAgICAgICAgICAgRW5naW5lZXI6IG9wdGltYWxEYXRhLmVuZ2luZWVyLFxuICAgICAgICAgICAgICAgIEJ1c2luZXNzOiBvcHRpbWFsRGF0YS5idXNpbmVzcyxcbiAgICAgICAgICAgICAgICBNYW5hZ2VtZW50OiBvcHRpbWFsRGF0YS5tYW5hZ2VtZW50LFxuICAgICAgICAgICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiBybmRFbXBsb3llZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmxvZyhcIk9wdGltYWwgb2ZmaWNlU2V0dXA6XCIsIEpTT04uc3RyaW5naWZ5KG9mZmljZVNldHVwKSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgb2ZmaWNlU2V0dXBzLnB1c2goe1xuICAgICAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgICAgIHNpemU6IG9mZmljZVNldHVwLnNpemUsXG4gICAgICAgICAgICBqb2JzOiBvZmZpY2VTZXR1cC5qb2JzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2dnZXIuY2l0eSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIWRyeVJ1bikge1xuICAgICAgICB1cGdyYWRlT2ZmaWNlcyhucywgZGl2aXNpb25OYW1lLCBvZmZpY2VTZXR1cHMpO1xuICAgIH1cbiAgICBsb2dnZXIubG9nKGBTcGVudDogJHtucy5mb3JtYXROdW1iZXIoY3VycmVudEZ1bmRzIC0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyl9YCk7XG59XG5cbmZ1bmN0aW9uIGltcHJvdmVQcm9kdWN0RGl2aXNpb25SYXdQcm9kdWN0aW9uKFxuICAgIGRpdmlzaW9uTmFtZTogc3RyaW5nLFxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICBidWRnZXQ6IG51bWJlcixcbiAgICBkcnlSdW46IGJvb2xlYW4sXG4gICAgYmVuY2htYXJrOiBDb3Jwb3JhdGlvbk9wdGltaXplcixcbiAgICBlbmFibGVMb2dnaW5nOiBib29sZWFuXG4pOiB2b2lkIHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGJlbmNobWFyay5vcHRpbWl6ZVN0b3JhZ2VBbmRGYWN0b3J5KFxuICAgICAgICBpbmR1c3RyeURhdGEsXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFKSxcbiAgICAgICAgLy8gQXNzdW1lIHRoYXQgYWxsIHdhcmVob3VzZXMgYXJlIGF0IHRoZSBzYW1lIGxldmVsXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbk5hbWUsIENpdHlOYW1lLlNlY3RvcjEyKS5sZXZlbCxcbiAgICAgICAgbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUyksXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICAgICAgYnVkZ2V0LFxuICAgICAgICBlbmFibGVMb2dnaW5nXG4gICAgKTtcbiAgICBpZiAoZGF0YUFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGltYWxEYXRhID0gZGF0YUFycmF5W2RhdGFBcnJheS5sZW5ndGggLSAxXTtcbiAgICBsb2dnZXIubG9nKGByYXdQcm9kdWN0aW9uOiAke0pTT04uc3RyaW5naWZ5KG9wdGltYWxEYXRhKX1gKTtcbiAgICBpZiAoIWRyeVJ1bikge1xuICAgICAgICBidXlVcGdyYWRlKG5zLCBVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFLCBvcHRpbWFsRGF0YS5zbWFydFN0b3JhZ2VMZXZlbCk7XG4gICAgICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUywgb3B0aW1hbERhdGEuc21hcnRGYWN0b3JpZXNMZXZlbCk7XG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXYXJlaG91c2VMZXZlbCA9IG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHkpLmxldmVsO1xuICAgICAgICAgICAgaWYgKG9wdGltYWxEYXRhLndhcmVob3VzZUxldmVsID4gY3VycmVudFdhcmVob3VzZUxldmVsKSB7XG4gICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24udXBncmFkZVdhcmVob3VzZShcbiAgICAgICAgICAgICAgICAgICAgZGl2aXNpb25OYW1lLFxuICAgICAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgICAgICBvcHRpbWFsRGF0YS53YXJlaG91c2VMZXZlbCAtIGN1cnJlbnRXYXJlaG91c2VMZXZlbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGltcHJvdmVQcm9kdWN0RGl2aXNpb25XaWxzb25BZHZlcnQoXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzLFxuICAgIGJ1ZGdldDogbnVtYmVyLFxuICAgIGRyeVJ1bjogYm9vbGVhbixcbiAgICBiZW5jaG1hcms6IENvcnBvcmF0aW9uT3B0aW1pemVyLFxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cbik6IHZvaWQge1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoZW5hYmxlTG9nZ2luZyk7XG4gICAgY29uc3QgZGl2aXNpb24gPSBucy5jb3Jwb3JhdGlvbi5nZXREaXZpc2lvbihkaXZpc2lvbk5hbWUpO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGJlbmNobWFyay5vcHRpbWl6ZVdpbHNvbkFuZEFkdmVydChcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxuICAgICAgICBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuV0lMU09OX0FOQUxZVElDUyksXG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmdldEhpcmVBZFZlcnRDb3VudChkaXZpc2lvbk5hbWUpLFxuICAgICAgICBkaXZpc2lvbi5hd2FyZW5lc3MsXG4gICAgICAgIGRpdmlzaW9uLnBvcHVsYXJpdHksXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICAgICAgYnVkZ2V0LFxuICAgICAgICBlbmFibGVMb2dnaW5nXG4gICAgKTtcbiAgICBpZiAoZGF0YUFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGltYWxEYXRhID0gZGF0YUFycmF5W2RhdGFBcnJheS5sZW5ndGggLSAxXTtcbiAgICBsb2dnZXIubG9nKGB3aWxzb25BZHZlcnQ6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW1hbERhdGEpfWApO1xuICAgIGlmICghZHJ5UnVuKSB7XG4gICAgICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1MsIG9wdGltYWxEYXRhLndpbHNvbkxldmVsKTtcbiAgICAgICAgYnV5QWR2ZXJ0KG5zLCBkaXZpc2lvbk5hbWUsIG9wdGltYWxEYXRhLmFkdmVydExldmVsKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGltcHJvdmVQcm9kdWN0RGl2aXNpb25NYWluT2ZmaWNlKFxuICAgIGRpdmlzaW9uTmFtZTogc3RyaW5nLFxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICBidWRnZXQ6IG51bWJlcixcbiAgICBkcnlSdW46IGJvb2xlYW4sXG4gICAgZW5hYmxlTG9nZ2luZzogYm9vbGVhblxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihlbmFibGVMb2dnaW5nKTtcbiAgICBjb25zdCBwcm9maXQgPSBnZXRQcm9maXQobnMpO1xuICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcbiAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSk7XG4gICAgY29uc3QgbWF4T2ZmaWNlU2l6ZSA9IGdldE1heEFmZm9yZGFibGVPZmZpY2VTaXplKG9mZmljZS5zaXplLCBidWRnZXQpO1xuICAgIGlmIChtYXhPZmZpY2VTaXplIDwgb2ZmaWNlLnNpemUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvZmZpY2VTZXR1cDogT2ZmaWNlU2V0dXAgPSB7XG4gICAgICAgIGNpdHk6IG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICBzaXplOiBtYXhPZmZpY2VTaXplLFxuICAgICAgICBqb2JzOiB7XG4gICAgICAgICAgICBPcGVyYXRpb25zOiAwLFxuICAgICAgICAgICAgRW5naW5lZXI6IDAsXG4gICAgICAgICAgICBCdXNpbmVzczogMCxcbiAgICAgICAgICAgIE1hbmFnZW1lbnQ6IDAsXG4gICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcHJvZHVjdHMgPSBkaXZpc2lvbi5wcm9kdWN0cztcbiAgICBsZXQgaXRlbTogUHJvZHVjdDtcbiAgICBsZXQgc29ydFR5cGU6IE9mZmljZUJlbmNobWFya1NvcnRUeXBlO1xuICAgIGxldCB1c2VDdXJyZW50SXRlbURhdGEgPSB0cnVlO1xuICAgIGlmICh1c2VQcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvbikge1xuICAgICAgICBsZXQgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb247XG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gMykge1xuICAgICAgICAgICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kMztcbiAgICAgICAgfSBlbHNlIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gNCkge1xuICAgICAgICAgICAgcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvblJvdW5kNDtcbiAgICAgICAgfSBlbHNlIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gNSAmJiBwcm9maXQgPCAxZTMwKSB7XG4gICAgICAgICAgICBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvbiA9IHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uUm91bmQ1XzE7XG4gICAgICAgIH0gZWxzZSBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDUgJiYgcHJvZml0ID49IDFlMzApIHtcbiAgICAgICAgICAgIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uID0gcHJlY2FsY3VsYXRlZEVtcGxveWVlUmF0aW9Gb3JQcm9kdWN0RGl2aXNpb25Sb3VuZDVfMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcHJlY2FsY3VsYXRlZCBlbXBsb3llZSByYXRpb1wiKTtcbiAgICAgICAgfVxuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgPSBNYXRoLmZsb29yKG9mZmljZVNldHVwLnNpemUgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2R1Y3REaXZpc2lvbi5vcGVyYXRpb25zKTtcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLmVuZ2luZWVyKTtcbiAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyA9IE1hdGguZmxvb3Iob2ZmaWNlU2V0dXAuc2l6ZSAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLmJ1c2luZXNzKTtcbiAgICAgICAgaWYgKG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPT09IDApIHtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSAxO1xuICAgICAgICB9XG4gICAgICAgIG9mZmljZVNldHVwLmpvYnMuTWFuYWdlbWVudCA9IG9mZmljZVNldHVwLnNpemUgLSAob2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zICsgb2ZmaWNlU2V0dXAuam9icy5FbmdpbmVlciArIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gM1xuICAgICAgICAgICAgfHwgbnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDQpIHtcbiAgICAgICAgICAgIHNvcnRUeXBlID0gXCJwcm9ncmVzc1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ydFR5cGUgPSBcInByb2ZpdF9wcm9ncmVzc1wiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBiZXN0UHJvZHVjdCA9IG51bGw7XG4gICAgICAgIGxldCBoaWdoZXN0RWZmZWN0aXZlUmF0aW5nID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0TmFtZSBvZiBwcm9kdWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5zLmNvcnBvcmF0aW9uLmdldFByb2R1Y3QoZGl2aXNpb25OYW1lLCBtYWluUHJvZHVjdERldmVsb3BtZW50Q2l0eSwgcHJvZHVjdE5hbWUpO1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuZGV2ZWxvcG1lbnRQcm9ncmVzcyA8IDEwMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2R1Y3QuZWZmZWN0aXZlUmF0aW5nID4gaGlnaGVzdEVmZmVjdGl2ZVJhdGluZykge1xuICAgICAgICAgICAgICAgIGJlc3RQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgICAgICBoaWdoZXN0RWZmZWN0aXZlUmF0aW5nID0gcHJvZHVjdC5lZmZlY3RpdmVSYXRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFiZXN0UHJvZHVjdCkge1xuICAgICAgICAgICAgdXNlQ3VycmVudEl0ZW1EYXRhID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHNhbXBsZVByb2R1Y3ROYW1lLFxuICAgICAgICAgICAgICAgIGRlbWFuZDogNTQsXG4gICAgICAgICAgICAgICAgY29tcGV0aXRpb246IDM1LFxuICAgICAgICAgICAgICAgIHJhdGluZzogMzYwMDAsXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUmF0aW5nOiAzNjAwMCxcbiAgICAgICAgICAgICAgICBzdGF0czoge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiA0MjAwMCxcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2U6IDQ2MDAwLFxuICAgICAgICAgICAgICAgICAgICBkdXJhYmlsaXR5OiAyMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVsaWFiaWxpdHk6IDMxMDAwLFxuICAgICAgICAgICAgICAgICAgICBhZXN0aGV0aWNzOiAyNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM6IDM3MDAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gTWF0ZXJpYWwncyBtYXJrZXQgcHJpY2UgaXMgZGlmZmVyZW50IGJldHdlZW4gY2l0aWVzLiBXZSB1c2UgU2VjdG9yMTIncyBwcmljZSBhcyByZWZlcmVuY2UgcHJpY2UuXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbkNvc3Q6IGdldFByb2R1Y3RNYXJrZXRQcmljZShucywgZGl2aXNpb24sIGluZHVzdHJ5RGF0YSwgQ2l0eU5hbWUuU2VjdG9yMTIpLFxuICAgICAgICAgICAgICAgIGRlc2lyZWRTZWxsUHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgZGVzaXJlZFNlbGxBbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgc3RvcmVkOiAwLFxuICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25BbW91bnQ6IDAsXG4gICAgICAgICAgICAgICAgYWN0dWFsU2VsbEFtb3VudDogMCxcbiAgICAgICAgICAgICAgICBkZXZlbG9wbWVudFByb2dyZXNzOiAxMDAsXG4gICAgICAgICAgICAgICAgYWR2ZXJ0aXNpbmdJbnZlc3RtZW50OiBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzICogMC4wMSAvIDIsXG4gICAgICAgICAgICAgICAgZGVzaWduSW52ZXN0bWVudDogbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcyAqIDAuMDEgLyAyLFxuICAgICAgICAgICAgICAgIHNpemU6IDAuMDUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbSA9IGJlc3RQcm9kdWN0O1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNlIHByb2R1Y3Q6ICR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gYXdhaXQgb3B0aW1pemVPZmZpY2UoXG4gICAgICAgICAgICBuc3gsXG4gICAgICAgICAgICBkaXZpc2lvbixcbiAgICAgICAgICAgIGluZHVzdHJ5RGF0YSxcbiAgICAgICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICAgICAgbWF4T2ZmaWNlU2l6ZSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgdXNlQ3VycmVudEl0ZW1EYXRhLFxuICAgICAgICAgICAgc29ydFR5cGUsXG4gICAgICAgICAgICBnZXRCYWxhbmNpbmdNb2RpZmllckZvclByb2ZpdFByb2dyZXNzKCksXG4gICAgICAgICAgICBtYXhSZXJ1bldoZW5PcHRpbWl6aW5nT2ZmaWNlRm9yUHJvZHVjdERpdmlzaW9uLFxuICAgICAgICAgICAgZGVmYXVsdFBlcmZvcm1hbmNlTW9kaWZpZXJGb3JPZmZpY2VCZW5jaG1hcmssXG4gICAgICAgICAgICBlbmFibGVMb2dnaW5nXG4gICAgICAgICk7XG4gICAgICAgIGlmIChkYXRhQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjYWxjdWxhdGUgb3B0aW1hbCBvZmZpY2Ugc2V0dXAuIG1heFRvdGFsRW1wbG95ZWVzOiAke21heE9mZmljZVNpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW1hbERhdGEgPSBkYXRhQXJyYXlbZGF0YUFycmF5Lmxlbmd0aCAtIDFdO1xuICAgICAgICBvZmZpY2VTZXR1cC5qb2JzID0ge1xuICAgICAgICAgICAgT3BlcmF0aW9uczogb3B0aW1hbERhdGEub3BlcmF0aW9ucyxcbiAgICAgICAgICAgIEVuZ2luZWVyOiBvcHRpbWFsRGF0YS5lbmdpbmVlcixcbiAgICAgICAgICAgIEJ1c2luZXNzOiBvcHRpbWFsRGF0YS5idXNpbmVzcyxcbiAgICAgICAgICAgIE1hbmFnZW1lbnQ6IG9wdGltYWxEYXRhLm1hbmFnZW1lbnQsXG4gICAgICAgICAgICBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIjogMCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBsb2dnZXIubG9nKGBtYWluT2ZmaWNlOiAke0pTT04uc3RyaW5naWZ5KG9mZmljZVNldHVwKX1gKTtcbiAgICBpZiAoIWRyeVJ1bikge1xuICAgICAgICB1cGdyYWRlT2ZmaWNlcyhucywgZGl2aXNpb25OYW1lLCBbb2ZmaWNlU2V0dXBdKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGltcHJvdmVQcm9kdWN0RGl2aXNpb25TdXBwb3J0T2ZmaWNlcyhcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcbiAgICBidWRnZXQ6IG51bWJlcixcbiAgICBkcnlSdW46IGJvb2xlYW4sXG4gICAgZW5hYmxlTG9nZ2luZzogYm9vbGVhblxuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcihlbmFibGVMb2dnaW5nKTtcbiAgICBjb25zdCBvZmZpY2VTZXR1cHM6IE9mZmljZVNldHVwW10gPSBbXTtcbiAgICBpZiAoYnVkZ2V0ID4gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5mdW5kcykge1xuICAgICAgICAvLyBCeXBhc3MgdXNhZ2Ugb2YgbG9nZ2VyLiBJZiB0aGlzIGhhcHBlbnMsIHRoZXJlIGlzIHJhY2UgY29uZGl0aW9uLiBXZSBtdXN0IGJlIG5vdGlmaWVkIGFib3V0IGl0LlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgQnVkZ2V0IGlzIGhpZ2hlciB0aGFuIGN1cnJlbnQgZnVuZHMuIEJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYnVkZ2V0KX0sIGBcbiAgICAgICAgICAgICsgYGZ1bmRzOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzKX1gXG4gICAgICAgICk7XG4gICAgICAgIGJ1ZGdldCA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHMgKiAwLjk7XG4gICAgfVxuICAgIGNvbnN0IGJ1ZGdldEZvckVhY2hPZmZpY2UgPSBidWRnZXQgLyA1O1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBzdXBwb3J0UHJvZHVjdERldmVsb3BtZW50Q2l0aWVzKSB7XG4gICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICBjb25zdCBtYXhPZmZpY2VTaXplID0gZ2V0TWF4QWZmb3JkYWJsZU9mZmljZVNpemUob2ZmaWNlLnNpemUsIGJ1ZGdldEZvckVhY2hPZmZpY2UpO1xuICAgICAgICBpZiAobWF4T2ZmaWNlU2l6ZSA8IDUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnVkZ2V0IGZvciBvZmZpY2UgaXMgdG9vIGxvdy4gRGl2aXNpb246ICR7ZGl2aXNpb25OYW1lfS4gT2ZmaWNlJ3MgYnVkZ2V0OiAke25zLmZvcm1hdE51bWJlcihidWRnZXRGb3JFYWNoT2ZmaWNlKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4T2ZmaWNlU2l6ZSA8IG9mZmljZS5zaXplKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvZmZpY2VTZXR1cDogT2ZmaWNlU2V0dXAgPSB7XG4gICAgICAgICAgICBjaXR5OiBjaXR5LFxuICAgICAgICAgICAgc2l6ZTogbWF4T2ZmaWNlU2l6ZSxcbiAgICAgICAgICAgIGpvYnM6IHtcbiAgICAgICAgICAgICAgICBPcGVyYXRpb25zOiAwLFxuICAgICAgICAgICAgICAgIEVuZ2luZWVyOiAwLFxuICAgICAgICAgICAgICAgIEJ1c2luZXNzOiAwLFxuICAgICAgICAgICAgICAgIE1hbmFnZW1lbnQ6IDAsXG4gICAgICAgICAgICAgICAgXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCI6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gMyAmJiBtYXhOdW1iZXJPZlByb2R1Y3RzSW5Sb3VuZDMgPT09IDEpIHtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyA9IDA7XG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLkVuZ2luZWVyID0gMDtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuQnVzaW5lc3MgPSAwO1xuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gMDtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnNbXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCJdID0gbWF4T2ZmaWNlU2l6ZTtcbiAgICAgICAgfSBlbHNlIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gMyB8fCBucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5yb3VuZCA9PT0gNCkge1xuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5PcGVyYXRpb25zID0gMTtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgPSAxO1xuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5CdXNpbmVzcyA9IDE7XG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk1hbmFnZW1lbnQgPSAxO1xuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9ic1tcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIl0gPSBtYXhPZmZpY2VTaXplIC0gNDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJuZEVtcGxveWVlID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihtYXhPZmZpY2VTaXplICogMC41KSxcbiAgICAgICAgICAgICAgICBtYXhPZmZpY2VTaXplIC0gNFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5vblJuREVtcGxveWVlcyA9IG1heE9mZmljZVNpemUgLSBybmRFbXBsb3llZTtcbiAgICAgICAgICAgIC8vIFJldXNlIHRoZSByYXRpbyBvZiBcInByb2ZpdFwiIHNldHVwIGluIHJvdW5kIDQuIEl0J3MgZ29vZCBlbm91Z2guXG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLk9wZXJhdGlvbnMgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kNC5vcGVyYXRpb25zKTtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgPSBNYXRoLmZsb29yKG5vblJuREVtcGxveWVlcyAqIHByZWNhbGN1bGF0ZWRFbXBsb3llZVJhdGlvRm9yUHJvZml0U2V0dXBPZlJvdW5kNC5lbmdpbmVlcik7XG4gICAgICAgICAgICBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzID0gTWF0aC5mbG9vcihub25SbkRFbXBsb3llZXMgKiBwcmVjYWxjdWxhdGVkRW1wbG95ZWVSYXRpb0ZvclByb2ZpdFNldHVwT2ZSb3VuZDQuYnVzaW5lc3MpO1xuICAgICAgICAgICAgb2ZmaWNlU2V0dXAuam9icy5NYW5hZ2VtZW50ID0gbm9uUm5ERW1wbG95ZWVzIC0gKG9mZmljZVNldHVwLmpvYnMuT3BlcmF0aW9ucyArIG9mZmljZVNldHVwLmpvYnMuRW5naW5lZXIgKyBvZmZpY2VTZXR1cC5qb2JzLkJ1c2luZXNzKTtcbiAgICAgICAgICAgIG9mZmljZVNldHVwLmpvYnNbXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCJdID0gcm5kRW1wbG95ZWU7XG4gICAgICAgIH1cbiAgICAgICAgb2ZmaWNlU2V0dXBzLnB1c2gob2ZmaWNlU2V0dXApO1xuICAgIH1cbiAgICBsb2dnZXIubG9nKGBzdXBwb3J0T2ZmaWNlczogJHtKU09OLnN0cmluZ2lmeShvZmZpY2VTZXR1cHMpfWApO1xuICAgIGlmICghZHJ5UnVuKSB7XG4gICAgICAgIHVwZ3JhZGVPZmZpY2VzKG5zLCBkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwcyk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBpbXByb3ZlUHJvZHVjdERpdmlzaW9uT2ZmaWNlcyhcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXG4gICAgYnVkZ2V0OiBudW1iZXIsXG4gICAgZHJ5UnVuOiBib29sZWFuLFxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCByYXRpbyA9IHtcbiAgICAgICAgbWFpbk9mZmljZTogMC41LFxuICAgICAgICBzdXBwb3J0T2ZmaWNlczogMC41XG4gICAgfTtcbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPT09IDMpIHtcbiAgICAgICAgcmF0aW8gPSB7XG4gICAgICAgICAgICBtYWluT2ZmaWNlOiAwLjc1LFxuICAgICAgICAgICAgc3VwcG9ydE9mZmljZXM6IDAuMjVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXdhaXQgaW1wcm92ZVByb2R1Y3REaXZpc2lvbk1haW5PZmZpY2UoXG4gICAgICAgIGRpdmlzaW9uTmFtZSxcbiAgICAgICAgaW5kdXN0cnlEYXRhLFxuICAgICAgICBidWRnZXQgKiByYXRpby5tYWluT2ZmaWNlLFxuICAgICAgICBkcnlSdW4sXG4gICAgICAgIGVuYWJsZUxvZ2dpbmdcbiAgICApO1xuICAgIGF3YWl0IGltcHJvdmVQcm9kdWN0RGl2aXNpb25TdXBwb3J0T2ZmaWNlcyhcbiAgICAgICAgZGl2aXNpb25OYW1lLFxuICAgICAgICBidWRnZXQgKiByYXRpby5zdXBwb3J0T2ZmaWNlcyxcbiAgICAgICAgZHJ5UnVuLFxuICAgICAgICBlbmFibGVMb2dnaW5nXG4gICAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW1wcm92ZVByb2R1Y3REaXZpc2lvbihcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcbiAgICB0b3RhbEJ1ZGdldDogbnVtYmVyLFxuICAgIHNraXBVcGdyYWRpbmdPZmZpY2U6IGJvb2xlYW4sXG4gICAgZHJ5UnVuOiBib29sZWFuLFxuICAgIGVuYWJsZUxvZ2dpbmc6IGJvb2xlYW5cbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0b3RhbEJ1ZGdldCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKGVuYWJsZUxvZ2dpbmcpO1xuICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcbiAgICBjb25zdCBpbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoZGl2aXNpb24udHlwZSk7XG4gICAgY29uc3QgZGl2aXNpb25SZXNlYXJjaGVzID0gZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zLCBkaXZpc2lvbk5hbWUpO1xuICAgIGNvbnN0IGJlbmNobWFyayA9IG5ldyBDb3Jwb3JhdGlvbk9wdGltaXplcigpO1xuICAgIGNvbnN0IGN1cnJlbnRGdW5kcyA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZnVuZHM7XG5cbiAgICBpZiAoZ2V0UHJvZml0KG5zKSA+PSB0aHJlc2hvbGRPZkZvY3VzaW5nT25BZHZlcnQpIHtcbiAgICAgICAgYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24gPSBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbldpdGhvdXRBZHZlcnQ7XG4gICAgfVxuXG4gICAgLy8gZW1wbG95ZWVTdGF0VXBncmFkZXNcbiAgICBjb25zdCBlbXBsb3llZVN0YXRVcGdyYWRlc0J1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24uZW1wbG95ZWVTdGF0VXBncmFkZXM7XG4gICAgY29uc3QgY3VycmVudENyZWF0aXZpdHlVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UUyk7XG4gICAgY29uc3QgY3VycmVudENoYXJpc21hVXBncmFkZUxldmVsID0gbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFMpO1xuICAgIGNvbnN0IGN1cnJlbnRJbnRlbGxpZ2VuY2VVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuTkVVUkFMX0FDQ0VMRVJBVE9SUyk7XG4gICAgY29uc3QgY3VycmVudEVmZmljaWVuY3lVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuRk9DVVNfV0lSRVMpO1xuICAgIGNvbnN0IG5ld0NyZWF0aXZpdHlVcGdyYWRlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxuICAgICAgICBVcGdyYWRlTmFtZS5OVU9QVElNQUxfTk9PVFJPUElDX0lOSkVDVE9SX0lNUExBTlRTLFxuICAgICAgICBjdXJyZW50Q3JlYXRpdml0eVVwZ3JhZGVMZXZlbCxcbiAgICAgICAgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgLyA0XG4gICAgKTtcbiAgICBjb25zdCBuZXdDaGFyaXNtYVVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXG4gICAgICAgIFVwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFMsXG4gICAgICAgIGN1cnJlbnRDaGFyaXNtYVVwZ3JhZGVMZXZlbCxcbiAgICAgICAgZW1wbG95ZWVTdGF0VXBncmFkZXNCdWRnZXQgLyA0XG4gICAgKTtcbiAgICBjb25zdCBuZXdJbnRlbGxpZ2VuY2VVcGdyYWRlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxuICAgICAgICBVcGdyYWRlTmFtZS5ORVVSQUxfQUNDRUxFUkFUT1JTLFxuICAgICAgICBjdXJyZW50SW50ZWxsaWdlbmNlVXBncmFkZUxldmVsLFxuICAgICAgICBlbXBsb3llZVN0YXRVcGdyYWRlc0J1ZGdldCAvIDRcbiAgICApO1xuICAgIGNvbnN0IG5ld0VmZmljaWVuY3lVcGdyYWRlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxuICAgICAgICBVcGdyYWRlTmFtZS5GT0NVU19XSVJFUyxcbiAgICAgICAgY3VycmVudEVmZmljaWVuY3lVcGdyYWRlTGV2ZWwsXG4gICAgICAgIGVtcGxveWVlU3RhdFVwZ3JhZGVzQnVkZ2V0IC8gNFxuICAgICk7XG4gICAgaWYgKCFkcnlSdW4pIHtcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UUywgbmV3Q3JlYXRpdml0eVVwZ3JhZGVMZXZlbCk7XG4gICAgICAgIGJ1eVVwZ3JhZGUobnMsIFVwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFMsIG5ld0NoYXJpc21hVXBncmFkZUxldmVsKTtcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuTkVVUkFMX0FDQ0VMRVJBVE9SUywgbmV3SW50ZWxsaWdlbmNlVXBncmFkZUxldmVsKTtcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuRk9DVVNfV0lSRVMsIG5ld0VmZmljaWVuY3lVcGdyYWRlTGV2ZWwpO1xuICAgIH1cblxuICAgIC8vIHNhbGVzQm90XG4gICAgY29uc3Qgc2FsZXNCb3RCdWRnZXQgPSB0b3RhbEJ1ZGdldCAqIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLnNhbGVzQm90O1xuICAgIGNvbnN0IGN1cnJlbnRTYWxlc0JvdFVwZ3JhZGVMZXZlbCA9IG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUyk7XG4gICAgY29uc3QgbmV3U2FsZXNCb3RVcGdyYWRlTGV2ZWwgPSBnZXRNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKFxuICAgICAgICBVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUyxcbiAgICAgICAgY3VycmVudFNhbGVzQm90VXBncmFkZUxldmVsLFxuICAgICAgICBzYWxlc0JvdEJ1ZGdldFxuICAgICk7XG4gICAgaWYgKCFkcnlSdW4pIHtcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFMsIG5ld1NhbGVzQm90VXBncmFkZUxldmVsKTtcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0SW5zaWdodFxuICAgIGNvbnN0IHByb2plY3RJbnNpZ2h0QnVkZ2V0ID0gdG90YWxCdWRnZXQgKiBidWRnZXRSYXRpb0ZvclByb2R1Y3REaXZpc2lvbi5wcm9qZWN0SW5zaWdodDtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluc2lnaHRVcGdyYWRlTGV2ZWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hUKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5zaWdodFVwZ3JhZGVMZXZlbCA9IGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXG4gICAgICAgIFVwZ3JhZGVOYW1lLlBST0pFQ1RfSU5TSUdIVCxcbiAgICAgICAgY3VycmVudFByb2plY3RJbnNpZ2h0VXBncmFkZUxldmVsLFxuICAgICAgICBwcm9qZWN0SW5zaWdodEJ1ZGdldFxuICAgICk7XG4gICAgaWYgKCFkcnlSdW4pIHtcbiAgICAgICAgYnV5VXBncmFkZShucywgVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hULCBuZXdQcm9qZWN0SW5zaWdodFVwZ3JhZGVMZXZlbCk7XG4gICAgfVxuXG4gICAgLy8gcmF3UHJvZHVjdGlvblxuICAgIGNvbnN0IHJhd1Byb2R1Y3Rpb25CdWRnZXQgPSB0b3RhbEJ1ZGdldCAqIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLnJhd1Byb2R1Y3Rpb247XG4gICAgaW1wcm92ZVByb2R1Y3REaXZpc2lvblJhd1Byb2R1Y3Rpb24oXG4gICAgICAgIGRpdmlzaW9uLm5hbWUsXG4gICAgICAgIGluZHVzdHJ5RGF0YSxcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzLFxuICAgICAgICByYXdQcm9kdWN0aW9uQnVkZ2V0LFxuICAgICAgICBkcnlSdW4sXG4gICAgICAgIGJlbmNobWFyayxcbiAgICAgICAgZW5hYmxlTG9nZ2luZ1xuICAgICk7XG5cbiAgICAvLyB3aWxzb25BZHZlcnRcbiAgICBjb25zdCB3aWxzb25BZHZlcnRCdWRnZXQgPSB0b3RhbEJ1ZGdldCAqIGJ1ZGdldFJhdGlvRm9yUHJvZHVjdERpdmlzaW9uLndpbHNvbkFkdmVydDtcbiAgICBpbXByb3ZlUHJvZHVjdERpdmlzaW9uV2lsc29uQWR2ZXJ0KFxuICAgICAgICBkaXZpc2lvbi5uYW1lLFxuICAgICAgICBpbmR1c3RyeURhdGEsXG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlcyxcbiAgICAgICAgd2lsc29uQWR2ZXJ0QnVkZ2V0LFxuICAgICAgICBkcnlSdW4sXG4gICAgICAgIGJlbmNobWFyayxcbiAgICAgICAgZW5hYmxlTG9nZ2luZ1xuICAgICk7XG5cbiAgICAvLyBvZmZpY2VcbiAgICBpZiAoIXNraXBVcGdyYWRpbmdPZmZpY2UpIHtcbiAgICAgICAgY29uc3Qgb2ZmaWNlc0J1ZGdldCA9IHRvdGFsQnVkZ2V0ICogYnVkZ2V0UmF0aW9Gb3JQcm9kdWN0RGl2aXNpb24ub2ZmaWNlO1xuICAgICAgICBhd2FpdCBpbXByb3ZlUHJvZHVjdERpdmlzaW9uT2ZmaWNlcyhcbiAgICAgICAgICAgIGRpdmlzaW9uLm5hbWUsXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEsXG4gICAgICAgICAgICBvZmZpY2VzQnVkZ2V0LFxuICAgICAgICAgICAgZHJ5UnVuLFxuICAgICAgICAgICAgZW5hYmxlTG9nZ2luZ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGxvZ2dlci5sb2coYFNwZW50OiAke25zLmZvcm1hdE51bWJlcihjdXJyZW50RnVuZHMgLSBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzKX1gKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRTdGF0aXN0aWNzKCkge1xuICAgIGdsb2JhbFRoaXMuUGxheWVyLmNvcnBvcmF0aW9uIS5jeWNsZUNvdW50ID0gMDtcbiAgICBnbG9iYWxUaGlzLmNvcnBvcmF0aW9uQ3ljbGVIaXN0b3J5ID0gW107XG4gICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5jeWNsZSA9IDA7XG4gICAgY29ycG9yYXRpb25FdmVudExvZ2dlci5jbGVhckV2ZW50RGF0YSgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0ZXN0KCk6IFByb21pc2U8dm9pZD4ge1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihuc0NvbnRleHQ6IE5TKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaW5pdChuc0NvbnRleHQpO1xuXG4gICAgaWYgKG5zLmdldFJlc2V0SW5mbygpLmN1cnJlbnROb2RlICE9PSAzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IGlzIHNwZWNpYWxpemVkIGZvciBCTjNcIik7XG4gICAgfVxuXG4gICAgY29uZmlnID0gbnMuZmxhZ3MoZGVmYXVsdENvbmZpZyk7XG4gICAgaWYgKGNvbmZpZy5oZWxwID09PSB0cnVlKSB7XG4gICAgICAgIG5zLnRwcmludChgRGVmYXVsdCBjb25maWc6ICR7ZGVmYXVsdENvbmZpZ31gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XG4gICAgLy8gbnMudGFpbCgpO1xuICAgIG5zLmNsZWFyTG9nKCk7XG5cbiAgICBpZiAoIW5zLmNvcnBvcmF0aW9uLmhhc0NvcnBvcmF0aW9uKCkpIHtcbiAgICAgICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5jcmVhdGVDb3Jwb3JhdGlvbihcIkNvcnBcIiwgY29uZmlnLnNlbGZGdW5kIGFzIGJvb2xlYW4pKSB7XG4gICAgICAgICAgICBucy5wcmludChgQ2Fubm90IGNyZWF0ZSBjb3Jwb3JhdGlvbmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgcHVyY2hhc2Ugb3JkZXIgb2YgYm9vc3QgbWF0ZXJpYWxzIHdoZW4gc2NyaXB0IGV4aXRzXG4gICAgbnN4LmFkZEF0RXhpdENhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY2xlYXJQdXJjaGFzZU9yZGVycyhucywgZmFsc2UpO1xuICAgIH0pO1xuXG4gICAgYWdyaWN1bHR1cmVJbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoSW5kdXN0cnlUeXBlLkFHUklDVUxUVVJFKTtcbiAgICBjaGVtaWNhbEluZHVzdHJ5RGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShJbmR1c3RyeVR5cGUuQ0hFTUlDQUwpO1xuICAgIHRvYmFjY29JbmR1c3RyeURhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRJbmR1c3RyeURhdGEoSW5kdXN0cnlUeXBlLlRPQkFDQ08pO1xuXG4gICAgaWYgKGNvbmZpZy5iZW5jaG1hcmsgPT09IHRydWUpIHtcbiAgICAgICAgZXhwb3NlR2FtZUludGVybmFsT2JqZWN0cygpO1xuICAgICAgICB0ZXN0aW5nVG9vbHMucmVzZXRSTkdEYXRhKCk7XG4gICAgICAgIGVuYWJsZVRlc3RpbmdUb29scyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5yb3VuZDEgPT09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgcm91bmQxKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5yb3VuZDIgPT09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgcm91bmQyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5yb3VuZDMgPT09IHRydWUpIHtcbiAgICAgICAgYXdhaXQgcm91bmQzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pbXByb3ZlQWxsRGl2aXNpb25zID09PSB0cnVlKSB7XG4gICAgICAgIG5zeC5raWxsUHJvY2Vzc2VzU3Bhd25Gcm9tU2FtZVNjcmlwdCgpO1xuICAgICAgICBucy50YWlsKCk7XG4gICAgICAgIGF3YWl0IGltcHJvdmVBbGxEaXZpc2lvbnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnRlc3QpIHtcbiAgICAgICAgbnMudGFpbCgpO1xuICAg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
