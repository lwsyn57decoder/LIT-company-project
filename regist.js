 function validate() {
	var a = window.document.forms['myRegisterForm']['flname'].value;
	var b = window.document.forms['myRegisterForm']['email'].value;
	var c = window.document.forms['myRegisterForm']['password'].value;
	var d = window.document.forms['myRegisterForm']['confirm_password'].value;

	if(a=="" || a==null){
		alert("Please enter first and last names");
	}
	else if (b=="" || b==null){
		alert("PLease enter email");
	}

	else if (c=="" || c==null){
		alert("Please enter a strong password");
	}

	else if (c!=d){
		alert("Password mismatched! Re-Enter Password")
	}

	else {
		alert("You are Welcome" + " " + a);
	}
	const sign_up_button = document.getElementById('sign_up_button');

	sign_up_button.addEventLister('click', function('index.html')

}