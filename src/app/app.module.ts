import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppUpgradeModule } from './upgrade/app-upgrade.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppUpgradeModule
  ],
  providers: [ ],
  entryComponents: [ AppComponent ]
})
export class AppModule {

  constructor(private qeUpgradeModule: AppUpgradeModule) {
    console.log('AppModule ctor');
  }

  ngDoBootstrap() {
    console.log('ngDoBootstrap');
    this.qeUpgradeModule.bootstrap();
  }
}
