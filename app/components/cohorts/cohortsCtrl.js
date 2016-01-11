groupApp.controller('CohortsCtrl', ['Cohort', function(Cohort){
  //index
  this.newCohort = new Cohort({name: ''});
  this.cohorts = Cohort.query();

  //create
  this.create = function(){
    var self = this;
    var cohortCreator = Cohort;
    this.newCohort.$save(function(data){
      self.cohorts.push(data);
      self.newCohort = new cohortCreator();
    });
  }

  // delete
  this.delete = function(index){
    var cohort = this.cohorts[index];
    cohort.$delete({id: cohort.id}); // why do I need to pass the id to $delete when I call it on an instance? 
    this.cohorts.splice(index, 1);
  }

}])
