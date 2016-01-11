groupApp.config(function($stateProvider){
  $stateProvider.state('cohorts', {
    url: '/cohorts',
    templateUrl: '/app/components/cohorts/cohorts.html',
    controller: 'CohortCtrl as cohortCtrl'
  })

  $stateProvider.state('home', {
    url: '',
    templateUrl: "/app/components/home/home.html"
  })
})
