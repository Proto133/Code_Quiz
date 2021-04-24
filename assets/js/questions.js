// var questions = [


//     "Inside which HTML element do we put the JavaScript?",
//     "Where is the correct place to insert a JavaScript?",
//     "How do you create a function in JavaScript?",
//     "How to write an IF statement in JavaScript",
//     "How does a FOR loop start?",
//     "How do you write 'Hello World' in an alert box?",
//     "What is the correct way to write a JavaScript array?"
// ]
// var answers = [{
//         answers: {
//             a: "body",
//             b: "head",
//             c: "body and head are both accpetable",
//             d: "div"
//         },
//         correctAnswer: "c"
//     },
//     {
//         answers: {
//             a: "<script src= . . .></script>",
//             b: "<link rel='script' href= . . .>",
//             c: "<meta name='script' src= . . . ><script>",
//             d: "You don't insert a Javascript-- it just is."
//         },
//         correctAnswer: "a"
//     },
//     {
//         answers: {
//             a: "function = myFunction()",
//             b: "function myFunction()",
//             c: "function myFunction{}",
//             d: "var = function:myFunction()"
//         },
//         correctAnswer: "b"
//     },
//     {
//         answers: {
//             a: "if {i = 10} then{}",
//             b: "if i==10 then",
//             c: "if(i==10){}",
//             d: "if i=10{}"
//         },
//         correctAnswer: "b"
//     },
//     {
//         answers: {
//             a: "for (i=0; i<=15; i++)",
//             b: "for i= 1 to 15",
//             c: "for (i=0; i<=15)",
//             d: "for (score and 7 years ago)"
//         },
//         correctAnswer: "a"
//     },
//     {
//         answers: {
//             a: "alert(Hello World);",
//             b: "msg('Hello World');",
//             c: "alertBox('Hello World');",
//             d: "alert('Hello World')"
//         },
//         correctAnswer: "d"
//     },
//     {
//         answers: {
//             a: "array(colors['red','white','blue']",
//             b: "var colors = [red white blue]",
//             c: "var colors = ['red', 'white','blue']",
//             d: "var colors = {1-red, 2-white, 3-blue}",
//         },
//         correctAnswer: "c"
//     },
// ]
// for (letter in currentQuestion.answers) {

//     // ...add an html radio button
//     answers.push(
//         `<label>
//         <input type="radio" name="question${questionNumber}" value="${letter}">
//         ${letter} :
//         ${currentQuestion.answers[letter]}
//       </label>`
//     );
// }

// // add this question and its answers to the output
// output.push(
//     `<div class="question"> ${currentQuestion.question} </div>
//     <div class="answers"> ${answers.join('')} </div>`
// );

(function() {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        }
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();