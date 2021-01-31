import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavItemI } from '../navigation.data';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation-footer',
  templateUrl: './navigation-footer.component.html',
  styleUrls: ['./navigation-footer.component.scss']
})
export class NavigationFooterComponent implements OnInit {

    navItems: Array<NavItemI>;
    activeItem: NavItemI;

    activeItem$ = this.navigationService.activeNavItem.pipe(
        tap(item => this.activeItem = item)
    );

    constructor(
        private navigationService: NavigationService
    ) {}

    ngOnInit(): void {
        this.navItems = this.navigationService.navItems;
    }

    navigate(navItem: NavItemI): void {
        this.navigationService.navigate(navItem);
    }
}
