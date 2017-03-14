export class BaseCtrl {
  constructor() {
  }
}

export default {
  bindings: {},
  template: `
    <div data-ng-view></div>
  `,
  controller: BaseCtrl
};

