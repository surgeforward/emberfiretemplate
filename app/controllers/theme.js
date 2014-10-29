import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),
  currentUser: Ember.computed.alias('controllers.application.currentUser')

});
