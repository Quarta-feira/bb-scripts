import {NS} from "@ns";
import {CityName, CorporationUpgradeLevels, DivisionResearches, formatNumber, OfficeSetup} from "/corporationFormulas";
import {cities, dummyDivisionNamePrefix, getCorporationUpgradeLevels, getDivisionResearches} from "/corporationUtils";
import {isTestingToolsAvailable} from "/corporationTestingTools";

declare global {
    // eslint-disable-next-line no-var
    var corporationEventCycle: number;
    // eslint-disable-next-line no-var
    var corporationEventData: CorporationEvent[];
    // eslint-disable-next-line no-var
    var corporationEventSnapshotData: CorporationEvent[];
}

interface DivisionData {
    name: string;
    awareness: number;
    popularity: number;
    advert: number;
    researchPoints: number;
    researches: DivisionResearches;
    warehouses: {
        city: CityName;
        level: number;
        size: number;
    }[];
    offices: OfficeSetup[];
}

interface CorporationEvent {
    cycle: number;
}

interface DefaultCorporationEvent extends CorporationEvent {
    divisions: DivisionData[];
    funds: number;
    revenue: number;
    expenses: number;
    fundingRound: number;
    fundingOffer: number;
    upgrades: CorporationUpgradeLevels;
}

interface NewProductEvent extends CorporationEvent {
    cycle: number;
    productName: string;
    investment: number;
}

interface OfferAcceptanceEvent extends CorporationEvent {
    cycle: number;
    round: number;
    offer: number;
}

class CorporationEventLogger {
    constructor() {
        if (!globalThis.corporationEventCycle) {
            if (isTestingToolsAvailable()) {
                globalThis.corporationEventCycle = globalThis.Player.corporation.cycleCount;
            } else {
                globalThis.corporationEventCycle = 0;
            }
        }
        if (!globalThis.corporationEventData) {
            globalThis.corporationEventData = [];
        }
        if (!globalThis.corporationEventSnapshotData) {
            globalThis.corporationEventSnapshotData = [];
        }
    }

    get cycle(): number {
        return globalThis.corporationEventCycle;
    }

    set cycle(value: number) {
        globalThis.corporationEventCycle = value;
    }

    get #events() {
        return globalThis.corporationEventData;
    }

    get #eventsSnapshot() {
        return globalThis.corporationEventSnapshotData;
    }

    set #eventsSnapshot(value: CorporationEvent[]) {
        globalThis.corporationEventSnapshotData = value;
    }

    private limitNumberOfEvents(): void {
        if (this.#events.length > 2000) {
            this.#events.shift();
        }
    }

    private createDefaultEvent(ns: NS): DefaultCorporationEvent {
        const corporation = ns.corporation.getCorporation();
        const corporationEvent: DefaultCorporationEvent = {
            cycle: this.cycle,
            divisions: [],
            funds: corporation.funds,
            revenue: corporation.revenue,
            expenses: corporation.expenses,
            fundingRound: ns.corporation.getInvestmentOffer().round,
            fundingOffer: ns.corporation.getInvestmentOffer().funds,
            upgrades: getCorporationUpgradeLevels(ns)
        };
        const divisions = corporation.divisions;
        for (const divisionName of divisions) {
            if (divisionName.startsWith(dummyDivisionNamePrefix)) {
                continue;
            }
            const division = ns.corporation.getDivision(divisionName);
            const divisionData: DivisionData = {
                name: divisionName,
                awareness: division.awareness,
                popularity: division.popularity,
                advert: division.awareness,
                researchPoints: division.researchPoints,
                researches: getDivisionResearches(ns, divisionName),
                warehouses: [],
                offices: [],
            };
            for (const city of cities) {
                const warehouse = ns.corporation.getWarehouse(divisionName, city);
                const office = ns.corporation.getOffice(divisionName, city);
                divisionData.warehouses.push({
                    city: city,
                    level: warehouse.level,
                    size: warehouse.size,
                });
                divisionData.offices.push({
                    city: city,
                    size: office.size,
                    jobs: {
                        Operations: office.employeeJobs.Operations,
                        Engineer: office.employeeJobs.Engineer,
                        Business: office.employeeJobs.Business,
                        Management: office.employeeJobs.Management,
                        "Research & Development": office.employeeJobs["Research & Development"],
                    }
                });
            }
            corporationEvent.divisions.push(divisionData);
        }
        return corporationEvent;
    }

    public generateDefaultEvent(ns: NS): void {
        this.#events.push(this.createDefaultEvent(ns));
        this.limitNumberOfEvents();
    }

    public generateNewProductEvent(productName: string, investment: number): void {
        const newProductEvent: NewProductEvent = {
            cycle: this.cycle,
            productName: productName,
            investment: investment
        };
        this.#events.push(newProductEvent);
        this.limitNumberOfEvents();
    }

    public generateOfferAcceptanceEvent(ns: NS): void {
        const offerAcceptanceEvent: OfferAcceptanceEvent = {
            cycle: this.cycle,
            round: ns.corporation.getInvestmentOffer().round,
            offer: ns.corporation.getInvestmentOffer().funds
        };
        this.#events.push(offerAcceptanceEvent);
        this.limitNumberOfEvents();
    }

    public clearEventData(): void {
        this.#events.length = 0;
    }

    public exportEventData(): string {
        return JSON.stringify(this.#events);
    }

    public saveEventSnapshotData(): void {
        this.#eventsSnapshot = structuredClone(this.#events);
    }

    public exportEventSnapshotData(): string {
        return JSON.stringify(this.#eventsSnapshot);
    }
}

export const corporationEventLogger = new CorporationEventLogger();

const profitMilestones = [
    1e10,
    1e11,
    1e12,
    1e13,
    1e15,
    1e16,
    1e17,
    1e20,
    1e21,
    1e22,
    1e23,
    1e24,
    1e25,
    1e26,
    1e27,
    1e28,
    1e29,
    1e30,
    1e31,
    1e32,
    1e33,
    1e34,
    1e35,
    1e40,
    1e50,
    1e60,
    1e70,
    1e74,
    1e75,
    1e78,
    1e80,
    1e88,
    1e89,
    1e90,
];

function isDefaultCorporationEvent(event: CorporationEvent): event is DefaultCorporationEvent {
    return "divisions" in event;
}

function isNewProductEvent(event: CorporationEvent): event is NewProductEvent {
    return "productName" in event;
}

function isOfferAcceptanceEvent(event: CorporationEvent): event is OfferAcceptanceEvent {
    return "round" in event;
}

export function analyseEventData(eventData: string): void {
    const events: CorporationEvent[] = JSON.parse(eventData);
    let currentMilestonesIndex = 0;
    for (const event of events) {
        if (isNewProductEvent(event)) {
            console.log(`${event.cycle}: productName: ${event.productName}`);
            continue;
        }
        if (isOfferAcceptanceEvent(event)) {
            console.log(`${event.cycle}: round: ${event.round}, offer: ${formatNumber(event.offer)}`);
            continue;
        }
        if (!isDefaultCorporationEvent(event)) {
            console.error("Invalid event:", event);
            continue;
        }
        const profit = event.revenue - event.expenses;
        if (profit >= profitMilestones[currentMilestonesIndex]) {
            console.log(`${event.cycle}: profit: ${formatNumber(profit)}`);
            ++currentMilestonesIndex;
        }
    }
}
