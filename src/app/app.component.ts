import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavItemI } from './navigation/navigation.data';
import { NavigationService } from './navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private navigationService: NavigationService) {}

  hideMenu: boolean;
  activeMenuItem: NavItemI;
  activeMenuItem$ = this.navigationService.activeNavItem.pipe(
      tap(item => {
          this.activeMenuItem = item;
          this.hideMenu = item.displayName === 'Viewer';
      })
  );

  get lightMenuText(): boolean {
      return this.activeMenuItem?.displayName !== 'Home';
  }

}
