# Ember Fire Template

This is a template to get you started with ember and firebase quickly using the very cool theme [SB Admin 2](http://ironsummitmedia.github.io/startbootstrap-sb-admin-2/).

# Features

* User signup (using email/password)
* User login (using email/password)

## Installation

* create a new app at [http://www.firebase.com](http://www.firebase.com)
* change firebaseUrl in config/environment.js to point to your firebase app url
* `git clone` this repository
* `npm install`
* `bower install`

## Tweaking Theme
If you don't want to use SB Admin 2 theme, edit Brocfile.js and remove the lines that you don't need.  You can also remove the dependency from the bower.json file.

## Rules
Here are the rules that you need to set in your firebase application.  To learn more about rules see [https://www.firebase.com/docs/security/](https://www.firebase.com/docs/security/)

```
{
  "rules": {
    "users": {
      "$user":{
        ".read": "$user === auth.uid",
        ".write": "$user === auth.uid"
      }
    },
    "projects": {
      ".read" : "auth.uid !=null",
      "$project":{
        ".read": "data.child('user').val() === auth.uid",
        ".write": "newData.child('user').val() === auth.uid"
      }
    }
  }
}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Deploying

* `npm install -g firebase-tools`
* `ember init`
  * choose app to deploy to
  * type `dist` for your public folder
* `firebase deploy`
* `firebase open` (to see it in the browser)

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
