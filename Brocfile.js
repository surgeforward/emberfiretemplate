/* global require, module */
var pickFiles = require('broccoli-static-compiler');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//sb-admin-2 stuff - begin
//***** import css files

app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/font-awesome/css/font-awesome.css');
app.import('bower_components/sb-admin-v2/css/plugins/social-buttons/social-buttons.css');
app.import('bower_components/sb-admin-v2/css/plugins/timeline/timeline.css');

//comment if you don't need morris charts
app.import('bower_components/morrisjs/morris.css');

//comment this if you don't need dataTables
app.import('bower_components/sb-admin-v2/css/plugins/dataTables/dataTables.bootstrap.css');

app.import('bower_components/sb-admin-v2/css/sb-admin.css');

//***** import javascript files
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/metisMenu/dist/jquery.metisMenu.js');

//comment this if you don't need dataTables
app.import('bower_components/DataTables/media/js/jquery.dataTables.js');
app.import('bower_components/sb-admin-v2/js/plugins/dataTables/dataTables.bootstrap.js');

//comment if you don't need flot charts
app.import('bower_components/flot/jquery.flot.js');
app.import('bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js');
app.import('bower_components/flot/jquery.flot.resize.js');
app.import('bower_components/flot/jquery.flot.pie.js');
app.import('bower_components/flot/jquery.flot.time.js');

//comment if you don't need morris charts
app.import('vendor/raphael.js');
app.import('bower_components/morrisjs/morris.js');

app.import('bower_components/sb-admin-v2/js/sb-admin.js');

//***** import fonts into /fonts
var fontAwesomeTree = pickFiles('bower_components/font-awesome/fonts', {
        srcDir: '/',
        files: ['**/*.*'],
        destDir: '/fonts'
      });
//sb-admin-2 stuff - end


app.import('bower_components/moment/moment.js');

module.exports = app.toTree(fontAwesomeTree);



