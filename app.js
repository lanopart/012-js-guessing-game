// [/]generate random any numbers from 1-20
// keep record of attempts
// check input if lower or higher
// check input if === numberOfTheDay

const generateRandomNumber = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};


const attempts = [];
const allowedAttempts = 3;
const sessionNumber = generateRandomNumber(1, 20);

const onSubmitHandler = (event) => {
    event.preventDefault();

    if (attempts.length >= allowedAttempts) {
        attempts.splice(0, allowedAttempts);
    }

    const input = document.getElementById('input-field');
    attempts.push(input.value);

    const indicators = document.querySelector('.indicators');   
    const value = Number(input.value);
    if (value === sessionNumber) {
        indicators.innerText = 'Good Job!', 'color: red';
    }
    if (value > sessionNumber) {
        indicators.innerText = 'Too High!';
    }
    if (value < sessionNumber) {
        indicators.innerText = 'Too Low!';
    }

    const attemptsDiv = document.querySelector('.attempts-counter');    
    attemptsDiv.innerText = `${allowedAttempts - attempts.length} attempt/s left`;
};