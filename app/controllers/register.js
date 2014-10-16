import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions:{
    register:function(){
      var self = this;
      self.set('errors', null);
      this.firebase.createUser(this.get('model'), function(error) {
        if (error === null) {
          console.log("User created successfully");
          self.growl.info('User created successfully');
          self.transitionToRoute('login');
        } else {
          console.log("Error creating user:", error);
          self.set('errors', error);
        }
      });
    }
  }
});
