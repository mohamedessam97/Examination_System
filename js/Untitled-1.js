var inpEmail =document.querySelector("input[placeholder='Email address']");
let spanE =inpEmail.nextElementSibling.nextElementSibling;

var inpPass =document.querySelector("input[placeholder='Password']");
let spanP =inpPass.nextElementSibling.nextElementSibling;

var logBtn = document.getElementById("login");
var New =document.getElementById("new;")
// console.log(inpEmail.value);
var log =document.getElementById("log");

logBtn.addEventListener("click",function(){
    if(inpEmail.value !=localStorage.getItem("email")){
        spanE.textContent="The Email is incorrect";
    }else if(inpPass.value!=localStorage.getItem("password")){
        spanE.textContent="";
        spanP.textContent="The Password is incorrect";
    }
    else{
        log.style.display="none"
        addQ();
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
function Question(d,q,r){
    this.id=d;
    this.ques=q;
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
var ans1= new answer(1,"<javascript>");
var ans2= new answer(2,"<script>");
var ans3= new answer(3,"<js>");
var ans4= new answer(4,"<scripting>");

var q1 = new Question(1,"Inside which HTML element do we put the JavaScript?",ans2);
q1.addAns(ans1);
q1.addAns(ans2);
q1.addAns(ans3);
q1.addAns(ans4);

//q2
var ans5= new answer(5," 'This is a comment");
var ans6= new answer(6,"//This is a comment");
var ans7= new answer(7,"<!--This is a comment-->");
var ans8= new answer(8,"/*This is a comment*/");

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
var ans9= new answer(9,"round(7.25)");
var ans10= new answer(10,"Math.round(7.25)");
var ans11= new answer(11,"Math.rnd(7.25)");
var ans12= new answer(12,"rnd(7.25)");

var q4 = new Question(3,"How do you round the number 7.25, to the nearest integer?",ans10);
q4.addAns(ans9);
q4.addAns(ans10);
q4.addAns(ans11);
q4.addAns(ans12);
var ans9= new answer(9,"round(7.25)");
var ans10= new answer(10,"Math.round(7.25)");
var ans11= new answer(11,"Math.rnd(7.25)");
var ans12= new answer(12,"rnd(7.25)");

var q5 = new Question(3,"How do you round the number 7.25, to the nearest integer?",ans10);
q5.addAns(ans9);
q5.addAns(ans10);
q5.addAns(ans11);
q5.addAns(ans12);


var questions=[q1,q2,q3,q4,q5];


// console.log(q1.answers);

var p=document.querySelector("p");
var label=document.querySelectorAll("label");
var input=document.querySelectorAll('input[type="radio"]');
var next=document.getElementById("next");
var userAnswer=[];
var userRanser=[];
// console.log(checke);
// for(let j=0;j<input.length;j++){
//     // debugger;

//             input[j].addEventListener('click',(e)=>{
//                 // console.log(e.target.value);
//                 console.log(i);
//                 userAnswer[i]="e.target.value";

//             })
//         }
var i=0;
function addQ(){
    // debugger;

    p.textContent=questions[0].ques;
        
        label[0].textContent=questions[0].answers[0].value;
        input[0].setAttribute("value",questions[0].answers[0].value)
        // console.log(label[0]);
        
        label[1].textContent=questions[0].answers[1].value;
        input[1].setAttribute("value",questions[0].answers[1].value)
        
        label[2].textContent=questions[0].answers[2].value;
        input[2].setAttribute("value",questions[0].answers[2].value)
        
        label[3].textContent=questions[0].answers[3].value;
        input[3].setAttribute("value",questions[0].answers[3].value)

        // console.log(i);
        // console.log("question 1")

        // input.forEach(el => {
        //     el.addEventListener("change",function(){
        //         // var checked=document.querySelector('input[type="radio"]:checked').value;
        //         // console.log(this.value);
                
        //         userAnswer[0]=this.value;
        //         userRanser[0]=questions[0].rightAns.value
        //         // if(userAnswer[0]==userRanser[0]){
        //         //     console.log("right");
        //         // }else{
        //         //     console.log("wrong");
        //         // }
        //     })

           
        // });

        for(let j=0;j<input.length;j++){

            input[j].addEventListener('change',(el)=>{
                // console.log(e.target.value);
                console.log(i);
                userAnswer[0]=el.target.value;
                // console.log(this);

            })
        }
        // i=0;

    next.addEventListener("click",function(){
    // debugger;
        i++;
        // console.log(i);
        
        p.textContent=questions[i].ques;
        
        label[0].textContent=questions[i].answers[0].value;
        input[0].setAttribute("value",questions[i].answers[0].value)
        // console.log(label[0]);
        
        label[1].textContent=questions[i].answers[1].value;
        input[1].setAttribute("value",questions[i].answers[1].value)
        
        label[2].textContent=questions[i].answers[2].value;
        input[2].setAttribute("value",questions[i].answers[2].value)
        
        label[3].textContent=questions[i].answers[3].value;
        input[3].setAttribute("value",questions[i].answers[3].value)
        // input.forEach(el => {
        //     // console.log(el);
        //     el.addEventListener("change",function(){
        //         // var checked=document.querySelector('input[type="radio"]:checked').value;
        //         // console.log(i);
        //         // console.log(this.value);
        //         console.log("next value"+i)
        //         userAnswer[i]=this.value;
        //         userRanser[i]=questions[i].rightAns.value;
        //         // if(userAnswer[0]==userRanser[0]){
        //         //     console.log("right");
        //         // }else{
        //         //     console.log("wrong");
        //         // }
        //     })
        // });
        // console.log(i)
        for(let j=0;j<input.length;j++){
    // debugger;

            input[j].addEventListener('click',(e)=>{
                // console.log(e.target.value);
                // console.log(this);
                userAnswer[i]=e.target.value;

            })
        }
    })
    }

// function saveAnswer(e){
//     userAnswer[0]=e.value;
//     userRanser[0]=questions[0].rightAns.value;
//     // console.log(e.value);
// }
