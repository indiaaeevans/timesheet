// Initialize Firebase
var config = {
apiKey: "AIzaSyDurSv4T3acTPcWpKZMz7TM8oIe0VzcM08",
authDomain: "employee-tracker-ddab7.firebaseapp.com",
databaseURL: "https://employee-tracker-ddab7.firebaseio.com",
storageBucket: "employee-tracker-ddab7.appspot.com",
messagingSenderId: "1047772905540"
};

firebase.initializeApp(config);

// Database
var database = firebase.database();

// FIREBASE WATCHER + INITIAL LOADER - behaves similarly to .on("value")
database.ref().on("child_added", function(childSnapshot){

	var months = 4;
	var billed = parseInt(childSnapshot.val().rate) * months;

	// log what is coming out of snapshot
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().start);
	console.log(childSnapshot.val().rate);

	// append to the table

	var row = $("<tr>");
    row.html("<td>" + childSnapshot.val().name + "</td>" + "<td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().start + "<td>" + months + "</td>" + "</td><td>" + childSnapshot.val().rate + "</td>"
    	+ "<td>" + billed + "</td>");
    $("#table").append(row);

}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Submit onClick
$("#submit-employee").on("click", function(){

	var empName = $("#name").val().trim();
	var empRole = $("#role").val().trim();
	var empStart = $("#date").val().trim();
	var empRate = $("#rate").val().trim();
	var months = 4;
	var billed = parseInt(empRate) * months;

	event.preventDefault();

    database.ref().push({
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    });

    var row = $("<tr>");
    row.html("<td>" + empName + "</td>" + "<td>" + empRole + "</td><td>" + empStart + "</td>" + "<td>" + months + "</td>" + "<td>" + empRate + "</td>" + "<td>" + billed + "</td>");
    $("#table").append(row);

    // var newRow = $("<tr>");
    // $("#table").append(newRow);

    // var newCell = $("<td>");
    // newCell.text(empName);
    // newRow.append(newCell);

});