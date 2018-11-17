var firebase = require("firebase");


// Initialize Firebase
var config = {
    apiKey: "AIzaSyACjIddUpfYchJn934vlhXH9p5DF5AjVl0",
    authDomain: "goats-d209f.firebaseapp.com",
    databaseURL: "https://goats-d209f.firebaseio.com",
    projectId: "goats-d209f",
    storageBucket: "goats-d209f.appspot.com",
    messagingSenderId: "897936732069"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(config);

}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = function updateUserData(uid, username,time, points) {
  var database = firebase.database();
  console.log("ciao");
  firebase.database().ref('users/' + uid).set({
      username: username,
      lastTime: time,
      points: points
    }, function(error) {
      if (error) {
        // The write failed...
      } else {
        // Data saved successfully!
      }
    }).then(function(value) {
      database.goOffline();
  });
}




