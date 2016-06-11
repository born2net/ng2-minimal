import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailGuard }     from './crisis-detail.guard';

export const CrisisCenterRoutes = [
  {
    path: '/crisis-center',
    component: CrisisCenterComponent,
    index: true,
    children: [
      { path: '/', component: CrisisListComponent, index: true },
      { path: '/:id', component: CrisisDetailComponent, canDeactivate: [CrisisDetailGuard] }
    ]
  }
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/