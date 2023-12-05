import { getRecordEntries, getRecordKeys } from "/libs/Record";
import { parseNumber } from "/libs/utils";
import { Ceres } from "/libs/Ceres";
import {
  CityName,
  CorpState,
  EmployeePosition,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionRawProduction,
  getMarketFactor,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getUpgradeBenefit,
  IndustryType,
  MaterialName,
  productMarketPriceMultiplier,
  ResearchName,
  UnlockName,
  UpgradeName
} from "/corporationFormulas";
import { CorpMaterialsData } from "/data/CorpMaterialsData";
var DivisionName = /* @__PURE__ */ ((DivisionName2) => {
  DivisionName2["AGRICULTURE"] = "Agriculture";
  DivisionName2["CHEMICAL"] = "Chemical";
  DivisionName2["TOBACCO"] = "Tobacco";
  return DivisionName2;
})(DivisionName || {});
const cities = [
  CityName.Sector12,
  CityName.Aevum,
  CityName.Chongqing,
  CityName.NewTokyo,
  CityName.Ishima,
  CityName.Volhaven
];
const materials = Object.values(MaterialName);
const boostMaterials = [
  MaterialName.AI_CORES,
  MaterialName.HARDWARE,
  MaterialName.REAL_ESTATE,
  MaterialName.ROBOTS
];
const costMultiplierForEmployeeStatsResearch = 5;
const costMultiplierForProductionResearch = 10;
const researchPrioritiesForSupportDivision = [
  { research: ResearchName.HI_TECH_RND_LABORATORY, costMultiplier: 1 },
  { research: ResearchName.OVERCLOCK, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.STIMU, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.AUTO_DRUG, costMultiplier: 13.5 },
  { research: ResearchName.GO_JUICE, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.CPH4_INJECT, costMultiplier: costMultiplierForEmployeeStatsResearch },
  { research: ResearchName.SELF_CORRECTING_ASSEMBLERS, costMultiplier: costMultiplierForProductionResearch },
  { research: ResearchName.DRONES, costMultiplier: 50 },
  { research: ResearchName.DRONES_ASSEMBLY, costMultiplier: costMultiplierForProductionResearch },
  { research: ResearchName.DRONES_TRANSPORT, costMultiplier: costMultiplierForProductionResearch }
];
const researchPrioritiesForProductDivision = [
  ...researchPrioritiesForSupportDivision,
  { research: ResearchName.UPGRADE_FULCRUM, costMultiplier: costMultiplierForProductionResearch }
  // Do not buy these researches
  // {research: ResearchName.UPGRADE_CAPACITY_1, costMultiplier: costMultiplierForProductionResearch},
  // {research: ResearchName.UPGRADE_CAPACITY_2, costMultiplier: costMultiplierForProductionResearch},
];
const exportString = "(IPROD+IINV/10)*(-1)";
const dummyDivisionNamePrefix = "z-";
const sampleProductName = "Sample product";
const smartSupplyData = /* @__PURE__ */ new Map();
const productMarkupData = /* @__PURE__ */ new Map();
const setOfDivisionsWaitingForRP = /* @__PURE__ */ new Set();
class Logger {
  #enableLogging;
  city;
  constructor(enableLogging, city) {
    this.#enableLogging = enableLogging;
    this.city = city;
  }
  log(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.log(...args);
    }
  }
  warn(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.warn(...args);
    }
  }
  error(...args) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.error(...args);
    }
  }
  time(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.time(label);
    }
  }
  timeEnd(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.timeEnd(label);
    }
  }
  timeLog(label) {
    if (!this.#enableLogging) {
      return;
    }
    if (this.city === void 0 || this.city === CityName.Sector12) {
      console.timeLog(label);
    }
  }
}
function showWarning(ns, warningMessage) {
  console.warn(warningMessage);
  ns.print(warningMessage);
  ns.toast(warningMessage, "warning");
}
function loopAllDivisionsAndCities(ns, callback) {
  for (const division of ns.corporation.getCorporation().divisions) {
    if (division.startsWith(dummyDivisionNamePrefix)) {
      continue;
    }
    for (const city of cities) {
      callback(division, city);
    }
  }
}
async function loopAllDivisionsAndCitiesAsyncCallback(ns, callback) {
  for (const division of ns.corporation.getCorporation().divisions) {
    if (division.startsWith(dummyDivisionNamePrefix)) {
      continue;
    }
    for (const city of cities) {
      await callback(division, city);
    }
  }
}
async function waitUntilAfterStateHappens(ns, state) {
  while (true) {
    if (ns.corporation.getCorporation().prevState === state) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
}
async function waitForNextTimeStateHappens(ns, state) {
  while (true) {
    await ns.corporation.nextUpdate();
    if (ns.corporation.getCorporation().prevState === state) {
      break;
    }
  }
}
async function waitForNumberOfCycles(ns, numberOfCycles) {
  const currentState = ns.corporation.getCorporation().prevState;
  let count = 0;
  while (count < numberOfCycles) {
    await waitForNextTimeStateHappens(ns, currentState);
    ++count;
  }
}
function getProfit(ns) {
  const corporation = ns.corporation.getCorporation();
  return corporation.revenue - corporation.expenses;
}
function hasDivision(ns, divisionName) {
  return ns.corporation.getCorporation().divisions.includes(divisionName);
}
function buyUpgrade(ns, upgrade, targetLevel) {
  for (let i = ns.corporation.getUpgradeLevel(upgrade); i < targetLevel; i++) {
    ns.corporation.levelUpgrade(upgrade);
  }
  if (ns.corporation.getUpgradeLevel(upgrade) < targetLevel) {
    ns.print(`ERROR: Cannot buy enough upgrade level`);
  }
}
function buyAdvert(ns, divisionName, targetLevel) {
  for (let i = ns.corporation.getHireAdVertCount(divisionName); i < targetLevel; i++) {
    ns.corporation.hireAdVert(divisionName);
  }
  if (ns.corporation.getHireAdVertCount(divisionName) < targetLevel) {
    ns.print(`ERROR: Cannot buy enough Advert level`);
  }
}
function buyUnlock(ns, unlockName) {
  if (ns.corporation.hasUnlock(unlockName)) {
    return;
  }
  ns.corporation.purchaseUnlock(unlockName);
}
function upgradeWarehouse(ns, divisionName, city, targetLevel) {
  const amount = targetLevel - ns.corporation.getWarehouse(divisionName, city).level;
  if (amount < 1) {
    return;
  }
  ns.corporation.upgradeWarehouse(divisionName, city, amount);
}
async function buyTeaAndThrowParty(ns, divisionName) {
  const epsilon = 0.5;
  while (true) {
    let finish = true;
    for (const city of cities) {
      const office = ns.corporation.getOffice(divisionName, city);
      if (office.avgEnergy < office.maxEnergy - epsilon) {
        ns.corporation.buyTea(divisionName, city);
        finish = false;
      }
      if (office.avgMorale < office.maxMorale - epsilon) {
        ns.corporation.throwParty(divisionName, city, 5e5);
        finish = false;
      }
    }
    if (finish) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
}
function buyTeaAndThrowPartyForAllDivisions(ns) {
  if (ns.corporation.getInvestmentOffer().round >= 3 || ns.corporation.getCorporation().public) {
    loopAllDivisionsAndCities(ns, (divisionName, city) => {
      ns.corporation.buyTea(divisionName, city);
      ns.corporation.throwParty(divisionName, city, 5e5);
    });
    return;
  }
  const epsilon = 0.5;
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const office = ns.corporation.getOffice(divisionName, city);
    if (office.avgEnergy < office.maxEnergy - epsilon) {
      ns.corporation.buyTea(divisionName, city);
    }
    if (office.avgMorale < office.maxMorale - epsilon) {
      ns.corporation.throwParty(divisionName, city, 5e5);
    }
  });
}
function generateOfficeSetupsForEarlyRounds(size, increaseBusiness = false) {
  let officeSetup;
  switch (size) {
    case 3:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 1 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 0 }
      ];
      break;
    case 4:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 1 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 1 }
      ];
      break;
    case 5:
      officeSetup = [
        { name: EmployeePosition.OPERATIONS, count: 2 },
        { name: EmployeePosition.ENGINEER, count: 1 },
        { name: EmployeePosition.BUSINESS, count: 1 },
        { name: EmployeePosition.MANAGEMENT, count: 1 }
      ];
      break;
    case 6:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 1 }
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      }
      break;
    case 7:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 2 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
        ];
      }
      break;
    case 8:
      if (increaseBusiness) {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 2 },
          { name: EmployeePosition.MANAGEMENT, count: 2 }
          // { name: EmployeePosition.OPERATIONS, count: 2 },
          // { name: EmployeePosition.ENGINEER, count: 1 },
          // { name: EmployeePosition.BUSINESS, count: 3 },
          // { name: EmployeePosition.MANAGEMENT, count: 2 },
        ];
      } else {
        officeSetup = [
          { name: EmployeePosition.OPERATIONS, count: 3 },
          { name: EmployeePosition.ENGINEER, count: 1 },
          { name: EmployeePosition.BUSINESS, count: 1 },
          { name: EmployeePosition.MANAGEMENT, count: 3 }
        ];
      }
      break;
    default:
      throw new Error(`Invalid office size: ${size}`);
  }
  return generateOfficeSetups(
    cities,
    size,
    officeSetup
  );
}
function generateOfficeSetups(cities2, size, jobs) {
  const officeSetupJobs = {
    Operations: 0,
    Engineer: 0,
    Business: 0,
    Management: 0,
    "Research & Development": 0,
    Intern: 0
  };
  for (const job of jobs) {
    switch (job.name) {
      case EmployeePosition.OPERATIONS:
        officeSetupJobs.Operations = job.count;
        break;
      case EmployeePosition.ENGINEER:
        officeSetupJobs.Engineer = job.count;
        break;
      case EmployeePosition.BUSINESS:
        officeSetupJobs.Business = job.count;
        break;
      case EmployeePosition.MANAGEMENT:
        officeSetupJobs.Management = job.count;
        break;
      case EmployeePosition.RESEARCH_DEVELOPMENT:
        officeSetupJobs["Research & Development"] = job.count;
        break;
      case EmployeePosition.INTERN:
        officeSetupJobs.Intern = job.count;
        break;
      default:
        throw new Error(`Invalid job: ${job.name}`);
    }
  }
  const officeSetups = [];
  for (const city of cities2) {
    officeSetups.push({
      city,
      size,
      jobs: officeSetupJobs
    });
  }
  return officeSetups;
}
function assignJobs(ns, divisionName, officeSetups) {
  for (const officeSetup of officeSetups) {
    for (const jobName of Object.values(EmployeePosition)) {
      ns.corporation.setAutoJobAssignment(divisionName, officeSetup.city, jobName, 0);
    }
    for (const [jobName, count] of Object.entries(officeSetup.jobs)) {
      if (!ns.corporation.setAutoJobAssignment(divisionName, officeSetup.city, jobName, count)) {
        ns.print(`Cannot assign job properly. City: ${officeSetup.city}, job: ${jobName}, count: ${count}`);
      }
    }
  }
}
function upgradeOffices(ns, divisionName, officeSetups) {
  for (const officeSetup of officeSetups) {
    const office = ns.corporation.getOffice(divisionName, officeSetup.city);
    if (officeSetup.size < office.size) {
      ns.print(`Office's new size is smaller than current size. City: ${officeSetup.city}`);
      continue;
    }
    if (officeSetup.size > office.size) {
      ns.corporation.upgradeOfficeSize(divisionName, officeSetup.city, officeSetup.size - office.size);
    }
    while (ns.corporation.hireEmployee(divisionName, officeSetup.city, EmployeePosition.RESEARCH_DEVELOPMENT)) {
    }
  }
  assignJobs(ns, divisionName, officeSetups);
  ns.print(`Upgrade offices completed`);
}
function clearPurchaseOrders(ns, clearInputMaterialOrders = true) {
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    for (const materialName of boostMaterials) {
      ns.corporation.buyMaterial(divisionName, city, materialName, 0);
      ns.corporation.sellMaterial(divisionName, city, materialName, "0", "MP");
    }
    if (clearInputMaterialOrders) {
      const division = ns.corporation.getDivision(divisionName);
      const industrialData = ns.corporation.getIndustryData(division.type);
      for (const materialName of getRecordKeys(industrialData.requiredMaterials)) {
        ns.corporation.buyMaterial(divisionName, city, materialName, 0);
        ns.corporation.sellMaterial(divisionName, city, materialName, "0", "MP");
      }
    }
  });
}
function generateMaterialsOrders(cities2, materials2) {
  const orders = [];
  for (const city of cities2) {
    orders.push({
      city,
      materials: materials2
    });
  }
  return orders;
}
async function stockMaterials(ns, divisionName, orders, bulkPurchase = false, discardExceeded = false) {
  let count = 0;
  while (true) {
    if (count === 5) {
      const warningMessage = `It takes too many cycles to stock up on materials. Division: ${divisionName}, orders: ${JSON.stringify(orders)}`;
      showWarning(ns, warningMessage);
      break;
    }
    let finish = true;
    for (const order of orders) {
      for (const material of order.materials) {
        const storedAmount = ns.corporation.getMaterial(divisionName, order.city, material.name).stored;
        if (storedAmount === material.count) {
          ns.corporation.buyMaterial(divisionName, order.city, material.name, 0);
          ns.corporation.sellMaterial(divisionName, order.city, material.name, "0", "MP");
          continue;
        }
        if (storedAmount < material.count) {
          if (bulkPurchase) {
            ns.corporation.bulkPurchase(divisionName, order.city, material.name, material.count - storedAmount);
          } else {
            ns.corporation.buyMaterial(divisionName, order.city, material.name, (material.count - storedAmount) / 10);
            ns.corporation.sellMaterial(divisionName, order.city, material.name, "0", "MP");
          }
          finish = false;
        } else if (discardExceeded) {
          ns.corporation.buyMaterial(divisionName, order.city, material.name, 0);
          ns.corporation.sellMaterial(divisionName, order.city, material.name, ((storedAmount - material.count) / 10).toString(), "0");
          finish = false;
        }
      }
    }
    if (finish) {
      break;
    }
    await waitForNextTimeStateHappens(ns, CorpState.PURCHASE);
    ++count;
  }
}
function getCorporationUpgradeLevels(ns) {
  const corporationUpgradeLevels = {
    [UpgradeName.SMART_FACTORIES]: 0,
    [UpgradeName.SMART_STORAGE]: 0,
    [UpgradeName.DREAM_SENSE]: 0,
    [UpgradeName.WILSON_ANALYTICS]: 0,
    [UpgradeName.NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS]: 0,
    [UpgradeName.SPEECH_PROCESSOR_IMPLANTS]: 0,
    [UpgradeName.NEURAL_ACCELERATORS]: 0,
    [UpgradeName.FOCUS_WIRES]: 0,
    [UpgradeName.ABC_SALES_BOTS]: 0,
    [UpgradeName.PROJECT_INSIGHT]: 0
  };
  for (const upgradeName of Object.values(UpgradeName)) {
    corporationUpgradeLevels[upgradeName] = ns.corporation.getUpgradeLevel(upgradeName);
  }
  return corporationUpgradeLevels;
}
function getDivisionResearches(ns, divisionName) {
  const divisionResearches = {
    [ResearchName.HI_TECH_RND_LABORATORY]: false,
    [ResearchName.AUTO_BREW]: false,
    [ResearchName.AUTO_PARTY]: false,
    [ResearchName.AUTO_DRUG]: false,
    [ResearchName.CPH4_INJECT]: false,
    [ResearchName.DRONES]: false,
    [ResearchName.DRONES_ASSEMBLY]: false,
    [ResearchName.DRONES_TRANSPORT]: false,
    [ResearchName.GO_JUICE]: false,
    [ResearchName.HR_BUDDY_RECRUITMENT]: false,
    [ResearchName.HR_BUDDY_TRAINING]: false,
    [ResearchName.MARKET_TA_1]: false,
    [ResearchName.MARKET_TA_2]: false,
    [ResearchName.OVERCLOCK]: false,
    [ResearchName.SELF_CORRECTING_ASSEMBLERS]: false,
    [ResearchName.STIMU]: false,
    [ResearchName.UPGRADE_CAPACITY_1]: false,
    [ResearchName.UPGRADE_CAPACITY_2]: false,
    [ResearchName.UPGRADE_DASHBOARD]: false,
    [ResearchName.UPGRADE_FULCRUM]: false
  };
  for (const researchName of Object.values(ResearchName)) {
    divisionResearches[researchName] = ns.corporation.hasResearched(divisionName, researchName);
  }
  return divisionResearches;
}
async function createDivision(ns, divisionName, officeSize, warehouseLevel) {
  if (!hasDivision(ns, divisionName)) {
    let industryType;
    switch (divisionName) {
      case "Agriculture" /* AGRICULTURE */:
        industryType = IndustryType.AGRICULTURE;
        break;
      case "Chemical" /* CHEMICAL */:
        industryType = IndustryType.CHEMICAL;
        break;
      case "Tobacco" /* TOBACCO */:
        industryType = IndustryType.TOBACCO;
        break;
      default:
        throw new Error(`Invalid division name: ${divisionName}`);
    }
    ns.corporation.expandIndustry(industryType, divisionName);
  }
  const division = ns.corporation.getDivision(divisionName);
  ns.print(`Initializing division: ${divisionName}`);
  for (const city of cities) {
    if (!division.cities.includes(city)) {
      ns.corporation.expandCity(divisionName, city);
      ns.print(`Expand ${divisionName} to ${city}`);
    }
    if (!ns.corporation.hasWarehouse(divisionName, city)) {
      ns.corporation.purchaseWarehouse(divisionName, city);
    }
  }
  upgradeOffices(
    ns,
    divisionName,
    generateOfficeSetups(
      cities,
      officeSize,
      [
        {
          name: EmployeePosition.RESEARCH_DEVELOPMENT,
          count: officeSize
        }
      ]
    )
  );
  for (const city of cities) {
    upgradeWarehouse(ns, divisionName, city, warehouseLevel);
    if (ns.corporation.hasUnlock(UnlockName.SMART_SUPPLY)) {
      ns.corporation.setSmartSupply(divisionName, city, true);
    }
  }
  return ns.corporation.getDivision(divisionName);
}
function getOptimalBoostMaterialQuantities(industryData, spaceConstraint, round = true) {
  const { aiCoreFactor, hardwareFactor, realEstateFactor, robotFactor } = industryData;
  const boostMaterialCoefficients = [aiCoreFactor, hardwareFactor, realEstateFactor, robotFactor];
  const boostMaterialSizes = boostMaterials.map((mat) => CorpMaterialsData[mat].size);
  const calculateOptimalQuantities = (matCoefficients, matSizes) => {
    const sumOfCoefficients = matCoefficients.reduce((a, b) => a + b, 0);
    const sumOfSizes = matSizes.reduce((a, b) => a + b, 0);
    const result = [];
    for (let i = 0; i < matSizes.length; ++i) {
      let matCount = (spaceConstraint - 500 * (matSizes[i] / matCoefficients[i] * (sumOfCoefficients - matCoefficients[i]) - (sumOfSizes - matSizes[i]))) / (sumOfCoefficients / matCoefficients[i]) / matSizes[i];
      if (matCoefficients[i] <= 0 || matCount < 0) {
        return calculateOptimalQuantities(
          matCoefficients.toSpliced(i, 1),
          matSizes.toSpliced(i, 1)
        ).toSpliced(i, 0, 0);
      } else {
        if (round) {
          matCount = Math.round(matCount);
        }
        result.push(matCount);
      }
    }
    return result;
  };
  return calculateOptimalQuantities(boostMaterialCoefficients, boostMaterialSizes);
}
function getExportRoutes(ns) {
  const exportRoutes = [];
  for (const material of materials) {
    loopAllDivisionsAndCities(ns, (divisionName, sourceCity) => {
      const exports = ns.corporation.getMaterial(divisionName, sourceCity, material).exports;
      if (exports.length === 0) {
        return;
      }
      for (const exportRoute of exports) {
        exportRoutes.push({
          material,
          sourceCity,
          sourceDivision: divisionName,
          destinationDivision: exportRoute.division,
          destinationCity: exportRoute.city,
          destinationAmount: exportRoute.amount
        });
      }
    });
  }
  return exportRoutes;
}
function buildSmartSupplyKey(divisionName, city) {
  return `${divisionName}|${city}`;
}
function getRawProduction(ns, division, city, isProduct2) {
  const office = ns.corporation.getOffice(division.name, city);
  let rawProduction = getDivisionRawProduction(
    isProduct2,
    {
      operationsProduction: office.employeeProductionByJob.Operations,
      engineerProduction: office.employeeProductionByJob.Engineer,
      managementProduction: office.employeeProductionByJob.Management
    },
    division.productionMult,
    getCorporationUpgradeLevels(ns),
    getDivisionResearches(ns, division.name)
  );
  rawProduction = rawProduction * 10;
  return rawProduction;
}
function getLimitedRawProduction(ns, division, city, industrialData, warehouse, isProduct2, productSize) {
  let rawProduction = getRawProduction(ns, division, city, isProduct2);
  let requiredStorageSpaceOfEachOutputUnit = 0;
  if (isProduct2) {
    requiredStorageSpaceOfEachOutputUnit += productSize;
  } else {
    for (const outputMaterialName of industrialData.producedMaterials) {
      requiredStorageSpaceOfEachOutputUnit += ns.corporation.getMaterialData(outputMaterialName).size;
    }
  }
  for (const [requiredMaterialName, requiredMaterialCoefficient] of getRecordEntries(industrialData.requiredMaterials)) {
    requiredStorageSpaceOfEachOutputUnit -= ns.corporation.getMaterialData(requiredMaterialName).size * requiredMaterialCoefficient;
  }
  if (requiredStorageSpaceOfEachOutputUnit > 0) {
    const maxNumberOfOutputUnits = Math.floor(
      (warehouse.size - warehouse.sizeUsed) / requiredStorageSpaceOfEachOutputUnit
    );
    rawProduction = Math.min(rawProduction, maxNumberOfOutputUnits);
  }
  rawProduction = Math.max(rawProduction, 0);
  return rawProduction;
}
function setSmartSupplyData(ns) {
  if (ns.corporation.getCorporation().prevState !== CorpState.PURCHASE) {
    return;
  }
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industrialData = ns.corporation.getIndustryData(division.type);
    const warehouse = ns.corporation.getWarehouse(division.name, city);
    let totalRawProduction = 0;
    if (industrialData.makesMaterials) {
      totalRawProduction += getLimitedRawProduction(
        ns,
        division,
        city,
        industrialData,
        warehouse,
        false
      );
    }
    if (industrialData.makesProducts) {
      for (const productName of division.products) {
        const product = ns.corporation.getProduct(divisionName, city, productName);
        if (product.developmentProgress < 100) {
          continue;
        }
        totalRawProduction += getLimitedRawProduction(
          ns,
          division,
          city,
          industrialData,
          warehouse,
          true,
          product.size
        );
      }
    }
    smartSupplyData.set(buildSmartSupplyKey(divisionName, city), totalRawProduction);
  });
}
function detectWarehouseCongestion(ns, division, industrialData, city, warehouseCongestionData) {
  const requiredMaterials = getRecordEntries(industrialData.requiredMaterials);
  let isWarehouseCongested = false;
  const warehouseCongestionDataKey = `${division.name}|${city}`;
  const items = [];
  if (industrialData.producedMaterials) {
    for (const materialName of industrialData.producedMaterials) {
      items.push(ns.corporation.getMaterial(division.name, city, materialName));
    }
  }
  if (industrialData.makesProducts) {
    for (const productName of division.products) {
      const product = ns.corporation.getProduct(division.name, city, productName);
      if (product.developmentProgress < 100) {
        continue;
      }
      items.push(product);
    }
  }
  for (const item of items) {
    if (item.productionAmount !== 0) {
      warehouseCongestionData.set(warehouseCongestionDataKey, 0);
      continue;
    }
    let numberOfCongestionTimes = warehouseCongestionData.get(warehouseCongestionDataKey) + 1;
    if (Number.isNaN(numberOfCongestionTimes)) {
      numberOfCongestionTimes = 0;
    }
    warehouseCongestionData.set(warehouseCongestionDataKey, numberOfCongestionTimes);
    break;
  }
  if (warehouseCongestionData.get(warehouseCongestionDataKey) > 5) {
    isWarehouseCongested = true;
  }
  if (isWarehouseCongested) {
    showWarning(ns, `Warehouse may be congested. Division: ${division.name}, city: ${city}.`);
    for (const [materialName] of requiredMaterials) {
      ns.corporation.buyMaterial(division.name, city, materialName, 0);
      ns.corporation.sellMaterial(division.name, city, materialName, "MAX", "0");
    }
    warehouseCongestionData.set(warehouseCongestionDataKey, 0);
  } else {
    for (const [materialName] of requiredMaterials) {
      const material = ns.corporation.getMaterial(division.name, city, materialName);
      if (material.desiredSellAmount !== 0) {
        ns.corporation.sellMaterial(division.name, city, materialName, "0", "0");
      }
    }
  }
  return isWarehouseCongested;
}
function buyOptimalAmountOfInputMaterials(ns, warehouseCongestionData) {
  if (ns.corporation.getCorporation().nextState !== "PURCHASE") {
    return;
  }
  loopAllDivisionsAndCities(ns, (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industrialData = ns.corporation.getIndustryData(division.type);
    const office = ns.corporation.getOffice(division.name, city);
    const requiredMaterials = getRecordEntries(industrialData.requiredMaterials);
    let isWarehouseCongested = false;
    if (!setOfDivisionsWaitingForRP.has(divisionName) && office.employeeJobs["Research & Development"] !== office.numEmployees) {
      isWarehouseCongested = detectWarehouseCongestion(
        ns,
        division,
        industrialData,
        city,
        warehouseCongestionData
      );
    }
    if (isWarehouseCongested) {
      return;
    }
    const warehouse = ns.corporation.getWarehouse(division.name, city);
    const inputMaterials = {};
    for (const [materialName, materialCoefficient] of requiredMaterials) {
      inputMaterials[materialName] = {
        requiredQuantity: 0,
        coefficient: materialCoefficient
      };
    }
    for (const inputMaterialData of Object.values(inputMaterials)) {
      const requiredQuantity = (smartSupplyData.get(buildSmartSupplyKey(divisionName, city)) ?? 0) * inputMaterialData.coefficient;
      inputMaterialData.requiredQuantity += requiredQuantity;
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      const materialData = ns.corporation.getMaterialData(materialName);
      const maxAcceptableQuantity = Math.floor((warehouse.size - warehouse.sizeUsed) / materialData.size);
      const limitedRequiredQuantity = Math.min(inputMaterialData.requiredQuantity, maxAcceptableQuantity);
      if (limitedRequiredQuantity > 0) {
        inputMaterialData.requiredQuantity = limitedRequiredQuantity;
      }
    }
    let leastAmountOfOutputUnits = Number.MAX_VALUE;
    for (const { requiredQuantity, coefficient } of Object.values(inputMaterials)) {
      const amountOfOutputUnits = requiredQuantity / coefficient;
      if (amountOfOutputUnits < leastAmountOfOutputUnits) {
        leastAmountOfOutputUnits = amountOfOutputUnits;
      }
    }
    for (const inputMaterialData of Object.values(inputMaterials)) {
      inputMaterialData.requiredQuantity = leastAmountOfOutputUnits * inputMaterialData.coefficient;
    }
    let requiredSpace = 0;
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      requiredSpace += inputMaterialData.requiredQuantity * ns.corporation.getMaterialData(materialName).size;
    }
    const freeSpace = warehouse.size - warehouse.sizeUsed;
    if (requiredSpace > freeSpace) {
      const constrainedStorageSpaceMultiplier = freeSpace / requiredSpace;
      for (const inputMaterialData of Object.values(inputMaterials)) {
        inputMaterialData.requiredQuantity = Math.floor(inputMaterialData.requiredQuantity * constrainedStorageSpaceMultiplier);
      }
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      const material = ns.corporation.getMaterial(divisionName, city, materialName);
      inputMaterialData.requiredQuantity = Math.max(0, inputMaterialData.requiredQuantity - material.stored);
    }
    for (const [materialName, inputMaterialData] of getRecordEntries(inputMaterials)) {
      ns.corporation.buyMaterial(divisionName, city, materialName, inputMaterialData.requiredQuantity / 10);
    }
  });
}
async function findOptimalAmountOfBoostMaterials(ns, divisionName, industryData, city, useWarehouseSize, ratio) {
  const warehouseSize = ns.corporation.getWarehouse(divisionName, city).size;
  if (useWarehouseSize) {
    return getOptimalBoostMaterialQuantities(industryData, warehouseSize * ratio);
  }
  await waitUntilAfterStateHappens(ns, CorpState.PRODUCTION);
  const availableSpace = ns.corporation.getWarehouse(divisionName, city).size - ns.corporation.getWarehouse(divisionName, city).sizeUsed;
  return getOptimalBoostMaterialQuantities(industryData, availableSpace * ratio);
}
async function waitUntilHavingEnoughResearchPoints(ns, conditions) {
  ns.print(`Waiting for research points: ${JSON.stringify(conditions)}`);
  while (true) {
    let finish = true;
    for (const condition of conditions) {
      if (ns.corporation.getDivision(condition.divisionName).researchPoints >= condition.researchPoint) {
        setOfDivisionsWaitingForRP.delete(condition.divisionName);
        continue;
      }
      setOfDivisionsWaitingForRP.add(condition.divisionName);
      finish = false;
    }
    if (finish) {
      break;
    }
    await ns.corporation.nextUpdate();
  }
  ns.print(`Finished waiting for research points. Conditions: ${JSON.stringify(conditions)}`);
}
function getProductIdArray(ns, divisionName) {
  const products = ns.corporation.getDivision(divisionName).products;
  return products.map((productName) => {
    const productNameParts = productName.split("-");
    if (productNameParts.length != 3) {
      return NaN;
    }
    return parseNumber(productNameParts[1]);
  }).filter((productIndex) => !Number.isNaN(productIndex));
}
function generateNextProductName(ns, divisionName, productDevelopmentBudget) {
  if (!Number.isFinite(productDevelopmentBudget) || productDevelopmentBudget < 1e3) {
    throw new Error(`Invalid budget: ${productDevelopmentBudget}`);
  }
  const productIdArray = getProductIdArray(ns, divisionName);
  if (productIdArray.length === 0) {
    return `${divisionName}-00000-${productDevelopmentBudget.toExponential(5)}`;
  }
  return `${divisionName}-${(Math.max(...productIdArray) + 1).toString().padStart(5, "0")}-${productDevelopmentBudget.toExponential(5)}`;
}
function getMaxNumberOfProducts(ns, divisionName) {
  let maxNumberOfProducts = 3;
  if (ns.corporation.hasResearched(divisionName, ResearchName.UPGRADE_CAPACITY_1)) {
    maxNumberOfProducts = 4;
  }
  if (ns.corporation.hasResearched(divisionName, ResearchName.UPGRADE_CAPACITY_2)) {
    maxNumberOfProducts = 5;
  }
  return maxNumberOfProducts;
}
function developNewProduct(ns, divisionName, mainProductDevelopmentCity, productDevelopmentBudget) {
  const products = ns.corporation.getDivision(divisionName).products;
  let hasDevelopingProduct = false;
  let bestProduct = null;
  let worstProduct = null;
  let maxProductRating = Number.MIN_VALUE;
  let minProductRating = Number.MAX_VALUE;
  for (const productName2 of products) {
    const product = ns.corporation.getProduct(divisionName, mainProductDevelopmentCity, productName2);
    if (product.developmentProgress < 100) {
      hasDevelopingProduct = true;
      break;
    }
    const productRating = product.rating;
    if (productRating < minProductRating) {
      worstProduct = product;
      minProductRating = productRating;
    }
    if (productRating > maxProductRating) {
      bestProduct = product;
      maxProductRating = productRating;
    }
  }
  if (hasDevelopingProduct) {
    return null;
  }
  if (!bestProduct && products.length > 0) {
    throw new Error("Cannot find the best product");
  }
  if (!worstProduct && products.length > 0) {
    throw new Error("Cannot find the worst product to discontinue");
  }
  if (bestProduct) {
    const bestProductBudget = bestProduct.designInvestment + bestProduct.advertisingInvestment;
    if (productDevelopmentBudget < bestProductBudget * 0.5 && products.length >= 3) {
      const warningMessage = `Budget for new product is too low: ${ns.formatNumber(productDevelopmentBudget)}. Current best product's budget: ${ns.formatNumber(bestProductBudget)}`;
      showWarning(
        ns,
        warningMessage
      );
    }
  }
  if (worstProduct && products.length === getMaxNumberOfProducts(ns, divisionName)) {
    ns.corporation.discontinueProduct(divisionName, worstProduct.name);
  }
  const productName = generateNextProductName(ns, divisionName, productDevelopmentBudget);
  ns.corporation.makeProduct(
    divisionName,
    mainProductDevelopmentCity,
    productName,
    productDevelopmentBudget / 2,
    productDevelopmentBudget / 2
  );
  return productName;
}
function getNewestProductName(ns, divisionName) {
  const products = ns.corporation.getDivision(divisionName).products;
  if (products.length === 0) {
    return null;
  }
  return products[products.length - 1];
}
async function calculateProductMarkup(divisionRP, industryScienceFactor, product, employeeProductionByJob) {
  const designInvestmentMultiplier = 1 + Math.pow(product.designInvestment, 0.1) / 100;
  const researchPointMultiplier = 1 + Math.pow(divisionRP, industryScienceFactor) / 800;
  const k = designInvestmentMultiplier * researchPointMultiplier;
  const balanceMultiplier = function(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) {
    const totalCreationJobFactors2 = creationJobFactorsEngineer + creationJobFactorsManagement + creationJobFactorsRnD + creationJobFactorsOperations + creationJobFactorsBusiness;
    const engineerRatio = creationJobFactorsEngineer / totalCreationJobFactors2;
    const managementRatio2 = creationJobFactorsManagement / totalCreationJobFactors2;
    const researchAndDevelopmentRatio = creationJobFactorsRnD / totalCreationJobFactors2;
    const operationsRatio = creationJobFactorsOperations / totalCreationJobFactors2;
    const businessRatio2 = creationJobFactorsBusiness / totalCreationJobFactors2;
    return 1.2 * engineerRatio + 0.9 * managementRatio2 + 1.3 * researchAndDevelopmentRatio + 1.5 * operationsRatio + businessRatio2;
  };
  const f1 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.1 * creationJobFactorsEngineer + 0.05 * creationJobFactorsManagement + 0.05 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.02 * creationJobFactorsBusiness) - product.stats.quality;
  };
  const f2 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.15 * creationJobFactorsEngineer + 0.02 * creationJobFactorsManagement + 0.02 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.02 * creationJobFactorsBusiness) - product.stats.performance;
  };
  const f3 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.05 * creationJobFactorsEngineer + 0.02 * creationJobFactorsManagement + 0.08 * creationJobFactorsRnD + 0.05 * creationJobFactorsOperations + 0.05 * creationJobFactorsBusiness) - product.stats.durability;
  };
  const f4 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.02 * creationJobFactorsEngineer + 0.08 * creationJobFactorsManagement + 0.02 * creationJobFactorsRnD + 0.05 * creationJobFactorsOperations + 0.08 * creationJobFactorsBusiness) - product.stats.reliability;
  };
  const f5 = function([creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness]) {
    return k * balanceMultiplier(creationJobFactorsEngineer, creationJobFactorsManagement, creationJobFactorsRnD, creationJobFactorsOperations, creationJobFactorsBusiness) * (0.08 * creationJobFactorsManagement + 0.05 * creationJobFactorsRnD + 0.02 * creationJobFactorsOperations + 0.1 * creationJobFactorsBusiness) - product.stats.aesthetics;
  };
  let solverResult = {
    success: false,
    message: "",
    x: [],
    report: "string"
  };
  const solver = new Ceres();
  await solver.promise.then(function() {
    solver.add_function(f1);
    solver.add_function(f2);
    solver.add_function(f3);
    solver.add_function(f4);
    solver.add_function(f5);
    let guess = [1, 1, 1, 1, 1];
    if (employeeProductionByJob) {
      guess = [
        employeeProductionByJob.engineerProduction,
        employeeProductionByJob.managementProduction,
        employeeProductionByJob.researchAndDevelopmentProduction,
        employeeProductionByJob.operationsProduction,
        employeeProductionByJob.businessProduction
      ];
    }
    solverResult = solver.solve(guess);
    solver.remove();
  });
  if (!solverResult.success) {
    throw new Error(`ERROR: Cannot find hidden stats of product: ${JSON.stringify(product)}`);
  }
  const totalCreationJobFactors = solverResult.x[0] + solverResult.x[1] + solverResult.x[2] + solverResult.x[3] + solverResult.x[4];
  const managementRatio = solverResult.x[1] / totalCreationJobFactors;
  const businessRatio = solverResult.x[4] / totalCreationJobFactors;
  const advertisingInvestmentMultiplier = 1 + Math.pow(product.advertisingInvestment, 0.1) / 100;
  const businessManagementRatio = Math.max(businessRatio + managementRatio, 1 / totalCreationJobFactors);
  return 100 / (advertisingInvestmentMultiplier * Math.pow(product.stats.quality + 1e-3, 0.65) * businessManagementRatio);
}
function isProduct(item) {
  return "rating" in item;
}
function validateProductMarkupMap(ns) {
  for (const productKey of productMarkupData.keys()) {
    const productKeyInfo = productKey.split("|");
    const divisionName = productKeyInfo[0];
    const productName = productKeyInfo[2];
    if (!ns.corporation.getDivision(divisionName).products.includes(productName)) {
      productMarkupData.delete(productKey);
    }
  }
}
async function getProductMarkup(division, industryData, city, item, office) {
  let productMarkup;
  const productMarkupKey = `${division.name}|${city}|${item.name}`;
  productMarkup = productMarkupData.get(productMarkupKey);
  if (!productMarkup) {
    productMarkup = await calculateProductMarkup(
      division.researchPoints,
      industryData.scienceFactor,
      item,
      office ? {
        operationsProduction: office.employeeProductionByJob.Operations,
        engineerProduction: office.employeeProductionByJob.Engineer,
        businessProduction: office.employeeProductionByJob.Business,
        managementProduction: office.employeeProductionByJob.Management,
        researchAndDevelopmentProduction: office.employeeProductionByJob["Research & Development"]
      } : void 0
    );
    productMarkupData.set(productMarkupKey, productMarkup);
  }
  return productMarkup;
}
async function getOptimalSellingPrice(ns, division, industryData, city, item) {
  const itemIsProduct = isProduct(item);
  if (itemIsProduct && item.developmentProgress < 100) {
    throw new Error(`Product is not finished. Product: ${JSON.stringify(item)}`);
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_RESEARCH_DEMAND)) {
    throw new Error(`You must unlock "Market Research - Demand"`);
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_DATA_COMPETITION)) {
    throw new Error(`You must unlock "Market Data - Competition"`);
  }
  if (ns.corporation.getCorporation().nextState !== "SALE") {
    return "0";
  }
  const expectedSalesVolume = item.stored / 10;
  if (expectedSalesVolume < 1e-5) {
    return "0";
  }
  const office = ns.corporation.getOffice(division.name, city);
  let productMarkup;
  let markupLimit;
  let itemMultiplier;
  let marketPrice;
  if (itemIsProduct) {
    productMarkup = await getProductMarkup(
      division,
      industryData,
      city,
      item,
      office
    );
    markupLimit = Math.max(item.effectiveRating, 1e-3) / productMarkup;
    itemMultiplier = 0.5 * Math.pow(item.effectiveRating, 0.65);
    marketPrice = item.productionCost;
  } else {
    markupLimit = item.quality / ns.corporation.getMaterialData(item.name).baseMarkup;
    itemMultiplier = item.quality + 1e-3;
    marketPrice = item.marketPrice;
  }
  const businessFactor = getBusinessFactor(office.employeeProductionByJob[EmployeePosition.BUSINESS]);
  const advertisingFactor = getAdvertisingFactors(division.awareness, division.popularity, industryData.advertisingFactor)[0];
  const marketFactor = getMarketFactor(item.demand, item.competition);
  const salesMultipliers = itemMultiplier * businessFactor * advertisingFactor * marketFactor * getUpgradeBenefit(UpgradeName.ABC_SALES_BOTS, ns.corporation.getUpgradeLevel(UpgradeName.ABC_SALES_BOTS)) * getResearchSalesMultiplier(getDivisionResearches(ns, division.name));
  const optimalPrice = markupLimit / Math.sqrt(expectedSalesVolume / salesMultipliers) + marketPrice;
  return optimalPrice.toString();
}
async function setOptimalSellingPriceForEverything(ns) {
  if (ns.corporation.getCorporation().nextState !== "SALE") {
    return;
  }
  if (!ns.corporation.hasUnlock(UnlockName.MARKET_RESEARCH_DEMAND) || !ns.corporation.hasUnlock(UnlockName.MARKET_DATA_COMPETITION)) {
    return;
  }
  await loopAllDivisionsAndCitiesAsyncCallback(ns, async (divisionName, city) => {
    const division = ns.corporation.getDivision(divisionName);
    const industryData = ns.corporation.getIndustryData(division.type);
    const products = division.products;
    const hasMarketTA2 = ns.corporation.hasResearched(divisionName, ResearchName.MARKET_TA_2);
    if (industryData.makesProducts) {
      for (const productName of products) {
        const product = ns.corporation.getProduct(divisionName, city, productName);
        if (product.developmentProgress < 100) {
          continue;
        }
        if (hasMarketTA2) {
          ns.corporation.setProductMarketTA2(divisionName, productName, true);
          continue;
        }
        const optimalPrice = await getOptimalSellingPrice(ns, division, industryData, city, product);
        if (parseNumber(optimalPrice) > 0) {
          ns.corporation.sellProduct(divisionName, city, productName, "MAX", optimalPrice, false);
        }
      }
    }
    if (industryData.makesMaterials) {
      for (const materialName of industryData.producedMaterials) {
        const material = ns.corporation.getMaterial(divisionName, city, materialName);
        if (hasMarketTA2) {
          ns.corporation.setMaterialMarketTA2(divisionName, city, materialName, true);
          continue;
        }
        const optimalPrice = await getOptimalSellingPrice(ns, division, industryData, city, material);
        if (parseNumber(optimalPrice) > 0) {
          ns.corporation.sellMaterial(divisionName, city, materialName, "MAX", optimalPrice);
        }
      }
    }
  });
}
function getResearchPointGainRate(ns, divisionName) {
  let totalGainRate = 0;
  for (const city of cities) {
    const office = ns.corporation.getOffice(divisionName, city);
    totalGainRate += 4 * 4e-3 * Math.pow(office.employeeProductionByJob[EmployeePosition.RESEARCH_DEVELOPMENT], 0.5) * getUpgradeBenefit(UpgradeName.PROJECT_INSIGHT, ns.corporation.getUpgradeLevel(UpgradeName.PROJECT_INSIGHT)) * getResearchRPMultiplier(getDivisionResearches(ns, divisionName));
  }
  return totalGainRate;
}
async function buyBoostMaterials(ns, division) {
  const funds = ns.corporation.getCorporation().funds;
  if (funds < 1e10) {
    throw new Error(`Funds is too small to buy boost materials. Funds: ${ns.formatNumber(funds)}.`);
  }
  const industryData = ns.corporation.getIndustryData(division.type);
  let reservedSpaceRatio = 0.2;
  const ratio = 0.1;
  if (industryData.makesProducts) {
    reservedSpaceRatio = 0.1;
  }
  let count = 0;
  while (true) {
    await waitForNextTimeStateHappens(ns, CorpState.EXPORT);
    if (count === 20) {
      const warningMessage = `It takes too many cycles to buy boost materials. Division: ${division.name}.`;
      showWarning(ns, warningMessage);
      break;
    }
    let finish = true;
    const orders = [];
    for (const city of cities) {
      const warehouse = ns.corporation.getWarehouse(division.name, city);
      const availableSpace = warehouse.size - warehouse.sizeUsed;
      if (availableSpace < warehouse.size * reservedSpaceRatio) {
        continue;
      }
      let effectiveRatio = ratio;
      if (availableSpace / warehouse.size < 0.5 && division.type === IndustryType.AGRICULTURE || availableSpace / warehouse.size < 0.75 && (division.type === IndustryType.CHEMICAL || division.type === IndustryType.TOBACCO)) {
        effectiveRatio = 0.2;
      }
      const boostMaterialQuantities = getOptimalBoostMaterialQuantities(industryData, availableSpace * effectiveRatio);
      orders.push({
        city,
        materials: [
          {
            name: MaterialName.AI_CORES,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.AI_CORES).stored + boostMaterialQuantities[0]
          },
          {
            name: MaterialName.HARDWARE,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.HARDWARE).stored + boostMaterialQuantities[1]
          },
          {
            name: MaterialName.REAL_ESTATE,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.REAL_ESTATE).stored + boostMaterialQuantities[2]
          },
          {
            name: MaterialName.ROBOTS,
            count: ns.corporation.getMaterial(division.name, city, MaterialName.ROBOTS).stored + boostMaterialQuantities[3]
          }
        ]
      });
      finish = false;
    }
    if (finish) {
      break;
    }
    await stockMaterials(
      ns,
      division.name,
      orders,
      true
    );
    ++count;
  }
}
function getProductMarketPrice(ns, division, industryData, city) {
  let productMarketPrice = 0;
  for (const [materialName, materialCoefficient] of getRecordEntries(industryData.requiredMaterials)) {
    const materialMarketPrice = ns.corporation.getMaterial(division.name, city, materialName).marketPrice;
    productMarketPrice += materialMarketPrice * materialCoefficient;
  }
  return productMarketPrice * productMarketPriceMultiplier;
}
function createDummyDivisions(ns, numberOfDivisions) {
  const divisions = ns.corporation.getCorporation().divisions;
  for (let i = 0; i < numberOfDivisions; i++) {
    const dummyDivisionName = dummyDivisionNamePrefix + i.toString().padStart(2, "0");
    if (divisions.includes(dummyDivisionName)) {
      continue;
    }
    ns.corporation.expandIndustry(IndustryType.RESTAURANT, dummyDivisionName);
    const division = ns.corporation.getDivision(dummyDivisionName);
    for (const city of cities) {
      if (!division.cities.includes(city)) {
        ns.corporation.expandCity(dummyDivisionName, city);
      }
      if (!ns.corporation.hasWarehouse(dummyDivisionName, city)) {
        ns.corporation.purchaseWarehouse(dummyDivisionName, city);
      }
    }
  }
}
async function waitForOffer(ns, numberOfInitCycles, maxAdditionalCycles, expectedOffer) {
  await waitForNumberOfCycles(ns, numberOfInitCycles);
  let offer = ns.corporation.getInvestmentOffer().funds;
  for (let i = 0; i < maxAdditionalCycles; i++) {
    await waitForNumberOfCycles(ns, 1);
    console.log(`Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}`);
    if (ns.corporation.getInvestmentOffer().funds < offer * 1.001) {
      break;
    }
    offer = ns.corporation.getInvestmentOffer().funds;
  }
  if (ns.corporation.getInvestmentOffer().funds < expectedOffer) {
    ns.alert(
      `Offer is lower than expected value. Offer: ${ns.formatNumber(ns.corporation.getInvestmentOffer().funds)}. Expected value: ${ns.formatNumber(expectedOffer)}.`
    );
  }
}
export {
  DivisionName,
  Logger,
  assignJobs,
  boostMaterials,
  buyAdvert,
  buyBoostMaterials,
  buyOptimalAmountOfInputMaterials,
  buyTeaAndThrowParty,
  buyTeaAndThrowPartyForAllDivisions,
  buyUnlock,
  buyUpgrade,
  calculateProductMarkup,
  cities,
  clearPurchaseOrders,
  createDivision,
  createDummyDivisions,
  developNewProduct,
  dummyDivisionNamePrefix,
  exportString,
  findOptimalAmountOfBoostMaterials,
  generateMaterialsOrders,
  generateNextProductName,
  generateOfficeSetups,
  generateOfficeSetupsForEarlyRounds,
  getCorporationUpgradeLevels,
  getDivisionResearches,
  getExportRoutes,
  getLimitedRawProduction,
  getNewestProductName,
  getOptimalBoostMaterialQuantities,
  getOptimalSellingPrice,
  getProductIdArray,
  getProductMarketPrice,
  getProductMarkup,
  getProfit,
  getRawProduction,
  getResearchPointGainRate,
  hasDivision,
  isProduct,
  loopAllDivisionsAndCities,
  loopAllDivisionsAndCitiesAsyncCallback,
  materials,
  researchPrioritiesForProductDivision,
  researchPrioritiesForSupportDivision,
  sampleProductName,
  setOptimalSellingPriceForEverything,
  setSmartSupplyData,
  showWarning,
  stockMaterials,
  upgradeOffices,
  upgradeWarehouse,
  validateProductMarkupMap,
  waitForNextTimeStateHappens,
  waitForNumberOfCycles,
  waitForOffer,
  waitUntilAfterStateHappens,
  waitUntilHavingEnoughResearchPoints
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uVXRpbHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7XG4gICAgQ29ycEluZHVzdHJ5RGF0YSxcbiAgICBDb3JwSW5kdXN0cnlOYW1lLFxuICAgIENvcnBNYXRlcmlhbE5hbWUsXG4gICAgRGl2aXNpb24sXG4gICAgTWF0ZXJpYWwsXG4gICAgTlMsXG4gICAgT2ZmaWNlLFxuICAgIFByb2R1Y3QsXG4gICAgV2FyZWhvdXNlXG59IGZyb20gXCJAbnNcIjtcbmltcG9ydCB7IGdldFJlY29yZEVudHJpZXMsIGdldFJlY29yZEtleXMsIFBhcnRpYWxSZWNvcmQgfSBmcm9tIFwiL2xpYnMvUmVjb3JkXCI7XG5pbXBvcnQgeyBwYXJzZU51bWJlciB9IGZyb20gXCIvbGlicy91dGlsc1wiO1xuaW1wb3J0IHsgQ2VyZXMgfSBmcm9tIFwiL2xpYnMvQ2VyZXNcIjtcbmltcG9ydCB7XG4gICAgQ2VyZXNTb2x2ZXJSZXN1bHQsXG4gICAgQ2l0eU5hbWUsXG4gICAgQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxuICAgIENvcnBTdGF0ZSxcbiAgICBEaXZpc2lvblJlc2VhcmNoZXMsXG4gICAgRW1wbG95ZWVQb3NpdGlvbixcbiAgICBFeHBvcnRSb3V0ZSxcbiAgICBnZXRBZHZlcnRpc2luZ0ZhY3RvcnMsXG4gICAgZ2V0QnVzaW5lc3NGYWN0b3IsXG4gICAgZ2V0RGl2aXNpb25SYXdQcm9kdWN0aW9uLFxuICAgIGdldE1hcmtldEZhY3RvcixcbiAgICBnZXRSZXNlYXJjaFJQTXVsdGlwbGllcixcbiAgICBnZXRSZXNlYXJjaFNhbGVzTXVsdGlwbGllcixcbiAgICBnZXRVcGdyYWRlQmVuZWZpdCxcbiAgICBJbmR1c3RyeVR5cGUsXG4gICAgTWF0ZXJpYWxOYW1lLFxuICAgIE1hdGVyaWFsT3JkZXIsXG4gICAgT2ZmaWNlU2V0dXAsXG4gICAgT2ZmaWNlU2V0dXBKb2JzLFxuICAgIHByb2R1Y3RNYXJrZXRQcmljZU11bHRpcGxpZXIsXG4gICAgUmVzZWFyY2hOYW1lLFxuICAgIFJlc2VhcmNoUHJpb3JpdHksXG4gICAgVW5sb2NrTmFtZSxcbiAgICBVcGdyYWRlTmFtZVxufSBmcm9tIFwiL2NvcnBvcmF0aW9uRm9ybXVsYXNcIjtcbmltcG9ydCB7IENvcnBNYXRlcmlhbHNEYXRhIH0gZnJvbSBcIi9kYXRhL0NvcnBNYXRlcmlhbHNEYXRhXCI7XG5cbmV4cG9ydCBlbnVtIERpdmlzaW9uTmFtZSB7XG4gICAgQUdSSUNVTFRVUkUgPSBcIkFncmljdWx0dXJlXCIsXG4gICAgQ0hFTUlDQUwgPSBcIkNoZW1pY2FsXCIsXG4gICAgVE9CQUNDTyA9IFwiVG9iYWNjb1wiLFxufVxuXG5leHBvcnQgY29uc3QgY2l0aWVzOiBDaXR5TmFtZVtdID0gW1xuICAgIENpdHlOYW1lLlNlY3RvcjEyLFxuICAgIENpdHlOYW1lLkFldnVtLFxuICAgIENpdHlOYW1lLkNob25ncWluZyxcbiAgICBDaXR5TmFtZS5OZXdUb2t5byxcbiAgICBDaXR5TmFtZS5Jc2hpbWEsXG4gICAgQ2l0eU5hbWUuVm9saGF2ZW5cbl07XG5cbmV4cG9ydCBjb25zdCBtYXRlcmlhbHMgPSBPYmplY3QudmFsdWVzKE1hdGVyaWFsTmFtZSk7XG5cbmV4cG9ydCBjb25zdCBib29zdE1hdGVyaWFscyA9IFtcbiAgICBNYXRlcmlhbE5hbWUuQUlfQ09SRVMsXG4gICAgTWF0ZXJpYWxOYW1lLkhBUkRXQVJFLFxuICAgIE1hdGVyaWFsTmFtZS5SRUFMX0VTVEFURSxcbiAgICBNYXRlcmlhbE5hbWUuUk9CT1RTLFxuXTtcblxuY29uc3QgY29zdE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzUmVzZWFyY2ggPSA1O1xuY29uc3QgY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2ggPSAxMDtcblxuZXhwb3J0IGNvbnN0IHJlc2VhcmNoUHJpb3JpdGllc0ZvclN1cHBvcnREaXZpc2lvbjogUmVzZWFyY2hQcmlvcml0eVtdID0gW1xuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5ISV9URUNIX1JORF9MQUJPUkFUT1JZLCBjb3N0TXVsdGlwbGllcjogMSB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5PVkVSQ0xPQ0ssIGNvc3RNdWx0aXBsaWVyOiBjb3N0TXVsdGlwbGllckZvckVtcGxveWVlU3RhdHNSZXNlYXJjaCB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5TVElNVSwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yRW1wbG95ZWVTdGF0c1Jlc2VhcmNoIH0sXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLkFVVE9fRFJVRywgY29zdE11bHRpcGxpZXI6IDEzLjUgfSxcbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuR09fSlVJQ0UsIGNvc3RNdWx0aXBsaWVyOiBjb3N0TXVsdGlwbGllckZvckVtcGxveWVlU3RhdHNSZXNlYXJjaCB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5DUEg0X0lOSkVDVCwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yRW1wbG95ZWVTdGF0c1Jlc2VhcmNoIH0sXG5cbiAgICB7IHJlc2VhcmNoOiBSZXNlYXJjaE5hbWUuU0VMRl9DT1JSRUNUSU5HX0FTU0VNQkxFUlMsIGNvc3RNdWx0aXBsaWVyOiBjb3N0TXVsdGlwbGllckZvclByb2R1Y3Rpb25SZXNlYXJjaCB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5EUk9ORVMsIGNvc3RNdWx0aXBsaWVyOiA1MCB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5EUk9ORVNfQVNTRU1CTFksIGNvc3RNdWx0aXBsaWVyOiBjb3N0TXVsdGlwbGllckZvclByb2R1Y3Rpb25SZXNlYXJjaCB9LFxuICAgIHsgcmVzZWFyY2g6IFJlc2VhcmNoTmFtZS5EUk9ORVNfVFJBTlNQT1JULCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2ggfSxcbl07XG5cbmV4cG9ydCBjb25zdCByZXNlYXJjaFByaW9yaXRpZXNGb3JQcm9kdWN0RGl2aXNpb246IFJlc2VhcmNoUHJpb3JpdHlbXSA9IFtcbiAgICAuLi5yZXNlYXJjaFByaW9yaXRpZXNGb3JTdXBwb3J0RGl2aXNpb24sXG4gICAgeyByZXNlYXJjaDogUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTSwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yUHJvZHVjdGlvblJlc2VhcmNoIH0sXG4gICAgLy8gRG8gbm90IGJ1eSB0aGVzZSByZXNlYXJjaGVzXG4gICAgLy8ge3Jlc2VhcmNoOiBSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8xLCBjb3N0TXVsdGlwbGllcjogY29zdE11bHRpcGxpZXJGb3JQcm9kdWN0aW9uUmVzZWFyY2h9LFxuICAgIC8vIHtyZXNlYXJjaDogUmVzZWFyY2hOYW1lLlVQR1JBREVfQ0FQQUNJVFlfMiwgY29zdE11bHRpcGxpZXI6IGNvc3RNdWx0aXBsaWVyRm9yUHJvZHVjdGlvblJlc2VhcmNofSxcbl07XG5cbmV4cG9ydCBjb25zdCBleHBvcnRTdHJpbmcgPSBcIihJUFJPRCtJSU5WLzEwKSooLTEpXCI7XG5cbmV4cG9ydCBjb25zdCBkdW1teURpdmlzaW9uTmFtZVByZWZpeCA9IFwiei1cIjtcblxuZXhwb3J0IGNvbnN0IHNhbXBsZVByb2R1Y3ROYW1lID0gXCJTYW1wbGUgcHJvZHVjdFwiO1xuXG4vLyBLZXk6IGRpdmlzaW9uTmFtZXxjaXR5XG5jb25zdCBzbWFydFN1cHBseURhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG4vLyBLZXk6IGRpdmlzaW9uTmFtZXxjaXR5fHByb2R1Y3ROYW1lXG5jb25zdCBwcm9kdWN0TWFya3VwRGF0YTogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cbmNvbnN0IHNldE9mRGl2aXNpb25zV2FpdGluZ0ZvclJQOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICByZWFkb25seSAjZW5hYmxlTG9nZ2luZzogYm9vbGVhbjtcbiAgICBjaXR5PzogQ2l0eU5hbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihlbmFibGVMb2dnaW5nOiBib29sZWFuLCBjaXR5PzogQ2l0eU5hbWUpIHtcbiAgICAgICAgdGhpcy4jZW5hYmxlTG9nZ2luZyA9IGVuYWJsZUxvZ2dpbmc7XG4gICAgICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZyguLi5hcmdzOiB1bmtub3duW10pIHtcbiAgICAgICAgaWYgKCF0aGlzLiNlbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2l0eSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY2l0eSA9PT0gQ2l0eU5hbWUuU2VjdG9yMTIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4oLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgIGlmICghdGhpcy4jZW5hYmxlTG9nZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNpdHkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNpdHkgPT09IENpdHlOYW1lLlNlY3RvcjEyKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IoLi4uYXJnczogdW5rbm93bltdKSB7XG4gICAgICAgIGlmICghdGhpcy4jZW5hYmxlTG9nZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNpdHkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNpdHkgPT09IENpdHlOYW1lLlNlY3RvcjEyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRpbWUobGFiZWw6IHN0cmluZykge1xuICAgICAgICBpZiAoIXRoaXMuI2VuYWJsZUxvZ2dpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaXR5ID09PSB1bmRlZmluZWQgfHwgdGhpcy5jaXR5ID09PSBDaXR5TmFtZS5TZWN0b3IxMikge1xuICAgICAgICAgICAgY29uc29sZS50aW1lKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0aW1lRW5kKGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNlbmFibGVMb2dnaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2l0eSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuY2l0eSA9PT0gQ2l0eU5hbWUuU2VjdG9yMTIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZChsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdGltZUxvZyhsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy4jZW5hYmxlTG9nZ2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNpdHkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmNpdHkgPT09IENpdHlOYW1lLlNlY3RvcjEyKSB7XG4gICAgICAgICAgICBjb25zb2xlLnRpbWVMb2cobGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1dhcm5pbmcobnM6IE5TLCB3YXJuaW5nTWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICBucy5wcmludCh3YXJuaW5nTWVzc2FnZSk7XG4gICAgbnMudG9hc3Qod2FybmluZ01lc3NhZ2UsIFwid2FybmluZ1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXMobnM6IE5TLCBjYWxsYmFjazogKGRpdmlzaW9uTmFtZTogc3RyaW5nLCBjaXR5OiBDaXR5TmFtZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZGl2aXNpb24gb2YgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5kaXZpc2lvbnMpIHtcbiAgICAgICAgaWYgKGRpdmlzaW9uLnN0YXJ0c1dpdGgoZHVtbXlEaXZpc2lvbk5hbWVQcmVmaXgpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhkaXZpc2lvbiwgY2l0eSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb29wQWxsRGl2aXNpb25zQW5kQ2l0aWVzQXN5bmNDYWxsYmFjayhcbiAgICBuczogTlMsXG4gICAgY2FsbGJhY2s6IChkaXZpc2lvbk5hbWU6IHN0cmluZywgY2l0eTogQ2l0eU5hbWUpID0+IFByb21pc2U8dm9pZD5cbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGZvciAoY29uc3QgZGl2aXNpb24gb2YgbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5kaXZpc2lvbnMpIHtcbiAgICAgICAgaWYgKGRpdmlzaW9uLnN0YXJ0c1dpdGgoZHVtbXlEaXZpc2lvbk5hbWVQcmVmaXgpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgICAgICBhd2FpdCBjYWxsYmFjayhkaXZpc2lvbiwgY2l0eSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0VW50aWxBZnRlclN0YXRlSGFwcGVucyhuczogTlMsIHN0YXRlOiBDb3JwU3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5wcmV2U3RhdGUgPT09IHN0YXRlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBucy5jb3Jwb3JhdGlvbi5uZXh0VXBkYXRlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvck5leHRUaW1lU3RhdGVIYXBwZW5zKG5zOiBOUywgc3RhdGU6IENvcnBTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkucHJldlN0YXRlID09PSBzdGF0ZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB3YWl0Rm9yTnVtYmVyT2ZDeWNsZXMobnM6IE5TLCBudW1iZXJPZkN5Y2xlczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY3VycmVudFN0YXRlID0gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5wcmV2U3RhdGU7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICB3aGlsZSAoY291bnQgPCBudW1iZXJPZkN5Y2xlcykge1xuICAgICAgICBhd2FpdCB3YWl0Rm9yTmV4dFRpbWVTdGF0ZUhhcHBlbnMobnMsIGN1cnJlbnRTdGF0ZSBhcyBDb3JwU3RhdGUpO1xuICAgICAgICArK2NvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpdChuczogTlMpIHtcbiAgICBjb25zdCBjb3Jwb3JhdGlvbiA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCk7XG4gICAgcmV0dXJuIGNvcnBvcmF0aW9uLnJldmVudWUgLSBjb3Jwb3JhdGlvbi5leHBlbnNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0RpdmlzaW9uKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5kaXZpc2lvbnMuaW5jbHVkZXMoZGl2aXNpb25OYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1eVVwZ3JhZGUobnM6IE5TLCB1cGdyYWRlOiBVcGdyYWRlTmFtZSwgdGFyZ2V0TGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwodXBncmFkZSk7IGkgPCB0YXJnZXRMZXZlbDsgaSsrKSB7XG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmxldmVsVXBncmFkZSh1cGdyYWRlKTtcbiAgICB9XG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbCh1cGdyYWRlKSA8IHRhcmdldExldmVsKSB7XG4gICAgICAgIG5zLnByaW50KGBFUlJPUjogQ2Fubm90IGJ1eSBlbm91Z2ggdXBncmFkZSBsZXZlbGApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1eUFkdmVydChuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nLCB0YXJnZXRMZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IG5zLmNvcnBvcmF0aW9uLmdldEhpcmVBZFZlcnRDb3VudChkaXZpc2lvbk5hbWUpOyBpIDwgdGFyZ2V0TGV2ZWw7IGkrKykge1xuICAgICAgICBucy5jb3Jwb3JhdGlvbi5oaXJlQWRWZXJ0KGRpdmlzaW9uTmFtZSk7XG4gICAgfVxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRIaXJlQWRWZXJ0Q291bnQoZGl2aXNpb25OYW1lKSA8IHRhcmdldExldmVsKSB7XG4gICAgICAgIG5zLnByaW50KGBFUlJPUjogQ2Fubm90IGJ1eSBlbm91Z2ggQWR2ZXJ0IGxldmVsYCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV5VW5sb2NrKG5zOiBOUywgdW5sb2NrTmFtZTogVW5sb2NrTmFtZSk6IHZvaWQge1xuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNVbmxvY2sodW5sb2NrTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBucy5jb3Jwb3JhdGlvbi5wdXJjaGFzZVVubG9jayh1bmxvY2tOYW1lKTtcbn1cblxuLyoqXG4gKiBXYXJlaG91c2Ugc3RhcnRzIGF0IGxldmVsIDFcbiAqXG4gKiBAcGFyYW0gbnNcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcbiAqIEBwYXJhbSBjaXR5XG4gKiBAcGFyYW0gdGFyZ2V0TGV2ZWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVXYXJlaG91c2UobnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZywgY2l0eTogQ2l0eU5hbWUsIHRhcmdldExldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBhbW91bnQgPSB0YXJnZXRMZXZlbCAtIG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHkpLmxldmVsO1xuICAgIGlmIChhbW91bnQgPCAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbnMuY29ycG9yYXRpb24udXBncmFkZVdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHksIGFtb3VudCk7XG59XG5cbi8qKlxuICogQnV5aW5nIHRlYS90aHJvd2luZyBwYXJ0eSBmb3IgZWFjaCBvZmZpY2VcbiAqXG4gKiBAcGFyYW0gbnNcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGJ1eVRlYUFuZFRocm93UGFydHkobnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGVwc2lsb24gPSAwLjU7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICAgICAgaWYgKG9mZmljZS5hdmdFbmVyZ3kgPCBvZmZpY2UubWF4RW5lcmd5IC0gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eVRlYShkaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9mZmljZS5hdmdNb3JhbGUgPCBvZmZpY2UubWF4TW9yYWxlIC0gZXBzaWxvbikge1xuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnRocm93UGFydHkoZGl2aXNpb25OYW1lLCBjaXR5LCA1MDAwMDApO1xuICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5pc2gpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IG5zLmNvcnBvcmF0aW9uLm5leHRVcGRhdGUoKTtcbiAgICB9XG59XG5cbi8qKlxuICogQnV5aW5nIHRlYS90aHJvd2luZyBwYXJ0eSBvbmNlIGZvciBlYWNoIG9mZmljZSBpbiBhbGwgZGl2aXNpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidXlUZWFBbmRUaHJvd1BhcnR5Rm9yQWxsRGl2aXNpb25zKG5zOiBOUyk6IHZvaWQge1xuICAgIC8vIElmIHdlIGFyZSBpbiByb3VuZCAzKywgd2UgYnV5IHRlYSBhbmQgdGhyb3cgcGFydHkgZXZlcnkgY3ljbGUgdG8gbWFpbnRhaW4gbWF4IGVuZXJneS9tb3JhbGVcbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkucm91bmQgPj0gMyB8fCBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLnB1YmxpYykge1xuICAgICAgICBsb29wQWxsRGl2aXNpb25zQW5kQ2l0aWVzKG5zLCAoZGl2aXNpb25OYW1lOiBzdHJpbmcsIGNpdHk6IENpdHlOYW1lKSA9PiB7XG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlUZWEoZGl2aXNpb25OYW1lLCBjaXR5KTtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnRocm93UGFydHkoZGl2aXNpb25OYW1lLCBjaXR5LCA1MDAwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlcHNpbG9uID0gMC41O1xuICAgIGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXMobnMsIChkaXZpc2lvbk5hbWU6IHN0cmluZywgY2l0eTogQ2l0eU5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgb2ZmaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0T2ZmaWNlKGRpdmlzaW9uTmFtZSwgY2l0eSk7XG4gICAgICAgIGlmIChvZmZpY2UuYXZnRW5lcmd5IDwgb2ZmaWNlLm1heEVuZXJneSAtIGVwc2lsb24pIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eVRlYShkaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZpY2UuYXZnTW9yYWxlIDwgb2ZmaWNlLm1heE1vcmFsZSAtIGVwc2lsb24pIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnRocm93UGFydHkoZGl2aXNpb25OYW1lLCBjaXR5LCA1MDAwMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9mZmljZVNldHVwc0ZvckVhcmx5Um91bmRzKHNpemU6IG51bWJlciwgaW5jcmVhc2VCdXNpbmVzcyA9IGZhbHNlKTogT2ZmaWNlU2V0dXBbXSB7XG4gICAgbGV0IG9mZmljZVNldHVwO1xuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBvZmZpY2VTZXR1cCA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBvZmZpY2VTZXR1cCA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBvZmZpY2VTZXR1cCA9IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDIgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMSB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwID0gW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uQlVTSU5FU1MsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TLCBjb3VudDogMiB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlQsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwID0gW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uQlVTSU5FU1MsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMiB9LFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TLCBjb3VudDogMyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlQsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICBpZiAoaW5jcmVhc2VCdXNpbmVzcykge1xuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwID0gW1xuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uQlVTSU5FU1MsIGNvdW50OiAyIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMiB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uT1BFUkFUSU9OUywgY291bnQ6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8geyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uQlVTSU5FU1MsIGNvdW50OiAzIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5NQU5BR0VNRU5ULCBjb3VudDogMiB9LFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2ZmaWNlU2V0dXAgPSBbXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TLCBjb3VudDogMyB9LFxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IEVtcGxveWVlUG9zaXRpb24uRU5HSU5FRVIsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlQsIGNvdW50OiAzIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIG9mZmljZSBzaXplOiAke3NpemV9YCk7XG4gICAgfVxuICAgIHJldHVybiBnZW5lcmF0ZU9mZmljZVNldHVwcyhcbiAgICAgICAgY2l0aWVzLFxuICAgICAgICBzaXplLFxuICAgICAgICBvZmZpY2VTZXR1cFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU9mZmljZVNldHVwcyhjaXRpZXM6IENpdHlOYW1lW10sIHNpemU6IG51bWJlciwgam9iczoge1xuICAgIG5hbWU6IEVtcGxveWVlUG9zaXRpb247XG4gICAgY291bnQ6IG51bWJlcjtcbn1bXSk6IE9mZmljZVNldHVwW10ge1xuICAgIGNvbnN0IG9mZmljZVNldHVwSm9iczogT2ZmaWNlU2V0dXBKb2JzID0ge1xuICAgICAgICBPcGVyYXRpb25zOiAwLFxuICAgICAgICBFbmdpbmVlcjogMCxcbiAgICAgICAgQnVzaW5lc3M6IDAsXG4gICAgICAgIE1hbmFnZW1lbnQ6IDAsXG4gICAgICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiAwLFxuICAgICAgICBJbnRlcm46IDAsXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGpvYiBvZiBqb2JzKSB7XG4gICAgICAgIHN3aXRjaCAoam9iLm5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TOlxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9icy5PcGVyYXRpb25zID0gam9iLmNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFbXBsb3llZVBvc2l0aW9uLkVOR0lORUVSOlxuICAgICAgICAgICAgICAgIG9mZmljZVNldHVwSm9icy5FbmdpbmVlciA9IGpvYi5jb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTUzpcbiAgICAgICAgICAgICAgICBvZmZpY2VTZXR1cEpvYnMuQnVzaW5lc3MgPSBqb2IuY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEVtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVDpcbiAgICAgICAgICAgICAgICBvZmZpY2VTZXR1cEpvYnMuTWFuYWdlbWVudCA9IGpvYi5jb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVDpcbiAgICAgICAgICAgICAgICBvZmZpY2VTZXR1cEpvYnNbXCJSZXNlYXJjaCAmIERldmVsb3BtZW50XCJdID0gam9iLmNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFbXBsb3llZVBvc2l0aW9uLklOVEVSTjpcbiAgICAgICAgICAgICAgICBvZmZpY2VTZXR1cEpvYnMuSW50ZXJuID0gam9iLmNvdW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgam9iOiAke2pvYi5uYW1lfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgb2ZmaWNlU2V0dXBzLnB1c2goe1xuICAgICAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICBqb2JzOiBvZmZpY2VTZXR1cEpvYnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvZmZpY2VTZXR1cHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25Kb2JzKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgb2ZmaWNlU2V0dXAgb2Ygb2ZmaWNlU2V0dXBzKSB7XG4gICAgICAgIC8vIFJlc2V0IGFsbCBqb2JzXG4gICAgICAgIGZvciAoY29uc3Qgam9iTmFtZSBvZiBPYmplY3QudmFsdWVzKEVtcGxveWVlUG9zaXRpb24pKSB7XG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZXRBdXRvSm9iQXNzaWdubWVudChkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwLmNpdHksIGpvYk5hbWUsIDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFzc2lnbiBqb2JzXG4gICAgICAgIGZvciAoY29uc3QgW2pvYk5hbWUsIGNvdW50XSBvZiBPYmplY3QuZW50cmllcyhvZmZpY2VTZXR1cC5qb2JzKSkge1xuICAgICAgICAgICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5zZXRBdXRvSm9iQXNzaWdubWVudChkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwLmNpdHksIGpvYk5hbWUsIGNvdW50KSkge1xuICAgICAgICAgICAgICAgIG5zLnByaW50KGBDYW5ub3QgYXNzaWduIGpvYiBwcm9wZXJseS4gQ2l0eTogJHtvZmZpY2VTZXR1cC5jaXR5fSwgam9iOiAke2pvYk5hbWV9LCBjb3VudDogJHtjb3VudH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVPZmZpY2VzKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIG9mZmljZVNldHVwczogT2ZmaWNlU2V0dXBbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgb2ZmaWNlU2V0dXAgb2Ygb2ZmaWNlU2V0dXBzKSB7XG4gICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwLmNpdHkpO1xuICAgICAgICBpZiAob2ZmaWNlU2V0dXAuc2l6ZSA8IG9mZmljZS5zaXplKSB7XG4gICAgICAgICAgICBucy5wcmludChgT2ZmaWNlJ3MgbmV3IHNpemUgaXMgc21hbGxlciB0aGFuIGN1cnJlbnQgc2l6ZS4gQ2l0eTogJHtvZmZpY2VTZXR1cC5jaXR5fWApO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZmljZVNldHVwLnNpemUgPiBvZmZpY2Uuc2l6ZSkge1xuICAgICAgICAgICAgLy8gVXBncmFkZSBvZmZpY2VcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnVwZ3JhZGVPZmZpY2VTaXplKGRpdmlzaW9uTmFtZSwgb2ZmaWNlU2V0dXAuY2l0eSwgb2ZmaWNlU2V0dXAuc2l6ZSAtIG9mZmljZS5zaXplKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIaXJlIGVtcGxveWVlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgICAgd2hpbGUgKG5zLmNvcnBvcmF0aW9uLmhpcmVFbXBsb3llZShkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwLmNpdHksIEVtcGxveWVlUG9zaXRpb24uUkVTRUFSQ0hfREVWRUxPUE1FTlQpKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQXNzaWduIGpvYnNcbiAgICBhc3NpZ25Kb2JzKG5zLCBkaXZpc2lvbk5hbWUsIG9mZmljZVNldHVwcyk7XG4gICAgbnMucHJpbnQoYFVwZ3JhZGUgb2ZmaWNlcyBjb21wbGV0ZWRgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUHVyY2hhc2VPcmRlcnMobnM6IE5TLCBjbGVhcklucHV0TWF0ZXJpYWxPcmRlcnM6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZSwgY2l0eSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsTmFtZSBvZiBib29zdE1hdGVyaWFscykge1xuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIDApO1xuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lLCBcIjBcIiwgXCJNUFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xlYXJJbnB1dE1hdGVyaWFsT3JkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBpbmR1c3RyaWFsRGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShkaXZpc2lvbi50eXBlKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbWF0ZXJpYWxOYW1lIG9mIGdldFJlY29yZEtleXMoaW5kdXN0cmlhbERhdGEucmVxdWlyZWRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIDApO1xuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgXCIwXCIsIFwiTVBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWF0ZXJpYWxzT3JkZXJzKFxuICAgIGNpdGllczogQ2l0eU5hbWVbXSxcbiAgICBtYXRlcmlhbHM6IHtcbiAgICAgICAgbmFtZTogTWF0ZXJpYWxOYW1lO1xuICAgICAgICBjb3VudDogbnVtYmVyO1xuICAgIH1bXVxuKTogTWF0ZXJpYWxPcmRlcltdIHtcbiAgICBjb25zdCBvcmRlcnM6IE1hdGVyaWFsT3JkZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgb3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgICAgIG1hdGVyaWFsczogbWF0ZXJpYWxzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3JkZXJzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3RvY2tNYXRlcmlhbHMoXG4gICAgbnM6IE5TLFxuICAgIGRpdmlzaW9uTmFtZTogc3RyaW5nLFxuICAgIG9yZGVyczogTWF0ZXJpYWxPcmRlcltdLFxuICAgIGJ1bGtQdXJjaGFzZSA9IGZhbHNlLFxuICAgIGRpc2NhcmRFeGNlZWRlZCA9IGZhbHNlXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGlmIChjb3VudCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgSXQgdGFrZXMgdG9vIG1hbnkgY3ljbGVzIHRvIHN0b2NrIHVwIG9uIG1hdGVyaWFscy4gRGl2aXNpb246ICR7ZGl2aXNpb25OYW1lfSwgYFxuICAgICAgICAgICAgICAgICsgYG9yZGVyczogJHtKU09OLnN0cmluZ2lmeShvcmRlcnMpfWA7XG4gICAgICAgICAgICBzaG93V2FybmluZyhucywgd2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsIG9mIG9yZGVyLm1hdGVyaWFscykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlZEFtb3VudCA9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSkuc3RvcmVkO1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZWRBbW91bnQgPT09IG1hdGVyaWFsLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eU1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIG9yZGVyLmNpdHksIG1hdGVyaWFsLm5hbWUsIFwiMFwiLCBcIk1QXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQnV5XG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlZEFtb3VudCA8IG1hdGVyaWFsLmNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChidWxrUHVyY2hhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1bGtQdXJjaGFzZShkaXZpc2lvbk5hbWUsIG9yZGVyLmNpdHksIG1hdGVyaWFsLm5hbWUsIG1hdGVyaWFsLmNvdW50IC0gc3RvcmVkQW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eU1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgKG1hdGVyaWFsLmNvdW50IC0gc3RvcmVkQW1vdW50KSAvIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIG9yZGVyLmNpdHksIG1hdGVyaWFsLm5hbWUsIFwiMFwiLCBcIk1QXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEaXNjYXJkXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlzY2FyZEV4Y2VlZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmJ1eU1hdGVyaWFsKGRpdmlzaW9uTmFtZSwgb3JkZXIuY2l0eSwgbWF0ZXJpYWwubmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIG9yZGVyLmNpdHksIG1hdGVyaWFsLm5hbWUsICgoc3RvcmVkQW1vdW50IC0gbWF0ZXJpYWwuY291bnQpIC8gMTApLnRvU3RyaW5nKCksIFwiMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5pc2gpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHdhaXRGb3JOZXh0VGltZVN0YXRlSGFwcGVucyhucywgQ29ycFN0YXRlLlBVUkNIQVNFKTtcbiAgICAgICAgKytjb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMobnM6IE5TKTogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzIHtcbiAgICBjb25zdCBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM6IENvcnBvcmF0aW9uVXBncmFkZUxldmVscyA9IHtcbiAgICAgICAgW1VwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFU106IDAsXG4gICAgICAgIFtVcGdyYWRlTmFtZS5TTUFSVF9TVE9SQUdFXTogMCxcbiAgICAgICAgW1VwZ3JhZGVOYW1lLkRSRUFNX1NFTlNFXTogMCxcbiAgICAgICAgW1VwZ3JhZGVOYW1lLldJTFNPTl9BTkFMWVRJQ1NdOiAwLFxuICAgICAgICBbVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UU106IDAsXG4gICAgICAgIFtVcGdyYWRlTmFtZS5TUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTXTogMCxcbiAgICAgICAgW1VwZ3JhZGVOYW1lLk5FVVJBTF9BQ0NFTEVSQVRPUlNdOiAwLFxuICAgICAgICBbVXBncmFkZU5hbWUuRk9DVVNfV0lSRVNdOiAwLFxuICAgICAgICBbVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFNdOiAwLFxuICAgICAgICBbVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hUXTogMFxuICAgIH07XG4gICAgZm9yIChjb25zdCB1cGdyYWRlTmFtZSBvZiBPYmplY3QudmFsdWVzKFVwZ3JhZGVOYW1lKSkge1xuICAgICAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbdXBncmFkZU5hbWVdID0gbnMuY29ycG9yYXRpb24uZ2V0VXBncmFkZUxldmVsKHVwZ3JhZGVOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvcnBvcmF0aW9uVXBncmFkZUxldmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uUmVzZWFyY2hlcyhuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogRGl2aXNpb25SZXNlYXJjaGVzIHtcbiAgICBjb25zdCBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyA9IHtcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5ISV9URUNIX1JORF9MQUJPUkFUT1JZXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuQVVUT19CUkVXXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuQVVUT19QQVJUWV06IGZhbHNlLFxuICAgICAgICBbUmVzZWFyY2hOYW1lLkFVVE9fRFJVR106IGZhbHNlLFxuICAgICAgICBbUmVzZWFyY2hOYW1lLkNQSDRfSU5KRUNUXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuRFJPTkVTXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuRFJPTkVTX0FTU0VNQkxZXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuRFJPTkVTX1RSQU5TUE9SVF06IGZhbHNlLFxuICAgICAgICBbUmVzZWFyY2hOYW1lLkdPX0pVSUNFXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuSFJfQlVERFlfUkVDUlVJVE1FTlRdOiBmYWxzZSxcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5IUl9CVUREWV9UUkFJTklOR106IGZhbHNlLFxuICAgICAgICBbUmVzZWFyY2hOYW1lLk1BUktFVF9UQV8xXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuTUFSS0VUX1RBXzJdOiBmYWxzZSxcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5PVkVSQ0xPQ0tdOiBmYWxzZSxcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5TRUxGX0NPUlJFQ1RJTkdfQVNTRU1CTEVSU106IGZhbHNlLFxuICAgICAgICBbUmVzZWFyY2hOYW1lLlNUSU1VXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8xXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8yXTogZmFsc2UsXG4gICAgICAgIFtSZXNlYXJjaE5hbWUuVVBHUkFERV9EQVNIQk9BUkRdOiBmYWxzZSxcbiAgICAgICAgW1Jlc2VhcmNoTmFtZS5VUEdSQURFX0ZVTENSVU1dOiBmYWxzZVxuICAgIH07XG4gICAgZm9yIChjb25zdCByZXNlYXJjaE5hbWUgb2YgT2JqZWN0LnZhbHVlcyhSZXNlYXJjaE5hbWUpKSB7XG4gICAgICAgIGRpdmlzaW9uUmVzZWFyY2hlc1tyZXNlYXJjaE5hbWVdID0gbnMuY29ycG9yYXRpb24uaGFzUmVzZWFyY2hlZChkaXZpc2lvbk5hbWUsIHJlc2VhcmNoTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXZpc2lvblJlc2VhcmNoZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVEaXZpc2lvbihuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nLCBvZmZpY2VTaXplOiBudW1iZXIsIHdhcmVob3VzZUxldmVsOiBudW1iZXIpOiBQcm9taXNlPERpdmlzaW9uPiB7XG4gICAgLy8gQ3JlYXRlIGRpdmlzaW9uIGlmIG5vdCBleGlzdHNcbiAgICBpZiAoIWhhc0RpdmlzaW9uKG5zLCBkaXZpc2lvbk5hbWUpKSB7XG4gICAgICAgIGxldCBpbmR1c3RyeVR5cGU7XG4gICAgICAgIHN3aXRjaCAoZGl2aXNpb25OYW1lKSB7XG4gICAgICAgICAgICBjYXNlIERpdmlzaW9uTmFtZS5BR1JJQ1VMVFVSRTpcbiAgICAgICAgICAgICAgICBpbmR1c3RyeVR5cGUgPSBJbmR1c3RyeVR5cGUuQUdSSUNVTFRVUkU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpdmlzaW9uTmFtZS5DSEVNSUNBTDpcbiAgICAgICAgICAgICAgICBpbmR1c3RyeVR5cGUgPSBJbmR1c3RyeVR5cGUuQ0hFTUlDQUw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERpdmlzaW9uTmFtZS5UT0JBQ0NPOlxuICAgICAgICAgICAgICAgIGluZHVzdHJ5VHlwZSA9IEluZHVzdHJ5VHlwZS5UT0JBQ0NPO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGl2aXNpb24gbmFtZTogJHtkaXZpc2lvbk5hbWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgbnMuY29ycG9yYXRpb24uZXhwYW5kSW5kdXN0cnkoaW5kdXN0cnlUeXBlLCBkaXZpc2lvbk5hbWUpO1xuICAgIH1cbiAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XG4gICAgbnMucHJpbnQoYEluaXRpYWxpemluZyBkaXZpc2lvbjogJHtkaXZpc2lvbk5hbWV9YCk7XG5cbiAgICAvLyBFeHBhbmQgdG8gYWxsIGNpdGllc1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgaWYgKCFkaXZpc2lvbi5jaXRpZXMuaW5jbHVkZXMoY2l0eSkpIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cGFuZENpdHkoZGl2aXNpb25OYW1lLCBjaXR5KTtcbiAgICAgICAgICAgIG5zLnByaW50KGBFeHBhbmQgJHtkaXZpc2lvbk5hbWV9IHRvICR7Y2l0eX1gKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCdXkgd2FyZWhvdXNlXG4gICAgICAgIGlmICghbnMuY29ycG9yYXRpb24uaGFzV2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSkpIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnB1cmNoYXNlV2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2V0IHVwIGFsbCBjaXRpZXNcbiAgICB1cGdyYWRlT2ZmaWNlcyhcbiAgICAgICAgbnMsXG4gICAgICAgIGRpdmlzaW9uTmFtZSxcbiAgICAgICAgZ2VuZXJhdGVPZmZpY2VTZXR1cHMoXG4gICAgICAgICAgICBjaXRpZXMsXG4gICAgICAgICAgICBvZmZpY2VTaXplLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVCxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IG9mZmljZVNpemVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIClcbiAgICApO1xuICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgdXBncmFkZVdhcmVob3VzZShucywgZGl2aXNpb25OYW1lLCBjaXR5LCB3YXJlaG91c2VMZXZlbCk7XG4gICAgICAgIC8vIEVuYWJsZSBTbWFydCBTdXBwbHlcbiAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmhhc1VubG9jayhVbmxvY2tOYW1lLlNNQVJUX1NVUFBMWSkpIHtcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNldFNtYXJ0U3VwcGx5KGRpdmlzaW9uTmFtZSwgY2l0eSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpbWFsQm9vc3RNYXRlcmlhbFF1YW50aXRpZXMoXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxuICAgIHNwYWNlQ29uc3RyYWludDogbnVtYmVyLFxuICAgIHJvdW5kOiBib29sZWFuID0gdHJ1ZVxuKTogbnVtYmVyW10ge1xuICAgIGNvbnN0IHsgYWlDb3JlRmFjdG9yLCBoYXJkd2FyZUZhY3RvciwgcmVhbEVzdGF0ZUZhY3Rvciwgcm9ib3RGYWN0b3IgfSA9IGluZHVzdHJ5RGF0YTtcbiAgICBjb25zdCBib29zdE1hdGVyaWFsQ29lZmZpY2llbnRzID0gW2FpQ29yZUZhY3RvciEsIGhhcmR3YXJlRmFjdG9yISwgcmVhbEVzdGF0ZUZhY3RvciEsIHJvYm90RmFjdG9yIV07XG4gICAgY29uc3QgYm9vc3RNYXRlcmlhbFNpemVzID0gYm9vc3RNYXRlcmlhbHMubWFwKG1hdCA9PiBDb3JwTWF0ZXJpYWxzRGF0YVttYXRdLnNpemUpO1xuXG4gICAgY29uc3QgY2FsY3VsYXRlT3B0aW1hbFF1YW50aXRpZXMgPSAoXG4gICAgICAgIG1hdENvZWZmaWNpZW50czogbnVtYmVyW10sXG4gICAgICAgIG1hdFNpemVzOiBudW1iZXJbXVxuICAgICk6IG51bWJlcltdID0+IHtcbiAgICAgICAgY29uc3Qgc3VtT2ZDb2VmZmljaWVudHMgPSBtYXRDb2VmZmljaWVudHMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgICAgIGNvbnN0IHN1bU9mU2l6ZXMgPSBtYXRTaXplcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0U2l6ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBtYXRDb3VudCA9XG4gICAgICAgICAgICAgICAgKHNwYWNlQ29uc3RyYWludCAtIDUwMCAqICgobWF0U2l6ZXNbaV0gLyBtYXRDb2VmZmljaWVudHNbaV0pICogKHN1bU9mQ29lZmZpY2llbnRzIC0gbWF0Q29lZmZpY2llbnRzW2ldKSAtIChzdW1PZlNpemVzIC0gbWF0U2l6ZXNbaV0pKSlcbiAgICAgICAgICAgICAgICAvIChzdW1PZkNvZWZmaWNpZW50cyAvIG1hdENvZWZmaWNpZW50c1tpXSlcbiAgICAgICAgICAgICAgICAvIG1hdFNpemVzW2ldO1xuICAgICAgICAgICAgaWYgKG1hdENvZWZmaWNpZW50c1tpXSA8PSAwIHx8IG1hdENvdW50IDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxjdWxhdGVPcHRpbWFsUXVhbnRpdGllcyhcbiAgICAgICAgICAgICAgICAgICAgbWF0Q29lZmZpY2llbnRzLnRvU3BsaWNlZChpLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgbWF0U2l6ZXMudG9TcGxpY2VkKGksIDEpXG4gICAgICAgICAgICAgICAgKS50b1NwbGljZWQoaSwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRDb3VudCA9IE1hdGgucm91bmQobWF0Q291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChtYXRDb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHJldHVybiBjYWxjdWxhdGVPcHRpbWFsUXVhbnRpdGllcyhib29zdE1hdGVyaWFsQ29lZmZpY2llbnRzLCBib29zdE1hdGVyaWFsU2l6ZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXhwb3J0Um91dGVzKG5zOiBOUyk6IEV4cG9ydFJvdXRlW10ge1xuICAgIGNvbnN0IGV4cG9ydFJvdXRlczogRXhwb3J0Um91dGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgbWF0ZXJpYWwgb2YgbWF0ZXJpYWxzKSB7XG4gICAgICAgIGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXMobnMsIChkaXZpc2lvbk5hbWUsIHNvdXJjZUNpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cG9ydHMgPSBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbk5hbWUsIHNvdXJjZUNpdHksIG1hdGVyaWFsKS5leHBvcnRzO1xuICAgICAgICAgICAgaWYgKGV4cG9ydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBleHBvcnRSb3V0ZSBvZiBleHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0Um91dGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUNpdHk6IHNvdXJjZUNpdHksXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZURpdmlzaW9uOiBkaXZpc2lvbk5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uRGl2aXNpb246IGV4cG9ydFJvdXRlLmRpdmlzaW9uLFxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbkNpdHk6IGV4cG9ydFJvdXRlLmNpdHksXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uQW1vdW50OiBleHBvcnRSb3V0ZS5hbW91bnQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXhwb3J0Um91dGVzO1xufVxuXG5mdW5jdGlvbiBidWlsZFNtYXJ0U3VwcGx5S2V5KGRpdmlzaW9uTmFtZTogc3RyaW5nLCBjaXR5OiBDaXR5TmFtZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke2RpdmlzaW9uTmFtZX18JHtjaXR5fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXdQcm9kdWN0aW9uKFxuICAgIG5zOiBOUyxcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgY2l0eTogQ2l0eU5hbWUsXG4gICAgaXNQcm9kdWN0OiBib29sZWFuXG4pOiBudW1iZXIge1xuICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcbiAgICBsZXQgcmF3UHJvZHVjdGlvbiA9IGdldERpdmlzaW9uUmF3UHJvZHVjdGlvbihcbiAgICAgICAgaXNQcm9kdWN0LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLk9wZXJhdGlvbnMsXG4gICAgICAgICAgICBlbmdpbmVlclByb2R1Y3Rpb246IG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5FbmdpbmVlcixcbiAgICAgICAgICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuTWFuYWdlbWVudFxuICAgICAgICB9LFxuICAgICAgICBkaXZpc2lvbi5wcm9kdWN0aW9uTXVsdCxcbiAgICAgICAgZ2V0Q29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzKG5zKSxcbiAgICAgICAgZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zLCBkaXZpc2lvbi5uYW1lKVxuICAgICk7XG4gICAgcmF3UHJvZHVjdGlvbiA9IHJhd1Byb2R1Y3Rpb24gKiAxMDtcbiAgICByZXR1cm4gcmF3UHJvZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbWl0ZWRSYXdQcm9kdWN0aW9uKFxuICAgIG5zOiBOUyxcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgY2l0eTogQ2l0eU5hbWUsXG4gICAgaW5kdXN0cmlhbERhdGE6IENvcnBJbmR1c3RyeURhdGEsXG4gICAgd2FyZWhvdXNlOiBXYXJlaG91c2UsXG4gICAgaXNQcm9kdWN0OiBib29sZWFuLFxuICAgIHByb2R1Y3RTaXplPzogbnVtYmVyXG4pOiBudW1iZXIge1xuICAgIGxldCByYXdQcm9kdWN0aW9uID0gZ2V0UmF3UHJvZHVjdGlvbihucywgZGl2aXNpb24sIGNpdHksIGlzUHJvZHVjdCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgcmVxdWlyZWQgc3RvcmFnZSBzcGFjZSBvZiBlYWNoIG91dHB1dCB1bml0LiBJdCBpcyB0aGUgbmV0IGNoYW5nZSBpbiB3YXJlaG91c2UncyBzdG9yYWdlIHNwYWNlIHdoZW5cbiAgICAvLyBwcm9kdWNpbmcgYW4gb3V0cHV0IHVuaXQuXG4gICAgbGV0IHJlcXVpcmVkU3RvcmFnZVNwYWNlT2ZFYWNoT3V0cHV0VW5pdCA9IDA7XG4gICAgaWYgKGlzUHJvZHVjdCkge1xuICAgICAgICByZXF1aXJlZFN0b3JhZ2VTcGFjZU9mRWFjaE91dHB1dFVuaXQgKz0gcHJvZHVjdFNpemUhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qgb3V0cHV0TWF0ZXJpYWxOYW1lIG9mIGluZHVzdHJpYWxEYXRhLnByb2R1Y2VkTWF0ZXJpYWxzISkge1xuICAgICAgICAgICAgcmVxdWlyZWRTdG9yYWdlU3BhY2VPZkVhY2hPdXRwdXRVbml0ICs9IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsRGF0YShvdXRwdXRNYXRlcmlhbE5hbWUpLnNpemU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBbcmVxdWlyZWRNYXRlcmlhbE5hbWUsIHJlcXVpcmVkTWF0ZXJpYWxDb2VmZmljaWVudF0gb2YgZ2V0UmVjb3JkRW50cmllcyhpbmR1c3RyaWFsRGF0YS5yZXF1aXJlZE1hdGVyaWFscykpIHtcbiAgICAgICAgcmVxdWlyZWRTdG9yYWdlU3BhY2VPZkVhY2hPdXRwdXRVbml0IC09IG5zLmNvcnBvcmF0aW9uLmdldE1hdGVyaWFsRGF0YShyZXF1aXJlZE1hdGVyaWFsTmFtZSkuc2l6ZSAqIHJlcXVpcmVkTWF0ZXJpYWxDb2VmZmljaWVudDtcbiAgICB9XG4gICAgLy8gTGltaXQgdGhlIHJhdyBwcm9kdWN0aW9uIGlmIG5lZWRlZFxuICAgIGlmIChyZXF1aXJlZFN0b3JhZ2VTcGFjZU9mRWFjaE91dHB1dFVuaXQgPiAwKSB7XG4gICAgICAgIGNvbnN0IG1heE51bWJlck9mT3V0cHV0VW5pdHMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgKHdhcmVob3VzZS5zaXplIC0gd2FyZWhvdXNlLnNpemVVc2VkKSAvIHJlcXVpcmVkU3RvcmFnZVNwYWNlT2ZFYWNoT3V0cHV0VW5pdFxuICAgICAgICApO1xuICAgICAgICByYXdQcm9kdWN0aW9uID0gTWF0aC5taW4ocmF3UHJvZHVjdGlvbiwgbWF4TnVtYmVyT2ZPdXRwdXRVbml0cyk7XG4gICAgfVxuXG4gICAgcmF3UHJvZHVjdGlvbiA9IE1hdGgubWF4KHJhd1Byb2R1Y3Rpb24sIDApO1xuICAgIHJldHVybiByYXdQcm9kdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U21hcnRTdXBwbHlEYXRhKG5zOiBOUyk6IHZvaWQge1xuICAgIC8vIE9ubHkgc2V0IHNtYXJ0IHN1cHBseSBkYXRhIGFmdGVyIFwiUFVSQ0hBU0VcIiBzdGF0ZVxuICAgIGlmIChucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLnByZXZTdGF0ZSAhPT0gQ29ycFN0YXRlLlBVUkNIQVNFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZSwgY2l0eSkgPT4ge1xuICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XG4gICAgICAgIGNvbnN0IGluZHVzdHJpYWxEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xuICAgICAgICBjb25zdCB3YXJlaG91c2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XG4gICAgICAgIGxldCB0b3RhbFJhd1Byb2R1Y3Rpb24gPSAwO1xuXG4gICAgICAgIGlmIChpbmR1c3RyaWFsRGF0YS5tYWtlc01hdGVyaWFscykge1xuICAgICAgICAgICAgdG90YWxSYXdQcm9kdWN0aW9uICs9IGdldExpbWl0ZWRSYXdQcm9kdWN0aW9uKFxuICAgICAgICAgICAgICAgIG5zLFxuICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgaW5kdXN0cmlhbERhdGEsXG4gICAgICAgICAgICAgICAgd2FyZWhvdXNlLFxuICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZHVzdHJpYWxEYXRhLm1ha2VzUHJvZHVjdHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdE5hbWUgb2YgZGl2aXNpb24ucHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbk5hbWUsIGNpdHksIHByb2R1Y3ROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbFJhd1Byb2R1Y3Rpb24gKz0gZ2V0TGltaXRlZFJhd1Byb2R1Y3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIG5zLFxuICAgICAgICAgICAgICAgICAgICBkaXZpc2lvbixcbiAgICAgICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgaW5kdXN0cmlhbERhdGEsXG4gICAgICAgICAgICAgICAgICAgIHdhcmVob3VzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zaXplXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNtYXJ0U3VwcGx5RGF0YS5zZXQoYnVpbGRTbWFydFN1cHBseUtleShkaXZpc2lvbk5hbWUsIGNpdHkpLCB0b3RhbFJhd1Byb2R1Y3Rpb24pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RXYXJlaG91c2VDb25nZXN0aW9uKFxuICAgIG5zOiBOUyxcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgaW5kdXN0cmlhbERhdGE6IENvcnBJbmR1c3RyeURhdGEsXG4gICAgY2l0eTogQ2l0eU5hbWUsXG4gICAgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj5cbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcXVpcmVkTWF0ZXJpYWxzID0gZ2V0UmVjb3JkRW50cmllcyhpbmR1c3RyaWFsRGF0YS5yZXF1aXJlZE1hdGVyaWFscyk7XG4gICAgbGV0IGlzV2FyZWhvdXNlQ29uZ2VzdGVkID0gZmFsc2U7XG4gICAgY29uc3Qgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXkgPSBgJHtkaXZpc2lvbi5uYW1lfXwke2NpdHl9YDtcbiAgICBjb25zdCBpdGVtczogKE1hdGVyaWFsIHwgUHJvZHVjdClbXSA9IFtdO1xuICAgIGlmIChpbmR1c3RyaWFsRGF0YS5wcm9kdWNlZE1hdGVyaWFscykge1xuICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsTmFtZSBvZiBpbmR1c3RyaWFsRGF0YS5wcm9kdWNlZE1hdGVyaWFscykge1xuICAgICAgICAgICAgaXRlbXMucHVzaChucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5kdXN0cmlhbERhdGEubWFrZXNQcm9kdWN0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3ROYW1lIG9mIGRpdmlzaW9uLnByb2R1Y3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbi5uYW1lLCBjaXR5LCBwcm9kdWN0TmFtZSk7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgICBpZiAoaXRlbS5wcm9kdWN0aW9uQW1vdW50ICE9PSAwKSB7XG4gICAgICAgICAgICB3YXJlaG91c2VDb25nZXN0aW9uRGF0YS5zZXQod2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXksIDApO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXRlbS5wcm9kdWN0aW9uQW1vdW50ID09PSAwIG1lYW5zIHRoYXQgZGl2aXNpb24gZG9lcyBub3QgcHJvZHVjZSBtYXRlcmlhbC9wcm9kdWN0IGxhc3QgY3ljbGUuXG4gICAgICAgIGxldCBudW1iZXJPZkNvbmdlc3Rpb25UaW1lcyA9IHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhLmdldCh3YXJlaG91c2VDb25nZXN0aW9uRGF0YUtleSkhICsgMTtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTihudW1iZXJPZkNvbmdlc3Rpb25UaW1lcykpIHtcbiAgICAgICAgICAgIG51bWJlck9mQ29uZ2VzdGlvblRpbWVzID0gMDtcbiAgICAgICAgfVxuICAgICAgICB3YXJlaG91c2VDb25nZXN0aW9uRGF0YS5zZXQod2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXksIG51bWJlck9mQ29uZ2VzdGlvblRpbWVzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIElmIHRoYXQgaGFwcGVucyBtb3JlIHRoYW4gNSB0aW1lcywgdGhlIHdhcmVob3VzZSBpcyB2ZXJ5IGxpa2VseSBjb25nZXN0ZWQuXG4gICAgaWYgKHdhcmVob3VzZUNvbmdlc3Rpb25EYXRhLmdldCh3YXJlaG91c2VDb25nZXN0aW9uRGF0YUtleSkhID4gNSkge1xuICAgICAgICBpc1dhcmVob3VzZUNvbmdlc3RlZCA9IHRydWU7XG4gICAgfVxuICAgIC8vIFdlIG5lZWQgdG8gbWl0aWdhdGUgdGhpcyBzaXR1YXRpb24uIERpc2NhcmRpbmcgc3RvcmVkIGlucHV0IG1hdGVyaWFsIGlzIHRoZSBzaW1wbGVzdCBzb2x1dGlvbi5cbiAgICBpZiAoaXNXYXJlaG91c2VDb25nZXN0ZWQpIHtcbiAgICAgICAgc2hvd1dhcm5pbmcobnMsIGBXYXJlaG91c2UgbWF5IGJlIGNvbmdlc3RlZC4gRGl2aXNpb246ICR7ZGl2aXNpb24ubmFtZX0sIGNpdHk6ICR7Y2l0eX0uYCk7XG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZV0gb2YgcmVxdWlyZWRNYXRlcmlhbHMpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHB1cmNoYXNlXG4gICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5idXlNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIDApO1xuICAgICAgICAgICAgLy8gRGlzY2FyZCBzdG9yZWQgaW5wdXQgbWF0ZXJpYWxcbiAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIFwiTUFYXCIsIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgICB3YXJlaG91c2VDb25nZXN0aW9uRGF0YS5zZXQod2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFLZXksIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZV0gb2YgcmVxdWlyZWRNYXRlcmlhbHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lKTtcbiAgICAgICAgICAgIGlmIChtYXRlcmlhbC5kZXNpcmVkU2VsbEFtb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFN0b3AgZGlzY2FyZGluZyBpbnB1dCBtYXRlcmlhbFxuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIFwiMFwiLCBcIjBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzV2FyZWhvdXNlQ29uZ2VzdGVkO1xufVxuXG4vKipcbiAqIEN1c3RvbSBTbWFydCBTdXBwbHkgc2NyaXB0XG4gKlxuICogQHBhcmFtIG5zXG4gKiBAcGFyYW0gd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1eU9wdGltYWxBbW91bnRPZklucHV0TWF0ZXJpYWxzKG5zOiBOUywgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGE6IE1hcDxzdHJpbmcsIG51bWJlcj4pOiB2b2lkIHtcbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5uZXh0U3RhdGUgIT09IFwiUFVSQ0hBU0VcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIExvb3AgYW5kIHNldCBidXkgYW1vdW50XG4gICAgbG9vcEFsbERpdmlzaW9uc0FuZENpdGllcyhucywgKGRpdmlzaW9uTmFtZSwgY2l0eSkgPT4ge1xuICAgICAgICBjb25zdCBkaXZpc2lvbiA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSk7XG4gICAgICAgIGNvbnN0IGluZHVzdHJpYWxEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkTWF0ZXJpYWxzID0gZ2V0UmVjb3JkRW50cmllcyhpbmR1c3RyaWFsRGF0YS5yZXF1aXJlZE1hdGVyaWFscyk7XG5cbiAgICAgICAgLy8gRGV0ZWN0IHdhcmVob3VzZSBjb25nZXN0aW9uXG4gICAgICAgIGxldCBpc1dhcmVob3VzZUNvbmdlc3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXNldE9mRGl2aXNpb25zV2FpdGluZ0ZvclJQLmhhcyhkaXZpc2lvbk5hbWUpXG4gICAgICAgICAgICAmJiBvZmZpY2UuZW1wbG95ZWVKb2JzW1wiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiXSAhPT0gb2ZmaWNlLm51bUVtcGxveWVlcykge1xuICAgICAgICAgICAgaXNXYXJlaG91c2VDb25nZXN0ZWQgPSBkZXRlY3RXYXJlaG91c2VDb25nZXN0aW9uKFxuICAgICAgICAgICAgICAgIG5zLFxuICAgICAgICAgICAgICAgIGRpdmlzaW9uLFxuICAgICAgICAgICAgICAgIGluZHVzdHJpYWxEYXRhLFxuICAgICAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICAgICAgd2FyZWhvdXNlQ29uZ2VzdGlvbkRhdGFcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzV2FyZWhvdXNlQ29uZ2VzdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YXJlaG91c2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XG4gICAgICAgIGNvbnN0IGlucHV0TWF0ZXJpYWxzOiBQYXJ0aWFsUmVjb3JkPENvcnBNYXRlcmlhbE5hbWUsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkUXVhbnRpdHk6IG51bWJlcixcbiAgICAgICAgICAgIGNvZWZmaWNpZW50OiBudW1iZXI7XG4gICAgICAgIH0+ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZSwgbWF0ZXJpYWxDb2VmZmljaWVudF0gb2YgcmVxdWlyZWRNYXRlcmlhbHMpIHtcbiAgICAgICAgICAgIGlucHV0TWF0ZXJpYWxzW21hdGVyaWFsTmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRRdWFudGl0eTogMCxcbiAgICAgICAgICAgICAgICBjb2VmZmljaWVudDogbWF0ZXJpYWxDb2VmZmljaWVudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmQgcmVxdWlyZWQgcXVhbnRpdHkgb2YgaW5wdXQgbWF0ZXJpYWxzIHRvIHByb2R1Y2UgbWF0ZXJpYWwvcHJvZHVjdFxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0TWF0ZXJpYWxEYXRhIG9mIE9iamVjdC52YWx1ZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZFF1YW50aXR5ID0gKHNtYXJ0U3VwcGx5RGF0YS5nZXQoYnVpbGRTbWFydFN1cHBseUtleShkaXZpc2lvbk5hbWUsIGNpdHkpKSA/PyAwKVxuICAgICAgICAgICAgICAgICogaW5wdXRNYXRlcmlhbERhdGEuY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ICs9IHJlcXVpcmVkUXVhbnRpdHk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1pdCB0aGUgaW5wdXQgbWF0ZXJpYWwgdW5pdHMgdG8gbWF4IG51bWJlciBvZiB1bml0cyB0aGF0IHdlIGNhbiBzdG9yZSBpbiB3YXJlaG91c2UncyBmcmVlIHNwYWNlXG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZSwgaW5wdXRNYXRlcmlhbERhdGFdIG9mIGdldFJlY29yZEVudHJpZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbERhdGEgPSBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbERhdGEobWF0ZXJpYWxOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IG1heEFjY2VwdGFibGVRdWFudGl0eSA9IE1hdGguZmxvb3IoKHdhcmVob3VzZS5zaXplIC0gd2FyZWhvdXNlLnNpemVVc2VkKSAvIG1hdGVyaWFsRGF0YS5zaXplKTtcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ZWRSZXF1aXJlZFF1YW50aXR5ID0gTWF0aC5taW4oaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSwgbWF4QWNjZXB0YWJsZVF1YW50aXR5KTtcbiAgICAgICAgICAgIGlmIChsaW1pdGVkUmVxdWlyZWRRdWFudGl0eSA+IDApIHtcbiAgICAgICAgICAgICAgICBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ID0gbGltaXRlZFJlcXVpcmVkUXVhbnRpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIHdoaWNoIGlucHV0IG1hdGVyaWFsIGNyZWF0ZXMgdGhlIGxlYXN0IG51bWJlciBvZiBvdXRwdXQgdW5pdHNcbiAgICAgICAgbGV0IGxlYXN0QW1vdW50T2ZPdXRwdXRVbml0cyA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGZvciAoY29uc3QgeyByZXF1aXJlZFF1YW50aXR5LCBjb2VmZmljaWVudCB9IG9mIE9iamVjdC52YWx1ZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICBjb25zdCBhbW91bnRPZk91dHB1dFVuaXRzID0gcmVxdWlyZWRRdWFudGl0eSAvIGNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGFtb3VudE9mT3V0cHV0VW5pdHMgPCBsZWFzdEFtb3VudE9mT3V0cHV0VW5pdHMpIHtcbiAgICAgICAgICAgICAgICBsZWFzdEFtb3VudE9mT3V0cHV0VW5pdHMgPSBhbW91bnRPZk91dHB1dFVuaXRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxpZ24gYWxsIHRoZSBpbnB1dCBtYXRlcmlhbHMgdG8gdGhlIHNtYWxsZXN0IGFtb3VudFxuICAgICAgICBmb3IgKGNvbnN0IGlucHV0TWF0ZXJpYWxEYXRhIG9mIE9iamVjdC52YWx1ZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICBpbnB1dE1hdGVyaWFsRGF0YS5yZXF1aXJlZFF1YW50aXR5ID0gbGVhc3RBbW91bnRPZk91dHB1dFVuaXRzICogaW5wdXRNYXRlcmlhbERhdGEuY29lZmZpY2llbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIHNpemUgb2YgYWxsIGlucHV0IG1hdGVyaWFscyB3ZSBhcmUgdHJ5aW5nIHRvIGJ1eVxuICAgICAgICBsZXQgcmVxdWlyZWRTcGFjZSA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW21hdGVyaWFsTmFtZSwgaW5wdXRNYXRlcmlhbERhdGFdIG9mIGdldFJlY29yZEVudHJpZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICByZXF1aXJlZFNwYWNlICs9IGlucHV0TWF0ZXJpYWxEYXRhLnJlcXVpcmVkUXVhbnRpdHkgKiBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbERhdGEobWF0ZXJpYWxOYW1lKS5zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm90IGVub3VnaCBmcmVlIHNwYWNlLCB3ZSBhcHBseSBhIG11bHRpcGxpZXIgdG8gcmVxdWlyZWQgcXVhbnRpdHkgdG8gbm90IG92ZXJmaWxsIHdhcmVob3VzZVxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSB3YXJlaG91c2Uuc2l6ZSAtIHdhcmVob3VzZS5zaXplVXNlZDtcbiAgICAgICAgaWYgKHJlcXVpcmVkU3BhY2UgPiBmcmVlU3BhY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cmFpbmVkU3RvcmFnZVNwYWNlTXVsdGlwbGllciA9IGZyZWVTcGFjZSAvIHJlcXVpcmVkU3BhY2U7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucHV0TWF0ZXJpYWxEYXRhIG9mIE9iamVjdC52YWx1ZXMoaW5wdXRNYXRlcmlhbHMpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSA9IE1hdGguZmxvb3IoaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSAqIGNvbnN0cmFpbmVkU3RvcmFnZVNwYWNlTXVsdGlwbGllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZWR1Y3QgdGhlIG51bWJlciBvZiBzdG9yZWQgaW5wdXQgbWF0ZXJpYWwgdW5pdHMgZnJvbSB0aGUgcmVxdWlyZWQgcXVhbnRpdHlcbiAgICAgICAgZm9yIChjb25zdCBbbWF0ZXJpYWxOYW1lLCBpbnB1dE1hdGVyaWFsRGF0YV0gb2YgZ2V0UmVjb3JkRW50cmllcyhpbnB1dE1hdGVyaWFscykpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUpO1xuICAgICAgICAgICAgaW5wdXRNYXRlcmlhbERhdGEucmVxdWlyZWRRdWFudGl0eSA9IE1hdGgubWF4KDAsIGlucHV0TWF0ZXJpYWxEYXRhLnJlcXVpcmVkUXVhbnRpdHkgLSBtYXRlcmlhbC5zdG9yZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQnV5IGlucHV0IG1hdGVyaWFsc1xuICAgICAgICBmb3IgKGNvbnN0IFttYXRlcmlhbE5hbWUsIGlucHV0TWF0ZXJpYWxEYXRhXSBvZiBnZXRSZWNvcmRFbnRyaWVzKGlucHV0TWF0ZXJpYWxzKSkge1xuICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5TWF0ZXJpYWwoZGl2aXNpb25OYW1lLCBjaXR5LCBtYXRlcmlhbE5hbWUsIGlucHV0TWF0ZXJpYWxEYXRhLnJlcXVpcmVkUXVhbnRpdHkgLyAxMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gbnNcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcbiAqIEBwYXJhbSBpbmR1c3RyeURhdGFcbiAqIEBwYXJhbSBjaXR5XG4gKiBAcGFyYW0gdXNlV2FyZWhvdXNlU2l6ZSBJZiBmYWxzZSwgZnVuY3Rpb24gdXNlcyB1bnVzZWQgc3RvcmFnZSBzaXplIGFmdGVyIFBST0RVQ1RJT04gc3RhdGVcbiAqIEBwYXJhbSByYXRpb1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmluZE9wdGltYWxBbW91bnRPZkJvb3N0TWF0ZXJpYWxzKFxuICAgIG5zOiBOUyxcbiAgICBkaXZpc2lvbk5hbWU6IHN0cmluZyxcbiAgICBpbmR1c3RyeURhdGE6IENvcnBJbmR1c3RyeURhdGEsXG4gICAgY2l0eTogQ2l0eU5hbWUsXG4gICAgdXNlV2FyZWhvdXNlU2l6ZTogYm9vbGVhbixcbiAgICByYXRpbzogbnVtYmVyXG4pOiBQcm9taXNlPG51bWJlcltdPiB7XG4gICAgY29uc3Qgd2FyZWhvdXNlU2l6ZSA9IG5zLmNvcnBvcmF0aW9uLmdldFdhcmVob3VzZShkaXZpc2lvbk5hbWUsIGNpdHkpLnNpemU7XG4gICAgaWYgKHVzZVdhcmVob3VzZVNpemUpIHtcbiAgICAgICAgcmV0dXJuIGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIHdhcmVob3VzZVNpemUgKiByYXRpbyk7XG4gICAgfVxuICAgIGF3YWl0IHdhaXRVbnRpbEFmdGVyU3RhdGVIYXBwZW5zKG5zLCBDb3JwU3RhdGUuUFJPRFVDVElPTik7XG4gICAgY29uc3QgYXZhaWxhYmxlU3BhY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb25OYW1lLCBjaXR5KS5zaXplXG4gICAgICAgIC0gbnMuY29ycG9yYXRpb24uZ2V0V2FyZWhvdXNlKGRpdmlzaW9uTmFtZSwgY2l0eSkuc2l6ZVVzZWQ7XG4gICAgcmV0dXJuIGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIGF2YWlsYWJsZVNwYWNlICogcmF0aW8pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsSGF2aW5nRW5vdWdoUmVzZWFyY2hQb2ludHMobnM6IE5TLCBjb25kaXRpb25zOiB7XG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmc7XG4gICAgcmVzZWFyY2hQb2ludDogbnVtYmVyO1xufVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbnMucHJpbnQoYFdhaXRpbmcgZm9yIHJlc2VhcmNoIHBvaW50czogJHtKU09OLnN0cmluZ2lmeShjb25kaXRpb25zKX1gKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgZmluaXNoID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9ucykge1xuICAgICAgICAgICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGNvbmRpdGlvbi5kaXZpc2lvbk5hbWUpLnJlc2VhcmNoUG9pbnRzID49IGNvbmRpdGlvbi5yZXNlYXJjaFBvaW50KSB7XG4gICAgICAgICAgICAgICAgc2V0T2ZEaXZpc2lvbnNXYWl0aW5nRm9yUlAuZGVsZXRlKGNvbmRpdGlvbi5kaXZpc2lvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0T2ZEaXZpc2lvbnNXYWl0aW5nRm9yUlAuYWRkKGNvbmRpdGlvbi5kaXZpc2lvbk5hbWUpO1xuICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbmlzaCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbnMuY29ycG9yYXRpb24ubmV4dFVwZGF0ZSgpO1xuICAgIH1cbiAgICBucy5wcmludChgRmluaXNoZWQgd2FpdGluZyBmb3IgcmVzZWFyY2ggcG9pbnRzLiBDb25kaXRpb25zOiAke0pTT04uc3RyaW5naWZ5KGNvbmRpdGlvbnMpfWApO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGFsbCBwcm9kdWN0J3MgbmFtZXMgd2VyZSBnZW5lcmF0ZWQgYnkge0BsaW5rIGdlbmVyYXRlTmV4dFByb2R1Y3ROYW1lfVxuICpcbiAqIEBwYXJhbSBuc1xuICogQHBhcmFtIGRpdmlzaW9uTmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdElkQXJyYXkobnM6IE5TLCBkaXZpc2lvbk5hbWU6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSkucHJvZHVjdHM7XG4gICAgcmV0dXJuIHByb2R1Y3RzXG4gICAgICAgIC5tYXAocHJvZHVjdE5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWVQYXJ0cyA9IHByb2R1Y3ROYW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0TmFtZVBhcnRzLmxlbmd0aCAhPSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlcihwcm9kdWN0TmFtZVBhcnRzWzFdKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihwcm9kdWN0SW5kZXggPT4gIU51bWJlci5pc05hTihwcm9kdWN0SW5kZXgpKTtcbn1cblxuLyoqXG4gKiBbXCJUb2JhY2NvLTAwMDAwfDFlMTJcIiwgXCJUb2JhY2NvLTAwMDAxfDFlMTJcIiwgXCJUb2JhY2NvLTAwMDAyfDFlMTJcIl0gPT4gXCJUb2JhY2NvLTAwMDAzfDFlMTJcIlxuICogMWUxMiBpcyBkZXNpZ25JbnZlc3QgKyBtYXJrZXRpbmdJbnZlc3RcbiAqXG4gKiBAcGFyYW0gbnNcbiAqIEBwYXJhbSBkaXZpc2lvbk5hbWVcbiAqIEBwYXJhbSBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTmV4dFByb2R1Y3ROYW1lKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcsIHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQpIHx8IHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldCA8IDFlMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYnVkZ2V0OiAke3Byb2R1Y3REZXZlbG9wbWVudEJ1ZGdldH1gKTtcbiAgICB9XG4gICAgY29uc3QgcHJvZHVjdElkQXJyYXkgPSBnZXRQcm9kdWN0SWRBcnJheShucywgZGl2aXNpb25OYW1lKTtcbiAgICBpZiAocHJvZHVjdElkQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBgJHtkaXZpc2lvbk5hbWV9LTAwMDAwLSR7cHJvZHVjdERldmVsb3BtZW50QnVkZ2V0LnRvRXhwb25lbnRpYWwoNSl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2RpdmlzaW9uTmFtZX0tJHsoTWF0aC5tYXgoLi4ucHJvZHVjdElkQXJyYXkpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCg1LCBcIjBcIil9LSR7cHJvZHVjdERldmVsb3BtZW50QnVkZ2V0LnRvRXhwb25lbnRpYWwoNSl9YDtcbn1cblxuZnVuY3Rpb24gZ2V0TWF4TnVtYmVyT2ZQcm9kdWN0cyhuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgbWF4TnVtYmVyT2ZQcm9kdWN0cyA9IDM7XG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmhhc1Jlc2VhcmNoZWQoZGl2aXNpb25OYW1lLCBSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8xKSkge1xuICAgICAgICBtYXhOdW1iZXJPZlByb2R1Y3RzID0gNDtcbiAgICB9XG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmhhc1Jlc2VhcmNoZWQoZGl2aXNpb25OYW1lLCBSZXNlYXJjaE5hbWUuVVBHUkFERV9DQVBBQ0lUWV8yKSkge1xuICAgICAgICBtYXhOdW1iZXJPZlByb2R1Y3RzID0gNTtcbiAgICB9XG4gICAgcmV0dXJuIG1heE51bWJlck9mUHJvZHVjdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXZlbG9wTmV3UHJvZHVjdChcbiAgICBuczogTlMsXG4gICAgZGl2aXNpb25OYW1lOiBzdHJpbmcsXG4gICAgbWFpblByb2R1Y3REZXZlbG9wbWVudENpdHk6IENpdHlOYW1lLFxuICAgIHByb2R1Y3REZXZlbG9wbWVudEJ1ZGdldDogbnVtYmVyXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSkucHJvZHVjdHM7XG5cbiAgICBsZXQgaGFzRGV2ZWxvcGluZ1Byb2R1Y3QgPSBmYWxzZTtcbiAgICBsZXQgYmVzdFByb2R1Y3QgPSBudWxsO1xuICAgIGxldCB3b3JzdFByb2R1Y3QgPSBudWxsO1xuICAgIGxldCBtYXhQcm9kdWN0UmF0aW5nID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICBsZXQgbWluUHJvZHVjdFJhdGluZyA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgZm9yIChjb25zdCBwcm9kdWN0TmFtZSBvZiBwcm9kdWN0cykge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbk5hbWUsIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LCBwcm9kdWN0TmFtZSk7XG4gICAgICAgIC8vQ2hlY2sgaWYgdGhlcmUgaXMgYW55IGRldmVsb3BpbmcgcHJvZHVjdFxuICAgICAgICBpZiAocHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgICBoYXNEZXZlbG9waW5nUHJvZHVjdCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGJlc3QgYW5kIHdvcnN0IHByb2R1Y3RcbiAgICAgICAgY29uc3QgcHJvZHVjdFJhdGluZyA9IHByb2R1Y3QucmF0aW5nO1xuICAgICAgICBpZiAocHJvZHVjdFJhdGluZyA8IG1pblByb2R1Y3RSYXRpbmcpIHtcbiAgICAgICAgICAgIHdvcnN0UHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgICBtaW5Qcm9kdWN0UmF0aW5nID0gcHJvZHVjdFJhdGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvZHVjdFJhdGluZyA+IG1heFByb2R1Y3RSYXRpbmcpIHtcbiAgICAgICAgICAgIGJlc3RQcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICAgIG1heFByb2R1Y3RSYXRpbmcgPSBwcm9kdWN0UmF0aW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG8gbm90aGluZyBpZiB0aGVyZSBpcyBhbnkgZGV2ZWxvcGluZyBwcm9kdWN0XG4gICAgaWYgKGhhc0RldmVsb3BpbmdQcm9kdWN0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWJlc3RQcm9kdWN0ICYmIHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgdGhlIGJlc3QgcHJvZHVjdFwiKTtcbiAgICB9XG4gICAgaWYgKCF3b3JzdFByb2R1Y3QgJiYgcHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCB0aGUgd29yc3QgcHJvZHVjdCB0byBkaXNjb250aW51ZVwiKTtcbiAgICB9XG4gICAgLy8gTmV3IHByb2R1Y3QncyBidWRnZXQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiBYJSBvZiBjdXJyZW50IGJlc3QgcHJvZHVjdCdzIGJ1ZGdldC5cbiAgICBpZiAoYmVzdFByb2R1Y3QpIHtcbiAgICAgICAgY29uc3QgYmVzdFByb2R1Y3RCdWRnZXQgPSBiZXN0UHJvZHVjdC5kZXNpZ25JbnZlc3RtZW50ICsgYmVzdFByb2R1Y3QuYWR2ZXJ0aXNpbmdJbnZlc3RtZW50O1xuICAgICAgICBpZiAocHJvZHVjdERldmVsb3BtZW50QnVkZ2V0IDwgYmVzdFByb2R1Y3RCdWRnZXQgKiAwLjUgJiYgcHJvZHVjdHMubGVuZ3RoID49IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYEJ1ZGdldCBmb3IgbmV3IHByb2R1Y3QgaXMgdG9vIGxvdzogJHtucy5mb3JtYXROdW1iZXIocHJvZHVjdERldmVsb3BtZW50QnVkZ2V0KX0uIGBcbiAgICAgICAgICAgICAgICArIGBDdXJyZW50IGJlc3QgcHJvZHVjdCdzIGJ1ZGdldDogJHtucy5mb3JtYXROdW1iZXIoYmVzdFByb2R1Y3RCdWRnZXQpfWA7XG4gICAgICAgICAgICBzaG93V2FybmluZyhcbiAgICAgICAgICAgICAgICBucyxcbiAgICAgICAgICAgICAgICB3YXJuaW5nTWVzc2FnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh3b3JzdFByb2R1Y3QgJiYgcHJvZHVjdHMubGVuZ3RoID09PSBnZXRNYXhOdW1iZXJPZlByb2R1Y3RzKG5zLCBkaXZpc2lvbk5hbWUpKSB7XG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmRpc2NvbnRpbnVlUHJvZHVjdChkaXZpc2lvbk5hbWUsIHdvcnN0UHJvZHVjdC5uYW1lKTtcbiAgICB9XG4gICAgY29uc3QgcHJvZHVjdE5hbWUgPSBnZW5lcmF0ZU5leHRQcm9kdWN0TmFtZShucywgZGl2aXNpb25OYW1lLCBwcm9kdWN0RGV2ZWxvcG1lbnRCdWRnZXQpO1xuICAgIG5zLmNvcnBvcmF0aW9uLm1ha2VQcm9kdWN0KFxuICAgICAgICBkaXZpc2lvbk5hbWUsXG4gICAgICAgIG1haW5Qcm9kdWN0RGV2ZWxvcG1lbnRDaXR5LFxuICAgICAgICBwcm9kdWN0TmFtZSxcbiAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0IC8gMixcbiAgICAgICAgcHJvZHVjdERldmVsb3BtZW50QnVkZ2V0IC8gMixcbiAgICApO1xuICAgIHJldHVybiBwcm9kdWN0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld2VzdFByb2R1Y3ROYW1lKG5zOiBOUywgZGl2aXNpb25OYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IG5zLmNvcnBvcmF0aW9uLmdldERpdmlzaW9uKGRpdmlzaW9uTmFtZSkucHJvZHVjdHM7XG4gICAgaWYgKHByb2R1Y3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHByb2R1Y3RzW3Byb2R1Y3RzLmxlbmd0aCAtIDFdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlUHJvZHVjdE1hcmt1cChcbiAgICBkaXZpc2lvblJQOiBudW1iZXIsXG4gICAgaW5kdXN0cnlTY2llbmNlRmFjdG9yOiBudW1iZXIsXG4gICAgcHJvZHVjdDogUHJvZHVjdCxcbiAgICBlbXBsb3llZVByb2R1Y3Rpb25CeUpvYj86IHtcbiAgICAgICAgb3BlcmF0aW9uc1Byb2R1Y3Rpb246IG51bWJlcjtcbiAgICAgICAgZW5naW5lZXJQcm9kdWN0aW9uOiBudW1iZXI7XG4gICAgICAgIGJ1c2luZXNzUHJvZHVjdGlvbjogbnVtYmVyO1xuICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogbnVtYmVyO1xuICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbjogbnVtYmVyO1xuICAgIH1cbik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgY29uc3QgZGVzaWduSW52ZXN0bWVudE11bHRpcGxpZXIgPSAxICsgTWF0aC5wb3cocHJvZHVjdC5kZXNpZ25JbnZlc3RtZW50LCAwLjEpIC8gMTAwO1xuICAgIGNvbnN0IHJlc2VhcmNoUG9pbnRNdWx0aXBsaWVyID0gMSArIE1hdGgucG93KGRpdmlzaW9uUlAsIGluZHVzdHJ5U2NpZW5jZUZhY3RvcikgLyA4MDA7XG4gICAgY29uc3QgayA9IGRlc2lnbkludmVzdG1lbnRNdWx0aXBsaWVyICogcmVzZWFyY2hQb2ludE11bHRpcGxpZXI7XG4gICAgY29uc3QgYmFsYW5jZU11bHRpcGxpZXIgPSBmdW5jdGlvbiAoXG4gICAgICAgIGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyOiBudW1iZXIsXG4gICAgICAgIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQ6IG51bWJlcixcbiAgICAgICAgY3JlYXRpb25Kb2JGYWN0b3JzUm5EOiBudW1iZXIsXG4gICAgICAgIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnM6IG51bWJlcixcbiAgICAgICAgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3M6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzID0gY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIgKyBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50ICsgY3JlYXRpb25Kb2JGYWN0b3JzUm5EICsgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucyArIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzO1xuICAgICAgICBjb25zdCBlbmdpbmVlclJhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIgLyB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycztcbiAgICAgICAgY29uc3QgbWFuYWdlbWVudFJhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzO1xuICAgICAgICBjb25zdCByZXNlYXJjaEFuZERldmVsb3BtZW50UmF0aW8gPSBjcmVhdGlvbkpvYkZhY3RvcnNSbkQgLyB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycztcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uc1JhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucyAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzO1xuICAgICAgICBjb25zdCBidXNpbmVzc1JhdGlvID0gY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MgLyB0b3RhbENyZWF0aW9uSm9iRmFjdG9ycztcbiAgICAgICAgcmV0dXJuIDEuMiAqIGVuZ2luZWVyUmF0aW8gKyAwLjkgKiBtYW5hZ2VtZW50UmF0aW8gKyAxLjMgKiByZXNlYXJjaEFuZERldmVsb3BtZW50UmF0aW8gKyAxLjUgKiBvcGVyYXRpb25zUmF0aW8gKyBidXNpbmVzc1JhdGlvO1xuXG4gICAgfTtcbiAgICBjb25zdCBmMSA9IGZ1bmN0aW9uIChbY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3NdOiBudW1iZXJbXSkge1xuICAgICAgICByZXR1cm4ga1xuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcbiAgICAgICAgICAgICogKDAuMSAqIGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyICsgMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQgKyAwLjA1ICogY3JlYXRpb25Kb2JGYWN0b3JzUm5EICsgMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXG4gICAgICAgICAgICAtIHByb2R1Y3Quc3RhdHMucXVhbGl0eTtcbiAgICB9O1xuICAgIGNvbnN0IGYyID0gZnVuY3Rpb24gKFtjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzc106IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBrXG4gICAgICAgICAgICAqIGJhbGFuY2VNdWx0aXBsaWVyKGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyLCBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50LCBjcmVhdGlvbkpvYkZhY3RvcnNSbkQsIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMsIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzKVxuICAgICAgICAgICAgKiAoMC4xNSAqIGNyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyICsgMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzUm5EICsgMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXG4gICAgICAgICAgICAtIHByb2R1Y3Quc3RhdHMucGVyZm9ybWFuY2U7XG4gICAgfTtcbiAgICBjb25zdCBmMyA9IGZ1bmN0aW9uIChbY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3NdOiBudW1iZXJbXSkge1xuICAgICAgICByZXR1cm4ga1xuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcbiAgICAgICAgICAgICogKDAuMDUgKiBjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciArIDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50ICsgMC4wOCAqIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCArIDAuMDUgKiBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zICsgMC4wNSAqIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzKVxuICAgICAgICAgICAgLSBwcm9kdWN0LnN0YXRzLmR1cmFiaWxpdHk7XG4gICAgfTtcbiAgICBjb25zdCBmNCA9IGZ1bmN0aW9uIChbY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3NdOiBudW1iZXJbXSkge1xuICAgICAgICByZXR1cm4ga1xuICAgICAgICAgICAgKiBiYWxhbmNlTXVsdGlwbGllcihjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciwgY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCwgY3JlYXRpb25Kb2JGYWN0b3JzUm5ELCBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zLCBjcmVhdGlvbkpvYkZhY3RvcnNCdXNpbmVzcylcbiAgICAgICAgICAgICogKDAuMDIgKiBjcmVhdGlvbkpvYkZhY3RvcnNFbmdpbmVlciArIDAuMDggKiBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50ICsgMC4wMiAqIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCArIDAuMDUgKiBjcmVhdGlvbkpvYkZhY3RvcnNPcGVyYXRpb25zICsgMC4wOCAqIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzKVxuICAgICAgICAgICAgLSBwcm9kdWN0LnN0YXRzLnJlbGlhYmlsaXR5O1xuICAgIH07XG4gICAgY29uc3QgZjUgPSBmdW5jdGlvbiAoW2NyZWF0aW9uSm9iRmFjdG9yc0VuZ2luZWVyLCBjcmVhdGlvbkpvYkZhY3RvcnNNYW5hZ2VtZW50LCBjcmVhdGlvbkpvYkZhY3RvcnNSbkQsIGNyZWF0aW9uSm9iRmFjdG9yc09wZXJhdGlvbnMsIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzXTogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIGtcbiAgICAgICAgICAgICogYmFsYW5jZU11bHRpcGxpZXIoY3JlYXRpb25Kb2JGYWN0b3JzRW5naW5lZXIsIGNyZWF0aW9uSm9iRmFjdG9yc01hbmFnZW1lbnQsIGNyZWF0aW9uSm9iRmFjdG9yc1JuRCwgY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucywgY3JlYXRpb25Kb2JGYWN0b3JzQnVzaW5lc3MpXG4gICAgICAgICAgICAqICgwLjA4ICogY3JlYXRpb25Kb2JGYWN0b3JzTWFuYWdlbWVudCArIDAuMDUgKiBjcmVhdGlvbkpvYkZhY3RvcnNSbkQgKyAwLjAyICogY3JlYXRpb25Kb2JGYWN0b3JzT3BlcmF0aW9ucyArIDAuMSAqIGNyZWF0aW9uSm9iRmFjdG9yc0J1c2luZXNzKVxuICAgICAgICAgICAgLSBwcm9kdWN0LnN0YXRzLmFlc3RoZXRpY3M7XG4gICAgfTtcbiAgICBsZXQgc29sdmVyUmVzdWx0OiBDZXJlc1NvbHZlclJlc3VsdCA9IHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICAgIHg6IFtdLFxuICAgICAgICByZXBvcnQ6IFwic3RyaW5nXCIsXG4gICAgfTtcbiAgICBjb25zdCBzb2x2ZXIgPSBuZXcgQ2VyZXMoKTtcbiAgICBhd2FpdCBzb2x2ZXIucHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmMSk7XG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjIpO1xuICAgICAgICBzb2x2ZXIuYWRkX2Z1bmN0aW9uKGYzKTtcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmNCk7XG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjUpO1xuICAgICAgICAvLyBHdWVzcyB0aGUgaW5pdGlhbCB2YWx1ZXMgb2YgdGhlIHNvbHV0aW9uXG4gICAgICAgIGxldCBndWVzcyA9IFsxLCAxLCAxLCAxLCAxXTtcbiAgICAgICAgaWYgKGVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iKSB7XG4gICAgICAgICAgICBndWVzcyA9IFtcbiAgICAgICAgICAgICAgICBlbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5lbmdpbmVlclByb2R1Y3Rpb24sXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IubWFuYWdlbWVudFByb2R1Y3Rpb24sXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IucmVzZWFyY2hBbmREZXZlbG9wbWVudFByb2R1Y3Rpb24sXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2Iub3BlcmF0aW9uc1Byb2R1Y3Rpb24sXG4gICAgICAgICAgICAgICAgZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuYnVzaW5lc3NQcm9kdWN0aW9uXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHNvbHZlclJlc3VsdCA9IHNvbHZlci5zb2x2ZShndWVzcykhO1xuICAgICAgICBzb2x2ZXIucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgaWYgKCFzb2x2ZXJSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBDYW5ub3QgZmluZCBoaWRkZW4gc3RhdHMgb2YgcHJvZHVjdDogJHtKU09OLnN0cmluZ2lmeShwcm9kdWN0KX1gKTtcbiAgICB9XG4gICAgY29uc3QgdG90YWxDcmVhdGlvbkpvYkZhY3RvcnMgPSBzb2x2ZXJSZXN1bHQueFswXSArIHNvbHZlclJlc3VsdC54WzFdICsgc29sdmVyUmVzdWx0LnhbMl0gKyBzb2x2ZXJSZXN1bHQueFszXSArIHNvbHZlclJlc3VsdC54WzRdO1xuICAgIGNvbnN0IG1hbmFnZW1lbnRSYXRpbyA9IHNvbHZlclJlc3VsdC54WzFdIC8gdG90YWxDcmVhdGlvbkpvYkZhY3RvcnM7XG4gICAgY29uc3QgYnVzaW5lc3NSYXRpbyA9IHNvbHZlclJlc3VsdC54WzRdIC8gdG90YWxDcmVhdGlvbkpvYkZhY3RvcnM7XG5cbiAgICBjb25zdCBhZHZlcnRpc2luZ0ludmVzdG1lbnRNdWx0aXBsaWVyID0gMSArIE1hdGgucG93KHByb2R1Y3QuYWR2ZXJ0aXNpbmdJbnZlc3RtZW50LCAwLjEpIC8gMTAwO1xuICAgIGNvbnN0IGJ1c2luZXNzTWFuYWdlbWVudFJhdGlvID0gTWF0aC5tYXgoYnVzaW5lc3NSYXRpbyArIG1hbmFnZW1lbnRSYXRpbywgMSAvIHRvdGFsQ3JlYXRpb25Kb2JGYWN0b3JzKTtcbiAgICByZXR1cm4gMTAwIC8gKGFkdmVydGlzaW5nSW52ZXN0bWVudE11bHRpcGxpZXIgKiBNYXRoLnBvdyhwcm9kdWN0LnN0YXRzLnF1YWxpdHkgKyAwLjAwMSwgMC42NSkgKiBidXNpbmVzc01hbmFnZW1lbnRSYXRpbyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2R1Y3QoaXRlbTogTWF0ZXJpYWwgfCBQcm9kdWN0KTogaXRlbSBpcyBQcm9kdWN0IHtcbiAgICByZXR1cm4gXCJyYXRpbmdcIiBpbiBpdGVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9kdWN0TWFya3VwTWFwKG5zOiBOUyk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgcHJvZHVjdEtleSBvZiBwcm9kdWN0TWFya3VwRGF0YS5rZXlzKCkpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdEtleUluZm8gPSBwcm9kdWN0S2V5LnNwbGl0KFwifFwiKTtcbiAgICAgICAgY29uc3QgZGl2aXNpb25OYW1lID0gcHJvZHVjdEtleUluZm9bMF07XG4gICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gcHJvZHVjdEtleUluZm9bMl07XG4gICAgICAgIGlmICghbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKS5wcm9kdWN0cy5pbmNsdWRlcyhwcm9kdWN0TmFtZSkpIHtcbiAgICAgICAgICAgIHByb2R1Y3RNYXJrdXBEYXRhLmRlbGV0ZShwcm9kdWN0S2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RNYXJrdXAoXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICBjaXR5OiBDaXR5TmFtZSxcbiAgICBpdGVtOiBQcm9kdWN0LFxuICAgIG9mZmljZT86IE9mZmljZVxuKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBsZXQgcHJvZHVjdE1hcmt1cDtcbiAgICBjb25zdCBwcm9kdWN0TWFya3VwS2V5ID0gYCR7ZGl2aXNpb24ubmFtZX18JHtjaXR5fXwke2l0ZW0ubmFtZX1gO1xuICAgIHByb2R1Y3RNYXJrdXAgPSBwcm9kdWN0TWFya3VwRGF0YS5nZXQocHJvZHVjdE1hcmt1cEtleSk7XG4gICAgaWYgKCFwcm9kdWN0TWFya3VwKSB7XG4gICAgICAgIHByb2R1Y3RNYXJrdXAgPSBhd2FpdCBjYWxjdWxhdGVQcm9kdWN0TWFya3VwKFxuICAgICAgICAgICAgZGl2aXNpb24ucmVzZWFyY2hQb2ludHMsXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEuc2NpZW5jZUZhY3RvciEsXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgKG9mZmljZSkgPyB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uc1Byb2R1Y3Rpb246IG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYi5PcGVyYXRpb25zLFxuICAgICAgICAgICAgICAgIGVuZ2luZWVyUHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLkVuZ2luZWVyLFxuICAgICAgICAgICAgICAgIGJ1c2luZXNzUHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iLkJ1c2luZXNzLFxuICAgICAgICAgICAgICAgIG1hbmFnZW1lbnRQcm9kdWN0aW9uOiBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2IuTWFuYWdlbWVudCxcbiAgICAgICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbjogb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iW1wiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiXSxcbiAgICAgICAgICAgIH0gOiB1bmRlZmluZWRcbiAgICAgICAgKTtcbiAgICAgICAgcHJvZHVjdE1hcmt1cERhdGEuc2V0KHByb2R1Y3RNYXJrdXBLZXksIHByb2R1Y3RNYXJrdXApO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdE1hcmt1cDtcbn1cblxuLyoqXG4gKiBDdXN0b20gTWFya2V0LVRBLklJIHNjcmlwdFxuICpcbiAqIEBwYXJhbSBuc1xuICogQHBhcmFtIGRpdmlzaW9uXG4gKiBAcGFyYW0gaW5kdXN0cnlEYXRhXG4gKiBAcGFyYW0gY2l0eVxuICogQHBhcmFtIGl0ZW1cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcHRpbWFsU2VsbGluZ1ByaWNlKFxuICAgIG5zOiBOUyxcbiAgICBkaXZpc2lvbjogRGl2aXNpb24sXG4gICAgaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLFxuICAgIGNpdHk6IENpdHlOYW1lLFxuICAgIGl0ZW06IE1hdGVyaWFsIHwgUHJvZHVjdFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBpdGVtSXNQcm9kdWN0ID0gaXNQcm9kdWN0KGl0ZW0pO1xuICAgIGlmIChpdGVtSXNQcm9kdWN0ICYmIGl0ZW0uZGV2ZWxvcG1lbnRQcm9ncmVzcyA8IDEwMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb2R1Y3QgaXMgbm90IGZpbmlzaGVkLiBQcm9kdWN0OiAke0pTT04uc3RyaW5naWZ5KGl0ZW0pfWApO1xuICAgIH1cbiAgICBpZiAoIW5zLmNvcnBvcmF0aW9uLmhhc1VubG9jayhVbmxvY2tOYW1lLk1BUktFVF9SRVNFQVJDSF9ERU1BTkQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IG11c3QgdW5sb2NrIFwiTWFya2V0IFJlc2VhcmNoIC0gRGVtYW5kXCJgKTtcbiAgICB9XG4gICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5oYXNVbmxvY2soVW5sb2NrTmFtZS5NQVJLRVRfREFUQV9DT01QRVRJVElPTikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgbXVzdCB1bmxvY2sgXCJNYXJrZXQgRGF0YSAtIENvbXBldGl0aW9uXCJgKTtcbiAgICB9XG5cbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0Q29ycG9yYXRpb24oKS5uZXh0U3RhdGUgIT09IFwiU0FMRVwiKSB7XG4gICAgICAgIHJldHVybiBcIjBcIjtcbiAgICB9XG4gICAgY29uc3QgZXhwZWN0ZWRTYWxlc1ZvbHVtZSA9IGl0ZW0uc3RvcmVkIC8gMTA7XG4gICAgLy8gRG8gbm90IGNvbXBhcmUgd2l0aCAwLCB0aGVyZSBpcyBjYXNlIHdoZW4gaXRlbS5zdG9yZWQgaXMgYSB0aW55IG51bWJlci5cbiAgICBpZiAoZXhwZWN0ZWRTYWxlc1ZvbHVtZSA8IDFlLTUpIHtcbiAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbi5uYW1lLCBjaXR5KTtcbiAgICBsZXQgcHJvZHVjdE1hcmt1cDogbnVtYmVyO1xuICAgIGxldCBtYXJrdXBMaW1pdDogbnVtYmVyO1xuICAgIGxldCBpdGVtTXVsdGlwbGllcjogbnVtYmVyO1xuICAgIGxldCBtYXJrZXRQcmljZTogbnVtYmVyO1xuICAgIGlmIChpdGVtSXNQcm9kdWN0KSB7XG4gICAgICAgIHByb2R1Y3RNYXJrdXAgPSBhd2FpdCBnZXRQcm9kdWN0TWFya3VwKFxuICAgICAgICAgICAgZGl2aXNpb24sXG4gICAgICAgICAgICBpbmR1c3RyeURhdGEsXG4gICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIG9mZmljZVxuICAgICAgICApO1xuICAgICAgICBtYXJrdXBMaW1pdCA9IE1hdGgubWF4KGl0ZW0uZWZmZWN0aXZlUmF0aW5nLCAwLjAwMSkgLyBwcm9kdWN0TWFya3VwO1xuICAgICAgICBpdGVtTXVsdGlwbGllciA9IDAuNSAqIE1hdGgucG93KGl0ZW0uZWZmZWN0aXZlUmF0aW5nLCAwLjY1KTtcbiAgICAgICAgbWFya2V0UHJpY2UgPSBpdGVtLnByb2R1Y3Rpb25Db3N0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1hcmt1cExpbWl0ID0gaXRlbS5xdWFsaXR5IC8gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWxEYXRhKGl0ZW0ubmFtZSkuYmFzZU1hcmt1cDtcbiAgICAgICAgaXRlbU11bHRpcGxpZXIgPSBpdGVtLnF1YWxpdHkgKyAwLjAwMTtcbiAgICAgICAgbWFya2V0UHJpY2UgPSBpdGVtLm1hcmtldFByaWNlO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1c2luZXNzRmFjdG9yID0gZ2V0QnVzaW5lc3NGYWN0b3Iob2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iW0VtcGxveWVlUG9zaXRpb24uQlVTSU5FU1NdKTtcbiAgICBjb25zdCBhZHZlcnRpc2luZ0ZhY3RvciA9IGdldEFkdmVydGlzaW5nRmFjdG9ycyhkaXZpc2lvbi5hd2FyZW5lc3MsIGRpdmlzaW9uLnBvcHVsYXJpdHksIGluZHVzdHJ5RGF0YS5hZHZlcnRpc2luZ0ZhY3RvciEpWzBdO1xuICAgIGNvbnN0IG1hcmtldEZhY3RvciA9IGdldE1hcmtldEZhY3RvcihpdGVtLmRlbWFuZCEsIGl0ZW0uY29tcGV0aXRpb24hKTtcbiAgICBjb25zdCBzYWxlc011bHRpcGxpZXJzID1cbiAgICAgICAgaXRlbU11bHRpcGxpZXIgKlxuICAgICAgICBidXNpbmVzc0ZhY3RvciAqXG4gICAgICAgIGFkdmVydGlzaW5nRmFjdG9yICpcbiAgICAgICAgbWFya2V0RmFjdG9yICpcbiAgICAgICAgZ2V0VXBncmFkZUJlbmVmaXQoVXBncmFkZU5hbWUuQUJDX1NBTEVTX0JPVFMsIG5zLmNvcnBvcmF0aW9uLmdldFVwZ3JhZGVMZXZlbChVcGdyYWRlTmFtZS5BQkNfU0FMRVNfQk9UUykpICpcbiAgICAgICAgZ2V0UmVzZWFyY2hTYWxlc011bHRpcGxpZXIoZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zLCBkaXZpc2lvbi5uYW1lKSk7XG4gICAgY29uc3Qgb3B0aW1hbFByaWNlID0gbWFya3VwTGltaXQgLyBNYXRoLnNxcnQoZXhwZWN0ZWRTYWxlc1ZvbHVtZSAvIHNhbGVzTXVsdGlwbGllcnMpICsgbWFya2V0UHJpY2U7XG4gICAgLy8gbnMucHJpbnQoYGl0ZW06ICR7aXRlbS5uYW1lfSwgb3B0aW1hbFByaWNlOiAke25zLmZvcm1hdE51bWJlcihvcHRpbWFsUHJpY2UpfWApO1xuXG4gICAgcmV0dXJuIG9wdGltYWxQcmljZS50b1N0cmluZygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0T3B0aW1hbFNlbGxpbmdQcmljZUZvckV2ZXJ5dGhpbmcobnM6IE5TKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkubmV4dFN0YXRlICE9PSBcIlNBTEVcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbnMuY29ycG9yYXRpb24uaGFzVW5sb2NrKFVubG9ja05hbWUuTUFSS0VUX1JFU0VBUkNIX0RFTUFORClcbiAgICAgICAgfHwgIW5zLmNvcnBvcmF0aW9uLmhhc1VubG9jayhVbmxvY2tOYW1lLk1BUktFVF9EQVRBX0NPTVBFVElUSU9OKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IGxvb3BBbGxEaXZpc2lvbnNBbmRDaXRpZXNBc3luY0NhbGxiYWNrKG5zLCBhc3luYyAoZGl2aXNpb25OYW1lLCBjaXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZGl2aXNpb25OYW1lKTtcbiAgICAgICAgY29uc3QgaW5kdXN0cnlEYXRhID0gbnMuY29ycG9yYXRpb24uZ2V0SW5kdXN0cnlEYXRhKGRpdmlzaW9uLnR5cGUpO1xuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRpdmlzaW9uLnByb2R1Y3RzO1xuICAgICAgICBjb25zdCBoYXNNYXJrZXRUQTIgPSBucy5jb3Jwb3JhdGlvbi5oYXNSZXNlYXJjaGVkKGRpdmlzaW9uTmFtZSwgUmVzZWFyY2hOYW1lLk1BUktFVF9UQV8yKTtcbiAgICAgICAgaWYgKGluZHVzdHJ5RGF0YS5tYWtlc1Byb2R1Y3RzKSB7XG4gICAgICAgICAgICAvLyBTZXQgc2VsbCBwcmljZSBmb3IgcHJvZHVjdHNcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZHVjdE5hbWUgb2YgcHJvZHVjdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbnMuY29ycG9yYXRpb24uZ2V0UHJvZHVjdChkaXZpc2lvbk5hbWUsIGNpdHksIHByb2R1Y3ROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5kZXZlbG9wbWVudFByb2dyZXNzIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzTWFya2V0VEEyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNldFByb2R1Y3RNYXJrZXRUQTIoZGl2aXNpb25OYW1lLCBwcm9kdWN0TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpbWFsUHJpY2UgPSBhd2FpdCBnZXRPcHRpbWFsU2VsbGluZ1ByaWNlKG5zLCBkaXZpc2lvbiwgaW5kdXN0cnlEYXRhLCBjaXR5LCBwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VOdW1iZXIob3B0aW1hbFByaWNlKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uc2VsbFByb2R1Y3QoZGl2aXNpb25OYW1lLCBjaXR5LCBwcm9kdWN0TmFtZSwgXCJNQVhcIiwgb3B0aW1hbFByaWNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmR1c3RyeURhdGEubWFrZXNNYXRlcmlhbHMpIHtcbiAgICAgICAgICAgIC8vIFNldCBzZWxsIHByaWNlIGZvciBvdXRwdXQgbWF0ZXJpYWxzXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1hdGVyaWFsTmFtZSBvZiBpbmR1c3RyeURhdGEucHJvZHVjZWRNYXRlcmlhbHMhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc01hcmtldFRBMikge1xuICAgICAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi5zZXRNYXRlcmlhbE1hcmtldFRBMihkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpbWFsUHJpY2UgPSBhd2FpdCBnZXRPcHRpbWFsU2VsbGluZ1ByaWNlKG5zLCBkaXZpc2lvbiwgaW5kdXN0cnlEYXRhLCBjaXR5LCBtYXRlcmlhbCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlTnVtYmVyKG9wdGltYWxQcmljZSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLnNlbGxNYXRlcmlhbChkaXZpc2lvbk5hbWUsIGNpdHksIG1hdGVyaWFsTmFtZSwgXCJNQVhcIiwgb3B0aW1hbFByaWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoUG9pbnRHYWluUmF0ZShuczogTlMsIGRpdmlzaW9uTmFtZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWxHYWluUmF0ZSA9IDA7XG4gICAgZm9yIChjb25zdCBjaXR5IG9mIGNpdGllcykge1xuICAgICAgICBjb25zdCBvZmZpY2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRPZmZpY2UoZGl2aXNpb25OYW1lLCBjaXR5KTtcbiAgICAgICAgLy8gNCBzdGF0ZXM6IFBVUkNIQVNFLCBQUk9EVUNUSU9OLCBFWFBPUlQgYW5kIFNBTEVcbiAgICAgICAgdG90YWxHYWluUmF0ZSArPSA0ICogMC4wMDQgKiBNYXRoLnBvdyhvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JbRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVF0sIDAuNSlcbiAgICAgICAgICAgICogZ2V0VXBncmFkZUJlbmVmaXQoVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hULCBucy5jb3Jwb3JhdGlvbi5nZXRVcGdyYWRlTGV2ZWwoVXBncmFkZU5hbWUuUFJPSkVDVF9JTlNJR0hUKSlcbiAgICAgICAgICAgICogZ2V0UmVzZWFyY2hSUE11bHRpcGxpZXIoZ2V0RGl2aXNpb25SZXNlYXJjaGVzKG5zLCBkaXZpc2lvbk5hbWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsR2FpblJhdGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidXlCb29zdE1hdGVyaWFscyhuczogTlMsIGRpdmlzaW9uOiBEaXZpc2lvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIGluIHJvdW5kIDMrLiBJZiB3ZSBkb24ndCBoYXZlIG1vcmUgdGhhbiAxMGU5IGluIGZ1bmRzLCB0aGVyZSBtdXN0IGJlIHNvbWV0aGluZyB3cm9uZ1xuICAgIC8vIGluIHRoZSBzY3JpcHQuXG4gICAgY29uc3QgZnVuZHMgPSBucy5jb3Jwb3JhdGlvbi5nZXRDb3Jwb3JhdGlvbigpLmZ1bmRzO1xuICAgIGlmIChmdW5kcyA8IDEwZTkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5kcyBpcyB0b28gc21hbGwgdG8gYnV5IGJvb3N0IG1hdGVyaWFscy4gRnVuZHM6ICR7bnMuZm9ybWF0TnVtYmVyKGZ1bmRzKX0uYCk7XG4gICAgfVxuICAgIGNvbnN0IGluZHVzdHJ5RGF0YSA9IG5zLmNvcnBvcmF0aW9uLmdldEluZHVzdHJ5RGF0YShkaXZpc2lvbi50eXBlKTtcbiAgICBsZXQgcmVzZXJ2ZWRTcGFjZVJhdGlvID0gMC4yO1xuICAgIGNvbnN0IHJhdGlvID0gMC4xO1xuICAgIGlmIChpbmR1c3RyeURhdGEubWFrZXNQcm9kdWN0cykge1xuICAgICAgICByZXNlcnZlZFNwYWNlUmF0aW8gPSAwLjE7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgYXdhaXQgd2FpdEZvck5leHRUaW1lU3RhdGVIYXBwZW5zKG5zLCBDb3JwU3RhdGUuRVhQT1JUKTtcbiAgICAgICAgaWYgKGNvdW50ID09PSAyMCkge1xuICAgICAgICAgICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBgSXQgdGFrZXMgdG9vIG1hbnkgY3ljbGVzIHRvIGJ1eSBib29zdCBtYXRlcmlhbHMuIERpdmlzaW9uOiAke2RpdmlzaW9uLm5hbWV9LmA7XG4gICAgICAgICAgICBzaG93V2FybmluZyhucywgd2FybmluZ01lc3NhZ2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG9yZGVycyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJlaG91c2UgPSBucy5jb3Jwb3JhdGlvbi5nZXRXYXJlaG91c2UoZGl2aXNpb24ubmFtZSwgY2l0eSk7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVTcGFjZSA9IHdhcmVob3VzZS5zaXplIC0gd2FyZWhvdXNlLnNpemVVc2VkO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVNwYWNlIDwgd2FyZWhvdXNlLnNpemUgKiByZXNlcnZlZFNwYWNlUmF0aW8pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBlZmZlY3RpdmVSYXRpbyA9IHJhdGlvO1xuICAgICAgICAgICAgaWYgKChhdmFpbGFibGVTcGFjZSAvIHdhcmVob3VzZS5zaXplIDwgMC41ICYmIGRpdmlzaW9uLnR5cGUgPT09IEluZHVzdHJ5VHlwZS5BR1JJQ1VMVFVSRSlcbiAgICAgICAgICAgICAgICB8fCAoYXZhaWxhYmxlU3BhY2UgLyB3YXJlaG91c2Uuc2l6ZSA8IDAuNzVcbiAgICAgICAgICAgICAgICAgICAgJiYgKGRpdmlzaW9uLnR5cGUgPT09IEluZHVzdHJ5VHlwZS5DSEVNSUNBTCB8fCBkaXZpc2lvbi50eXBlID09PSBJbmR1c3RyeVR5cGUuVE9CQUNDTykpKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUmF0aW8gPSAwLjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBib29zdE1hdGVyaWFsUXVhbnRpdGllcyA9IGdldE9wdGltYWxCb29zdE1hdGVyaWFsUXVhbnRpdGllcyhpbmR1c3RyeURhdGEsIGF2YWlsYWJsZVNwYWNlICogZWZmZWN0aXZlUmF0aW8pO1xuICAgICAgICAgICAgb3JkZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNpdHk6IGNpdHksXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWxzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZS5BSV9DT1JFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuQUlfQ09SRVMpLnN0b3JlZCArIGJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzWzBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZS5IQVJEV0FSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuSEFSRFdBUkUpLnN0b3JlZCArIGJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzWzFdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZS5SRUFMX0VTVEFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBucy5jb3Jwb3JhdGlvbi5nZXRNYXRlcmlhbChkaXZpc2lvbi5uYW1lLCBjaXR5LCBNYXRlcmlhbE5hbWUuUkVBTF9FU1RBVEUpLnN0b3JlZCArIGJvb3N0TWF0ZXJpYWxRdWFudGl0aWVzWzJdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IE1hdGVyaWFsTmFtZS5ST0JPVFMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgTWF0ZXJpYWxOYW1lLlJPQk9UUykuc3RvcmVkICsgYm9vc3RNYXRlcmlhbFF1YW50aXRpZXNbM11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbmlzaCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaW5pc2gpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IHN0b2NrTWF0ZXJpYWxzKFxuICAgICAgICAgICAgbnMsXG4gICAgICAgICAgICBkaXZpc2lvbi5uYW1lLFxuICAgICAgICAgICAgb3JkZXJzLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICArK2NvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RNYXJrZXRQcmljZShcbiAgICBuczogTlMsXG4gICAgZGl2aXNpb246IERpdmlzaW9uLFxuICAgIGluZHVzdHJ5RGF0YTogQ29ycEluZHVzdHJ5RGF0YSxcbiAgICBjaXR5OiBDaXR5TmFtZVxuKTogbnVtYmVyIHtcbiAgICBsZXQgcHJvZHVjdE1hcmtldFByaWNlID0gMDtcbiAgICBmb3IgKGNvbnN0IFttYXRlcmlhbE5hbWUsIG1hdGVyaWFsQ29lZmZpY2llbnRdIG9mIGdldFJlY29yZEVudHJpZXMoaW5kdXN0cnlEYXRhLnJlcXVpcmVkTWF0ZXJpYWxzKSkge1xuICAgICAgICBjb25zdCBtYXRlcmlhbE1hcmtldFByaWNlID0gbnMuY29ycG9yYXRpb24uZ2V0TWF0ZXJpYWwoZGl2aXNpb24ubmFtZSwgY2l0eSwgbWF0ZXJpYWxOYW1lKS5tYXJrZXRQcmljZTtcbiAgICAgICAgcHJvZHVjdE1hcmtldFByaWNlICs9IG1hdGVyaWFsTWFya2V0UHJpY2UgKiBtYXRlcmlhbENvZWZmaWNpZW50O1xuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdE1hcmtldFByaWNlICogcHJvZHVjdE1hcmtldFByaWNlTXVsdGlwbGllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1bW15RGl2aXNpb25zKG5zOiBOUywgbnVtYmVyT2ZEaXZpc2lvbnM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRpdmlzaW9ucyA9IG5zLmNvcnBvcmF0aW9uLmdldENvcnBvcmF0aW9uKCkuZGl2aXNpb25zO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZEaXZpc2lvbnM7IGkrKykge1xuICAgICAgICBjb25zdCBkdW1teURpdmlzaW9uTmFtZSA9IGR1bW15RGl2aXNpb25OYW1lUHJlZml4ICsgaS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgaWYgKGRpdmlzaW9ucy5pbmNsdWRlcyhkdW1teURpdmlzaW9uTmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cGFuZEluZHVzdHJ5KEluZHVzdHJ5VHlwZS5SRVNUQVVSQU5ULCBkdW1teURpdmlzaW9uTmFtZSk7XG4gICAgICAgIGNvbnN0IGRpdmlzaW9uID0gbnMuY29ycG9yYXRpb24uZ2V0RGl2aXNpb24oZHVtbXlEaXZpc2lvbk5hbWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGNpdHkgb2YgY2l0aWVzKSB7XG4gICAgICAgICAgICBpZiAoIWRpdmlzaW9uLmNpdGllcy5pbmNsdWRlcyhjaXR5KSkge1xuICAgICAgICAgICAgICAgIG5zLmNvcnBvcmF0aW9uLmV4cGFuZENpdHkoZHVtbXlEaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFucy5jb3Jwb3JhdGlvbi5oYXNXYXJlaG91c2UoZHVtbXlEaXZpc2lvbk5hbWUsIGNpdHkpKSB7XG4gICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24ucHVyY2hhc2VXYXJlaG91c2UoZHVtbXlEaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gd2FpdEZvck9mZmVyKG5zOiBOUywgbnVtYmVyT2ZJbml0Q3ljbGVzOiBudW1iZXIsIG1heEFkZGl0aW9uYWxDeWNsZXM6IG51bWJlciwgZXhwZWN0ZWRPZmZlcjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgd2FpdEZvck51bWJlck9mQ3ljbGVzKG5zLCBudW1iZXJPZkluaXRDeWNsZXMpO1xuICAgIGxldCBvZmZlciA9IG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4QWRkaXRpb25hbEN5Y2xlczsgaSsrKSB7XG4gICAgICAgIGF3YWl0IHdhaXRGb3JOdW1iZXJPZkN5Y2xlcyhucywgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBPZmZlcjogJHtucy5mb3JtYXROdW1iZXIobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMpfWApO1xuICAgICAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMgPCBvZmZlciAqIDEuMDAxKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvZmZlciA9IG5zLmNvcnBvcmF0aW9uLmdldEludmVzdG1lbnRPZmZlcigpLmZ1bmRzO1xuICAgIH1cbiAgICBpZiAobnMuY29ycG9yYXRpb24uZ2V0SW52ZXN0bWVudE9mZmVyKCkuZnVuZHMgPCBleHBlY3RlZE9mZmVyKSB7XG4gICAgICAgIG5zLmFsZXJ0KFxuICAgICAgICAgICAgYE9mZmVyIGlzIGxvd2VyIHRoYW4gZXhwZWN0ZWQgdmFsdWUuIE9mZmVyOiAke25zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyl9YFxuICAgICAgICAgICAgKyBgLiBFeHBlY3RlZCB2YWx1ZTogJHtucy5mb3JtYXROdW1iZXIoZXhwZWN0ZWRPZmZlcil9LmBcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFXQSxTQUFTLGtCQUFrQixxQkFBb0M7QUFDL0QsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxhQUFhO0FBQ3RCO0FBQUEsRUFFSTtBQUFBLEVBRUE7QUFBQSxFQUVBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFJQTtBQUFBLEVBQ0E7QUFBQSxFQUVBO0FBQUEsRUFDQTtBQUFBLE9BQ0c7QUFDUCxTQUFTLHlCQUF5QjtBQUUzQixJQUFLLGVBQUwsa0JBQUtBLGtCQUFMO0FBQ0gsRUFBQUEsY0FBQSxpQkFBYztBQUNkLEVBQUFBLGNBQUEsY0FBVztBQUNYLEVBQUFBLGNBQUEsYUFBVTtBQUhGLFNBQUFBO0FBQUEsR0FBQTtBQU1MLE1BQU0sU0FBcUI7QUFBQSxFQUM5QixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQ2I7QUFFTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVk7QUFFNUMsTUFBTSxpQkFBaUI7QUFBQSxFQUMxQixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixh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QUN2QixVQUFJLENBQUMsU0FBUyxPQUFPLFNBQVMsSUFBSSxHQUFHO0FBQ2pDLFdBQUcsWUFBWSxXQUFXLG1CQUFtQixJQUFJO0FBQUEsTUFDckQ7QUFDQSxVQUFJLENBQUMsR0FBRyxZQUFZLGFBQWEsbUJBQW1CLElBQUksR0FBRztBQUN2RCxXQUFHLFlBQVksa0JBQWtCLG1CQUFtQixJQUFJO0FBQUEsTUFDNUQ7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKO0FBRUEsZUFBc0IsYUFBYSxJQUFRLG9CQUE0QixxQkFBNkIsZUFBc0M7QUFDdEksUUFBTSxzQkFBc0IsSUFBSSxrQkFBa0I7QUFDbEQsTUFBSSxRQUFRLEdBQUcsWUFBWSxtQkFBbUIsRUFBRTtBQUNoRCxXQUFTLElBQUksR0FBRyxJQUFJLHFCQUFxQixLQUFLO0FBQzFDLFVBQU0sc0JBQXNCLElBQUksQ0FBQztBQUNqQyxZQUFRLElBQUksVUFBVSxHQUFHLGFBQWEsR0FBRyxZQUFZLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ2xGLFFBQUksR0FBRyxZQUFZLG1CQUFtQixFQUFFLFFBQVEsUUFBUSxPQUFPO0FBQzNEO0FBQUEsSUFDSjtBQUNBLFlBQVEsR0FBRyxZQUFZLG1CQUFtQixFQUFFO0FBQUEsRUFDaEQ7QUFDQSxNQUFJLEdBQUcsWUFBWSxtQkFBbUIsRUFBRSxRQUFRLGVBQWU7QUFDM0QsT0FBRztBQUFBLE1BQ0MsOENBQThDLEdBQUcsYUFBYSxHQUFHLFlBQVksbUJBQW1CLEVBQUUsS0FBSyxDQUFDLHFCQUNqRixHQUFHLGFBQWEsYUFBYSxDQUFDO0FBQUEsSUFDekQ7QUFBQSxFQUNKO0FBQ0o7IiwKICAibmFtZXMiOiBbIkRpdmlzaW9uTmFtZSIsICJjaXRpZXMiLCAibWF0ZXJpYWxzIiwgImlzUHJvZHVjdCIsICJwcm9kdWN0TmFtZSIsICJ0b3RhbENyZWF0aW9uSm9iRmFjdG9ycyIsICJtYW5hZ2VtZW50UmF0aW8iLCAiYnVzaW5lc3NSYXRpbyJdCn0K
