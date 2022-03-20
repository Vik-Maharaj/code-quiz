// declared variables
var start_btn = document.querySelector(".start_btn button");
var info_box = document.querySelector(".info_box");
var exit_btn = document.querySelector(".buttons .quit");
var continue_btn = document.querySelector(".buttons .restart");
var quiz_box = document.querySelector(".quiz_box");


// questions and answers section
let questions = [
    {
        number: 1,
        question: "Which company created JavaScript?",
        answer: "Netscape",
        options: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"]
    },
    {
        number: 2,
        question: "Who wrote JavaScript?",
        answer: "Brendan Eich",
        options: ["Brendan Eich", "Bill Gates", "Steve Jobs", "Marc Benioff"]
    },
    {
        number: 3,
        question: "What was the orignal name for JavaScript?",
        answer: "Mocha",
        options: ["Latte", "Mocha", "CScript", "BBscript"]
    },
    {
        number: 4,
        question: "How long did it take to write the orignal JavaScript?",
        answer: "10 days",
        options: ["10 days", "2 weeks", "2 months", "10 months"]
    },
    {
        number: 5,
        question: "JavaScript is a ____-side programming language?",
        answer: "Both",
        options: ["Client", "Server", "Both", "None"]
    },
    {
        number: 6,
        question: "Which of the following is NOT a reserved word in JavaScript?",
        answer: "undefined",
        options: ["default", "finally", "throw", "undefined"]
    },
    {
        number: 7,
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answer: "default",
        options: ["catch", "label", "try", "default"]
    },
    {
        number: 8,
        question: "Which of the following type of variable is visible only within a function where it is defined?",
        answer: "local variable",
        options: ["global variable", "local variable", "both of the above", "none of the above"]
    },
    {
        number: 9,
        question: "Which of the following function of a string object returns the calling string value converted to upper case while respecting the current locale?",
        answer: "toLocaleUpperCase()",
        options: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"]
    },
    {
        number: 10,
        question: "Which of the following function of an array object removes the first element from an array and returns that element?",
        answer: "shift()",
        options: ["reverse()", "shift()", "slice()", "some()"]
    },
];






// when START QUIZ button is clicked
start_btn.onclick = function() {
    info_box.classList.add("active");
}

// when EXIT QUIZ button is clicked
exit_btn.onclick = function() {
    info_box.classList.remove("active");
}

// when CONTINUE button is clicked
continue_btn.onclick = function() {
    info_box.classList.remove("active");
    quiz_box.classList.add("active");
    showQuestions(0);
}


let question_count = 0;

const next_btn = document.querySelector(".next_btn");


// when NEXT button clicked
next_btn.onclick = function() {
    if (question_count < questions.length - 1) {
        question_count++;
        showQuestions(question_count);
    }
    else {
        console.log("Questions completed");
    }
}



// retriveing questions and answers from questions and answers section
function showQuestions(index) {
    const question_text = document.querySelector(".question_text");
    const option_list = document.querySelector(".option_list");
    let question_tag = '<span>' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>' 
                    + '<div class="option">' + questions[index].options[1] + '<span></span></div>' 
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>' 
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    question_text.innerHTML = question_tag;
    option_list.innerHTML = option_tag;
}











