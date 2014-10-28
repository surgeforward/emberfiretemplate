import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement:function(){
    Ember.$('#dataTables-example').dataTable();
  }
});
