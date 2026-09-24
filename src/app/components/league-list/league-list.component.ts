import { Component, inject, OnInit } from '@angular/core';
import { LeagueTableComponent } from './league-table/league-table.component';
import { Store } from '@ngrx/store';
import { getErrorMessage, getIsLoading, getLeagueGroups } from '../../state/offer.selectors';
import { loadOffer } from '../../state/offer.actions';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [LeagueTableComponent, LoaderComponent],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit{
  private store = inject(Store);
  
  leagueGroup = this.store.selectSignal(getLeagueGroups);
  isLoading = this.store.selectSignal(getIsLoading);
  errorMessage = this.store.selectSignal(getErrorMessage);  

  ngOnInit() {
    this.store.dispatch(loadOffer());
  }
}
