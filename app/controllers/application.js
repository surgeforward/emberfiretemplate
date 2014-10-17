import Ember from 'ember';

export default Ember.Controller.extend({

  init:function(){
    console.log('ApplicationController.init');
    var self = this;

    this.firebase.onAuth(function(authData) {
      if (authData) {
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        self.set('isLoggedIn',true);
        if(authData.password.isTemporaryPassword){
          self.transitionToRoute('changePassword');
        }
      } else {
        self.set('isLoggedIn',false);
        self.set('currentUser',null);
        self.transitionToRoute('login');
        console.log('user is logged out');
      }
    });
  },
});
