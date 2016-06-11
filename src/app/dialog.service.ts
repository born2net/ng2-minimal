import { Injectable } from '@angular/core';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm
 */
@Injectable()
export class DialogService {
  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        let ok = window.confirm(message || 'Is it OK?') ;
        return resolve(ok);
        },  0);
    })
    // Todo: good during development; delete
    .then(ok => {
      console.log('confirm said: ' + ok);
      return ok;
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/