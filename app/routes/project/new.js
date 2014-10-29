import SecureRoute from '../secure-route';

export default SecureRoute.extend({
  model:function(){
    return this.store.createRecord('project',{
      name:'Project 1'
    });
  }
});
