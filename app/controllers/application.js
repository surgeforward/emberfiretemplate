import Ember from 'ember';

export default Ember.Controller.extend({
  projects: function(){
      if (this.get('currentUser')) {
          return this.get('currentUser').get('projects');
      }
      return [];
  }.property('currentUser', 'currentUser.projects', 'currentUser.projects.@each'),
  init:function(){
    console.log('ApplicationController.init');
    var self = this;

    this.firebase.onAuth(function(authData) {
      if (authData) {
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
      } else {
        self.set('currentUser',null);
        console.log('user is logged out');
      }
    });
  }
});
