function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for( let i = 0; i<choices.length; i++){
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" +i, choices[i]);
            showProgress();
        }
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
            populate();
    }
};

function showProgress(){
    var currentQuestionNum = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNum + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Which of these is not one of the four main concepts of OOP?", ["Abstraction", "Inheritance", "Polymorphism", "Architecture", "Encapsulation"], "Architecture"),
    new Question("Which language does React work with most commonly?", ["C#", "C++", "Python", "Javascript"], "Javascript"),
    new Question("What was introduced in ES6 with Javascript?", ["Classes", "Objects", "Properties", "Constructor functions"], "Classes"),
    new Question("Which one is not an object oriented programming language?", ["Java", "C++", "C", "C#"], "C"),
    new Question("What server is commonly used with React?", ["Apache", "Node", "WSGI", "JVM"], "Node")
];

var quiz = new Quiz(questions);

populate();
