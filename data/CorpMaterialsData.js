const CorpMaterialsData = {
  "Water": {
    "name": "Water",
    "size": 0.05,
    "demandBase": 75,
    "demandRange": [
      65,
      85
    ],
    "competitionBase": 50,
    "competitionRange": [
      40,
      60
    ],
    "baseCost": 1500,
    "maxVolatility": 0.2,
    "baseMarkup": 6
  },
  "Ore": {
    "name": "Ore",
    "size": 0.01,
    "demandBase": 50,
    "demandRange": [
      40,
      60
    ],
    "competitionBase": 80,
    "competitionRange": [
      65,
      95
    ],
    "baseCost": 500,
    "maxVolatility": 0.2,
    "baseMarkup": 6
  },
  "Minerals": {
    "name": "Minerals",
    "size": 0.04,
    "demandBase": 75,
    "demandRange": [
      60,
      90
    ],
    "competitionBase": 80,
    "competitionRange": [
      65,
      95
    ],
    "baseCost": 500,
    "maxVolatility": 0.2,
    "baseMarkup": 6
  },
  "Food": {
    "name": "Food",
    "size": 0.03,
    "demandBase": 80,
    "demandRange": [
      70,
      90
    ],
    "competitionBase": 60,
    "competitionRange": [
      35,
      85
    ],
    "baseCost": 5e3,
    "maxVolatility": 1,
    "baseMarkup": 3
  },
  "Plants": {
    "name": "Plants",
    "size": 0.05,
    "demandBase": 70,
    "demandRange": [
      20,
      90
    ],
    "competitionBase": 50,
    "competitionRange": [
      30,
      70
    ],
    "baseCost": 3e3,
    "maxVolatility": 0.6,
    "baseMarkup": 3.75
  },
  "Metal": {
    "name": "Metal",
    "size": 0.1,
    "demandBase": 80,
    "demandRange": [
      75,
      85
    ],
    "competitionBase": 70,
    "competitionRange": [
      60,
      80
    ],
    "baseCost": 2650,
    "maxVolatility": 1,
    "baseMarkup": 6
  },
  "Hardware": {
    "name": "Hardware",
    "size": 0.06,
    "demandBase": 85,
    "demandRange": [
      80,
      90
    ],
    "competitionBase": 80,
    "competitionRange": [
      65,
      95
    ],
    "baseCost": 8e3,
    "maxVolatility": 0.5,
    "baseMarkup": 1
  },
  "Chemicals": {
    "name": "Chemicals",
    "size": 0.05,
    "demandBase": 55,
    "demandRange": [
      40,
      70
    ],
    "competitionBase": 60,
    "competitionRange": [
      40,
      80
    ],
    "baseCost": 9e3,
    "maxVolatility": 1.2,
    "baseMarkup": 2
  },
  "Drugs": {
    "name": "Drugs",
    "size": 0.02,
    "demandBase": 60,
    "demandRange": [
      45,
      75
    ],
    "competitionBase": 70,
    "competitionRange": [
      40,
      99
    ],
    "baseCost": 4e4,
    "maxVolatility": 1.6,
    "baseMarkup": 1
  },
  "Robots": {
    "name": "Robots",
    "size": 0.5,
    "demandBase": 90,
    "demandRange": [
      80,
      99
    ],
    "competitionBase": 90,
    "competitionRange": [
      80,
      99
    ],
    "baseCost": 75e3,
    "maxVolatility": 0.5,
    "baseMarkup": 1
  },
  "AI Cores": {
    "name": "AI Cores",
    "size": 0.1,
    "demandBase": 90,
    "demandRange": [
      80,
      99
    ],
    "competitionBase": 90,
    "competitionRange": [
      80,
      99
    ],
    "baseCost": 15e3,
    "maxVolatility": 0.8,
    "baseMarkup": 0.5
  },
  "Real Estate": {
    "name": "Real Estate",
    "size": 5e-3,
    "demandBase": 50,
    "demandRange": [
      5,
      99
    ],
    "competitionBase": 50,
    "competitionRange": [
      25,
      75
    ],
    "baseCost": 8e4,
    "maxVolatility": 1.5,
    "baseMarkup": 1.5
  }
};
export {
  CorpMaterialsData
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL2RhdGEvQ29ycE1hdGVyaWFsc0RhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBDb3JwTWF0ZXJpYWxzRGF0YToge1xuICAgIFtNYXRlcmlhbE5hbWU6IHN0cmluZ106IHtcbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgIGRlbWFuZEJhc2U6IG51bWJlcjtcbiAgICAgICAgZGVtYW5kUmFuZ2U6IFttaW46IG51bWJlciwgbWF4OiBudW1iZXJdO1xuICAgICAgICBjb21wZXRpdGlvbkJhc2U6IG51bWJlcjtcbiAgICAgICAgY29tcGV0aXRpb25SYW5nZTogW21pbjogbnVtYmVyLCBtYXg6IG51bWJlcl07XG4gICAgICAgIGJhc2VDb3N0OiBudW1iZXI7XG4gICAgICAgIG1heFZvbGF0aWxpdHk6IG51bWJlcjtcbiAgICAgICAgYmFzZU1hcmt1cDogbnVtYmVyO1xuICAgIH07XG59ID0ge1xuICAgIFwiV2F0ZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJXYXRlclwiLFxuICAgICAgICBcInNpemVcIjogMC4wNSxcbiAgICAgICAgXCJkZW1hbmRCYXNlXCI6IDc1LFxuICAgICAgICBcImRlbWFuZFJhbmdlXCI6IFtcbiAgICAgICAgICAgIDY1LFxuICAgICAgICAgICAgODVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wZXRpdGlvbkJhc2VcIjogNTAsXG4gICAgICAgIFwiY29tcGV0aXRpb25SYW5nZVwiOiBbXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDYwXG4gICAgICAgIF0sXG4gICAgICAgIFwiYmFzZUNvc3RcIjogMTUwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDAuMixcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDZcbiAgICB9LFxuICAgIFwiT3JlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiT3JlXCIsXG4gICAgICAgIFwic2l6ZVwiOiAwLjAxLFxuICAgICAgICBcImRlbWFuZEJhc2VcIjogNTAsXG4gICAgICAgIFwiZGVtYW5kUmFuZ2VcIjogW1xuICAgICAgICAgICAgNDAsXG4gICAgICAgICAgICA2MFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBldGl0aW9uQmFzZVwiOiA4MCxcbiAgICAgICAgXCJjb21wZXRpdGlvblJhbmdlXCI6IFtcbiAgICAgICAgICAgIDY1LFxuICAgICAgICAgICAgOTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJiYXNlQ29zdFwiOiA1MDAsXG4gICAgICAgIFwibWF4Vm9sYXRpbGl0eVwiOiAwLjIsXG4gICAgICAgIFwiYmFzZU1hcmt1cFwiOiA2XG4gICAgfSxcbiAgICBcIk1pbmVyYWxzXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTWluZXJhbHNcIixcbiAgICAgICAgXCJzaXplXCI6IDAuMDQsXG4gICAgICAgIFwiZGVtYW5kQmFzZVwiOiA3NSxcbiAgICAgICAgXCJkZW1hbmRSYW5nZVwiOiBbXG4gICAgICAgICAgICA2MCxcbiAgICAgICAgICAgIDkwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcGV0aXRpb25CYXNlXCI6IDgwLFxuICAgICAgICBcImNvbXBldGl0aW9uUmFuZ2VcIjogW1xuICAgICAgICAgICAgNjUsXG4gICAgICAgICAgICA5NVxuICAgICAgICBdLFxuICAgICAgICBcImJhc2VDb3N0XCI6IDUwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDAuMixcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDZcbiAgICB9LFxuICAgIFwiRm9vZFwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkZvb2RcIixcbiAgICAgICAgXCJzaXplXCI6IDAuMDMsXG4gICAgICAgIFwiZGVtYW5kQmFzZVwiOiA4MCxcbiAgICAgICAgXCJkZW1hbmRSYW5nZVwiOiBbXG4gICAgICAgICAgICA3MCxcbiAgICAgICAgICAgIDkwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcGV0aXRpb25CYXNlXCI6IDYwLFxuICAgICAgICBcImNvbXBldGl0aW9uUmFuZ2VcIjogW1xuICAgICAgICAgICAgMzUsXG4gICAgICAgICAgICA4NVxuICAgICAgICBdLFxuICAgICAgICBcImJhc2VDb3N0XCI6IDUwMDAsXG4gICAgICAgIFwibWF4Vm9sYXRpbGl0eVwiOiAxLFxuICAgICAgICBcImJhc2VNYXJrdXBcIjogM1xuICAgIH0sXG4gICAgXCJQbGFudHNcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQbGFudHNcIixcbiAgICAgICAgXCJzaXplXCI6IDAuMDUsXG4gICAgICAgIFwiZGVtYW5kQmFzZVwiOiA3MCxcbiAgICAgICAgXCJkZW1hbmRSYW5nZVwiOiBbXG4gICAgICAgICAgICAyMCxcbiAgICAgICAgICAgIDkwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcGV0aXRpb25CYXNlXCI6IDUwLFxuICAgICAgICBcImNvbXBldGl0aW9uUmFuZ2VcIjogW1xuICAgICAgICAgICAgMzAsXG4gICAgICAgICAgICA3MFxuICAgICAgICBdLFxuICAgICAgICBcImJhc2VDb3N0XCI6IDMwMDAsXG4gICAgICAgIFwibWF4Vm9sYXRpbGl0eVwiOiAwLjYsXG4gICAgICAgIFwiYmFzZU1hcmt1cFwiOiAzLjc1XG4gICAgfSxcbiAgICBcIk1ldGFsXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTWV0YWxcIixcbiAgICAgICAgXCJzaXplXCI6IDAuMSxcbiAgICAgICAgXCJkZW1hbmRCYXNlXCI6IDgwLFxuICAgICAgICBcImRlbWFuZFJhbmdlXCI6IFtcbiAgICAgICAgICAgIDc1LFxuICAgICAgICAgICAgODVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wZXRpdGlvbkJhc2VcIjogNzAsXG4gICAgICAgIFwiY29tcGV0aXRpb25SYW5nZVwiOiBbXG4gICAgICAgICAgICA2MCxcbiAgICAgICAgICAgIDgwXG4gICAgICAgIF0sXG4gICAgICAgIFwiYmFzZUNvc3RcIjogMjY1MCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDEsXG4gICAgICAgIFwiYmFzZU1hcmt1cFwiOiA2XG4gICAgfSxcbiAgICBcIkhhcmR3YXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiSGFyZHdhcmVcIixcbiAgICAgICAgXCJzaXplXCI6IDAuMDYsXG4gICAgICAgIFwiZGVtYW5kQmFzZVwiOiA4NSxcbiAgICAgICAgXCJkZW1hbmRSYW5nZVwiOiBbXG4gICAgICAgICAgICA4MCxcbiAgICAgICAgICAgIDkwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcGV0aXRpb25CYXNlXCI6IDgwLFxuICAgICAgICBcImNvbXBldGl0aW9uUmFuZ2VcIjogW1xuICAgICAgICAgICAgNjUsXG4gICAgICAgICAgICA5NVxuICAgICAgICBdLFxuICAgICAgICBcImJhc2VDb3N0XCI6IDgwMDAsXG4gICAgICAgIFwibWF4Vm9sYXRpbGl0eVwiOiAwLjUsXG4gICAgICAgIFwiYmFzZU1hcmt1cFwiOiAxXG4gICAgfSxcbiAgICBcIkNoZW1pY2Fsc1wiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNoZW1pY2Fsc1wiLFxuICAgICAgICBcInNpemVcIjogMC4wNSxcbiAgICAgICAgXCJkZW1hbmRCYXNlXCI6IDU1LFxuICAgICAgICBcImRlbWFuZFJhbmdlXCI6IFtcbiAgICAgICAgICAgIDQwLFxuICAgICAgICAgICAgNzBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wZXRpdGlvbkJhc2VcIjogNjAsXG4gICAgICAgIFwiY29tcGV0aXRpb25SYW5nZVwiOiBbXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDgwXG4gICAgICAgIF0sXG4gICAgICAgIFwiYmFzZUNvc3RcIjogOTAwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDEuMixcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDJcbiAgICB9LFxuICAgIFwiRHJ1Z3NcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJEcnVnc1wiLFxuICAgICAgICBcInNpemVcIjogMC4wMixcbiAgICAgICAgXCJkZW1hbmRCYXNlXCI6IDYwLFxuICAgICAgICBcImRlbWFuZFJhbmdlXCI6IFtcbiAgICAgICAgICAgIDQ1LFxuICAgICAgICAgICAgNzVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wZXRpdGlvbkJhc2VcIjogNzAsXG4gICAgICAgIFwiY29tcGV0aXRpb25SYW5nZVwiOiBbXG4gICAgICAgICAgICA0MCxcbiAgICAgICAgICAgIDk5XG4gICAgICAgIF0sXG4gICAgICAgIFwiYmFzZUNvc3RcIjogNDAwMDAsXG4gICAgICAgIFwibWF4Vm9sYXRpbGl0eVwiOiAxLjYsXG4gICAgICAgIFwiYmFzZU1hcmt1cFwiOiAxXG4gICAgfSxcbiAgICBcIlJvYm90c1wiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJvYm90c1wiLFxuICAgICAgICBcInNpemVcIjogMC41LFxuICAgICAgICBcImRlbWFuZEJhc2VcIjogOTAsXG4gICAgICAgIFwiZGVtYW5kUmFuZ2VcIjogW1xuICAgICAgICAgICAgODAsXG4gICAgICAgICAgICA5OVxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBldGl0aW9uQmFzZVwiOiA5MCxcbiAgICAgICAgXCJjb21wZXRpdGlvblJhbmdlXCI6IFtcbiAgICAgICAgICAgIDgwLFxuICAgICAgICAgICAgOTlcbiAgICAgICAgXSxcbiAgICAgICAgXCJiYXNlQ29zdFwiOiA3NTAwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDAuNSxcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDFcbiAgICB9LFxuICAgIFwiQUkgQ29yZXNcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJBSSBDb3Jlc1wiLFxuICAgICAgICBcInNpemVcIjogMC4xLFxuICAgICAgICBcImRlbWFuZEJhc2VcIjogOTAsXG4gICAgICAgIFwiZGVtYW5kUmFuZ2VcIjogW1xuICAgICAgICAgICAgODAsXG4gICAgICAgICAgICA5OVxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBldGl0aW9uQmFzZVwiOiA5MCxcbiAgICAgICAgXCJjb21wZXRpdGlvblJhbmdlXCI6IFtcbiAgICAgICAgICAgIDgwLFxuICAgICAgICAgICAgOTlcbiAgICAgICAgXSxcbiAgICAgICAgXCJiYXNlQ29zdFwiOiAxNTAwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDAuOCxcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDAuNVxuICAgIH0sXG4gICAgXCJSZWFsIEVzdGF0ZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlYWwgRXN0YXRlXCIsXG4gICAgICAgIFwic2l6ZVwiOiAwLjAwNSxcbiAgICAgICAgXCJkZW1hbmRCYXNlXCI6IDUwLFxuICAgICAgICBcImRlbWFuZFJhbmdlXCI6IFtcbiAgICAgICAgICAgIDUsXG4gICAgICAgICAgICA5OVxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBldGl0aW9uQmFzZVwiOiA1MCxcbiAgICAgICAgXCJjb21wZXRpdGlvblJhbmdlXCI6IFtcbiAgICAgICAgICAgIDI1LFxuICAgICAgICAgICAgNzVcbiAgICAgICAgXSxcbiAgICAgICAgXCJiYXNlQ29zdFwiOiA4MDAwMCxcbiAgICAgICAgXCJtYXhWb2xhdGlsaXR5XCI6IDEuNSxcbiAgICAgICAgXCJiYXNlTWFya3VwXCI6IDEuNVxuICAgIH1cbn07Il0sCiAgIm1hcHBpbmdzIjogIkFBQU8sTUFBTSxvQkFZVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLElBQ0EsbUJBQW1CO0FBQUEsSUFDbkIsb0JBQW9CO0FBQUEsTUFDaEI7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUFBLElBQ0EsWUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsSUFDakIsY0FBYztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxP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
