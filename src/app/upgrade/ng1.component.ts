import * as angular from 'angular';


export class Ng1ComponentController {

  private title1: string;
  private title2: string;
  private fn1: Function;
  private fn2: Function;
  private callback: Function;

  trigger1() {
    console.log('trigger1');

    this.callback({id: 1});
    this.fn1();
  }

  trigger2() {
    console.log('trigger2');

    this.fn2();
    this.callback({id: 2 });
  }
}

export const Ng1Component: ng.IComponentOptions = {
  template: `ng1 component<br />
  <button ng-click="$ctrl.trigger1()">Button {{$ctrl.title1}}</button>
  <button ng-click="$ctrl.trigger2()">Button {{$ctrl.title2}}</button>
`,
  controller: Ng1ComponentController,
  bindings: {
    title1: '@',
    title2: '@',
    callback: '&callback',
    fn1: '&',
    fn2: '&',
    cancelled: '&?cancelled',
    requestFailed: '&?requestFailed',
    container: '@?container'
  }
};
