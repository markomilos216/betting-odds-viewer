import { Component, input, signal } from '@angular/core';
import { LeagueGroup } from '../../../models/offer';
import { DatePipe } from '@angular/common';
import { TipType } from '../../../models/offer-api-response';

@Component({
  selector: 'app-league-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent{
  leagueGroup = input.required<LeagueGroup>();
  isCollapsed = signal<boolean>(false);
  readonly tipTypes: TipType[] = ['1', 'X', '2', '1X', 'X2', '12'];

  toggleCollapsed() {
    this.isCollapsed.update(collapsed => !collapsed);
  }
}
