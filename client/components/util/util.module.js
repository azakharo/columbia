'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('columbiaApp.util', [])
  .factory('Util', UtilService)
  .name;
