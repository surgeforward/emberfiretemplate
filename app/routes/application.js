import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel:function(){
    var self = this;
    var auth = this.firebase.getAuth();
    if(auth){
      var user_id = auth.uid;
      if(user_id){
        var promise = this.store.find('user',user_id);
        promise.then(function(user){
          console.log('found user');
          self.controllerFor('application').set('currentUser',user);
        });
        return promise;
      }
    }else{
      this.transitionTo('login');
    }
  }
});
