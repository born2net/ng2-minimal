import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
])
    .catch(err => console.error(err));
