import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user: DS.belongsTo('user',{async:true}),
  tasks: DS.hasMany('tasks', {async:true}),
  timestamp: DS.attr('number')
});
