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
  this.route('theme/buttons');

  this.route('theme/wells-panels');
  this.route('theme/notifications');
  this.route('theme/typography');
  this.route('theme/forms');
  this.route('theme/tables');
  this.route('theme/flot');
  this.route('theme/morris');
});

export default Router;
