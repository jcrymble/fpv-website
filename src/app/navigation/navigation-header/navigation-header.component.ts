import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavItemI } from '../navigation.data';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {

    @Input() lightMenuText = true;
    navItems: Array<NavItemI>;
    activeItem: NavItemI;

    activeItem$ = this.navigationService.activeNavItem.pipe(
        tap(item => this.activeItem = item)
    );

    constructor(
        private navigationService: NavigationService
    ) { }

    ngOnInit(): void {
        this.navItems = this.navigationService.navItems;
    }

    navigate(item: NavItemI): void {
        this.navigationService.navigate(item);
    }

}
