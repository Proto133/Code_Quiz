//Initial global variables declared to start creating code quiz
//Set global JS variable for nameBtn linking to HTML element with that ID  
var nameBtn = document.querySelector("#nameBtn");
//Declare last3 as array to collect the data from the last three contestants.
var last3 = [];
//Create global variable for object to be pushed to last3 array once populated.
var userStats = {
    name: "",
    score: "",
    time: "",
};

//Adding  a initialization function to crosscheck whether a function has been fired for if statements
function initFunction() {
    Function.prototype.fired = false;
    userStats.time = "";
    userStats.score = "";
    userStats.name = "";

}
initFunction();
//Set global variable for good luck user p tag
var glUser = document.querySelector("#glUser");

//Set global variable for divUID
var divUID = document.querySelector("#divUID");
var timerDiv = document.querySelector("#timerDiv");
var input = document.querySelector("#input");

//GreetingBlock Function just to log and store the user name and start quiz timer.
function nameSubmit() {
    console.log("nameSubmit fired");
    //Set local variables linking HTML elements for greeting block.
    var greetingBlock = document.querySelector("#greetingBlock")
    var span = document.querySelector("#questSpan");
    var userName = document.querySelector("#input").value;
    //Provide user with moral support
    glUser.textContent = "Good luck, " + userName;
    //Display the quiz
    span.setAttribute("style", "display: block;");
    //Hide the greeting block
    greetingBlock.setAttribute("style", "display:none;");
    //Commit the user input to the userStats object as name
    userStats.name = userName
        //Invoke the quiz function.
    quiz();
    //Invoke the timer function
    quizTime();
    //Store username to Local Storage -- may be redundant possible refactor deletion.
    localStorage.setItem("Name", userStats.name);
    //Set startTime to allocated time
    startTime = 180;
}
//Add listener event 'click' to HTML nameBtn
nameBtn.addEventListener("click", nameSubmit);


//Create JS variables linking HTML elements for timer
var timerElement = document.querySelector('.timer');


//Declare global variables for use calculating time#results & setting and resetting timer
var originalTimer = 180;
var startTime = 180;
var timerInterval;
var userTime;

//Actual timer function
function quizTime() {
    //Diagnostic console.log
    console.log("quizTime fired");
    //Diagnostic function
    quizTime.fired = true;
    //timerElement
    var timerInterval = setInterval(function() {
        timerElement.textContent = startTime + " seconds left.";
        if (startTime > 0) {
            startTime--;
            // //Diagnostic console.log
            // console.log("in the if ", startTime);
        } else {
            checkComplete();
            clearInterval(timerInterval);
        }
    }, 1000);
}
//Check if the person finished before time ran out if not fire didNotFinish
function checkComplete() {
    if (userScoreboard.fired != true) {
        //Diagnostic console.log
        console.log("checkComplete fired");
        didNotFinish();

    }
}
//Stop timer and capture time of quiz completion.
function stopTimer() {
    //Diagnostic console.log
    console.log("stopTimer fired");
    stopTimer.fired = true;
    if (startTime > 0) {
        timerElement.textContent = "Completed.";
        //Compare originalTimer against current state of startTime and stores time in userStats
        //Commit the user input to the userStats object as name
        userTime = originalTimer - startTime;
        console.log(userTime);
        userStats.time = userTime;
        //Save this time to storage
        localStorage.setItem("Time", userTime);
    };


    //Zero out timer
    startTime = 0;

}



//Create questions Array
var quizQs = [{
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "body",
            b: "head",
            c: "body and head are both acceptable",
            d: "div"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "<script src='script.js'></script>",
            b: "<link rel='script' href='script.js'/>",
            c: "<meta name='script' src='script.js'/><> ",
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
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: {
            a: "Client",
            b: "Server",
            c: "Both",
            d: "None",
        },
        correctAnswer: "c"
    },
    {
        question: "How do you find the minimum of x and y using JavaScript?",
        answers: {
            a: "min(x,y);",
            b: "Math.min(x,y)",
            c: "Math.min(xy)",
            d: "min(xy);",
        },
        correctAnswer: "b"
    },
    {
        question: "What will Boolean(3<7) return?",
        answers: {
            a: "true",
            b: "false",
            c: "NaN",
            d: "SyntaxError",
        },
        correctAnswer: "a"
    },
    {
        question: "Determine the result – String(“Hello”) === “Hello”;",
        answers: {
            a: "true",
            b: "false",
            c: "SyntaxError",
            d: "ReferenceError",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the correct JavaScript syntax to print “Javascript” in the console?",
        answers: {
            a: "print(“Javascript”);",
            b: "console.print(“Javascript”); ",
            c: "log.console(“Javascript”);",
            d: "console.log(“Javascript”);",
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following print content on the browser window?",
        answers: {
            a: "document.write(“print content”);",
            b: "response.write(“print content”);",
            c: "document.write(print content);",
            d: "write(“print content”).please;",
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is an event listener in JavaScript?",
        answers: {
            a: "onclick",
            b: "blur",
            c: "click",
            d: "Click()",
        },
        correctAnswer: "c"
    },
    {
        question: "Which of the given options is an incorrect variable name?",
        answers: {
            a: "javascript",
            b: "_javascript",
            c: "$javascript",
            d: "-javascript",
        },
        correctAnswer: "d"
    }

];

//Define score as a Global variable to keep track through the different functions.
var score = 0
    //Set localStorage Item for later use.
localStorage.setItem("Score", score);
//Globally set the currentQuestion variable to 0 so quiz always begins at the first question
var currentQuestion = 0

//Generate Text 
function quiz() {
    //Diagnostic console.log
    console.log("quiz fired");
    //stylize timerDiv
    timerDiv.setAttribute('style', 'display:block; box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.67);');
    //stylize glUser ptag
    divUID.setAttribute('style', 'display:block; box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.67);');

    // Set local variables for HTML elements
    var h2Question = document.querySelector("#Question");
    var op1 = document.querySelector("#op1");
    var op2 = document.querySelector("#op2");
    var op3 = document.querySelector("#op3");
    var op4 = document.querySelector("#op4");
    //Display correct questions and answer choices
    h2Question.textContent = quizQs[currentQuestion].question;
    op1.textContent = "a) " + quizQs[currentQuestion].answers.a;
    //Set the value of each button onclick.
    op1.setAttribute("value", "a");
    op2.textContent = "b) " + quizQs[currentQuestion].answers.b;
    op2.setAttribute("value", "b");
    op3.textContent = "c) " + quizQs[currentQuestion].answers.c;
    op3.setAttribute("value", "c");
    op4.textContent = "d) " + quizQs[currentQuestion].answers.d;
    op4.setAttribute("value", "d");
}
//Begin Checking Answer Process.
var correctAnswer = quizQs[currentQuestion].correctAnswer;
//Set JS variable for value collected on button click. 
//onclick="storeGuess(this.value)" in HTML, for use in StoreGuess function.
var guessValue = "";
//Set global variable for the correct answer, used in multiple functions.
var currentCorrectAnswer = "";

//Crosscheck value on button click against Correct Answer.
function storeGuess(v) {
    //Diagnostic console.log
    console.log("storeGuess fired.");
    var quizProgress = quizQs.length - 1;
    guessValue = v;
    checkAnswer();
    //If the quiz isn't over, go to next(), if you're out of questions stopTimer() and fire the userScoreboard()
    if (currentQuestion < quizProgress) {
        next();
    } else {
        //stop timer and display
        stopTimer();
        userScoreboard();

    };
}
/*React appropriately when the answer is checked against the answer key
add 1 to Score or deduct 5 seconds from time.*/
function checkAnswer() {
    //Diagnostic console.log
    console.log("checkAnswer Fired");
    checkAnswer.fired = true;
    currentCorrectAnswer = quizQs[currentQuestion].correctAnswer;
    if (guessValue === currentCorrectAnswer) {
        userStats.score++;
        localStorage.setItem("Score", userStats.score);

    } else {
        startTime = startTime -= 5;
    };

}
//Loop back to the quiz function to pull the next question.
function next() {
    currentQuestion++;
    quiz();
}
//Declare score and time as variables for the appropriate HTML elements.
var recordScore = document.querySelector("#score");
var recordTime = document.querySelector("#timeSpent");

//Function for manipulating HTML appropriately upon finishing the quiz.
function userScoreboard() {
    userScoreboard.fired = true;
    console.log("userScoreboard fired.");
    //Get rid of Questions Block
    var span = document.querySelector("#questSpan");
    span.setAttribute("style", "display: none;");
    //Show ScoreBoard 
    var results = document.querySelector("#results");
    results.setAttribute("style", "display:block;");
    var resultsList = document.querySelector("#resultsList");
    resultsList.setAttribute("style", "display:block");
    //Display result of timeSpent in HTML
    recordTime.textContent = userStats.time + " seconds!";
    //Display result of score in HTML
    recordScore.textContent = userStats.score + " out of " + quizQs.length;
}

//Update the scoreboard for recent users.
function updateList() {
    //Diagnostic console.log
    console.log("updateList fired.");
    //Hide personal results
    document.querySelector("#results").setAttribute("style", "display:none;");
    //Push current user info to  0 index of the last3 array so that you can always see the last 3.
    last3.unshift({ "Name": userStats.name, "Score": userStats.score, "Time": userStats.time });
    //Set updated last3 array as the localStorage "ScoreList"
    localStorage.setItem("ScoreList", last3);
    //Verify correct data
    console.log(last3);
    //Invoke subsequent function
    showScoreList();
}
//Manipulate HTML to properly display the updated ScoreList.
function showScoreList() {
    //Diagnostic console.log
    console.log("showScoreList fired.");
    //Clear timerElement textContent in HTML
    timerElement.textContent = "";
    document.querySelector("#timerDiv").setAttribute("style", "display:none;");
    document.querySelector("#divUID").setAttribute("style", "display:none;");
    //Show ScoreCard
    document.querySelector("#scoreCard").setAttribute("style", "display: block;");
    document.querySelector("#results").setAttribute("style", "display:none;");
    //Set variables for HTML list items
    var user1 = document.querySelector("#user1");
    var user2 = document.querySelector("#user2");
    var user3 = document.querySelector("#user3");
    //Retrieve last3 array info from localStorage
    localStorage.getItem("ScoreList ", last3);

    //Populate List Items with appropriate info
    user1.textContent = last3[0].Name + " | " + last3[0].Score + " | " + last3[0].Time + " seconds";
    user2.textContent = last3[1].Name + " | " + last3[1].Score + " | " + last3[1].Time + " seconds";
    user3.textContent = last3[2].Name + " | " + last3[2].Score + " | " + last3[2].Time + " seconds";
}
/*Reset necessary elements and variables upon normal completion of application,
 to launch the quiz subsequent times.*/
function startOver() {
    //Diagnostic console.log
    console.log("startOver fired");
    //Diagnostic function
    startOver.fired = true;
    //Hide HTML elements for personal score card and recent users leaderboard. 
    document.querySelector("#results").setAttribute("style", "display:none;");
    document.querySelector('dl').setAttribute("style", "display:none;");
    //Hide HTML scoreCard Element
    document.querySelector("#scoreCard").setAttribute("style", "display: none;");
    //Set local variables from the initial instance of the quiz
    var greetingBlock = document.querySelector("#greetingBlock");
    //Show username input div
    greetingBlock.setAttribute("style", "display:block;");
    input.value = "";
    //Reset content of Goodluck block
    var glUser = document.querySelector("#glUser");
    glUser.textContent = "";
    var span = document.querySelector("#questSpan");
    //Make sure the questions section is hidden at initial onset
    span.setAttribute("style", "display: none");

    //Reset js stats to zero for new user.
    userStats.score = 0;
    userStats.time = 0;
    //Make sure timer doesn't start running until called in nameSubmit().
    timerInterval = 0;
    //Start quiz from index 0 of quizQs array.
    currentQuestion = 0;
    userScoreboard.fired = false;
    initFunction();
}
var runningIndex = last3.length - 1;
/*Fires game reset if the timer runs out and the user didn't get through the questions*/
function didNotFinish() {
    //Diagnostic console.log
    console.log("didNotFinish fired.");
    //Diagnostic function.
    didNotFinish.fired = true;
    if (userScoreboard.fired != true) {
        startTime = 240000;
        alert("Sorry you ran out of time. Please try again.");
        //Hide personal results
        document.querySelector("#results").setAttribute("style", "display:none;");
        document.querySelector("#timerDiv").setAttribute("style", "display:none;");
        document.querySelector("#divUID").setAttribute("style", "display:none;");
        //Hide HTML scoreCard Element
        document.querySelector("#scoreCard").setAttribute("style", "display: none;");
        //Set local variables from the initial instance of the quiz
        var greetingBlock = document.querySelector("#greetingBlock");
        //Show username input div
        greetingBlock.setAttribute("style", "display:block;");
        input.value = "";
        //Reset content of Goodluck block
        var glUser = document.querySelector("#glUser");
        glUser.textContent = "";
        var span = document.querySelector("#questSpan");
        //Make sure the questions section is hidden at initial onset
        span.setAttribute("style", "display: none");

        //Reset js stats to zero for new user.
        userStats.score = 0;
        userStats.time = 0;

        //Make sure timer doesn't start running until called in nameSubmit().
        timerInterval = 0;
        //Start quiz from index 0 of quizQs array.
        currentQuestion = 0;
        //Inform them that they failed.
    };
    // initFunction();
}