import { BaseCtrl } from './AppComponent';

class SampleCtrl extends BaseCtrl {
  constructor() {
    super();
    // dependency injection
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
  controller: [SampleCtrl]
};

