import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

  actions:{
    deleteProject: function(project){
      var self = this;
      project.destroyRecord().then(function(){
        console.log('record deleted');
        self.get('currentUser').get('projects').then(function(projects){
          projects.removeObject(project);
          self.get('currentUser').save(); //delete relationship
        });

      }).catch(function(error){
        console.log('Error deleting: ' + error);
        project.rollback();
      });
    }
  }
});
