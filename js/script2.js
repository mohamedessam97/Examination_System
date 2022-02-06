var inpFirst =document.querySelector("input[placeholder='First name']");
var inpLast =document.querySelector("input[placeholder='Last name']");
var inpEmail =document.querySelector("input[placeholder='Email address']");
var inpPass =document.querySelector("input[placeholder='Password']");
var inpConfirm =document.querySelector("input[placeholder='Confirm']");
var signBtn = document.getElementById("sign");
var regs=document.getElementById("regs");
var fName ,lName,email,pass,Confirm ;
/////////////////////////////////////////////////////////
// function 
inpFirst.addEventListener("change",function(e){
    let re =/^[A-Z]+$/i
    let span =this.nextElementSibling.nextElementSibling.nextElementSibling;
    // console.log(span);
    // console.log(x);
    if (re.test(e.target.value)||e.target.value==""){
        span.textContent="";
        fName =e.target.value;
    }else{
        fName=undefined;
        this.style.border="1px solid red"

        span.textContent="The First Name must be string";
    }
})
inpLast.addEventListener("change",function(e){
    let re =/^[A-Z]+$/i
    let span =this.nextElementSibling.nextElementSibling;
    
    if (re.test(e.target.value)||e.target.value==""){
        span.textContent="";
        lName =e.target.value;
    }else{
        lName=undefined;
        this.style.border="1px solid red"

        span.textContent="The Last Name must be string";
    }
})
inpEmail.addEventListener("change",function(e){
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let span =this.nextElementSibling.nextElementSibling;
    
    if (re.test(e.target.value)){
        span.textContent="";
        email =e.target.value;
    }else{
        email=undefined;
        this.style.border="1px solid red"

        span.textContent="Invalid Email";
    }
})
inpPass.addEventListener("change",function(e){
    let span =this.nextElementSibling.nextElementSibling;
    
    if (e.target.value.length<8){
        this.style.border="1px solid red"

        span.textContent="The Password must be 8 Number or more";
        pass=undefined;
    }else{
        span.textContent="";
        pass=e.target.value;
    }
})
inpConfirm.addEventListener("change",function(e){
    let span =this.nextElementSibling.nextElementSibling;
    
    // if (e.target.value.length<8){
    //     span.textContent="The Password must be 8 Number or more";
    //     Confirm=undefined;
    // }else{
        Confirm=e.target.value;
        if(pass!=Confirm){
        this.style.border="1px solid red"

        span.textContent="The password doesn't match";
        inpConfirm.value="";
        }else{
        span.textContent="";

        }
    
})

signBtn.addEventListener("click",function(){
    if(fName==undefined){
        // inpFirst.nextElementSibling.nextElementSibling.nextElementSibling.textContent="Requird";
        inpFirst.style.border="1px solid red"
    }
    if(lName==undefined){
        // inpLast.nextElementSibling.nextElementSibling.textContent="Requird";
        inpLast.style.border="1px solid red"
    }
    if(email==undefined){ 
        // inpEmail.nextElementSibling.nextElementSibling.textContent="Requird";
        inpEmail.style.border="1px solid red"
    }
    if(pass==undefined){
        // inpPass.nextElementSibling.nextElementSibling.textContent="Requird";
        inpPass.style.border="1px solid red"
    }
    if(Confirm==undefined){
        // inpConfirm.nextElementSibling.nextElementSibling.textContent="Requird";
        inpConfirm.style.border="1px solid red"
    }else{
        if(pass === Confirm){
        localStorage.setItem("Fname",fName);
        localStorage.setItem("Lname",lName);
        localStorage.setItem("email",email);
        localStorage.setItem("password",pass);
        location.replace("Exam.html")
        }else{
        alert("The password doesn't match");
        }
    }
})

window.onkeyup=function(e)
    {
        if(e.key=="Enter"){
            signBtn.click();
        }
    }
