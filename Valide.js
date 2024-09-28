var uname = document.getElementById("uname");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var phone = document.getElementById("phone");

console.log("Outside function");


var error = document.getElementById("error");


function Validate(){

	console.log("Inside");
	if (uname.value === "") {
		error.innerText = "Username is Required";
		return false;
	}


	else if (email.value ==="") {
		error.innerText = "Email is Required";
		return false;
	}


	else if (pass1.value ==="") {
		error.innerText = "Password must be 8 characters";
		return false;
	}


	else if (pass2.value ==="") {
		error.innerText = "Confirm the password";
		return false;
}

	else if (phone.value ==="") {
		error.innerText = "Your contact number required";
		return false;
}


	else{
	error.innerText="";
	}

}