import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    logout:function(){
        console.log('111111111111 - top bar');
      this.sendAction('logout');
    }
  }
});
