import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavItemI, NAV_ITEMS } from './navigation.data';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private _navItems: Array<NavItemI>;
    private _activeNavItem: BehaviorSubject<NavItemI>;
    private LS_PREFIX = 'JCFPVLS';
    private _LS_VIEWER = this.LS_PREFIX + '-source';

    constructor(private router: Router) {
        this._navItems = NAV_ITEMS;
        this._activeNavItem = new BehaviorSubject<NavItemI>(this.initialActiveNavItem ?? this._navItems[0]);
    }

    get navItems(): Array<NavItemI> {
        return this._navItems;
    }

    get LS_VIEWER_KEY(): string {
        return this._LS_VIEWER;
    }

    private get initialActiveNavItem(): NavItemI {
        let currentPageURL = document.location.href;
        if (currentPageURL.includes('viewer')) {
            return { icon: '', displayName: 'Viewer', navigateTo: 'gallery' };
        }
        currentPageURL = currentPageURL.split('/')[currentPageURL.split('/').length - 1];
        return this._navItems.find(n => n.navigateTo === currentPageURL);
    }

    get activeNavItem(): BehaviorSubject<NavItemI> {
        return this._activeNavItem;
    }

    navigate(navItem: NavItemI): void {
        this._activeNavItem.next(navItem);
        this.router.navigate([navItem.navigateTo]);
    }
}
