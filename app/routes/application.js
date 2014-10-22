import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(){
    var self = this;
    var auth = this.firebase.getAuth();
    if(auth && auth.uid){
        var promise = this.store.find('user',auth.uid);
        promise.then(function(user){
          console.log('found user');
          user.set('auth', auth);
          self.controllerFor('application').set('currentUser',user);
        });
        return promise;
    }
    this.transitionTo('login');
  }
});
