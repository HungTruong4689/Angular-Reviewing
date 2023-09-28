import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  //import production
  enableProdMode();
}

platformBrowserDynamic() //platform
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
