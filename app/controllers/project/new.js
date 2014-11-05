import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  projects: Ember.computed.alias('controllers.application.projects'),
  actions:{
    create:function(){
      var self = this;
      var newProject = this.get('model');
      var projects = this.get('projects');
      var currentUser = this.get('currentUser');

      // var member = this.store.createRecord('member',{
      //   id: currentUser.get('id'),
      //   role: 'XXX'
      // })
      // newProject.get('members').addObject(member);
      newProject.addMember(currentUser, 'owner');

      newProject.save().then(function(){
        console.log('Save success');
        projects.addObject(newProject);
        self.get('currentUser').save();
        self.transitionToRoute('project.show', newProject.id);
      });
      newProject.set('user', this.get('currentUser'));
    }
  }
});
