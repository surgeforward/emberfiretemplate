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
          console.log('found user');
          user.set('auth', auth);
          self.controllerFor('application').set('currentUser',user);
        });
        return promise;
    }
  },

  actions:{
    logout:function(){
      this.firebase.unauth();
      this.transitionTo('index');
    }

  }
});
