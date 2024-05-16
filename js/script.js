// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

let currentQuetionIndex=0;
let score=0;

function createOptions(){
    
    const optionList=questions[currentQuetionIndex].options;
    const options= document.getElementById('answer-list');
     options.innerHTML='';
    optionList.forEach(element => {     
        
        const radioLabel = document.createElement("li"); 
        radioLabel.id=element;
        radioLabel.style.marginBottom='0px';

        const option_radio=document.createElement('input');
        option_radio.type='radio';
        option_radio.id='options';
        option_radio.name="options";
        option_radio.value=element;

        const option_label=document.createElement('label')
        option_label.textContent=element;
        option_label.style.marginLeft='20px';

        radioLabel.appendChild(option_radio);
        radioLabel.appendChild(option_label);
        options.appendChild(radioLabel);
        options.appendChild(document.createElement("br"));

    });
}

function getSelectedOption(){
    const options =document.getElementsByName('options');
    let selectedValue = null;
    for (var i = 0; i < options.length; i++) {
        if (options[i].type === 'radio' && options[i].checked) {
            // get value, set checked flag or do whatever you need to
            selectedValue = options[i].value;       
        }
    }
    return selectedValue;
}

const quetion = document.getElementById('question');

function loadQuestion() {
    // Load the first question and load subsequent question from this function
    quetion.textContent=questions[currentQuetionIndex].text;
    createOptions();

}

const submitButton=document.getElementById('submit');

submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
   const selectedOption =getSelectedOption();
   let answerIdx=questions[currentQuetionIndex].correct;
   const correctAnswer = questions[currentQuetionIndex].options[answerIdx]

   const radio=document.getElementById(correctAnswer);
   
    if(selectedOption!=null){
        if(selectedOption===correctAnswer)
        {
            ++score;
        }
        radio.style.backgroundColor='green';
        submitButton.style.display='none';
        nextButton.style.display='inline';
    }
    else{
        alert("Please select an answer!");
    }



});

const nextButton=document.getElementById('next');
nextButton.style.display='none';

nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well
    if(currentQuetionIndex<questions.length-1){
        ++currentQuetionIndex;
        loadQuestion();
    }else{
        currentQuetionIndex=0;
        loadQuestion();
        alert( `Quiz finished! Your score is: ${score}/10`);     
    }
    nextButton.style.display='none';
    submitButton.style.display='inline';

});

// Load the first question on startup
loadQuestion();