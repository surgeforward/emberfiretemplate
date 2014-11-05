import DS from 'ember-data';

export
default DS.Model.extend({
    todo: DS.attr('string'),
    done: DS.attr('boolean'),
    project: DS.belongsTo('project', {
        async: true
    }),

    onTaskChange: function() {
        if (this.get('isLoaded') && this.get('isDirty')) {
            Ember.run.debounce(this, this.save, 1000);
        }
    }.observes('done', 'todo'),

});
