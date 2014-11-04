import DS from 'ember-data';

export default DS.Model.extend({
  todo: DS.attr('string'),
  done: DS.attr('boolean'),
  project: DS.belongsTo('project',{async:true}),

});
