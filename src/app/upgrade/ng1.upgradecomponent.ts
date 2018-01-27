import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'app-ng1'
})
export class Ng1Directive extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('ng1', elementRef, injector);
  }

  @Input() title1: string;
  @Input() title2: string;
  @Output() callback: EventEmitter<object>;
  @Output() requestFailed: EventEmitter<object>;
  @Output() fn1: EventEmitter<object>;
  @Output() fn2: EventEmitter<object>;

}
