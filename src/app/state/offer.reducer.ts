import { createReducer, on } from "@ngrx/store";
import { initialState } from "./offer.state";
import { loadOffer, loadOfferFailure, loadOfferSuccess } from "./offer.actions";

export const offerReducer = createReducer(
    initialState,
    on(loadOffer, (state) => {
        return {
            ...state,
            isLoading: true,
            errorMessage: ''
        }
    }),
    on(loadOfferSuccess, (state, action) => {
        return {
            ...state,
            matches: action.matches,
            isLoading: false,
            errorMessage: ''
        }
    }),
    on(loadOfferFailure, (state, action) => {
        return {
            ...state,
            errorMessage: action.errorMessage,
            isLoading: false
        }
  })
)