function validate() {
	var x = window.document.forms['myLoginForm']['email'].value;
	var y = window.document.forms['myLoginForm']['password'].value;

	if(x=="" || x==null){
		alert("KINDLY ENTER EMAIL");
	}

	else if (y=="" || y==null){
		alert("KINDLY ENTER PASSWORD");
	}

	else
		alert("You are Welcome to LIT COMPANY LIMITED" + " " + x);
}