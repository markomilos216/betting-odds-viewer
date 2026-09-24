import { Match } from '../models/offer';
import { createAction, props } from "@ngrx/store";

export const loadOffer = createAction('[Offer] Load Offer');
export const loadOfferSuccess = createAction('[Offer] Load Offer Success', props<{matches: Match[]}>());
export const loadOfferFailure = createAction('[Offer] Load Offer Failure', props<{errorMessage: string}>());