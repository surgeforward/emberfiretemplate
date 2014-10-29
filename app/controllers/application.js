import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn:false,
  init:function(){
    console.log('ApplicationController.init');
    var self = this;

    this.firebase.onAuth(function(authData) {
      if (authData) {
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        self.set('isLoggedIn',true);
      } else {
        self.set('isLoggedIn',false);
        self.set('currentUser',null);
        console.log('user is logged out');
      }
    });
  },
});
