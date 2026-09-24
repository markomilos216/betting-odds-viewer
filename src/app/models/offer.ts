import { TipType } from "./offer-api-response";

export interface MatchOdd {
    oddsId: number;
    rate: number;
    tipType: TipType;
}

export interface Match {
    id: number;
    name: string;
    date: string;
    sportName: string;
    regionName: string;
    leagueId: number;
    leagueName: string;
    odds: Partial<Record<TipType, MatchOdd>>;
}

export interface LeagueGroup {
    leagueId: number;
    leagueName: string;
    sportName: string;
    regionName: string;
    matches: Match[];
}