/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(1);

	var _index2 = __webpack_require__(2);

	var _index3 = __webpack_require__(3);

	var _main = __webpack_require__(4);

	var _auth = __webpack_require__(5);

	var _compareTo = __webpack_require__(6);

	var _descricaoFrost = __webpack_require__(7);

	var _orangeDescricao = __webpack_require__(8);

	var _towerOfGodsDescricao = __webpack_require__(9);

	var _githubContributor = __webpack_require__(10);

	var _webDevTec = __webpack_require__(11);

	var _navbar = __webpack_require__(12);

	var _malarkey = __webpack_require__(13);

	angular.module('mangaloadFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer']).constant('API_URL', 'http://localhost:5000/').constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).controller('AuthController', _auth.AuthController).controller('FrostController', _descricaoFrost.FrostController).controller('OrangeController', _orangeDescricao.OrangeController).controller('TowerOfGodsController', _towerOfGodsDescricao.TowerOfGodsController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('compareTo', _compareTo.CompareToDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig", "$authProvider", "API_URL"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig, $authProvider, API_URL) {
	    'ngInject';
	    // Enable log

	    $logProvider.debugEnabled(true);

	    // Set options third-party lib
	    toastrConfig.allowHtml = true;
	    toastrConfig.timeOut = 3000;
	    toastrConfig.positionClass = 'toast-top-right';
	    toastrConfig.preventDuplicates = true;
	    toastrConfig.progressBar = true;

	    $authProvider.signupUrl = API_URL + 'auth/register';
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';

	  $stateProvider.state('home', {
	    url: '/main',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController',
	    controllerAs: 'main'
	  }).state('auth', {
	    url: '/auth',
	    templateUrl: 'app/auth/auth.html',
	    controller: 'AuthController',
	    controllerAs: 'auth'
	  }).state('descricao-frost', {
	    url: '/descricao-frost',
	    templateUrl: 'app/manga-descricao/frost-descricao/descricao-frost.html',
	    controller: 'FrostController',
	    controllerAs: 'descricao-frost'
	  }).state('orange-descricao', {
	    url: '/orange-descricao',
	    templateUrl: 'app/manga-descricao/orange-descricao/orange-descricao.html',
	    controller: 'OrangeController',
	    controllerAs: 'orange-descricao'
	  }).state('tower-of-gods-descricao', {
	    url: '/tower-of-gods-descricao',
	    templateUrl: 'app/manga-descricao/tower-of-gods-descricao/tower-of-gods-descricao.html',
	    controller: 'TowerOfGodsController',
	    controllerAs: 'tower-of-gods-descricao'
	  });

	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runBlock = runBlock;
	function runBlock($log) {
	  'ngInject';

	  $log.debug('runBlock end');
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainController = exports.MainController = function () {
	  MainController.$inject = ["$timeout", "webDevTec"];
	  function MainController($timeout, webDevTec) {
	    'ngInject';

	    _classCallCheck(this, MainController);

	    this.awesomeThings = [];

	    this.creationDate = 1477685708528;

	    this.activate($timeout, webDevTec);
	  }

	  _createClass(MainController, [{
	    key: 'activate',
	    value: function activate($timeout, webDevTec) {
	      var _this = this;

	      this.getWebDevTec(webDevTec);
	      $timeout(function () {
	        _this.classAnimation = 'rubberBand';
	      }, 4000);
	    }
	  }, {
	    key: 'getWebDevTec',
	    value: function getWebDevTec(webDevTec) {
	      this.awesomeThings = webDevTec.getTec();

	      angular.forEach(this.awesomeThings, function (awesomeThing) {
	        awesomeThing.rank = Math.random();
	      });
	    }
	  }]);

	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AuthController = exports.AuthController = function () {
	    AuthController.$inject = ["$auth"];
	    function AuthController($auth) {
	        'ngInject';

	        _classCallCheck(this, AuthController);

	        this.$auth = $auth;
	    }

	    _createClass(AuthController, [{
	        key: 'register',
	        value: function register() {
	            var vm = this;
	            this.$auth.signup(this.user).then(function (token) {
	                vm.$auth.setToken(token);
	            });
	        }
	    }]);

	    return AuthController;
	}();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	CompareToDirective.$inject = ["$parse"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CompareToDirective = CompareToDirective;
	function CompareToDirective($parse) {
	    'ngInject';

	    return {
	        require: 'ngModel',
	        link: function link(scope, elm, attrs, ngModel) {
	            var mainModel = $parse(attrs.compareTo);
	            var secondModel = $parse(attrs.ngModel);

	            scope.$watch(attrs.ngModel, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
	            });

	            scope.$watch(attrs.compareTo, function (newValue) {
	                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
	            });
	        }
	    };
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FrostController = exports.FrostController = function () {
	    FrostController.$inject = ["$http"];
	    function FrostController($http) {
	        'ngInject';

	        _classCallCheck(this, FrostController);

	        this.$http = $http;

	        this.getMessages();
	    }

	    _createClass(FrostController, [{
	        key: 'getMessages',
	        value: function getMessages() {
	            var vm = this;
	            this.$http.get('http://localhost:5000/api/message').then(function (result) {
	                vm.messages = result.data;
	            });
	        }
	    }, {
	        key: 'postMessage',
	        value: function postMessage() {
	            this.$http.post('http://localhost:5000/api/message', { msg: this.message });
	        }
	    }]);

	    return FrostController;
	}();

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OrangeController = exports.OrangeController = function OrangeController() {
	    _classCallCheck(this, OrangeController);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TowerOfGodsController = exports.TowerOfGodsController = function TowerOfGodsController() {
	    _classCallCheck(this, TowerOfGodsController);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GithubContributorService = exports.GithubContributorService = function () {
	  GithubContributorService.$inject = ["$log", "$http"];
	  function GithubContributorService($log, $http) {
	    'ngInject';

	    _classCallCheck(this, GithubContributorService);

	    this.$log = $log;
	    this.$http = $http;
	    this.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
	  }

	  _createClass(GithubContributorService, [{
	    key: 'getContributors',
	    value: function getContributors() {
	      var _this = this;

	      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

	      return this.$http.get(this.apiHost + '/contributors?per_page=' + limit).then(function (response) {
	        return response.data;
	      }).catch(function (error) {
	        _this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
	      });
	    }
	  }]);

	  return GithubContributorService;
	}();

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var WebDevTecService = exports.WebDevTecService = function () {
	    function WebDevTecService() {
	        'ngInject';

	        _classCallCheck(this, WebDevTecService);

	        this.data = [{
	            'title': 'Tower of Gods',
	            'url': 'Ler Webtoon',
	            'description': 'Webtoon',
	            'logo': 'Tower.webp',
	            'link': 'tower-of-gods-descricao',
	            'logo-descricao': 'Tower.webp'

	        }, {
	            'title': 'Noblese',
	            'url': 'Ler Webtoon',
	            'description': 'Webtoon',
	            'logo': 'Noblese.webp',
	            'link': 'noblese-descricao',
	            'logo-descricao': 'Noblese.webp'
	        }, {
	            'title': 'Orange',
	            'url': 'Ler Webtoon',
	            'description': 'Webtoon',
	            'logo': 'orange.webp',
	            'link': 'orange-descricao',
	            'logo-orange': 'orange.webp'
	        }, {
	            'title': 'unTouchable',
	            'url': 'Ler Webtoon',
	            'description': 'Webtoon',
	            'logo': 'untouchable.webp',
	            'link': 'untouchable-descricao',
	            'logo-untouchable': 'untouchable.webp'
	        }, {
	            'title': 'Dr.Frost',
	            'url': 'Ler Webtoon',
	            'description': 'Webtoon',
	            'logo': 'frost.webp',
	            'link': 'descricao-frost',
	            'logo-descricao': 'frost.webp'
	        }];
	    }

	    _createClass(WebDevTecService, [{
	        key: 'getTec',
	        value: function getTec() {
	            return this.data;
	        }
	    }]);

	    return WebDevTecService;
	}();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/components/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var NavbarController = function NavbarController(moment) {
	  'ngInject';

	  // "this.creationDate" is available by directive option "bindToController: true"

	  _classCallCheck(this, NavbarController);

	  this.relativeDate = moment(this.creationDate).fromNow();
	};
	NavbarController.$inject = ["moment"];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	MalarkeyDirective.$inject = ["malarkey"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.MalarkeyDirective = MalarkeyDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function MalarkeyDirective(malarkey) {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    scope: {
	      extraValues: '='
	    },
	    template: '&nbsp;',
	    link: linkFunc,
	    controller: MalarkeyController,
	    controllerAs: 'vm'
	  };

	  return directive;

	  function linkFunc(scope, el, attr, vm) {
	    var watcher = void 0;
	    var typist = malarkey(el[0], {
	      typeSpeed: 40,
	      deleteSpeed: 40,
	      pauseDelay: 800,
	      loop: true,
	      postfix: ' '
	    });

	    el.addClass('acme-malarkey');

	    angular.forEach(scope.extraValues, function (value) {
	      typist.type(value).pause().delete();
	    });

	    watcher = scope.$watch('vm.contributors', function () {
	      angular.forEach(vm.contributors, function (contributor) {
	        typist.type(contributor.login).pause().delete();
	      });
	    });

	    scope.$on('$destroy', function () {
	      watcher();
	    });
	  }
	}

	var MalarkeyController = function () {
	  MalarkeyController.$inject = ["$log", "githubContributor"];
	  function MalarkeyController($log, githubContributor) {
	    'ngInject';

	    _classCallCheck(this, MalarkeyController);

	    this.$log = $log;
	    this.contributors = [];

	    this.activate(githubContributor);
	  }

	  _createClass(MalarkeyController, [{
	    key: 'activate',
	    value: function activate(githubContributor) {
	      var _this = this;

	      return this.getContributors(githubContributor).then(function () {
	        _this.$log.info('Activated Contributors View');
	      });
	    }
	  }, {
	    key: 'getContributors',
	    value: function getContributors(githubContributor) {
	      var _this2 = this;

	      return githubContributor.getContributors(10).then(function (data) {
	        _this2.contributors = data;

	        return _this2.contributors;
	      });
	    }
	  }]);

	  return MalarkeyController;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NhYWUxOWI5YWYyYjk3NTNkNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzP2Y4NGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanM/NmI5OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby9mcm9zdC1kZXNjcmljYW8vZGVzY3JpY2FvLWZyb3N0LmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vZnJvc3QtZGVzY3JpY2FvL2Rlc2NyaWNhby1mcm9zdC5jb250cm9sbGVyLmpzP2UyZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvLmNvbnRyb2xsZXIuanM/NTYzYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmNvbnRyb2xsZXIuanM/Njg2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcz80Yzk4Iiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcz9lMDVkIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanM/YzIwNSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanM/NjQxZSJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uc3RhbnQiLCJtYWxhcmtleSIsIm1vbWVudCIsImNvbmZpZyIsInJ1biIsInNlcnZpY2UiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiJGF1dGhQcm92aWRlciIsIkFQSV9VUkwiLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCJzaWdudXBVcmwiLCJyb3V0ZXJDb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCJydW5CbG9jayIsIiRsb2ciLCJkZWJ1ZyIsIiR0aW1lb3V0Iiwid2ViRGV2VGVjIiwiYXdlc29tZVRoaW5ncyIsImNyZWF0aW9uRGF0ZSIsImFjdGl2YXRlIiwiZ2V0V2ViRGV2VGVjIiwiY2xhc3NBbmltYXRpb24iLCJnZXRUZWMiLCJmb3JFYWNoIiwiYXdlc29tZVRoaW5nIiwicmFuayIsIk1hdGgiLCJyYW5kb20iLCIkYXV0aCIsInZtIiwic2lnbnVwIiwidXNlciIsInRoZW4iLCJ0b2tlbiIsInNldFRva2VuIiwiQ29tcGFyZVRvRGlyZWN0aXZlIiwiJHBhcnNlIiwicmVxdWlyZSIsImxpbmsiLCJzY29wZSIsImVsbSIsImF0dHJzIiwibmdNb2RlbCIsIm1haW5Nb2RlbCIsImNvbXBhcmVUbyIsInNlY29uZE1vZGVsIiwiJHdhdGNoIiwibmV3VmFsdWUiLCIkc2V0VmFsaWRpdHkiLCJuYW1lIiwiJGh0dHAiLCJnZXRNZXNzYWdlcyIsImdldCIsInJlc3VsdCIsIm1lc3NhZ2VzIiwiZGF0YSIsInBvc3QiLCJtc2ciLCJtZXNzYWdlIiwiT3JhbmdlQ29udHJvbGxlciIsIlRvd2VyT2ZHb2RzQ29udHJvbGxlciIsImFwaUhvc3QiLCJsaW1pdCIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInRvSnNvbiIsIldlYkRldlRlY1NlcnZpY2UiLCJOYXZiYXJEaXJlY3RpdmUiLCJyZXN0cmljdCIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsIk1hbGFya2V5RGlyZWN0aXZlIiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmtGdW5jIiwiTWFsYXJrZXlDb250cm9sbGVyIiwiZWwiLCJhdHRyIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsImRlbGV0ZSIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImdldENvbnRyaWJ1dG9ycyIsImluZm8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQ0VBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBQSxTQUFRQyxPQUFPLGtCQUFrQixDQUFDLGFBQWEsZ0JBQWdCLFVBQVUsZUFDdEVDLFNBQVMsV0FBVywwQkFDcEJBLFNBQVMsWUFBWUMsVUFDckJELFNBQVMsVUFBVUUsUUFDbkJDLE9BSkgsZUFLR0EsT0FMSCxzQkFNR0MsSUFOSCxrQkFPR0MsUUFBUSxx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R3BDLEtBQUtwRixPQUFPQTtLQUNaLEtBQUtnRixlQUFlOztLQUVwQixLQUFLMUUsU0FBUzhFOzs7R0RnQmhCLGFBQWEsb0JBQW9CLENBQUM7S0FDaEMsS0FBSztLQUNMLE9BQU8sU0FBUyxTQ2ZUQSxtQkFBbUI7T0FBQTs7T0FDMUIsT0FBTyxLQUFLQyxnQkFBZ0JELG1CQUFtQmpFLEtBQUssWUFBTTtTQUN4RCxNQUFLbkIsS0FBS3NGLEtBQUs7OztNRG9CaEI7S0FDRCxLQUFLO0tBQ0wsT0FBTyxTQUFTLGdCQ2xCRkYsbUJBQW1CO09BQUE7O09BQ2pDLE9BQU9BLGtCQUFrQkMsZ0JBQWdCLElBQUlsRSxLQUFLLFVBQUN1QixNQUFTO1NBQzFELE9BQUtzQyxlQUFldEM7O1NBRXBCLE9BQU8sT0FBS3NDOzs7OztHRHlCaEIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzY2FhZTE5YjlhZjJiOTc1M2Q3MiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4MyA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbiA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9hdXRoID0gcmVxdWlyZSgnLi9hdXRoL2F1dGguY29udHJvbGxlcicpO1xuXG52YXIgX2NvbXBhcmVUbyA9IHJlcXVpcmUoJy4uL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUnKTtcblxudmFyIF9kZXNjcmljYW9Gcm9zdCA9IHJlcXVpcmUoJy4vbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuY29udHJvbGxlcicpO1xuXG52YXIgX29yYW5nZURlc2NyaWNhbyA9IHJlcXVpcmUoJy4vbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyJyk7XG5cbnZhciBfdG93ZXJPZkdvZHNEZXNjcmljYW8gPSByZXF1aXJlKCcuL21hbmdhLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby5jb250cm9sbGVyJyk7XG5cbnZhciBfZ2l0aHViQ29udHJpYnV0b3IgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlJyk7XG5cbnZhciBfd2ViRGV2VGVjID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJyk7XG5cbnZhciBfbmF2YmFyID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnKTtcblxudmFyIF9tYWxhcmtleSA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZScpO1xuXG5hbmd1bGFyLm1vZHVsZSgnbWFuZ2Fsb2FkRnJvbnQnLCBbJ3VpLnJvdXRlcicsICd1aS5ib290c3RyYXAnLCAndG9hc3RyJywgJ3NhdGVsbGl6ZXInXSkuY29uc3RhbnQoJ0FQSV9VUkwnLCAnaHR0cDovL2xvY2FsaG9zdDo1MDAwLycpLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KS5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KS5jb25maWcoX2luZGV4LmNvbmZpZykuY29uZmlnKF9pbmRleDIucm91dGVyQ29uZmlnKS5ydW4oX2luZGV4My5ydW5CbG9jaykuc2VydmljZSgnZ2l0aHViQ29udHJpYnV0b3InLCBfZ2l0aHViQ29udHJpYnV0b3IuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKS5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBfd2ViRGV2VGVjLldlYkRldlRlY1NlcnZpY2UpLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW4uTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0F1dGhDb250cm9sbGVyJywgX2F1dGguQXV0aENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Zyb3N0Q29udHJvbGxlcicsIF9kZXNjcmljYW9Gcm9zdC5Gcm9zdENvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ09yYW5nZUNvbnRyb2xsZXInLCBfb3JhbmdlRGVzY3JpY2FvLk9yYW5nZUNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ1Rvd2VyT2ZHb2RzQ29udHJvbGxlcicsIF90b3dlck9mR29kc0Rlc2NyaWNhby5Ub3dlck9mR29kc0NvbnRyb2xsZXIpLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIF9uYXZiYXIuTmF2YmFyRGlyZWN0aXZlKS5kaXJlY3RpdmUoJ2FjbWVNYWxhcmtleScsIF9tYWxhcmtleS5NYWxhcmtleURpcmVjdGl2ZSkuZGlyZWN0aXZlKCdjb21wYXJlVG8nLCBfY29tcGFyZVRvLkNvbXBhcmVUb0RpcmVjdGl2ZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJcclxuXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBDb21wYXJlVG9EaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnJvc3RDb250cm9sbGVyIH0gZnJvbSAnLi9tYW5nYS1kZXNjcmljYW8vZnJvc3QtZGVzY3JpY2FvL2Rlc2NyaWNhby1mcm9zdC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgT3JhbmdlQ29udHJvbGxlciB9IGZyb20gJy4vbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJPZkdvZHNDb250cm9sbGVyIH0gZnJvbSAnLi9tYW5nYS1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21hbmdhbG9hZEZyb250JywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0cicsICdzYXRlbGxpemVyJ10pXHJcbiAgLmNvbnN0YW50KCdBUElfVVJMJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8nKVxyXG4gIC5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSlcclxuICAuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudClcclxuICAuY29uZmlnKGNvbmZpZylcclxuICAuY29uZmlnKHJvdXRlckNvbmZpZylcclxuICAucnVuKHJ1bkJsb2NrKVxyXG4gIC5zZXJ2aWNlKCdnaXRodWJDb250cmlidXRvcicsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSlcclxuICAuc2VydmljZSgnd2ViRGV2VGVjJywgV2ViRGV2VGVjU2VydmljZSlcclxuICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignQXV0aENvbnRyb2xsZXInLCBBdXRoQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignRnJvc3RDb250cm9sbGVyJywgRnJvc3RDb250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdPcmFuZ2VDb250cm9sbGVyJywgT3JhbmdlQ29udHJvbGxlcilcclxuICAuY29udHJvbGxlcignVG93ZXJPZkdvZHNDb250cm9sbGVyJywgVG93ZXJPZkdvZHNDb250cm9sbGVyKVxyXG4gIC5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBOYXZiYXJEaXJlY3RpdmUpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU1hbGFya2V5JywgTWFsYXJrZXlEaXJlY3RpdmUpXHJcbiAgLmRpcmVjdGl2ZSgnY29tcGFyZVRvJywgQ29tcGFyZVRvRGlyZWN0aXZlICk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWcgPSBjb25maWc7XG5mdW5jdGlvbiBjb25maWcoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcsICRhdXRoUHJvdmlkZXIsIEFQSV9VUkwpIHtcbiAgICAnbmdJbmplY3QnO1xuICAgIC8vIEVuYWJsZSBsb2dcblxuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQodHJ1ZSk7XG5cbiAgICAvLyBTZXQgb3B0aW9ucyB0aGlyZC1wYXJ0eSBsaWJcbiAgICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgICB0b2FzdHJDb25maWcudGltZU91dCA9IDMwMDA7XG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0JztcbiAgICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy5wcm9ncmVzc0JhciA9IHRydWU7XG5cbiAgICAkYXV0aFByb3ZpZGVyLnNpZ251cFVybCA9IEFQSV9VUkwgKyAnYXV0aC9yZWdpc3Rlcic7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnLCAkYXV0aFByb3ZpZGVyLCBBUElfVVJMKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvLyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAgIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcblxuICAgICAgICAkYXV0aFByb3ZpZGVyLnNpZ251cFVybCA9IEFQSV9VUkwgKyAnYXV0aC9yZWdpc3Rlcic7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6ICcvbWFpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgfSkuc3RhdGUoJ2F1dGgnLCB7XG4gICAgdXJsOiAnL2F1dGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvYXV0aC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2F1dGgnXG4gIH0pLnN0YXRlKCdkZXNjcmljYW8tZnJvc3QnLCB7XG4gICAgdXJsOiAnL2Rlc2NyaWNhby1mcm9zdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0Zyb3N0Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnZGVzY3JpY2FvLWZyb3N0J1xuICB9KS5zdGF0ZSgnb3JhbmdlLWRlc2NyaWNhbycsIHtcbiAgICB1cmw6ICcvb3JhbmdlLWRlc2NyaWNhbycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnT3JhbmdlQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnb3JhbmdlLWRlc2NyaWNhbydcbiAgfSkuc3RhdGUoJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJywge1xuICAgIHVybDogJy90b3dlci1vZi1nb2RzLWRlc2NyaWNhbycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdUb3dlck9mR29kc0NvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJ1xuICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoJ2hvbWUnLFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvbWFpbicsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICAgIH0pXHJcbiAgICAgIC5zdGF0ZSgnYXV0aCcsXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy9hdXRoJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9hdXRoLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdhdXRoJ1xyXG4gICAgfSlcclxuICAgICAgICAgLnN0YXRlKCdkZXNjcmljYW8tZnJvc3QnLFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvZGVzY3JpY2FvLWZyb3N0JyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdGcm9zdENvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdkZXNjcmljYW8tZnJvc3QnXHJcbiAgICB9KVxuICAgICAgIC5zdGF0ZSgnb3JhbmdlLWRlc2NyaWNhbycsXG4gICAge1xuICAgICAgdXJsOiAnL29yYW5nZS1kZXNjcmljYW8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdPcmFuZ2VDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ29yYW5nZS1kZXNjcmljYW8nXG4gICAgfSlcbiAgICAgICAuc3RhdGUoJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJyxcbiAgICB7XG4gICAgICB1cmw6ICcvdG93ZXItb2YtZ29kcy1kZXNjcmljYW8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1Rvd2VyT2ZHb2RzQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd0b3dlci1vZi1nb2RzLWRlc2NyaWNhbydcbiAgICB9KTtcclxuXHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IGV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDc3Njg1NzA4NTI4O1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWluQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0V2ViRGV2VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCBmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0Nzc2ODU3MDg1Mjg7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XHJcbiAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCc7XHJcbiAgICB9LCA0MDAwKTtcclxuICB9XHJcblxyXG4gIGdldFdlYkRldlRlYyh3ZWJEZXZUZWMpIHtcclxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKTtcclxuXHJcbiAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSA9PiB7XHJcbiAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQXV0aENvbnRyb2xsZXIgPSBleHBvcnRzLkF1dGhDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhDb250cm9sbGVyKCRhdXRoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dGhDb250cm9sbGVyKTtcblxuICAgICAgICB0aGlzLiRhdXRoID0gJGF1dGg7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF1dGhDb250cm9sbGVyLCBbe1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLiRhdXRoLnNpZ251cCh0aGlzLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgdm0uJGF1dGguc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXV0aENvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigkYXV0aCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIHRoaXMuJGF1dGggPSAkYXV0aDtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgdGhpcy4kYXV0aC5zaWdudXAodGhpcy51c2VyKS50aGVuKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgdm0uJGF1dGguc2V0VG9rZW4odG9rZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db21wYXJlVG9EaXJlY3RpdmUgPSBDb21wYXJlVG9EaXJlY3RpdmU7XG5mdW5jdGlvbiBDb21wYXJlVG9EaXJlY3RpdmUoJHBhcnNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWxtLCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIG1haW5Nb2RlbCA9ICRwYXJzZShhdHRycy5jb21wYXJlVG8pO1xuICAgICAgICAgICAgdmFyIHNlY29uZE1vZGVsID0gJHBhcnNlKGF0dHJzLm5nTW9kZWwpO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubmdNb2RlbCwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoYXR0cnMubmFtZSwgbmV3VmFsdWUgPT09IG1haW5Nb2RlbChzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5jb21wYXJlVG8sIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBzZWNvbmRNb2RlbChzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIENvbXBhcmVUb0RpcmVjdGl2ZSgkcGFyc2UpIHtcbiAgICAnbmdJbmplY3QnXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBtYWluTW9kZWwgPSAkcGFyc2UoYXR0cnMuY29tcGFyZVRvKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKTtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLm5nTW9kZWwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBtYWluTW9kZWwoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuY29tcGFyZVRvLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gc2Vjb25kTW9kZWwoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEZyb3N0Q29udHJvbGxlciA9IGV4cG9ydHMuRnJvc3RDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZyb3N0Q29udHJvbGxlcigkaHR0cCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGcm9zdENvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcblxuICAgICAgICB0aGlzLmdldE1lc3NhZ2VzKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZyb3N0Q29udHJvbGxlciwgW3tcbiAgICAgICAga2V5OiAnZ2V0TWVzc2FnZXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbWVzc2FnZScpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHZtLm1lc3NhZ2VzID0gcmVzdWx0LmRhdGE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncG9zdE1lc3NhZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgICAgICB0aGlzLiRodHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvbWVzc2FnZScsIHsgbXNnOiB0aGlzLm1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRnJvc3RDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBGcm9zdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG4gICAgXG4gICAgXG4gICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuXG4gICAgdGhpcy5nZXRNZXNzYWdlcygpO1xuICAgICAgICBcbiAgICB9XG5cbiAgIGdldE1lc3NhZ2VzKCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB0aGlzLiRodHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9tZXNzYWdlJykudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgdm0ubWVzc2FnZXMgPSByZXN1bHQuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIHRoaXMuJGh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9tZXNzYWdlJywge21zZzogdGhpcy5tZXNzYWdlfSk7XG4gICAgfVxuXG5cblxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuY29udHJvbGxlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBPcmFuZ2VDb250cm9sbGVyID0gZXhwb3J0cy5PcmFuZ2VDb250cm9sbGVyID0gZnVuY3Rpb24gT3JhbmdlQ29udHJvbGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3JhbmdlQ29udHJvbGxlcik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE9yYW5nZUNvbnRyb2xsZXJcbiAgICB7XG5cbiAgICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8uY29udHJvbGxlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBUb3dlck9mR29kc0NvbnRyb2xsZXIgPSBleHBvcnRzLlRvd2VyT2ZHb2RzQ29udHJvbGxlciA9IGZ1bmN0aW9uIFRvd2VyT2ZHb2RzQ29udHJvbGxlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG93ZXJPZkdvZHNDb250cm9sbGVyKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBUb3dlck9mR29kc0NvbnRyb2xsZXJcbiAgICB7XG5cbiAgICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gZXhwb3J0cy5HaXRodWJDb250cmlidXRvclNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSwgW3tcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgbGltaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDMwO1xuXG4gICAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodGhpcy5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9JyArIGxpbWl0KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfdGhpcy4kbG9nLmVycm9yKCdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHaXRodWJDb250cmlidXRvclNlcnZpY2U7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJleHBvcnQgY2xhc3MgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IgKCRsb2csICRodHRwKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuYXBpSG9zdCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL1N3aWlwL2dlbmVyYXRvci1ndWxwLWFuZ3VsYXInO1xuICB9XG5cbiAgZ2V0Q29udHJpYnV0b3JzKGxpbWl0PTMwKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFdlYkRldlRlY1NlcnZpY2UgPSBleHBvcnRzLldlYkRldlRlY1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2ViRGV2VGVjU2VydmljZSgpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViRGV2VGVjU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5kYXRhID0gW3tcbiAgICAgICAgICAgICd0aXRsZSc6ICdUb3dlciBvZiBHb2RzJyxcbiAgICAgICAgICAgICd1cmwnOiAnTGVyIFdlYnRvb24nLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1dlYnRvb24nLFxuICAgICAgICAgICAgJ2xvZ28nOiAnVG93ZXIud2VicCcsXG4gICAgICAgICAgICAnbGluayc6ICd0b3dlci1vZi1nb2RzLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnVG93ZXIud2VicCdcblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICAndGl0bGUnOiAnTm9ibGVzZScsXG4gICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcbiAgICAgICAgICAgICdsb2dvJzogJ05vYmxlc2Uud2VicCcsXG4gICAgICAgICAgICAnbGluayc6ICdub2JsZXNlLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnTm9ibGVzZS53ZWJwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAndGl0bGUnOiAnT3JhbmdlJyxcbiAgICAgICAgICAgICd1cmwnOiAnTGVyIFdlYnRvb24nLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1dlYnRvb24nLFxuICAgICAgICAgICAgJ2xvZ28nOiAnb3JhbmdlLndlYnAnLFxuICAgICAgICAgICAgJ2xpbmsnOiAnb3JhbmdlLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAnbG9nby1vcmFuZ2UnOiAnb3JhbmdlLndlYnAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICd1blRvdWNoYWJsZScsXG4gICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcbiAgICAgICAgICAgICdsb2dvJzogJ3VudG91Y2hhYmxlLndlYnAnLFxuICAgICAgICAgICAgJ2xpbmsnOiAndW50b3VjaGFibGUtZGVzY3JpY2FvJyxcbiAgICAgICAgICAgICdsb2dvLXVudG91Y2hhYmxlJzogJ3VudG91Y2hhYmxlLndlYnAnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgICd0aXRsZSc6ICdEci5Gcm9zdCcsXG4gICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcbiAgICAgICAgICAgICdsb2dvJzogJ2Zyb3N0LndlYnAnLFxuICAgICAgICAgICAgJ2xpbmsnOiAnZGVzY3JpY2FvLWZyb3N0JyxcbiAgICAgICAgICAgICdsb2dvLWRlc2NyaWNhbyc6ICdmcm9zdC53ZWJwJ1xuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoV2ViRGV2VGVjU2VydmljZSwgW3tcbiAgICAgICAga2V5OiAnZ2V0VGVjJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRlYygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gV2ViRGV2VGVjU2VydmljZTtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIFdlYkRldlRlY1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnVG93ZXIgb2YgR29kcycsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ1Rvd2VyLndlYnAnLFxyXG4gICAgICAgICAgICAgICAgJ2xpbmsnOiAndG93ZXItb2YtZ29kcy1kZXNjcmljYW8nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28tZGVzY3JpY2FvJzogJ1Rvd2VyLndlYnAnXHJcblxyXG4gICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnTm9ibGVzZScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ05vYmxlc2Uud2VicCcsXHJcbiAgICAgICAgICAgICAgICAnbGluayc6ICdub2JsZXNlLWRlc2NyaWNhbycsXHJcbiAgICAgICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnTm9ibGVzZS53ZWJwJ1xyXG4gICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnT3JhbmdlJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnTGVyIFdlYnRvb24nLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1dlYnRvb24nLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnb3JhbmdlLndlYnAnLFxyXG4gICAgICAgICAgICAgICAgJ2xpbmsnOiAnb3JhbmdlLWRlc2NyaWNhbycsXHJcbiAgICAgICAgICAgICAgICAnbG9nby1vcmFuZ2UnOiAnb3JhbmdlLndlYnAnXHJcbiAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICd1blRvdWNoYWJsZScsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ3VudG91Y2hhYmxlLndlYnAnLFxyXG4gICAgICAgICAgICAgICAgJ2xpbmsnOiAndW50b3VjaGFibGUtZGVzY3JpY2FvJyxcclxuICAgICAgICAgICAgICAgICdsb2dvLXVudG91Y2hhYmxlJzogJ3VudG91Y2hhYmxlLndlYnAnXHJcbiAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEci5Gcm9zdCcsXHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ0xlciBXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdXZWJ0b29uJyxcclxuICAgICAgICAgICAgICAgICdsb2dvJzogJ2Zyb3N0LndlYnAnLFxyXG4gICAgICAgICAgICAgICAgJ2xpbmsnOiAnZGVzY3JpY2FvLWZyb3N0JyxcclxuICAgICAgICAgICAgICAgICdsb2dvLWRlc2NyaWNhbyc6ICdmcm9zdC53ZWJwJ1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRlYygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk5hdmJhckRpcmVjdGl2ZSA9IE5hdmJhckRpcmVjdGl2ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXG4gICAgc2NvcGU6IHtcbiAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIGRpcmVjdGl2ZTtcbn1cblxudmFyIE5hdmJhckNvbnRyb2xsZXIgPSBmdW5jdGlvbiBOYXZiYXJDb250cm9sbGVyKG1vbWVudCkge1xuICAnbmdJbmplY3QnO1xuXG4gIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOYXZiYXJDb250cm9sbGVyKTtcblxuICB0aGlzLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh0aGlzLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJleHBvcnQgZnVuY3Rpb24gTmF2YmFyRGlyZWN0aXZlKCkge1xyXG4gICduZ0luamVjdCc7XHJcblxyXG4gIGxldCBkaXJlY3RpdmUgPSB7XHJcbiAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXHJcbiAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGRpcmVjdGl2ZTtcclxufVxyXG5cclxuY2xhc3MgTmF2YmFyQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IgKG1vbWVudCkge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICAvLyBcInRoaXMuY3JlYXRpb25EYXRlXCIgaXMgYXZhaWxhYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcclxuICAgIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5NYWxhcmtleURpcmVjdGl2ZSA9IE1hbGFya2V5RGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xuICAnbmdJbmplY3QnO1xuXG4gIHZhciBkaXJlY3RpdmUgPSB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgZXh0cmFWYWx1ZXM6ICc9J1xuICAgIH0sXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxuICAgIGxpbms6IGxpbmtGdW5jLFxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xuXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHZvaWQgMDtcbiAgICB2YXIgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sIHtcbiAgICAgIHR5cGVTcGVlZDogNDAsXG4gICAgICBkZWxldGVTcGVlZDogNDAsXG4gICAgICBwYXVzZURlbGF5OiA4MDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgcG9zdGZpeDogJyAnXG4gICAgfSk7XG5cbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgZnVuY3Rpb24gKCkge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHZtLmNvbnRyaWJ1dG9ycywgZnVuY3Rpb24gKGNvbnRyaWJ1dG9yKSB7XG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgd2F0Y2hlcigpO1xuICAgIH0pO1xuICB9XG59XG5cbnZhciBNYWxhcmtleUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hbGFya2V5Q29udHJvbGxlcigkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFsYXJrZXlDb250cm9sbGVyKTtcblxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcblxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hbGFya2V5Q29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy4kbG9nLmluZm8oJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldycpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBfdGhpczIuY29udHJpYnV0b3JzID0gZGF0YTtcblxuICAgICAgICByZXR1cm4gX3RoaXMyLmNvbnRyaWJ1dG9ycztcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWxhcmtleUNvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBNYWxhcmtleURpcmVjdGl2ZShtYWxhcmtleSkge1xyXG4gICduZ0luamVjdCc7XHJcblxyXG4gIGxldCBkaXJlY3RpdmUgPSB7XHJcbiAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgICBleHRyYVZhbHVlczogJz0nXHJcbiAgICB9LFxyXG4gICAgdGVtcGxhdGU6ICcmbmJzcDsnLFxyXG4gICAgbGluazogbGlua0Z1bmMsXHJcbiAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXIsXHJcbiAgICBjb250cm9sbGVyQXM6ICd2bSdcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGlyZWN0aXZlO1xyXG5cclxuICBmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIHZtKSB7XHJcbiAgICBsZXQgd2F0Y2hlcjtcclxuICAgIGxldCB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xyXG4gICAgICB0eXBlU3BlZWQ6IDQwLFxyXG4gICAgICBkZWxldGVTcGVlZDogNDAsXHJcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgcG9zdGZpeDogJyAnXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbC5hZGRDbGFzcygnYWNtZS1tYWxhcmtleScpO1xyXG5cclxuICAgIGFuZ3VsYXIuZm9yRWFjaChzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSA9PiB7XHJcbiAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgKCkgPT4ge1xyXG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpID0+IHtcclxuICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4ge1xyXG4gICAgICB3YXRjaGVyKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBNYWxhcmtleUNvbnRyb2xsZXIge1xyXG4gIGNvbnN0cnVjdG9yICgkbG9nLCBnaXRodWJDb250cmlidXRvcikge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xyXG4gICAgdGhpcy5jb250cmlidXRvcnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKTtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikge1xyXG4gICAgcmV0dXJuIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IGRhdGE7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5jb250cmlidXRvcnM7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
