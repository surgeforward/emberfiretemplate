import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  // isLoggedIn: Ember.computed.alias('controllers.login.isLoggedIn'),

  actions:{
    login:function(){
      var self = this;
      self.set('errors', null);
      this.firebase.authWithPassword(this.get('model'), function(error, authData) {
        if (error === null) {
          self.store.find('user',authData.uid).then(function(user){
            self.set('currentUser',user);
            self.transitionToRoute('application');
          });
        } else {
          console.log("Error authenticating user:", error);
          self.set('errors', error);
        }
      });
    }
  }
});
