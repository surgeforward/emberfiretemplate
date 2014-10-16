import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.controllerFor('application').get('currentUser').get('projects').then(function(projects){
      return projects;
    });
  }
});
