import { BaseCtrl } from './AppComponent';

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

