import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  actions:{
    create:function(){
      var self = this;
      var newProject = this.get('model');
      this.get('currentUser').get('projects').then (function(projects){
        // debugger;
        // newProject.set('user', this.get('currentUser'));
        newProject.save().then(function(){
          console.log('Save success');
          projects.addObject(newProject);
          self.get('currentUser').save();
          self.transitionToRoute('projects');
        });
      });
      newProject.set('user', this.get('currentUser'));
      // return false;
    }
  }
});
