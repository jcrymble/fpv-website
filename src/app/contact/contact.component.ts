import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    formGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl('')
    });

    constructor() { }

    ngOnInit(): void {}

    submit(): void {
        console.log(this.formGroup)
    }

}
