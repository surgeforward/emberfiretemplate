import Ember from 'ember';

export
default Ember.Controller.extend({

    actions: {
        deleteTodo: function(task, project) {
            var tasks = project.get('tasks');
            tasks.removeObject(task);

            task.destroyRecord().then(function() {
                console.log('task deleted');
                project.save();
            }).catch(function(error) {
                console.log('Error deleting: ' + error);
                task.rollback();
                project.rollback();
            });
        }
    }
});
