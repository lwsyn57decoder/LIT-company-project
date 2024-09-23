function talkToChef() {
	var cookBook = prompt("Do you have a cookBook?", "");
	if (cookBook == "yes"){
		alert("This is good news, it means you may likely have the recipe we are looking for.");
	}
	else 
	{
		var chiliRecipe = prompt("So then do you have the Chili Recipe?", "");
		switch(chiliRecipe){
			case "yes":
			alert("This means you can go ahead and cook some peppperoni meal");
			break;
			case "no":
			var internet = prompt("But do you have internet Access?","");
			if (internet =="yes"){
				alert("This means we can locate some beautiful Chili Recipes online");
			}
			else 
			{
				alert("Case closed.We may never cook the chili food");
			}
			break;
			default:
			alert("Please you are out of Range.Kindly Remain focused");
		}

	}
}