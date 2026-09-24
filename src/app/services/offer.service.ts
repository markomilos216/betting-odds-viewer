import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfferApiResponse } from '../models/offer-api-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getOffer(): Observable<OfferApiResponse> {
    return this.http.get<OfferApiResponse>(this.apiUrl);
  }
}
