const form =document.getElementById('orang-form');

const email =document.getElementById('exampleInputEmail1');
const emailmessage = document.getElementById('emailmessage');
const mobile  =document.getElementById('exampleInputMobile');
const mobilemessage = document.getElementById('mobilemessage');
const password  =document.getElementById('exampleInputPassword1');
const passwordmessage = document.getElementById('passwordmessage');
const subbtn =document.getElementById('subbtn');   

let regexEmail = /^[a-z0-9._-]+@(gmail|yahoo).com$/;
let regexMobile = /^[0][7][7][0-9]{7}$/;
let passMobile = /^[A-Z]{6,18}$/i;


let boolValidat ='';

function submitBtn(e) {
    ////email
    if (email.value == "") {
        emailmessage.style.color='#ff7900';
        email.style.border="2px solid #cd3c14";
        email.style.boxShadow="1px 0px 2px #cd3c14";
        emailmessage.innerText='please Enter the email' 
        boolValidat +='false';
    } 
    else {
        if (email.value.match(regexEmail)) {
            emailmessage.innerText="";
            email.style.border="2px solid green";
            email.style.boxShadow="1px 0px 2px green";
            boolValidat +='true';
        } else {
            emailmessage.style.color='#ff7900';
            email.style.border="2px solid #cd3c14";
            email.style.boxShadow="1px 0px 2px #cd3c14";
            emailmessage.innerText="Invalid Email";
            boolValidat +='false';
        }
        }
    ////mobile
    if(mobile.value == ''){
        mobilemessage.style.color='#ff7900';
        mobile.style.border="2px solid #cd3c14";
        mobile.style.boxShadow="1px 0px 2px #cd3c14";
        mobilemessage.innerText='please Enter Your Number'
        boolValidat +='false';
    } else
        if(mobile.value.match(regexMobile)){
            mobilemessage.innerText="";
            mobile.style.border="2px solid green";
            mobile.style.boxShadow="1px 0px 2px green";
            boolValidat +='true';
        }else {
            mobilemessage.style.color='#ff7900';
            mobile.style.border="2px solid #cd3c14";
            mobile.style.boxShadow="1px 0px 2px #cd3c14";
            mobilemessage.innerText="Invalid Mobile";
            boolValidat +='false';
        }
        ////password
        if(password.value == ''){
            passwordmessage.style.color='#ff7900';
            password.style.border="2px solid #cd3c14";
            password.style.boxShadow="1px 0px 2px #cd3c14";
            passwordmessage.innerText='please Enter password'
            boolValidat +='false';
        } else
            if(password.value.match(passMobile)){
                passwordmessage.innerText="";
                password.style.border="2px solid green";
                password.style.boxShadow="1px 0px 2px green";
                boolValidat +='true';
            }else {
                passwordmessage.style.color='#ff7900';
                password.style.border="2px solid #cd3c14";
                password.style.boxShadow="1px 0px 2px #cd3c14";
                passwordmessage.innerText="Invalid password";
                boolValidat +='false';
            }
            

            if(boolValidat.includes('false')){
                console.log('falseeeeeeeee');
                return false
            }else{
                console.log('trueeeeeeee');
                return true ;
            } 
            // deferunt way
            // return (boolvalidate.includes("true"))? false : true;
            }
