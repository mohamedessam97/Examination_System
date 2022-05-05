//question creation
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
var ans1= new answer(1,"javascript tag");
var ans2= new answer(2,"script tag");
var ans3= new answer(3,"js tag");
var ans4= new answer(4,"scripting tag");

var q1 = new Question(1,"Inside which HTML element do we put the JavaScript?",ans2);
q1.addAns(ans1);
q1.addAns(ans2);
q1.addAns(ans3);
q1.addAns(ans4);

//q2
var ans5= new answer(5,"function myFunction()");
var ans6= new answer(6,"function = myFunction()");
var ans7= new answer(7,"function:myFunction()");

var q2 = new Question(2,"How can you create a function in js?",ans5);
q2.addAns(ans5);
q2.addAns(ans6);
q2.addAns(ans7);

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
//q4
var ans9= new answer(9,"using typeof operator");
var ans10= new answer(10,"using getType function");
var ans11= new answer(11," Both of the above.");
var ans12= new answer(12," None of the above.");

var q4 = new Question(3,"How can you get the type of arguments passed to a function?",ans9);
q4.addAns(ans9);
q4.addAns(ans10);
q4.addAns(ans11);
q4.addAns(ans12);
//q5
var ans9= new answer(9,"characterAt()");
var ans10= new answer(10,"getCharAt()");
var ans11= new answer(11,"charAt()");
var ans12= new answer(12,"None of the above.");

var q5 = new Question(3,"Which built-in method returns the character at the specified index?",ans11);
q5.addAns(ans9);
q5.addAns(ans10);
q5.addAns(ans11);
q5.addAns(ans12);
//q6
var ans9= new answer(9,"toLocaleUpperCase()");
var ans10= new answer(10,"toUpperCase()");
var ans11= new answer(11,"toString()");
var ans12= new answer(12,"substring()");

var q6 = new Question(3,"Which of the following function of String object returns the calling string value converted to upper case?",ans10);
q6.addAns(ans9);
q6.addAns(ans10);
q6.addAns(ans11);
q6.addAns(ans12);
//q7
var ans9= new answer(9,"toExponential()");
var ans10= new answer(10,"toFixed()");
var ans11= new answer(11,"toPrecision()");
var ans12= new answer(12," toLocaleString()");

var q7 = new Question(3,"Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",ans10);
q7.addAns(ans9);
q7.addAns(ans10);
q7.addAns(ans11);
q7.addAns(ans12);
//q8
var ans9= new answer(9,"toString()");
var ans10= new answer(10,"toFixed()");
var ans11= new answer(11,"toPrecision()");
var ans12= new answer(12," toLocaleString()");

var q8 = new Question(3,"Which of the following function of Number object returns a string value version of the current number?",ans9);
q8.addAns(ans9);
q8.addAns(ans10);
q8.addAns(ans11);
q8.addAns(ans12);
//q9
var ans9= new answer(9,"System.out.println(“Hello World”)");
var ans10= new answer(10,"print(“Hello World”)");
var ans11= new answer(11,"document.write(“Hello World”)");
var ans12= new answer(12,"response.write(“Hello World”)");

var q9 = new Question(3,"Which of the following is correct to write “Hello World” on the web page?",ans11);
q9.addAns(ans9);
q9.addAns(ans10);
q9.addAns(ans11);
q9.addAns(ans12);
//q10
var ans9= new answer(9,"True");
var ans10= new answer(10,"False");


var q10 = new Question(3," Javascript is an object oriented language?",ans10);
q10.addAns(ans9);
q10.addAns(ans10);



var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10].sort( () => .5 - Math.random() );;


//end of question creation
//////////////////////////////////////////////////////////////////////////////////////////////////

//Exam
var logBtn = document.getElementById("login");
var New =document.getElementById("new;")
var log =document.getElementById("log");
var ques =document.getElementById("ques");
var cont =document.getElementById("cont");
var res =document.getElementById("result");
var mList =document.getElementById("mList");
// var contain =document.getElementById("contain");

var p=document.querySelector("p");
var label=document.querySelectorAll("label");
var input=document.querySelectorAll('input[type="radio"]');
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var prevImg=document.getElementById("prev").children;
var nextImg=document.getElementById("next").children;
var count =document.getElementById("count");    
var submit=document.getElementById("submit");
// var cmark=document.querySelector("mark");
var mark=document.getElementById("mark");
var unmark=document.getElementById("unmark");
var Timer=document.getElementById("timer");
var slider=document.getElementById("slider");
var userAnswer=[];
var userRanswer=[];
var marked=[];
var i=0;








function addQ(){
        
        cont.innerHTML+=`<p>${questions[i].Q}</p>`;
        
        for(let j=0;j<questions[i].answers.length;j++){
            cont.innerHTML+=`<label for="inp${j+1}">
            <input type="radio" name="question1" id="inp${j+1}" value="${questions[i].answers[j].value}" onchange="saveValue(event)">
            <span class="first"></span>
            <span class="second">${questions[i].answers[j].value}</span>
        </label>
        `
        }

        if(marked[i]=="marked"){
            mark.style.display="none"
            unmark.style.display="block"
        }else{
            mark.style.display="block"
            unmark.style.display="none"
        }

        if(i>0){
            prevImg[0].src="imgs/arrow-circle-right-solid (2).svg";
        }else{
            prevImg[0].src="imgs/arrow-circle-right-solid (1).svg";

        }
        if(i==questions.length-1){
            nextImg[0].src="imgs/arrow-circle-right-solid (1).svg";
            nextImg[0].style.transform="rotateY(180deg)"
        }else{
            nextImg[0].src="imgs/arrow-circle-right-solid.svg";
            nextImg[0].style.transform="rotateY(0deg)"

        }
        // count.textContent=" ";
        count.innerHTML=i+1;
    }
    addQ();
    startTimer(300);
    
    
    mark.addEventListener("click",function(){

        mList.innerHTML+=`<span id="${i}" onclick="goto(event)">Question ${i+1}</span>
        <img class="error" onclick="remove(${i})" src="imgs/error-svgrepo-com2.svg" alt="">`
        marked[i]="marked";
        if(marked[i]=="marked"){
            mark.style.display="none"
            unmark.style.display="block"
        }

    })
    unmark.addEventListener("click",function(){
        document.getElementById(i).nextElementSibling.remove(); 
        document.getElementById(i).remove();
        marked[i]="unmarked";
        if(marked[i]=="unmarked"){
            unmark.style.display="none"
            mark.style.display="block"
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
        }
    }

    submit.addEventListener("click",Submit)

    function Submit(){
        let grade=0;
        ques.style.display="none";
        mList.style.display="none";
        
        for(let i=0;i<userAnswer.length;i++){
            if(userAnswer[i]==userRanswer[i]){
                grade++;
            }
        }
        res.style.display="block";
        res.innerHTML+="<div class='grade'>"+localStorage.getItem("Fname")+" "+localStorage.getItem("Lname")+"<br>"+grade+"/"+questions.length+"</div>";
    }

    function goto(e){
        i=Number(e.target.id);
        console.log(i);
        cont.innerHTML=" ";  
        addQ();
        Checked()
        // count.textContent=i+1;
    }

    function remove(i){
        document.getElementById(i).nextElementSibling.remove(); 
        document.getElementById(i).remove();
        marked[i]="unmarked";
        if(marked[i]=="unmarked"){
            mark.style.display="block"
            unmark.style.display="none"
        }
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
            w+=0.3;
            slider.style.width=`${w}%`
            if (--timer < 0) {
                Submit();
                clearInterval(x);
            }
        }, 1000)
    }

    // window.addEventListener("load",function(){
    //     window.location.replace("index.html")

    // })


    // Window.addEventListener("keyup",function(e){
    //     if(e.key=="ArrowRight"){
    //         console.log("true");
    //     }
    // })
    window.onkeyup=function(e)
    {
        if(e.key=="ArrowRight"){
            next.click();
        }else if(e.key=="ArrowLeft"){
            prev.click();
        }else if(e.key=="Enter"){
            submit.click();
        }
    }
    