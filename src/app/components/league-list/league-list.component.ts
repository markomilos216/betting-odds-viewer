import { Component } from '@angular/core';
import { LeagueTableComponent } from './league-table/league-table.component';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [LeagueTableComponent],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent {

}
