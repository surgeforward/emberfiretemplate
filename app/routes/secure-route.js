import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(){
    var self = this;
    var auth = this.firebase.getAuth();
    var currentUser = self.controllerFor('application').get('currentUser');
    if (currentUser) {return;};
    if(auth && auth.uid){
      var promise = this.store.find('user',auth.uid);
      promise.then(function(user){
        console.log('found user - SecureRoute');
        user.set('auth', auth);
        var appCont = self.controllerFor('application');
        appCont.set('currentUser', user);
        appCont.get('currentUser').get('projects').then(function(projects){
          console.log('retrieved remote projects');
          appCont.set('projects', projects);
        }).catch(function(error){
          console.log('error: ' + error);
        });
      });
      return promise;
    }
    this.transitionTo('login');
  }
});
