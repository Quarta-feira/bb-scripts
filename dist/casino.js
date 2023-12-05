import { WHRNG } from "/libs/RNG";
import { parseNumber } from "/libs/utils";
let doc;
let root;
let gameRootElement;
function assistRoulette(ns2) {
  let casinoToolsDiv = doc.querySelector("#casino-tools");
  if (casinoToolsDiv !== null) {
    casinoToolsDiv.remove();
  }
  const title = gameRootElement.querySelector("h4");
  if (title === null || title.textContent !== "Iker Molina Casino") {
    ns2.print("We are not in casino");
    return;
  }
  if (gameRootElement.querySelectorAll("h4").length !== 3) {
    ns2.print("This is not roulette");
    return;
  }
  const casinoToolsTemplate = doc.createElement("template");
  casinoToolsTemplate.innerHTML = `
<div id="casino-tools">
    <button id="btn-guess-seed">Guess seed</button>
    <button id="btn-guess-spins">Guess spins with seed</button>
    <button id="btn-highlight-next-guess">Highlight next guess</button>
    <button id="btn-exit">Exit</button>
    <div>
        <label for="roulette-seed">Seed:</label>
        <input id="roulette-seed" type="text"/>
    </div>
    <div>
        <label for="roulette-spins-for-guessing">Spins for guessing:</label>
        <input id="roulette-spins-for-guessing" type="text"/>
    </div>
    <div>
        <label for="roulette-guessed-spins">Guessed spins:</label>
        <textarea id="roulette-guessed-spins" aria-multiline="true" rows="5"></textarea>
    </div>
    <div>
        <label for="roulette-spin-history">Spin history:</label>
        <textarea id="roulette-spin-history" aria-multiline="true" rows="5"></textarea>
    </div>
    <style>
        #casino-tools {
            transform: translate(1150px, 5px);z-index: 9999;display: flex;flex-flow: wrap;position: fixed;min-width: 150px;
            max-width: 550px;min-height: 33px;border: 1px solid rgb(68, 68, 68);color: white;
        }
        #casino-tools > div {
            width: 100%;display: flex;
        }
        #casino-tools > div > label {
            min-width: 130px;
        }
        #casino-tools > div > input {
            flex: 1;
        }
        #casino-tools > div > textarea {
            flex: 1;
        }
        #btn-guess-seed {
            margin-right: 5px;
        }
        #btn-guess-spins {
            margin-right: 5px;
        }
        #btn-highlight-next-guess {
            margin-right: auto;
        }
        #btn-exit {
            margin-left: auto;
        }
    </style>
</div>
        `.trim();
  root.appendChild(casinoToolsTemplate.content.firstChild);
  casinoToolsDiv = doc.querySelector("#casino-tools");
  const rouletteSeedElement = casinoToolsDiv.querySelector("#roulette-seed");
  const rouletteSpinsForGuessingElement = casinoToolsDiv.querySelector("#roulette-spins-for-guessing");
  const rouletteGuessedSpinsElement = casinoToolsDiv.querySelector("#roulette-guessed-spins");
  const rouletteSpinHistoryElement = casinoToolsDiv.querySelector("#roulette-spin-history");
  casinoToolsDiv.querySelector("#btn-guess-seed").addEventListener("click", () => {
    const maxSeed = 3e7;
    const timestamp = (/* @__PURE__ */ new Date()).getTime();
    const zeroDate = timestamp - timestamp % maxSeed;
    if (rouletteSpinsForGuessingElement.value.trim() === "") {
      alert("Please set spins for guessing");
      return;
    }
    const spinsForGuessing = rouletteSpinsForGuessingElement.value.trim().split(" ").map((value) => {
      return parseNumber(value);
    });
    if (spinsForGuessing.length === 0 || spinsForGuessing.some((value) => {
      return Number.isNaN(parseNumber(value));
    })) {
      alert("Invalid spins for guessing");
      return;
    }
    let possibleSeed = 0;
    rouletteSeedElement.value = "";
    while (possibleSeed < maxSeed) {
      const rng = new WHRNG(zeroDate + possibleSeed);
      let match = true;
      for (const spin of spinsForGuessing) {
        if (spin !== Math.floor(rng.random() * 37)) {
          match = false;
        }
      }
      if (match) {
        rouletteSeedElement.value = (possibleSeed + zeroDate).toString();
        break;
      }
      possibleSeed = possibleSeed + 1;
    }
  });
  casinoToolsDiv.querySelector("#btn-guess-spins").addEventListener("click", () => {
    const rng = new WHRNG(parseNumber(rouletteSeedElement.value));
    rouletteGuessedSpinsElement.value = "";
    for (let i = 0; i < 100; i++) {
      rouletteGuessedSpinsElement.value += `${Math.floor(rng.random() * 37)} `;
    }
    highlightNextGuessedSpin();
  });
  casinoToolsDiv.querySelector("#btn-highlight-next-guess").addEventListener("click", () => {
    highlightNextGuessedSpin();
  });
  casinoToolsDiv.querySelector("#btn-exit").addEventListener("click", () => {
    casinoToolsDiv.remove();
  });
  const spinResultNumberElement = gameRootElement.querySelector("h4:nth-of-type(2)");
  function getSpinResultNumber() {
    if (spinResultNumberElement.textContent === "0") {
      return 0;
    }
    return parseNumber(spinResultNumberElement.textContent.slice(0, -1));
  }
  const spinResultRewardElement = gameRootElement.querySelector("h4:nth-of-type(3)");
  function getSpinResult() {
    return spinResultRewardElement.textContent.split(" ")[0];
  }
  const betButtons = gameRootElement.querySelectorAll("button");
  betButtons.forEach((betButton) => {
    betButton.addEventListener("click", () => {
      setTimeout(() => {
        const spinResult = getSpinResult();
        if (spinResult === "lost" && rouletteGuessedSpinsElement.value.trim() !== "") {
          rouletteSpinHistoryElement.value = `${rouletteSpinHistoryElement.value} ${betButton.textContent}`.trim();
        }
        rouletteSpinHistoryElement.value = `${rouletteSpinHistoryElement.value} ${getSpinResultNumber()}`.trim();
        highlightNextGuessedSpin();
      }, 2e3);
    });
  });
  function highlightBetButton(number) {
    for (const betButton of betButtons) {
      if (parseNumber(betButton.textContent) !== number) {
        betButton.style.backgroundColor = "#333";
        continue;
      }
      betButton.style.backgroundColor = "green";
    }
  }
  function resetBetButtons() {
    for (const betButton of betButtons) {
      betButton.style.backgroundColor = "#333";
    }
  }
  function highlightNextGuessedSpin() {
    const guessedSpins = rouletteGuessedSpinsElement.value.trim();
    const spinHistory = rouletteSpinHistoryElement.value.trim();
    if (guessedSpins === "" || spinHistory === "") {
      resetBetButtons();
      return;
    }
    const remainingGuessedSpins = guessedSpins.replace(spinHistory, "").trim().split(" ");
    if (remainingGuessedSpins.length === 0) {
      resetBetButtons();
      return;
    }
    highlightBetButton(parseNumber(remainingGuessedSpins[0]));
  }
  resetBetButtons();
}
async function main(ns) {
  ns.disableLog("ALL");
  ns.tail();
  ns.clearLog();
  doc = eval("document");
  root = doc.querySelector("#root");
  gameRootElement = doc.querySelector("#root > div:nth-of-type(2) > div:nth-of-type(2)");
  assistRoulette(ns);
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2Nhc2luby50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtOU30gZnJvbSBcIkBuc1wiO1xuaW1wb3J0IHtXSFJOR30gZnJvbSBcIi9saWJzL1JOR1wiO1xuaW1wb3J0IHtwYXJzZU51bWJlcn0gZnJvbSBcIi9saWJzL3V0aWxzXCI7XG5cbmxldCBkb2M6IERvY3VtZW50O1xubGV0IHJvb3Q6IEVsZW1lbnQ7XG5sZXQgZ2FtZVJvb3RFbGVtZW50OiBFbGVtZW50O1xuXG5mdW5jdGlvbiBhc3Npc3RSb3VsZXR0ZShuczogTlMpIHtcbiAgICBsZXQgY2FzaW5vVG9vbHNEaXYgPSBkb2MucXVlcnlTZWxlY3RvcihcIiNjYXNpbm8tdG9vbHNcIik7XG4gICAgLy8gUmVtb3ZlIG9sZCB0b29sc1xuICAgIGlmIChjYXNpbm9Ub29sc0RpdiAhPT0gbnVsbCkge1xuICAgICAgICBjYXNpbm9Ub29sc0Rpdi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGdhbWVSb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDRcIik7XG4gICAgaWYgKHRpdGxlID09PSBudWxsIHx8IHRpdGxlLnRleHRDb250ZW50ICE9PSBcIklrZXIgTW9saW5hIENhc2lub1wiKSB7XG4gICAgICAgIG5zLnByaW50KFwiV2UgYXJlIG5vdCBpbiBjYXNpbm9cIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGdhbWVSb290RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDRcIikubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIG5zLnByaW50KFwiVGhpcyBpcyBub3Qgcm91bGV0dGVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgdG9vbHNcbiAgICBjb25zdCBjYXNpbm9Ub29sc1RlbXBsYXRlID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICBjYXNpbm9Ub29sc1RlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxkaXYgaWQ9XCJjYXNpbm8tdG9vbHNcIj5cbiAgICA8YnV0dG9uIGlkPVwiYnRuLWd1ZXNzLXNlZWRcIj5HdWVzcyBzZWVkPC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1ndWVzcy1zcGluc1wiPkd1ZXNzIHNwaW5zIHdpdGggc2VlZDwvYnV0dG9uPlxuICAgIDxidXR0b24gaWQ9XCJidG4taGlnaGxpZ2h0LW5leHQtZ3Vlc3NcIj5IaWdobGlnaHQgbmV4dCBndWVzczwvYnV0dG9uPlxuICAgIDxidXR0b24gaWQ9XCJidG4tZXhpdFwiPkV4aXQ8L2J1dHRvbj5cbiAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwicm91bGV0dGUtc2VlZFwiPlNlZWQ6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicm91bGV0dGUtc2VlZFwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJyb3VsZXR0ZS1zcGlucy1mb3ItZ3Vlc3NpbmdcIj5TcGlucyBmb3IgZ3Vlc3Npbmc6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwicm91bGV0dGUtc3BpbnMtZm9yLWd1ZXNzaW5nXCIgdHlwZT1cInRleHRcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInJvdWxldHRlLWd1ZXNzZWQtc3BpbnNcIj5HdWVzc2VkIHNwaW5zOjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cInJvdWxldHRlLWd1ZXNzZWQtc3BpbnNcIiBhcmlhLW11bHRpbGluZT1cInRydWVcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInJvdWxldHRlLXNwaW4taGlzdG9yeVwiPlNwaW4gaGlzdG9yeTo8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJyb3VsZXR0ZS1zcGluLWhpc3RvcnlcIiBhcmlhLW11bHRpbGluZT1cInRydWVcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlPlxuICAgICAgICAjY2FzaW5vLXRvb2xzIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDExNTBweCwgNXB4KTt6LWluZGV4OiA5OTk5O2Rpc3BsYXk6IGZsZXg7ZmxleC1mbG93OiB3cmFwO3Bvc2l0aW9uOiBmaXhlZDttaW4td2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDttaW4taGVpZ2h0OiAzM3B4O2JvcmRlcjogMXB4IHNvbGlkIHJnYig2OCwgNjgsIDY4KTtjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgI2Nhc2luby10b29scyA+IGRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiBsYWJlbCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xuICAgICAgICB9XG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiBpbnB1dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgICNjYXNpbm8tdG9vbHMgPiBkaXYgPiB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgICNidG4tZ3Vlc3Mtc2VlZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAjYnRuLWd1ZXNzLXNwaW5zIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNidG4taGlnaGxpZ2h0LW5leHQtZ3Vlc3Mge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICNidG4tZXhpdCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgIDwvc3R5bGU+XG48L2Rpdj5cbiAgICAgICAgYC50cmltKCk7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChjYXNpbm9Ub29sc1RlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZCEpO1xuICAgIGNhc2lub1Rvb2xzRGl2ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjY2FzaW5vLXRvb2xzXCIpITtcbiAgICBjb25zdCByb3VsZXR0ZVNlZWRFbGVtZW50ID0gY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3VsZXR0ZS1zZWVkXCIpITtcbiAgICBjb25zdCByb3VsZXR0ZVNwaW5zRm9yR3Vlc3NpbmdFbGVtZW50ID0gY2FzaW5vVG9vbHNEaXYucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNyb3VsZXR0ZS1zcGlucy1mb3ItZ3Vlc3NpbmdcIikhO1xuICAgIGNvbnN0IHJvdWxldHRlR3Vlc3NlZFNwaW5zRWxlbWVudCA9IGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXCIjcm91bGV0dGUtZ3Vlc3NlZC1zcGluc1wiKSE7XG4gICAgY29uc3Qgcm91bGV0dGVTcGluSGlzdG9yeUVsZW1lbnQgPSBjYXNpbm9Ub29sc0Rpdi5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFwiI3JvdWxldHRlLXNwaW4taGlzdG9yeVwiKSE7XG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICAgIGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWd1ZXNzLXNlZWRcIikhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1heFNlZWQgPSAzMGU2O1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgY29uc3QgemVyb0RhdGUgPSB0aW1lc3RhbXAgLSAodGltZXN0YW1wICUgbWF4U2VlZCk7XG5cbiAgICAgICAgaWYgKHJvdWxldHRlU3BpbnNGb3JHdWVzc2luZ0VsZW1lbnQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBzZXQgc3BpbnMgZm9yIGd1ZXNzaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNwaW5zRm9yR3Vlc3NpbmcgPSByb3VsZXR0ZVNwaW5zRm9yR3Vlc3NpbmdFbGVtZW50LnZhbHVlLnRyaW0oKS5zcGxpdChcIiBcIikubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlcih2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3BpbnNGb3JHdWVzc2luZy5sZW5ndGggPT09IDAgfHwgc3BpbnNGb3JHdWVzc2luZy5zb21lKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIuaXNOYU4ocGFyc2VOdW1iZXIodmFsdWUpKTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiSW52YWxpZCBzcGlucyBmb3IgZ3Vlc3NpbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zc2libGVTZWVkID0gMDtcbiAgICAgICAgcm91bGV0dGVTZWVkRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHdoaWxlIChwb3NzaWJsZVNlZWQgPCBtYXhTZWVkKSB7XG4gICAgICAgICAgICBjb25zdCBybmcgPSBuZXcgV0hSTkcoemVyb0RhdGUgKyBwb3NzaWJsZVNlZWQpO1xuICAgICAgICAgICAgbGV0IG1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3BpbiBvZiBzcGluc0Zvckd1ZXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwaW4gIT09IE1hdGguZmxvb3Iocm5nLnJhbmRvbSgpICogMzcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcm91bGV0dGVTZWVkRWxlbWVudC52YWx1ZSA9IChwb3NzaWJsZVNlZWQgKyB6ZXJvRGF0ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBvc3NpYmxlU2VlZCA9IHBvc3NpYmxlU2VlZCArIDE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjYXNpbm9Ub29sc0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2J0bi1ndWVzcy1zcGluc1wiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm5nID0gbmV3IFdIUk5HKHBhcnNlTnVtYmVyKHJvdWxldHRlU2VlZEVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlICs9IGAke01hdGguZmxvb3Iocm5nLnJhbmRvbSgpICogMzcpfSBgO1xuICAgICAgICB9XG4gICAgICAgIGhpZ2hsaWdodE5leHRHdWVzc2VkU3BpbigpO1xuICAgIH0pO1xuICAgIGNhc2lub1Rvb2xzRGl2LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWhpZ2hsaWdodC1uZXh0LWd1ZXNzXCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBoaWdobGlnaHROZXh0R3Vlc3NlZFNwaW4oKTtcbiAgICB9KTtcbiAgICBjYXNpbm9Ub29sc0Rpdi5xdWVyeVNlbGVjdG9yKFwiI2J0bi1leGl0XCIpIS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjYXNpbm9Ub29sc0RpdiEucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcGluUmVzdWx0TnVtYmVyRWxlbWVudCA9IGdhbWVSb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaDQ6bnRoLW9mLXR5cGUoMilcIikhO1xuXG4gICAgZnVuY3Rpb24gZ2V0U3BpblJlc3VsdE51bWJlcigpIHtcbiAgICAgICAgaWYgKHNwaW5SZXN1bHROdW1iZXJFbGVtZW50LnRleHRDb250ZW50ID09PSBcIjBcIikge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlTnVtYmVyKHNwaW5SZXN1bHROdW1iZXJFbGVtZW50LnRleHRDb250ZW50IS5zbGljZSgwLCAtMSkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNwaW5SZXN1bHRSZXdhcmRFbGVtZW50ID0gZ2FtZVJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoNDpudGgtb2YtdHlwZSgzKVwiKSE7XG5cbiAgICBmdW5jdGlvbiBnZXRTcGluUmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gc3BpblJlc3VsdFJld2FyZEVsZW1lbnQudGV4dENvbnRlbnQhLnNwbGl0KFwiIFwiKVswXTtcbiAgICB9XG5cbiAgICBjb25zdCBiZXRCdXR0b25zID0gZ2FtZVJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gICAgYmV0QnV0dG9ucy5mb3JFYWNoKGJldEJ1dHRvbiA9PiB7XG4gICAgICAgIGJldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BpblJlc3VsdCA9IGdldFNwaW5SZXN1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BpblJlc3VsdCA9PT0gXCJsb3N0XCIgJiYgcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByb3VsZXR0ZVNwaW5IaXN0b3J5RWxlbWVudC52YWx1ZSA9IGAke3JvdWxldHRlU3Bpbkhpc3RvcnlFbGVtZW50LnZhbHVlfSAke2JldEJ1dHRvbi50ZXh0Q29udGVudH1gLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm91bGV0dGVTcGluSGlzdG9yeUVsZW1lbnQudmFsdWUgPSBgJHtyb3VsZXR0ZVNwaW5IaXN0b3J5RWxlbWVudC52YWx1ZX0gJHtnZXRTcGluUmVzdWx0TnVtYmVyKCl9YC50cmltKCk7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0TmV4dEd1ZXNzZWRTcGluKCk7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBoaWdobGlnaHRCZXRCdXR0b24obnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChjb25zdCBiZXRCdXR0b24gb2YgYmV0QnV0dG9ucykge1xuICAgICAgICAgICAgaWYgKHBhcnNlTnVtYmVyKGJldEJ1dHRvbi50ZXh0Q29udGVudCkgIT09IG51bWJlcikge1xuICAgICAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzNcIjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldEJldEJ1dHRvbnMoKSB7XG4gICAgICAgIGZvciAoY29uc3QgYmV0QnV0dG9uIG9mIGJldEJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGJldEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMzMzNcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZ2hsaWdodE5leHRHdWVzc2VkU3BpbigpIHtcbiAgICAgICAgY29uc3QgZ3Vlc3NlZFNwaW5zID0gcm91bGV0dGVHdWVzc2VkU3BpbnNFbGVtZW50LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgY29uc3Qgc3Bpbkhpc3RvcnkgPSByb3VsZXR0ZVNwaW5IaXN0b3J5RWxlbWVudC52YWx1ZS50cmltKCk7XG4gICAgICAgIGlmIChndWVzc2VkU3BpbnMgPT09IFwiXCIgfHwgc3Bpbkhpc3RvcnkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIHJlc2V0QmV0QnV0dG9ucygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0d1ZXNzZWRTcGlucyA9IGd1ZXNzZWRTcGlucy5yZXBsYWNlKHNwaW5IaXN0b3J5LCBcIlwiKS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBpZiAocmVtYWluaW5nR3Vlc3NlZFNwaW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmVzZXRCZXRCdXR0b25zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaGlnaGxpZ2h0QmV0QnV0dG9uKHBhcnNlTnVtYmVyKHJlbWFpbmluZ0d1ZXNzZWRTcGluc1swXSkpO1xuICAgIH1cblxuICAgIC8vIFJlc2V0XG4gICAgcmVzZXRCZXRCdXR0b25zKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zOiBOUykge1xuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XG4gICAgbnMudGFpbCgpO1xuICAgIG5zLmNsZWFyTG9nKCk7XG5cbiAgICBkb2MgPSBldmFsKFwiZG9jdW1lbnRcIik7XG4gICAgcm9vdCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikhO1xuICAgIGdhbWVSb290RWxlbWVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI3Jvb3QgPiBkaXY6bnRoLW9mLXR5cGUoMikgPiBkaXY6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
