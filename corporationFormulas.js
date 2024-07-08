import { CorpResearchesData } from "/data/CorpResearchesData";
import { CorpUpgradesData } from "/data/CorpUpgradesData";
import { Ceres } from "/libs/Ceres";
var CityName = /* @__PURE__ */ ((CityName2) => {
  CityName2["Aevum"] = "Aevum";
  CityName2["Chongqing"] = "Chongqing";
  CityName2["Sector12"] = "Sector-12";
  CityName2["NewTokyo"] = "New Tokyo";
  CityName2["Ishima"] = "Ishima";
  CityName2["Volhaven"] = "Volhaven";
  return CityName2;
})(CityName || {});
var CorpState = /* @__PURE__ */ ((CorpState2) => {
  CorpState2["START"] = "START";
  CorpState2["PURCHASE"] = "PURCHASE";
  CorpState2["PRODUCTION"] = "PRODUCTION";
  CorpState2["EXPORT"] = "EXPORT";
  CorpState2["SALE"] = "SALE";
  return CorpState2;
})(CorpState || {});
var MaterialName = /* @__PURE__ */ ((MaterialName2) => {
  MaterialName2["MINERALS"] = "Minerals";
  MaterialName2["ORE"] = "Ore";
  MaterialName2["WATER"] = "Water";
  MaterialName2["FOOD"] = "Food";
  MaterialName2["PLANTS"] = "Plants";
  MaterialName2["METAL"] = "Metal";
  MaterialName2["HARDWARE"] = "Hardware";
  MaterialName2["CHEMICALS"] = "Chemicals";
  MaterialName2["DRUGS"] = "Drugs";
  MaterialName2["ROBOTS"] = "Robots";
  MaterialName2["AI_CORES"] = "AI Cores";
  MaterialName2["REAL_ESTATE"] = "Real Estate";
  return MaterialName2;
})(MaterialName || {});
var UnlockName = /* @__PURE__ */ ((UnlockName2) => {
  UnlockName2["EXPORT"] = "Export";
  UnlockName2["SMART_SUPPLY"] = "Smart Supply";
  UnlockName2["MARKET_RESEARCH_DEMAND"] = "Market Research - Demand";
  UnlockName2["MARKET_DATA_COMPETITION"] = "Market Data - Competition";
  UnlockName2["VE_CHAIN"] = "VeChain";
  UnlockName2["SHADY_ACCOUNTING"] = "Shady Accounting";
  UnlockName2["GOVERNMENT_PARTNERSHIP"] = "Government Partnership";
  UnlockName2["WAREHOUSE_API"] = "Warehouse API";
  UnlockName2["OFFICE_API"] = "Office API";
  return UnlockName2;
})(UnlockName || {});
var UpgradeName = /* @__PURE__ */ ((UpgradeName2) => {
  UpgradeName2["SMART_FACTORIES"] = "Smart Factories";
  UpgradeName2["SMART_STORAGE"] = "Smart Storage";
  UpgradeName2["DREAM_SENSE"] = "DreamSense";
  UpgradeName2["WILSON_ANALYTICS"] = "Wilson Analytics";
  UpgradeName2["NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS"] = "Nuoptimal Nootropic Injector Implants";
  UpgradeName2["SPEECH_PROCESSOR_IMPLANTS"] = "Speech Processor Implants";
  UpgradeName2["NEURAL_ACCELERATORS"] = "Neural Accelerators";
  UpgradeName2["FOCUS_WIRES"] = "FocusWires";
  UpgradeName2["ABC_SALES_BOTS"] = "ABC SalesBots";
  UpgradeName2["PROJECT_INSIGHT"] = "Project Insight";
  return UpgradeName2;
})(UpgradeName || {});
var EmployeePosition = /* @__PURE__ */ ((EmployeePosition2) => {
  EmployeePosition2["OPERATIONS"] = "Operations";
  EmployeePosition2["ENGINEER"] = "Engineer";
  EmployeePosition2["BUSINESS"] = "Business";
  EmployeePosition2["MANAGEMENT"] = "Management";
  EmployeePosition2["RESEARCH_DEVELOPMENT"] = "Research & Development";
  EmployeePosition2["INTERN"] = "Intern";
  EmployeePosition2["UNASSIGNED"] = "Unassigned";
  return EmployeePosition2;
})(EmployeePosition || {});
var ResearchName = /* @__PURE__ */ ((ResearchName2) => {
  ResearchName2["HI_TECH_RND_LABORATORY"] = "Hi-Tech R&D Laboratory";
  ResearchName2["AUTO_BREW"] = "AutoBrew";
  ResearchName2["AUTO_PARTY"] = "AutoPartyManager";
  ResearchName2["AUTO_DRUG"] = "Automatic Drug Administration";
  ResearchName2["CPH4_INJECT"] = "CPH4 Injections";
  ResearchName2["DRONES"] = "Drones";
  ResearchName2["DRONES_ASSEMBLY"] = "Drones - Assembly";
  ResearchName2["DRONES_TRANSPORT"] = "Drones - Transport";
  ResearchName2["GO_JUICE"] = "Go-Juice";
  ResearchName2["HR_BUDDY_RECRUITMENT"] = "HRBuddy-Recruitment";
  ResearchName2["HR_BUDDY_TRAINING"] = "HRBuddy-Training";
  ResearchName2["MARKET_TA_1"] = "Market-TA.I";
  ResearchName2["MARKET_TA_2"] = "Market-TA.II";
  ResearchName2["OVERCLOCK"] = "Overclock";
  ResearchName2["SELF_CORRECTING_ASSEMBLERS"] = "Self-Correcting Assemblers";
  ResearchName2["STIMU"] = "Sti.mu";
  ResearchName2["UPGRADE_CAPACITY_1"] = "uPgrade: Capacity.I";
  ResearchName2["UPGRADE_CAPACITY_2"] = "uPgrade: Capacity.II";
  ResearchName2["UPGRADE_DASHBOARD"] = "uPgrade: Dashboard";
  ResearchName2["UPGRADE_FULCRUM"] = "uPgrade: Fulcrum";
  return ResearchName2;
})(ResearchName || {});
var IndustryType = /* @__PURE__ */ ((IndustryType2) => {
  IndustryType2["WATER_UTILITIES"] = "Water Utilities";
  IndustryType2["SPRING_WATER"] = "Spring Water";
  IndustryType2["AGRICULTURE"] = "Agriculture";
  IndustryType2["FISHING"] = "Fishing";
  IndustryType2["MINING"] = "Mining";
  IndustryType2["REFINERY"] = "Refinery";
  IndustryType2["RESTAURANT"] = "Restaurant";
  IndustryType2["TOBACCO"] = "Tobacco";
  IndustryType2["CHEMICAL"] = "Chemical";
  IndustryType2["PHARMACEUTICAL"] = "Pharmaceutical";
  IndustryType2["COMPUTER_HARDWARE"] = "Computer Hardware";
  IndustryType2["ROBOTICS"] = "Robotics";
  IndustryType2["SOFTWARE"] = "Software";
  IndustryType2["HEALTHCARE"] = "Healthcare";
  IndustryType2["REAL_ESTATE"] = "Real Estate";
  return IndustryType2;
})(IndustryType || {});
const warehouseUpgradeBasePrice = 1e9;
const officeUpgradeBasePrice = 4e9;
const advertUpgradeBasePrice = 1e9;
const productMarketPriceMultiplier = 5;
const numberSuffixList = ["", "k", "m", "b", "t", "q", "Q", "s", "S", "o", "n"];
const numberExpList = numberSuffixList.map((_, i) => parseFloat(`1e${i * 3}`));
const numberFormat = new Intl.NumberFormat(
  "en",
  {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  }
);
const basicFormatter = new Intl.NumberFormat(
  "en"
);
const exponentialFormatter = new Intl.NumberFormat(
  "en",
  {
    notation: "scientific"
  }
);
function formatNumber(value) {
  const fractionalDigits = 3;
  if (Number.isNaN(value)) {
    return "NaN";
  }
  const nAbs = Math.abs(value);
  if (nAbs === Infinity) {
    return value < 0 ? "-\u221E" : "\u221E";
  }
  if (nAbs < 1e3) {
    return basicFormatter.format(value);
  }
  if (nAbs >= 1e15) {
    return exponentialFormatter.format(value).toLocaleLowerCase();
  }
  let suffixIndex = Math.floor(Math.log10(nAbs) / 3);
  value /= numberExpList[suffixIndex];
  if (Math.abs(value).toFixed(fractionalDigits).length === fractionalDigits + 5 && numberSuffixList[suffixIndex + 1]) {
    suffixIndex += 1;
    value = value < 0 ? -1 : 1;
  }
  return numberFormat.format(value) + numberSuffixList[suffixIndex];
}
function getDivisionProductionMultiplier(industryData, boostMaterials) {
  const cityMultiplier = Math.pow(2e-3 * boostMaterials[0] + 1, industryData.aiCoreFactor) * Math.pow(2e-3 * boostMaterials[1] + 1, industryData.hardwareFactor) * Math.pow(2e-3 * boostMaterials[2] + 1, industryData.realEstateFactor) * Math.pow(2e-3 * boostMaterials[3] + 1, industryData.robotFactor);
  return Math.max(Math.pow(cityMultiplier, 0.73), 1) * 6;
}
function getGenericUpgradeCost(basePrice, priceMultiplier, fromLevel, toLevel) {
  return basePrice * ((Math.pow(priceMultiplier, toLevel) - Math.pow(priceMultiplier, fromLevel)) / (priceMultiplier - 1));
}
function getGenericMaxAffordableUpgradeLevel(basePrice, priceMultiplier, fromLevel, maxCost, roundingWithFloor = true) {
  const maxAffordableUpgradeLevel = Math.log(
    maxCost * (priceMultiplier - 1) / basePrice + Math.pow(priceMultiplier, fromLevel)
  ) / Math.log(priceMultiplier);
  if (roundingWithFloor) {
    return Math.floor(
      maxAffordableUpgradeLevel
    );
  }
  return maxAffordableUpgradeLevel;
}
function getUpgradeCost(upgradeName, fromLevel, toLevel) {
  const upgradeData = CorpUpgradesData[upgradeName];
  if (!upgradeData) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  return getGenericUpgradeCost(upgradeData.basePrice, upgradeData.priceMult, fromLevel, toLevel);
}
function getMaxAffordableUpgradeLevel(upgradeName, fromLevel, maxCost) {
  const upgradeData = CorpUpgradesData[upgradeName];
  if (!upgradeData) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  return getGenericMaxAffordableUpgradeLevel(upgradeData.basePrice, upgradeData.priceMult, fromLevel, maxCost);
}
function getUpgradeBenefit(upgradeName, upgradeLevel) {
  let value = upgradeName === "DreamSense" /* DREAM_SENSE */ ? 0 : 1;
  const benefit = CorpUpgradesData[upgradeName].benefit;
  if (!benefit) {
    throw new Error(`Cannot find data of upgrade: ${upgradeName}`);
  }
  value += benefit * upgradeLevel;
  return value;
}
function getUpgradeWarehouseCost(fromLevel, toLevel) {
  if (fromLevel < 1) {
    throw new Error("Invalid parameter");
  }
  return warehouseUpgradeBasePrice * ((Math.pow(1.07, toLevel + 1) - Math.pow(1.07, fromLevel + 1)) / 0.07);
}
function getMaxAffordableWarehouseLevel(fromLevel, maxCost) {
  if (fromLevel < 1) {
    throw new Error("Invalid parameter");
  }
  return Math.floor(
    Math.log(maxCost * 0.07 / warehouseUpgradeBasePrice + Math.pow(1.07, fromLevel + 1)) / Math.log(1.07) - 1
  );
}
function getWarehouseSize(smartStorageLevel, warehouseLevel, divisionResearches) {
  return warehouseLevel * 100 * (1 + CorpUpgradesData["Smart Storage" /* SMART_STORAGE */].benefit * smartStorageLevel) * getResearchStorageMultiplier(divisionResearches);
}
function getOfficeUpgradeCost(fromSize, toSize) {
  return getGenericUpgradeCost(officeUpgradeBasePrice, 1.09, fromSize / 3, toSize / 3);
}
function getMaxAffordableOfficeSize(fromSize, maxCost) {
  return Math.floor(
    3 * getGenericMaxAffordableUpgradeLevel(officeUpgradeBasePrice, 1.09, fromSize / 3, maxCost, false)
  );
}
function getAdVertCost(fromLevel, toLevel) {
  return getGenericUpgradeCost(advertUpgradeBasePrice, 1.06, fromLevel, toLevel);
}
function getMaxAffordableAdVertLevel(fromLevel, maxCost) {
  return getGenericMaxAffordableUpgradeLevel(advertUpgradeBasePrice, 1.06, fromLevel, maxCost);
}
function getResearchMultiplier(divisionResearches, researchDataKey) {
  let multiplier = 1;
  for (const [researchName, researchData] of Object.entries(CorpResearchesData)) {
    if (!divisionResearches[researchName]) {
      continue;
    }
    const researchDataValue = researchData[researchDataKey];
    if (!Number.isFinite(researchDataValue)) {
      throw new Error(`Invalid researchDataKey: ${researchDataKey}`);
    }
    multiplier *= researchDataValue;
  }
  return multiplier;
}
function getResearchSalesMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "salesMult");
}
function getResearchAdvertisingMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "advertisingMult");
}
function getResearchRPMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "sciResearchMult");
}
function getResearchStorageMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "storageMult");
}
function getResearchEmployeeCreativityMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeCreMult");
}
function getResearchEmployeeCharismaMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeChaMult");
}
function getResearchEmployeeIntelligenceMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "employeeIntMult");
}
function getResearchEmployeeEfficiencyMultiplier(divisionResearches) {
  return getResearchMultiplier(divisionResearches, "productionMult");
}
function getEffectWithFactors(n, expFac, linearFac) {
  if (expFac <= 0 || expFac >= 1) {
    console.warn(`Exponential factor is ${expFac}. This is not an intended value for it`);
  }
  if (linearFac < 1) {
    console.warn(`Linear factor is ${linearFac}. This is not an intended value for it`);
  }
  return Math.pow(n, expFac) + n / linearFac;
}
function getBusinessFactor(businessProduction) {
  return getEffectWithFactors(1 + businessProduction, 0.26, 1e4);
}
function getAdvertisingFactors(awareness, popularity, industryAdvertisingFactor) {
  const awarenessFactor = Math.pow(awareness + 1, industryAdvertisingFactor);
  const popularityFactor = Math.pow(popularity + 1, industryAdvertisingFactor);
  const ratioFactor = awareness === 0 ? 0.01 : Math.max((popularity + 1e-3) / awareness, 0.01);
  const salesFactor = Math.pow(awarenessFactor * popularityFactor * ratioFactor, 0.85);
  return [salesFactor, awarenessFactor, popularityFactor, ratioFactor];
}
function getMarketFactor(demand, competition) {
  return Math.max(0.1, demand * (100 - competition) / 100);
}
function getDivisionRawProduction(isProduct, employeesProduction, divisionProductionMultiplier, corporationUpgradeLevels, divisionResearches) {
  const operationEmployeesProduction = employeesProduction.operationsProduction;
  const engineerEmployeesProduction = employeesProduction.engineerProduction;
  const managementEmployeesProduction = employeesProduction.managementProduction;
  const totalEmployeesProduction = operationEmployeesProduction + engineerEmployeesProduction + managementEmployeesProduction;
  if (totalEmployeesProduction <= 0) {
    return 0;
  }
  const managementFactor = 1 + managementEmployeesProduction / (1.2 * totalEmployeesProduction);
  const employeesProductionMultiplier = (Math.pow(operationEmployeesProduction, 0.4) + Math.pow(engineerEmployeesProduction, 0.3)) * managementFactor;
  const balancingMultiplier = 0.05;
  let officeMultiplier;
  if (isProduct) {
    officeMultiplier = 0.5 * balancingMultiplier * employeesProductionMultiplier;
  } else {
    officeMultiplier = balancingMultiplier * employeesProductionMultiplier;
  }
  const upgradeMultiplier = 1 + corporationUpgradeLevels["Smart Factories" /* SMART_FACTORIES */] * CorpUpgradesData["Smart Factories" /* SMART_FACTORIES */].benefit;
  let researchMultiplier = 1;
  researchMultiplier *= (divisionResearches["Drones - Assembly" /* DRONES_ASSEMBLY */] ? CorpResearchesData["Drones - Assembly" /* DRONES_ASSEMBLY */].productionMult : 1) * (divisionResearches["Self-Correcting Assemblers" /* SELF_CORRECTING_ASSEMBLERS */] ? CorpResearchesData["Self-Correcting Assemblers" /* SELF_CORRECTING_ASSEMBLERS */].productionMult : 1);
  if (isProduct) {
    researchMultiplier *= divisionResearches["uPgrade: Fulcrum" /* UPGRADE_FULCRUM */] ? CorpResearchesData["uPgrade: Fulcrum" /* UPGRADE_FULCRUM */].productProductionMult : 1;
  }
  return officeMultiplier * divisionProductionMultiplier * upgradeMultiplier * researchMultiplier;
}
function getUpgradeAndResearchMultiplierForEmployeeStats(corporationUpgradeLevels, divisionResearches) {
  return {
    upgradeCreativityMultiplier: getUpgradeBenefit(
      "Nuoptimal Nootropic Injector Implants" /* NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS */,
      corporationUpgradeLevels["Nuoptimal Nootropic Injector Implants" /* NUOPTIMAL_NOOTROPIC_INJECTOR_IMPLANTS */]
    ),
    upgradeCharismaMultiplier: getUpgradeBenefit(
      "Speech Processor Implants" /* SPEECH_PROCESSOR_IMPLANTS */,
      corporationUpgradeLevels["Speech Processor Implants" /* SPEECH_PROCESSOR_IMPLANTS */]
    ),
    upgradeIntelligenceMultiplier: getUpgradeBenefit(
      "Neural Accelerators" /* NEURAL_ACCELERATORS */,
      corporationUpgradeLevels["Neural Accelerators" /* NEURAL_ACCELERATORS */]
    ),
    upgradeEfficiencyMultiplier: getUpgradeBenefit(
      "FocusWires" /* FOCUS_WIRES */,
      corporationUpgradeLevels["FocusWires" /* FOCUS_WIRES */]
    ),
    researchCreativityMultiplier: getResearchEmployeeCreativityMultiplier(divisionResearches),
    researchCharismaMultiplier: getResearchEmployeeCharismaMultiplier(divisionResearches),
    researchIntelligenceMultiplier: getResearchEmployeeIntelligenceMultiplier(divisionResearches),
    researchEfficiencyMultiplier: getResearchEmployeeEfficiencyMultiplier(divisionResearches)
  };
}
function getEmployeeProductionByJobs(office, corporationUpgradeLevels, divisionResearches) {
  const upgradeAndResearchMultiplier = getUpgradeAndResearchMultiplierForEmployeeStats(
    corporationUpgradeLevels,
    divisionResearches
  );
  const effectiveIntelligence = office.avgIntelligence * upgradeAndResearchMultiplier.upgradeIntelligenceMultiplier * upgradeAndResearchMultiplier.researchIntelligenceMultiplier;
  const effectiveCharisma = office.avgCharisma * upgradeAndResearchMultiplier.upgradeCharismaMultiplier * upgradeAndResearchMultiplier.researchCharismaMultiplier;
  const effectiveCreativity = office.avgCreativity * upgradeAndResearchMultiplier.upgradeCreativityMultiplier * upgradeAndResearchMultiplier.researchCreativityMultiplier;
  const effectiveEfficiency = office.avgEfficiency * upgradeAndResearchMultiplier.upgradeEfficiencyMultiplier * upgradeAndResearchMultiplier.researchEfficiencyMultiplier;
  const productionBase = office.avgMorale * office.avgEnergy * 1e-4;
  const totalNumberOfEmployees = office.employeeJobs.operations + office.employeeJobs.engineer + office.employeeJobs.business + office.employeeJobs.management + office.employeeJobs.researchAndDevelopment + office.employeeJobs.intern + office.employeeJobs.unassigned;
  const exp = office.totalExperience / totalNumberOfEmployees;
  const operationsProduction = office.employeeJobs.operations * productionBase * (0.6 * effectiveIntelligence + 0.1 * effectiveCharisma + exp + 0.5 * effectiveCreativity + effectiveEfficiency);
  const engineerProduction = office.employeeJobs.engineer * productionBase * (effectiveIntelligence + 0.1 * effectiveCharisma + 1.5 * exp + effectiveEfficiency);
  const businessProduction = office.employeeJobs.business * productionBase * (0.4 * effectiveIntelligence + effectiveCharisma + 0.5 * exp);
  const managementProduction = office.employeeJobs.management * productionBase * (2 * effectiveCharisma + exp + 0.2 * effectiveCreativity + 0.7 * effectiveEfficiency);
  const researchAndDevelopmentProduction = office.employeeJobs.researchAndDevelopment * productionBase * (1.5 * effectiveIntelligence + 0.8 * exp + effectiveCreativity + 0.5 * effectiveEfficiency);
  return {
    operationsProduction,
    engineerProduction,
    businessProduction,
    managementProduction,
    researchAndDevelopmentProduction
  };
}
async function calculateEmployeeStats(office, corporationUpgradeLevels, divisionResearches) {
  let numberOfJobsHavingEmployees = 0;
  for (const [jobName, numberOfEmployees] of Object.entries(office.employeeJobs)) {
    if (jobName === "Intern" || jobName === "Unassigned" || numberOfEmployees === 0) {
      continue;
    }
    ++numberOfJobsHavingEmployees;
  }
  if (numberOfJobsHavingEmployees <= 3) {
    throw new Error("We need at least 4 jobs having 1 employee at the minimum");
  }
  const upgradeAndResearchMultiplier = getUpgradeAndResearchMultiplierForEmployeeStats(
    corporationUpgradeLevels,
    divisionResearches
  );
  const productionBase = office.avgMorale * office.avgEnergy * 1e-4;
  const exp = office.totalExperience / office.numEmployees;
  const f1 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Operations" /* OPERATIONS */] * productionBase * (0.6 * effectiveIntelligence + 0.1 * effectiveCharisma + exp + 0.5 * effectiveCreativity + effectiveEfficiency) - office.employeeProductionByJob["Operations" /* OPERATIONS */];
  };
  const f2 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Engineer" /* ENGINEER */] * productionBase * (effectiveIntelligence + 0.1 * effectiveCharisma + 1.5 * exp + effectiveEfficiency) - office.employeeProductionByJob["Engineer" /* ENGINEER */];
  };
  const f3 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Business" /* BUSINESS */] * productionBase * (0.4 * effectiveIntelligence + effectiveCharisma + 0.5 * exp) - office.employeeProductionByJob["Business" /* BUSINESS */];
  };
  const f4 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Management" /* MANAGEMENT */] * productionBase * (2 * effectiveCharisma + exp + 0.2 * effectiveCreativity + 0.7 * effectiveEfficiency) - office.employeeProductionByJob["Management" /* MANAGEMENT */];
  };
  const f5 = function([effectiveCreativity, effectiveCharisma, effectiveIntelligence, effectiveEfficiency]) {
    return office.employeeJobs["Research & Development" /* RESEARCH_DEVELOPMENT */] * productionBase * (1.5 * effectiveIntelligence + 0.8 * exp + effectiveCreativity + 0.5 * effectiveEfficiency) - office.employeeProductionByJob["Research & Development" /* RESEARCH_DEVELOPMENT */];
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
    const guess = [75, 75, 75, 75];
    solverResult = solver.solve(guess);
    solver.remove();
  });
  if (!solverResult.success) {
    console.error(solverResult);
    throw new Error(`ERROR: Cannot find hidden stats of employee. Office: ${JSON.stringify(office)}`);
  }
  return {
    avgCreativity: solverResult.x[0] / (upgradeAndResearchMultiplier.upgradeCreativityMultiplier * upgradeAndResearchMultiplier.researchCreativityMultiplier),
    avgCharisma: solverResult.x[1] / (upgradeAndResearchMultiplier.upgradeCharismaMultiplier * upgradeAndResearchMultiplier.researchCharismaMultiplier),
    avgIntelligence: solverResult.x[2] / (upgradeAndResearchMultiplier.upgradeIntelligenceMultiplier * upgradeAndResearchMultiplier.researchIntelligenceMultiplier),
    avgEfficiency: solverResult.x[3] / (upgradeAndResearchMultiplier.upgradeEfficiencyMultiplier * upgradeAndResearchMultiplier.researchEfficiencyMultiplier)
  };
}
export {
  CityName,
  CorpState,
  EmployeePosition,
  IndustryType,
  MaterialName,
  ResearchName,
  UnlockName,
  UpgradeName,
  calculateEmployeeStats,
  formatNumber,
  getAdVertCost,
  getAdvertisingFactors,
  getBusinessFactor,
  getDivisionProductionMultiplier,
  getDivisionRawProduction,
  getEmployeeProductionByJobs,
  getMarketFactor,
  getMaxAffordableAdVertLevel,
  getMaxAffordableOfficeSize,
  getMaxAffordableUpgradeLevel,
  getMaxAffordableWarehouseLevel,
  getOfficeUpgradeCost,
  getResearchAdvertisingMultiplier,
  getResearchEmployeeCharismaMultiplier,
  getResearchEmployeeCreativityMultiplier,
  getResearchEmployeeEfficiencyMultiplier,
  getResearchEmployeeIntelligenceMultiplier,
  getResearchMultiplier,
  getResearchRPMultiplier,
  getResearchSalesMultiplier,
  getResearchStorageMultiplier,
  getUpgradeBenefit,
  getUpgradeCost,
  getUpgradeWarehouseCost,
  getWarehouseSize,
  productMarketPriceMultiplier
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uRm9ybXVsYXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogRG8gTk9UIHVzZSBOUyBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUncyBmdW5jdGlvbnNcbiAqL1xuXG5pbXBvcnQgeyBDb3JwSW5kdXN0cnlEYXRhLCBDb3JwTWF0ZXJpYWxOYW1lLCBDb3JwVXBncmFkZU5hbWUgfSBmcm9tIFwiQG5zXCI7XG5pbXBvcnQgeyBDb3JwUmVzZWFyY2hlc0RhdGEgfSBmcm9tIFwiL2RhdGEvQ29ycFJlc2VhcmNoZXNEYXRhXCI7XG5pbXBvcnQgeyBDb3JwVXBncmFkZXNEYXRhIH0gZnJvbSBcIi9kYXRhL0NvcnBVcGdyYWRlc0RhdGFcIjtcbmltcG9ydCB7IENlcmVzIH0gZnJvbSBcIi9saWJzL0NlcmVzXCI7XG5cbi8vIERvIE5PVCByZW5hbWUuIFRoaXMgZGVmaW5pdGlvbiBpcyBjb3BpZWQgZnJvbSBOZXRzY3JpcHREZWZpbml0aW9ucy5kLnRzXG5leHBvcnQgZW51bSBDaXR5TmFtZSB7XG4gICAgQWV2dW0gPSBcIkFldnVtXCIsXG4gICAgQ2hvbmdxaW5nID0gXCJDaG9uZ3FpbmdcIixcbiAgICBTZWN0b3IxMiA9IFwiU2VjdG9yLTEyXCIsXG4gICAgTmV3VG9reW8gPSBcIk5ldyBUb2t5b1wiLFxuICAgIElzaGltYSA9IFwiSXNoaW1hXCIsXG4gICAgVm9saGF2ZW4gPSBcIlZvbGhhdmVuXCIsXG59XG5cbmV4cG9ydCBlbnVtIENvcnBTdGF0ZSB7XG4gICAgU1RBUlQgPSBcIlNUQVJUXCIsXG4gICAgUFVSQ0hBU0UgPSBcIlBVUkNIQVNFXCIsXG4gICAgUFJPRFVDVElPTiA9IFwiUFJPRFVDVElPTlwiLFxuICAgIEVYUE9SVCA9IFwiRVhQT1JUXCIsXG4gICAgU0FMRSA9IFwiU0FMRVwiXG59XG5cbmV4cG9ydCBlbnVtIE1hdGVyaWFsTmFtZSB7XG4gICAgTUlORVJBTFMgPSBcIk1pbmVyYWxzXCIsXG4gICAgT1JFID0gXCJPcmVcIixcbiAgICBXQVRFUiA9IFwiV2F0ZXJcIixcbiAgICBGT09EID0gXCJGb29kXCIsXG4gICAgUExBTlRTID0gXCJQbGFudHNcIixcbiAgICBNRVRBTCA9IFwiTWV0YWxcIixcbiAgICBIQVJEV0FSRSA9IFwiSGFyZHdhcmVcIixcbiAgICBDSEVNSUNBTFMgPSBcIkNoZW1pY2Fsc1wiLFxuICAgIERSVUdTID0gXCJEcnVnc1wiLFxuICAgIFJPQk9UUyA9IFwiUm9ib3RzXCIsXG4gICAgQUlfQ09SRVMgPSBcIkFJIENvcmVzXCIsXG4gICAgUkVBTF9FU1RBVEUgPSBcIlJlYWwgRXN0YXRlXCJcbn1cblxuZXhwb3J0IGVudW0gVW5sb2NrTmFtZSB7XG4gICAgRVhQT1JUID0gXCJFeHBvcnRcIixcbiAgICBTTUFSVF9TVVBQTFkgPSBcIlNtYXJ0IFN1cHBseVwiLFxuICAgIE1BUktFVF9SRVNFQVJDSF9ERU1BTkQgPSBcIk1hcmtldCBSZXNlYXJjaCAtIERlbWFuZFwiLFxuICAgIE1BUktFVF9EQVRBX0NPTVBFVElUSU9OID0gXCJNYXJrZXQgRGF0YSAtIENvbXBldGl0aW9uXCIsXG4gICAgVkVfQ0hBSU4gPSBcIlZlQ2hhaW5cIixcbiAgICBTSEFEWV9BQ0NPVU5USU5HID0gXCJTaGFkeSBBY2NvdW50aW5nXCIsXG4gICAgR09WRVJOTUVOVF9QQVJUTkVSU0hJUCA9IFwiR292ZXJubWVudCBQYXJ0bmVyc2hpcFwiLFxuICAgIFdBUkVIT1VTRV9BUEkgPSBcIldhcmVob3VzZSBBUElcIixcbiAgICBPRkZJQ0VfQVBJID0gXCJPZmZpY2UgQVBJXCJcbn1cblxuZXhwb3J0IGVudW0gVXBncmFkZU5hbWUge1xuICAgIFNNQVJUX0ZBQ1RPUklFUyA9IFwiU21hcnQgRmFjdG9yaWVzXCIsXG4gICAgU01BUlRfU1RPUkFHRSA9IFwiU21hcnQgU3RvcmFnZVwiLFxuICAgIERSRUFNX1NFTlNFID0gXCJEcmVhbVNlbnNlXCIsXG4gICAgV0lMU09OX0FOQUxZVElDUyA9IFwiV2lsc29uIEFuYWx5dGljc1wiLFxuICAgIE5VT1BUSU1BTF9OT09UUk9QSUNfSU5KRUNUT1JfSU1QTEFOVFMgPSBcIk51b3B0aW1hbCBOb290cm9waWMgSW5qZWN0b3IgSW1wbGFudHNcIixcbiAgICBTUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTID0gXCJTcGVlY2ggUHJvY2Vzc29yIEltcGxhbnRzXCIsXG4gICAgTkVVUkFMX0FDQ0VMRVJBVE9SUyA9IFwiTmV1cmFsIEFjY2VsZXJhdG9yc1wiLFxuICAgIEZPQ1VTX1dJUkVTID0gXCJGb2N1c1dpcmVzXCIsXG4gICAgQUJDX1NBTEVTX0JPVFMgPSBcIkFCQyBTYWxlc0JvdHNcIixcbiAgICBQUk9KRUNUX0lOU0lHSFQgPSBcIlByb2plY3QgSW5zaWdodFwiXG59XG5cbmV4cG9ydCBlbnVtIEVtcGxveWVlUG9zaXRpb24ge1xuICAgIE9QRVJBVElPTlMgPSBcIk9wZXJhdGlvbnNcIixcbiAgICBFTkdJTkVFUiA9IFwiRW5naW5lZXJcIixcbiAgICBCVVNJTkVTUyA9IFwiQnVzaW5lc3NcIixcbiAgICBNQU5BR0VNRU5UID0gXCJNYW5hZ2VtZW50XCIsXG4gICAgUkVTRUFSQ0hfREVWRUxPUE1FTlQgPSBcIlJlc2VhcmNoICYgRGV2ZWxvcG1lbnRcIixcbiAgICBJTlRFUk4gPSBcIkludGVyblwiLFxuICAgIFVOQVNTSUdORUQgPSBcIlVuYXNzaWduZWRcIlxufVxuXG5leHBvcnQgZW51bSBSZXNlYXJjaE5hbWUge1xuICAgIEhJX1RFQ0hfUk5EX0xBQk9SQVRPUlkgPSBcIkhpLVRlY2ggUiZEIExhYm9yYXRvcnlcIixcbiAgICBBVVRPX0JSRVcgPSBcIkF1dG9CcmV3XCIsXG4gICAgQVVUT19QQVJUWSA9IFwiQXV0b1BhcnR5TWFuYWdlclwiLFxuICAgIEFVVE9fRFJVRyA9IFwiQXV0b21hdGljIERydWcgQWRtaW5pc3RyYXRpb25cIixcbiAgICBDUEg0X0lOSkVDVCA9IFwiQ1BINCBJbmplY3Rpb25zXCIsXG4gICAgRFJPTkVTID0gXCJEcm9uZXNcIixcbiAgICBEUk9ORVNfQVNTRU1CTFkgPSBcIkRyb25lcyAtIEFzc2VtYmx5XCIsXG4gICAgRFJPTkVTX1RSQU5TUE9SVCA9IFwiRHJvbmVzIC0gVHJhbnNwb3J0XCIsXG4gICAgR09fSlVJQ0UgPSBcIkdvLUp1aWNlXCIsXG4gICAgSFJfQlVERFlfUkVDUlVJVE1FTlQgPSBcIkhSQnVkZHktUmVjcnVpdG1lbnRcIixcbiAgICBIUl9CVUREWV9UUkFJTklORyA9IFwiSFJCdWRkeS1UcmFpbmluZ1wiLFxuICAgIE1BUktFVF9UQV8xID0gXCJNYXJrZXQtVEEuSVwiLFxuICAgIE1BUktFVF9UQV8yID0gXCJNYXJrZXQtVEEuSUlcIixcbiAgICBPVkVSQ0xPQ0sgPSBcIk92ZXJjbG9ja1wiLFxuICAgIFNFTEZfQ09SUkVDVElOR19BU1NFTUJMRVJTID0gXCJTZWxmLUNvcnJlY3RpbmcgQXNzZW1ibGVyc1wiLFxuICAgIFNUSU1VID0gXCJTdGkubXVcIixcbiAgICBVUEdSQURFX0NBUEFDSVRZXzEgPSBcInVQZ3JhZGU6IENhcGFjaXR5LklcIixcbiAgICBVUEdSQURFX0NBUEFDSVRZXzIgPSBcInVQZ3JhZGU6IENhcGFjaXR5LklJXCIsXG4gICAgVVBHUkFERV9EQVNIQk9BUkQgPSBcInVQZ3JhZGU6IERhc2hib2FyZFwiLFxuICAgIFVQR1JBREVfRlVMQ1JVTSA9IFwidVBncmFkZTogRnVsY3J1bVwiLFxufVxuXG5leHBvcnQgZW51bSBJbmR1c3RyeVR5cGUge1xuICAgIFdBVEVSX1VUSUxJVElFUyA9IFwiV2F0ZXIgVXRpbGl0aWVzXCIsXG4gICAgU1BSSU5HX1dBVEVSID0gXCJTcHJpbmcgV2F0ZXJcIixcbiAgICBBR1JJQ1VMVFVSRSA9IFwiQWdyaWN1bHR1cmVcIixcbiAgICBGSVNISU5HID0gXCJGaXNoaW5nXCIsXG4gICAgTUlOSU5HID0gXCJNaW5pbmdcIixcbiAgICBSRUZJTkVSWSA9IFwiUmVmaW5lcnlcIixcbiAgICBSRVNUQVVSQU5UID0gXCJSZXN0YXVyYW50XCIsXG4gICAgVE9CQUNDTyA9IFwiVG9iYWNjb1wiLFxuICAgIENIRU1JQ0FMID0gXCJDaGVtaWNhbFwiLFxuICAgIFBIQVJNQUNFVVRJQ0FMID0gXCJQaGFybWFjZXV0aWNhbFwiLFxuICAgIENPTVBVVEVSX0hBUkRXQVJFID0gXCJDb21wdXRlciBIYXJkd2FyZVwiLFxuICAgIFJPQk9USUNTID0gXCJSb2JvdGljc1wiLFxuICAgIFNPRlRXQVJFID0gXCJTb2Z0d2FyZVwiLFxuICAgIEhFQUxUSENBUkUgPSBcIkhlYWx0aGNhcmVcIixcbiAgICBSRUFMX0VTVEFURSA9IFwiUmVhbCBFc3RhdGVcIixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPZmZpY2VTZXR1cEpvYnMge1xuICAgIE9wZXJhdGlvbnM6IG51bWJlcjtcbiAgICBFbmdpbmVlcjogbnVtYmVyO1xuICAgIEJ1c2luZXNzOiBudW1iZXI7XG4gICAgTWFuYWdlbWVudDogbnVtYmVyO1xuICAgIFwiUmVzZWFyY2ggJiBEZXZlbG9wbWVudFwiOiBudW1iZXI7XG4gICAgSW50ZXJuPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9mZmljZVNldHVwIHtcbiAgICBjaXR5OiBDaXR5TmFtZTtcbiAgICBzaXplOiBudW1iZXI7XG4gICAgam9iczogT2ZmaWNlU2V0dXBKb2JzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2VhcmNoUHJpb3JpdHkge1xuICAgIHJlc2VhcmNoOiBSZXNlYXJjaE5hbWU7XG4gICAgY29zdE11bHRpcGxpZXI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXRlcmlhbE9yZGVyIHtcbiAgICBjaXR5OiBDaXR5TmFtZTtcbiAgICBtYXRlcmlhbHM6IHtcbiAgICAgICAgbmFtZTogTWF0ZXJpYWxOYW1lO1xuICAgICAgICBjb3VudDogbnVtYmVyO1xuICAgIH1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRSb3V0ZSB7XG4gICAgbWF0ZXJpYWw6IENvcnBNYXRlcmlhbE5hbWU7XG4gICAgc291cmNlQ2l0eTogQ2l0eU5hbWU7XG4gICAgc291cmNlRGl2aXNpb246IHN0cmluZztcbiAgICBkZXN0aW5hdGlvbkRpdmlzaW9uOiBzdHJpbmc7XG4gICAgZGVzdGluYXRpb25DaXR5OiBDaXR5TmFtZTtcbiAgICBkZXN0aW5hdGlvbkFtb3VudDogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBDb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHMgPSBSZWNvcmQ8VXBncmFkZU5hbWUsIG51bWJlcj47XG5leHBvcnQgdHlwZSBEaXZpc2lvblJlc2VhcmNoZXMgPSBSZWNvcmQ8UmVzZWFyY2hOYW1lLCBib29sZWFuPjtcblxuZXhwb3J0IGludGVyZmFjZSBDZXJlc1NvbHZlclJlc3VsdCB7XG4gICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgeDogbnVtYmVyW107XG4gICAgcmVwb3J0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHdhcmVob3VzZVVwZ3JhZGVCYXNlUHJpY2UgPSAxZTk7XG5jb25zdCBvZmZpY2VVcGdyYWRlQmFzZVByaWNlID0gNGU5O1xuY29uc3QgYWR2ZXJ0VXBncmFkZUJhc2VQcmljZSA9IDFlOTtcbmV4cG9ydCBjb25zdCBwcm9kdWN0TWFya2V0UHJpY2VNdWx0aXBsaWVyID0gNTtcblxuY29uc3QgbnVtYmVyU3VmZml4TGlzdCA9IFtcIlwiLCBcImtcIiwgXCJtXCIsIFwiYlwiLCBcInRcIiwgXCJxXCIsIFwiUVwiLCBcInNcIiwgXCJTXCIsIFwib1wiLCBcIm5cIl07XG4vLyBFeHBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIGVhY2ggc3VmZml4XG5jb25zdCBudW1iZXJFeHBMaXN0ID0gbnVtYmVyU3VmZml4TGlzdC5tYXAoKF8sIGkpID0+IHBhcnNlRmxvYXQoYDFlJHtpICogM31gKSk7XG5cbmNvbnN0IG51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICBcImVuXCIsXG4gICAge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogM1xuICAgIH1cbik7XG5jb25zdCBiYXNpY0Zvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICBcImVuXCJcbik7XG5jb25zdCBleHBvbmVudGlhbEZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcbiAgICBcImVuXCIsXG4gICAge1xuICAgICAgICBub3RhdGlvbjogXCJzY2llbnRpZmljXCJcbiAgICB9XG4pO1xuXG4vKipcbiAqIHNyY1xcdWlcXGZvcm1hdE51bWJlci50c1xuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZyYWN0aW9uYWxEaWdpdHMgPSAzO1xuICAgIC8vIE5hTiBkb2VzIG5vdCBnZXQgZm9ybWF0dGVkXG4gICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiTmFOXCI7XG4gICAgfVxuICAgIGNvbnN0IG5BYnMgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciBJbmZpbml0aWVzXG4gICAgaWYgKG5BYnMgPT09IEluZmluaXR5KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgPyBcIi1cdTIyMUVcIiA6IFwiXHUyMjFFXCI7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgcmV0dXJuIGZvciBub24tc3VmZml4XG4gICAgaWYgKG5BYnMgPCAxMDAwKSB7XG4gICAgICAgIHJldHVybiBiYXNpY0Zvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8vIEV4cG9uZW50aWFsIGZvcm1cbiAgICBpZiAobkFicyA+PSAxZTE1KSB7XG4gICAgICAgIHJldHVybiBleHBvbmVudGlhbEZvcm1hdHRlci5mb3JtYXQodmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHN1ZmZpeCBpbmRleC4gMTAwMCA9IDEwXjNcbiAgICBsZXQgc3VmZml4SW5kZXggPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobkFicykgLyAzKTtcblxuICAgIHZhbHVlIC89IG51bWJlckV4cExpc3Rbc3VmZml4SW5kZXhdO1xuICAgIC8vIERldGVjdCBpZiBudW1iZXIgcm91bmRzIHRvIDEwMDAuMDAwIChiYXNlZCBvbiBudW1iZXIgb2YgZGlnaXRzIGdpdmVuKVxuICAgIGlmIChNYXRoLmFicyh2YWx1ZSkudG9GaXhlZChmcmFjdGlvbmFsRGlnaXRzKS5sZW5ndGggPT09IGZyYWN0aW9uYWxEaWdpdHMgKyA1ICYmIG51bWJlclN1ZmZpeExpc3Rbc3VmZml4SW5kZXggKyAxXSkge1xuICAgICAgICBzdWZmaXhJbmRleCArPSAxO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlIDwgMCA/IC0xIDogMTtcbiAgICB9XG4gICAgcmV0dXJuIG51bWJlckZvcm1hdC5mb3JtYXQodmFsdWUpICsgbnVtYmVyU3VmZml4TGlzdFtzdWZmaXhJbmRleF07XG59XG5cbi8qKlxuICogc3JjXFxDb3Jwb3JhdGlvblxcRGl2aXNpb24udHM6IGNhbGN1bGF0ZVByb2R1Y3Rpb25GYWN0b3JzKClcbiAqIFRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IDYgY2l0aWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGJvb3N0IG1hdGVyaWFscycgdW5pdHMgaW4gdGhlaXIgd2FyZWhvdXNlcy5cbiAqXG4gKiBAcGFyYW0gaW5kdXN0cnlEYXRhXG4gKiBAcGFyYW0gYm9vc3RNYXRlcmlhbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uUHJvZHVjdGlvbk11bHRpcGxpZXIoaW5kdXN0cnlEYXRhOiBDb3JwSW5kdXN0cnlEYXRhLCBib29zdE1hdGVyaWFsczogbnVtYmVyW10pIHtcbiAgICBjb25zdCBjaXR5TXVsdGlwbGllciA9XG4gICAgICAgIE1hdGgucG93KDAuMDAyICogYm9vc3RNYXRlcmlhbHNbMF0gKyAxLCBpbmR1c3RyeURhdGEuYWlDb3JlRmFjdG9yISkgKlxuICAgICAgICBNYXRoLnBvdygwLjAwMiAqIGJvb3N0TWF0ZXJpYWxzWzFdICsgMSwgaW5kdXN0cnlEYXRhLmhhcmR3YXJlRmFjdG9yISkgKlxuICAgICAgICBNYXRoLnBvdygwLjAwMiAqIGJvb3N0TWF0ZXJpYWxzWzJdICsgMSwgaW5kdXN0cnlEYXRhLnJlYWxFc3RhdGVGYWN0b3IhKSAqXG4gICAgICAgIE1hdGgucG93KDAuMDAyICogYm9vc3RNYXRlcmlhbHNbM10gKyAxLCBpbmR1c3RyeURhdGEucm9ib3RGYWN0b3IhKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5wb3coY2l0eU11bHRpcGxpZXIsIDAuNzMpLCAxKSAqIDY7XG59XG5cbmZ1bmN0aW9uIGdldEdlbmVyaWNVcGdyYWRlQ29zdChiYXNlUHJpY2U6IG51bWJlciwgcHJpY2VNdWx0aXBsaWVyOiBudW1iZXIsIGZyb21MZXZlbDogbnVtYmVyLCB0b0xldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBiYXNlUHJpY2UgKiAoKE1hdGgucG93KHByaWNlTXVsdGlwbGllciwgdG9MZXZlbCkgLSBNYXRoLnBvdyhwcmljZU11bHRpcGxpZXIsIGZyb21MZXZlbCkpIC8gKHByaWNlTXVsdGlwbGllciAtIDEpKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2VuZXJpY01heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwoXG4gICAgYmFzZVByaWNlOiBudW1iZXIsXG4gICAgcHJpY2VNdWx0aXBsaWVyOiBudW1iZXIsXG4gICAgZnJvbUxldmVsOiBudW1iZXIsXG4gICAgbWF4Q29zdDogbnVtYmVyLFxuICAgIHJvdW5kaW5nV2l0aEZsb29yID0gdHJ1ZSk6IG51bWJlciB7XG4gICAgY29uc3QgbWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbCA9IE1hdGgubG9nKFxuICAgICAgICBtYXhDb3N0ICogKHByaWNlTXVsdGlwbGllciAtIDEpIC8gYmFzZVByaWNlICsgTWF0aC5wb3cocHJpY2VNdWx0aXBsaWVyLCBmcm9tTGV2ZWwpXG4gICAgKSAvIE1hdGgubG9nKHByaWNlTXVsdGlwbGllcik7XG4gICAgaWYgKHJvdW5kaW5nV2l0aEZsb29yKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKFxuICAgICAgICAgICAgbWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbFxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbWF4QWZmb3JkYWJsZVVwZ3JhZGVMZXZlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVDb3N0KHVwZ3JhZGVOYW1lOiBDb3JwVXBncmFkZU5hbWUsIGZyb21MZXZlbDogbnVtYmVyLCB0b0xldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHVwZ3JhZGVEYXRhID0gQ29ycFVwZ3JhZGVzRGF0YVt1cGdyYWRlTmFtZV07XG4gICAgaWYgKCF1cGdyYWRlRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBmaW5kIGRhdGEgb2YgdXBncmFkZTogJHt1cGdyYWRlTmFtZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEdlbmVyaWNVcGdyYWRlQ29zdCh1cGdyYWRlRGF0YS5iYXNlUHJpY2UsIHVwZ3JhZGVEYXRhLnByaWNlTXVsdCwgZnJvbUxldmVsLCB0b0xldmVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwodXBncmFkZU5hbWU6IENvcnBVcGdyYWRlTmFtZSwgZnJvbUxldmVsOiBudW1iZXIsIG1heENvc3Q6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgdXBncmFkZURhdGEgPSBDb3JwVXBncmFkZXNEYXRhW3VwZ3JhZGVOYW1lXTtcbiAgICBpZiAoIXVwZ3JhZGVEYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGF0YSBvZiB1cGdyYWRlOiAke3VwZ3JhZGVOYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0R2VuZXJpY01heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwodXBncmFkZURhdGEuYmFzZVByaWNlLCB1cGdyYWRlRGF0YS5wcmljZU11bHQsIGZyb21MZXZlbCwgbWF4Q29zdCk7XG59XG5cbi8qKlxuICogc3JjXFxDb3Jwb3JhdGlvblxcQ29ycG9yYXRpb24udHM6IHB1cmNoYXNlVXBncmFkZSgpXG4gKlxuICogQHBhcmFtIHVwZ3JhZGVOYW1lXG4gKiBAcGFyYW0gdXBncmFkZUxldmVsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGdyYWRlQmVuZWZpdCh1cGdyYWRlTmFtZTogQ29ycFVwZ3JhZGVOYW1lLCB1cGdyYWRlTGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgLy8gRm9yIERyZWFtU2Vuc2UsIHZhbHVlIGlzIG5vdCBhIG11bHRpcGxpZXIsIHNvIGl0IHN0YXJ0cyBhdCAwXG4gICAgbGV0IHZhbHVlID0gKHVwZ3JhZGVOYW1lID09PSBVcGdyYWRlTmFtZS5EUkVBTV9TRU5TRSkgPyAwIDogMTtcbiAgICBjb25zdCBiZW5lZml0ID0gQ29ycFVwZ3JhZGVzRGF0YVt1cGdyYWRlTmFtZV0uYmVuZWZpdDtcbiAgICBpZiAoIWJlbmVmaXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBkYXRhIG9mIHVwZ3JhZGU6ICR7dXBncmFkZU5hbWV9YCk7XG4gICAgfVxuICAgIHZhbHVlICs9IGJlbmVmaXQgKiB1cGdyYWRlTGV2ZWw7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBncmFkZVdhcmVob3VzZUNvc3QoZnJvbUxldmVsOiBudW1iZXIsIHRvTGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGZyb21MZXZlbCA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBwYXJhbWV0ZXJcIik7XG4gICAgfVxuICAgIHJldHVybiB3YXJlaG91c2VVcGdyYWRlQmFzZVByaWNlICogKChNYXRoLnBvdygxLjA3LCB0b0xldmVsICsgMSkgLSBNYXRoLnBvdygxLjA3LCBmcm9tTGV2ZWwgKyAxKSkgLyAwLjA3KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heEFmZm9yZGFibGVXYXJlaG91c2VMZXZlbChmcm9tTGV2ZWw6IG51bWJlciwgbWF4Q29zdDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoZnJvbUxldmVsIDwgMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBhcmFtZXRlclwiKTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoXG4gICAgICAgIChNYXRoLmxvZyhtYXhDb3N0ICogMC4wNyAvIHdhcmVob3VzZVVwZ3JhZGVCYXNlUHJpY2UgKyBNYXRoLnBvdygxLjA3LCBmcm9tTGV2ZWwgKyAxKSkgLyBNYXRoLmxvZygxLjA3KSkgLSAxXG4gICAgKTtcbn1cblxuLyoqXG4gKiBzcmNcXENvcnBvcmF0aW9uXFxXYXJlaG91c2UudHM6IHVwZGF0ZVNpemUoKVxuICpcbiAqIEBwYXJhbSBzbWFydFN0b3JhZ2VMZXZlbFxuICogQHBhcmFtIHdhcmVob3VzZUxldmVsXG4gKiBAcGFyYW0gZGl2aXNpb25SZXNlYXJjaGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXYXJlaG91c2VTaXplKHNtYXJ0U3RvcmFnZUxldmVsOiBudW1iZXIsIHdhcmVob3VzZUxldmVsOiBudW1iZXIsIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gd2FyZWhvdXNlTGV2ZWwgKiAxMDAgKlxuICAgICAgICAoMSArIENvcnBVcGdyYWRlc0RhdGFbVXBncmFkZU5hbWUuU01BUlRfU1RPUkFHRV0uYmVuZWZpdCAqIHNtYXJ0U3RvcmFnZUxldmVsKSAqXG4gICAgICAgIGdldFJlc2VhcmNoU3RvcmFnZU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZmljZVVwZ3JhZGVDb3N0KGZyb21TaXplOiBudW1iZXIsIHRvU2l6ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0R2VuZXJpY1VwZ3JhZGVDb3N0KG9mZmljZVVwZ3JhZGVCYXNlUHJpY2UsIDEuMDksIGZyb21TaXplIC8gMywgdG9TaXplIC8gMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhBZmZvcmRhYmxlT2ZmaWNlU2l6ZShmcm9tU2l6ZTogbnVtYmVyLCBtYXhDb3N0OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKFxuICAgICAgICAzICogZ2V0R2VuZXJpY01heEFmZm9yZGFibGVVcGdyYWRlTGV2ZWwob2ZmaWNlVXBncmFkZUJhc2VQcmljZSwgMS4wOSwgZnJvbVNpemUgLyAzLCBtYXhDb3N0LCBmYWxzZSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRWZXJ0Q29zdChmcm9tTGV2ZWw6IG51bWJlciwgdG9MZXZlbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0R2VuZXJpY1VwZ3JhZGVDb3N0KGFkdmVydFVwZ3JhZGVCYXNlUHJpY2UsIDEuMDYsIGZyb21MZXZlbCwgdG9MZXZlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhBZmZvcmRhYmxlQWRWZXJ0TGV2ZWwoZnJvbUxldmVsOiBudW1iZXIsIG1heENvc3Q6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEdlbmVyaWNNYXhBZmZvcmRhYmxlVXBncmFkZUxldmVsKGFkdmVydFVwZ3JhZGVCYXNlUHJpY2UsIDEuMDYsIGZyb21MZXZlbCwgbWF4Q29zdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMsIHJlc2VhcmNoRGF0YUtleToga2V5b2YgdHlwZW9mIENvcnBSZXNlYXJjaGVzRGF0YVtzdHJpbmddKTogbnVtYmVyIHtcbiAgICBsZXQgbXVsdGlwbGllciA9IDE7XG4gICAgZm9yIChjb25zdCBbcmVzZWFyY2hOYW1lLCByZXNlYXJjaERhdGFdIG9mIE9iamVjdC5lbnRyaWVzKENvcnBSZXNlYXJjaGVzRGF0YSkpIHtcbiAgICAgICAgaWYgKCFkaXZpc2lvblJlc2VhcmNoZXNbPFJlc2VhcmNoTmFtZT5yZXNlYXJjaE5hbWVdKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNlYXJjaERhdGFWYWx1ZSA9IHJlc2VhcmNoRGF0YVtyZXNlYXJjaERhdGFLZXldO1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShyZXNlYXJjaERhdGFWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByZXNlYXJjaERhdGFLZXk6ICR7cmVzZWFyY2hEYXRhS2V5fWApO1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGxpZXIgKj0gcmVzZWFyY2hEYXRhVmFsdWUgYXMgbnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gbXVsdGlwbGllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoU2FsZXNNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJzYWxlc011bHRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEFkdmVydGlzaW5nTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFJlc2VhcmNoTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMsIFwiYWR2ZXJ0aXNpbmdNdWx0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZWFyY2hSUE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzLCBcInNjaVJlc2VhcmNoTXVsdFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc2VhcmNoU3RvcmFnZU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzOiBEaXZpc2lvblJlc2VhcmNoZXMpOiBudW1iZXIge1xuICAgIHJldHVybiBnZXRSZXNlYXJjaE11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzLCBcInN0b3JhZ2VNdWx0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZWFyY2hFbXBsb3llZUNyZWF0aXZpdHlNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJlbXBsb3llZUNyZU11bHRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEVtcGxveWVlQ2hhcmlzbWFNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJlbXBsb3llZUNoYU11bHRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNlYXJjaEVtcGxveWVlSW50ZWxsaWdlbmNlTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlcyk6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldFJlc2VhcmNoTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMsIFwiZW1wbG95ZWVJbnRNdWx0XCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzZWFyY2hFbXBsb3llZUVmZmljaWVuY3lNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZ2V0UmVzZWFyY2hNdWx0aXBsaWVyKGRpdmlzaW9uUmVzZWFyY2hlcywgXCJwcm9kdWN0aW9uTXVsdFwiKTtcbn1cblxuLyoqXG4gKiBzcmNcXHV0aWxzXFxjYWxjdWxhdGVFZmZlY3RXaXRoRmFjdG9ycy50c1xuICpcbiAqIFRoaXMgaXMgYSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzIGEgbWF0aGVtYXRpY2FsIGZvcm11bGEgdXNlZCBjb21tb25seSB0aHJvdWdob3V0IHRoZVxuICogZ2FtZS4gVGhpcyBmb3JtdWxhIGlzICh0eXBpY2FsbHkpIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBlZmZlY3QgdGhhdCB2YXJpb3VzIHN0YXRpc3RpY3NcbiAqIGhhdmUgb24gYSBnYW1lIG1lY2hhbmljLiBJdCBsb29rcyBzb21ldGhpbmcgbGlrZTpcbiAqXG4gKiAgKHN0YXQgXiBleHBvbmVudGlhbCBmYWN0b3IpICsgKHN0YXQgLyBsaW5lYXIgZmFjdG9yKVxuICpcbiAqIHdoZXJlIHRoZSBleHBvbmVudGlhbCBmYWN0b3IgaXMgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxIGFuZCB0aGUgbGluZWFyIGZhY3RvclxuICogaXMgdHlwaWNhbGx5IGEgcmVsYXRpdmVseSBsYXJnZXIgbnVtYmVyLlxuICpcbiAqIFRoaXMgZm9ybXVsYSBlbnN1cmVzIHRoYXQgdGhlIGVmZmVjdHMgb2YgdGhlIHN0YXRpc3RpYyB0aGF0IGlzIGJlaW5nIHByb2Nlc3NlZFxuICogaGFzIGRpbWluaXNoaW5nIHJldHVybnMsIGJ1dCBuZXZlciBsb3NlcyBpdHMgZWZmZWN0aXZlbmVzcyBhcyB5b3UgY29udGludWVcbiAqIHRvIHJhaXNlIGl0LlxuICovXG5mdW5jdGlvbiBnZXRFZmZlY3RXaXRoRmFjdG9ycyhuOiBudW1iZXIsIGV4cEZhYzogbnVtYmVyLCBsaW5lYXJGYWM6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGV4cEZhYyA8PSAwIHx8IGV4cEZhYyA+PSAxKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgRXhwb25lbnRpYWwgZmFjdG9yIGlzICR7ZXhwRmFjfS4gVGhpcyBpcyBub3QgYW4gaW50ZW5kZWQgdmFsdWUgZm9yIGl0YCk7XG4gICAgfVxuICAgIGlmIChsaW5lYXJGYWMgPCAxKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTGluZWFyIGZhY3RvciBpcyAke2xpbmVhckZhY30uIFRoaXMgaXMgbm90IGFuIGludGVuZGVkIHZhbHVlIGZvciBpdGApO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5wb3cobiwgZXhwRmFjKSArIG4gLyBsaW5lYXJGYWM7XG59XG5cbi8qKlxuICogc3JjXFxDb3Jwb3JhdGlvblxcRGl2aXNpb24udHNcbiAqXG4gKiBSZXR1cm4gYSBmYWN0b3IgYmFzZWQgb24gdGhlIG9mZmljZSdzIEJ1c2luZXNzIGVtcGxveWVlcyB0aGF0IGFmZmVjdHMgc2FsZXNcbiAqXG4gKiBAcGFyYW0gYnVzaW5lc3NQcm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdXNpbmVzc0ZhY3RvcihidXNpbmVzc1Byb2R1Y3Rpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGdldEVmZmVjdFdpdGhGYWN0b3JzKDEgKyBidXNpbmVzc1Byb2R1Y3Rpb24sIDAuMjYsIDEwZTMpO1xufVxuXG4vKipcbiAqIHNyY1xcQ29ycG9yYXRpb25cXERpdmlzaW9uLnRzXG4gKlxuICogUmV0dXJuIGEgc2V0IG9mIGZhY3RvcnMgYmFzZWQgb24gdGhlIGRpdmlzaW9uJ3MgYXdhcmVuZXNzLCBwb3B1bGFyaXR5LCBhbmQgSW5kdXN0cnkncyBhZHZlcnRpc2luZ0ZhY3Rvci4gVGhlIGZpcnN0XG4gKiBmYWN0b3IgYWZmZWN0cyBzYWxlcy4gVGhlIHJlc3VsdCBpczpcbiAqIFtTYWxlcyBmYWN0b3IsIGF3YXJlbmVzcyBmYWN0b3IsIHBvcHVsYXJpdHkgZmFjdG9yLCBwb3B1bGFyaXR5L2F3YXJlbmVzcyByYXRpbyBmYWN0b3JdXG4gKlxuICogQHBhcmFtIGF3YXJlbmVzc1xuICogQHBhcmFtIHBvcHVsYXJpdHlcbiAqIEBwYXJhbSBpbmR1c3RyeUFkdmVydGlzaW5nRmFjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZHZlcnRpc2luZ0ZhY3RvcnMoYXdhcmVuZXNzOiBudW1iZXIsIHBvcHVsYXJpdHk6IG51bWJlciwgaW5kdXN0cnlBZHZlcnRpc2luZ0ZhY3RvcjogbnVtYmVyKTogW1xuICAgIHRvdGFsRmFjdG9yOiBudW1iZXIsXG4gICAgYXdhcmVuZXNzRmFjdG9yOiBudW1iZXIsXG4gICAgcG9wdWxhcml0eUZhY3RvcjogbnVtYmVyLFxuICAgIHJhdGlvRmFjdG9yOiBudW1iZXIsXG5dIHtcbiAgICBjb25zdCBhd2FyZW5lc3NGYWN0b3IgPSBNYXRoLnBvdyhhd2FyZW5lc3MgKyAxLCBpbmR1c3RyeUFkdmVydGlzaW5nRmFjdG9yKTtcbiAgICBjb25zdCBwb3B1bGFyaXR5RmFjdG9yID0gTWF0aC5wb3cocG9wdWxhcml0eSArIDEsIGluZHVzdHJ5QWR2ZXJ0aXNpbmdGYWN0b3IpO1xuICAgIGNvbnN0IHJhdGlvRmFjdG9yID0gYXdhcmVuZXNzID09PSAwID8gMC4wMSA6IE1hdGgubWF4KChwb3B1bGFyaXR5ICsgMC4wMDEpIC8gYXdhcmVuZXNzLCAwLjAxKTtcbiAgICBjb25zdCBzYWxlc0ZhY3RvciA9IE1hdGgucG93KGF3YXJlbmVzc0ZhY3RvciAqIHBvcHVsYXJpdHlGYWN0b3IgKiByYXRpb0ZhY3RvciwgMC44NSk7XG4gICAgcmV0dXJuIFtzYWxlc0ZhY3RvciwgYXdhcmVuZXNzRmFjdG9yLCBwb3B1bGFyaXR5RmFjdG9yLCByYXRpb0ZhY3Rvcl07XG59XG5cbi8qKlxuICogc3JjXFxDb3Jwb3JhdGlvblxcRGl2aXNpb24udHNcbiAqXG4gKiBSZXR1cm4gYSBmYWN0b3IgYmFzZWQgb24gZGVtYW5kIGFuZCBjb21wZXRpdGlvbiB0aGF0IGFmZmVjdHMgc2FsZXNcbiAqXG4gKiBAcGFyYW0gZGVtYW5kXG4gKiBAcGFyYW0gY29tcGV0aXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcmtldEZhY3RvcihkZW1hbmQ6IG51bWJlciwgY29tcGV0aXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAuMSwgKGRlbWFuZCAqICgxMDAgLSBjb21wZXRpdGlvbikpIC8gMTAwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpdmlzaW9uUmF3UHJvZHVjdGlvbihcbiAgICBpc1Byb2R1Y3Q6IGJvb2xlYW4sXG4gICAgZW1wbG95ZWVzUHJvZHVjdGlvbjoge1xuICAgICAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogbnVtYmVyO1xuICAgICAgICBlbmdpbmVlclByb2R1Y3Rpb246IG51bWJlcjtcbiAgICAgICAgbWFuYWdlbWVudFByb2R1Y3Rpb246IG51bWJlcjtcbiAgICB9LFxuICAgIGRpdmlzaW9uUHJvZHVjdGlvbk11bHRpcGxpZXI6IG51bWJlcixcbiAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHM6IENvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcbiAgICBkaXZpc2lvblJlc2VhcmNoZXM6IERpdmlzaW9uUmVzZWFyY2hlc1xuKTogbnVtYmVyIHtcbiAgICBjb25zdCBvcGVyYXRpb25FbXBsb3llZXNQcm9kdWN0aW9uID0gZW1wbG95ZWVzUHJvZHVjdGlvbi5vcGVyYXRpb25zUHJvZHVjdGlvbjtcbiAgICBjb25zdCBlbmdpbmVlckVtcGxveWVlc1Byb2R1Y3Rpb24gPSBlbXBsb3llZXNQcm9kdWN0aW9uLmVuZ2luZWVyUHJvZHVjdGlvbjtcbiAgICBjb25zdCBtYW5hZ2VtZW50RW1wbG95ZWVzUHJvZHVjdGlvbiA9IGVtcGxveWVlc1Byb2R1Y3Rpb24ubWFuYWdlbWVudFByb2R1Y3Rpb247XG4gICAgY29uc3QgdG90YWxFbXBsb3llZXNQcm9kdWN0aW9uID0gb3BlcmF0aW9uRW1wbG95ZWVzUHJvZHVjdGlvbiArIGVuZ2luZWVyRW1wbG95ZWVzUHJvZHVjdGlvbiArIG1hbmFnZW1lbnRFbXBsb3llZXNQcm9kdWN0aW9uO1xuICAgIGlmICh0b3RhbEVtcGxveWVlc1Byb2R1Y3Rpb24gPD0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgbWFuYWdlbWVudEZhY3RvciA9IDEgKyBtYW5hZ2VtZW50RW1wbG95ZWVzUHJvZHVjdGlvbiAvICgxLjIgKiB0b3RhbEVtcGxveWVlc1Byb2R1Y3Rpb24pO1xuICAgIGNvbnN0IGVtcGxveWVlc1Byb2R1Y3Rpb25NdWx0aXBsaWVyID0gKE1hdGgucG93KG9wZXJhdGlvbkVtcGxveWVlc1Byb2R1Y3Rpb24sIDAuNCkgKyBNYXRoLnBvdyhlbmdpbmVlckVtcGxveWVlc1Byb2R1Y3Rpb24sIDAuMykpICogbWFuYWdlbWVudEZhY3RvcjtcbiAgICBjb25zdCBiYWxhbmNpbmdNdWx0aXBsaWVyID0gMC4wNTtcbiAgICBsZXQgb2ZmaWNlTXVsdGlwbGllcjtcbiAgICBpZiAoaXNQcm9kdWN0KSB7XG4gICAgICAgIG9mZmljZU11bHRpcGxpZXIgPSAwLjUgKiBiYWxhbmNpbmdNdWx0aXBsaWVyICogZW1wbG95ZWVzUHJvZHVjdGlvbk11bHRpcGxpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2ZmaWNlTXVsdGlwbGllciA9IGJhbGFuY2luZ011bHRpcGxpZXIgKiBlbXBsb3llZXNQcm9kdWN0aW9uTXVsdGlwbGllcjtcbiAgICB9XG5cbiAgICAvLyBNdWx0aXBsaWVyIGZyb20gU21hcnQgRmFjdG9yaWVzXG4gICAgY29uc3QgdXBncmFkZU11bHRpcGxpZXIgPSAxICsgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzW1VwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFU10gKiBDb3JwVXBncmFkZXNEYXRhW1VwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFU10uYmVuZWZpdDtcbiAgICAvLyBNdWx0aXBsaWVyIGZyb20gcmVzZWFyY2hlc1xuICAgIGxldCByZXNlYXJjaE11bHRpcGxpZXIgPSAxO1xuICAgIHJlc2VhcmNoTXVsdGlwbGllciAqPVxuICAgICAgICAoZGl2aXNpb25SZXNlYXJjaGVzW1Jlc2VhcmNoTmFtZS5EUk9ORVNfQVNTRU1CTFldID8gQ29ycFJlc2VhcmNoZXNEYXRhW1Jlc2VhcmNoTmFtZS5EUk9ORVNfQVNTRU1CTFldLnByb2R1Y3Rpb25NdWx0IDogMSlcbiAgICAgICAgKiAoZGl2aXNpb25SZXNlYXJjaGVzW1Jlc2VhcmNoTmFtZS5TRUxGX0NPUlJFQ1RJTkdfQVNTRU1CTEVSU10gPyBDb3JwUmVzZWFyY2hlc0RhdGFbUmVzZWFyY2hOYW1lLlNFTEZfQ09SUkVDVElOR19BU1NFTUJMRVJTXS5wcm9kdWN0aW9uTXVsdCA6IDEpO1xuICAgIGlmIChpc1Byb2R1Y3QpIHtcbiAgICAgICAgcmVzZWFyY2hNdWx0aXBsaWVyICo9IChkaXZpc2lvblJlc2VhcmNoZXNbUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTV0gPyBDb3JwUmVzZWFyY2hlc0RhdGFbUmVzZWFyY2hOYW1lLlVQR1JBREVfRlVMQ1JVTV0ucHJvZHVjdFByb2R1Y3Rpb25NdWx0IDogMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZmljZU11bHRpcGxpZXIgKiBkaXZpc2lvblByb2R1Y3Rpb25NdWx0aXBsaWVyICogdXBncmFkZU11bHRpcGxpZXIgKiByZXNlYXJjaE11bHRpcGxpZXI7XG59XG5cbmZ1bmN0aW9uIGdldFVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXJGb3JFbXBsb3llZVN0YXRzKFxuICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzXG4pOiB7XG4gICAgcmVzZWFyY2hDaGFyaXNtYU11bHRpcGxpZXI6IG51bWJlcjtcbiAgICB1cGdyYWRlSW50ZWxsaWdlbmNlTXVsdGlwbGllcjogbnVtYmVyO1xuICAgIHVwZ3JhZGVDaGFyaXNtYU11bHRpcGxpZXI6IG51bWJlcjtcbiAgICByZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyOiBudW1iZXI7XG4gICAgcmVzZWFyY2hFZmZpY2llbmN5TXVsdGlwbGllcjogbnVtYmVyO1xuICAgIHVwZ3JhZGVDcmVhdGl2aXR5TXVsdGlwbGllcjogbnVtYmVyO1xuICAgIHJlc2VhcmNoSW50ZWxsaWdlbmNlTXVsdGlwbGllcjogbnVtYmVyO1xuICAgIHVwZ3JhZGVFZmZpY2llbmN5TXVsdGlwbGllcjogbnVtYmVyO1xufSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXBncmFkZUNyZWF0aXZpdHlNdWx0aXBsaWVyOiBnZXRVcGdyYWRlQmVuZWZpdChcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLk5VT1BUSU1BTF9OT09UUk9QSUNfSU5KRUNUT1JfSU1QTEFOVFMsXG4gICAgICAgICAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuTlVPUFRJTUFMX05PT1RST1BJQ19JTkpFQ1RPUl9JTVBMQU5UU11cbiAgICAgICAgKSxcbiAgICAgICAgdXBncmFkZUNoYXJpc21hTXVsdGlwbGllcjogZ2V0VXBncmFkZUJlbmVmaXQoXG4gICAgICAgICAgICBVcGdyYWRlTmFtZS5TUEVFQ0hfUFJPQ0VTU09SX0lNUExBTlRTLFxuICAgICAgICAgICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzW1VwZ3JhZGVOYW1lLlNQRUVDSF9QUk9DRVNTT1JfSU1QTEFOVFNdXG4gICAgICAgICksXG4gICAgICAgIHVwZ3JhZGVJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyOiBnZXRVcGdyYWRlQmVuZWZpdChcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLk5FVVJBTF9BQ0NFTEVSQVRPUlMsXG4gICAgICAgICAgICBjb3Jwb3JhdGlvblVwZ3JhZGVMZXZlbHNbVXBncmFkZU5hbWUuTkVVUkFMX0FDQ0VMRVJBVE9SU11cbiAgICAgICAgKSxcbiAgICAgICAgdXBncmFkZUVmZmljaWVuY3lNdWx0aXBsaWVyOiBnZXRVcGdyYWRlQmVuZWZpdChcbiAgICAgICAgICAgIFVwZ3JhZGVOYW1lLkZPQ1VTX1dJUkVTLFxuICAgICAgICAgICAgY29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzW1VwZ3JhZGVOYW1lLkZPQ1VTX1dJUkVTXVxuICAgICAgICApLFxuICAgICAgICByZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyOiBnZXRSZXNlYXJjaEVtcGxveWVlQ3JlYXRpdml0eU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcbiAgICAgICAgcmVzZWFyY2hDaGFyaXNtYU11bHRpcGxpZXI6IGdldFJlc2VhcmNoRW1wbG95ZWVDaGFyaXNtYU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcbiAgICAgICAgcmVzZWFyY2hJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyOiBnZXRSZXNlYXJjaEVtcGxveWVlSW50ZWxsaWdlbmNlTXVsdGlwbGllcihkaXZpc2lvblJlc2VhcmNoZXMpLFxuICAgICAgICByZXNlYXJjaEVmZmljaWVuY3lNdWx0aXBsaWVyOiBnZXRSZXNlYXJjaEVtcGxveWVlRWZmaWNpZW5jeU11bHRpcGxpZXIoZGl2aXNpb25SZXNlYXJjaGVzKSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JzKFxuICAgIG9mZmljZToge1xuICAgICAgICBhdmdJbnRlbGxpZ2VuY2U6IG51bWJlcjtcbiAgICAgICAgYXZnQ2hhcmlzbWE6IG51bWJlcjtcbiAgICAgICAgYXZnQ3JlYXRpdml0eTogbnVtYmVyO1xuICAgICAgICBhdmdFZmZpY2llbmN5OiBudW1iZXI7XG4gICAgICAgIGF2Z01vcmFsZTogbnVtYmVyO1xuICAgICAgICBhdmdFbmVyZ3k6IG51bWJlcjtcbiAgICAgICAgdG90YWxFeHBlcmllbmNlOiBudW1iZXI7XG4gICAgICAgIGVtcGxveWVlSm9iczoge1xuICAgICAgICAgICAgb3BlcmF0aW9uczogbnVtYmVyO1xuICAgICAgICAgICAgZW5naW5lZXI6IG51bWJlcjtcbiAgICAgICAgICAgIGJ1c2luZXNzOiBudW1iZXI7XG4gICAgICAgICAgICBtYW5hZ2VtZW50OiBudW1iZXI7XG4gICAgICAgICAgICByZXNlYXJjaEFuZERldmVsb3BtZW50OiBudW1iZXI7XG4gICAgICAgICAgICBpbnRlcm46IG51bWJlcjtcbiAgICAgICAgICAgIHVuYXNzaWduZWQ6IG51bWJlcjtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzXG4pOiB7XG4gICAgbWFuYWdlbWVudFByb2R1Y3Rpb246IG51bWJlcjtcbiAgICBvcGVyYXRpb25zUHJvZHVjdGlvbjogbnVtYmVyO1xuICAgIHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uOiBudW1iZXI7XG4gICAgZW5naW5lZXJQcm9kdWN0aW9uOiBudW1iZXI7XG4gICAgYnVzaW5lc3NQcm9kdWN0aW9uOiBudW1iZXI7XG59IHtcbiAgICBjb25zdCB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyID0gZ2V0VXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllckZvckVtcGxveWVlU3RhdHMoXG4gICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzXG4gICAgKTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZUludGVsbGlnZW5jZSA9IG9mZmljZS5hdmdJbnRlbGxpZ2VuY2VcbiAgICAgICAgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnVwZ3JhZGVJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaEludGVsbGlnZW5jZU11bHRpcGxpZXI7XG4gICAgY29uc3QgZWZmZWN0aXZlQ2hhcmlzbWEgPSBvZmZpY2UuYXZnQ2hhcmlzbWFcbiAgICAgICAgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnVwZ3JhZGVDaGFyaXNtYU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoQ2hhcmlzbWFNdWx0aXBsaWVyO1xuICAgIGNvbnN0IGVmZmVjdGl2ZUNyZWF0aXZpdHkgPSBvZmZpY2UuYXZnQ3JlYXRpdml0eVxuICAgICAgICAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUNyZWF0aXZpdHlNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyO1xuICAgIGNvbnN0IGVmZmVjdGl2ZUVmZmljaWVuY3kgPSBvZmZpY2UuYXZnRWZmaWNpZW5jeVxuICAgICAgICAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUVmZmljaWVuY3lNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaEVmZmljaWVuY3lNdWx0aXBsaWVyO1xuXG4gICAgY29uc3QgcHJvZHVjdGlvbkJhc2UgPSBvZmZpY2UuYXZnTW9yYWxlICogb2ZmaWNlLmF2Z0VuZXJneSAqIDFlLTQ7XG5cbiAgICBjb25zdCB0b3RhbE51bWJlck9mRW1wbG95ZWVzID0gb2ZmaWNlLmVtcGxveWVlSm9icy5vcGVyYXRpb25zXG4gICAgICAgICsgb2ZmaWNlLmVtcGxveWVlSm9icy5lbmdpbmVlclxuICAgICAgICArIG9mZmljZS5lbXBsb3llZUpvYnMuYnVzaW5lc3NcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLm1hbmFnZW1lbnRcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLnJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRcbiAgICAgICAgKyBvZmZpY2UuZW1wbG95ZWVKb2JzLmludGVyblxuICAgICAgICArIG9mZmljZS5lbXBsb3llZUpvYnMudW5hc3NpZ25lZDtcbiAgICBjb25zdCBleHAgPSBvZmZpY2UudG90YWxFeHBlcmllbmNlIC8gdG90YWxOdW1iZXJPZkVtcGxveWVlcztcblxuICAgIGNvbnN0IG9wZXJhdGlvbnNQcm9kdWN0aW9uID0gb2ZmaWNlLmVtcGxveWVlSm9icy5vcGVyYXRpb25zICogcHJvZHVjdGlvbkJhc2VcbiAgICAgICAgKiAoMC42ICogZWZmZWN0aXZlSW50ZWxsaWdlbmNlICsgMC4xICogZWZmZWN0aXZlQ2hhcmlzbWEgKyBleHAgKyAwLjUgKiBlZmZlY3RpdmVDcmVhdGl2aXR5ICsgZWZmZWN0aXZlRWZmaWNpZW5jeSk7XG4gICAgY29uc3QgZW5naW5lZXJQcm9kdWN0aW9uID0gb2ZmaWNlLmVtcGxveWVlSm9icy5lbmdpbmVlciAqIHByb2R1Y3Rpb25CYXNlXG4gICAgICAgICogKGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuMSAqIGVmZmVjdGl2ZUNoYXJpc21hICsgMS41ICogZXhwICsgZWZmZWN0aXZlRWZmaWNpZW5jeSk7XG4gICAgY29uc3QgYnVzaW5lc3NQcm9kdWN0aW9uID0gb2ZmaWNlLmVtcGxveWVlSm9icy5idXNpbmVzcyAqIHByb2R1Y3Rpb25CYXNlXG4gICAgICAgICogKDAuNCAqIGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIGVmZmVjdGl2ZUNoYXJpc21hICsgMC41ICogZXhwKTtcbiAgICBjb25zdCBtYW5hZ2VtZW50UHJvZHVjdGlvbiA9IG9mZmljZS5lbXBsb3llZUpvYnMubWFuYWdlbWVudCAqIHByb2R1Y3Rpb25CYXNlXG4gICAgICAgICogKDIgKiBlZmZlY3RpdmVDaGFyaXNtYSArIGV4cCArIDAuMiAqIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyAwLjcgKiBlZmZlY3RpdmVFZmZpY2llbmN5KTtcbiAgICBjb25zdCByZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbiA9IG9mZmljZS5lbXBsb3llZUpvYnMucmVzZWFyY2hBbmREZXZlbG9wbWVudCAqIHByb2R1Y3Rpb25CYXNlXG4gICAgICAgICogKDEuNSAqIGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuOCAqIGV4cCArIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyAwLjUgKiBlZmZlY3RpdmVFZmZpY2llbmN5KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9wZXJhdGlvbnNQcm9kdWN0aW9uOiBvcGVyYXRpb25zUHJvZHVjdGlvbixcbiAgICAgICAgZW5naW5lZXJQcm9kdWN0aW9uOiBlbmdpbmVlclByb2R1Y3Rpb24sXG4gICAgICAgIGJ1c2luZXNzUHJvZHVjdGlvbjogYnVzaW5lc3NQcm9kdWN0aW9uLFxuICAgICAgICBtYW5hZ2VtZW50UHJvZHVjdGlvbjogbWFuYWdlbWVudFByb2R1Y3Rpb24sXG4gICAgICAgIHJlc2VhcmNoQW5kRGV2ZWxvcG1lbnRQcm9kdWN0aW9uOiByZXNlYXJjaEFuZERldmVsb3BtZW50UHJvZHVjdGlvbixcbiAgICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlRW1wbG95ZWVTdGF0cyhcbiAgICBvZmZpY2U6IHtcbiAgICAgICAgYXZnTW9yYWxlOiBudW1iZXI7XG4gICAgICAgIGF2Z0VuZXJneTogbnVtYmVyO1xuICAgICAgICB0b3RhbEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgICAgICAgbnVtRW1wbG95ZWVzOiBudW1iZXI7XG4gICAgICAgIGVtcGxveWVlSm9iczogUmVjb3JkPEVtcGxveWVlUG9zaXRpb24sIG51bWJlcj47XG4gICAgICAgIGVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iOiBSZWNvcmQ8RW1wbG95ZWVQb3NpdGlvbiwgbnVtYmVyPjtcbiAgICB9LFxuICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVsczogQ29ycG9yYXRpb25VcGdyYWRlTGV2ZWxzLFxuICAgIGRpdmlzaW9uUmVzZWFyY2hlczogRGl2aXNpb25SZXNlYXJjaGVzXG4pOiBQcm9taXNlPHtcbiAgICBhdmdDcmVhdGl2aXR5OiBudW1iZXI7XG4gICAgYXZnQ2hhcmlzbWE6IG51bWJlcjtcbiAgICBhdmdJbnRlbGxpZ2VuY2U6IG51bWJlcjtcbiAgICBhdmdFZmZpY2llbmN5OiBudW1iZXI7XG59PiB7XG4gICAgLy8gSW4gNSBqb2JzIFtPUEVSQVRJT05TLCBFTkdJTkVFUiwgQlVTSU5FU1MsIE1BTkFHRU1FTlQsIFJFU0VBUkNIX0RFVkVMT1BNRU5UXSwgd2UgbmVlZCBhdCBsZWFzdCA0IGpvYnMgaGF2aW5nIDFcbiAgICAvLyBlbXBsb3llZSBhdCB0aGUgbWluaW11bVxuICAgIGxldCBudW1iZXJPZkpvYnNIYXZpbmdFbXBsb3llZXMgPSAwO1xuICAgIGZvciAoY29uc3QgW2pvYk5hbWUsIG51bWJlck9mRW1wbG95ZWVzXSBvZiBPYmplY3QuZW50cmllcyhvZmZpY2UuZW1wbG95ZWVKb2JzKSkge1xuICAgICAgICBpZiAoam9iTmFtZSA9PT0gXCJJbnRlcm5cIiB8fCBqb2JOYW1lID09PSBcIlVuYXNzaWduZWRcIiB8fCBudW1iZXJPZkVtcGxveWVlcyA9PT0gMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgKytudW1iZXJPZkpvYnNIYXZpbmdFbXBsb3llZXM7XG4gICAgfVxuICAgIGlmIChudW1iZXJPZkpvYnNIYXZpbmdFbXBsb3llZXMgPD0gMykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZSBuZWVkIGF0IGxlYXN0IDQgam9icyBoYXZpbmcgMSBlbXBsb3llZSBhdCB0aGUgbWluaW11bVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyID0gZ2V0VXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllckZvckVtcGxveWVlU3RhdHMoXG4gICAgICAgIGNvcnBvcmF0aW9uVXBncmFkZUxldmVscyxcbiAgICAgICAgZGl2aXNpb25SZXNlYXJjaGVzXG4gICAgKTtcblxuICAgIGNvbnN0IHByb2R1Y3Rpb25CYXNlID0gb2ZmaWNlLmF2Z01vcmFsZSAqIG9mZmljZS5hdmdFbmVyZ3kgKiAxZS00O1xuICAgIGNvbnN0IGV4cCA9IG9mZmljZS50b3RhbEV4cGVyaWVuY2UgLyBvZmZpY2UubnVtRW1wbG95ZWVzO1xuICAgIGNvbnN0IGYxID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIG9mZmljZS5lbXBsb3llZUpvYnNbRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TXSAqIHByb2R1Y3Rpb25CYXNlXG4gICAgICAgICAgICAqICgwLjYgKiBlZmZlY3RpdmVJbnRlbGxpZ2VuY2UgKyAwLjEgKiBlZmZlY3RpdmVDaGFyaXNtYSArIGV4cCArIDAuNSAqIGVmZmVjdGl2ZUNyZWF0aXZpdHkgKyBlZmZlY3RpdmVFZmZpY2llbmN5KVxuICAgICAgICAgICAgLSBvZmZpY2UuZW1wbG95ZWVQcm9kdWN0aW9uQnlKb2JbRW1wbG95ZWVQb3NpdGlvbi5PUEVSQVRJT05TXTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBmMiA9IGZ1bmN0aW9uIChbZWZmZWN0aXZlQ3JlYXRpdml0eSwgZWZmZWN0aXZlQ2hhcmlzbWEsIGVmZmVjdGl2ZUludGVsbGlnZW5jZSwgZWZmZWN0aXZlRWZmaWNpZW5jeV06IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBvZmZpY2UuZW1wbG95ZWVKb2JzW0VtcGxveWVlUG9zaXRpb24uRU5HSU5FRVJdICogcHJvZHVjdGlvbkJhc2VcbiAgICAgICAgICAgICogKGVmZmVjdGl2ZUludGVsbGlnZW5jZSArIDAuMSAqIGVmZmVjdGl2ZUNoYXJpc21hICsgMS41ICogZXhwICsgZWZmZWN0aXZlRWZmaWNpZW5jeSlcbiAgICAgICAgICAgIC0gb2ZmaWNlLmVtcGxveWVlUHJvZHVjdGlvbkJ5Sm9iW0VtcGxveWVlUG9zaXRpb24uRU5HSU5FRVJdO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IGYzID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIG9mZmljZS5lbXBsb3llZUpvYnNbRW1wbG95ZWVQb3NpdGlvbi5CVVNJTkVTU10gKiBwcm9kdWN0aW9uQmFzZVxuICAgICAgICAgICAgKiAoMC40ICogZWZmZWN0aXZlSW50ZWxsaWdlbmNlICsgZWZmZWN0aXZlQ2hhcmlzbWEgKyAwLjUgKiBleHApXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLkJVU0lORVNTXTtcbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBmNCA9IGZ1bmN0aW9uIChbZWZmZWN0aXZlQ3JlYXRpdml0eSwgZWZmZWN0aXZlQ2hhcmlzbWEsIGVmZmVjdGl2ZUludGVsbGlnZW5jZSwgZWZmZWN0aXZlRWZmaWNpZW5jeV06IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBvZmZpY2UuZW1wbG95ZWVKb2JzW0VtcGxveWVlUG9zaXRpb24uTUFOQUdFTUVOVF0gKiBwcm9kdWN0aW9uQmFzZVxuICAgICAgICAgICAgKiAoMiAqIGVmZmVjdGl2ZUNoYXJpc21hICsgZXhwICsgMC4yICogZWZmZWN0aXZlQ3JlYXRpdml0eSArIDAuNyAqIGVmZmVjdGl2ZUVmZmljaWVuY3kpXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLk1BTkFHRU1FTlRdO1xuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IGY1ID0gZnVuY3Rpb24gKFtlZmZlY3RpdmVDcmVhdGl2aXR5LCBlZmZlY3RpdmVDaGFyaXNtYSwgZWZmZWN0aXZlSW50ZWxsaWdlbmNlLCBlZmZlY3RpdmVFZmZpY2llbmN5XTogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIG9mZmljZS5lbXBsb3llZUpvYnNbRW1wbG95ZWVQb3NpdGlvbi5SRVNFQVJDSF9ERVZFTE9QTUVOVF0gKiBwcm9kdWN0aW9uQmFzZVxuICAgICAgICAgICAgKiAoMS41ICogZWZmZWN0aXZlSW50ZWxsaWdlbmNlICsgMC44ICogZXhwICsgZWZmZWN0aXZlQ3JlYXRpdml0eSArIDAuNSAqIGVmZmVjdGl2ZUVmZmljaWVuY3kpXG4gICAgICAgICAgICAtIG9mZmljZS5lbXBsb3llZVByb2R1Y3Rpb25CeUpvYltFbXBsb3llZVBvc2l0aW9uLlJFU0VBUkNIX0RFVkVMT1BNRU5UXTtcbiAgICB9O1xuICAgIGxldCBzb2x2ZXJSZXN1bHQ6IENlcmVzU29sdmVyUmVzdWx0ID0ge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgeDogW10sXG4gICAgICAgIHJlcG9ydDogXCJzdHJpbmdcIixcbiAgICB9O1xuICAgIGNvbnN0IHNvbHZlciA9IG5ldyBDZXJlcygpO1xuICAgIGF3YWl0IHNvbHZlci5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBzb2x2ZXIuYWRkX2Z1bmN0aW9uKGYxKTtcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmMik7XG4gICAgICAgIHNvbHZlci5hZGRfZnVuY3Rpb24oZjMpO1xuICAgICAgICBzb2x2ZXIuYWRkX2Z1bmN0aW9uKGY0KTtcbiAgICAgICAgc29sdmVyLmFkZF9mdW5jdGlvbihmNSk7XG4gICAgICAgIGNvbnN0IGd1ZXNzID0gWzc1LCA3NSwgNzUsIDc1XTtcbiAgICAgICAgc29sdmVyUmVzdWx0ID0gc29sdmVyLnNvbHZlKGd1ZXNzKSE7XG4gICAgICAgIHNvbHZlci5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBpZiAoIXNvbHZlclJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3Ioc29sdmVyUmVzdWx0KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogQ2Fubm90IGZpbmQgaGlkZGVuIHN0YXRzIG9mIGVtcGxveWVlLiBPZmZpY2U6ICR7SlNPTi5zdHJpbmdpZnkob2ZmaWNlKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXZnQ3JlYXRpdml0eTogc29sdmVyUmVzdWx0LnhbMF1cbiAgICAgICAgICAgIC8gKHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUNyZWF0aXZpdHlNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaENyZWF0aXZpdHlNdWx0aXBsaWVyKSxcbiAgICAgICAgYXZnQ2hhcmlzbWE6IHNvbHZlclJlc3VsdC54WzFdXG4gICAgICAgICAgICAvICh1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnVwZ3JhZGVDaGFyaXNtYU11bHRpcGxpZXIgKiB1cGdyYWRlQW5kUmVzZWFyY2hNdWx0aXBsaWVyLnJlc2VhcmNoQ2hhcmlzbWFNdWx0aXBsaWVyKSxcbiAgICAgICAgYXZnSW50ZWxsaWdlbmNlOiBzb2x2ZXJSZXN1bHQueFsyXVxuICAgICAgICAgICAgLyAodXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci51cGdyYWRlSW50ZWxsaWdlbmNlTXVsdGlwbGllciAqIHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIucmVzZWFyY2hJbnRlbGxpZ2VuY2VNdWx0aXBsaWVyKSxcbiAgICAgICAgYXZnRWZmaWNpZW5jeTogc29sdmVyUmVzdWx0LnhbM11cbiAgICAgICAgICAgIC8gKHVwZ3JhZGVBbmRSZXNlYXJjaE11bHRpcGxpZXIudXBncmFkZUVmZmljaWVuY3lNdWx0aXBsaWVyICogdXBncmFkZUFuZFJlc2VhcmNoTXVsdGlwbGllci5yZXNlYXJjaEVmZmljaWVuY3lNdWx0aXBsaWVyKSxcbiAgICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBS0EsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxhQUFhO0FBR2YsSUFBSyxXQUFMLGtCQUFLQSxjQUFMO0FBQ0gsRUFBQUEsVUFBQSxXQUFRO0FBQ1IsRUFBQUEsVUFBQSxlQUFZO0FBQ1osRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxjQUFXO0FBQ1gsRUFBQUEsVUFBQSxZQUFTO0FBQ1QsRUFBQUEsVUFBQSxjQUFXO0FBTkgsU0FBQUE7QUFBQSxHQUFBO0FBU0wsSUFBSyxZQUFMLGtCQUFLQyxlQUFMO0FBQ0gsRUFBQUEsV0FBQSxXQUFRO0FBQ1IsRUFBQUEsV0FBQSxjQUFXO0FBQ1gsRUFBQUEsV0FBQSxnQkFBYTtBQUNiLEVBQUFBLFdBQUEsWUFBUztBQUNULEVBQUFBLFdBQUEsVUFBTztBQUxDLFNBQUFBO0FBQUEsR0FBQTtBQVFMLElBQUssZUFBTCxrQkFBS0Msa0JBQUw7QUFDSCxFQUFBQSxjQUFBLGNBQVc7QUFDWCxFQUFBQSxjQUFBLFNBQU07QUFDTixFQUFBQSxjQUFBLFdBQVE7QUFDUixFQUFBQSxjQUFBLFVBQU87QUFDUCxFQUFBQSxjQUFBLFlBQVM7QUFDVCxFQUFBQSxjQUFBLFdBQVE7QUFDUixFQUFBQSxjQUFBLGNBQVc7QUFDWCxFQUFBQSxjQUFBLGVBQVk7QUFDWixFQUFBQSxjQUFBLFdBQVE7QUFDUixFQUFBQSxjQUFBLFlBQVM7QUFDVCxFQUFBQSxjQUFBLGNBQVc7QUFDWCxFQUFBQSxjQUFBLGlCQUFjO0FBWk4sU0FBQUE7QUFBQSxHQUFBO0FBZUwsSUFBSyxhQUFMLGtCQUFLQyxnQkFBTDtBQUNILEVBQUFBLFlBQUEsWUFBUztBQUNULEVBQUFBLFlBQUEsa0JBQWU7QUFDZixFQUFBQSxZQUFBLDRCQUF5QjtBQUN6QixF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LEVBQ2xFO0FBRUEsUUFBTSxLQUFLLFNBQVUsQ0FBQyxxQkFBcUIsbUJBQW1CLHVCQUF1QixtQkFBbUIsR0FBYTtBQUNqSCxXQUFPLE9BQU8sYUFBYSw2QkFBMkIsSUFBSSxrQkFDbkQsSUFBSSxvQkFBb0IsTUFBTSxNQUFNLHNCQUFzQixNQUFNLHVCQUNqRSxPQUFPLHdCQUF3Qiw2QkFBMkI7QUFBQSxFQUNwRTtBQUVBLFFBQU0sS0FBSyxTQUFVLENBQUMscUJBQXFCLG1CQUFtQix1QkFBdUIsbUJBQW1CLEdBQWE7QUFDakgsV0FBTyxPQUFPLGFBQWEsbURBQXFDLElBQUksa0JBQzdELE1BQU0sd0JBQXdCLE1BQU0sTUFBTSxzQkFBc0IsTUFBTSx1QkFDdkUsT0FBTyx3QkFBd0IsbURBQXFDO0FBQUEsRUFDOUU7QUFDQSxNQUFJLGVBQWtDO0FBQUEsSUFDbEMsU0FBUztBQUFBLElBQ1QsU0FBUztBQUFBLElBQ1QsR0FBRyxDQUFDO0FBQUEsSUFDSixRQUFRO0FBQUEsRUFDWjtBQUNBLFFBQU0sU0FBUyxJQUFJLE1BQU07QUFDekIsUUFBTSxPQUFPLFFBQVEsS0FBSyxXQUFZO0FBQ2xDLFdBQU8sYUFBYSxFQUFFO0FBQ3RCLFdBQU8sYUFBYSxFQUFFO0FBQ3RCLFdBQU8sYUFBYSxFQUFFO0FBQ3RCLFdBQU8sYUFBYSxFQUFFO0FBQ3RCLFdBQU8sYUFBYSxFQUFFO0FBQ3RCLFVBQU0sUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDN0IsbUJBQWUsT0FBTyxNQUFNLEtBQUs7QUFDakMsV0FBTyxPQUFPO0FBQUEsRUFDbEIsQ0FBQztBQUNELE1BQUksQ0FBQyxhQUFhLFNBQVM7QUFDdkIsWUFBUSxNQUFNLFlBQVk7QUFDMUIsVUFBTSxJQUFJLE1BQU0sd0RBQXdELEtBQUssVUFBVSxNQUFNLENBQUMsRUFBRTtBQUFBLEVBQ3BHO0FBQ0EsU0FBTztBQUFBLElBQ0gsZUFBZSxhQUFhLEVBQUUsQ0FBQyxLQUN4Qiw2QkFBNkIsOEJBQThCLDZCQUE2QjtBQUFBLElBQy9GLGFBQWEsYUFBYSxFQUFFLENBQUMsS0FDdEIsNkJBQTZCLDRCQUE0Qiw2QkFBNkI7QUFBQSxJQUM3RixpQkFBaUIsYUFBYSxFQUFFLENBQUMsS0FDMUIsNkJBQTZCLGdDQUFnQyw2QkFBNkI7QUFBQSxJQUNqRyxlQUFlLGFBQWEsRUFBRSxDQUFDLEtBQ3hCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCO0FBQUEsRUFDbkc7QUFDSjsiLAogICJuYW1lcyI6IFsiQ2l0eU5hbWUiLCAiQ29ycFN0YXRlIiwgIk1hdGVyaWFsTmFtZSIsICJVbmxvY2tOYW1lIiwgIlVwZ3JhZGVOYW1lIiwgIkVtcGxveWVlUG9zaXRpb24iLCAiUmVzZWFyY2hOYW1lIiwgIkluZHVzdHJ5VHlwZSJdCn0K
