import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OfferState } from "./offer.state";
import { LeagueGroup } from "../models/offer";

const getOfferState = createFeatureSelector<OfferState>('offer');

export const getMatches = createSelector(getOfferState, (state) => state.matches);
export const getIsLoading = createSelector(getOfferState, (state) => state.isLoading);
export const getErrorMessage = createSelector(getOfferState, (state) => state.errorMessage);
export const getLeagueGroups = createSelector(getMatches, (state) => {
    const groups: Record<string, LeagueGroup> = {};

    for(const match of state) {
        if (!groups[match.leagueId]) {
            groups[match.leagueId] = {
                leagueId: match.leagueId,
                leagueName: match.leagueName,
                sportName: match.sportName,
                regionName: match.regionName,
                matches: []
            }
        }

        groups[match.leagueId].matches.push(match);
    }
    return Object.values(groups);
});
export const getUniqueSortedOdds = createSelector(getMatches, (state) => {
    const allRates = state
        .flatMap(({odds}) => Object.values(odds))
        .map(odd => odd?.rate)
        .filter(rate => rate);

    return [...new Set(allRates)].sort((a, b) => b - a);
});