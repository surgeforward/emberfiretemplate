import DS from 'ember-data';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase(window.EmberfiretemplateENV.APP.firebaseUrl)
});
