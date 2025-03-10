import '/src/css/style.css';
import warningSignVar from '/src/image/triangle-exclamation-solid.svg';
import roundWarningVar from '/src/image/circle-exclamation-solid.svg';
import greenTickVar from '/src/image/check-solid.svg';

const div = document.getElementById('div');

const MsgPop = (function() {
    const requiredMsg = (text) => {
        if(text === '') return '';
        const warningDiv = document.createElement('div');
        warningDiv.classList.add('warning-div');

            const warningSign = document.createElement('object');
            warningSign.setAttribute('type', 'image/svg+xml');
            warningSign.classList.add('warning-svg');
            warningSign.data = warningSignVar;
            warningDiv.appendChild(warningSign);

            const warningText = document.createElement('h3');
            warningText.classList.add('warning-text');
            warningText.textContent = `${text}`;
            warningDiv.appendChild(warningText);

        return warningDiv;
    }

    const roundWarningSign = () => {
        const roundWarning = document.createElement('object');
        roundWarning.setAttribute('data', 'image/svg+xml');
        roundWarning.classList.add('round-warning-svg');
        roundWarning.data = roundWarningVar;
        return roundWarning;
    }

    const incorrectValue = () => {
        const warningDiv = document.createElement('div');
        warningDiv.classList.add('warning-div');

            warningDiv.appendChild(roundWarningSign());

            const warningText = document.createElement('h3');
            warningText.classList.add('warning-text');
            warningText.textContent = `Incorrect value`;
            warningDiv.appendChild(warningText);

        return warningDiv;
    }

    const usernameTaken = () => {
        const warningDiv = document.createElement('div');
        warningDiv.classList.add('warning-div');

            warningDiv.appendChild(roundWarningSign());

            const warningText = document.createElement('h3');
            warningText.classList.add('warning-text');
            warningText.textContent = `Username is taken`;
            warningDiv.appendChild(warningText);

        return warningDiv;
    }

    const greenTick = () => {
        const greenTick = document.createElement('object');
        greenTick.setAttribute('data', 'image/svg+xml');
        greenTick.classList.add('green-tick-svg');
        greenTick.data = greenTickVar;
        return greenTick;
    }

    const turnStarRedClr = (text) => {
        const star = document.createElement('span');
        star.classList.add('red-star');
        star.textContent = '*';
        text.appendChild(star);
    }

    return {
        requiredMsg,
        incorrectValue,
        usernameTaken,
        greenTick,
        turnStarRedClr
    }
})();

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

const ValidationCheck = (function(){ 
    const arr = [];
    for(let i = 1; i <= 6; i++) {
        let object = {
            text: document.getElementById(`dot-div-text-${i}`),
            dot: document.getElementById(`dot-div-${i}`)
        }
        arr.push(object);
    }

    // allows letters, white space, number, dash and dot, no other special char: for first and last name, and street name
    const allowLetterAndDot = (input) => { 
        const msgArr = ['Empty field', 'Minimum required amount of characters: 2. Current input too short', 'Invalid character'];
        if(input.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(input.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if (/^[^?!@#\|&()<>/$%^_,]+$/gm.test(input.value)) {
            return;
        } else return MsgPop.requiredMsg(msgArr[2]);
    }

    // allows letters, number, special characters, but no white space: for username
    const usernameChecker = (text, username) => {
        const msgArr = ['Empty field', 'Minimum required amount of characters: 6. Current input too short', 'No space between characters', `${username} is taken`];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(username === 'testing') {
            return MsgPop.requiredMsg(msgArr[3]);
        } else if (/^[^\s]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg(msgArr[2]);
    }

    // allows letters and white space, no number or special char: for city 
    const forCity = (text) => { 
        const msgArr = ['Empty field', 'Current input too short. Minimum length: 2', 'Invalid character'];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if (/^[^?!@|#&(/)$\<>%.^-_,\d]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg(msgArr[2]);
    }

    // allows letters and white space, no number or special char: for county
    const forCounty = (text) => { 
        const msgArr = ['Current input too short. Minimum length: 2', 'Invalid character'];
        if(text.value === '') { 
            return null;
        } if(text.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if (/^[^?!@|#&(/)$\<>%.^-_,\d]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg(msgArr[1]);
    }

    // allow only letters: for country
    const allowOnlyLetter = (text) => {    
        if(text.value === '') {
            return MsgPop.requiredMsg("Empty field");
        } else if (/^[^?!@|#&()$\<>%.^-_,\d]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg("Only alphabetical characters allowed");
    }

    // allow a few special char, numbers and letters, but no white space: for zipcode
    const forZipcode = (text) => {
        if(text.value === '') {
            return MsgPop.requiredMsg('Empty field');
        } else if (/^[^?!@|#&$\<>%^_,]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg('Invalid character');
    }

    // allow a few special char, numbers and letters, but no white space: for house number
    const forHouseNumber = (text) => {
        if(text.value === '') {
            return null;
        } else if (/^[^?!@|#&$\<>%^_,]+$/gm.test(text.value)) {
            return;
        } else return MsgPop.requiredMsg('Invalid character');
    }

    // for email
    const emailChecker = (text) => { 
        const msgArr = ['Empty field', 'Invalid character', `Please enter the part prior to '@'`, `Your email address is missing an '@'`, `The email address can contain only one '@'`, `Please enter the part following '@'`, `'.' is in an incorrect position. Please enter characters between '@' and '.'`];
        if(text.value === '') { 
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(/[?!#&()$%^,]/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        }  else if (/^[^@]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[3]);
        } else if (!(/[^\s][@]/gm.test(text.value))) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else if (/(?:.*(?:(?:@))){2}/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[4]);
        } else if (/@$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[5]);
        } else if (/@\./gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[6]);
        } else return;
    }
    
    // for password
    const passwordChecker = (text, objectArr) => {
        if(text.value === '') return null;

        if(text.validity.tooShort) {
            ChangeDivClrs.changeToRed(objectArr[0].text, objectArr[0].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[0].text, objectArr[0].dot);

        if(/[a-z]+/gm.test(text.value)) {
            ChangeDivClrs.changeToGreen(objectArr[1].text, objectArr[1].dot);
        } else ChangeDivClrs.changeToRed(objectArr[1].text, objectArr[1].dot);

        if(/[A-Z]+/gm.test(text.value)) {
            ChangeDivClrs.changeToGreen(objectArr[2].text, objectArr[2].dot);
        } else ChangeDivClrs.changeToRed(objectArr[2].text, objectArr[2].dot);

        if(/^[^\d]+$/gm.test(text.value)) {
            ChangeDivClrs.changeToRed(objectArr[3].text, objectArr[3].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[3].text, objectArr[3].dot);

        if(/^[^?!@#\|&()/$%^_,]+$/gm.test(text.value)) {
            ChangeDivClrs.changeToRed(objectArr[4].text, objectArr[4].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[4].text, objectArr[4].dot);

        if (!(/^[^\s]+$/gm.test(text.value))) {
            ChangeDivClrs.changeToRed(objectArr[5].text, objectArr[5].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[5].text, objectArr[5].dot);
    }

    return {
        allowOnlyLetter,
        allowLetterAndDot,
        forCity,
        forCounty,
        forZipcode,
        forHouseNumber,
        emailChecker,
        usernameChecker,
        passwordChecker
    }
})();


const FormBasicGui = (function() {

    const fullNameDiv = (parent) => {
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('info-container', 'name-container');
        parent.appendChild(nameContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            nameContainer.appendChild(labelDivName);
    
                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.textContent = 'Name';
                labelDivName.appendChild(labelName);

            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper-flex-column');
            nameContainer.appendChild(wrapper);

                const fnameInputContainer = document.createElement('div');
                fnameInputContainer.classList.add('input-container-w-label');
                wrapper.appendChild(fnameInputContainer);

                    const fNameLabel = document.createElement('label');
                    fNameLabel.classList.add('smaller-label-text');
                    fNameLabel.setAttribute('for', 'firstName');
                    fNameLabel.textContent = 'First name';
                    fnameInputContainer.appendChild(fNameLabel);
                    MsgPop.turnStarRedClr(fNameLabel);

                        const firstNameInputDiv = document.createElement('div');
                        firstNameInputDiv.classList.add('input-container');
                        fnameInputContainer.appendChild(firstNameInputDiv);

                        const firstNameInput = document.createElement('input');
                        firstNameInput.setAttribute('type', 'text');
                        firstNameInput.setAttribute('id', 'firstName')
                        firstNameInput.minLength = '2';
                        firstNameInput.name = 'given-name';
                        firstNameInput.required = true;
                        firstNameInput.placeholder = 'Angelica';
                        firstNameInputDiv.appendChild(firstNameInput);

                        const greenTick1 = MsgPop.greenTick();
                        var warning1;
                        var temp;

                        firstNameInput.addEventListener('input', () => {
                            warning1 = ValidationCheck.allowLetterAndDot(firstNameInput);
                        });

                        firstNameInput.addEventListener('keyup', () => {
                            if(warning1 === undefined) {
                                if (fnameInputContainer.lastChild === temp) fnameInputContainer.lastChild.remove();
                                firstNameInputDiv.appendChild(greenTick1);
                            } else {
                                if (firstNameInputDiv.lastChild === greenTick1) greenTick1.remove();
                                if (fnameInputContainer.lastChild === temp) fnameInputContainer.lastChild.remove();
                                temp = warning1;
                                fnameInputContainer.appendChild(warning1);
                            };
                        });

                const lnameInputContainer = document.createElement('div');
                lnameInputContainer.classList.add('input-container-w-label');
                wrapper.appendChild(lnameInputContainer);

                    const lastNamelabel = document.createElement('label');
                    lastNamelabel.classList.add('smaller-label-text');
                    lastNamelabel.setAttribute('for', 'lastName');
                    lastNamelabel.textContent = 'Last name';
                    lnameInputContainer.appendChild(lastNamelabel);
                    MsgPop.turnStarRedClr(lastNamelabel);

                        const lastNameInputDiv = document.createElement('div');
                        lastNameInputDiv.classList.add('input-container');
                        lnameInputContainer.appendChild(lastNameInputDiv);

                            const lastNameInput = document.createElement('input');
                            lastNameInput.setAttribute('type', 'text');
                            lastNameInput.setAttribute('id', 'lastName');
                            lastNameInput.minLength = '2';
                            lastNameInput.name = 'family-name';
                            lastNameInput.required = true;
                            lastNameInput.placeholder = 'Demonlord';
                            lastNameInputDiv.appendChild(lastNameInput);

                            const greenTick2 = MsgPop.greenTick();
                            var warning2;
                            var temp2;

                            lastNameInput.addEventListener('input', () => {
                                warning2 = ValidationCheck.allowLetterAndDot(lastNameInput);
                            });

                            lastNameInput.addEventListener('keyup', () => {
                                if(warning2 === undefined) {
                                    if(lnameInputContainer.lastChild === temp2) lnameInputContainer.lastChild.remove();
                                    lastNameInputDiv.appendChild(greenTick2);
                                } else {
                                    if (lastNameInputDiv.lastChild === greenTick2) greenTick1.remove();
                                    if (lnameInputContainer.lastChild === temp2) lnameInputContainer.lastChild.remove();
                                    temp2 = warning2;
                                    lnameInputContainer.appendChild(warning2);
                                };
                            });
    
            let object = {
                container: nameContainer,
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
            }

        return object;
    }

    const usernameDiv = (parent) => {
        const userNameContainer = document.createElement('div');
        userNameContainer.classList.add('info-container', 'username-container');
        parent.appendChild(userNameContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            userNameContainer.appendChild(labelDivName);
    
                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.setAttribute('for', 'userName');
                labelName.textContent = 'Username';
                labelDivName.appendChild(labelName);
                MsgPop.turnStarRedClr(labelName);
    
            const wrapper = document.createElement('div');
            wrapper.classList.add('wrapper-flex-column');
            userNameContainer.appendChild(wrapper);

                const usernameInputContainer = document.createElement('div');
                usernameInputContainer.classList.add('input-container-w-label');
                wrapper.appendChild(usernameInputContainer);

                    const usernameInputDiv = document.createElement('div');
                    usernameInputDiv.classList.add('input-container');
                    usernameInputContainer.appendChild(usernameInputDiv);

                        const userNameInput = document.createElement('input');
                        userNameInput.setAttribute('type', 'text');
                        userNameInput.setAttribute('id', 'userName');
                        userNameInput.minLength = '6';
                        userNameInput.name = 'name';
                        userNameInput.required = true;
                        userNameInput.placeholder = 'mattheyddrGnSlyr54';
                        usernameInputDiv.appendChild(userNameInput);

                        const greenTick = MsgPop.greenTick();
                        var warning;
                        var temp;

                        userNameInput.addEventListener('input', () => {
                            warning = ValidationCheck.usernameChecker(userNameInput, userNameInput.value);
                        });

                        userNameInput.addEventListener('keyup', () => {
                            if(warning === undefined) {
                                if (usernameInputContainer.lastChild === temp) usernameInputContainer.lastChild.remove();
                                usernameInputDiv.appendChild(greenTick);
                            } else {
                                if (usernameInputDiv.lastChild === greenTick) greenTick.remove();
                                if (usernameInputContainer.lastChild === temp) usernameInputContainer.lastChild.remove();
                                temp = warning;
                                usernameInputContainer.appendChild(warning);
                            };
                        });
                            
                
                        let object = {
                            container: userNameContainer,
                            username: userNameInput.value,
                        }

        return object;
    }

    const birthdayDiv = (parent) => {
        const birthdayContainer = document.createElement('div');
        birthdayContainer.classList.add('info-container', 'birthday-container');
        parent.appendChild(birthdayContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            birthdayContainer.appendChild(labelDivName);
    
                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.textContent = 'Birthday';
                labelDivName.appendChild(labelName);
                MsgPop.turnStarRedClr(labelName);
    
        const birthdayInputContainer = document.createElement('div');
        birthdayInputContainer.classList.add('birthday-input-container');
        birthdayContainer.appendChild(birthdayInputContainer);

            const dayInputContainer = document.createElement('div');
            dayInputContainer.classList.add('input-container-w-label');
            birthdayInputContainer.appendChild(dayInputContainer);

            const roundWarning1 = MsgPop.incorrectValue();
    
                const dayInput = document.createElement('select');
                dayInput.setAttribute('inputmode', 'numeric');
                dayInput.required = true;
                dayInputContainer.appendChild(dayInput);
                for (let i = 0; i <= 31; i++) {
                    var dayOption = document.createElement('option');
                    if(i === 0) {
                        dayOption.text = 'DD';
                        dayInput.setAttribute('selected', 'selected');
                    } else {
                        dayOption.value=`day${i}`;
                        dayOption.text = `${i}`;
                    };
                    dayInput.appendChild(dayOption);
                };

                var counterDay = false;
                dayInput.addEventListener('click', function() {
                    if(dayInput.value === 'DD') {
                        (counterDay === true) ? dayInputContainer.appendChild(roundWarning1) : (counterDay = true);
                    } else if (dayInputContainer.lastChild === roundWarning1) roundWarning1.remove();
                });

            const monthInputContainer = document.createElement('div');
            monthInputContainer.classList.add('input-container-w-label');
            birthdayInputContainer.appendChild(monthInputContainer);

            const roundWarning2 = MsgPop.incorrectValue();

            const monthInput = document.createElement('select');
            monthInput.setAttribute('inputmode', 'numeric');
            monthInput.required = true;
            monthInputContainer.appendChild(monthInput);
            for (let i = 0; i <= 12; i++) {
                var monthOption = document.createElement('option');
                if(i === 0) {
                    monthOption.text = 'MM';
                    monthInput.setAttribute('selected', 'selected');
                } else {
                    monthOption.value=`month${i}`;
                    monthOption.text = `${i}`;
                };
                monthInput.appendChild(monthOption);
            };

            var counterMonth = false;
            monthInput.addEventListener('click', function() {
                if(monthInput.value === 'MM') {
                    (counterMonth === true) ? monthInputContainer.appendChild(roundWarning2) : (counterMonth = true);
                } else if (monthInputContainer.lastChild === roundWarning2) roundWarning2.remove();
            });

            const yearInputContainer = document.createElement('div');
            yearInputContainer.classList.add('input-container-w-label');
            birthdayInputContainer.appendChild(yearInputContainer);

            const roundWarning3 = MsgPop.incorrectValue();

            const yearInput = document.createElement('select');
            yearInput.setAttribute('inputmode', 'numeric');
            yearInput.required = true;
            yearInputContainer.appendChild(yearInput);
            for (let i = 1939; i <= 2025; i++) {
                var yearOption = document.createElement('option');
                if(i === 1939) {
                    yearOption.text = 'YYYY';
                    yearInput.setAttribute('selected', 'selected');
                } else {
                    yearOption.value=`year${i}`;
                    yearOption.text = `${i}`;
                };
                yearInput.appendChild(yearOption);
            };

            var counterYear = false;
            yearInput.addEventListener('click', function() {
                if(yearInput.value === 'YYYY') {
                    (counterYear === true) ? yearInputContainer.appendChild(roundWarning3) : (counterYear = true);
                } else if (yearInputContainer.lastChild === roundWarning3) roundWarning3.remove();
            });
    
            let object = {
                container: birthdayContainer,
                dayInput: dayInput.value,
                monthInput: monthInput.value,
                yearInput: yearInput.value
            }

        return object;
    }

    const addressDiv = (parent) => {
        const addressContainer = document.createElement('div');
        addressContainer.classList.add('info-container', 'address-houseN-container');
        parent.appendChild(addressContainer);

        const labelDivName = document.createElement('div');
        labelDivName.classList.add('label-div');
        addressContainer.appendChild(labelDivName);

            const labelName = document.createElement('label');
            labelName.classList.add('label-text');
            labelName.textContent = 'Address';
            labelDivName.appendChild(labelName);

        countyNCountryDiv();
        cityNPostalCodeDiv();
    
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-grid');
        addressContainer.appendChild(wrapper);

            const streetInputContainer = document.createElement('div');
            streetInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
            wrapper.appendChild(streetInputContainer);

                const streetNameLabel = document.createElement('label');
                streetNameLabel.classList.add('smaller-label-text');
                streetNameLabel.setAttribute('for', 'streetName');
                streetNameLabel.textContent = 'Street';
                streetInputContainer.appendChild(streetNameLabel);
                MsgPop.turnStarRedClr(streetNameLabel);

                    const streetNameInputDiv = document.createElement('div');
                    streetNameInputDiv.classList.add('input-container');
                    streetInputContainer.appendChild(streetNameInputDiv);

                        const streetNameInput = document.createElement('input');
                        streetNameInput.setAttribute('type', 'text');
                        streetNameInput.setAttribute('id', 'streetName');
                        streetNameInput.name = 'address';
                        streetNameInput.required = true;
                        streetNameInput.placeholder = '305 Edgemont St.';
                        streetNameInputDiv.appendChild(streetNameInput);
                        
                        const greenTick1 = MsgPop.greenTick();
                        var warning1;
                        var temp;

                        streetNameInput.addEventListener('input', () => {
                            warning1 = ValidationCheck.allowLetterAndDot(streetNameInput);
                        });

                        streetNameInput.addEventListener('keyup', () => {
                            if(warning1 === undefined) {
                                if (streetInputContainer.lastChild === temp) streetInputContainer.lastChild.remove();
                                streetNameInputDiv.appendChild(greenTick1);
                            } else {
                                if (streetNameInputDiv.lastChild === greenTick1) greenTick1.remove();
                                if (streetInputContainer.lastChild === temp) streetInputContainer.lastChild.remove();
                                temp = warning1;
                                streetInputContainer.appendChild(warning1);
                            };
                        });

            const houseNInputContainer = document.createElement('div');
            houseNInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
            wrapper.appendChild(houseNInputContainer);

                const houseNLabel = document.createElement('label');
                houseNLabel.classList.add('smaller-label-text');
                houseNLabel.setAttribute('for', 'houseNumber');
                houseNLabel.textContent = 'House Number';
                houseNInputContainer.appendChild(houseNLabel);

                    const houseNInputDiv = document.createElement('div');
                    houseNInputDiv.classList.add('input-container');
                    houseNInputContainer.appendChild(houseNInputDiv);

                        const houseNInput = document.createElement('input');
                        houseNInput.setAttribute('type', 'text');
                        houseNInput.setAttribute('id', 'houseNumber');
                        houseNInput.name = 'address';
                        houseNInput.placeholder = '66A';
                        houseNInputDiv.appendChild(houseNInput);

                        const greenTick2 = MsgPop.greenTick();
                        var warning2;
                        var temp2;

                        houseNInput.addEventListener('input', () => {
                            warning2 = ValidationCheck.forHouseNumber(houseNInput);
                        });

                        houseNInput.addEventListener('keyup', () => {
                            if(warning2 === null) {
                                if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
                                if (houseNInputDiv.lastChild === greenTick2) greenTick2.remove();
                            } else if(warning2 === undefined) {
                                if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
                                houseNInputDiv.appendChild(greenTick2);
                            } else {
                                if (houseNInputDiv.lastChild === greenTick2) greenTick2.remove();
                                if (houseNInputContainer.lastChild === temp2) houseNInputContainer.lastChild.remove();
                                temp2 = warning2;
                                houseNInputContainer.appendChild(warning2);
                            };
                        });
    
            let object = {
                address: `${streetNameInput.value} ${houseNInput.value}`
            }

        return object;
    }

    const telephoneDiv = (parent) => {
        const telWarning = MsgPop.requiredMsg();

        const telContainer = document.createElement('div');
        telContainer.classList.add('info-container', 'telephone-container');
        parent.appendChild(telContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            telContainer.appendChild(labelDivName);

                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.setAttribute('for', 'phoneNumber');
                labelName.textContent = 'Telephone';
                labelDivName.appendChild(labelName);
                MsgPop.turnStarRedClr(labelName);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-flex-column');
        telContainer.appendChild(wrapper);
    
            const telInputContainer = document.createElement('div');
            telInputContainer.classList.add('input-container-w-label');
            wrapper.appendChild(telInputContainer);

                const telInputDiv = document.createElement('div');
                telInputDiv.classList.add('input-container');
                telInputContainer.appendChild(telInputDiv);

                    const greenTick = MsgPop.greenTick();
                
                        const telInput = document.createElement('input');
                        telInput.setAttribute('type', 'number');
                        telInput.setAttribute('id', 'phoneNumber');
                        telInput.setAttribute('inputmode', 'tel');
                        telInput.name = 'phone';
                        telInput.required = true;
                        telInput.placeholder = '+31 8765 4321';
                        telInputDiv.appendChild(telInput);

                        telInput.addEventListener('keydown', function() {
                            if (telInputContainer.lastChild === telWarning) telWarning.remove();
                        });
                        telInput.addEventListener('keyup', function() {               //add check for non numberic characters
                            if (telInput.value === '') {
                                if (telInputDiv.lastChild === greenTick) greenTick.remove();
                                telInputContainer.appendChild(telWarning);
                            } else telInputDiv.appendChild(greenTick); 
                        });
    
            let object = {
                container: telContainer,
                telephone: telInput.value
            }

        return object;
    }

    const cityNPostalCodeDiv = () => {
        var addressDiv = document.querySelector('.address-houseN-container');

        const cityContainer = document.createElement('div');
        cityContainer.classList.add('info-container', 'city-zipcode-container');
        addressDiv.appendChild(cityContainer);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-grid');
        cityContainer.appendChild(wrapper);
    
            const cityInputContainer = document.createElement('div');
            cityInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
            wrapper.appendChild(cityInputContainer);

                const cityLabel = document.createElement('label');
                cityLabel.classList.add('smaller-label-text');
                cityLabel.setAttribute('for', 'cityName');
                cityLabel.textContent = 'City';
                cityInputContainer.appendChild(cityLabel);
                MsgPop.turnStarRedClr(cityLabel);

                    const cityInputDiv = document.createElement('div');
                    cityInputDiv.classList.add('input-container');
                    cityInputContainer.appendChild(cityInputDiv);
                    
                        const cityInput = document.createElement('input');
                        cityInput.setAttribute('type', 'text');
                        cityInput.setAttribute('id', 'cityName');
                        cityInput.minLength = '2';
                        cityInput.name = 'city';
                        cityInput.required = true;
                        cityInput.placeholder = 'Moorpark';
                        cityInputDiv.appendChild(cityInput);

                        const greenTick1 = MsgPop.greenTick();
                        var warning1;
                        var temp;

                        cityInput.addEventListener('input', () => {
                            warning1 = ValidationCheck.forCity(cityInput);
                        });

                        cityInput.addEventListener('keyup', () => {
                            if(warning1 === undefined) {
                                if (cityInputContainer.lastChild === temp) cityInputContainer.lastChild.remove();
                                cityInputDiv.appendChild(greenTick1);
                            } else {
                                if (cityInputDiv.lastChild === greenTick1) greenTick1.remove();
                                if (cityInputContainer.lastChild === temp) cityInputContainer.lastChild.remove();
                                temp = warning1;
                                cityInputContainer.appendChild(warning1);
                            };
                        });
    
            const zipcodeInputContainer = document.createElement('div');
            zipcodeInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
            wrapper.appendChild(zipcodeInputContainer);

                const zipcodeLabel = document.createElement('label');
                zipcodeLabel.classList.add('smaller-label-text');
                zipcodeLabel.textContent = 'Postal / Zipcode';
                zipcodeInputContainer.appendChild(zipcodeLabel);
                MsgPop.turnStarRedClr(zipcodeLabel);

                    const zipcodeInputDiv = document.createElement('div');
                    zipcodeInputDiv.classList.add('input-container');
                    zipcodeInputContainer.appendChild(zipcodeInputDiv);

                        const zipcodeInput = document.createElement('input');
                        zipcodeInput.setAttribute('type', 'text');
                        zipcodeInput.name = 'zipcode';
                        zipcodeInput.required = true;
                        zipcodeInput.placeholder = '91706';
                        zipcodeInputDiv.appendChild(zipcodeInput);

                        const greenTick2 = MsgPop.greenTick();
                        var warning2;
                        var temp2;

                        zipcodeInput.addEventListener('input', () => {
                            warning2 = ValidationCheck.forZipcode(zipcodeInput);
                        });

                        zipcodeInput.addEventListener('keyup', () => {
                            if(warning2 === undefined) {
                                if (zipcodeInputContainer.lastChild === temp2) zipcodeInputContainer.lastChild.remove();
                                zipcodeInputDiv.appendChild(greenTick2);
                            } else {
                                if (zipcodeInputDiv.lastChild === greenTick2) greenTick2.remove();
                                if (zipcodeInputContainer.lastChild === temp2) zipcodeInputContainer.lastChild.remove();
                                temp2 = warning2;
                                zipcodeInputContainer.appendChild(warning2);
                            };
                        });

    
            let object = {
                container: cityContainer,
                zipCode: zipcodeInput.value,
                city: cityInput.value
            }

        return object;
    }

    const countyNCountryDiv = () => {
        var addressDiv = document.querySelector('.address-houseN-container');

        const countryContainer = document.createElement('div');
        countryContainer.classList.add('info-container', 'county-country-container');
        addressDiv.appendChild(countryContainer);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-grid');
        countryContainer.appendChild(wrapper);
    
            const countyInputContainer = document.createElement('div');
            countyInputContainer.classList.add('input-container-w-label', 'bigger-div-74');
            wrapper.appendChild(countyInputContainer);

                const countyLabel = document.createElement('label');
                countyLabel.classList.add('smaller-label-text');
                countyLabel.setAttribute('for', 'countyName');
                countyLabel.textContent = 'State / County / Province';
                countyInputContainer.appendChild(countyLabel);

                    const countyInputDiv = document.createElement('div');
                    countyInputDiv.classList.add('input-container');
                    countyInputContainer.appendChild(countyInputDiv);

                        const countyInput = document.createElement('input');
                        countyInput.setAttribute('type', 'text');
                        countyInput.setAttribute('id', 'countyName');
                        countyInput.minLength = '2';
                        countyInput.placeholder = 'California';
                        countyInputDiv.appendChild(countyInput);

                        const greenTick1 = MsgPop.greenTick();
                        var warning1;
                        var temp;

                        countyInput.addEventListener('input', () => {
                            warning1 = ValidationCheck.forCounty(countyInput);
                        });

                        countyInput.addEventListener('keyup', () => {
                            if(warning1 === null) {
                                if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                                if (countyInputDiv.lastChild === greenTick1) greenTick1.remove();
                            } else if(warning1 === undefined) {
                                if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                                countyInputDiv.appendChild(greenTick1);
                            } else {
                                if (countyInputDiv.lastChild === greenTick1) greenTick1.remove();
                                if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                                temp = warning1;
                                countyInputContainer.appendChild(warning1);
                            };
                        });

        const countryInputContainer = document.createElement('div');
        countryInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
        wrapper.appendChild(countryInputContainer);

            const countryLabel = document.createElement('label');
            countryLabel.classList.add('smaller-label-text');
            countyLabel.setAttribute('for', 'countryName');
            countryLabel.textContent = 'Country';
            countryInputContainer.appendChild(countryLabel);
            MsgPop.turnStarRedClr(countryLabel);

                const countryInputDiv = document.createElement('div');
                countryInputDiv.classList.add('input-container');
                countryInputContainer.appendChild(countryInputDiv);
    
                    const countryInput = document.createElement('input');
                    countryInput.setAttribute('type', 'text');
                    countryInput.setAttribute('id', 'countryName');
                    countryInput.name = 'country';
                    countryInput.required = true;
                    countryInput.placeholder = 'USA';
                    countryInputDiv.appendChild(countryInput);

                    const greenTick2 = MsgPop.greenTick();
                    var warning2;
                    var temp2;

                    countryInput.addEventListener('input', () => {
                        warning2 = ValidationCheck.allowOnlyLetter(countryInput);
                    });

                    countryInput.addEventListener('keyup', () => {
                        if(warning2 === undefined) {
                            if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
                            countryInputDiv.appendChild(greenTick2);
                        } else {
                            if (countryInputDiv.lastChild === greenTick2) greenTick2.remove();
                            if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
                            temp2 = warning2;
                            countryInputContainer.appendChild(warning2);
                        };
                    });
    
            let object = {
                container: countryContainer,
                countyCode: countyInput.value,
                city: countryInput.value
            }

        return object;
    }

    const emailDiv = (parent) => {
        const emailContainer = document.createElement('div');
        emailContainer.classList.add('info-container', 'email-container');
        parent.appendChild(emailContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            emailContainer.appendChild(labelDivName);
    
                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.textContent = 'Email';
                labelDivName.appendChild(labelName);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-flex-column');
        emailContainer.appendChild(wrapper);
    
            const emailInputContainer = document.createElement('div');
            emailInputContainer.classList.add('input-container-w-label');
            wrapper.appendChild(emailInputContainer);

                const emailSetLabel = document.createElement('label');
                emailSetLabel.classList.add('smaller-label-text');
                emailSetLabel.setAttribute('for', 'setEmail');
                emailSetLabel.textContent = 'Email';
                emailInputContainer.appendChild(emailSetLabel);
                MsgPop.turnStarRedClr(emailSetLabel);

                    const emailSetInputDiv = document.createElement('div');
                    emailSetInputDiv.classList.add('input-container');
                    emailInputContainer.appendChild(emailSetInputDiv);
        
                        const enterEmailInput = document.createElement('input');
                        enterEmailInput.setAttribute('type', 'text');
                        enterEmailInput.setAttribute('id', 'setEmail');
                        enterEmailInput.setAttribute('inputmode', 'email');
                        enterEmailInput.required = true;
                        enterEmailInput.placeholder = 'oogieboogie@yahoo.com';
                        emailSetInputDiv.appendChild(enterEmailInput);

                        const greenTick1 = MsgPop.greenTick();
                        var warning;
                        var temp;

                        enterEmailInput.addEventListener('input', () => {
                            warning = ValidationCheck.emailChecker(enterEmailInput);
                        });

                        enterEmailInput.addEventListener('keyup', () => {
                            if(warning === undefined) {
                                if (emailInputContainer.lastChild === temp) emailInputContainer.lastChild.remove();
                                emailSetInputDiv.appendChild(greenTick1);
                            } else {
                                if (emailSetInputDiv.lastChild === greenTick1) greenTick1.remove();
                                if (emailInputContainer.lastChild === temp) emailInputContainer.lastChild.remove();
                                temp = warning;
                                emailInputContainer.appendChild(warning);
                            };
                        });


            const confirmInputContainer = document.createElement('div');
            confirmInputContainer.classList.add('input-container-w-label');
            wrapper.appendChild(confirmInputContainer);

                const confirmEmailLabel = document.createElement('label');
                confirmEmailLabel.classList.add('smaller-label-text');
                confirmEmailLabel.textContent = 'Confirm email';
                confirmInputContainer.appendChild(confirmEmailLabel);
                MsgPop.turnStarRedClr(confirmEmailLabel);

                    const emailConfirmInputDiv = document.createElement('div');
                    emailConfirmInputDiv.classList.add('input-container');
                    confirmEmailLabel.appendChild(emailConfirmInputDiv);
        
                        const confirmEmailInput = document.createElement('input');
                        confirmEmailInput.setAttribute('type', 'text');
                        confirmEmailInput.classList.add('input-security');
                        confirmEmailInput.required = true;
                        emailConfirmInputDiv.appendChild(confirmEmailInput);

                        const greenTick2 = MsgPop.greenTick();
                        const noMatch = MsgPop.requiredMsg('The emails do not match');

                        confirmEmailInput.addEventListener('input', () => {
                            if(confirmEmailInput.value === enterEmailInput.value) {
                                if (confirmInputContainer.lastChild === noMatch) confirmInputContainer.lastChild.remove();
                                emailConfirmInputDiv.appendChild(greenTick2);
                            } else {
                                if (emailConfirmInputDiv.lastChild === greenTick2) greenTick2.remove();
                                confirmInputContainer.appendChild(noMatch);
                            }
                        });
    
            let object = {
                container: emailContainer,
                enterEmail: enterEmailInput.value,
                confirmEmail: confirmEmailInput.value
            }

        return object;
    }

    const passwordDiv = (parent) => {
        const passwordContainer = document.createElement('div');
        passwordContainer.classList.add('info-container', 'password-container');
        parent.appendChild(passwordContainer);
    
            const labelDivName = document.createElement('div');
            labelDivName.classList.add('label-div');
            passwordContainer.appendChild(labelDivName);
    
                const labelName = document.createElement('label');
                labelName.classList.add('label-text');
                labelName.textContent = 'Password';
                labelDivName.appendChild(labelName);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-flex-column');
        passwordContainer.appendChild(wrapper);
    
            const passwordInputContainer = document.createElement('div');
            passwordInputContainer.classList.add('input-container-w-label', 'grandparent');
            wrapper.appendChild(passwordInputContainer);

                const createPasswordLabel = document.createElement('label');
                createPasswordLabel.classList.add('smaller-label-text');
                createPasswordLabel.textContent = 'Create password';
                passwordInputContainer.appendChild(createPasswordLabel);
                MsgPop.turnStarRedClr(createPasswordLabel);

                    const createPasswordInputDiv = document.createElement('div');
                    createPasswordInputDiv.classList.add('input-container');
                    passwordInputContainer.appendChild(createPasswordInputDiv);
        
                        const createpasswordInput = document.createElement('input');
                        createpasswordInput.setAttribute('type', 'text');
                        createpasswordInput.minLength = '8';
                        createpasswordInput.required = true;
                        createpasswordInput.placeholder = 'Set password';
                        createPasswordInputDiv.appendChild(createpasswordInput);

                        const parentDiv = document.createElement('div');
                        parentDiv.setAttribute('id', 'parent-div');
                        passwordInputContainer.appendChild(parentDiv);

                            const childDiv = document.createElement('div');
                            childDiv.classList.add('child-div');
                            parentDiv.appendChild(childDiv);

                                const objectArr = [];
                                const arrText = ['At least 8 characters', 'At least one lowercase character', 'At least one uppercase character', 'At least one number', 'At least one special character', 'No space between characters']; 
                                for(let i = 0; i < 6; i++) {
                                    const div = document.createElement('div');
                                    div.classList.add('dot-div');
                                    div.setAttribute('id', `dot-div-text-${i}`);
                                    childDiv.appendChild(div);

                                        const dotDiv = document.createElement('div');
                                        dotDiv.classList.add('dot');
                                        dotDiv.setAttribute('id', `dot-div-${i}`);
                                        div.appendChild(dotDiv);

                                            const h3 = document.createElement('h3');
                                            h3.classList.add('child-h3');
                                            h3.textContent = `${arrText[i]}`;
                                            div.appendChild(h3);

                                    let object = {
                                        text: document.getElementById(`dot-div-text-${i}`),
                                        dot: document.getElementById(`dot-div-${i}`)
                                    }
                                    objectArr.push(object);
                                };

                                const warning = MsgPop.requiredMsg('Empty field');
                                var temp;

                                createpasswordInput.addEventListener('input', () => {
                                    childDiv.classList.add('show');
                                    temp = ValidationCheck.passwordChecker(createpasswordInput, objectArr);
                                });

                                createpasswordInput.addEventListener('keyup', () => {
                                    if(temp === null) {
                                        passwordInputContainer.appendChild(warning);
                                    } else {
                                        if (passwordInputContainer.lastChild === warning) passwordInputContainer.lastChild.remove();
                                    };
                                });
                            

            const confirmPasswordContainer = document.createElement('div');
            confirmPasswordContainer.classList.add('input-container-w-label');
            wrapper.appendChild(confirmPasswordContainer);

                const confirmPasswordLabel = document.createElement('label');
                confirmPasswordLabel.classList.add('smaller-label-text');
                confirmPasswordLabel.textContent = 'Confirm password';
                confirmPasswordContainer.appendChild(confirmPasswordLabel);
                MsgPop.turnStarRedClr(confirmPasswordLabel);

                    const confirmPasswordInputDiv = document.createElement('div');
                    confirmPasswordInputDiv.classList.add('input-container');
                    confirmPasswordContainer.appendChild(confirmPasswordInputDiv);
        
                        const confirmPasswordInput = document.createElement('input');
                        confirmPasswordInput.setAttribute('type', 'text');
                        confirmPasswordInput.classList.add('input-security');
                        confirmPasswordInput.required = true;
                        confirmPasswordInput.placeholder = 'Confirm password';
                        confirmPasswordInputDiv.appendChild(confirmPasswordInput);

                        const greenTick = MsgPop.greenTick();
                        const noMatch = MsgPop.requiredMsg('The passwords do not match');

                        confirmPasswordInput.addEventListener('input', () => {
                            if(confirmPasswordInput.value === createpasswordInput.value) {
                                if (confirmPasswordContainer.lastChild === noMatch) confirmPasswordContainer.lastChild.remove();
                                confirmPasswordInputDiv.appendChild(greenTick);
                            } else {
                                if (confirmPasswordInputDiv.lastChild === greenTick) greenTick.remove();
                                confirmPasswordContainer.appendChild(noMatch);
                            };
                        });
    
            let object = {
                container: passwordContainer,
                setPassword: createpasswordInput.value,
                confirmPassword: confirmPasswordInput.value
            }

        return object;
    }

    const basicGUI = () => {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'wrapper');
        div.appendChild(wrapper);

        const formTitleDiv = document.createElement('div');
        formTitleDiv.setAttribute('id', 'form-title-div');
        wrapper.appendChild(formTitleDiv);

            const formTitle = document.createElement('h1');
            formTitle.setAttribute('id', 'form-title');
            formTitle.textContent = 'Create Account!';
            formTitleDiv.appendChild(formTitle);

        const content = document.createElement('div');
        content.setAttribute('id', 'content');
        wrapper.appendChild(content);

            const form = document.createElement('form');
            form.autocomplete = 'on';
            form.setAttribute('id', 'form');
            content.appendChild(form);

                fullNameDiv(form);
                usernameDiv(form);
                birthdayDiv(form);
                addressDiv(form);
                telephoneDiv(form);
                emailDiv(form);
                passwordDiv(form);

                const submitBtndiv = document.createElement('div');
                submitBtndiv.setAttribute('id', 'submit-btn-div');
                form.appendChild(submitBtndiv);

                    const submitBtn = document.createElement('button');
                    submitBtn.setAttribute('id', 'submit-btn');
                    submitBtn.textContent = 'SUBMIT';
                    submitBtndiv.appendChild(submitBtn);
                    submitBtn.addEventListener('click', function() {
                        // trigger();
                    });

        return wrapper;

    };

    return { basicGUI }

})();

window.addEventListener('onload', FormBasicGui.basicGUI()); 