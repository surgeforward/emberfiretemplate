import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),

  actions:{
    update: function(){
      var self = this;
      this.get('currentUser').save().then(function(){
        self.growl.info('Profile updated successfully.');
      }).catch(function(){
        self.growl.error('Error saving profile.  Please, try again.');
      });
    }
  }
});
