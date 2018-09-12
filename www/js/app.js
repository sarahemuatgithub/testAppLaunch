// Ionic Starter App
document.addEventListener('deviceready', function() { 
  angular.bootstrap(document, ['starter']);
}, false);
 
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

.controller('CheckController', function($scope,$ionicPlatform) {

  var appId = "";

    var appId, appStarter = "";
    alert(ionic.Platform);
    $ionicPlatform.ready(function() {
    if (ionic.Platform.isAndroid()) {
        // plugin com.lampa.startapp
        appId = 'com.ionicframework.newemumobile617244';
        appStarter = startApp.set({"application": appId});
        appStarter.start(function(msg) {
            console.log('starting EMU app: ' + msg);
        }, function(err) {
            console.log('EMU app not installed', err);
            window.open('market://details?id=com.ionicframework.newemumobile617244', '_system');
        });
    } else {
        if (ionic.Platform.isIOS() || ionic.Platform.isIPad()) {
           appId = 'twitter://';
            //appId = 'com.ionicframework.newemumobile617244://';
            appStarter = startApp.set(appId);
            appStarter.start(function(msg) {
                console.log('starting EMU app: ' + msg);                
            }, function(err) {
                console.log('EMU app not installed', err);
              // window.open('itms-apps://itunes.apple.com/nl/app/blackboard-mobile-learn/id376413870?mt=8', '_system');
                window.open('itms-apps://itunes.apple.com/us/app/emu-mobile/id1165500219?mt=8', '_system');
              });
        }
    }
  })
  
  /*document.addEventListener("deviceready", onDeviceReady, false);
   
  function onDeviceReady() {
       
      var scheme;

      // Don't forget to add the org.apache.cordova.device plugin!
      if(device.platform === 'iOS') {
          scheme = 'twitter://';
          storeLink=   'itms-apps://itunes.apple.com/us/app/blackboard/id950424861?mt=8';
      }
      else if(device.platform === 'Android') {
          scheme = 'com.twitter.android';
          storeLink=   'market://details?id=com.twitter.android';
      }
       
     appAvailability.check(
          scheme, // URI Scheme
          function() {  // Success callback
            alert('twitter is available');
              window.open(scheme, '_system');
             
          },
          function() {  // Error callback
            alert('twitter is not available');
            window.open(storeLink, '_system');
          
          }
      );      
  } */ 
  
});