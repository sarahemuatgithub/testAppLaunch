// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('CheckController', function($scope) {

  var appId = "";

    var appId, appStarter = "";
    alert(ionic.$ionicPlatform);
    if (ionic.Platform.isAndroid()) {
        // plugin com.lampa.startapp
        appId = 'com.blackboard.android';
        appStarter = startApp.set({"package": appId});
        appStarter.start(function(msg) {
            console.log('starting BB app: ' + msg);
        }, function(err) {
            console.log('BB app not installed', err);
            window.open('market://details?id=com.blackboard.android', '_system');
        });
    } else {
        if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
            appId = 'bblearn://';
            appStarter = startApp.set(appId);
            appStarter.start(function(msg) {
                console.log('starting BB app: ' + msg);                
            }, function(err) {
                console.log('BB app not installed', err);
                window.open('itms-apps://itunes.apple.com/nl/app/blackboard-mobile-learn/id376413870?mt=8', '_system');
              });
        }
    }
     
  /*document.addEventListener("deviceready", onDeviceReady, false);
   
  function onDeviceReady() {
       
      var scheme;

      // Don't forget to add the org.apache.cordova.device plugin!
      if(device.platform === 'iOS') {
          scheme = 'twitter://';
      }
      else if(device.platform === 'Android') {
          scheme = 'com.twitter.android';
      }
       
      appAvailability.check(
          scheme, // URI Scheme
          function() {  // Success callback
              window.open('twitter://user?screen_name=gajotres', '_system', 'location=no');
              console.log('Twitter is available');
          },
          function() {  // Error callback
              window.open('https://twitter.com/gajotres', '_system', 'location=no');
              console.log('Twitter is not available');
          }
      );      
  }       */
});