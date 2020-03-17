import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Step 2: ng app should be bootstrapped with a module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
