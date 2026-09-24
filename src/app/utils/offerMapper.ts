import { Match, MatchOdd } from "../models/offer";
import { OfferApiResponse, TipType } from "../models/offer-api-response";

export const mapOfferResponseToMatches = (rawOffer: OfferApiResponse): Match[] => {
    if (!rawOffer) return [];

    const tipType: TipType[] = ['1', 'X', '2', '1X', 'X2', '12']; 

    return rawOffer.EventChanceTypes.map(event => {
        const sportName = rawOffer.Labels[`SP_${event.SportID}`]?.Name;
        const regionName = rawOffer.Labels[`RE_${event.RegionID}`]?.Name;
        const leagueName = rawOffer.Labels[`LC_${event.LeagueCupID}`]?.Name;

        const matchOdds: Partial<Record<TipType, MatchOdd>> = {};

        Object.values(rawOffer.Odds).forEach(odd => {
            if (odd.EventChanceTypeID === event.EventChanceTypeID && tipType.includes(odd.TipType)) {
                const tip = odd.TipType;
                matchOdds[tip] = {
                    oddsId: odd.OddsID,
                    rate: odd.OddsRate,
                    tipType: tip
                }
            }
        });

        return {
            id: event.EventChanceTypeID,
            name: event.EventName,
            date: event.EventDate,
            sportName,
            regionName,
            leagueId: event.LeagueCupID,
            leagueName,
            odds: matchOdds
        }
    })
}