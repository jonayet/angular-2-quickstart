import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.view.html',
    styleUrls: ['./app.style.scss']
})
export class AppComponent {
    content: string = 'Angular 2 Quickstart';
    constructor() {

    }
}