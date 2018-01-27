import { Directive, ElementRef, Injector, Input, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { EventEmitter } from 'events';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-ng1'
})
export class Ng1Directive extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1', elementRef, injector);
  }

}
