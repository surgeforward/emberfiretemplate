import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    // tooltip demo
    Ember.$('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    });

    // popover demo
    Ember.$("[data-toggle=popover]")
        .popover();
  }
});
