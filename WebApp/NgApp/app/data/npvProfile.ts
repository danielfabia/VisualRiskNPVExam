import { Profile } from './profile';

export class NpvProfile {
    initialCost: number;
    values: Array<number> = new Array<number>();
    lowerBoundRate: number;
    upperBoundRate: number;
    rateIncrement: number;
    profiles: Array<Profile>;
}