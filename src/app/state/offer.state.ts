import { Match } from "../models/offer";

export interface OfferState {
    matches: Match[];
    isLoading: boolean;
    errorMessage: string;
}

export const initialState: OfferState = {
    matches: [],
    isLoading: false,
    errorMessage: ''
}