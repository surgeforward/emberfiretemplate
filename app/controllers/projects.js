import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions:{
    deleteProject: function(project){
      project.destroyRecord();
    }
  }
});
