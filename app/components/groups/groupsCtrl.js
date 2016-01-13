groupApp.controller('GroupsController', ['$stateParams', 'Group', function($stateParams, Group){
  this.groups = Group.query({cohort: $stateParams.id});
  this.newGroup = new Group({cohort: $stateParams.id, group_types: "2"});
  this.createGroups = function(){
    var self = this;
    var id = $stateParams.id
    this.newGroup.$save(function(response){
      self.groups = Group.query({cohort: id })
      self.newGroup = new Group({cohort: $stateParams.id, group_types: "2"});;
    })
  }

}])
