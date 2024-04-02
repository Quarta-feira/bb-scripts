export const CorpMaterialsData: {
    [MaterialName: string]: {
        name: string;
        size: number;
        demandBase: number;
        demandRange: [min: number, max: number];
        competitionBase: number;
        competitionRange: [min: number, max: number];
        baseCost: number;
        maxVolatility: number;
        baseMarkup: number;
    };
} = {
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
        "baseCost": 5000,
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
        "baseCost": 3000,
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
        "baseCost": 8000,
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
        "baseCost": 9000,
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
        "baseCost": 40000,
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
        "baseCost": 75000,
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
        "baseCost": 15000,
        "maxVolatility": 0.8,
        "baseMarkup": 0.5
    },
    "Real Estate": {
        "name": "Real Estate",
        "size": 0.005,
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
        "baseCost": 80000,
        "maxVolatility": 1.5,
        "baseMarkup": 1.5
    }
};