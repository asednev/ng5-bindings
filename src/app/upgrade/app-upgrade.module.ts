import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';
import { Ng1Directive } from './ng1.upgradecomponent';

@NgModule({
  declarations: [ Ng1Directive ],
  imports: [CommonModule, UpgradeModule],
  exports: [UpgradeModule, Ng1Directive]
})
export class AppUpgradeModule {
  constructor(private upgrade: UpgradeModule) {
  }

  bootstrap() {
    this.upgrade.bootstrap(document.body, ['ng1App'], { strictDi: true });
  }
}
