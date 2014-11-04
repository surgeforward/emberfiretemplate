import Ember from 'ember';

export default Ember.Controller.extend({
    onTaskChange:function(){
        Ember.run.debounce(this, this.save, 1000);
    }.observes('model.done', 'model.todo'),

    save: function(){
      this.get('model').save();
  }
  actions:{
    deleteTodo: function(task){
        var project = this.get('model.project');
        task.destroyRecord().then(function(){
            console.log('task deleted');
            project.get('tasks').removeObject(task);
            project.save();

        }).catch(function(error){
            console.log('Error deleting: ' + error);
            task.rollback();
        });
    }
}
});
