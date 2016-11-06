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

	var _auth = __webpack_require__(9);

	var _compareTo = __webpack_require__(13);

	var _descricaoFrost = __webpack_require__(10);

	var _orangeDescricao = __webpack_require__(11);

	var _towerOfGodsDescricao = __webpack_require__(12);

	var _githubContributor = __webpack_require__(5);

	var _webDevTec = __webpack_require__(6);

	var _navbar = __webpack_require__(7);

	var _malarkey = __webpack_require__(8);

	angular.module('mangaloadFront', ['ui.router', 'ui.bootstrap', 'toastr', 'satellizer']).constant('malarkey', malarkey).constant('moment', moment).config(_index.config).config(_index2.routerConfig).run(_index3.runBlock).service('githubContributor', _githubContributor.GithubContributorService).service('webDevTec', _webDevTec.WebDevTecService).controller('MainController', _main.MainController).controller('AuthController', _auth.AuthController).controller('FrostController', _descricaoFrost.FrostController).controller('OrangeController', _orangeDescricao.OrangeController).controller('TowerOfGodsController', _towerOfGodsDescricao.TowerOfGodsController).directive('acmeNavbar', _navbar.NavbarDirective).directive('acmeMalarkey', _malarkey.MalarkeyDirective).directive('compareTo', _compareTo.CompareToDirective); /* global malarkey:false, moment:false */

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig", "$authProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig, $authProvider) {
	    'ngInject';
	    // Enable log

	    $logProvider.debugEnabled(true);

	    // Set options third-party lib
	    toastrConfig.allowHtml = true;
	    toastrConfig.timeOut = 3000;
	    toastrConfig.positionClass = 'toast-top-right';
	    toastrConfig.preventDuplicates = true;
	    toastrConfig.progressBar = true;

	    $authProvider.signupUrl = '';
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
/* 6 */
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
	            'url': 'Ler Manga',
	            'description': 'Manhwa',
	            'logo': 'Tower.webp',
	            'link': 'tower-of-gods-descricao',
	            'logo-descricao': 'Tower.webp'

	        }, {
	            'title': 'Noblese',
	            'url': 'Ler Manga',
	            'description': 'Manhwa',
	            'logo': 'Noblese.webp',
	            'link': 'noblese-descricao',
	            'logo-descricao': 'Noblese.webp'
	        }, {
	            'title': 'Orange',
	            'url': 'Ler Manga',
	            'description': 'Manhwa',
	            'logo': 'orange.webp',
	            'link': 'orange-descricao',
	            'logo-orange': 'orange.webp'
	        }, {
	            'title': 'unTouchable',
	            'url': 'Ler Manga',
	            'description': 'Manhwa',
	            'logo': 'untouchable.webp',
	            'link': 'untouchable-descricao',
	            'logo-untouchable': 'untouchable.webp'
	        }, {
	            'title': 'Dr.Frost',
	            'url': 'Ler Manga',
	            'description': 'Manhwa',
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
/* 7 */
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
/* 8 */
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

/***/ },
/* 9 */
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
	            this.$auth.signup({ email: 'test@test.com' });
	        }
	    }]);

	    return AuthController;
	}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FrostController = exports.FrostController = function FrostController() {
	  _classCallCheck(this, FrostController);
	};

/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWUzYjk5NjFlZTI0YzI5YWNjZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UuanM/NGM5OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UuanM/ZTA1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzP2MyMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzPzY0MWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzP2Y4NGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vZnJvc3QtZGVzY3JpY2FvL2Rlc2NyaWNhby1mcm9zdC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuY29udHJvbGxlci5qcz9lMmY1Iiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyLmpzPzU2M2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby90b3dlci1vZi1nb2RzLWRlc2NyaWNhby5jb250cm9sbGVyLmpzPzY4NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanM/NmI5OCJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uc3RhbnQiLCJtYWxhcmtleSIsIm1vbWVudCIsImNvbmZpZyIsInJ1biIsInNlcnZpY2UiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwiJGxvZ1Byb3ZpZGVyIiwidG9hc3RyQ29uZmlnIiwiJGF1dGhQcm92aWRlciIsImRlYnVnRW5hYmxlZCIsImFsbG93SHRtbCIsInRpbWVPdXQiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJwcm9ncmVzc0JhciIsInNpZ251cFVybCIsInJvdXRlckNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXJBcyIsIm90aGVyd2lzZSIsInJ1bkJsb2NrIiwiJGxvZyIsImRlYnVnIiwiJHRpbWVvdXQiLCJ3ZWJEZXZUZWMiLCJhd2Vzb21lVGhpbmdzIiwiY3JlYXRpb25EYXRlIiwiYWN0aXZhdGUiLCJnZXRXZWJEZXZUZWMiLCJjbGFzc0FuaW1hdGlvbiIsImdldFRlYyIsImZvckVhY2giLCJhd2Vzb21lVGhpbmciLCJyYW5rIiwiTWF0aCIsInJhbmRvbSIsIiRodHRwIiwiYXBpSG9zdCIsImxpbWl0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJ0b0pzb24iLCJXZWJEZXZUZWNTZXJ2aWNlIiwiTmF2YmFyRGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsIk5hdmJhckNvbnRyb2xsZXIiLCJiaW5kVG9Db250cm9sbGVyIiwicmVsYXRpdmVEYXRlIiwiZnJvbU5vdyIsIk1hbGFya2V5RGlyZWN0aXZlIiwiZXh0cmFWYWx1ZXMiLCJ0ZW1wbGF0ZSIsImxpbmsiLCJsaW5rRnVuYyIsIk1hbGFya2V5Q29udHJvbGxlciIsImVsIiwiYXR0ciIsInZtIiwid2F0Y2hlciIsInR5cGlzdCIsInR5cGVTcGVlZCIsImRlbGV0ZVNwZWVkIiwicGF1c2VEZWxheSIsImxvb3AiLCJwb3N0Zml4IiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsInR5cGUiLCJwYXVzZSIsImRlbGV0ZSIsIiR3YXRjaCIsImNvbnRyaWJ1dG9ycyIsImNvbnRyaWJ1dG9yIiwibG9naW4iLCIkb24iLCJnaXRodWJDb250cmlidXRvciIsImdldENvbnRyaWJ1dG9ycyIsImluZm8iLCIkYXV0aCIsInNpZ251cCIsImVtYWlsIiwiRnJvc3RDb250cm9sbGVyIiwiT3JhbmdlQ29udHJvbGxlciIsIlRvd2VyT2ZHb2RzQ29udHJvbGxlciIsIkNvbXBhcmVUb0RpcmVjdGl2ZSIsIiRwYXJzZSIsInJlcXVpcmUiLCJlbG0iLCJhdHRycyIsIm5nTW9kZWwiLCJtYWluTW9kZWwiLCJjb21wYXJlVG8iLCJzZWNvbmRNb2RlbCIsIm5ld1ZhbHVlIiwiJHNldFZhbGlkaXR5IiwibmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0FBLFNBQVFDLE9BQU8sa0JBQWtCLENBQUMsYUFBYSxnQkFBZ0IsVUFBVSxlQUN0RUMsU0FBUyxZQUFZQyxVQUNyQkQsU0FBUyxVQUFVRSxRQUNuQkMsT0FISCxlQUlHQSxPQUpILHNCQUtHQyxJQUxILGtCQU1HQyxRQUFRLHFCQU5YLDZDQU9HQSxRQUFRLGFBUFgsNkJBUUdDLFdBQVcsa0JBUmQsc0JBU0dBLFdBQVcsa0JBVGQsc0JBVUdBLFdBQVcsbUJBVmQsaUNBV0dBLFdB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QWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxLQ1JhQyx3QkRRZSxRQ1JmQSx3QkRRK0MsU0FBUyx3QkFBd0I7S0FDekYsZ0JBQWdCLE1BQU07Ozs7Ozs7QUVUMUI7OztBQUVBLFFBQU8sZUFBZSxTQUFTLGNBQWM7S0FDekMsT0FBTzs7QUFFWCxTQ0xnQkM7QUFBVCxVQUFTQSxtQkFBbUJDLFFBQVE7S0FDdkM7O0tBQ0EsT0FBTztTQUNIQyxTQUFTO1NBQ1RsQyxNQUFNLGNBQVVSLE9BQU8yQyxLQUFLQyxPQUFPQyxTQUFTO2FBQ3hDLElBQUlDLFlBQVlMLE9BQU9HLE1BQU1HO2FBQzdCLElBQUlDLGNBQWNQLE9BQU9HLE1BQU1DOzthQUUvQjdDLE1BQU0wQixPQUFPa0IsTUFBTUMsU0FBUyxVQUFVSSxVQUFVO2lCQUM1Q0osUUFBUUssYUFBYU4sTUFBTU8sTUFBTUYsYUFBYUgsVUFBVTlDOzs7YUFHNURBLE1BQU0wQixPQUFPa0IsTUFBTUcsV0FBVyxVQUFVRSxVQUFVO2lCQUM5Q0osUUFBUUssYUFBYU4sTUFBTU8sTUFBTUYsYUFBYUQsWUFBWWhEIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVlM2I5OTYxZWUyNGMyOWFjY2ZkIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi9pbmRleC5jb25maWcnKTtcblxudmFyIF9pbmRleDIgPSByZXF1aXJlKCcuL2luZGV4LnJvdXRlJyk7XG5cbnZhciBfaW5kZXgzID0gcmVxdWlyZSgnLi9pbmRleC5ydW4nKTtcblxudmFyIF9tYWluID0gcmVxdWlyZSgnLi9tYWluL21haW4uY29udHJvbGxlcicpO1xuXG52YXIgX2F1dGggPSByZXF1aXJlKCcuL2F1dGgvYXV0aC5jb250cm9sbGVyJyk7XG5cbnZhciBfY29tcGFyZVRvID0gcmVxdWlyZSgnLi4vYXBwL2RpcmVjdGl2ZXMvY29tcGFyZVRvLmRpcmVjdGl2ZScpO1xuXG52YXIgX2Rlc2NyaWNhb0Zyb3N0ID0gcmVxdWlyZSgnLi9tYW5nYS1kZXNjcmljYW8vZnJvc3QtZGVzY3JpY2FvL2Rlc2NyaWNhby1mcm9zdC5jb250cm9sbGVyJyk7XG5cbnZhciBfb3JhbmdlRGVzY3JpY2FvID0gcmVxdWlyZSgnLi9tYW5nYS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvLmNvbnRyb2xsZXInKTtcblxudmFyIF90b3dlck9mR29kc0Rlc2NyaWNhbyA9IHJlcXVpcmUoJy4vbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmNvbnRyb2xsZXInKTtcblxudmFyIF9naXRodWJDb250cmlidXRvciA9IHJlcXVpcmUoJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnKTtcblxudmFyIF93ZWJEZXZUZWMgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy93ZWJEZXZUZWMvd2ViRGV2VGVjLnNlcnZpY2UnKTtcblxudmFyIF9uYXZiYXIgPSByZXF1aXJlKCcuLi9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZScpO1xuXG52YXIgX21hbGFya2V5ID0gcmVxdWlyZSgnLi4vYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlJyk7XG5cbmFuZ3VsYXIubW9kdWxlKCdtYW5nYWxvYWRGcm9udCcsIFsndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICd0b2FzdHInLCAnc2F0ZWxsaXplciddKS5jb25zdGFudCgnbWFsYXJrZXknLCBtYWxhcmtleSkuY29uc3RhbnQoJ21vbWVudCcsIG1vbWVudCkuY29uZmlnKF9pbmRleC5jb25maWcpLmNvbmZpZyhfaW5kZXgyLnJvdXRlckNvbmZpZykucnVuKF9pbmRleDMucnVuQmxvY2spLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgX2dpdGh1YkNvbnRyaWJ1dG9yLkdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSkuc2VydmljZSgnd2ViRGV2VGVjJywgX3dlYkRldlRlYy5XZWJEZXZUZWNTZXJ2aWNlKS5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIF9tYWluLk1haW5Db250cm9sbGVyKS5jb250cm9sbGVyKCdBdXRoQ29udHJvbGxlcicsIF9hdXRoLkF1dGhDb250cm9sbGVyKS5jb250cm9sbGVyKCdGcm9zdENvbnRyb2xsZXInLCBfZGVzY3JpY2FvRnJvc3QuRnJvc3RDb250cm9sbGVyKS5jb250cm9sbGVyKCdPcmFuZ2VDb250cm9sbGVyJywgX29yYW5nZURlc2NyaWNhby5PcmFuZ2VDb250cm9sbGVyKS5jb250cm9sbGVyKCdUb3dlck9mR29kc0NvbnRyb2xsZXInLCBfdG93ZXJPZkdvZHNEZXNjcmljYW8uVG93ZXJPZkdvZHNDb250cm9sbGVyKS5kaXJlY3RpdmUoJ2FjbWVOYXZiYXInLCBfbmF2YmFyLk5hdmJhckRpcmVjdGl2ZSkuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBfbWFsYXJrZXkuTWFsYXJrZXlEaXJlY3RpdmUpLmRpcmVjdGl2ZSgnY29tcGFyZVRvJywgX2NvbXBhcmVUby5Db21wYXJlVG9EaXJlY3RpdmUpOyAvKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiLyogZ2xvYmFsIG1hbGFya2V5OmZhbHNlLCBtb21lbnQ6ZmFsc2UgKi9cclxuXHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vaW5kZXguY29uZmlnJztcclxuaW1wb3J0IHsgcm91dGVyQ29uZmlnIH0gZnJvbSAnLi9pbmRleC5yb3V0ZSc7XHJcbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9pbmRleC5ydW4nO1xyXG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gJy4vYXV0aC9hdXRoLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBDb21wYXJlVG9EaXJlY3RpdmUgfSBmcm9tICcuLi9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRnJvc3RDb250cm9sbGVyIH0gZnJvbSAnLi9tYW5nYS1kZXNjcmljYW8vZnJvc3QtZGVzY3JpY2FvL2Rlc2NyaWNhby1mcm9zdC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgT3JhbmdlQ29udHJvbGxlciB9IGZyb20gJy4vbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVG93ZXJPZkdvZHNDb250cm9sbGVyIH0gZnJvbSAnLi9tYW5nYS1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8uY29udHJvbGxlcic7XHJcbmltcG9ydCB7IEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL2dpdGh1YkNvbnRyaWJ1dG9yL2dpdGh1YkNvbnRyaWJ1dG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZWJEZXZUZWNTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmF2YmFyRGlyZWN0aXZlIH0gZnJvbSAnLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYWxhcmtleURpcmVjdGl2ZSB9IGZyb20gJy4uL2FwcC9jb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21hbmdhbG9hZEZyb250JywgWyd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0cicsICdzYXRlbGxpemVyJ10pXHJcbiAgLmNvbnN0YW50KCdtYWxhcmtleScsIG1hbGFya2V5KVxyXG4gIC5jb25zdGFudCgnbW9tZW50JywgbW9tZW50KVxyXG4gIC5jb25maWcoY29uZmlnKVxyXG4gIC5jb25maWcocm91dGVyQ29uZmlnKVxyXG4gIC5ydW4ocnVuQmxvY2spXHJcbiAgLnNlcnZpY2UoJ2dpdGh1YkNvbnRyaWJ1dG9yJywgR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlKVxyXG4gIC5zZXJ2aWNlKCd3ZWJEZXZUZWMnLCBXZWJEZXZUZWNTZXJ2aWNlKVxyXG4gIC5jb250cm9sbGVyKCdNYWluQ29udHJvbGxlcicsIE1haW5Db250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdBdXRoQ29udHJvbGxlcicsIEF1dGhDb250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdGcm9zdENvbnRyb2xsZXInLCBGcm9zdENvbnRyb2xsZXIpXHJcbiAgLmNvbnRyb2xsZXIoJ09yYW5nZUNvbnRyb2xsZXInLCBPcmFuZ2VDb250cm9sbGVyKVxyXG4gIC5jb250cm9sbGVyKCdUb3dlck9mR29kc0NvbnRyb2xsZXInLCBUb3dlck9mR29kc0NvbnRyb2xsZXIpXHJcbiAgLmRpcmVjdGl2ZSgnYWNtZU5hdmJhcicsIE5hdmJhckRpcmVjdGl2ZSlcclxuICAuZGlyZWN0aXZlKCdhY21lTWFsYXJrZXknLCBNYWxhcmtleURpcmVjdGl2ZSlcclxuICAuZGlyZWN0aXZlKCdjb21wYXJlVG8nLCBDb21wYXJlVG9EaXJlY3RpdmUgKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgubW9kdWxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbmZpZyA9IGNvbmZpZztcbmZ1bmN0aW9uIGNvbmZpZygkbG9nUHJvdmlkZXIsIHRvYXN0ckNvbmZpZywgJGF1dGhQcm92aWRlcikge1xuICAgICduZ0luamVjdCc7XG4gICAgLy8gRW5hYmxlIGxvZ1xuXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAgIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcblxuICAgICRhdXRoUHJvdmlkZXIuc2lnbnVwVXJsID0gJyc7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCJleHBvcnQgZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnLCAkYXV0aFByb3ZpZGVyKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvLyBFbmFibGUgbG9nXG4gICAgJGxvZ1Byb3ZpZGVyLmRlYnVnRW5hYmxlZCh0cnVlKTtcblxuICAgIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlO1xuICAgIHRvYXN0ckNvbmZpZy50aW1lT3V0ID0gMzAwMDtcbiAgICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWU7XG4gICAgdG9hc3RyQ29uZmlnLnByb2dyZXNzQmFyID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgJGF1dGhQcm92aWRlci5zaWdudXBVcmwgPSAnJztcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJ25nSW5qZWN0JztcblxuICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcbiAgICB1cmw6ICcvbWFpbicsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9tYWluLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnbWFpbidcbiAgfSkuc3RhdGUoJ2F1dGgnLCB7XG4gICAgdXJsOiAnL2F1dGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2F1dGgvYXV0aC5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ2F1dGgnXG4gIH0pLnN0YXRlKCdkZXNjcmljYW8tZnJvc3QnLCB7XG4gICAgdXJsOiAnL2Rlc2NyaWNhby1mcm9zdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0Zyb3N0Q29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnZGVzY3JpY2FvLWZyb3N0J1xuICB9KS5zdGF0ZSgnb3JhbmdlLWRlc2NyaWNhbycsIHtcbiAgICB1cmw6ICcvb3JhbmdlLWRlc2NyaWNhbycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnT3JhbmdlQ29udHJvbGxlcicsXG4gICAgY29udHJvbGxlckFzOiAnb3JhbmdlLWRlc2NyaWNhbydcbiAgfSkuc3RhdGUoJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJywge1xuICAgIHVybDogJy90b3dlci1vZi1nb2RzLWRlc2NyaWNhbycsXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdUb3dlck9mR29kc0NvbnRyb2xsZXInLFxuICAgIGNvbnRyb2xsZXJBczogJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJ1xuICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiByb3V0ZXJDb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAnbmdJbmplY3QnO1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoJ2hvbWUnLFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvbWFpbicsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgY29udHJvbGxlcjogJ01haW5Db250cm9sbGVyJyxcclxuICAgICAgY29udHJvbGxlckFzOiAnbWFpbidcclxuICAgIH0pXHJcbiAgICAgIC5zdGF0ZSgnYXV0aCcsXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy9hdXRoJyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvYXV0aC9hdXRoLmh0bWwnLFxyXG4gICAgICBjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdhdXRoJ1xyXG4gICAgfSlcclxuICAgICAgICAgLnN0YXRlKCdkZXNjcmljYW8tZnJvc3QnLFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvZGVzY3JpY2FvLWZyb3N0JyxcclxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuaHRtbCcsXHJcbiAgICAgIGNvbnRyb2xsZXI6ICdGcm9zdENvbnRyb2xsZXInLFxyXG4gICAgICBjb250cm9sbGVyQXM6ICdkZXNjcmljYW8tZnJvc3QnXHJcbiAgICB9KVxuICAgICAgIC5zdGF0ZSgnb3JhbmdlLWRlc2NyaWNhbycsXG4gICAge1xuICAgICAgdXJsOiAnL29yYW5nZS1kZXNjcmljYW8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdPcmFuZ2VDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ29yYW5nZS1kZXNjcmljYW8nXG4gICAgfSlcbiAgICAgICAuc3RhdGUoJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJyxcbiAgICB7XG4gICAgICB1cmw6ICcvdG93ZXItb2YtZ29kcy1kZXNjcmljYW8nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1Rvd2VyT2ZHb2RzQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd0b3dlci1vZi1nb2RzLWRlc2NyaWNhbydcbiAgICB9KTtcclxuXHJcblxyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuZnVuY3Rpb24gcnVuQmxvY2soJGxvZykge1xuICAnbmdJbmplY3QnO1xuXG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICgkbG9nKSB7XG4gICduZ0luamVjdCc7XG4gICRsb2cuZGVidWcoJ3J1bkJsb2NrIGVuZCcpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IGV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1haW5Db250cm9sbGVyKTtcblxuICAgIHRoaXMuYXdlc29tZVRoaW5ncyA9IFtdO1xuXG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDc3Njg1NzA4NTI4O1xuXG4gICAgdGhpcy5hY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYWluQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdhY3RpdmF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFjdGl2YXRlKCR0aW1lb3V0LCB3ZWJEZXZUZWMpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZ2V0V2ViRGV2VGVjKHdlYkRldlRlYyk7XG4gICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0V2ViRGV2VGVjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0V2ViRGV2VGVjKHdlYkRldlRlYykge1xuICAgICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gd2ViRGV2VGVjLmdldFRlYygpO1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2godGhpcy5hd2Vzb21lVGhpbmdzLCBmdW5jdGlvbiAoYXdlc29tZVRoaW5nKSB7XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoJHRpbWVvdXQsIHdlYkRldlRlYykge1xyXG4gICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0Nzc2ODU3MDg1Mjg7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUoJHRpbWVvdXQsIHdlYkRldlRlYyk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgkdGltZW91dCwgd2ViRGV2VGVjKSB7XHJcbiAgICB0aGlzLmdldFdlYkRldlRlYyh3ZWJEZXZUZWMpO1xyXG4gICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnO1xyXG4gICAgfSwgNDAwMCk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWJEZXZUZWMod2ViRGV2VGVjKSB7XHJcbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKCk7XHJcblxyXG4gICAgYW5ndWxhci5mb3JFYWNoKHRoaXMuYXdlc29tZVRoaW5ncywgKGF3ZXNvbWVUaGluZykgPT4ge1xyXG4gICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxuXG5cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSA9IGV4cG9ydHMuR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHaXRodWJDb250cmlidXRvclNlcnZpY2UoJGxvZywgJGh0dHApIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSk7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHaXRodWJDb250cmlidXRvclNlcnZpY2UsIFt7XG4gICAga2V5OiAnZ2V0Q29udHJpYnV0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udHJpYnV0b3JzKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAzMDtcblxuICAgICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KHRoaXMuYXBpSG9zdCArICcvY29udHJpYnV0b3JzP3Blcl9wYWdlPScgKyBsaW1pdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuJGxvZy5lcnJvcignWEhSIEZhaWxlZCBmb3IgZ2V0Q29udHJpYnV0b3JzLlxcbicgKyBhbmd1bGFyLnRvSnNvbihlcnJvci5kYXRhLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gR2l0aHViQ29udHJpYnV0b3JTZXJ2aWNlO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiZXhwb3J0IGNsYXNzIEdpdGh1YkNvbnRyaWJ1dG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yICgkbG9nLCAkaHR0cCkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICB0aGlzLiRsb2cgPSAkbG9nO1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgICB0aGlzLmFwaUhvc3QgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyJztcbiAgfVxuXG4gIGdldENvbnRyaWJ1dG9ycyhsaW1pdD0zMCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCh0aGlzLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLiRsb2cuZXJyb3IoJ1hIUiBGYWlsZWQgZm9yIGdldENvbnRyaWJ1dG9ycy5cXG4nICsgYW5ndWxhci50b0pzb24oZXJyb3IuZGF0YSwgdHJ1ZSkpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBXZWJEZXZUZWNTZXJ2aWNlID0gZXhwb3J0cy5XZWJEZXZUZWNTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdlYkRldlRlY1NlcnZpY2UoKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYkRldlRlY1NlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IFt7XG4gICAgICAgICAgICAndGl0bGUnOiAnVG93ZXIgb2YgR29kcycsXG4gICAgICAgICAgICAndXJsJzogJ0xlciBNYW5nYScsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTWFuaHdhJyxcbiAgICAgICAgICAgICdsb2dvJzogJ1Rvd2VyLndlYnAnLFxuICAgICAgICAgICAgJ2xpbmsnOiAndG93ZXItb2YtZ29kcy1kZXNjcmljYW8nLFxuICAgICAgICAgICAgJ2xvZ28tZGVzY3JpY2FvJzogJ1Rvd2VyLndlYnAnXG5cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ05vYmxlc2UnLFxuICAgICAgICAgICAgJ3VybCc6ICdMZXIgTWFuZ2EnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ01hbmh3YScsXG4gICAgICAgICAgICAnbG9nbyc6ICdOb2JsZXNlLndlYnAnLFxuICAgICAgICAgICAgJ2xpbmsnOiAnbm9ibGVzZS1kZXNjcmljYW8nLFxuICAgICAgICAgICAgJ2xvZ28tZGVzY3JpY2FvJzogJ05vYmxlc2Uud2VicCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgJ3RpdGxlJzogJ09yYW5nZScsXG4gICAgICAgICAgICAndXJsJzogJ0xlciBNYW5nYScsXG4gICAgICAgICAgICAnZGVzY3JpcHRpb24nOiAnTWFuaHdhJyxcbiAgICAgICAgICAgICdsb2dvJzogJ29yYW5nZS53ZWJwJyxcbiAgICAgICAgICAgICdsaW5rJzogJ29yYW5nZS1kZXNjcmljYW8nLFxuICAgICAgICAgICAgJ2xvZ28tb3JhbmdlJzogJ29yYW5nZS53ZWJwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAndGl0bGUnOiAndW5Ub3VjaGFibGUnLFxuICAgICAgICAgICAgJ3VybCc6ICdMZXIgTWFuZ2EnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ01hbmh3YScsXG4gICAgICAgICAgICAnbG9nbyc6ICd1bnRvdWNoYWJsZS53ZWJwJyxcbiAgICAgICAgICAgICdsaW5rJzogJ3VudG91Y2hhYmxlLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAnbG9nby11bnRvdWNoYWJsZSc6ICd1bnRvdWNoYWJsZS53ZWJwJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAndGl0bGUnOiAnRHIuRnJvc3QnLFxuICAgICAgICAgICAgJ3VybCc6ICdMZXIgTWFuZ2EnLFxuICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ01hbmh3YScsXG4gICAgICAgICAgICAnbG9nbyc6ICdmcm9zdC53ZWJwJyxcbiAgICAgICAgICAgICdsaW5rJzogJ2Rlc2NyaWNhby1mcm9zdCcsXG4gICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnZnJvc3Qud2VicCdcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFdlYkRldlRlY1NlcnZpY2UsIFt7XG4gICAgICAgIGtleTogJ2dldFRlYycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUZWMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFdlYkRldlRlY1NlcnZpY2U7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsImV4cG9ydCBjbGFzcyBXZWJEZXZUZWNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1Rvd2VyIG9mIEdvZHMnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdMZXIgTWFuZ2EnLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ01hbmh3YScsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICdUb3dlci53ZWJwJyxcclxuICAgICAgICAgICAgICAgICdsaW5rJzogJ3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvJyxcbiAgICAgICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnVG93ZXIud2VicCdcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOb2JsZXNlJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnTGVyIE1hbmdhJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdNYW5od2EnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnTm9ibGVzZS53ZWJwJyxcclxuICAgICAgICAgICAgICAgICdsaW5rJzogJ25vYmxlc2UtZGVzY3JpY2FvJyxcbiAgICAgICAgICAgICAgICAnbG9nby1kZXNjcmljYW8nOiAnTm9ibGVzZS53ZWJwJ1xyXG4gICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAnT3JhbmdlJyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnTGVyIE1hbmdhJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdNYW5od2EnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnb3JhbmdlLndlYnAnLFxyXG4gICAgICAgICAgICAgICAgJ2xpbmsnOiAnb3JhbmdlLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAgICAgJ2xvZ28tb3JhbmdlJzogJ29yYW5nZS53ZWJwJ1xyXG4gICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGl0bGUnOiAndW5Ub3VjaGFibGUnLFxyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdMZXIgTWFuZ2EnLFxyXG4gICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ01hbmh3YScsXHJcbiAgICAgICAgICAgICAgICAnbG9nbyc6ICd1bnRvdWNoYWJsZS53ZWJwJyxcclxuICAgICAgICAgICAgICAgICdsaW5rJzogJ3VudG91Y2hhYmxlLWRlc2NyaWNhbycsXG4gICAgICAgICAgICAgICAgJ2xvZ28tdW50b3VjaGFibGUnOiAndW50b3VjaGFibGUud2VicCdcclxuICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RyLkZyb3N0JyxcclxuICAgICAgICAgICAgICAgICd1cmwnOiAnTGVyIE1hbmdhJyxcclxuICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbic6ICdNYW5od2EnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28nOiAnZnJvc3Qud2VicCcsXHJcbiAgICAgICAgICAgICAgICAnbGluayc6ICdkZXNjcmljYW8tZnJvc3QnLFxyXG4gICAgICAgICAgICAgICAgJ2xvZ28tZGVzY3JpY2FvJzogJ2Zyb3N0LndlYnAnXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGVjKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTmF2YmFyRGlyZWN0aXZlID0gTmF2YmFyRGlyZWN0aXZlO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJyxcbiAgICBzY29wZToge1xuICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXIsXG4gICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxuICByZXR1cm4gZGlyZWN0aXZlO1xufVxuXG52YXIgTmF2YmFyQ29udHJvbGxlciA9IGZ1bmN0aW9uIE5hdmJhckNvbnRyb2xsZXIobW9tZW50KSB7XG4gICduZ0luamVjdCc7XG5cbiAgLy8gXCJ0aGlzLmNyZWF0aW9uRGF0ZVwiIGlzIGF2YWlsYWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5hdmJhckNvbnRyb2xsZXIpO1xuXG4gIHRoaXMucmVsYXRpdmVEYXRlID0gbW9tZW50KHRoaXMuY3JlYXRpb25EYXRlKS5mcm9tTm93KCk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsImV4cG9ydCBmdW5jdGlvbiBOYXZiYXJEaXJlY3RpdmUoKSB7XHJcbiAgJ25nSW5qZWN0JztcclxuXHJcbiAgbGV0IGRpcmVjdGl2ZSA9IHtcclxuICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCcsXHJcbiAgICBzY29wZToge1xyXG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXHJcbiAgICB9LFxyXG4gICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcclxuICB9O1xyXG5cclxuICByZXR1cm4gZGlyZWN0aXZlO1xyXG59XHJcblxyXG5jbGFzcyBOYXZiYXJDb250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAobW9tZW50KSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIC8vIFwidGhpcy5jcmVhdGlvbkRhdGVcIiBpcyBhdmFpbGFibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxyXG4gICAgdGhpcy5yZWxhdGl2ZURhdGUgPSBtb21lbnQodGhpcy5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuZGlyZWN0aXZlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLk1hbGFya2V5RGlyZWN0aXZlID0gTWFsYXJrZXlEaXJlY3RpdmU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XG4gICduZ0luamVjdCc7XG5cbiAgdmFyIGRpcmVjdGl2ZSA9IHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB7XG4gICAgICBleHRyYVZhbHVlczogJz0nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgbGluazogbGlua0Z1bmMsXG4gICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICB9O1xuXG4gIHJldHVybiBkaXJlY3RpdmU7XG5cbiAgZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCB2bSkge1xuICAgIHZhciB3YXRjaGVyID0gdm9pZCAwO1xuICAgIHZhciB0eXBpc3QgPSBtYWxhcmtleShlbFswXSwge1xuICAgICAgdHlwZVNwZWVkOiA0MCxcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcbiAgICAgIHBhdXNlRGVsYXk6IDgwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBwb3N0Zml4OiAnICdcbiAgICB9KTtcblxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goc2NvcGUuZXh0cmFWYWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhbmd1bGFyLmZvckVhY2godm0uY29udHJpYnV0b3JzLCBmdW5jdGlvbiAoY29udHJpYnV0b3IpIHtcbiAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXRjaGVyKCk7XG4gICAgfSk7XG4gIH1cbn1cblxudmFyIE1hbGFya2V5Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTWFsYXJrZXlDb250cm9sbGVyKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWxhcmtleUNvbnRyb2xsZXIpO1xuXG4gICAgdGhpcy4kbG9nID0gJGxvZztcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xuXG4gICAgdGhpcy5hY3RpdmF0ZShnaXRodWJDb250cmlidXRvcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFsYXJrZXlDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ2FjdGl2YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLiRsb2cuaW5mbygnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3Jyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb250cmlidXRvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb250cmlidXRvcnMoZ2l0aHViQ29udHJpYnV0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIF90aGlzMi5jb250cmlidXRvcnMgPSBkYXRhO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIuY29udHJpYnV0b3JzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hbGFya2V5Q29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIE1hbGFya2V5RGlyZWN0aXZlKG1hbGFya2V5KSB7XHJcbiAgJ25nSW5qZWN0JztcclxuXHJcbiAgbGV0IGRpcmVjdGl2ZSA9IHtcclxuICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICBzY29wZToge1xyXG4gICAgICAgIGV4dHJhVmFsdWVzOiAnPSdcclxuICAgIH0sXHJcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXHJcbiAgICBsaW5rOiBsaW5rRnVuYyxcclxuICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlcixcclxuICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBkaXJlY3RpdmU7XHJcblxyXG4gIGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgdm0pIHtcclxuICAgIGxldCB3YXRjaGVyO1xyXG4gICAgbGV0IHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLCB7XHJcbiAgICAgIHR5cGVTcGVlZDogNDAsXHJcbiAgICAgIGRlbGV0ZVNwZWVkOiA0MCxcclxuICAgICAgcGF1c2VEZWxheTogODAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBwb3N0Zml4OiAnICdcclxuICAgIH0pO1xyXG5cclxuICAgIGVsLmFkZENsYXNzKCdhY21lLW1hbGFya2V5Jyk7XHJcblxyXG4gICAgYW5ndWxhci5mb3JFYWNoKHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpID0+IHtcclxuICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAoKSA9PiB7XHJcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCh2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgPT4ge1xyXG4gICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XHJcbiAgICAgIHdhdGNoZXIoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIE1hbGFya2V5Q29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IgKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgIHRoaXMuJGxvZyA9ICRsb2c7XHJcbiAgICB0aGlzLmNvbnRyaWJ1dG9ycyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoZ2l0aHViQ29udHJpYnV0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLmdldENvbnRyaWJ1dG9ycyhnaXRodWJDb250cmlidXRvcikudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuJGxvZy5pbmZvKCdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udHJpYnV0b3JzKGdpdGh1YkNvbnRyaWJ1dG9yKSB7XHJcbiAgICByZXR1cm4gZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJpYnV0b3JzID0gZGF0YTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyaWJ1dG9ycztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBdXRoQ29udHJvbGxlciA9IGV4cG9ydHMuQXV0aENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXV0aENvbnRyb2xsZXIoJGF1dGgpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXV0aENvbnRyb2xsZXIpO1xuXG4gICAgICAgIHRoaXMuJGF1dGggPSAkYXV0aDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXV0aENvbnRyb2xsZXIsIFt7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgdGhpcy4kYXV0aC5zaWdudXAoeyBlbWFpbDogJ3Rlc3RAdGVzdC5jb20nIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF1dGhDb250cm9sbGVyO1xufSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXV0aC9hdXRoLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXJcbiAgICB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigkYXV0aCl7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgdGhpcy4kYXV0aCA9ICRhdXRoO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICB0aGlzLiRhdXRoLnNpZ251cCh7ZW1haWw6ICd0ZXN0QHRlc3QuY29tJ30pO1xuICAgIH1cbiAgICB9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGcm9zdENvbnRyb2xsZXIgPSBleHBvcnRzLkZyb3N0Q29udHJvbGxlciA9IGZ1bmN0aW9uIEZyb3N0Q29udHJvbGxlcigpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZyb3N0Q29udHJvbGxlcik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL2Zyb3N0LWRlc2NyaWNhby9kZXNjcmljYW8tZnJvc3QuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBGcm9zdENvbnRyb2xsZXIge1xuXG5cblxuXG5cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby9mcm9zdC1kZXNjcmljYW8vZGVzY3JpY2FvLWZyb3N0LmNvbnRyb2xsZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgT3JhbmdlQ29udHJvbGxlciA9IGV4cG9ydHMuT3JhbmdlQ29udHJvbGxlciA9IGZ1bmN0aW9uIE9yYW5nZUNvbnRyb2xsZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9yYW5nZUNvbnRyb2xsZXIpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21hbmdhLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvL29yYW5nZS1kZXNjcmljYW8uY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBPcmFuZ2VDb250cm9sbGVyXG4gICAge1xuXG4gICAgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vb3JhbmdlLWRlc2NyaWNhby9vcmFuZ2UtZGVzY3JpY2FvLmNvbnRyb2xsZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgVG93ZXJPZkdvZHNDb250cm9sbGVyID0gZXhwb3J0cy5Ub3dlck9mR29kc0NvbnRyb2xsZXIgPSBmdW5jdGlvbiBUb3dlck9mR29kc0NvbnRyb2xsZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvd2VyT2ZHb2RzQ29udHJvbGxlcik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbWFuZ2EtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvL3Rvd2VyLW9mLWdvZHMtZGVzY3JpY2FvLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgVG93ZXJPZkdvZHNDb250cm9sbGVyXG4gICAge1xuXG4gICAgfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9tYW5nYS1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8vdG93ZXItb2YtZ29kcy1kZXNjcmljYW8uY29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5Db21wYXJlVG9EaXJlY3RpdmUgPSBDb21wYXJlVG9EaXJlY3RpdmU7XG5mdW5jdGlvbiBDb21wYXJlVG9EaXJlY3RpdmUoJHBhcnNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcbiAgICAgICAgbGluazogZnVuY3Rpb24gbGluayhzY29wZSwgZWxtLCBhdHRycywgbmdNb2RlbCkge1xuICAgICAgICAgICAgdmFyIG1haW5Nb2RlbCA9ICRwYXJzZShhdHRycy5jb21wYXJlVG8pO1xuICAgICAgICAgICAgdmFyIHNlY29uZE1vZGVsID0gJHBhcnNlKGF0dHJzLm5nTW9kZWwpO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMubmdNb2RlbCwgZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmdNb2RlbC4kc2V0VmFsaWRpdHkoYXR0cnMubmFtZSwgbmV3VmFsdWUgPT09IG1haW5Nb2RlbChzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRycy5jb21wYXJlVG8sIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBzZWNvbmRNb2RlbChzY29wZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZGlyZWN0aXZlcy9jb21wYXJlVG8uZGlyZWN0aXZlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIENvbXBhcmVUb0RpcmVjdGl2ZSgkcGFyc2UpIHtcbiAgICAnbmdJbmplY3QnXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsbSwgYXR0cnMsIG5nTW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBtYWluTW9kZWwgPSAkcGFyc2UoYXR0cnMuY29tcGFyZVRvKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRNb2RlbCA9ICRwYXJzZShhdHRycy5uZ01vZGVsKTtcblxuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLm5nTW9kZWwsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHJzLm5hbWUsIG5ld1ZhbHVlID09PSBtYWluTW9kZWwoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnMuY29tcGFyZVRvLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRycy5uYW1lLCBuZXdWYWx1ZSA9PT0gc2Vjb25kTW9kZWwoc2NvcGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kaXJlY3RpdmVzL2NvbXBhcmVUby5kaXJlY3RpdmUuanMiXSwic291cmNlUm9vdCI6IiJ9
