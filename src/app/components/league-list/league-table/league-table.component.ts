import { Component, computed, input, signal } from '@angular/core';
import { LeagueGroup } from '../../../models/offer';
import { DatePipe } from '@angular/common';
import { TipType } from '../../../models/offer-api-response';
import { DEFAULT_LEAGUE_COLOR, LEAGUE_COLORS } from '../../../constants/league-colors';

@Component({
  selector: 'app-league-table',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent{
  leagueGroup = input.required<LeagueGroup>();
  highlightedRate = input.required<number>();
  isCollapsed = signal<boolean>(false);
  leagueColor = computed(() => {
    const leagueId = this.leagueGroup().leagueId;
    return LEAGUE_COLORS[leagueId] ?? DEFAULT_LEAGUE_COLOR;
  });
  readonly tipTypes: TipType[] = ['1', 'X', '2', '1X', 'X2', '12'];

  toggleCollapsed() {
    this.isCollapsed.update(collapsed => !collapsed);
  }
}
