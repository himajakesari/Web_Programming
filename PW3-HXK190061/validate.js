window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
	var pwd = document.getElementById("pwd");
	var confirmpass = document.getElementById("confirm");
	span1.setAttribute('id',"span1");
	span1.style.display = "none"; //hide the span element
    email.parentNode.appendChild(span1);
    var span2 = document.createElement("span");
   span2.setAttribute('id',"span2");
	span2.style.display = "none"; //hide the span element
    pwd.parentNode.appendChild(span2);

 var span3 = document.createElement("span");
   span3.setAttribute('id',"span3");
	span3.style.display = "none"; //hide the span element
    confirmpass.parentNode.appendChild(span3);

    email.onfocus = function(){
		
		
		if(email.classList.contains('error'))
		{
			email.classList.remove('error');
			
		}
		console.log("inside email onfocus");
    	span1.style.display= "block";
		document.getElementById("span1").textContent="A valid email consists of an email prefix and an email domain with two parts. <prefix>@<domain_part1>.<domain_part2>";
		
    }

    email.onblur = function(){
		console.log("inside email onblur");
     span1.style.display= "none";

    }

    
	
	
	 pwd.onfocus = function(){
		 
		 
		 if(pwd.classList.contains('error'))
		{
			pwd.classList.remove('error');
			if(confirmpass.classList.contains('error'))
			{
				confirmpass.classList.remove('error');
			}
		}
		console.log("inside pwd onfocus");
    	span2.style.display= "block";
		document.getElementById("span2").textContent="The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
		
    }

   pwd.onblur = function(){
		console.log("inside pwd onblur");
     span2.style.display= "none";
    }

 confirmpass.onfocus = function(){
	

if(confirmpass.classList.contains('error'))
			{
				confirmpass.classList.remove('error');
				 
		 if(pwd.classList.contains('error'))
		{
			pwd.classList.remove('error');
				
			}
			}
   }
   
   confirmpass.onblur = function(){
		console.log("inside confirmpass onblur");
     span3.style.display= "none";
    }


    
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){
		var retval;
    	
        if(!ValidateEmail(email.value))
		   return false;
		
		if(!ValidatePassword(pwd.value))
			return false;
		if(!confirmPassword(pwd.value, confirmpass.value))
			return false;
		  
         return retval;
		

    }
	
	
function ValidateEmail(inputText)
{
var  regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');
if(!inputText.match(regex))
{


email.classList.add('error');
span1.style.display= "block";
document.getElementById("span1").textContent="Enter a valid email address ";
return false;
}
return true;
}

//The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)

function ValidatePassword(inputText)
{
	var  regex = new RegExp('^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\[!,@,#,$,%,^,&,*,+]).*$');
	
	if(!inputText.match(regex))
{


pwd.classList.add('error');
span2.style.display= "block";
document.getElementById("span2").textContent="The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+)";
return false;
}
return true;	
}

function confirmPassword(pwdv, confirmpassv)
{   
	if(!(pwdv===confirmpassv))
	{
	    pwd.classList.add('error');
		confirmpass.classList.add('error');
		span3.style.display= "block";
		document.getElementById("span3").textContent="password and confirm password fields donot match";
	return false;
	
	}	
	
	return true;
}
	



}


