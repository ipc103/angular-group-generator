groupApp.controller('CohortCtrl', ['Cohort', function(Cohort){
  this.title = "All Cohorts";
  this.cohorts = Cohort.query(function(){
    console.log("Getting data...");
  })
}])
