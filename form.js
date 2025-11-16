// console.log("be confident while coding journey");


const username=document.querySelector("#username")
const userpassword=document.querySelector("#userpassword")
const userConfirmPassword=document.querySelector("#confirmpassword")
const userEmail=document.querySelector("#useremail")
const userPhoneNumber=document.querySelector("#userphonenumber")
const signup_form=document.querySelector("#signup_form")


const usernameError=document.querySelector("#username-error")
const userpasswordError=document.querySelector("#userpassword-error");
const userConfirmPasswordError=document.querySelector("#confirmpassword-error")


const userEmailError=document.querySelector("#useremail-error")
const userPhoneNumberError=document.querySelector("#userphonenumber-error");



const usernameReg=/[a-zA-Z0-9]{5,15}/
const userPasswordReg=/^[a-zA-Z]+\d{2,3}$/
const userEmailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const userPhoneNumberReg=/^[6-9]\d{9}$/


function usernameValidation(){
    const usernameValue=username.value.trim();
    if(usernameValue===""){
        showInavlid(username,usernameError,"username is required");
        return false;
    }
    if(usernameReg.test(usernameValue)){
        showValid(username,usernameError,"valid username");
        return true;
    }
    else{
        showInavlid(username,usernameError,"invalid username");
        return false;
    }
}


function passwordValidation(){
    const userpasswordValue=userpassword.value.trim();
    if(userpasswordValue===""){
        showInavlid(userpassword,userpasswordError,"password is required");
        return false;
    }
    if(userPasswordReg.test(userpasswordValue)){
        showValid(userpassword,userpasswordError,"valid password");
        return true;
    }
    else{
        showInavlid(userpassword,userpasswordError,"invalid password");
        return false;
    }
}

function userConfirmPassword(){
    const userpassconfirmvalue=userConfirmPassword.value.trim()
    if(userpassword.value.trim() === userpassconfirmvalue){
        showValid(userConfirmPassword,userConfirmPasswordError,"valid password")
    }
    else{
        showInavlid(userConfirmPassword,userConfirmPasswordError,"invalid pass")
    }
}

function userEmailValidation(){
    const userEmailValue=userEmail.value.trim();
    if(userEmailValue===""){
        showInavlid(userEmail,userEmailError,"email is required");
        return false;
    }   
    if(userEmailReg.test(userEmailValue)){
        showValid(userEmail,userEmailError,"valid email");
        return true;
    }   
    else{
        showInavlid(userEmail,userEmailError,"invalid email");
        return false;
    }
}


function userPhoneNumberValidation(){
    const userPhoneNumberValue=userPhoneNumber.value.trim();
    if(userPhoneNumberValue===""){
        showInavlid(userPhoneNumber,userPhoneNumberError,"phone number is required");
        return false;
    }
    if(userPhoneNumberReg.test(userPhoneNumberValue)){
        showValid(userPhoneNumber,userPhoneNumberError,"valid phone number");
        return true;
    }   
    else{
        showInavlid(userPhoneNumber,userPhoneNumberError,"invalid phone number");
        return false;
    }
}

function showValid(inputfield,errorfield,message){
    inputfield.classList.add("valid-input");
    inputfield.classList.remove("invalid-input");
    errorfield.innerText=message;
}

function  showInavlid(inputfield,errorfield,message){
    inputfield.classList.add("invalid-input");
    inputfield.classList.remove("valid-input");
    errorfield.innerText=message;
}


username.addEventListener("input",usernameValidation);
userpassword.addEventListener("input",passwordValidation);
userEmail.addEventListener("input",userEmailValidation);
userPhoneNumber.addEventListener("input",userPhoneNumberValidation);    

userConfirmPassword.addEventListener("input",userConfirmPassword)

signup_form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const ok=[usernameValidation(), passwordValidation(),userPhoneNumberValidation(),userEmailValidation(),userConfirmPassword()].every(true);
    if(ok){
        alert("form sumbitted successfully")
    }
    else{
        alert("please enter valid inputs")
    }
})