// Array containing quiz questions and their details
const quizData = [
    // 1st object / question
    {
        question: 'A pediatric nurse is performing a routine assessment of a one-month-old infant during a well-baby visit at the primary care clini The infant’s mother reports no concerns and states that the baby has been feeding well and has had regular bowel movements.  Upon assessment, which of the following findings warrants further investigation by the nurse?',
        a: 'Abdominal respirations',
        b: 'Irregular breathing rate',
        c: 'Inspiratory grunt',
        d: 'Increased heart rate with crying',
        correctAnswer: 'c'
    },
    // 2nd object / question
    {
        question: 'The nurse educates individuals on the risk factors for developing hypertension during a community health fair. Which of the following individuals are at the MOST significant risk for developing hypertension?',
        a: 'A 45-year-old African-American attorney with a family history of hypertension, who has a sedentary lifestyle and consumes a diet high in sodium.',
        b: 'A 60-year-old Asian-American shop owner with a BMI of 28, who has well-managed type 2 diabetes and engages in regular physical activity.',
        c: 'A 40-year-old Caucasian nurse who is a vegetarian, has a healthy BMI, and is a non-smoker but reports high levels of work-related stress.',
        d: 'A 55-year-old Hispanic teacher who smokes occasionally, has a healthy BMI, and participates in a moderate-intensity exercise program.',
        correctAnswer: 'a'
    },
    // 3rd object / question
    {
        question: `A 15-year-old female with a history of depression is rushed to the emergency department after ingesting 15 tablets of maximum-strength acetaminophen 45 minutes ago in a suicide attempt. The patient’s vital signs are stable, but she is visibly anxious and tearful. The healthcare provider has written several orders to manage the situation. Which of the following orders should the nurse prioritize and carry out first?`,
        a: 'Perform gastric lavage',
        b: 'Administer acetylcysteine (Mucomyst) orally',
        c: 'Start an IV with Dextrose 5% and 0.33% normal saline',
        d: 'Have the patient drink activated charcoal mixed with water',
        correctAnswer: 'b' 
    }, 
    // 4th object / question
     {
        question: 'A 68-year-old male with a history of hypertension and diabetes has undergone a cardiac catheterization to evaluate potential coronary artery disease. He has a known allergy to iodine-based contrast agents, which required premedication with corticosteroids and antihistamines. The procedure was successful, but the patient experienced brief hypotension during the administration of the contrast material. The patient has been transferred to the cardiac step-down unit for observation, and the nurse is aware of the potential complications that can arise in the initial 24 hours post-procedure. Which complication should the nurse monitor closely during this period?',
        a: 'Persistent angina despite being at rest and receiving nitroglycerin',
        b: 'Thrombus formation leading to decreased peripheral pulses and cyanosis',
        c: 'Dizziness accompanied by a sudden drop in blood pressure when standing',
        d: 'Gradual decrease in blood pressure with no other symptoms',
        correctAnswer: 'b'
     } ,
     // 5th object / question
     {
        question: 'A 43-year-old male with a history of recurrent renal calculi is admitted to the emergency department presenting with severe left flank pain radiating to the groin, nausea, and an episode of vomiting. He also reports burning and urgency during urination. His vital signs reveal a temperature of 100.8ºF (38.2ºC), blood pressure of 145/90 mmHg, pulse of 100 beats/min, and respiratory rate of 20 breaths/min. The client is visibly anxious and uncomfortable due to the severity of the pain. The nurse is assigned to care for the patient and must prioritize the nursing goals to ensure optimal care. Which nursing goal should be the top priority for this client?',
        a: 'Maintain fluid and electrolyte balance',
        b: 'Control nausea',
        c: 'Manage Pain',
        d: 'Prevent urinary tract infection ',
        correctAnswer: 'c'
     },
     // 6th object / question
     {
        question: 'What would the nurse expect to see while assessing the growth of children during their school-age years?',
        a: 'Decreasing amounts of body fat and muscle mass',
        b: 'Little change in body appearance from year to year',
        c: 'Progressive height increase of 4 inches each year',
        d: 'Yearly weight gain of about 5.5 pounds per year',
        correctAnswer: 'd'
     },
     // 7th object / question
     {
        question: 'At a community health fair, the blood pressure of a 62-year-old client is 160/96 mmHg. The client states “My blood pressure is usually much lower.” The nurse should tell the client to:',
        a: ' Go get a blood pressure check within the next 15 minutes',
        b: 'Check blood pressure again in two (2) months',
        c: 'See the healthcare provider immediately',
        d: 'Visit the health care provider within one (1) week for a BP check',
        correctAnswer: 'a'
     },
     // 8th object / question
     {
        question: 'The hospital has sounded the call for a disaster drill on the evening shift. Which of these clients would the nurse put first on the list to be discharged in order to make a room available for a new admission?',
        a: 'A middle-aged client with a history of being ventilator dependent for over seven (7) years and admitted with bacterial pneumonia five days ago.',
        b: 'A young adult with diabetes mellitus Type 2 for over ten (10) years and admitted with antibiotic-induced diarrhea 24 hours ago.',
        c: 'An elderly client with a history of hypertension, hypercholesterolemia, and lupus, and was admitted with Stevens-Johnson syndrome that morning.',
        d: 'An adolescent with a positive HIV test and admitted for acute cellulitis of the lower leg 48 hours ago.',
        correctAnswer: 'a'
     },
     // 9th object / question
     {
        question: 'A 25-year-old male client has been newly diagnosed with hypothyroidism and will take levothyroxine (Synthroid) 50 mcg/day by mouth. As part of the teaching plan, the nurse emphasizes that this medication:',
        a: 'Should be taken in the morning',
        b: "May decrease the client's energy level",
        c: 'Must be stored in a dark container',
        d: "Will decrease client's heart rate ",
        correctAnswer: 'a'
     },
     // 10th object / question
     {
        question: 'A 3-year-old child was brought to the pediatric clinic after the sudden onset of findings that include irritability, thick muffled voice, croaking on inspiration, hot to touch, sit leaning forward, tongue protruding, drooling, and suprasternal retractions. What should the nurse do first?',
        a: 'Prepare the child for X-ray of upper airways',
        b: "Examine the child's throat",
        c: 'Collect a sputum specimen',
        d: "Notify the healthcare provider of the child's status",
        correctAnswer: 'd'
     }
]

// Elements from the HTML document
const answersEl = document.querySelectorAll('.answer'); // Select all radio button elements
const quizEl = document.getElementById('quiz'); // Select the quiz element
const questionEl = document.getElementById('question'); // Select the element for displaying the question
const a_answer = document.getElementById('a_answer'); // Select the element for displaying option A
const b_answer = document.getElementById('b_answer'); // Select the element for displaying option B
const c_answer = document.getElementById('c_answer'); // Select the element for displaying option C
const d_answer = document.getElementById('d_answer'); // Select the element for displaying option D
const submitEl = document.getElementById('submit'); // Select the submit button element

// Variables to keep track of the current quiz and score
let currentQuiz = 0;
let score = 0;

// Load the quiz when the page is loaded or when the quiz is reset
loadQuiz();

// Function to load the quiz questions and options
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]; // Get the data for the current quiz

    // Update the question and answer options in the HTML
    questionEl.textContent = currentQuizData.question;
    a_answer.textContent = currentQuizData.a;
    b_answer.textContent = currentQuizData.b;
    c_answer.textContent = currentQuizData.c;
    d_answer.textContent = currentQuizData.d;

    deselectAnswers(); // Clear any previously selected answers
}

// Function to get the selected answer
function getSelected() {
    let answer = undefined;

    // Check each answer option to see if it is selected
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// Function to clear all selected answers
function deselectAnswers() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// Event listener for the submit button
submitEl.addEventListener("click", () => {
    const answer = getSelected(); // Get the selected answer

    if (answer) {
        if (answer === quizData[currentQuiz].correctAnswer) {
            score++; // Increase the score if the answer is correct
        }

        currentQuiz++; // Move to the next quiz

        if (currentQuiz < quizData.length) {
            loadQuiz(); // Load the next quiz
        } else {
            // Display the final score and reset button when all quizzes are completed
            quizEl.innerHTML = `<h4>You answered correctly at ${score}/${quizData.length} questions.</h4>
            <button onclick="location.reload()">Reset</button>
            `;
        }
    }
});