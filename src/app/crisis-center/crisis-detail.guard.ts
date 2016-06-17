import {Injectable}    from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable}    from 'rxjs/Observable';

import {CrisisDetailComponent} from './crisis-detail.component';

@Injectable()
export class CrisisDetailGuard implements CanDeactivate<CrisisDetailComponent> {

    canDeactivate(component:CrisisDetailComponent):Observable<boolean> | boolean {
        alert('canDeactivate');
        return component.canDeactivate();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */