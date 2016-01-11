groupApp.controller('CohortCtrl', ['$stateParams', 'Cohort', function($stateParams, Cohort){
  this.cohort = Cohort.get({id: $stateParams.id});
}])
