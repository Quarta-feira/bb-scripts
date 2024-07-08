function autocomplete(data, flags) {
  return ["--divisionName", "Agriculture"];
}
var CityName = /* @__PURE__ */ ((CityName2) => {
  CityName2["Aevum"] = "Aevum";
  CityName2["Chongqing"] = "Chongqing";
  CityName2["Sector12"] = "Sector-12";
  CityName2["NewTokyo"] = "New Tokyo";
  CityName2["Ishima"] = "Ishima";
  CityName2["Volhaven"] = "Volhaven";
  return CityName2;
})(CityName || {});
const cities = [
  "Sector-12" /* Sector12 */,
  "Aevum" /* Aevum */,
  "Chongqing" /* Chongqing */,
  "New Tokyo" /* NewTokyo */,
  "Ishima" /* Ishima */,
  "Volhaven" /* Volhaven */
];
const defaultConfig = [
  ["divisionName", "Agriculture"]
];
async function main(ns) {
  const config = ns.flags(defaultConfig);
  const divisionName = config.divisionName;
  while (true) {
    let finish = true;
    for (const city of cities) {
      const office = ns.corporation.getOffice(divisionName, city);
      if (office.avgEnergy < office.maxEnergy - 0.5) {
        ns.corporation.buyTea(divisionName, city);
        finish = false;
      }
      if (office.avgMorale < office.maxMorale - 0.5) {
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
export {
  autocomplete,
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2NvcnBvcmF0aW9uTWluaVNjcmlwdDEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIG5vaW5zcGVjdGlvbiBEdXBsaWNhdGVkQ29kZVxuaW1wb3J0IHtBdXRvY29tcGxldGVEYXRhLCBOU30gZnJvbSBcIkBuc1wiO1xuaW1wb3J0IHtOZXRzY3JpcHRGbGFnc1NjaGVtYX0gZnJvbSBcIi9saWJzL05ldHNjcmlwdEV4dGVuc2lvblwiO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgZnVuY3Rpb24gYXV0b2NvbXBsZXRlKGRhdGE6IEF1dG9jb21wbGV0ZURhdGEsIGZsYWdzOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1wiLS1kaXZpc2lvbk5hbWVcIiwgXCJBZ3JpY3VsdHVyZVwiXTtcbn1cblxuZW51bSBDaXR5TmFtZSB7XG4gICAgQWV2dW0gPSBcIkFldnVtXCIsXG4gICAgQ2hvbmdxaW5nID0gXCJDaG9uZ3FpbmdcIixcbiAgICBTZWN0b3IxMiA9IFwiU2VjdG9yLTEyXCIsXG4gICAgTmV3VG9reW8gPSBcIk5ldyBUb2t5b1wiLFxuICAgIElzaGltYSA9IFwiSXNoaW1hXCIsXG4gICAgVm9saGF2ZW4gPSBcIlZvbGhhdmVuXCIsXG59XG5cbmNvbnN0IGNpdGllczogQ2l0eU5hbWVbXSA9IFtcbiAgICBDaXR5TmFtZS5TZWN0b3IxMixcbiAgICBDaXR5TmFtZS5BZXZ1bSxcbiAgICBDaXR5TmFtZS5DaG9uZ3FpbmcsXG4gICAgQ2l0eU5hbWUuTmV3VG9reW8sXG4gICAgQ2l0eU5hbWUuSXNoaW1hLFxuICAgIENpdHlOYW1lLlZvbGhhdmVuXG5dO1xuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBOZXRzY3JpcHRGbGFnc1NjaGVtYSA9IFtcbiAgICBbXCJkaXZpc2lvbk5hbWVcIiwgXCJBZ3JpY3VsdHVyZVwiXSxcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG5zOiBOUyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5zLmZsYWdzKGRlZmF1bHRDb25maWcpO1xuICAgIGNvbnN0IGRpdmlzaW9uTmFtZSA9IGNvbmZpZy5kaXZpc2lvbk5hbWUgYXMgc3RyaW5nO1xuXG4gICAgLy8gbm9pbnNwZWN0aW9uIER1cGxpY2F0ZWRDb2RlXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IGZpbmlzaCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgY2l0eSBvZiBjaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZmljZSA9IG5zLmNvcnBvcmF0aW9uLmdldE9mZmljZShkaXZpc2lvbk5hbWUsIGNpdHkpO1xuICAgICAgICAgICAgaWYgKG9mZmljZS5hdmdFbmVyZ3kgPCBvZmZpY2UubWF4RW5lcmd5IC0gMC41KSB7XG4gICAgICAgICAgICAgICAgbnMuY29ycG9yYXRpb24uYnV5VGVhKGRpdmlzaW9uTmFtZSwgY2l0eSk7XG4gICAgICAgICAgICAgICAgZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2ZmaWNlLmF2Z01vcmFsZSA8IG9mZmljZS5tYXhNb3JhbGUgLSAwLjUpIHtcbiAgICAgICAgICAgICAgICBucy5jb3Jwb3JhdGlvbi50aHJvd1BhcnR5KGRpdmlzaW9uTmFtZSwgY2l0eSwgNTAwMDAwKTtcbiAgICAgICAgICAgICAgICBmaW5pc2ggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmluaXNoKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBucy5jb3Jwb3JhdGlvbi5uZXh0VXBkYXRlKCk7XG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBS08sU0FBUyxhQUFhLE1BQXdCLE9BQTJCO0FBQzVFLFNBQU8sQ0FBQyxrQkFBa0IsYUFBYTtBQUMzQztBQUVBLElBQUssV0FBTCxrQkFBS0EsY0FBTDtBQUNJLEVBQUFBLFVBQUEsV0FBUTtBQUNSLEVBQUFBLFVBQUEsZUFBWTtBQUNaLEVBQUFBLFVBQUEsY0FBVztBQUNYLEVBQUFBLFVBQUEsY0FBVztBQUNYLEVBQUFBLFVBQUEsWUFBUztBQUNULEVBQUFBLFVBQUEsY0FBVztBQU5WLFNBQUFBO0FBQUEsR0FBQTtBQVNMLE1BQU0sU0FBcUI7QUFBQSxFQUN2QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0o7QUFFQSxNQUFNLGdCQUFzQztBQUFBLEVBQ3hDLENBQUMsZ0JBQWdCLGFBQWE7QUFDbEM7QUFFQSxlQUFzQixLQUFLLElBQXVCO0FBQzlDLFFBQU0sU0FBUyxHQUFHLE1BQU0sYUFBYTtBQUNyQyxRQUFNLGVBQWUsT0FBTztBQUc1QixTQUFPLE1BQU07QUFDVCxRQUFJLFNBQVM7QUFDYixlQUFXLFFBQVEsUUFBUTtBQUN2QixZQUFNLFNBQVMsR0FBRyxZQUFZLFVBQVUsY0FBYyxJQUFJO0FBQzFELFVBQUksT0FBTyxZQUFZLE9BQU8sWUFBWSxLQUFLO0FBQzNDLFdBQUcsWUFBWSxPQUFPLGNBQWMsSUFBSTtBQUN4QyxpQkFBUztBQUFBLE1BQ2I7QUFDQSxVQUFJLE9BQU8sWUFBWSxPQUFPLFlBQVksS0FBSztBQUMzQyxXQUFHLFlBQVksV0FBVyxjQUFjLE1BQU0sR0FBTTtBQUNwRCxpQkFBUztBQUFBLE1BQ2I7QUFBQSxJQUNKO0FBQ0EsUUFBSSxRQUFRO0FBQ1I7QUFBQSxJQUNKO0FBQ0EsVUFBTSxHQUFHLFlBQVksV0FBVztBQUFBLEVBQ3BDO0FBQ0o7IiwKICAibmFtZXMiOiBbIkNpdHlOYW1lIl0KfQo=
