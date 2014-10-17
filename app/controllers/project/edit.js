import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions:{
    cancel:function(){
      this.get('model').rollback();
      this.transitionTo('project.show', this.get('model'));
    },
    save :function(){
      var self = this;
      this.get('model').save().then(function(){
        self.transitionTo('project.show', self.get('model'));
      })
    }
  }
});
