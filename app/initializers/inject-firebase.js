
export default {
  name: 'inject-firebase',

  initialize: function(container, app) {
    var fb = new window.Firebase(window.EmberfiretemplateENV.APP.firebaseUrl);

    console.log('injecting auth and firebase');

    fb.onAuth(function(authData) {
      if (authData) {
        console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        fb.child('users').child(authData.uid).once('value', function(snap){
          if (snap.val() == null) {
            console.log('save profile for new user');
            fb.child('users').child(authData.uid).set(authData);
          }
        });
      } else {
        console.log('user is logged out');
      }
    });

    app.register('app:firebase', fb,  {instantiate: false});
    app.inject('route', 'firebase', 'app:firebase');
    app.inject('controller', 'firebase', 'app:firebase');
    app.inject('component', 'firebase', 'app:firebase');
  }
};
