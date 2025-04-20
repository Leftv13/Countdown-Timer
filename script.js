// Selectors
const timerInput = document.getElementById('timerInput');
const container = document.getElementById("container");
const timeDisplay = document.getElementById('timeDisplay');
const inputBtn = document.getElementById('inputBtn');


//regEx
const timerRegex = /^[0-9]{1,3}$/;

//Validation
let inputValidation = false;

inputBtn.disabled = true;

//Regex function

timerInput.addEventListener('input', e => {
    inputValidation = timerRegex.test(e.target.value);
    const information = document.querySelector('.information'); 
   
    if (inputValidation) {
        timerInput.classList.add('correct');
        timerInput.classList.remove('incorrect');
        information.classList.remove('show-info');
        inputBtn.disabled = false;
    } else {
        timerInput.classList.add('incorrect');
        timerInput.classList.remove('correct');
        information.classList.add('show-info'); 
        inputBtn.disabled = true; 
    }
});

// Timer function
inputBtn.addEventListener('click', e => {
    e.preventDefault(); 

    let timeLeft = parseInt(timerInput.value, ); 

    const timer = setInterval(() => {
        timeDisplay.innerHTML = `Time Left: ${timeLeft} Seconds!`; 
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer); 
            alert("The timer has reached 0! Thank you for testing this app, I hope you have a good day :)");
        }
    }, 1000); 
});
