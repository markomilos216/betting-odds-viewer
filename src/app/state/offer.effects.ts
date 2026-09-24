import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { OfferService } from "../services/offer.service";
import { loadOffer, loadOfferFailure, loadOfferSuccess } from "./offer.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { mapOfferResponseToMatches } from "../utils/offerMapper";

@Injectable()
export class OfferEffects {
    private actions$ = inject(Actions);
    private offerService = inject(OfferService);

    loadOffer$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadOffer),
            switchMap(() => {
                return this.offerService.getOffer().pipe(
                    map(response => mapOfferResponseToMatches(response)),
                    map(matches => loadOfferSuccess({matches})),
                    catchError(() => {
                        return of(
                            loadOfferFailure({errorMessage: 'Dáta sa nepodarilo načítať.'})
                        )
                    })
                )
            })
        )
    })
}