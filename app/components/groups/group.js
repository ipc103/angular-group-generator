groupApp.factory('Group', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/groups/:id',{group_code: new Date()}, {save: {method: 'POST', isArray: false}});
}])
