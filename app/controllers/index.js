import Ember from 'ember';

export default Ember.Controller.extend({
    needs:['application'],
    currentUser: Ember.computed.alias('controllers.application.currentUser'),
    isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

    projects: function(){
        if (this.get('isLoggedIn')) {
            return this.get('currentUser').get('projects');
        };
        return [];
    }.property('currentUser', 'currentUser.projects', 'currentUser.projects.@each'),
});
