import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions:{
    cancel:function(){
      this.get('model').rollback();
      this.transitionToRoute('project.show', this.get('model'));
    },
    save :function(){
      var self = this;
      this.get('model').save().then(function(){
        self.transitionToRoute('project.show', self.get('model'));
      });
    }
  }
});
