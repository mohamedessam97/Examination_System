//login page
var inpEmail =document.querySelector("input[placeholder='Email address']");
let spanE =inpEmail.nextElementSibling.nextElementSibling;

var inpPass =document.querySelector("input[placeholder='Password']");
let spanP =inpPass.nextElementSibling.nextElementSibling;

var logBtn = document.getElementById("login");
var New =document.getElementById("new;")
var log =document.getElementById("log");
var ques =document.getElementById("ques");
var cont =document.getElementById("cont");
var res =document.getElementById("result");
var mList =document.getElementById("mList");

logBtn.addEventListener("click",function(){
    if(inpEmail.value !=localStorage.getItem("email")||inpPass.value!=localStorage.getItem("password")){
        spanE.textContent="The Email or the password are incorrect";
    }
    else{
        // log.style.display="none"
        // ques.style.display="block"
        window.location.replace("index2.html")

    }
})
//end of login page
//////////////////////////////////////////////////////////////////////////////////////////////////////


    
window.onkeyup=function(e)
    {
        if(e.key=="Enter"){
            logBtn.click();
        }
    }
