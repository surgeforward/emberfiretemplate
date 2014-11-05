    import Ember from 'ember';

    export
    default Ember.Controller.extend({
        needs: ['application'],
        currentUser: Ember.computed.alias('controllers.application.currentUser'),
        projects: Ember.computed.alias('controllers.application.projects'),

        canAddTasks: function(){
            return this.get('model').getRole(this.get('currentUser')) === 'owner';
        }.property(),

        tasks: function() {
            if (this.get('model')) {
                return this.get('model').get('tasks');
            }
            return [];
        }.property('model', 'model.tasks', 'model.tasks.@each'),

        actions: {
            addTodo: function() {
                console.log(this.get('model'));
                var self = this;
                var project = this.get('model');

                var newTask = this.store.createRecord('task', {
                    todo: this.get('todo'),
                    project: project,
                });

                newTask.save().then(function() {
                    project.get('tasks').addObject(newTask);
                    project.save();
                    self.set('todo', '');
                }).catch(function(error) {
                    console.log(error);
                    newTask.rollback();
                });
            },
            deleteProject: function() {
                var self = this;
                var project = this.get('model');
                var projects = self.get('projects');
                project.destroyRecord().then(function() {
                    console.log('project deleted');
                    projects.removeObject(project);
                    //delete relationship
                    self.get('currentUser').save();
                    self.transitionToRoute('projects');
                }).catch(function(error) {
                    console.log('Error deleting: ' + error);
                    project.rollback();
                });
            },

            shareDummy: function(){
                var self = this;
                var project = this.get('model');
                var members = project.get('members');

                var otherUser =  "????";

                //add user to project.members
                members.addObject(otherUser);
                members.save().then(function(){
                    //add project to user.projects
                    otherUser.get('projects').addObject(project);
                });
            }

        }
    });
