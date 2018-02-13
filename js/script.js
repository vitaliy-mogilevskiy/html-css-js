function validateForm(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var bool = false;
	if(user.value.length > 0){
		user.parentElement.classList.remove("error");
		bool = true;
	}
	else{
		user.parentElement.classList.add("error");
		bool = false;
	}
	if(pass.value.length > 0){
		user.parentElement.classList.remove("error");
		bool = true;
	}
	else{
		pass.parentElement.classList.add("error");
		bool = false;
	}
	return bool;
}