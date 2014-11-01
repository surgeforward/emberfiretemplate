import SecureRoute from './secure-route';

export default SecureRoute.extend({
  setupController: function(controller, model){
    var self = this;
    this.controllerFor('application').get('currentUser').get('projects').then(function(projects){
        controller.set('projects', projects);
    }).catch(function(error){
      console.log('error: ' + error);
    });
  }
});
