export interface EventChance{
    EventID: number;
    EventName: string;
    EventDate: string;
    EventChanceTypeID: number;
    SportID: number;
    RegionID: number;
    LeagueCupID: number;
}

export interface Label {
  Typ: string;
  ID: number;
  LanguageID: string;
  Name: string;
}

export type TipType = '1' | 'X' | '2' | '1X' | 'X2' | '12';

export interface Odd{
    EventChanceTypeID: number;
    OddsID: number;
    OddsRate: number;
    TipType: TipType;
    Status: string;
}

export interface OfferApiResponse{
    EventChanceTypes: EventChance[];
    Odds: Record<string, Odd>;
    Labels: Record<string, Label>;
}