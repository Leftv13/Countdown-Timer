// Selectors
const timerInput = document.getElementById('timerInput');
const container = document.getElementById("container");
const timeDisplay = document.getElementById('timeDisplay');
const inputBtn = document.getElementById('inputBtn');
const bomb = document.querySelector(`.bContainer`);


//regEx
const timerRegex = /^[0-9]{1,2}$/;

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
// // Timer function v1
// inputBtn.addEventListener('click', e => {
//     e.preventDefault(); 

//     let timeLeft = (timerInput.value ); 

//     const timer = setInterval(() => {
//         timeDisplay.innerHTML = `Time Left: ${timeLeft} Seconds!`; 
//         timeLeft--;

//         if (timeLeft < 0) {
//             clearInterval(timer); 
//             alert("The timer has reached 0! Thank you for testing this app, I hope you have a good day :)");
//         }
//     }, 1000); 
// });


// Timer function v2

let timeLeft;
let timer;

const timerFunc = () => {
    
        timeDisplay.innerHTML = `Time Left: ${timeLeft} Seconds!`;
        
        timeLeft = timeLeft - 1 ;

   

          if (timeLeft < 0){
            clearInterval(timer);
            alert(`The timer has reached 0! Thank you for testing this app :)`);
            //bomb.classList.remove(`hold`)
            //bomb.classList.add(`explode`);
            timerInput.disabled = false;
            inputBtn.disabled = false;
          } else if (timeLeft > 60){
            alert(`The time limit is 60! Converting.. `)
            timeLeft = 60;
          }
          


       
};

inputBtn.addEventListener('click', e => {
    e.preventDefault();
    inputBtn.disabled = true;
    timerInput.disabled = true;
    timeLeft = timerInput.value;
    timer = setInterval(timerFunc,1000)
});

console.log(bomb);



