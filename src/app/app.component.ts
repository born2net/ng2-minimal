import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {DialogService} from "./dialog.service";
import {HeroService} from "./heroes/hero.service";

@Component({
    moduleId: module.id,
    selector: 'app-container',
    providers: [
        DialogService,
        HeroService
    ],
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>New ng2 Router</h1>
                <nav>
                  <a [routerLink]="['/crisis-center']">Crisis Center</a>
                  <a [routerLink]="['/heroes']">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
            `
})

export class AppComponent {
    constructor() {
    }
}

