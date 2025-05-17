import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [HeaderComponent, CardModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  matchStatus = {
    round: 'Round 1',
    teamA: 'Melamaruthappapuram',
    teamB: 'M Shanmugapuram',
    scores: {
      teamA: 30,
      teamB: 23
    },
    half: '2nd Half'
  }
}
