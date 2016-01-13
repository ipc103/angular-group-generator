groupApp.controller('GroupsController', ['Group', function(Group){
  this.groups = Group.query();


}])
