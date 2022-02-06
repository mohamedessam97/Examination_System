var inpEmail =document.querySelector("input[placeholder='Email address']");
let spanE =inpEmail.nextElementSibling.nextElementSibling;

var inpPass =document.querySelector("input[placeholder='Password']");
let spanP =inpPass.nextElementSibling.nextElementSibling;

var logBtn = document.getElementById("login");
var New =document.getElementById("new;")
// console.log(inpEmail.value);
var log =document.getElementById("log");
var ques =document.getElementById("ques");
var cont =document.getElementById("cont");
var res =document.getElementById("result");
var mList =document.getElementById("mList");

logBtn.addEventListener("click",function(){
    if(inpEmail.value !=localStorage.getItem("email")||inpPass.value!=localStorage.getItem("password")){
        spanP.textContent="The Email or the password are incorrect";
    }
    else{
        log.style.display="none"
        ques.style.display="block"
        addQ();
        startTimer(300);

    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
function Question(d,q,r){
    this.id=d;
    this.Q=q;
    this.rightAns=r;
    this.answers=[];
    this.addAns=function(ans){
        this.answers.push(ans);
    }


}

function answer(d,v){
    this.id=d;
    this.value=v;
}


//Q1
var ans1= new answer(1,"javascript");
var ans2= new answer(2,"script");
var ans3= new answer(3,"js");
// var ans4= new answer(4,"<scripting>");

var q1 = new Question(1,"Inside which HTML element do we put the JavaScript?",ans2);
q1.addAns(ans1);
q1.addAns(ans2);
q1.addAns(ans3);
// q1.addAns(ans4);

//q2
var ans5= new answer(5," sdThis is a comment");
var ans6= new answer(6,"sfThis is a comment");
var ans7= new answer(7,"ffThis is a comment");
var ans8= new answer(8,"This is a comment");

var q2 = new Question(2,"How can you add a comment in a JavaScript?",ans6);
q2.addAns(ans5);
q2.addAns(ans6);
q2.addAns(ans7);
q2.addAns(ans8);

//q3
var ans9= new answer(9,"round(7.25)");
var ans10= new answer(10,"Math.round(7.25)");
var ans11= new answer(11,"Math.rnd(7.25)");
var ans12= new answer(12,"rnd(7.25)");

var q3 = new Question(3,"How do you round the number 7.25, to the nearest integer?",ans10);
q3.addAns(ans9);
q3.addAns(ans10);
q3.addAns(ans11);
q3.addAns(ans12);


var questions=[q1,q2,q3].sort( () => .5 - Math.random() );;



var p=document.querySelector("p");
var label=document.querySelectorAll("label");
var input=document.querySelectorAll('input[type="radio"]');
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var submit=document.getElementById("submit");
var mark=document.getElementById("mark");
var unmark=document.getElementById("unmark");
var Timer=document.getElementById("timer");
var slider=document.getElementById("slider");
var userAnswer=[];
var userRanswer=[];
var marked=[];
var i=0;
function addQ(){
        
        // p.textContent=questions[i].Q;
        cont.innerHTML+=`
            <p>${questions[i].Q}</p>`

        for(let i=0;i<inp.length;i++){
            console.log(inp[i]);
        }

        for(let j=0;j<questions[i].answers.length;j++){

            cont.innerHTML+=`
            
            <div>
            <label for="inp${j+1}">${questions[i].answers[j].value}</label>
            <input type="radio" name="ans" id="inp${j+1}" value="${questions[i].answers[j].value}" onchange="saveValue(event)">
            </div>`

            // label[j].textContent=questions[i].answers[j].value;
            // input[j].setAttribute("value",questions[i].answers[j].value)
        }
        
        
        // label[1].textContent=questions[i].answers[1].value;
        // input[1].setAttribute("value",questions[i].answers[1].value)
        
        // label[2].textContent=questions[i].answers[2].value;
        // input[2].setAttribute("value",questions[i].answers[2].value)
        
        // label[3].textContent=questions[i].answers[3].value;
        // input[3].setAttribute("value",questions[i].answers[3].value)

        // for(var j=0;j<input.length;j++){

        //     input[j].addEventListener('change',(e)=>{
        //         userAnswer[i]=e.target.value;
        //         userRanswer[i]=questions[i].rightAns.value


        //     })
        // }
        if(marked[i]=="marked"){
            mark.style.display="none"
            unmark.style.display="block"
        }else{
            mark.style.display="block"
            unmark.style.display="none"
        }
    }
    
    
    mark.addEventListener("click",function(){

        mList.innerHTML+=`<span id="${i}" onclick="goto(event)">Question ${i+1}<br></span>`
        marked[i]="marked";
        if(marked[i]=="marked"){
            mark.style.display="none"
            unmark.style.display="block"
        }

    })
    unmark.addEventListener("click",function(){
        document.getElementById(i).remove();
        // mList.innerHTML+=`<span id="${i}">Question ${i+1}</span><br>`
        marked[i]="unmarked";
        if(marked[i]=="unmarked"){
            mark.style.display="block"
            unmark.style.display="none"
        }
    })



    next.addEventListener("click",function(){
        i++;
        if(i>questions.length-1){
            i=questions.length-1;
        }
        cont.innerHTML=" ";
        addQ();
        Checked();
    })
    prev.addEventListener("click",function(){
        i--;
        if(i<0){
            i=0;
        }
        cont.innerHTML=" ";
        addQ();
        Checked()
        
    })
    
    function Checked(){
    var inp=document.querySelectorAll('input[type="radio"]');

        for(let h=0;h<inp.length;h++){
            if(inp[h].getAttribute("value")===userAnswer[i]){
                inp[h].checked=true;
            }
            // console.log(inp[h]);
        }
    }

    submit.addEventListener("click",Submit)

    function Submit(){
        let grade=0;
        ques.style.display="none";
        for(let i=0;i<userAnswer.length;i++){
            if(userAnswer[i]==userRanswer[i]){
                grade++;
            }
        }
        res.style.display="block";
        res.innerHTML="your result is "+grade+"/"+questions.length;
    }

    function goto(e){
        i=e.target.id;
        cont.innerHTML=" ";
        addQ();
        Checked()
    }

    function saveValue(e){
        
            userAnswer[i]=e.target.value;
            userRanswer[i]=questions[i].rightAns.value


        
    }


    function startTimer(duration) {
        var timer = duration, minutes, seconds;
        var w=0;
        var x =setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            Timer.textContent=minutes + ":" + seconds;
            w+=0.33333333333334;
            slider.style.width=`${w}%`
            if (--timer < 0) {
                Submit();
                clearInterval(x);
                // timer = duration; // uncomment this line to reset timer automatically after reaching 0
            }
        }, 1000)
    }
    

