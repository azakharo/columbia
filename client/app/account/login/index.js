'use strict';

import LoginController from './login.controller';

export default angular.module('columbiaApp.login', [])
  .controller('LoginController', LoginController)
  .name;
