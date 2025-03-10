let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let input4 = document.querySelector('#input4');

const dotParentDiv = document.querySelector('.div2');
// const dotDivText1 = document.getElementById('dot-div-text-1');
// const dotDiv1 = document.getElementById('dot-div-1');



const ChangeDivClrs = (function(){
    const changeToRed = (text, dot) => {
        text.style.color = 'red';
        dot.style.backgroundColor = 'red';
    };

    const changeToGreen = (text, dot) => {
        text.style.color = 'green';
        dot.style.backgroundColor = 'green';
    };

    return {
        changeToRed,
        changeToGreen
    }

})();


const validityChecker = (function(){ 
    const arr = [];
    for(let i = 1; i <= 6; i++) {
        let object = {
            text: document.getElementById(`dot-div-text-${i}`),
            dot: document.getElementById(`dot-div-${i}`)
        }
        arr.push(object);
    }

    // allows letters, white space, number, dash and dot, no other special char: for first and last name
    const allowLetterAndDot = (text) => { 
        console.log('text: ' + text.value);
        
        if(text.value === '') {
            text.setCustomValidity("Empty field");
        } else if(text.validity.tooShort) {
            text.setCustomValidity("Minimum required amount of characters: 2. Current input too short.");
        } else if (/^[^?!@#\|&()/$%^_,]+$/gm.test(text.value)) {
            console.log(true);
            text.setCustomValidity("");
        } else {
            console.log(false);
            text.setCustomValidity("Invalid character");
        }
    }

    // allows letters, number, special characters, but no white space: for username
    const usernameChecker = (text) => {
        console.log('text: ' + text.value);
        if(text.value === '') {
            text.setCustomValidity("Empty field");
        } else if(text.validity.tooShort) {
            text.setCustomValidity("Minimum required amount of characters: 6. Current input too short.");
        } else if (/^[^\s]+$/gm.test(text.value)) {
            console.log(true);
            text.setCustomValidity("");
        } else {
            console.log(false);
            text.setCustomValidity("No space between characters.");
        }
        
    }

    // allows letters and white space, no number or special char: for city and province
    const allowOnlyLetter = (text) => { 
        console.log('text: ' + text.value);
        if(text.value === '') {
            text.setCustomValidity("Empty field");
        } else if(text.validity.tooShort) {
            text.setCustomValidity("Minimum required amount of characters: 2. Current input too short.");
        } else if (/^[^?!@|#&(/)$\%.^-_,\d]+$/gm.test(text.value)) {
            console.log(true);
            text.setCustomValidity("");
        } else {
            console.log(false);
            text.setCustomValidity("Invalid character");
        }
    }

    // a pattern: for email
    const emailChecker = (text) => { 
        console.log('text: ' + text.value);
        // console.log(/@[\s]/gm.test(text.value));
        if(text.value === '') {
            text.setCustomValidity("Empty field");
        } else if(/[?!#&()$%^,]/gm.test(text.value)) {
            text.setCustomValidity("Unallowed character.");
        } else if (/^[^\\s][@]/gm.test(text.value)) {
            text.setCustomValidity(`Please enter the part prior to '@' with alphabetical characters, a dot and/or numbers only.`);
        } else if (/^[^@]+$/gm.test(text.value)) {
            text.setCustomValidity(`Your email address is missing an '@'.`);
        } else if (/(?:.*(?:(?:@))){2}/gm.test(text.value)) {
            text.setCustomValidity(`The email address can contain only one '@'.`);
        } else if (/@$/gm.test(text.value)) {
            text.setCustomValidity(`Please enter the part following '@'.`);
        } if (/@\./gm.test(text.value)) {
            text.setCustomValidity(`'.' is in an incorrect position. Please enter characters between '@' and '.'`);
        } else text.setCustomValidity(``);
    }

    const passwordChecker = (text) => {
        // console.log('text: ' + text.value);
        if(text.value === '') text.setCustomValidity("Empty field");

        if(text.validity.tooShort) {
            ChangeDivClrs.changeToRed(arr[0].text, arr[0].dot);
        } else ChangeDivClrs.changeToGreen(arr[0].text, arr[0].dot);

        if(/[a-z]+/gm.test(text.value)) {
            ChangeDivClrs.changeToGreen(arr[1].text, arr[1].dot);
        } else ChangeDivClrs.changeToRed(arr[1].text, arr[1].dot);

        if(/[A-Z]+/gm.test(text.value)) {
            ChangeDivClrs.changeToGreen(arr[2].text, arr[2].dot);
        } else ChangeDivClrs.changeToRed(arr[2].text, arr[2].dot);

        if(/^[^\d]+$/gm.test(text.value)) {
            ChangeDivClrs.changeToRed(arr[3].text, arr[3].dot);
        } else ChangeDivClrs.changeToGreen(arr[3].text, arr[3].dot);

        if(/^[^?!@#\|&()/$%^_,]+$/gm.test(text.value)) {
            ChangeDivClrs.changeToRed(arr[4].text, arr[4].dot);
        } else ChangeDivClrs.changeToGreen(arr[4].text, arr[4].dot);

        if (!(/^[^\s]+$/gm.test(text.value))) {
            ChangeDivClrs.changeToRed(arr[5].text, arr[5].dot);
        } else ChangeDivClrs.changeToGreen(arr[5].text, arr[5].dot);
    }

    return {
        allowOnlyLetter,
        allowLetterAndDot,
        emailChecker,
        usernameChecker,
        passwordChecker
    }
})();

input1.addEventListener('input', () => {
    dotParentDiv.classList.add('show');
    validityChecker.passwordChecker(input1);
});


input2.addEventListener('input', () => {
    validityChecker.usernameChecker(input2);
});

input3.addEventListener('input', () => {
    validityChecker.emailChecker(input3);
});

input4.addEventListener('input', () => {
    validityChecker.allowOnlyLetter(input4);
});


// validityChecker.allowOnlyLetter('onlyletters');
// validityChecker.allowOnlyLetter('Mumbai');
// validityChecker.allowOnlyLetter('New York City');
// validityChecker.allowOnlyLetter('Overijsel?');
// validityChecker.allowOnlyLetter('Overijsel!');
// validityChecker.allowOnlyLetter('Overijsel/');
// validityChecker.allowOnlyLetter('Overijsel8');

// validityChecker.allowLetterAndDot('Zobo 3rd.');
// validityChecker.allowLetterAndDot('Zobo');
// validityChecker.allowLetterAndDot('Zobo Gehi');
// validityChecker.allowLetterAndDot('Zobo-Gehi');
// validityChecker.allowLetterAndDot('Zobo-Gehi Third');

// validityChecker.allowLetterAndDot('5th avenue');
// validityChecker.allowLetterAndDot('brace Radic ul. 30');
// validityChecker.allowLetterAndDot('7-V');

// validityChecker.usernameChecker('Zobo');
// validityChecker.usernameChecker('Zobo Gehi');

// validityChecker.emailChecker('ruby@gmail.com');
// validityChecker.emailChecker('ruby@yahoo.com');
// validityChecker.emailChecker('alliston.ruby@gmail.com');
// validityChecker.emailChecker('alliston.ruby@yahoo.com');
// validityChecker.emailChecker('ruby@dfasdfsa.coadsdsm');
// validityChecker.emailChecker('alliston.ruby@dfasdfsa.coadsdsm');
// validityChecker.emailChecker('hdhfjdfhj@');
// validityChecker.emailChecker('hdhfjdfhj@#');
// validityChecker.emailChecker('hdhfj@#');
// validityChecker.emailChecker('hdhfj@dfhj@');
// validityChecker.emailChecker('sda#das');
// validityChecker.emailChecker('#@');
// validityChecker.emailChecker('#@');

