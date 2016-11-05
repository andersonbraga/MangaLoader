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
      templateUrl: 'app/components/auth/auth.html',
      controller: 'AuthController',
      controllerAs: 'auth'
    })
         .state('descricao-frost',
    {
      url: '/descricao-frost',
      templateUrl: 'app/components/manga-descricao/frost-descricao/descricao-frost.html',
      controller: 'FrostController',
      controllerAs: 'descricao-frost'
    });


  $urlRouterProvider.otherwise('/');
}
