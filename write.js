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

module.exports = function   ( username,time,points) {
    var database = firebase.database();  
    
    userId = getRandomInt(1000000000);
    

    firebase.database().ref('users/'+userId).set({
      nome: username,
      lastTime: time,
      points: points
    }).then(function(value) {
      database.goOffline();
    });

    
}





