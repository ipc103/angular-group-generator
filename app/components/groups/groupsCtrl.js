groupApp.controller('GroupsController', ['$stateParams', 'Group', function($stateParams, Group){
  this.groups = Group.query({cohort: $stateParams.id});

}])
