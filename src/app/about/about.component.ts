import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    @Input() useShortDescription = false;
    longDescription: string;
    shortDescription: string;

    constructor() { }

    ngOnInit(): void {
        this.longDescription = `
            This is the long description.
        `;

        this.shortDescription = `
            This is the short description.
        `;
    }

}
