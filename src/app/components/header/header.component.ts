import { Component, EventEmitter, input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pageTitle = input.required();
  flag = true;
  @Output('collapsed') collapsedClicked = new EventEmitter<boolean>();

  constructor() {}

  onClicked() {
    this.flag = !this.flag;
    this.collapsedClicked.emit(this.flag);
  }
}
