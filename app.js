//Made a quiz application
//question for quiz
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: 'scprit',
        option2: 'javascript',
        option3: 'js',
        option4: 'scripting',
        correctOption: 'script',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The head section',
        option2: 'The body section',
        option3: 'Both the head and "body" section are correct',
        correctOption: 'The body section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: 'scripr href="xxx.js"',
        option2: 'scripr name="xxx.js"',
        option3: 'scripr src="xxx.js"',
        correctOption: 'scripr src="xxx.js"',
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        correctOption: 'False',
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");',
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()',
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()',
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        option4: 'if i = 5 then',
        correctOption: 'if(i == 5)',
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)',
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)',
    },
    {
        question: 'How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        option4: 'for (i = 0; i <= 5)',
        correctOption: 'for (i = 0; i <= 5; i++)',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment',
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        option1: 'let colors = "red", "green", "blue"',
        option2: 'let colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'let colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option4: 'let colors = ["red", "green", "blue"]',
        correctOption: 'let colors = ["red", "green", "blue"]',
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'rnd(7.25)',
        option3: 'Math.rnd(7.25)',
        option4: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)',
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'top(x, y)',
        option3: 'Math.ceil(x ,y)',
        option4: 'Math.max(x, y)',
        correctOption: 'Math.max(x, y)',
    },
    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");&#39;',
        option2: 'w2 = window.new("http://www.w3schools.com");&#39;',
        correctOption: 'w2 = window.open("http://www.w3schools.com");&#39;',
    },
    {
        question: 'JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        correctOption: 'False',
    },
    {
        question: "How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName',
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        option4: 'onmouseover',
        correctOption: 'onclick',
    },
    {
        question: 'How do you declare a JavaScript letiable?',
        option1: 'v carName;',
        option2: 'letiable carName;',
        option3: 'let carName;',
        correctOption: 'let carName;',
    },
{
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<scprit>',
        option2: '<javascript>',
        option3: '<js>',
        option4: '<scripting>',
        correctOption: '<script>',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">',
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        option1: 'False',
        option2: 'True',
        correctOption: 'False',
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");',
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()',
    },
    {
        question: 'How do you call a function named "myFunction"?',
        option1: 'call function myFunction()',
        option2: 'myFunction()',
        option3: 'call myFunction()',
        correctOption: 'myFunction()',
    },
    {
        question: 'How to write an IF statement in JavaScript?',
        option1: 'if i = 5',
        option2: 'if(i == 5)',
        option3: 'if i == 5 then',
        option4: 'if i = 5 then',
        correctOption: 'if(i == 5)',
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)',
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)',
    },
    {
        question: 'How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        option4: 'for (i = 0; i <= 5)',
        correctOption: 'for (i = 0; i <= 5; i++)',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment',
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        option1: 'let colors = "red", "green", "blue"',
        option2: 'let colors = (1:"red", 2:"green", 3:"blue")',
        option3: 'let colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option4: 'let colors = ["red", "green", "blue"]',
        correctOption: 'let colors = ["red", "green", "blue"]',
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        option1: 'round(7.25)',
        option2: 'rnd(7.25)',
        option3: 'Math.rnd(7.25)',
        option4: 'Math.round(7.25)',
        correctOption: 'Math.round(7.25)',
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        option1: 'ceil(x, y)',
        option2: 'top(x, y)',
        option3: 'Math.ceil(x ,y)',
        option4: 'Math.max(x, y)',
        correctOption: 'Math.max(x, y)',
    },
    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        option1: 'w2 = window.open("http://www.w3schools.com");&#39;',
        option2: 'w2 = window.new("http://www.w3schools.com");&#39;',
        correctOption: 'w2 = window.open("http://www.w3schools.com");&#39;',
    },
    {
        question: 'JavaScript is the same as Java.',
        option1: 'True',
        option2: 'False',
        correctOption: 'False',
    },
    {
        question: "How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName',
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        option1: 'onclick',
        option2: 'onmouseclick',
        option3: 'onchange',
        option4: 'onmouseover',
        correctOption: 'onclick',
    },
    {
        question: 'How do you declare a JavaScript letiable?',
        option1: 'v carName;',
        option2: 'letiable carName;',
        option3: 'let carName;',
        correctOption: 'let carName;',
    },
]
var quiz=document.getElementById("quizContainer")
var nextBtn=document.getElementById("nextbtn")
 var currentQuestionIndex=0;
 var score=0;
 function renderQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    quiz.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.option1}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.option2}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.option3}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.option4}</label>
    `;

 }
 function checkAnswer(){
    var radios = document.getElementsByName('answer');
    var selectedAnswer;
    for(var correct of radios){
        if(correct.checked){
            selectedAnswer=correct.value;

    }
}
    if(selectedAnswer===questions[currentQuestionIndex].correctOption){
        score++
    }
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){

        renderQuestion();
    }else{
        showResult();
    }



 }

 function showResult(){
    quiz.innerHTML = '';
    result.innerHTML=`You score ${score} out of ${questions.length}`;
    nextBtn.style.display='none';
 }
 renderQuestion()
 nextBtn.addEventListener('click',checkAnswer);
