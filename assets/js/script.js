//Input User name and change the value of #input to reflect their response
var nameBtn = document.querySelector("#nameBtn");

//GreetingBlock Function just to log and store the user name and start quiz timer.
function nameSubmit() {
    var greetingBlock = document.querySelector("#greetingBlock")
    var span = document.querySelector("#questSpan");
    var userName = document.querySelector("#input").value;
    var glUser = document.querySelector("#glUser");

    glUser.textContent = "Good luck, " + userName;

    span.setAttribute("style", "display: block;")
    greetingBlock.setAttribute("style", "display:none;");
    quiz();
    //Invoke the timer function
    quizTime();
}
nameBtn.addEventListener("click", nameSubmit);


//Create timer variable to HTML elements for timer
var timerElement = document.querySelector('.timer');
var timerDiv = document.querySelector('#timerDiv');
//Create the function
function quizTime() {
    var startTime = 60
    timerElement.textContent = startTime + " seconds left."

    //timerElement
    var timeInterval = setInterval(function() {
        if (startTime > 0) {
            startTime--
            timerElement.textContent = startTime + " seconds left."
        } else {
            clearInterval(timeInterval)
            timerElement.textContent = "ALL DONE!!";
        }
    }, 1000);


}
//Create questions Array
var quizQs = [{
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "body",
            b: "head",
            c: "body and head are both accpetable",
            d: "div"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "<script src= . . .></script>",
            b: "<link rel='script' href= . . .>",
            c: "<meta name='script' src= . . . ><script>",
            d: "You don't insert a Javascript-- it just is."
        },
        correctAnswer: "a"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function = myFunction()",
            b: "function myFunction()",
            c: "function myFunction{}",
            d: "var = function:myFunction()"
        },
        correctAnswer: "b"
    },
    {
        question: "How to write an IF statement in JavaScript",
        answers: {
            a: "if {i = 10} then{}",
            b: "if i==10 then",
            c: "if(i==10){}",
            d: "if i=10{}"
        },
        correctAnswer: "b"
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for (i=0; i<=15; i++)",
            b: "for i= 1 to 15",
            c: "for (i=0; i<=15)",
            d: "for (score and 7 years ago)"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "alert(Hello World);",
            b: "msg('Hello World');",
            c: "alertBox('Hello World');",
            d: "alert('Hello World')"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "array(colors['red','white','blue']",
            b: "var colors = [red white blue]",
            c: "var colors = ['red', 'white','blue']",
            d: "var colors = {1-red, 2-white, 3-blue}",
        },
        correctAnswer: "c"
    },

];

function quiz() {
    var h2Question = document.querySelector("#Question");
    var op1 = document.querySelector('label[for="op1"');
    var op2 = document.querySelector('label[for="op2"');
    var op3 = document.querySelector('label[for="op3"');
    var op4 = document.querySelector('label[for="op4"');
    h2Question.textContent = quizQs[0].question;
    op1.innerHTML = "a) " + quizQs[0].answers.a;
    op2.innerHTML = "b) " +
        quizQs[0].answers.b;
    op3.innerHTML = "c) " +
        quizQs[0].answers.c;
    op4.innerHTML = "d) " +
        quizQs[0].answers.d;
}