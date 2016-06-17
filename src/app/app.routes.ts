import {provideRouter, RouterConfig} from "@angular/router";
import {CrisisDetailGuard} from "./crisis-center/crisis-detail.guard";
import {HeroListComponent} from "./heroes/hero-list.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {CrisisDetailComponent} from "./crisis-center/crisis-detail.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";

const routes:RouterConfig = [
    {path: '/heroes', component: HeroListComponent},
    {path: '/hero/:id', component: HeroDetailComponent},
    {
        path: '/crisis-center', component: CrisisCenterComponent, index: true,
        children: [
            {path: '/', component: CrisisListComponent, index: true},
            {path: '/:id', component: CrisisDetailComponent, canDeactivate: [CrisisDetailGuard]}
        ]
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    CrisisDetailGuard
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */