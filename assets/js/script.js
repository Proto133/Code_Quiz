//Input User name and change the value of #input to reflect their response
var nameBtn = document.querySelector("#nameBtn");
var last3 = [];
var userStats = {
    name: "",
    score: "",
    time: "",
};

//GreetingBlock Function just to log and store the user name and start quiz timer.
function nameSubmit() {
    // preventDefault()
    var greetingBlock = document.querySelector("#greetingBlock")
    var span = document.querySelector("#questSpan");
    var userName = document.querySelector("#input").value;
    var glUser = document.querySelector("#glUser");
    glUser.textContent = "Good luck, " + userName;
    span.setAttribute("style", "display: block;");
    greetingBlock.setAttribute("style", "display:none;");
    userStats.name = userName
    quiz();
    //Invoke the timer function
    quizTime();
    localStorage.setItem("Name", userStats.name);
    startTime = 500;
}
nameBtn.addEventListener("click", nameSubmit);


//Create timer variable to HTML elements for timer
var timerElement = document.querySelector('.timer');
var timerDiv = document.querySelector('#timerDiv');
var originalTimer = 500;
var startTime = 500;
var timeInterval = "";

//Create the timer function
function quizTime() {

    // timerElement.textContent = startTime + " seconds left."

    //timerElement
    timerInterval = setInterval(function() {
        if (startTime > 0) {
            startTime--;
            timerElement.textContent = startTime + " seconds left."
        } else {
            clearInterval(timeInterval)
            timerElement.textContent = "ALL DONE!!";
        }

    }, 1000);
}
var timeLeft = ""
localStorage.setItem("Finished", timeLeft)

function stopTimer() {
    if (startTime !== 0) {
        timerElement.textContent = "Completed."
        clearInterval(timerInterval);
        timeLeft = startTime;
        //save this time to storage
        localStorage.setItem("Finished", originalTimer - startTime);
    };
    startTime = 0;

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
            a: "<script src='script.js'></script>",
            b: "<link rel='script' href='script.js'>",
            c: "<meta name='script' src='script.js'><script> ",
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
        correctAnswer: "c"
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
            d: "alert('Hello World');"
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
var score = 0
localStorage.setItem("Score", score);
var currentQuestion = 0



//Generate Text 
function quiz() {

    var h2Question = document.querySelector("#Question");
    var op1 = document.querySelector("#op1");
    var op2 = document.querySelector("#op2");
    var op3 = document.querySelector("#op3");
    var op4 = document.querySelector("#op4");

    h2Question.textContent = quizQs[currentQuestion].question;
    op1.textContent = "a) " + quizQs[currentQuestion].answers.a;
    op1.setAttribute("value", "a");
    op2.textContent = "b) " + quizQs[currentQuestion].answers.b;
    op2.setAttribute("value", "b");
    op3.textContent = "c) " + quizQs[currentQuestion].answers.c;
    op3.setAttribute("value", "c");
    op4.textContent = "d) " + quizQs[currentQuestion].answers.d;
    op4.setAttribute("value", "d");
}
//Begin Checking Answer Process
var correctAnswer = quizQs[currentQuestion].correctAnswer;
var guessValue = "";
var currentCorrectAnswer = "";

//Crosscheck value on button click against Correct Answer
function storeGuess(v) {
    var quizProgress = quizQs.length - 1;
    guessValue = v;
    checkAnswer();
    if (currentQuestion < quizProgress) {
        next();
    } else {

        userScoreboard();
    };
}

function checkAnswer() {
    currentCorrectAnswer = quizQs[currentQuestion].correctAnswer;
    if (guessValue === currentCorrectAnswer) {
        userStats.score++;
        localStorage.setItem("Score", userStats.score);

    } else {
        startTime = startTime -= 5;
        timerElement.textContent = startTime + " seconds left.";
    };

}

function next() {
    currentQuestion++;
    quiz();
}

var recordScore = document.querySelector("#score");
var recordTime = document.querySelector("#timeSpent");


function userScoreboard() {
    //stop timer and display
    stopTimer();
    //Get rid of Questions Block
    var span = document.querySelector("#questSpan");
    span.setAttribute("style", "display: none;")
        //Show ScoreBoard 
    var results = document.querySelector("#results");
    results.setAttribute("style", "display:block;")
    var timeSpent = localStorage.getItem("Finished")
    userStats.time = timeSpent;
    recordTime.textContent = timeSpent + " seconds!";

    var userScore = localStorage.getItem("Score");
    userStats.score = userScore;
    recordScore.textContent = userScore + " out of " + quizQs.length;
}



function updateList() {
    last3.push({ "Name": userStats.name, "Score": userStats.score, "Time": userStats.time });
    localStorage.setItem("ScoreList", last3);
    console.log(last3);
    showScoreList();
}

function showScoreList() {
    document.querySelector("#results").setAttribute("style", "display:none;")
    document.querySelector("#scoreCard").setAttribute("style", "display: block;");
    var user1 = document.querySelector("#user1");
    var user2 = document.querySelector("#user2");
    var user3 = document.querySelector("#user3");
    localStorage.getItem("ScoreList ", last3);
    user1.textContent = last3[0].Name + " | " + last3[0].Score + " | " + last3[0].Time + " seconds";
    user2.textContent = last3[1].Name + " | " + last3[1].Score + " | " + last3[1].Time + " seconds";
    user3.textContent = last3[2].Name + " | " + last3[2].Score + " | " + last3[2].Time + " seconds";
}

function startOver() {
    var greetingBlock = document.querySelector("#greetingBlock")
    var span = document.querySelector("#questSpan");
    var glUser = document.querySelector("#glUser");
    document.querySelector("#results").setAttribute("style", "display:none;")
    document.querySelector("#scoreCard").setAttribute("style", "display: none;");
    glUser.textContent = ""
    document.querySelector("#input").value = "";
    span.setAttribute("style", "display: none");
    greetingBlock.setAttribute("style", "display:block;");
    userStats.score = 0;
    timerInterval = 0;
    currentQuestion = 0;

}