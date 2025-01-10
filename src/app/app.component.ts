import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MatSidenavModule, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  headTitle = 'Dashboard';
  opened: boolean = true;
  title = 'expenes-tracker';

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        this.setHeadTitle(event.urlAfterRedirects);
      }
    });
  }

  collapsedClicked(flag: boolean) {
    this.opened = flag;
  }
  setHeadTitle(url: string) {
    if (url.includes('transaction')) {
      this.headTitle = 'Transactions';
    } else {
      this.headTitle = 'Dashboard';
    }
  }
}
