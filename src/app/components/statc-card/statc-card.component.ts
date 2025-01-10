import { Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-statc-card',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
  ],
  templateUrl: './statc-card.component.html',
  styleUrl: './statc-card.component.scss',
})
export class StatcCardComponent {
  icon = input.required();
  amount = input.required();
  statcTxt = input.required();
}
