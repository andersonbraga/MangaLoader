export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home',
    {
      url: '/main',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
      .state('auth',
    {
      url: '/auth',
      templateUrl: 'app/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
         .state('descricao-frost',
    {
      url: '/descricao-frost',
      templateUrl: 'app/manga-descricao/frost-descricao/descricao-frost.html',
      controller: 'FrostController',
      controllerAs: 'descricao-frost'
    })
       .state('orange-descricao',
    {
      url: '/orange-descricao',
      templateUrl: 'app/manga-descricao/orange-descricao/orange-descricao.html',
      controller: 'OrangeController',
      controllerAs: 'orange-descricao'
    })
       .state('tower-of-gods-descricao',
    {
      url: '/tower-of-gods-descricao',
      templateUrl: 'app/manga-descricao/tower-of-gods-descricao/tower-of-gods-descricao.html',
      controller: 'TowerOfGodsController',
      controllerAs: 'tower-of-gods-descricao'
    });


  $urlRouterProvider.otherwise('/');
}
