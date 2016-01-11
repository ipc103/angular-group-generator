groupApp.factory('Cohort', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/cohorts/:id');
}])
