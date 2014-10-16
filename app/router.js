import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberfiretemplateENV.locationType
});

Router.map(function() {
  this.resource('projects');
  this.resource('project',function(){
    this.route('new');
    this.route('show', {path:'show/:project_id'});
  });
  this.resource('user',function(){
    this.route('show', {path:'show/:user_id'});
  });
  this.route('login');
  this.route('register');
});

export default Router;
