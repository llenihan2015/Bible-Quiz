const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElements =document.getElementById('quiz-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex
let countAnswers = 0
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    countAnswers = 0
    questionContainerElements.classList.remove('hide')
    setNextQuestion()
    document.getElementById('results').innerHTML= ''
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
    
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1)
    {
        nextButton.classList.remove('hide')
  
    }
    else
    {
        startButton.innerText = 'Try Again'
        startButton.classList.remove('hide')
        questionContainerElements.classList.add('hide')
    }

    if(selectedButton.dataset = correct)
    {
        countAnswers++
    } 

    document.getElementById('results').innerHTML= 'Correct Answers: ' + countAnswers
      
}


function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
    }

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


    const questions = [
    {
        question:'Who were the two friends that told people about Jesus?',
        answers:[
            {text:'Paul & Silas', correct: true},
            {text: 'The Jailer and the other prisoners', correct: false},
            {text: 'The Fortune Teller and her owners', correct: false},
            {text: 'No one', correct: false}
        ],
        
        
    },
    {
        question:'Who did Paul and Silas meet on their way to the place of prayer?',
        answers:[
            {text:'Jesus', correct: false},
            {text: 'A girl who was controlled by an evil spirit', correct: true},
            {text: 'The officials', correct: false},
            {text: 'The Jailer', correct: false}
        ]
    },
    {
        question:'What happened to Paul and Silas?',
        answers:[
            {text:'They were thrown into the Lion'+'\'s'+' Den', correct: false},
            {text: 'They were thrown in Jail', correct: true},
            {text: 'They were swallowed by a Big Fish', correct: false},
            {text: 'They continued to walk', correct: false}
        ]
    },
    {
        question:'What did Paul and Silas do while they were inside the prison?',
        answers:[
            {text:'They went to sleep', correct: false},
            {text: 'They cried', correct: false},
            {text: 'They talked to the other prisoners', correct: false},
            {text: 'They prayed and sing songs to God', correct: true}
        ]
    },
    {
        question:'What happened that caused the chains of the prison cell to fall?',
        answers:[
            {text:'There was an earthquake', correct: true},
            {text: 'There was a flood', correct: false},
            {text: 'There was a storm', correct: false},
            {text: 'There was a strong wind', correct: false}
        ]
    },
    {
        question:'Complete the bible verse: "This is love for God: to ____ his commands. And his commands are not __________. 1 John 5:3',
        answers:[
            {text:'obey; burdensome', correct: true},
            {text: 'praise; encouraging', correct: false},
            {text: 'obey; delightful ', correct: false},
            {text: 'burdensome; obey', correct: false}
        ]
    }
]