import { NetscriptExtension } from "libs/NetscriptExtension";
import { CompletedProgramName } from "libs/Enums";
let nsx;
async function main(ns) {
  nsx = new NetscriptExtension(ns);
  nsx.killProcessesSpawnFromSameScript();
  ns.disableLog("ALL");
  const hosts = nsx.scanBFS("home");
  while (true) {
    let hasRootAccessOnAllHosts = true;
    for (const host of hosts) {
      const hostname = host.hostname;
      const server = ns.getServer(hostname);
      if (ns.hasRootAccess(host.hostname)) {
        continue;
      }
      if (!server.sshPortOpen && ns.fileExists(CompletedProgramName.bruteSsh, "home")) {
        ns.brutessh(host.hostname);
        server.openPortCount++;
      }
      if (!server.ftpPortOpen && ns.fileExists(CompletedProgramName.ftpCrack, "home")) {
        ns.ftpcrack(host.hostname);
        server.openPortCount++;
      }
      if (!server.smtpPortOpen && ns.fileExists(CompletedProgramName.relaySmtp, "home")) {
        ns.relaysmtp(host.hostname);
        server.openPortCount++;
      }
      if (!server.httpPortOpen && ns.fileExists(CompletedProgramName.httpWorm, "home")) {
        ns.httpworm(host.hostname);
        server.openPortCount++;
      }
      if (!server.sqlPortOpen && ns.fileExists(CompletedProgramName.sqlInject, "home")) {
        ns.sqlinject(host.hostname);
        server.openPortCount++;
      }
      if (server.openPortCount >= ns.getServerNumPortsRequired(host.hostname)) {
        ns.nuke(host.hostname);
        ns.tprint(`Nuke ${host.hostname} successfully`);
      } else {
        hasRootAccessOnAllHosts = false;
      }
    }
    if (hasRootAccessOnAllHosts) {
      break;
    }
    await ns.sleep(5e3);
  }
}
export {
  main
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3B3bkFsbC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtOU30gZnJvbSBcIkBuc1wiO1xuaW1wb3J0IHtOZXRzY3JpcHRFeHRlbnNpb259IGZyb20gXCJsaWJzL05ldHNjcmlwdEV4dGVuc2lvblwiO1xuaW1wb3J0IHtDb21wbGV0ZWRQcm9ncmFtTmFtZX0gZnJvbSBcImxpYnMvRW51bXNcIjtcblxubGV0IG5zeDogTmV0c2NyaXB0RXh0ZW5zaW9uO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbihuczogTlMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuc3ggPSBuZXcgTmV0c2NyaXB0RXh0ZW5zaW9uKG5zKTtcbiAgICBuc3gua2lsbFByb2Nlc3Nlc1NwYXduRnJvbVNhbWVTY3JpcHQoKTtcblxuICAgIG5zLmRpc2FibGVMb2coXCJBTExcIik7XG5cbiAgICBjb25zdCBob3N0cyA9IG5zeC5zY2FuQkZTKFwiaG9tZVwiKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBsZXQgaGFzUm9vdEFjY2Vzc09uQWxsSG9zdHMgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGhvc3Qgb2YgaG9zdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RuYW1lID0gaG9zdC5ob3N0bmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZlciA9IG5zLmdldFNlcnZlcihob3N0bmFtZSk7XG4gICAgICAgICAgICBpZiAobnMuaGFzUm9vdEFjY2Vzcyhob3N0Lmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIuc3NoUG9ydE9wZW4gJiYgbnMuZmlsZUV4aXN0cyhDb21wbGV0ZWRQcm9ncmFtTmFtZS5icnV0ZVNzaCwgXCJob21lXCIpKSB7XG4gICAgICAgICAgICAgICAgbnMuYnJ1dGVzc2goaG9zdC5ob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgc2VydmVyLm9wZW5Qb3J0Q291bnQhKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlcnZlci5mdHBQb3J0T3BlbiAmJiBucy5maWxlRXhpc3RzKENvbXBsZXRlZFByb2dyYW1OYW1lLmZ0cENyYWNrLCBcImhvbWVcIikpIHtcbiAgICAgICAgICAgICAgICBucy5mdHBjcmFjayhob3N0Lmhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIub3BlblBvcnRDb3VudCErKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc2VydmVyLnNtdHBQb3J0T3BlbiAmJiBucy5maWxlRXhpc3RzKENvbXBsZXRlZFByb2dyYW1OYW1lLnJlbGF5U210cCwgXCJob21lXCIpKSB7XG4gICAgICAgICAgICAgICAgbnMucmVsYXlzbXRwKGhvc3QuaG9zdG5hbWUpO1xuICAgICAgICAgICAgICAgIHNlcnZlci5vcGVuUG9ydENvdW50ISsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIuaHR0cFBvcnRPcGVuICYmIG5zLmZpbGVFeGlzdHMoQ29tcGxldGVkUHJvZ3JhbU5hbWUuaHR0cFdvcm0sIFwiaG9tZVwiKSkge1xuICAgICAgICAgICAgICAgIG5zLmh0dHB3b3JtKGhvc3QuaG9zdG5hbWUpO1xuICAgICAgICAgICAgICAgIHNlcnZlci5vcGVuUG9ydENvdW50ISsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIuc3FsUG9ydE9wZW4gJiYgbnMuZmlsZUV4aXN0cyhDb21wbGV0ZWRQcm9ncmFtTmFtZS5zcWxJbmplY3QsIFwiaG9tZVwiKSkge1xuICAgICAgICAgICAgICAgIG5zLnNxbGluamVjdChob3N0Lmhvc3RuYW1lKTtcbiAgICAgICAgICAgICAgICBzZXJ2ZXIub3BlblBvcnRDb3VudCErKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZXJ2ZXIub3BlblBvcnRDb3VudCEgPj0gbnMuZ2V0U2VydmVyTnVtUG9ydHNSZXF1aXJlZChob3N0Lmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIG5zLm51a2UoaG9zdC5ob3N0bmFtZSk7XG4gICAgICAgICAgICAgICAgbnMudHByaW50KGBOdWtlICR7aG9zdC5ob3N0bmFtZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhc1Jvb3RBY2Nlc3NPbkFsbEhvc3RzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1Jvb3RBY2Nlc3NPbkFsbEhvc3RzKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBucy5zbGVlcCg1MDAwKTtcbiAgICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFDQSxTQUFRLDBCQUF5QjtBQUNqQyxTQUFRLDRCQUEyQjtBQUVuQyxJQUFJO0FBRUosZUFBc0IsS0FBSyxJQUF1QjtBQUM5QyxRQUFNLElBQUksbUJBQW1CLEVBQUU7QUFDL0IsTUFBSSxpQ0FBaUM7QUFFckMsS0FBRyxXQUFXLEtBQUs7QUFFbkIsUUFBTSxRQUFRLElBQUksUUFBUSxNQUFNO0FBQ2hDLFNBQU8sTUFBTTtBQUNULFFBQUksMEJBQTBCO0FBQzlCLGVBQVcsUUFBUSxPQUFPO0FBQ3RCLFlBQU0sV0FBVyxLQUFLO0FBQ3RCLFlBQU0sU0FBUyxHQUFHLFVBQVUsUUFBUTtBQUNwQyxVQUFJLEdBQUcsY0FBYyxLQUFLLFFBQVEsR0FBRztBQUNqQztBQUFBLE1BQ0o7QUFDQSxVQUFJLENBQUMsT0FBTyxlQUFlLEdBQUcsV0FBVyxxQkFBcUIsVUFBVSxNQUFNLEdBQUc7QUFDN0UsV0FBRyxTQUFTLEtBQUssUUFBUTtBQUN6QixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksQ0FBQyxPQUFPLGVBQWUsR0FBRyxXQUFXLHFCQUFxQixVQUFVLE1BQU0sR0FBRztBQUM3RSxXQUFHLFNBQVMsS0FBSyxRQUFRO0FBQ3pCLGVBQU87QUFBQSxNQUNYO0FBQ0EsVUFBSSxDQUFDLE9BQU8sZ0JBQWdCLEdBQUcsV0FBVyxxQkFBcUIsV0FBVyxNQUFNLEdBQUc7QUFDL0UsV0FBRyxVQUFVLEtBQUssUUFBUTtBQUMxQixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksQ0FBQyxPQUFPLGdCQUFnQixHQUFHLFdBQVcscUJBQXFCLFVBQVUsTUFBTSxHQUFHO0FBQzlFLFdBQUcsU0FBUyxLQUFLLFFBQVE7QUFDekIsZUFBTztBQUFBLE1BQ1g7QUFDQSxVQUFJLENBQUMsT0FBTyxlQUFlLEdBQUcsV0FBVyxxQkFBcUIsV0FBVyxNQUFNLEdBQUc7QUFDOUUsV0FBRyxVQUFVLEtBQUssUUFBUTtBQUMxQixlQUFPO0FBQUEsTUFDWDtBQUNBLFVBQUksT0FBTyxpQkFBa0IsR0FBRywwQkFBMEIsS0FBSyxRQUFRLEdBQUc7QUFDdEUsV0FBRyxLQUFLLEtBQUssUUFBUTtBQUNyQixXQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsZUFBZTtBQUFBLE1BQ2xELE9BQU87QUFDSCxrQ0FBMEI7QUFBQSxNQUM5QjtBQUFBLElBQ0o7QUFDQSxRQUFJLHlCQUF5QjtBQUN6QjtBQUFBLElBQ0o7QUFDQSxVQUFNLEdBQUcsTUFBTSxHQUFJO0FBQUEsRUFDdkI7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
