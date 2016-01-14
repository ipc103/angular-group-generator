groupApp.controller('GroupsController', ['$stateParams', 'Group', function($stateParams, Group){
  this.groups = Group.query({cohort: $stateParams.id});
  this.newGroup = new Group({cohort: $stateParams.id});

  this.createGroups = function(number1){
    this.newGroup.group_types = number1
    var self = this;
    var id = $stateParams.id;
    this.newGroup.$save(function(response){
      self.groups = Group.query({cohort: id });
      self.newGroup = new Group({cohort: $stateParams.id});
    })
  }


}])
