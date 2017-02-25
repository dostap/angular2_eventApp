import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app.module'

//this just gets the app up and running
//don't have to do for every component
platformBrowserDynamic().bootstrapModule(AppModule)