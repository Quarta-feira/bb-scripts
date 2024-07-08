import { NetscriptExtension } from "/libs/NetscriptExtension";
import { DAEMON_SCRIPT_NAME } from "/libs/constants";
import { parseNumber } from "/libs/utils";
import { UpgradeName } from "/corporationFormulas";
import { clearPurchaseOrders, DivisionName, hasDivision } from "/corporationUtils";
import * as testingTools from "/corporationTestingTools";
import { exposeGameInternalObjects } from "/exploits";
let ns;
let nsx;
let doc;
const enableTestingTools = true;
let runCorpMaintain = false;
let runDelScripts = false;
let reload = false;
let runCorpRound = false;
let runCorpTest = false;
function rerun(ns2) {
  ns2.spawn(ns2.getScriptName(), { spawnDelay: 100 });
}
function removeTestingTool() {
  let testingToolsDiv = doc.querySelector("#testing-tools");
  if (testingToolsDiv) {
    testingToolsDiv.remove();
  }
}
function createTestingTool() {
  if (enableTestingTools) {
    removeTestingTool();
    const root = doc.querySelector("#root");
    const testingToolsTemplate = doc.createElement("template");
    testingToolsTemplate.innerHTML = `
<div id="testing-tools">
    <div>
        <button id="btn-corp-maintain">CorpMaintain</button>
        <button id="btn-unlimited-bonus-time">UnlimitedBonusTime</button>
        <button id="btn-remove-bonus-time">RemoveBonusTime</button>
        <button id="btn-corp-round">CorpRound</button>
        <button id="btn-corp-test">CorpTest</button>
        <button id="btn-import-save">ImportSave</button>
        <button id="btn-delete-all-scripts">DelScripts</button>
        <button id="btn-reload">Reload</button>
        <button id="btn-exit">Exit</button>
    </div>
    <div>
        <label for="testing-tools-input">Input:</label>
        <input id="testing-tools-input" type="text"/>
        <input id="testing-tools-file-input" type="file"/>
        <button id="btn-funds">Funds</button>
        <button id="btn-smart-factories">SmartFactories</button>
        <button id="btn-smart-storage">SmartStorage</button>
        <select id="select-save-data">
            <option value="current">Current</option>
        </select>
        <button id="btn-import-save-data">Import</button>
        <button id="btn-export-save-data">Export</button>
        <button id="btn-delete-save-data">Delete</button>
    </div>
    <div>
        <label for="testing-tools-divisions">Division:</label>
        <select name="divisions" id="testing-tools-divisions">
            <option value="Agriculture">Agriculture</option>
            <option value="Chemical">Chemical</option>
            <option value="Tobacco">Tobacco</option>
        </select>
        <button id="btn-rp">RP</button>
        <button id="btn-office">Office</button>
        <button id="btn-warehouse">Warehouse</button>
        <button id="btn-boost-materials">BoostMats</button>
        <button id="btn-clear-boost-materials">ClearBoostMats</button>
        <button id="btn-clear-input-materials">ClearInputMats</button>
        <button id="btn-clear-output-materials">ClearOutputMats</button>
        <button id="btn-clear-storage">ClearStorage</button>
    </div>
    <div>
    </div>
    <style>
        #testing-tools {
            transform: translate(850px, 5px);z-index: 9999;display: flex;flex-flow: wrap;position: fixed;min-width: 150px;
            max-width: 840px;min-height: 33px;border: 1px solid rgb(68, 68, 68);color: white;
        }
        #testing-tools > div {
            width: 100%;display: flex;
        }
        #btn-corp-test {
            margin-right: auto;
        }
        #btn-import-save {
            margin-left: auto;
        }
        #btn-funds {
            margin-left: 10px;
        }
        #btn-rp {
            margin-left: 10px;
        }
        #testing-tools-file-input {
            display: none;
        }
        #select-save-data {
            min-width: 195px;
        }
    </style>
</div>
        `.trim();
    root.appendChild(testingToolsTemplate.content.firstChild);
    const testingToolsDiv = doc.querySelector("#testing-tools");
    const savaDataSelectElement = doc.getElementById("select-save-data");
    const reloadSaveDataSelectElement = async () => {
      const keys = await testingTools.getAllSaveDataKeys();
      keys.sort((a, b) => {
        if (a === "save") {
          return 1;
        }
        return b.toString().localeCompare(a.toString());
      });
      savaDataSelectElement.innerHTML = "";
      for (const key of keys) {
        const option = document.createElement("option");
        option.text = key;
        option.value = key;
        savaDataSelectElement.add(option);
      }
    };
    reloadSaveDataSelectElement().then();
    doc.getElementById("btn-corp-maintain").addEventListener("click", function() {
      runCorpMaintain = true;
    });
    doc.getElementById("btn-unlimited-bonus-time").addEventListener("click", function() {
      testingTools.setUnlimitedBonusTime();
    });
    doc.getElementById("btn-remove-bonus-time").addEventListener("click", function() {
      testingTools.removeBonusTime();
    });
    doc.getElementById("btn-corp-round").addEventListener("click", function() {
      runCorpRound = true;
    });
    doc.getElementById("btn-corp-test").addEventListener("click", function() {
      runCorpTest = true;
    });
    doc.getElementById("btn-import-save").addEventListener("click", function() {
      const fileInput = doc.getElementById("testing-tools-file-input");
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e2) {
          const target = e2.target;
          if (target === null) {
            throw new Error("Error importing file");
          }
          const result = target.result;
          const indexedDbRequest = window.indexedDB.open("bitburnerSave", 1);
          indexedDbRequest.onsuccess = function() {
            const db = this.result;
            if (!db) {
              throw new Error("Cannot access database");
            }
            const objectStore = db.transaction(["savestring"], "readwrite").objectStore("savestring");
            const request = objectStore.put(
              result instanceof ArrayBuffer ? new Uint8Array(result) : result,
              "save"
            );
            request.onsuccess = () => {
              globalThis.setTimeout(() => globalThis.location.reload(), 1e3);
            };
          };
        };
        if (file.name.endsWith(".gz")) {
          reader.readAsArrayBuffer(file);
        } else {
          reader.readAsText(file);
        }
      };
      fileInput.click();
    });
    doc.getElementById("btn-delete-all-scripts").addEventListener("click", function() {
      runDelScripts = true;
    });
    doc.getElementById("btn-reload").addEventListener("click", function() {
      reload = true;
      testingToolsDiv.remove();
    });
    doc.getElementById("btn-exit").addEventListener("click", function() {
      testingToolsDiv.remove();
    });
    const getInputValue = function() {
      return doc.querySelector("#testing-tools-input").value;
    };
    const useInputValueAsNumber = function(callback) {
      const value = parseNumber(getInputValue());
      if (Number.isNaN(value)) {
        alert("Invalid input");
        return;
      }
      callback(value);
    };
    const useInputValueAsString = function(callback) {
      const value = getInputValue();
      if (!value) {
        alert("Invalid input");
        return;
      }
      callback(value);
    };
    const getDivisionName = function() {
      return doc.querySelector("#testing-tools-divisions").value;
    };
    doc.getElementById("btn-funds").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setFunds(inputValue);
      });
    });
    doc.getElementById("btn-smart-factories").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setUpgradeLevel(UpgradeName.SMART_FACTORIES, inputValue);
      });
    });
    doc.getElementById("btn-smart-storage").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setUpgradeLevel(UpgradeName.SMART_STORAGE, inputValue);
      });
    });
    doc.getElementById("btn-import-save-data").addEventListener("click", function() {
      testingTools.getSaveData(savaDataSelectElement.value).then((saveData) => {
        if (!saveData) {
          return;
        }
        testingTools.updateSaveData("save", saveData).then(() => {
          ns.killall("home");
          const currentAllServers = globalThis.AllServers.saveAllServers();
          globalThis.SaveObject.loadGame(saveData);
          setTimeout(() => {
            globalThis.AllServers.loadAllServers(currentAllServers);
            ns.exec("daemon.js", "home", 1, "--maintainCorporation");
          }, 1e3);
        });
      });
    });
    doc.getElementById("btn-export-save-data").addEventListener("click", async function() {
      testingTools.insertSaveData(await globalThis.SaveObject.saveObject.getSaveData(true, true)).then(() => {
        reloadSaveDataSelectElement().then();
      });
    });
    doc.getElementById("btn-delete-save-data").addEventListener("click", function() {
      const key = savaDataSelectElement.value;
      if (!key) {
        return;
      }
      if (key === "save") {
        alert(`You cannot delete the built-in "save"`);
        return;
      }
      testingTools.deleteSaveData(savaDataSelectElement.value).then(() => {
        reloadSaveDataSelectElement().then();
      });
    });
    doc.getElementById("btn-rp").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setResearchPoints(getDivisionName(), inputValue);
      });
    });
    doc.getElementById("btn-office").addEventListener("click", function() {
      useInputValueAsString((inputValue) => {
        const employeeJobs = inputValue.trim().split(",").map((value) => parseNumber(value)).filter((value) => !Number.isNaN(value));
        if (employeeJobs.length !== 5) {
          alert("Invalid input");
          return;
        }
        testingTools.setOfficeSetup(getDivisionName(), employeeJobs);
      });
    });
    doc.getElementById("btn-warehouse").addEventListener("click", function() {
      useInputValueAsNumber((inputValue) => {
        testingTools.setWarehouseLevel(getDivisionName(), inputValue);
      });
    });
    doc.getElementById("btn-boost-materials").addEventListener("click", function() {
      useInputValueAsString((inputValue) => {
        const boostMaterials = inputValue.trim().split(",").map((value) => parseNumber(value)).filter((value) => !Number.isNaN(value));
        if (boostMaterials.length !== 4) {
          alert("Invalid input");
          return;
        }
        testingTools.setBoostMaterials(getDivisionName(), boostMaterials);
      });
    });
    doc.getElementById("btn-clear-boost-materials").addEventListener("click", function() {
      testingTools.setBoostMaterials(getDivisionName(), [0, 0, 0, 0]);
    });
    doc.getElementById("btn-clear-input-materials").addEventListener("click", function() {
      testingTools.clearMaterials(getDivisionName(), { input: true, output: false });
    });
    doc.getElementById("btn-clear-output-materials").addEventListener("click", function() {
      testingTools.clearMaterials(getDivisionName(), { input: false, output: true });
    });
    doc.getElementById("btn-clear-storage").addEventListener("click", function() {
      clearPurchaseOrders(ns);
      testingTools.setBoostMaterials(getDivisionName(), [0, 0, 0, 0]);
      testingTools.clearMaterials(getDivisionName(), { input: true, output: true });
    });
  }
}
async function main(nsContext) {
  exposeGameInternalObjects();
  ns = nsContext;
  nsx = new NetscriptExtension(ns);
  nsx.killProcessesSpawnFromSameScript();
  ns.disableLog("ALL");
  ns.clearLog();
  doc = eval("document");
  const hook0 = doc.getElementById("overview-extra-hook-0");
  const hook1 = doc.getElementById("overview-extra-hook-1");
  nsx.addAtExitCallback(() => {
    hook0.innerText = "";
    hook1.innerText = "";
    removeTestingTool();
  });
  const headers = [];
  const values = [];
  headers.push("<div>ServerLoad</div>");
  values.push("<div id='hud-server-load'>0%</div>");
  if (ns.stock.hasWSEAccount()) {
    headers.push("<div>StockWorth</div>");
    values.push("<div id='hud-stock-worth'>0</div>");
  }
  if (ns.corporation.hasCorporation()) {
    headers.push("<div>InvestmentOffer</div>");
    values.push("<div id='hud-investment-offer'>0</div>");
    headers.push("<div>CorpMaintain</div>");
    values.push("<div id='hud-corp-maintain'>false</div>");
  }
  hook0.innerHTML = headers.join("");
  hook1.innerHTML = values.join("");
  if (globalThis.Player) {
    createTestingTool();
  }
  while (true) {
    try {
      let totalMaxRAMOfAllRunners = 0;
      let totalUsedRAMOfAllRunners = 0;
      nsx.scanBFS("home").filter((host) => {
        return ns.getServerMaxRam(host.hostname) > 0 && ns.hasRootAccess(host.hostname);
      }).forEach((runner) => {
        totalMaxRAMOfAllRunners += ns.getServerMaxRam(runner.hostname);
        totalUsedRAMOfAllRunners += ns.getServerUsedRam(runner.hostname);
      });
      doc.getElementById("hud-server-load").innerText = `${(totalUsedRAMOfAllRunners / totalMaxRAMOfAllRunners * 100).toFixed(2)}%`;
      if (ns.stock.hasWSEAccount()) {
        const hudStockWorthValue = doc.getElementById("hud-stock-worth");
        if (hudStockWorthValue === null) {
          rerun(ns);
          return;
        }
        const stockStats = nsx.calculateStockStats();
        hudStockWorthValue.innerText = ns.formatNumber(stockStats.currentWorth);
      }
      if (ns.corporation.hasCorporation()) {
        const hudInvestmentOfferValue = doc.getElementById("hud-investment-offer");
        if (hudInvestmentOfferValue === null) {
          rerun(ns);
          return;
        }
        hudInvestmentOfferValue.innerText = ns.formatNumber(ns.corporation.getInvestmentOffer().funds);
        let isDaemonRunning = false;
        ns.ps().forEach((process) => {
          if (process.filename !== DAEMON_SCRIPT_NAME) {
            return;
          }
          if (process.args.includes("--maintainCorporation")) {
            isDaemonRunning = true;
          }
        });
        doc.getElementById("hud-corp-maintain").innerText = `${isDaemonRunning}`;
        if (runCorpMaintain) {
          if (ns.exec("daemon.js", "home", 1, "--maintainCorporation") === 0) {
            ns.toast("Failed to run daemon.js --maintainCorporation");
          }
          runCorpMaintain = false;
        }
        if (runDelScripts) {
          ns.killall("home", true);
          if (ns.exec("tools.js", "home", 1, "--deleteAllScripts") === 0) {
            ns.toast("Failed to run tools.js --deleteAllScripts");
          }
          runDelScripts = false;
        }
        if (reload) {
          rerun(ns);
          reload = false;
        }
        if (runCorpRound) {
          if (!hasDivision(ns, DivisionName.CHEMICAL)) {
            if (ns.exec("corporation.js", "home", 1, "--round2", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --round2 --benchmark");
            }
          } else if (!hasDivision(ns, DivisionName.TOBACCO)) {
            if (ns.exec("corporation.js", "home", 1, "--round3", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --round3 --benchmark");
            }
          } else {
            if (ns.exec("corporation.js", "home", 1, "--improveAllDivisions", "--benchmark") === 0) {
              ns.toast("Failed to run corporation.js --improveAllDivisions --benchmark");
            }
          }
          runCorpRound = false;
        }
        if (runCorpTest) {
          if (ns.exec("corporation.js", "home", 1, "--test", "--benchmark") === 0) {
            ns.toast("Failed to run corporation.js --test --benchmark");
          }
          runCorpTest = false;
        }
      } else {
        if (runCorpRound) {
          if (ns.exec("corporation.js", "home", 1, "--round1", "--benchmark") === 0) {
            ns.toast("Failed to run corporation.js --round1 --benchmark");
          }
          await ns.sleep(1e3);
          ns.exec("daemon.js", "home", 1, "--maintainCorporation");
          testingTools.setUnlimitedBonusTime();
          runCorpRound = false;
        }
      }
    } catch (ex) {
      ns.print(`HUD error: ${JSON.stringify(ex)}`);
    }
    await ns.asleep(1e3);
  }
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2N1c3RvbUhVRC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgTlMgfSBmcm9tIFwiQG5zXCI7XG5pbXBvcnQgeyBOZXRzY3JpcHRFeHRlbnNpb24gfSBmcm9tIFwiL2xpYnMvTmV0c2NyaXB0RXh0ZW5zaW9uXCI7XG5pbXBvcnQgeyBEQUVNT05fU0NSSVBUX05BTUUgfSBmcm9tIFwiL2xpYnMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBwYXJzZU51bWJlciB9IGZyb20gXCIvbGlicy91dGlsc1wiO1xuaW1wb3J0IHsgVXBncmFkZU5hbWUgfSBmcm9tIFwiL2NvcnBvcmF0aW9uRm9ybXVsYXNcIjtcbmltcG9ydCB7IGNsZWFyUHVyY2hhc2VPcmRlcnMsIERpdmlzaW9uTmFtZSwgaGFzRGl2aXNpb24gfSBmcm9tIFwiL2NvcnBvcmF0aW9uVXRpbHNcIjtcbmltcG9ydCAqIGFzIHRlc3RpbmdUb29scyBmcm9tIFwiL2NvcnBvcmF0aW9uVGVzdGluZ1Rvb2xzXCI7XG5pbXBvcnQgeyBleHBvc2VHYW1lSW50ZXJuYWxPYmplY3RzIH0gZnJvbSBcIi9leHBsb2l0c1wiO1xuXG5sZXQgbnM6IE5TO1xubGV0IG5zeDogTmV0c2NyaXB0RXh0ZW5zaW9uO1xubGV0IGRvYzogRG9jdW1lbnQ7XG5cbmNvbnN0IGVuYWJsZVRlc3RpbmdUb29scyA9IHRydWU7XG5sZXQgcnVuQ29ycE1haW50YWluID0gZmFsc2U7XG5sZXQgcnVuRGVsU2NyaXB0cyA9IGZhbHNlO1xubGV0IHJlbG9hZCA9IGZhbHNlO1xubGV0IHJ1bkNvcnBSb3VuZCA9IGZhbHNlO1xubGV0IHJ1bkNvcnBUZXN0ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHJlcnVuKG5zOiBOUykge1xuICAgIG5zLnNwYXduKG5zLmdldFNjcmlwdE5hbWUoKSwgeyBzcGF3bkRlbGF5OiAxMDAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRlc3RpbmdUb29sKCkge1xuICAgIGxldCB0ZXN0aW5nVG9vbHNEaXYgPSBkb2MucXVlcnlTZWxlY3RvcihcIiN0ZXN0aW5nLXRvb2xzXCIpO1xuICAgIC8vIFJlbW92ZSBvbGQgdG9vbHNcbiAgICBpZiAodGVzdGluZ1Rvb2xzRGl2KSB7XG4gICAgICAgIHRlc3RpbmdUb29sc0Rpdi5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlc3RpbmdUb29sKCkge1xuICAgIC8vIFRlc3RpbmcgdG9vbHNcbiAgICBpZiAoZW5hYmxlVGVzdGluZ1Rvb2xzKSB7XG4gICAgICAgIHJlbW92ZVRlc3RpbmdUb29sKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRvb2xzXG4gICAgICAgIGNvbnN0IHJvb3Q6IEVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNyb290XCIpITtcbiAgICAgICAgY29uc3QgdGVzdGluZ1Rvb2xzVGVtcGxhdGUgPSBkb2MuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgICAgICB0ZXN0aW5nVG9vbHNUZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG48ZGl2IGlkPVwidGVzdGluZy10b29sc1wiPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tY29ycC1tYWludGFpblwiPkNvcnBNYWludGFpbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXVubGltaXRlZC1ib251cy10aW1lXCI+VW5saW1pdGVkQm9udXNUaW1lPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tcmVtb3ZlLWJvbnVzLXRpbWVcIj5SZW1vdmVCb251c1RpbWU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1jb3JwLXJvdW5kXCI+Q29ycFJvdW5kPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tY29ycC10ZXN0XCI+Q29ycFRlc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1pbXBvcnQtc2F2ZVwiPkltcG9ydFNhdmU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1kZWxldGUtYWxsLXNjcmlwdHNcIj5EZWxTY3JpcHRzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tcmVsb2FkXCI+UmVsb2FkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZXhpdFwiPkV4aXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwidGVzdGluZy10b29scy1pbnB1dFwiPklucHV0OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cInRlc3RpbmctdG9vbHMtaW5wdXRcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgPGlucHV0IGlkPVwidGVzdGluZy10b29scy1maWxlLWlucHV0XCIgdHlwZT1cImZpbGVcIi8+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZnVuZHNcIj5GdW5kczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXNtYXJ0LWZhY3Rvcmllc1wiPlNtYXJ0RmFjdG9yaWVzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tc21hcnQtc3RvcmFnZVwiPlNtYXJ0U3RvcmFnZTwvYnV0dG9uPlxuICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LXNhdmUtZGF0YVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImN1cnJlbnRcIj5DdXJyZW50PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWltcG9ydC1zYXZlLWRhdGFcIj5JbXBvcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1leHBvcnQtc2F2ZS1kYXRhXCI+RXhwb3J0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tZGVsZXRlLXNhdmUtZGF0YVwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0ZXN0aW5nLXRvb2xzLWRpdmlzaW9uc1wiPkRpdmlzaW9uOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgbmFtZT1cImRpdmlzaW9uc1wiIGlkPVwidGVzdGluZy10b29scy1kaXZpc2lvbnNcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBZ3JpY3VsdHVyZVwiPkFncmljdWx0dXJlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2hlbWljYWxcIj5DaGVtaWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRvYmFjY29cIj5Ub2JhY2NvPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLXJwXCI+UlA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1vZmZpY2VcIj5PZmZpY2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi13YXJlaG91c2VcIj5XYXJlaG91c2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1ib29zdC1tYXRlcmlhbHNcIj5Cb29zdE1hdHM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImJ0bi1jbGVhci1ib29zdC1tYXRlcmlhbHNcIj5DbGVhckJvb3N0TWF0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNsZWFyLWlucHV0LW1hdGVyaWFsc1wiPkNsZWFySW5wdXRNYXRzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gaWQ9XCJidG4tY2xlYXItb3V0cHV0LW1hdGVyaWFsc1wiPkNsZWFyT3V0cHV0TWF0czwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiYnRuLWNsZWFyLXN0b3JhZ2VcIj5DbGVhclN0b3JhZ2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZT5cbiAgICAgICAgI3Rlc3RpbmctdG9vbHMge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODUwcHgsIDVweCk7ei1pbmRleDogOTk5OTtkaXNwbGF5OiBmbGV4O2ZsZXgtZmxvdzogd3JhcDtwb3NpdGlvbjogZml4ZWQ7bWluLXdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODQwcHg7bWluLWhlaWdodDogMzNweDtib3JkZXI6IDFweCBzb2xpZCByZ2IoNjgsIDY4LCA2OCk7Y29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgICN0ZXN0aW5nLXRvb2xzID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO2Rpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgI2J0bi1jb3JwLXRlc3Qge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICNidG4taW1wb3J0LXNhdmUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgI2J0bi1mdW5kcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAjYnRuLXJwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICN0ZXN0aW5nLXRvb2xzLWZpbGUtaW5wdXQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjc2VsZWN0LXNhdmUtZGF0YSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE5NXB4O1xuICAgICAgICB9XG4gICAgPC9zdHlsZT5cbjwvZGl2PlxuICAgICAgICBgLnRyaW0oKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZCh0ZXN0aW5nVG9vbHNUZW1wbGF0ZS5jb250ZW50LmZpcnN0Q2hpbGQhKTtcbiAgICAgICAgY29uc3QgdGVzdGluZ1Rvb2xzRGl2ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdGluZy10b29sc1wiKSE7XG4gICAgICAgIGNvbnN0IHNhdmFEYXRhU2VsZWN0RWxlbWVudCA9IGRvYy5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1zYXZlLWRhdGFcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgcmVsb2FkU2F2ZURhdGFTZWxlY3RFbGVtZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IHRlc3RpbmdUb29scy5nZXRBbGxTYXZlRGF0YUtleXMoKTtcbiAgICAgICAgICAgIGtleXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhID09PSBcInNhdmVcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIudG9TdHJpbmcoKS5sb2NhbGVDb21wYXJlKGEudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNhdmFEYXRhU2VsZWN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBrZXkgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGtleSBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgc2F2YURhdGFTZWxlY3RFbGVtZW50LmFkZChvcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlbG9hZFNhdmVEYXRhU2VsZWN0RWxlbWVudCgpLnRoZW4oKTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvcnAtbWFpbnRhaW5cIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBydW5Db3JwTWFpbnRhaW4gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLXVubGltaXRlZC1ib251cy10aW1lXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldFVubGltaXRlZEJvbnVzVGltZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLXJlbW92ZS1ib251cy10aW1lXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnJlbW92ZUJvbnVzVGltZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvcnAtcm91bmRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBydW5Db3JwUm91bmQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNvcnAtdGVzdFwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bkNvcnBUZXN0ID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1pbXBvcnQtc2F2ZVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IGRvYy5nZXRFbGVtZW50QnlJZChcInRlc3RpbmctdG9vbHMtZmlsZS1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgZmlsZUlucHV0Lm9uY2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gKDxIVE1MSW5wdXRFbGVtZW50PmUudGFyZ2V0KS5maWxlcyFbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKHRoaXM6IEZpbGVSZWFkZXIsIGU6IFByb2dyZXNzRXZlbnQ8RmlsZVJlYWRlcj4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIGltcG9ydGluZyBmaWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ZWREYlJlcXVlc3Q6IElEQk9wZW5EQlJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4oXCJiaXRidXJuZXJTYXZlXCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVkRGJSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uICh0aGlzOiBJREJSZXF1ZXN0PElEQkRhdGFiYXNlPikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGIgPSB0aGlzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWNjZXNzIGRhdGFiYXNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0U3RvcmUgPSBkYi50cmFuc2FjdGlvbihbXCJzYXZlc3RyaW5nXCJdLCBcInJlYWR3cml0ZVwiKS5vYmplY3RTdG9yZShcInNhdmVzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqZWN0U3RvcmUucHV0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgPyBuZXcgVWludDhBcnJheShyZXN1bHQpIDogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5zZXRUaW1lb3V0KCgpID0+IGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCksIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUuZW5kc1dpdGgoXCIuZ3pcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmaWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1kZWxldGUtYWxsLXNjcmlwdHNcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBydW5EZWxTY3JpcHRzID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1yZWxvYWRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZWxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzRGl2IS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1leGl0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzRGl2IS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2MucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiN0ZXN0aW5nLXRvb2xzLWlucHV0XCIpIS52YWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrOiAoKGlucHV0VmFsdWU6IG51bWJlcikgPT4gdm9pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VOdW1iZXIoZ2V0SW5wdXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdXNlSW5wdXRWYWx1ZUFzU3RyaW5nID0gZnVuY3Rpb24gKGNhbGxiYWNrOiAoKGlucHV0VmFsdWU6IHN0cmluZykgPT4gdm9pZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGdldERpdmlzaW9uTmFtZSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICAgICAgICAgICAgcmV0dXJuIGRvYy5xdWVyeVNlbGVjdG9yPEhUTUxTZWxlY3RFbGVtZW50PihcIiN0ZXN0aW5nLXRvb2xzLWRpdmlzaW9uc1wiKSEudmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1mdW5kc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVzZUlucHV0VmFsdWVBc051bWJlcigoaW5wdXRWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEZ1bmRzKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc21hcnQtZmFjdG9yaWVzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX0ZBQ1RPUklFUywgaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1zbWFydC1zdG9yYWdlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0VXBncmFkZUxldmVsKFVwZ3JhZGVOYW1lLlNNQVJUX1NUT1JBR0UsIGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4taW1wb3J0LXNhdmUtZGF0YVwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5nZXRTYXZlRGF0YShzYXZhRGF0YVNlbGVjdEVsZW1lbnQudmFsdWUpLnRoZW4oc2F2ZURhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2F2ZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMudXBkYXRlU2F2ZURhdGEoXCJzYXZlXCIsIHNhdmVEYXRhKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbnMua2lsbGFsbChcImhvbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBbGxTZXJ2ZXJzID0gZ2xvYmFsVGhpcy5BbGxTZXJ2ZXJzLnNhdmVBbGxTZXJ2ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuU2F2ZU9iamVjdC5sb2FkR2FtZShzYXZlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5BbGxTZXJ2ZXJzLmxvYWRBbGxTZXJ2ZXJzKGN1cnJlbnRBbGxTZXJ2ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLmV4ZWMoXCJkYWVtb24uanNcIiwgXCJob21lXCIsIDEsIFwiLS1tYWludGFpbkNvcnBvcmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWV4cG9ydC1zYXZlLWRhdGFcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0ZXN0aW5nVG9vbHMuaW5zZXJ0U2F2ZURhdGEoYXdhaXQgZ2xvYmFsVGhpcy5TYXZlT2JqZWN0LnNhdmVPYmplY3QuZ2V0U2F2ZURhdGEodHJ1ZSwgdHJ1ZSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbG9hZFNhdmVEYXRhU2VsZWN0RWxlbWVudCgpLnRoZW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWRlbGV0ZS1zYXZlLWRhdGFcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBzYXZhRGF0YVNlbGVjdEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwic2F2ZVwiKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYFlvdSBjYW5ub3QgZGVsZXRlIHRoZSBidWlsdC1pbiBcInNhdmVcImApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5kZWxldGVTYXZlRGF0YShzYXZhRGF0YVNlbGVjdEVsZW1lbnQudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbG9hZFNhdmVEYXRhU2VsZWN0RWxlbWVudCgpLnRoZW4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLXJwXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0UmVzZWFyY2hQb2ludHMoZ2V0RGl2aXNpb25OYW1lKCksIGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tb2ZmaWNlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzU3RyaW5nKChpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbXBsb3llZUpvYnM6IG51bWJlcltdID0gaW5wdXRWYWx1ZS50cmltKCkuc3BsaXQoXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAodmFsdWUgPT4gcGFyc2VOdW1iZXIodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHZhbHVlID0+ICFOdW1iZXIuaXNOYU4odmFsdWUpKTtcbiAgICAgICAgICAgICAgICBpZiAoZW1wbG95ZWVKb2JzLmxlbmd0aCAhPT0gNSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkludmFsaWQgaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldE9mZmljZVNldHVwKGdldERpdmlzaW9uTmFtZSgpLCBlbXBsb3llZUpvYnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4td2FyZWhvdXNlXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzTnVtYmVyKChpbnB1dFZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXN0aW5nVG9vbHMuc2V0V2FyZWhvdXNlTGV2ZWwoZ2V0RGl2aXNpb25OYW1lKCksIGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYm9vc3QtbWF0ZXJpYWxzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdXNlSW5wdXRWYWx1ZUFzU3RyaW5nKChpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBib29zdE1hdGVyaWFsczogbnVtYmVyW10gPSBpbnB1dFZhbHVlLnRyaW0oKS5zcGxpdChcIixcIilcbiAgICAgICAgICAgICAgICAgICAgLm1hcCh2YWx1ZSA9PiBwYXJzZU51bWJlcih2YWx1ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIodmFsdWUgPT4gIU51bWJlci5pc05hTih2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGlmIChib29zdE1hdGVyaWFscy5sZW5ndGggIT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRCb29zdE1hdGVyaWFscyhnZXREaXZpc2lvbk5hbWUoKSwgYm9vc3RNYXRlcmlhbHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2xlYXItYm9vc3QtbWF0ZXJpYWxzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLnNldEJvb3N0TWF0ZXJpYWxzKGdldERpdmlzaW9uTmFtZSgpLCBbMCwgMCwgMCwgMF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNsZWFyLWlucHV0LW1hdGVyaWFsc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5jbGVhck1hdGVyaWFscyhnZXREaXZpc2lvbk5hbWUoKSwgeyBpbnB1dDogdHJ1ZSwgb3V0cHV0OiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImJ0bi1jbGVhci1vdXRwdXQtbWF0ZXJpYWxzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGVzdGluZ1Rvb2xzLmNsZWFyTWF0ZXJpYWxzKGdldERpdmlzaW9uTmFtZSgpLCB7IGlucHV0OiBmYWxzZSwgb3V0cHV0OiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKFwiYnRuLWNsZWFyLXN0b3JhZ2VcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclB1cmNoYXNlT3JkZXJzKG5zKTtcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRCb29zdE1hdGVyaWFscyhnZXREaXZpc2lvbk5hbWUoKSwgWzAsIDAsIDAsIDBdKTtcbiAgICAgICAgICAgIHRlc3RpbmdUb29scy5jbGVhck1hdGVyaWFscyhnZXREaXZpc2lvbk5hbWUoKSwgeyBpbnB1dDogdHJ1ZSwgb3V0cHV0OiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zQ29udGV4dDogTlMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBleHBvc2VHYW1lSW50ZXJuYWxPYmplY3RzKCk7XG4gICAgbnMgPSBuc0NvbnRleHQ7XG4gICAgbnN4ID0gbmV3IE5ldHNjcmlwdEV4dGVuc2lvbihucyk7XG4gICAgbnN4LmtpbGxQcm9jZXNzZXNTcGF3bkZyb21TYW1lU2NyaXB0KCk7XG5cbiAgICBucy5kaXNhYmxlTG9nKFwiQUxMXCIpO1xuICAgIG5zLmNsZWFyTG9nKCk7XG4gICAgLy8gbnMudGFpbCgpO1xuXG4gICAgZG9jID0gZXZhbChcImRvY3VtZW50XCIpO1xuICAgIGNvbnN0IGhvb2swID0gZG9jLmdldEVsZW1lbnRCeUlkKFwib3ZlcnZpZXctZXh0cmEtaG9vay0wXCIpITtcbiAgICBjb25zdCBob29rMSA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm92ZXJ2aWV3LWV4dHJhLWhvb2stMVwiKSE7XG4gICAgbnN4LmFkZEF0RXhpdENhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaG9vazAuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgaG9vazEuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgcmVtb3ZlVGVzdGluZ1Rvb2woKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXTtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgIGhlYWRlcnMucHVzaChcIjxkaXY+U2VydmVyTG9hZDwvZGl2PlwiKTtcbiAgICB2YWx1ZXMucHVzaChcIjxkaXYgaWQ9J2h1ZC1zZXJ2ZXItbG9hZCc+MCU8L2Rpdj5cIik7XG4gICAgaWYgKG5zLnN0b2NrLmhhc1dTRUFjY291bnQoKSkge1xuICAgICAgICBoZWFkZXJzLnB1c2goXCI8ZGl2PlN0b2NrV29ydGg8L2Rpdj5cIik7XG4gICAgICAgIHZhbHVlcy5wdXNoKFwiPGRpdiBpZD0naHVkLXN0b2NrLXdvcnRoJz4wPC9kaXY+XCIpO1xuICAgIH1cbiAgICBpZiAobnMuY29ycG9yYXRpb24uaGFzQ29ycG9yYXRpb24oKSkge1xuICAgICAgICBoZWFkZXJzLnB1c2goXCI8ZGl2PkludmVzdG1lbnRPZmZlcjwvZGl2PlwiKTtcbiAgICAgICAgdmFsdWVzLnB1c2goXCI8ZGl2IGlkPSdodWQtaW52ZXN0bWVudC1vZmZlcic+MDwvZGl2PlwiKTtcbiAgICAgICAgaGVhZGVycy5wdXNoKFwiPGRpdj5Db3JwTWFpbnRhaW48L2Rpdj5cIik7XG4gICAgICAgIHZhbHVlcy5wdXNoKFwiPGRpdiBpZD0naHVkLWNvcnAtbWFpbnRhaW4nPmZhbHNlPC9kaXY+XCIpO1xuICAgIH1cblxuICAgIGhvb2swLmlubmVySFRNTCA9IGhlYWRlcnMuam9pbihcIlwiKTtcbiAgICBob29rMS5pbm5lckhUTUwgPSB2YWx1ZXMuam9pbihcIlwiKTtcblxuICAgIGlmIChnbG9iYWxUaGlzLlBsYXllcikge1xuICAgICAgICBjcmVhdGVUZXN0aW5nVG9vbCgpO1xuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTY2FuIGFsbCBydW5uZXJzIGFuZCBjYWxjdWxhdGUgc2VydmVyIGxvYWRcbiAgICAgICAgICAgIGxldCB0b3RhbE1heFJBTU9mQWxsUnVubmVycyA9IDA7XG4gICAgICAgICAgICBsZXQgdG90YWxVc2VkUkFNT2ZBbGxSdW5uZXJzID0gMDtcbiAgICAgICAgICAgIG5zeC5zY2FuQkZTKFwiaG9tZVwiKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoaG9zdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBucy5nZXRTZXJ2ZXJNYXhSYW0oaG9zdC5ob3N0bmFtZSkgPiAwICYmIG5zLmhhc1Jvb3RBY2Nlc3MoaG9zdC5ob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChydW5uZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3RhbE1heFJBTU9mQWxsUnVubmVycyArPSBucy5nZXRTZXJ2ZXJNYXhSYW0ocnVubmVyLmhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdG90YWxVc2VkUkFNT2ZBbGxSdW5uZXJzICs9IG5zLmdldFNlcnZlclVzZWRSYW0ocnVubmVyLmhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImh1ZC1zZXJ2ZXItbG9hZFwiKSEuaW5uZXJUZXh0ID1cbiAgICAgICAgICAgICAgICBgJHsodG90YWxVc2VkUkFNT2ZBbGxSdW5uZXJzIC8gdG90YWxNYXhSQU1PZkFsbFJ1bm5lcnMgKiAxMDApLnRvRml4ZWQoMil9JWA7XG5cbiAgICAgICAgICAgIGlmIChucy5zdG9jay5oYXNXU0VBY2NvdW50KCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodWRTdG9ja1dvcnRoVmFsdWUgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJodWQtc3RvY2std29ydGhcIik7XG4gICAgICAgICAgICAgICAgaWYgKGh1ZFN0b2NrV29ydGhWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXJ1bihucyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvY2tTdGF0cyA9IG5zeC5jYWxjdWxhdGVTdG9ja1N0YXRzKCk7XG4gICAgICAgICAgICAgICAgaHVkU3RvY2tXb3J0aFZhbHVlLmlubmVyVGV4dCA9IG5zLmZvcm1hdE51bWJlcihzdG9ja1N0YXRzLmN1cnJlbnRXb3J0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChucy5jb3Jwb3JhdGlvbi5oYXNDb3Jwb3JhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHVkSW52ZXN0bWVudE9mZmVyVmFsdWUgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJodWQtaW52ZXN0bWVudC1vZmZlclwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaHVkSW52ZXN0bWVudE9mZmVyVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVydW4obnMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGh1ZEludmVzdG1lbnRPZmZlclZhbHVlLmlubmVyVGV4dCA9IG5zLmZvcm1hdE51bWJlcihucy5jb3Jwb3JhdGlvbi5nZXRJbnZlc3RtZW50T2ZmZXIoKS5mdW5kcyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaXNEYWVtb25SdW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbnMucHMoKS5mb3JFYWNoKHByb2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5maWxlbmFtZSAhPT0gREFFTU9OX1NDUklQVF9OQU1FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuYXJncy5pbmNsdWRlcyhcIi0tbWFpbnRhaW5Db3Jwb3JhdGlvblwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYWVtb25SdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvYy5nZXRFbGVtZW50QnlJZChcImh1ZC1jb3JwLW1haW50YWluXCIpIS5pbm5lclRleHQgPSBgJHtpc0RhZW1vblJ1bm5pbmd9YDtcblxuICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgdG9vbHNcbiAgICAgICAgICAgICAgICBpZiAocnVuQ29ycE1haW50YWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwiZGFlbW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tbWFpbnRhaW5Db3Jwb3JhdGlvblwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMudG9hc3QoXCJGYWlsZWQgdG8gcnVuIGRhZW1vbi5qcyAtLW1haW50YWluQ29ycG9yYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcnVuQ29ycE1haW50YWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5EZWxTY3JpcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5zLmtpbGxhbGwoXCJob21lXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnMuZXhlYyhcInRvb2xzLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tZGVsZXRlQWxsU2NyaXB0c1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMudG9hc3QoXCJGYWlsZWQgdG8gcnVuIHRvb2xzLmpzIC0tZGVsZXRlQWxsU2NyaXB0c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5EZWxTY3JpcHRzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVydW4obnMpO1xuICAgICAgICAgICAgICAgICAgICByZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bkNvcnBSb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQxXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMSAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQyXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMiAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQzXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMyAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0RpdmlzaW9uKG5zLCBEaXZpc2lvbk5hbWUuQ0hFTUlDQUwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQyXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS1yb3VuZDIgLS1iZW5jaG1hcmtcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhhc0RpdmlzaW9uKG5zLCBEaXZpc2lvbk5hbWUuVE9CQUNDTykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwiY29ycG9yYXRpb24uanNcIiwgXCJob21lXCIsIDEsIFwiLS1yb3VuZDNcIiwgXCItLWJlbmNobWFya1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMyAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChucy5leGVjKFwiY29ycG9yYXRpb24uanNcIiwgXCJob21lXCIsIDEsIFwiLS1pbXByb3ZlQWxsRGl2aXNpb25zXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucy50b2FzdChcIkZhaWxlZCB0byBydW4gY29ycG9yYXRpb24uanMgLS1pbXByb3ZlQWxsRGl2aXNpb25zIC0tYmVuY2htYXJrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bkNvcnBSb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVuQ29ycFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5zLmV4ZWMoXCJjb3Jwb3JhdGlvbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLXRlc3RcIiwgXCItLWJlbmNobWFya1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnMudG9hc3QoXCJGYWlsZWQgdG8gcnVuIGNvcnBvcmF0aW9uLmpzIC0tdGVzdCAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5Db3JwVGVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bkNvcnBSb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobnMuZXhlYyhcImNvcnBvcmF0aW9uLmpzXCIsIFwiaG9tZVwiLCAxLCBcIi0tcm91bmQxXCIsIFwiLS1iZW5jaG1hcmtcIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5zLnRvYXN0KFwiRmFpbGVkIHRvIHJ1biBjb3Jwb3JhdGlvbi5qcyAtLXJvdW5kMSAtLWJlbmNobWFya1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBucy5zbGVlcCgxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgbnMuZXhlYyhcImRhZW1vbi5qc1wiLCBcImhvbWVcIiwgMSwgXCItLW1haW50YWluQ29ycG9yYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHRlc3RpbmdUb29scy5zZXRVbmxpbWl0ZWRCb251c1RpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgcnVuQ29ycFJvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChleDogdW5rbm93bikge1xuICAgICAgICAgICAgbnMucHJpbnQoYEhVRCBlcnJvcjogJHtKU09OLnN0cmluZ2lmeShleCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgbnMuYXNsZWVwKDEwMDApO1xuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMsbUJBQW1CO0FBQzVCLFNBQVMscUJBQXFCLGNBQWMsbUJBQW1CO0FBQy9ELFlBQVksa0JBQWtCO0FBQzlCLFNBQVMsaUNBQWlDO0FBRTFDLElBQUk7QUFDSixJQUFJO0FBQ0osSUFBSTtBQUVKLE1BQU0scUJBQXFCO0FBQzNCLElBQUksa0JBQWtCO0FBQ3RCLElBQUksZ0JBQWdCO0FBQ3BCLElBQUksU0FBUztBQUNiLElBQUksZUFBZTtBQUNuQixJQUFJLGNBQWM7QUFFbEIsU0FBUyxNQUFNQSxLQUFRO0FBQ25CLEVBQUFBLElBQUcsTUFBTUEsSUFBRyxjQUFjLEdBQUcsRUFBRSxZQUFZLElBQUksQ0FBQztBQUNwRDtBQUVBLFNBQVMsb0JBQW9CO0FBQ3pCLE1BQUksa0JBQWtCLElBQUksY0FBYyxnQkFBZ0I7QUFFeEQsTUFBSSxpQkFBaUI7QUFDakIsb0JBQWdCLE9BQU87QUFBQSxFQUMzQjtBQUNKO0FBRUEsU0FBUyxvQkFBb0I7QUFFekIsTUFBSSxvQkFBb0I7QUFDcEIsc0JBQWtCO0FBR2xCLFVBQU0sT0FBZ0IsSUFBSSxjQUFjLE9BQU87QUFDL0MsVUFBTSx1QkFBdUIsSUFBSSxjQUFjLFVBQVU7QUFDekQseUJBQXFCLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXlFL0IsS0FBSztBQUNQLFNBQUssWUFBWSxxQkFBcUIsUUFBUSxVQUFXO0FBQ3pELFVBQU0sa0JBQWtCLElBQUksY0FBYyxnQkFBZ0I7QUFDMUQsVUFBTSx3QkFBd0IsSUFBSSxlQUFlLGtCQUFrQjtBQUVuRSxVQUFNLDhCQUE4QixZQUFZO0FBQzVDLFlBQU0sT0FBTyxNQUFNLGFBQWEsbUJBQW1CO0FBQ25ELFdBQUssS0FBSyxDQUFDLEdBQUcsTUFBTTtBQUNoQixZQUFJLE1BQU0sUUFBUTtBQUNkLGlCQUFPO0FBQUEsUUFDWDtBQUNBLGVBQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFNBQVMsQ0FBQztBQUFBLE1BQ2xELENBQUM7QUFDRCw0QkFBc0IsWUFBWTtBQUNsQyxpQkFBVyxPQUFPLE1BQU07QUFDcEIsY0FBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLGVBQU8sT0FBTztBQUNkLGVBQU8sUUFBUTtBQUNmLDhCQUFzQixJQUFJLE1BQU07QUFBQSxNQUNwQztBQUFBLElBQ0o7QUFFQSxnQ0FBNEIsRUFBRSxLQUFLO0FBQ25DLFFBQUksZUFBZSxtQkFBbUIsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQzNFLHdCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFDRCxRQUFJLGVBQWUsMEJBQTBCLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUNsRixtQkFBYSxzQkFBc0I7QUFBQSxJQUN2QyxDQUFDO0FBQ0QsUUFBSSxlQUFlLHVCQUF1QixFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDL0UsbUJBQWEsZ0JBQWdCO0FBQUEsSUFDakMsQ0FBQztBQUNELFFBQUksZUFBZSxnQkFBZ0IsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQ3hFLHFCQUFlO0FBQUEsSUFDbkIsQ0FBQztBQUNELFFBQUksZUFBZSxlQUFlLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUN2RSxvQkFBYztBQUFBLElBQ2xCLENBQUM7QUFDRCxRQUFJLGVBQWUsaUJBQWlCLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUN6RSxZQUFNLFlBQVksSUFBSSxlQUFlLDBCQUEwQjtBQUMvRCxnQkFBVSxXQUFXLENBQUMsTUFBTTtBQUN4QixjQUFNLE9BQTBCLEVBQUUsT0FBUSxNQUFPLENBQUM7QUFDbEQsY0FBTSxTQUFTLElBQUksV0FBVztBQUM5QixlQUFPLFNBQVMsU0FBNEJDLElBQThCO0FBQ3RFLGdCQUFNLFNBQVNBLEdBQUU7QUFDakIsY0FBSSxXQUFXLE1BQU07QUFDakIsa0JBQU0sSUFBSSxNQUFNLHNCQUFzQjtBQUFBLFVBQzFDO0FBQ0EsZ0JBQU0sU0FBUyxPQUFPO0FBQ3RCLGdCQUFNLG1CQUFxQyxPQUFPLFVBQVUsS0FBSyxpQkFBaUIsQ0FBQztBQUNuRiwyQkFBaUIsWUFBWSxXQUF5QztBQUNsRSxrQkFBTSxLQUFLLEtBQUs7QUFDaEIsZ0JBQUksQ0FBQyxJQUFJO0FBQ0wsb0JBQU0sSUFBSSxNQUFNLHdCQUF3QjtBQUFBLFlBQzVDO0FBQ0Esa0JBQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxZQUFZLEdBQUcsV0FBVyxFQUFFLFlBQVksWUFBWTtBQUN4RixrQkFBTSxVQUFVLFlBQVk7QUFBQSxjQUN2QixrQkFBa0IsY0FBZSxJQUFJLFdBQVcsTUFBTSxJQUFJO0FBQUEsY0FDM0Q7QUFBQSxZQUNKO0FBQ0Esb0JBQVEsWUFBWSxNQUFNO0FBQ3RCLHlCQUFXLFdBQVcsTUFBTSxXQUFXLFNBQVMsT0FBTyxHQUFHLEdBQUk7QUFBQSxZQUNsRTtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQ0EsWUFBSSxLQUFLLEtBQUssU0FBUyxLQUFLLEdBQUc7QUFDM0IsaUJBQU8sa0JBQWtCLElBQUk7QUFBQSxRQUNqQyxPQUFPO0FBQ0gsaUJBQU8sV0FBVyxJQUFJO0FBQUEsUUFDMUI7QUFBQSxNQUNKO0FBQ0EsZ0JBQVUsTUFBTTtBQUFBLElBQ3BCLENBQUM7QUFDRCxRQUFJLGVBQWUsd0JBQXdCLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUNoRixzQkFBZ0I7QUFBQSxJQUNwQixDQUFDO0FBQ0QsUUFBSSxlQUFlLFlBQVksRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQ3BFLGVBQVM7QUFDVCxzQkFBaUIsT0FBTztBQUFBLElBQzVCLENBQUM7QUFDRCxRQUFJLGVBQWUsVUFBVSxFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDbEUsc0JBQWlCLE9BQU87QUFBQSxJQUM1QixDQUFDO0FBRUQsVUFBTSxnQkFBZ0IsV0FBWTtBQUM5QixhQUFPLElBQUksY0FBZ0Msc0JBQXNCLEVBQUc7QUFBQSxJQUN4RTtBQUNBLFVBQU0sd0JBQXdCLFNBQVUsVUFBMEM7QUFDOUUsWUFBTSxRQUFRLFlBQVksY0FBYyxDQUFDO0FBQ3pDLFVBQUksT0FBTyxNQUFNLEtBQUssR0FBRztBQUNyQixjQUFNLGVBQWU7QUFDckI7QUFBQSxNQUNKO0FBQ0EsZUFBUyxLQUFLO0FBQUEsSUFDbEI7QUFDQSxVQUFNLHdCQUF3QixTQUFVLFVBQTBDO0FBQzlFLFlBQU0sUUFBUSxjQUFjO0FBQzVCLFVBQUksQ0FBQyxPQUFPO0FBQ1IsY0FBTSxlQUFlO0FBQ3JCO0FBQUEsTUFDSjtBQUNBLGVBQVMsS0FBSztBQUFBLElBQ2xCO0FBQ0EsVUFBTSxrQkFBa0IsV0FBb0I7QUFDeEMsYUFBTyxJQUFJLGNBQWlDLDBCQUEwQixFQUFHO0FBQUEsSUFDN0U7QUFDQSxRQUFJLGVBQWUsV0FBVyxFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDbkUsNEJBQXNCLENBQUMsZUFBdUI7QUFDMUMscUJBQWEsU0FBUyxVQUFVO0FBQUEsTUFDcEMsQ0FBQztBQUFBLElBQ0wsQ0FBQztBQUNELFFBQUksZUFBZSxxQkFBcUIsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQzdFLDRCQUFzQixDQUFDLGVBQXVCO0FBQzFDLHFCQUFhLGdCQUFnQixZQUFZLGlCQUFpQixVQUFVO0FBQUEsTUFDeEUsQ0FBQztBQUFBLElBQ0wsQ0FBQztBQUNELFFBQUksZUFBZSxtQkFBbUIsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQzNFLDRCQUFzQixDQUFDLGVBQXVCO0FBQzFDLHFCQUFhLGdCQUFnQixZQUFZLGVBQWUsVUFBVTtBQUFBLE1BQ3RFLENBQUM7QUFBQSxJQUNMLENBQUM7QUFDRCxRQUFJLGVBQWUsc0JBQXNCLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUM5RSxtQkFBYSxZQUFZLHNCQUFzQixLQUFLLEVBQUUsS0FBSyxjQUFZO0FBQ25FLFlBQUksQ0FBQyxVQUFVO0FBQ1g7QUFBQSxRQUNKO0FBQ0EscUJBQWEsZUFBZSxRQUFRLFFBQVEsRUFBRSxLQUFLLE1BQU07QUFDckQsYUFBRyxRQUFRLE1BQU07QUFDakIsZ0JBQU0sb0JBQW9CLFdBQVcsV0FBVyxlQUFlO0FBQy9ELHFCQUFXLFdBQVcsU0FBUyxRQUFRO0FBQ3ZDLHFCQUFXLE1BQU07QUFDYix1QkFBVyxXQUFXLGVBQWUsaUJBQWlCO0FBQ3RELGVBQUcsS0FBSyxhQUFhLFFBQVEsR0FBRyx1QkFBdUI7QUFBQSxVQUMzRCxHQUFHLEdBQUk7QUFBQSxRQUNYLENBQUM7QUFBQSxNQUNMLENBQUM7QUFBQSxJQUNMLENBQUM7QUFDRCxRQUFJLGVBQWUsc0JBQXNCLEVBQUcsaUJBQWlCLFNBQVMsaUJBQWtCO0FBQ3BGLG1CQUFhLGVBQWUsTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ25HLG9DQUE0QixFQUFFLEtBQUs7QUFBQSxNQUN2QyxDQUFDO0FBQUEsSUFDTCxDQUFDO0FBQ0QsUUFBSSxlQUFlLHNCQUFzQixFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDOUUsWUFBTSxNQUFNLHNCQUFzQjtBQUNsQyxVQUFJLENBQUMsS0FBSztBQUNOO0FBQUEsTUFDSjtBQUNBLFVBQUksUUFBUSxRQUFRO0FBQ2hCLGNBQU0sdUNBQXVDO0FBQzdDO0FBQUEsTUFDSjtBQUNBLG1CQUFhLGVBQWUsc0JBQXNCLEtBQUssRUFBRSxLQUFLLE1BQU07QUFDaEUsb0NBQTRCLEVBQUUsS0FBSztBQUFBLE1BQ3ZDLENBQUM7QUFBQSxJQUNMLENBQUM7QUFDRCxRQUFJLGVBQWUsUUFBUSxFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDaEUsNEJBQXNCLENBQUMsZUFBdUI7QUFDMUMscUJBQWEsa0JBQWtCLGdCQUFnQixHQUFHLFVBQVU7QUFBQSxNQUNoRSxDQUFDO0FBQUEsSUFDTCxDQUFDO0FBQ0QsUUFBSSxlQUFlLFlBQVksRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQ3BFLDRCQUFzQixDQUFDLGVBQXVCO0FBQzFDLGNBQU0sZUFBeUIsV0FBVyxLQUFLLEVBQUUsTUFBTSxHQUFHLEVBQ3JELElBQUksV0FBUyxZQUFZLEtBQUssQ0FBQyxFQUMvQixPQUFPLFdBQVMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxDQUFDO0FBQ3pDLFlBQUksYUFBYSxXQUFXLEdBQUc7QUFDM0IsZ0JBQU0sZUFBZTtBQUNyQjtBQUFBLFFBQ0o7QUFDQSxxQkFBYSxlQUFlLGdCQUFnQixHQUFHLFlBQVk7QUFBQSxNQUMvRCxDQUFDO0FBQUEsSUFDTCxDQUFDO0FBQ0QsUUFBSSxlQUFlLGVBQWUsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQ3ZFLDRCQUFzQixDQUFDLGVBQXVCO0FBQzFDLHFCQUFhLGtCQUFrQixnQkFBZ0IsR0FBRyxVQUFVO0FBQUEsTUFDaEUsQ0FBQztBQUFBLElBQ0wsQ0FBQztBQUNELFFBQUksZUFBZSxxQkFBcUIsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQzdFLDRCQUFzQixDQUFDLGVBQXVCO0FBQzFDLGNBQU0saUJBQTJCLFdBQVcsS0FBSyxFQUFFLE1BQU0sR0FBRyxFQUN2RCxJQUFJLFdBQVMsWUFBWSxLQUFLLENBQUMsRUFDL0IsT0FBTyxXQUFTLENBQUMsT0FBTyxNQUFNLEtBQUssQ0FBQztBQUN6QyxZQUFJLGVBQWUsV0FBVyxHQUFHO0FBQzdCLGdCQUFNLGVBQWU7QUFDckI7QUFBQSxRQUNKO0FBQ0EscUJBQWEsa0JBQWtCLGdCQUFnQixHQUFHLGNBQWM7QUFBQSxNQUNwRSxDQUFDO0FBQUEsSUFDTCxDQUFDO0FBQ0QsUUFBSSxlQUFlLDJCQUEyQixFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDbkYsbUJBQWEsa0JBQWtCLGdCQUFnQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQUEsSUFDbEUsQ0FBQztBQUNELFFBQUksZUFBZSwyQkFBMkIsRUFBRyxpQkFBaUIsU0FBUyxXQUFZO0FBQ25GLG1CQUFhLGVBQWUsZ0JBQWdCLEdBQUcsRUFBRSxPQUFPLE1BQU0sUUFBUSxNQUFNLENBQUM7QUFBQSxJQUNqRixDQUFDO0FBQ0QsUUFBSSxlQUFlLDRCQUE0QixFQUFHLGlCQUFpQixTQUFTLFdBQVk7QUFDcEYsbUJBQWEsZUFBZSxnQkFBZ0IsR0FBRyxFQUFFLE9BQU8sT0FBTyxRQUFRLEtBQUssQ0FBQztBQUFBLElBQ2pGLENBQUM7QUFDRCxRQUFJLGVBQWUsbUJBQW1CLEVBQUcsaUJBQWlCLFNBQVMsV0FBWTtBQUMzRSwwQkFBb0IsRUFBRTtBQUN0QixtQkFBYSxrQkFBa0IsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUQsbUJBQWEsZUFBZSxnQkFBZ0IsR0FBRyxFQUFFLE9BQU8sTUFBTSxRQUFRLEtBQUssQ0FBQztBQUFBLElBQ2hGLENBQUM7QUFBQSxFQUNMO0FBQ0o7QUFFQSxlQUFzQixLQUFLLFdBQThCO0FBQ3JELDRCQUEwQjtBQUMxQixPQUFLO0FBQ0wsUUFBTSxJQUFJLG1CQUFtQixFQUFFO0FBQy9CLE1BQUksaUNBQWlDO0FBRXJDLEtBQUcsV0FBVyxLQUFLO0FBQ25CLEtBQUcsU0FBUztBQUdaLFFBQU0sS0FBSyxVQUFVO0FBQ3JCLFFBQU0sUUFBUSxJQUFJLGVBQWUsdUJBQXVCO0FBQ3hELFFBQU0sUUFBUSxJQUFJLGVBQWUsdUJBQXVCO0FBQ3hELE1BQUksa0JBQWtCLE1BQU07QUFDeEIsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sWUFBWTtBQUNsQixzQkFBa0I7QUFBQSxFQUN0QixDQUFDO0FBRUQsUUFBTSxVQUFVLENBQUM7QUFDakIsUUFBTSxTQUFTLENBQUM7QUFFaEIsVUFBUSxLQUFLLHVCQUF1QjtBQUNwQyxTQUFPLEtBQUssb0NBQW9DO0FBQ2hELE1BQUksR0FBRyxNQUFNLGNBQWMsR0FBRztBQUMxQixZQUFRLEtBQUssdUJBQXVCO0FBQ3BDLFdBQU8sS0FBSyxtQ0FBbUM7QUFBQSxFQUNuRDtBQUNBLE1BQUksR0FBRyxZQUFZLGVBQWUsR0FBRztBQUNqQyxZQUFRLEtBQUssNEJBQTRCO0FBQ3pDLFdBQU8sS0FBSyx3Q0FBd0M7QUFDcEQsWUFBUSxLQUFLLHlCQUF5QjtBQUN0QyxXQUFPLEtBQUsseUNBQXlDO0FBQUEsRUFDekQ7QUFFQSxRQUFNLFlBQVksUUFBUSxLQUFLLEVBQUU7QUFDakMsUUFBTSxZQUFZLE9BQU8sS0FBSyxFQUFFO0FBRWhDLE1BQUksV0FBVyxRQUFRO0FBQ25CLHNCQUFrQjtBQUFBLEVBQ3RCO0FBRUEsU0FBTyxNQUFNO0FBQ1QsUUFBSTtBQUVBLFVBQUksMEJBQTBCO0FBQzlCLFVBQUksMkJBQTJCO0FBQy9CLFVBQUksUUFBUSxNQUFNLEVBQ2IsT0FBTyxVQUFRO0FBQ1osZUFBTyxHQUFHLGdCQUFnQixLQUFLLFFBQVEsSUFBSSxLQUFLLEdBQUcsY0FBYyxLQUFLLFFBQVE7QUFBQSxNQUNsRixDQUFDLEVBQ0EsUUFBUSxZQUFVO0FBQ2YsbUNBQTJCLEdBQUcsZ0JBQWdCLE9BQU8sUUFBUTtBQUM3RCxvQ0FBNEIsR0FBRyxpQkFBaUIsT0FBTyxRQUFRO0FBQUEsTUFDbkUsQ0FBQztBQUNMLFVBQUksZUFBZSxpQkFBaUIsRUFBRyxZQUNuQyxJQUFJLDJCQUEyQiwwQkFBMEIsS0FBSyxRQUFRLENBQUMsQ0FBQztBQUU1RSxVQUFJLEdBQUcsTUFBTSxjQUFjLEdBQUc7QUFDMUIsY0FBTSxxQkFBcUIsSUFBSSxlQUFlLGlCQUFpQjtBQUMvRCxZQUFJLHVCQUF1QixNQUFNO0FBQzdCLGdCQUFNLEVBQUU7QUFDUjtBQUFBLFFBQ0o7QUFDQSxjQUFNLGFBQWEsSUFBSSxvQkFBb0I7QUFDM0MsMkJBQW1CLFlBQVksR0FBRyxhQUFhLFdBQVcsWUFBWTtBQUFBLE1BQzFFO0FBRUEsVUFBSSxHQUFHLFlBQVksZUFBZSxHQUFHO0FBQ2pDLGNBQU0sMEJBQTBCLElBQUksZUFBZSxzQkFBc0I7QUFDekUsWUFBSSw0QkFBNEIsTUFBTTtBQUNsQyxnQkFBTSxFQUFFO0FBQ1I7QUFBQSxRQUNKO0FBQ0EsZ0NBQXdCLFlBQVksR0FBRyxhQUFhLEdBQUcsWUFBWSxtQkFBbUIsRUFBRSxLQUFLO0FBRTdGLFlBQUksa0JBQWtCO0FBQ3RCLFdBQUcsR0FBRyxFQUFFLFFBQVEsYUFBVztBQUN2QixjQUFJLFFBQVEsYUFBYSxvQkFBb0I7QUFDekM7QUFBQSxVQUNKO0FBQ0EsY0FBSSxRQUFRLEtBQUssU0FBUyx1QkFBdUIsR0FBRztBQUNoRCw4QkFBa0I7QUFBQSxVQUN0QjtBQUFBLFFBQ0osQ0FBQztBQUNELFlBQUksZUFBZSxtQkFBbUIsRUFBRyxZQUFZLEdBQUcsZUFBZTtBQUd2RSxZQUFJLGlCQUFpQjtBQUNqQixjQUFJLEdBQUcsS0FBSyxhQUFhLFFBQVEsR0FBRyx1QkFBdUIsTUFBTSxHQUFHO0FBQ2hFLGVBQUcsTUFBTSwrQ0FBK0M7QUFBQSxVQUM1RDtBQUNBLDRCQUFrQjtBQUFBLFFBQ3RCO0FBQ0EsWUFBSSxlQUFlO0FBQ2YsYUFBRyxRQUFRLFFBQVEsSUFBSTtBQUN2QixjQUFJLEdBQUcsS0FBSyxZQUFZLFFBQVEsR0FBRyxvQkFBb0IsTUFBTSxHQUFHO0FBQzVELGVBQUcsTUFBTSwyQ0FBMkM7QUFBQSxVQUN4RDtBQUNBLDBCQUFnQjtBQUFBLFFBQ3BCO0FBQ0EsWUFBSSxRQUFRO0FBQ1IsZ0JBQU0sRUFBRTtBQUNSLG1CQUFTO0FBQUEsUUFDYjtBQUNBLFlBQUksY0FBYztBQVVkLGNBQUksQ0FBQyxZQUFZLElBQUksYUFBYSxRQUFRLEdBQUc7QUFDekMsZ0JBQUksR0FBRyxLQUFLLGtCQUFrQixRQUFRLEdBQUcsWUFBWSxhQUFhLE1BQU0sR0FBRztBQUN2RSxpQkFBRyxNQUFNLG1EQUFtRDtBQUFBLFlBQ2hFO0FBQUEsVUFDSixXQUFXLENBQUMsWUFBWSxJQUFJLGFBQWEsT0FBTyxHQUFHO0FBQy9DLGdCQUFJLEdBQUcsS0FBSyxrQkFBa0IsUUFBUSxHQUFHLFlBQVksYUFBYSxNQUFNLEdBQUc7QUFDdkUsaUJBQUcsTUFBTSxtREFBbUQ7QUFBQSxZQUNoRTtBQUFBLFVBQ0osT0FBTztBQUNILGdCQUFJLEdBQUcsS0FBSyxrQkFBa0IsUUFBUSxHQUFHLHlCQUF5QixhQUFhLE1BQU0sR0FBRztBQUNwRixpQkFBRyxNQUFNLGdFQUFnRTtBQUFBLFlBQzdFO0FBQUEsVUFDSjtBQUNBLHlCQUFlO0FBQUEsUUFDbkI7QUFDQSxZQUFJLGFBQWE7QUFDYixjQUFJLEdBQUcsS0FBSyxrQkFBa0IsUUFBUSxHQUFHLFVBQVUsYUFBYSxNQUFNLEdBQUc7QUFDckUsZUFBRyxNQUFNLGlEQUFpRDtBQUFBLFVBQzlEO0FBQ0Esd0JBQWM7QUFBQSxRQUNsQjtBQUFBLE1BQ0osT0FBTztBQUNILFlBQUksY0FBYztBQUNkLGNBQUksR0FBRyxLQUFLLGtCQUFrQixRQUFRLEdBQUcsWUFBWSxhQUFhLE1BQU0sR0FBRztBQUN2RSxlQUFHLE1BQU0sbURBQW1EO0FBQUEsVUFDaEU7QUFDQSxnQkFBTSxHQUFHLE1BQU0sR0FBSTtBQUNuQixhQUFHLEtBQUssYUFBYSxRQUFRLEdBQUcsdUJBQXVCO0FBQ3ZELHVCQUFhLHNCQUFzQjtBQUNuQyx5QkFBZTtBQUFBLFFBQ25CO0FBQUEsTUFDSjtBQUFBLElBQ0osU0FBUyxJQUFhO0FBQ2xCLFNBQUcsTUFBTSxjQUFjLEtBQUssVUFBVSxFQUFFLENBQUMsRUFBRTtBQUFBLElBQy9DO0FBQ0EsVUFBTSxHQUFHLE9BQU8sR0FBSTtBQUFBLEVBQ3hCO0FBQ0o7IiwKICAibmFtZXMiOiBbIm5zIiwgImUiXQp9Cg==
