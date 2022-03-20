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
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"]
    },
    {
        number: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: ["Common Style Sheet", "Colorful Style Sheet", "Computer Style Sheet", "Cascading Style Sheet"]
    },
    {
        number: 3,
        question: "AAAAAAAAAAAAAAAAAAAAAA?",
        answer: "AAAAAAAAAAAAAAAAAAAAAA",
        options: ["AAAAAAAAAAAAAAAAAAAAAA", "AAAAAAAAAAAAAAAAAAAAAA", "AAAAAAAAAAAAAAAAAAAAAA", "AAAAAAAAAAAAAAAAAAAAAA"]
    },
    {
        number: 4,
        question: "BBBBBBBBBBBBBBBBBBBBB?",
        answer: "BBBBBBBBBBBBBBBBBBBBB",
        options: ["BBBBBBBBBBBBBBBBBBBBB", "BBBBBBBBBBBBBBBBBBBBB", "BBBBBBBBBBBBBBBBBBBBB", "BBBBBBBBBBBBBBBBBBBBB"]
    },
    {
        number: 5,
        question: "CCCCCCCCCCCCCCCCCCCCC?",
        answer: "CCCCCCCCCCCCCCCCCCCCC",
        options: ["CCCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCCC", "CCCCCCCCCCCCCCCCCCCCC"]
    },
    {
        number: 6,
        question: "DDDDDDDDDDDDDDDDDDDDD?",
        answer: "DDDDDDDDDDDDDDDDDDDDD",
        options: ["DDDDDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDDDDD", "DDDDDDDDDDDDDDDDDDDDD"]
    },
    {
        number: 7,
        question: "EEEEEEEEEEEEEEEEEEEEE?",
        answer: "EEEEEEEEEEEEEEEEEEEEE",
        options: ["EEEEEEEEEEEEEEEEEEEEE", "EEEEEEEEEEEEEEEEEEEEE", "EEEEEEEEEEEEEEEEEEEEE", "EEEEEEEEEEEEEEEEEEEEE"]
    },
    {
        number: 8,
        question: "FFFFFFFFFFFFFFFFFFFFF?",
        answer: "FFFFFFFFFFFFFFFFFFFFF",
        options: ["FFFFFFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFF", "FFFFFFFFFFFFFFFFFFFFF"]
    },
    {
        number: 9,
        question: "GGGGGGGGGGGGGGGGGGGGG?",
        answer: "GGGGGGGGGGGGGGGGGGGGG",
        options: ["GGGGGGGGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGGGGGGGG", "GGGGGGGGGGGGGGGGGGGGG"]
    },
    {
        number: 10,
        question: "HHHHHHHHHHHHHHHHHHHHH?",
        answer: "HHHHHHHHHHHHHHHHHHHHH",
        options: ["HHHHHHHHHHHHHHHHHHHHH", "HHHHHHHHHHHHHHHHHHHHH", "HHHHHHHHHHHHHHHHHHHHH", "HHHHHHHHHHHHHHHHHHHHH"]
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











