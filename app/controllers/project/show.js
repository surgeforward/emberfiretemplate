    import Ember from 'ember';

    export default Ember.Controller.extend({
        needs:['application'],
        currentUser: Ember.computed.alias('controllers.application.currentUser'),

        tasks: function(){
            if (this.get('model')) {
                return this.get('model').get('tasks');
            }
            return [];
        }.property('model', 'model.tasks', 'model.tasks.@each'),

        actions:{
            addTodo: function(){
                var self = this;
                var project = this.get('model');
                var user = this.get('currentUser');

                var newTask = this.store.createRecord('task',{
                    todo: this.get('todo'),
                    project: project,
                });

                newTask.save().then(function(){
                    project.get('tasks').addObject(newTask);
                    project.save();
                    self.set('todo','');
                }).catch(function(error){
                    console.log(error);
                    newTask.rollback();
                });
            },


        }
    });
