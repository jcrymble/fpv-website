export interface NavItemI {
    icon: string;
    displayName: string;
    navigateTo: string;
}

export const NAV_ITEMS: Array<NavItemI> = [
    { icon: 'home', navigateTo: 'home', displayName: 'Home' },
    { icon: 'video_library', navigateTo: 'gallery', displayName: 'Gallery' },
    { icon: 'info', navigateTo: 'about', displayName: 'About' },
    { icon: 'person', navigateTo: 'contact', displayName: 'Contact' },
];
