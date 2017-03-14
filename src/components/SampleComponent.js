import { BaseCtrl } from './BaseCtrl';

class SampleCtrl extends BaseCtrl {
  constructor($cookies) {
    super();
    // dependency injection
    this.$cookies = $cookies;
    this.name = "foo";
  }

  /**
   * initializing method
   */
  $onInit() {
  }

}

export default {
  bindings: {},
  template: `
    <h1>Hello {{ $ctrl.name }}!</h1>
  `,
  controller: ['$cookies', SampleCtrl]
};

