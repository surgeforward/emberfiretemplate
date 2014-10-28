import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['navbar', 'navbar-default', 'navbar-fixed-top'],
  attributeBindings: ['role','style'],
  role:"navigation",
  style:"margin-bottom: 0",
  didInsertElement: function() {
    Ember.$('#side-menu').metisMenu();
  }.on('didInsertElement') ,
  actions:{
    logout:function(){
      this.firebase.unauth();
    }
  }
});
