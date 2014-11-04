import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  projects: Ember.computed.alias('controllers.application.projects'),

  actions:{
    deleteProject: function(project){
      var self = this;
      project.destroyRecord().then(function(){
        console.log('record deleted');
        var projects = self.get('projects');
          projects.removeObject(project);
          self.get('currentUser').save(); //delete relationship

      }).catch(function(error){
        console.log('Error deleting: ' + error);
        project.rollback();
      });
    }
  }
});
