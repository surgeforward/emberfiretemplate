import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    Ember.$('#side-menu').metisMenu();
  }.on('didInsertElement') ,

});
