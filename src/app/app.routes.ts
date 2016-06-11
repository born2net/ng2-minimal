import { provideRouter, RouterConfig } from '@angular/router';

import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { CrisisDetailGuard }  from './crisis-center/crisis-detail.guard';
import { HeroesRoutes }       from './heroes/heroes.routes';

const routes: RouterConfig = [
  ...HeroesRoutes,
  ...CrisisCenterRoutes
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