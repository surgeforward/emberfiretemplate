import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  currentUser: Ember.computed.alias('controllers.application.currentUser'),
  projects: function(){
    return this.get('currentUser').get('projects');
  }.property(),
});
