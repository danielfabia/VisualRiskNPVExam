import { Profile } from './profile';

export class NpvProfile {
    id: number;
    name: string;
    initialCost: number;
    values: Array<number> = new Array<number>();
    lowerBoundRate: number;
    upperBoundRate: number;
    rateIncrement: number;
    profiles: Array<Profile>;
}