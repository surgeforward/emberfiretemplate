import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberfiretemplateENV.locationType
});

Router.map(function() {
  this.resource('projects');
  this.resource('project',function(){
    this.route('new');
    this.route('show', {path:'show/:project_id'});
    this.route('edit', {path:'edit/:project_id'});
  });
  this.resource('user',function(){
    // this.route('show', {path:'show/:user_id'});
  });
  this.route('login');
  this.route('register');
  this.route('forgot');
  this.route('changePassword');
  this.route('me');

  //theme pages
  this.resource('theme',function(){
    this.route('buttons');
    this.route('wells-panels');
    this.route('notifications');
    this.route('typography');
    this.route('forms');
    this.route('tables');
    this.route('flot');
    this.route('morris');
    this.route('grid');
    this.route('dashboard');
  });

});

export default Router;
