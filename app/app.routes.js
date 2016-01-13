groupApp.config(function($stateProvider){

  $stateProvider
    .state('home', {
      url: '',
      templateUrl: "/app/components/home/home.html"
    })

    .state('cohorts', {
      url: '/cohorts',
      templateUrl: '/app/components/cohorts/cohorts.html',
      controller: 'CohortsCtrl as cohortsCtrl'
    })

    .state('cohorts.cohort', {
      url: '/:id',
      templateUrl: '/app/components/cohorts/cohort/cohorts.cohort.html',
      controller: 'CohortCtrl as cohortCtrl'
    })

    .state('cohorts.cohort.groups', {
      url: '/groups',
      templateUrl: '/app/components/groups/groups.html',
      controller: 'GroupsController as groupsCtrl'
    })
})
