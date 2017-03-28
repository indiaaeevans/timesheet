// Initialize Firebase
var config = {
apiKey: "AIzaSyDurSv4T3acTPcWpKZMz7TM8oIe0VzcM08",
authDomain: "employee-tracker-ddab7.firebaseapp.com",
databaseURL: "https://employee-tracker-ddab7.firebaseio.com",
storageBucket: "employee-tracker-ddab7.appspot.com",
messagingSenderId: "1047772905540"
};
firebase.initializeApp(config);
// Global Variables
var empName = $("#name").text;
var empRole = $("#role").val();
var empStart = $("#date").val();
var empRate = $("#rate").val();
// Database
var database = firebase.database();
// Database Ref
database.ref().on("value", function(snapshot){});
// Submit onClick
$("#submit-employee").on("click", function(){
      database.ref().push({
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    });
    console.log(empName);   
});