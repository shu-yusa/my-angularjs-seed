import { BaseCtrl } from './BaseCtrl';

class IndexCtrl extends BaseCtrl {
  constructor() {
    super();
  }

  /**
   * initializing method
   */
  $onInit() {
  }

}

export default {
  bindings: {},
  templateUrl: 'partials/index.html',
  controller: IndexCtrl
};

