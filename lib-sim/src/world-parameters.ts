export class WorldParameters {

  static readonly WORLDSIZE: number = 256;

  // simulation parameters
  speed: number = 5;
  maximumOrganisms:number = 30000;
  initialFoodCount: number = 1000;
  foodDropSpeed: number = 50;

  // the percentage of times a newly spawned offspring will have a mutation
  mutationRate: number = 10;

  // the amount of energy required to spawn a new offspring
  spawnEnergyPerSegment: number = 200;

  // lifespan
  lifespanPerSegment: number = 50000;
  lifespanRandomizationPercent: number = 10;

  energyTurnCost: number = 1;
  energyMoveCost: number = 2;
  energyMoveAndEatCost: number = 15;
  energyGainedFromPhotosythesizing: number = 1.25;
  biteStrength: number = 200;
  digestionEfficiency:number = 50;

  constructor() {
  }
}