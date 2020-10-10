
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cnfpassword = document.getElementById('cnfpassword');

form.addEventListener('submit',(event) =>{
	event.preventDefault();
	validate();
})

//check all validations at last to submit

const sendcnts = (usernameVal,sRate, count) => {
	if(sRate === count)
		{alert('registration successful');
	    swal("Welcome! "+ usernameVal , "Registration Successful","success");
	     // location.href = 'storedata.html?username=${usernameVal}';
	 }
}

const finalSuccessMsg = (usernameVal) =>{
    
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length ; i++)
    {
    	if(formCon[i].className === "form-control success")
    		{var sRate = 0 + i;
             sendcnts(usernameVal,sRate,count);}
         else{
         	return false;
         }
    }

}


//useful in validating email

const isvalidEmail = (emailVal) =>{
	var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol +3)return false;
    if(dot === emailVal.length -1)return false;
    return true;
}



//defining validate function

const validate = () =>{
	const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const cnfpasswordVal =cnfpassword.value.trim();

     //validating username
     if(usernameVal === ""){
     	setErrorMsg(username,'username cannot be blank');
     }else if(usernameVal.length <= 2){
         setErrorMsg(username,'username with min 3 characters');
     }else{
     	setSuccessMsg(username);
     }

     //validating email
     if(emailVal === ""){
     	setErrorMsg(email,'email cannot be blank');
     }else if(!isvalidEmail(emailVal)){
         setErrorMsg(email,'Not a valid email');
     }else{
     	setSuccessMsg(email);
     }
     
     //validating phone number
     if(phoneVal === ""){
     	setErrorMsg(phone, 'phone num cannot be blank');
     }else if(phoneVal.length != 10){
        setErrorMsg(phone,'Not a valid phone num');
     }else {
     	setSuccessMsg(phone);
     }

     //validating password
     if(passwordVal === ""){
     	setErrorMsg(password, 'password cannot be blank');
     }else if(passwordVal.length <= 5){
        setErrorMsg(password,'Minimum 6 characters');
     }else {
     	setSuccessMsg(password);
     }

     //validating conform password
     if(cnfpasswordVal === ""){
     	setErrorMsg(cnfpassword, 'password cannot be blank');
     }else if(passwordVal !== cnfpasswordVal){
        setErrorMsg(cnfpassword,'password are not matching');
     }else {
     	setSuccessMsg(cnfpassword);
     }

     //If all correct then submit
     finalSuccessMsg(usernameVal);
     }



     function setErrorMsg(input, errormsg){
     	const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = "form-control error"
        small.innerHTML = errormsg;
     }
    
     function setSuccessMsg(input){
     	const formControl = input.parentElement;
        formControl.className = "form-control success"
        
     }


    
 