import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  projects: Ember.computed.alias('controllers.application.projects')

});
