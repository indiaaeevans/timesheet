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

// Database
var database = firebase.database();
// Database Ref
database.ref().on("value", function(snapshot){});

// Submit onClick
$("#submit-employee").on("click", function(){

	var empName = $("#name").val().trim();
	var empRole = $("#role").val().trim();
	var empStart = $("#date").val().trim();
	var empRate = $("#rate").val().trim();

	event.preventDefault();

    database.ref().push({
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    });

    var newRow = $("<tr>");
    newRow.text("test");
    $("#table").append(newRow);

});