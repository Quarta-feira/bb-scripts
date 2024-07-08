import { NetscriptExtension } from "/libs/NetscriptExtension";
function isPrimeNumberNotOptimized(input) {
  if (input === 2) {
    return true;
  }
  if (input <= 1 || input % 2 === 0) {
    return false;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let i = 3; i <= squareRootOfInput; i += 2) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
function isPrimeNumber(input) {
  if (input === 2 || input === 3) {
    return true;
  }
  if (input <= 1 || input % 2 === 0 || input % 3 === 0) {
    return false;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let potentialPrimeInFormOf6kMinus1 = 5; potentialPrimeInFormOf6kMinus1 <= squareRootOfInput; potentialPrimeInFormOf6kMinus1 += 6) {
    if (input % potentialPrimeInFormOf6kMinus1 === 0 || input % (potentialPrimeInFormOf6kMinus1 + 2) === 0) {
      return false;
    }
  }
  return true;
}
function findLargestPrimeFactor(input) {
  let largestPrime = -1;
  while (input % 2 === 0) {
    largestPrime = 2;
    input /= 2;
  }
  while (input % 3 === 0) {
    largestPrime = 3;
    input /= 3;
  }
  const squareRootOfInput = Math.sqrt(input);
  for (let potentialPrimeInFormOf6kMinus1 = 5; potentialPrimeInFormOf6kMinus1 <= squareRootOfInput; potentialPrimeInFormOf6kMinus1 += 6) {
    while (input % potentialPrimeInFormOf6kMinus1 === 0) {
      largestPrime = potentialPrimeInFormOf6kMinus1;
      input /= potentialPrimeInFormOf6kMinus1;
    }
    while (input % (potentialPrimeInFormOf6kMinus1 + 2) === 0) {
      largestPrime = potentialPrimeInFormOf6kMinus1 + 2;
      input /= potentialPrimeInFormOf6kMinus1 + 2;
    }
  }
  if (input > 4) {
    largestPrime = input;
  }
  return largestPrime;
}
var ContractType = /* @__PURE__ */ ((ContractType2) => {
  ContractType2[ContractType2["Find Largest Prime Factor"] = 0] = "Find Largest Prime Factor";
  ContractType2[ContractType2["Subarray with Maximum Sum"] = 1] = "Subarray with Maximum Sum";
  ContractType2[ContractType2["Total Ways to Sum"] = 2] = "Total Ways to Sum";
  ContractType2[ContractType2["Total Ways to Sum II"] = 3] = "Total Ways to Sum II";
  ContractType2[ContractType2["Spiralize Matrix"] = 4] = "Spiralize Matrix";
  ContractType2[ContractType2["Array Jumping Game"] = 5] = "Array Jumping Game";
  ContractType2[ContractType2["Array Jumping Game II"] = 6] = "Array Jumping Game II";
  ContractType2[ContractType2["Merge Overlapping Intervals"] = 7] = "Merge Overlapping Intervals";
  ContractType2[ContractType2["Generate IP Addresses"] = 8] = "Generate IP Addresses";
  ContractType2[ContractType2["Algorithmic Stock Trader I"] = 9] = "Algorithmic Stock Trader I";
  ContractType2[ContractType2["Algorithmic Stock Trader II"] = 10] = "Algorithmic Stock Trader II";
  ContractType2[ContractType2["Algorithmic Stock Trader III"] = 11] = "Algorithmic Stock Trader III";
  ContractType2[ContractType2["Algorithmic Stock Trader IV"] = 12] = "Algorithmic Stock Trader IV";
  ContractType2[ContractType2["Minimum Path Sum in a Triangle"] = 13] = "Minimum Path Sum in a Triangle";
  ContractType2[ContractType2["Unique Paths in a Grid I"] = 14] = "Unique Paths in a Grid I";
  ContractType2[ContractType2["Unique Paths in a Grid II"] = 15] = "Unique Paths in a Grid II";
  ContractType2[ContractType2["Shortest Path in a Grid"] = 16] = "Shortest Path in a Grid";
  ContractType2[ContractType2["Sanitize Parentheses in Expression"] = 17] = "Sanitize Parentheses in Expression";
  ContractType2[ContractType2["Find All Valid Math Expressions"] = 18] = "Find All Valid Math Expressions";
  ContractType2[ContractType2["HammingCodes: Integer to Encoded Binary"] = 19] = "HammingCodes: Integer to Encoded Binary";
  ContractType2[ContractType2["HammingCodes: Encoded Binary to Integer"] = 20] = "HammingCodes: Encoded Binary to Integer";
  ContractType2[ContractType2["Proper 2-Coloring of a Graph"] = 21] = "Proper 2-Coloring of a Graph";
  ContractType2[ContractType2["Compression I: RLE Compression"] = 22] = "Compression I: RLE Compression";
  ContractType2[ContractType2["Compression II: LZ Decompression"] = 23] = "Compression II: LZ Decompression";
  ContractType2[ContractType2["Compression III: LZ Compression"] = 24] = "Compression III: LZ Compression";
  ContractType2[ContractType2["Encryption I: Caesar Cipher"] = 25] = "Encryption I: Caesar Cipher";
  ContractType2[ContractType2["Encryption II: Vigen\xE8re Cipher"] = 26] = "Encryption II: Vigen\xE8re Cipher";
  return ContractType2;
})(ContractType || {});
function contractTypeToString(contractType) {
  return ContractType[contractType];
}
let nsx;
function main(ns) {
  nsx = new NetscriptExtension(ns);
  ns.disableLog("ALL");
  ns.clearLog();
  ns.tail();
  nsx.scanBFS("home", (host) => {
    const filenames = ns.ls(host.hostname, ".cct");
    filenames.forEach((filename) => {
      const contractType = ns.codingcontract.getContractType(filename, host.hostname);
      switch (contractType) {
        case contractTypeToString(0 /* Find Largest Prime Factor */): {
          const input = ns.codingcontract.getData(filename, host.hostname);
          ns.print(`Input: ${input}`);
          const output = findLargestPrimeFactor(input);
          ns.print(`Output: ${output}`);
          const result = ns.codingcontract.attempt(output, filename, host.hostname);
          ns.print(result !== "" ? `Success. Reward: ${result}` : "Fail");
          break;
        }
      }
    });
  });
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NjdC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtOU30gZnJvbSBcIkBuc1wiO1xuaW1wb3J0IHtOZXRzY3JpcHRFeHRlbnNpb259IGZyb20gXCIvbGlicy9OZXRzY3JpcHRFeHRlbnNpb25cIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBOb3Qgb3B0aW1pemVkXG4gKlxuICogQHBhcmFtIGlucHV0XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIGlzUHJpbWVOdW1iZXJOb3RPcHRpbWl6ZWQoaW5wdXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmIChpbnB1dCA9PT0gMikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlucHV0IDw9IDEgfHwgaW5wdXQgJSAyID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgc3F1YXJlUm9vdE9mSW5wdXQgPSBNYXRoLnNxcnQoaW5wdXQpO1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDw9IHNxdWFyZVJvb3RPZklucHV0OyBpICs9IDIpIHtcbiAgICAgICAgaWYgKGlucHV0ICUgaSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5mdW5jdGlvbiBpc1ByaW1lTnVtYmVyKGlucHV0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoaW5wdXQgPT09IDIgfHwgaW5wdXQgPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpbnB1dCA8PSAxIHx8IGlucHV0ICUgMiA9PT0gMCB8fCBpbnB1dCAlIDMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBzcXVhcmVSb290T2ZJbnB1dCA9IE1hdGguc3FydChpbnB1dCk7XG4gICAgLy8gQWxsIHByaW1lcyBncmVhdGVyIHRoYW4gMyBhcmUgb2YgdGhlIGZvcm0gNmtcdTAwQjExXG4gICAgLy8gVGhpcyBsb29wIHJlcHJlc2VudCBhbGwgbnVtYmVycyBncmVhdGVyIHRoYW4gb3IgZXF1YWxzIHRvIDUgYW5kIGluIHRoZSBmb3JtIG9mIDZrLTFcbiAgICBmb3IgKGxldCBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPSA1OyBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPD0gc3F1YXJlUm9vdE9mSW5wdXQ7IHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArPSA2KSB7XG4gICAgICAgIGlmICgoKGlucHV0ICUgcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxKSA9PT0gMCkgfHwgKChpbnB1dCAlIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgKyAyKSkgPT09IDApKSB7XG4gICAgICAgICAgICAvLyBJbnB1dCBpcyBhIGNvbXBvc2l0ZSBudW1iZXIgd2hpY2ggaXMgYSBwcm9kdWN0IG9mIHByaW1lcyBncmVhdGVyIHRoYW4gMy4gSXRzIHByaW1lIGZhY3RvcihzKSBpcy9hcmVcbiAgICAgICAgICAgIC8vIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEpIG9yIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgKyAyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBmaW5kTGFyZ2VzdFByaW1lRmFjdG9yKGlucHV0OiBudW1iZXIpIHtcbiAgICBsZXQgbGFyZ2VzdFByaW1lID0gLTE7XG4gICAgd2hpbGUgKGlucHV0ICUgMiA9PT0gMCkge1xuICAgICAgICBsYXJnZXN0UHJpbWUgPSAyO1xuICAgICAgICBpbnB1dCAvPSAyO1xuICAgIH1cbiAgICB3aGlsZSAoaW5wdXQgJSAzID09PSAwKSB7XG4gICAgICAgIGxhcmdlc3RQcmltZSA9IDM7XG4gICAgICAgIGlucHV0IC89IDM7XG4gICAgfVxuICAgIGNvbnN0IHNxdWFyZVJvb3RPZklucHV0ID0gTWF0aC5zcXJ0KGlucHV0KTtcbiAgICBmb3IgKGxldCBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPSA1OyBwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgPD0gc3F1YXJlUm9vdE9mSW5wdXQ7IHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSArPSA2KSB7XG4gICAgICAgIHdoaWxlIChpbnB1dCAlIHBvdGVudGlhbFByaW1lSW5Gb3JtT2Y2a01pbnVzMSA9PT0gMCkge1xuICAgICAgICAgICAgbGFyZ2VzdFByaW1lID0gcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxO1xuICAgICAgICAgICAgaW5wdXQgLz0gcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbnB1dCAlIChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgKyAyKSA9PT0gMCkge1xuICAgICAgICAgICAgbGFyZ2VzdFByaW1lID0gcG90ZW50aWFsUHJpbWVJbkZvcm1PZjZrTWludXMxICsgMjtcbiAgICAgICAgICAgIGlucHV0IC89IChwb3RlbnRpYWxQcmltZUluRm9ybU9mNmtNaW51czEgKyAyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5wdXQgPiA0KSB7XG4gICAgICAgIGxhcmdlc3RQcmltZSA9IGlucHV0O1xuICAgIH1cbiAgICByZXR1cm4gbGFyZ2VzdFByaW1lO1xufVxuXG5lbnVtIENvbnRyYWN0VHlwZSB7XG4gICAgLy8gbm9pbnNwZWN0aW9uIEpTTm9uQVNDSUlOYW1lc1xuICAgIFwiRmluZCBMYXJnZXN0IFByaW1lIEZhY3RvclwiLFxuICAgIFwiU3ViYXJyYXkgd2l0aCBNYXhpbXVtIFN1bVwiLFxuICAgIFwiVG90YWwgV2F5cyB0byBTdW1cIixcbiAgICBcIlRvdGFsIFdheXMgdG8gU3VtIElJXCIsXG4gICAgXCJTcGlyYWxpemUgTWF0cml4XCIsXG4gICAgXCJBcnJheSBKdW1waW5nIEdhbWVcIixcbiAgICBcIkFycmF5IEp1bXBpbmcgR2FtZSBJSVwiLFxuICAgIFwiTWVyZ2UgT3ZlcmxhcHBpbmcgSW50ZXJ2YWxzXCIsXG4gICAgXCJHZW5lcmF0ZSBJUCBBZGRyZXNzZXNcIixcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJXCIsXG4gICAgXCJBbGdvcml0aG1pYyBTdG9jayBUcmFkZXIgSUlcIixcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJSUlcIixcbiAgICBcIkFsZ29yaXRobWljIFN0b2NrIFRyYWRlciBJVlwiLFxuICAgIFwiTWluaW11bSBQYXRoIFN1bSBpbiBhIFRyaWFuZ2xlXCIsXG4gICAgXCJVbmlxdWUgUGF0aHMgaW4gYSBHcmlkIElcIixcbiAgICBcIlVuaXF1ZSBQYXRocyBpbiBhIEdyaWQgSUlcIixcbiAgICBcIlNob3J0ZXN0IFBhdGggaW4gYSBHcmlkXCIsXG4gICAgXCJTYW5pdGl6ZSBQYXJlbnRoZXNlcyBpbiBFeHByZXNzaW9uXCIsXG4gICAgXCJGaW5kIEFsbCBWYWxpZCBNYXRoIEV4cHJlc3Npb25zXCIsXG4gICAgXCJIYW1taW5nQ29kZXM6IEludGVnZXIgdG8gRW5jb2RlZCBCaW5hcnlcIixcbiAgICBcIkhhbW1pbmdDb2RlczogRW5jb2RlZCBCaW5hcnkgdG8gSW50ZWdlclwiLFxuICAgIFwiUHJvcGVyIDItQ29sb3Jpbmcgb2YgYSBHcmFwaFwiLFxuICAgIFwiQ29tcHJlc3Npb24gSTogUkxFIENvbXByZXNzaW9uXCIsXG4gICAgXCJDb21wcmVzc2lvbiBJSTogTFogRGVjb21wcmVzc2lvblwiLFxuICAgIFwiQ29tcHJlc3Npb24gSUlJOiBMWiBDb21wcmVzc2lvblwiLFxuICAgIFwiRW5jcnlwdGlvbiBJOiBDYWVzYXIgQ2lwaGVyXCIsXG4gICAgXCJFbmNyeXB0aW9uIElJOiBWaWdlblx1MDBFOHJlIENpcGhlclwiXG59XG5cbmZ1bmN0aW9uIGNvbnRyYWN0VHlwZVRvU3RyaW5nKGNvbnRyYWN0VHlwZTogQ29udHJhY3RUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gQ29udHJhY3RUeXBlW2NvbnRyYWN0VHlwZV07XG59XG5cbmxldCBuc3g6IE5ldHNjcmlwdEV4dGVuc2lvbjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4obnM6IE5TKTogdm9pZCB7XG4gICAgbnN4ID0gbmV3IE5ldHNjcmlwdEV4dGVuc2lvbihucyk7XG5cbiAgICBucy5kaXNhYmxlTG9nKFwiQUxMXCIpO1xuICAgIG5zLmNsZWFyTG9nKCk7XG4gICAgbnMudGFpbCgpO1xuXG4gICAgbnN4LnNjYW5CRlMoXCJob21lXCIsIGhvc3QgPT4ge1xuICAgICAgICBjb25zdCBmaWxlbmFtZXMgPSBucy5scyhob3N0Lmhvc3RuYW1lLCBcIi5jY3RcIik7XG4gICAgICAgIGZpbGVuYW1lcy5mb3JFYWNoKGZpbGVuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0VHlwZSA9IG5zLmNvZGluZ2NvbnRyYWN0LmdldENvbnRyYWN0VHlwZShmaWxlbmFtZSwgaG9zdC5ob3N0bmFtZSk7XG4gICAgICAgICAgICAvLyBucy5wcmludChgJHtob3N0Lmhvc3RuYW1lfSAtICR7ZmlsZW5hbWV9IC0gJHtjb250cmFjdFR5cGV9YCk7XG4gICAgICAgICAgICAvLyBucy5wcmludChucy5jb2Rpbmdjb250cmFjdC5nZXREZXNjcmlwdGlvbihmaWxlbmFtZSwgaG9zdC5ob3N0bmFtZSkpO1xuICAgICAgICAgICAgc3dpdGNoIChjb250cmFjdFR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbnRyYWN0VHlwZVRvU3RyaW5nKENvbnRyYWN0VHlwZVtcIkZpbmQgTGFyZ2VzdCBQcmltZSBGYWN0b3JcIl0pOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gbnMuY29kaW5nY29udHJhY3QuZ2V0RGF0YShmaWxlbmFtZSwgaG9zdC5ob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIG5zLnByaW50KGBJbnB1dDogJHtpbnB1dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gZmluZExhcmdlc3RQcmltZUZhY3RvcihpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgIG5zLnByaW50KGBPdXRwdXQ6ICR7b3V0cHV0fWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBucy5jb2Rpbmdjb250cmFjdC5hdHRlbXB0KG91dHB1dCwgZmlsZW5hbWUsIGhvc3QuaG9zdG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBucy5wcmludChyZXN1bHQgIT09IFwiXCIgPyBgU3VjY2Vzcy4gUmV3YXJkOiAke3Jlc3VsdH1gIDogXCJGYWlsXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQ0EsU0FBUSwwQkFBeUI7QUFRakMsU0FBUywwQkFBMEIsT0FBd0I7QUFDdkQsTUFBSSxVQUFVLEdBQUc7QUFDYixXQUFPO0FBQUEsRUFDWDtBQUNBLE1BQUksU0FBUyxLQUFLLFFBQVEsTUFBTSxHQUFHO0FBQy9CLFdBQU87QUFBQSxFQUNYO0FBQ0EsUUFBTSxvQkFBb0IsS0FBSyxLQUFLLEtBQUs7QUFDekMsV0FBUyxJQUFJLEdBQUcsS0FBSyxtQkFBbUIsS0FBSyxHQUFHO0FBQzVDLFFBQUksUUFBUSxNQUFNLEdBQUc7QUFDakIsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBQ0EsU0FBTztBQUNYO0FBR0EsU0FBUyxjQUFjLE9BQXdCO0FBQzNDLE1BQUksVUFBVSxLQUFLLFVB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
