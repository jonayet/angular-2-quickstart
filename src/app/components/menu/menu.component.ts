import {Component} from '@angular/core';
import {MenuService} from './menu.service';

@Component({
    selector: 'menu',
    templateUrl: './menu.view.html',
    styleUrls: ['./menu.style.scss']
})
export class MenuComponent {
    content: string = 'Menu';
    constructor(private menuService: MenuService) {
        this.content += ' : ' + menuService.getMenu();
    }
}