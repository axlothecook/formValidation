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
        const msgArr = ['Empty field', 'Minimum required amount of characters: 2. Current input too short', 'Only [Aa - Zz] and dash allowed', 'Maximum limit reached (50)', 'Name needs to include at least one alphabetical character'];
        if(input.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(input.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(input.value.length === 51) {
            return MsgPop.requiredMsg(msgArr[3]);
        } else if(/^[^[a-zA-Z]+$/gm.test(input.value)) {
            return MsgPop.requiredMsg(msgArr[4]);
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.]/gm.test(input.value)) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    // allows letters, number, dashes, but no white space: for username
    const usernameChecker = (text) => {
        const msgArr = ['Empty field', 'Minimum required amount of characters: 6. Current input too short', 'Only [Aa - Zz], [0 - 9] and dash allowed', `${text.value} is taken`, 'Maximum limit reached (20)', 'Username needs to include at least one alphabetical character'];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.validity.tooShort) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(text.value.length === 21) {
            return MsgPop.requiredMsg(msgArr[4]);
        } else if(/^[^[a-zA-Z]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[5]);
        } else if(text.value === 'testing') {
            return MsgPop.requiredMsg(msgArr[3]);
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    const bdayEmpty = {
        bdayArr: [
            {
                'date': false,
                'input': null
            },
            {
                'date': false,
                'input': null
            },
            {
                'date': false,
                'input': null
            }
        ],

        checkBdayInput() {
            this.bdayArr.forEach(obj => {
                (obj.date === false) ? obj.input.setCustomValidity('Please fill out this field.') : obj.input.setCustomValidity('');
            });
        },

        checkDateValidity() {
            let date = `${this.bdayArr[1].input.value}/${this.bdayArr[0].input.value}/${this.bdayArr[2].input.value}`;
            console.log(date);
            if (/^[^a-zA-z]+$/gm.test(date)) {
                // let check = new Date(date);
                if(isNaN(new Date(date))) {
                    console.log('invalid date');
                } else {
                    console.log('valid date');
                }
                console.log(date);
            };
        }
    }

    // allows only numbers and + character, but no white space: for telephone
    const forTelephone = (input) => {
        const msgArr = ['Empty field', `Maximum characters limit exceeded`, `Missing '+' character in front of the number`, 'Invalid character', 'Must include at least one numberical character', `Dial code ${input.value} does not exist`];
        if(input.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if((input.value.length > 1) && input.hasAttribute('id')) {
            var dialcodes = APIcalls.dialCodeList();
            if(!dialcodes.includes(input.value)) return MsgPop.requiredMsg(msgArr[5]);
        } else if (input.hasAttribute('id')) {
            if(!(/^[+\d\s]+$/gm.test(input.value))) return MsgPop.requiredMsg(msgArr[3]);
            if(/^[^+]+$/gm.test(input.value)) return MsgPop.requiredMsg(msgArr[2]);
            if(/^[^\d]+$/gm.test(input.value)) return MsgPop.requiredMsg(msgArr[4]);
            if((input.value.length === 7)) return MsgPop.requiredMsg(msgArr[1]);
        } else if (!(/^[\d]+$/gm.test(input.value))) {
            return MsgPop.requiredMsg(msgArr[3]);
        } else if(input.value.length > 3) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else return;
    }

    // allows letters and white space, no number or special char: for county
    const forCounty = (text) => { 
        const msgArr = [`Country ${text.value} does not exist`, 'Only alphabetical characters allowed', 'Maximum characters limit exceeded (30)'];
        if(text.value === '') { 
            return null;
        } else if(text.value.length > 1) {
            var stateArr = APIcalls.statesList();
            if(!validateWord(stateArr, text)) return MsgPop.requiredMsg(msgArr[0]);
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,\d.]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(text.value.length === 31) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    // allow only letters: for country
    const forCountry = (text) => {    
        const msgArr = ['Empty field', 'Only alphabetical characters allowed', 'Maximum characters limit exceeded (30)', `Country ${text.value} does not exist`];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.value.length > 1) {
            var countryArr = APIcalls.countryList();
            if(!validateWord(countryArr, text)) return MsgPop.requiredMsg(msgArr[3]);
        } else if(/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.\d]/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(text.value.length === 31) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    // allow only letters: for city
    const forCity = (text) => {    
        const msgArr = ['Empty field', 'Only alphabetical characters allowed', 'Maximum characters limit exceeded (30)', `City ${text.value} does not exist`];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.value.length > 1) {
            var cityArr = APIcalls.cityList();
            if(!validateWord(cityArr, text)) return MsgPop.requiredMsg(msgArr[3]);
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.\d]/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(text.value.length === 31) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    const validateWord = (arr, word) => {
        var temp;
        for(let i=0; i < arr.length; i++) {
            if(arr[i].substr(0, word.value.length).toLowerCase() === word.value.toLowerCase()) {
                temp = true;
                break;
            } else temp = false;
        };
        return temp;
    }

    // allow a few special char, numbers and letters, but no white space: for zipcode
    const forZipcode = (text) => {
        const msgArr = ['Empty field', `Only [Aa-Zz], [0-9], and dash allowed`, 'Maximum characters limit exceeded (10)'];
        if(text.value === '') {
            return MsgPop.requiredMsg(msgArr[0]);
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        }  else if(text.value.length === 11) {
            return MsgPop.requiredMsg(msgArr[2]);
        } else return;
    }

    // allow a few special char, numbers and letters, but no white space: for house number
    const forHouseNumber = (text) => {
        if(text.value === '') {
            return null;
        } else if (/[|\\\/*?!@#$%\]^&(){}()_;:[<>'"~`+=,.]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg('Only [Aa-Zz], [0-9] and dash allowed');
        } else if(text.value.length === 6) {
            return MsgPop.requiredMsg('Maximum characters limit exceeded (5)');
        } else return;
    }

    // for email
    const emailChecker = (text) => { 
        const msgArr = ['Empty field', 'Invalid character', `Please enter the part prior to '@'`, `Your email address is missing an '@'`, `The email address can contain only one '@'`, `Please enter the part following '@'`, `'.' is in an incorrect position. Please enter characters between '@' and '.'`, 'Email needs to include at least one alphabetical character', `Maximum characters limit exceeded (30)`];
        if(text.value === '') { 
            return MsgPop.requiredMsg(msgArr[0]);
        } else if(text.value.length === 31) {
            return MsgPop.requiredMsg(msgArr[8]);
        } else if(/[|\\\/*?!#$%\]^&(){}();:[<>'"~`+=,]/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[1]);
        } else if(/^[^[a-zA-Z]+$/gm.test(text.value)) {
            return MsgPop.requiredMsg(msgArr[7]);
        } else if (/^[^@]+$/gm.test(text.value)) {
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

        if(/^[^?!@#&%^_,.]+$/gm.test(text.value)) {
            ChangeDivClrs.changeToRed(objectArr[4].text, objectArr[4].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[4].text, objectArr[4].dot);

        if (!(/^[^\s]+$/gm.test(text.value))) {
            ChangeDivClrs.changeToRed(objectArr[5].text, objectArr[5].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[5].text, objectArr[5].dot);

        if (!(/^[^|\\\/*$%\](){}();:[<>'"~`+=]+$/gm.test(text.value))) {
            ChangeDivClrs.changeToRed(objectArr[6].text, objectArr[6].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[6].text, objectArr[6].dot);

        if (text.value.length > 10) {
            ChangeDivClrs.changeToRed(objectArr[7].text, objectArr[7].dot);
        } else ChangeDivClrs.changeToGreen(objectArr[7].text, objectArr[7].dot);
    }

    //for password confirmation
    const passwordConfirmChecker = (text) => {
        if(text.value === '') return null;

        if(text.validity.tooShort) {
            return false;
        } else if(/[^a-z]+$/gm.test(text.value)) {
            return false;
        } else if(/[A-Z]+/gm.test(text.value)) {
            return false;
        } else if(/^[^\d]+$/gm.test(text.value)) {
            return false;
        } else if(/^[^?!@#&%^_,.]+$/gm.test(text.value)) {
            return false;
        } else if (!(/^[^\s]+$/gm.test(text.value))) {
            return false;
        } else if (!(/^[^|\\\/*$%\](){}();:[<>'"~`+=]+$/gm.test(text.value))) {
            return false;
        } else if (text.value.length > 10) {
            return false;
        } else true;
    }

    return {
        allowLetterAndDot,
        forCountry,
        forCity,
        bdayEmpty,
        forTelephone,
        forCounty,
        forZipcode,
        forHouseNumber,
        emailChecker,
        usernameChecker,
        passwordChecker,
        passwordConfirmChecker
    }
})();

const APIcalls = (function(){
    var countryNames = [];
    var counties = [];
    var cityNames = [];
    var dialcodes = [];

    const fetchData = async () => {
        const countryArr = await fetch('https://restcountries.com/v3.1/all');
        const countryData = await countryArr.json();
    
        countryNames = countryData.map(country => { return country.name.common; });
    }
    
    fetchData();
    
    const onInputChanges = (parent, input, func, word, inputDiv, inputDivParent) => {
        removeDropdown(word);
        if(input.toLowerCase() === '') return;

        var array = [];
        (word === 'country') ? (array = countryNames) : (word === 'city') ? (array = cityNames) : array = counties;
    
        const filteredArr = [];
    
        array.forEach(name => {
            if(name.substr(0, input.length).toLowerCase() === input.toLowerCase()) {
                filteredArr.push(name);
            };
        });
    
        addDropdown(parent, filteredArr, func, word, inputDiv, inputDivParent);
    }
    
    const addDropdown = (parent, arr, func, word, input, inputDivParent) => {
        const ul = document.createElement('ul');
        ul.className = 'autocomplete-list';
        ul.id = `autocomplete-${word}-list`;
        parent.appendChild(ul);
    
        arr.forEach(name => {
            const li = document.createElement('li');
            ul.appendChild(li);
    
            const button = document.createElement('button');
            button.textContent = name;
            li.appendChild(button);
            button.addEventListener('click', (e) => {
                func(input, e, word);
                if (input.nextElementSibling === null) inputDivParent.appendChild(MsgPop.greenTick());
            });
        });
    };
    
    const removeDropdown = (word) => {
        var list = document.querySelector(`#autocomplete-${word}-list`);
        if (list) list.remove();
    }
    
    const selectCountry = (input, e, word) => {
        e.preventDefault();
        input.value = e.target.textContent;
        removeDropdown(word);
        fetchCitiesForSpecificCountry(e.target.textContent);
        fetchDialCodeForSpecificCountry(e.target.textContent);
        fetchCountiesForSpecificCountry(e.target.textContent);
    }
    
    const selectCity = (input, e, word) => {
        e.preventDefault();
        input.value = e.target.textContent;
        removeDropdown(word);
    }
    
    const selectCounty = (input, e, word) => {
        e.preventDefault();
        input.value = e.target.textContent;
        removeDropdown(word);
    }
    
    
    const fetchCitiesForSpecificCountry = async (country) => {
        await checker({"country": country}, 'https://countriesnow.space/api/v0.1/countries/cities')
        .then(response => {
            console.log('Data fetched for cities!');
            cityNames = response.data;
        })
        .catch(err => {
            console.log('Error: ', err.message);
            cityNames = '';
            return;
        });
    }
    
    const fetchDialCodeForSpecificCountry = async (country) => {
        const inputTel = document.querySelector('#phoneNumber');
        await checker({"country": country}, 'https://countriesnow.space/api/v0.1/countries/codes')
        .then(response => {
            console.log('Data fetched for dialcode!');
            inputTel.value = `${response.data.dial_code}`;
        })
        .catch(err => {
            console.log('Error: ', err.message);
            inputTel.textContent = '';
        });
    }

    const fetchAllDialcodes = async () => {
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/codes');
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            };
            const dataVar = await response.json();
            dialcodes = dataVar.data.map(item => { return item.dial_code; });
        } catch(err) {
            console.log('Error:', err.message);
            throw err;
        }
    }
    
    const fetchCountiesForSpecificCountry = async (country) => {
        await checker({"country": country}, 'https://countriesnow.space/api/v0.1/countries/states')
        .then(response => {
            console.log('Data fetched for states!');
            counties = response.data.states.map(object => { return object.name });
        })
        .catch(err => {
            console.log('Error: ', err.message);
            counties = '';
            return;
        });
    }
    
    const checker = async (object, url) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify(object);
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
    
        return await fetch(url, requestOptions)
        .then(response => {
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            };
            return response.json();
        })
        .catch(err => {
            throw err;
        });
    }

    fetchAllDialcodes();

    const countryList = () => { return countryNames; };
    const statesList = () => { return counties; };
    const cityList = () => { return cityNames; };
    const dialCodeList = () => { return dialcodes; };

    return { 
        onInputChanges,
        selectCountry,
        selectCity,
        selectCounty,
        dialCodeList,
        countryList,
        statesList,
        cityList
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
                        firstNameInput.maxLength = '51';
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
                            lastNameInput.maxLength = '51';
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
                        userNameInput.maxLength = '21';
                        userNameInput.name = 'name';
                        userNameInput.required = true;
                        userNameInput.placeholder = 'mattheyddrGnSlyr54';
                        usernameInputDiv.appendChild(userNameInput);

                        const greenTick = MsgPop.greenTick();
                        var warning;
                        var temp;

                        userNameInput.addEventListener('input', () => {
                            warning = ValidationCheck.usernameChecker(userNameInput);
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
            dayInputContainer.classList.add('input-container-w-label', 'day-input-container');
            birthdayInputContainer.appendChild(dayInputContainer);

                const dayInput = document.createElement('select');
                dayInput.setAttribute('inputmode', 'numeric');
                dayInput.setAttribute('id', 'bdayinputday');
                dayInput.required = true;
                dayInputContainer.appendChild(dayInput);
                for (let i = 0; i <= 31; i++) {
                    var dayOption = document.createElement('option');
                    if(i === 0) {
                        dayOption.text = 'DD';
                        dayInput.setAttribute('selected', 'selected');
                    } else {
                        dayOption.value= i;
                        dayOption.text = `${i}`;
                    };
                    dayInput.appendChild(dayOption);
                };
                
                const roundWarning1 = MsgPop.incorrectValue();
                var counterDay = false;
                dayInput.addEventListener('click', function() {
                    dayInput.setCustomValidity('');
                    if(dayInput.value === 'DD') {
                        ValidationCheck.bdayEmpty.bdayArr[0].date = false;
                        (counterDay === true) ? dayInputContainer.appendChild(roundWarning1) : (counterDay = true);
                        ValidationCheck.bdayEmpty.checkDateValidity();
                    } else {
                        if (dayInputContainer.lastChild === roundWarning1) roundWarning1.remove();
                        ValidationCheck.bdayEmpty.bdayArr[0].date = true;
                        ValidationCheck.bdayEmpty.checkDateValidity();
                    };
                });
                ValidationCheck.bdayEmpty.bdayArr[0].input = dayInput;


            const monthInputContainer = document.createElement('div');
            monthInputContainer.classList.add('input-container-w-label');
            birthdayInputContainer.appendChild(monthInputContainer);

            const monthInput = document.createElement('select');
            monthInput.setAttribute('inputmode', 'numeric');
            monthInput.setAttribute('id', 'bdayinputmonth');
            monthInput.required = true;
            monthInputContainer.appendChild(monthInput);
            for (let i = 0; i <= 12; i++) {
                var monthOption = document.createElement('option');
                if(i === 0) {
                    monthOption.text = 'MM';
                    monthInput.setAttribute('selected', 'selected');
                } else {
                    monthOption.value= i;
                    monthOption.text = `${i}`;
                };
                monthInput.appendChild(monthOption);
            };

            const roundWarning2 = MsgPop.incorrectValue();
            var counterMonth = false;
            monthInput.addEventListener('click', function() {
                monthInput.setCustomValidity('');
                if(monthInput.value === 'MM') {
                    ValidationCheck.bdayEmpty.bdayArr[1].date = false;
                    (counterMonth === true) ? monthInputContainer.appendChild(roundWarning2) : (counterMonth = true);
                    ValidationCheck.bdayEmpty.checkDateValidity();
                } else {
                    if (monthInputContainer.lastChild === roundWarning2) roundWarning2.remove();
                    ValidationCheck.bdayEmpty.bdayArr[1].date = true;
                    ValidationCheck.bdayEmpty.checkDateValidity();
                };
            });
            ValidationCheck.bdayEmpty.bdayArr[1].input = monthInput;


            const yearInputContainer = document.createElement('div');
            yearInputContainer.classList.add('input-container-w-label');
            birthdayInputContainer.appendChild(yearInputContainer);

            const yearInput = document.createElement('select');
            yearInput.setAttribute('inputmode', 'numeric');
            yearInput.setAttribute('id', 'bdayinputyear');
            yearInput.required = true;
            yearInputContainer.appendChild(yearInput);
            for (let i = 1939; i <= 2025; i++) {
                var yearOption = document.createElement('option');
                if(i === 1939) {
                    yearOption.text = 'YYYY';
                    yearInput.setAttribute('selected', 'selected');
                } else {
                    yearOption.value= i;
                    yearOption.text = `${i}`;
                };
                yearInput.appendChild(yearOption);
            };

            const roundWarning3 = MsgPop.incorrectValue();
            var counterYear = false;
            yearInput.addEventListener('click', function() {
                yearInput.setCustomValidity('');
                if(yearInput.value === 'YYYY') {
                    ValidationCheck.bdayEmpty.bdayArr[2].date = false;
                    (counterYear === true) ? yearInputContainer.appendChild(roundWarning3) : (counterYear = true);
                    ValidationCheck.bdayEmpty.checkDateValidity();
                } else {
                    if (yearInputContainer.lastChild === roundWarning3) roundWarning3.remove();
                    ValidationCheck.bdayEmpty.bdayArr[2].date = true;
                    ValidationCheck.bdayEmpty.checkDateValidity();
                };
            });
            ValidationCheck.bdayEmpty.bdayArr[2].input = yearInput;
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
                        streetNameInput.maxLength = '31';
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
                        houseNInput.maxLength = '6';
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
    }

    const telephoneDiv = (parent) => { //fix verification
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
                telInputDiv.classList.add('input-container', 'tel-input-div');
                telInputContainer.appendChild(telInputDiv);
                
                        const telInput1 = document.createElement('input');
                        telInput1.setAttribute('id', 'phoneNumber');
                        const telInput2 = document.createElement('input');
                        const telInput3 = document.createElement('input');
                        const telInput4 = document.createElement('input');
                        const tempArr = [
                            {
                                'div': telInput1,
                                'placeH': '+31'
                            }, 
                            {
                                'div': telInput2,
                                'placeH': '000'
                            }, 
                            {
                                'div': telInput3,
                                'placeH': '000'
                            },
                            {
                                'div': telInput4,
                                'placeH': '000'
                            }
                        ];
                        const greenTick = MsgPop.greenTick();
                        var warning;
                        var temp;

                        for(let i = 0; i < tempArr.length; i++) {
                            tempArr[i].div.type = 'text';
                            tempArr[i].div.classList.add('tel-input');
                            tempArr[i].div.setAttribute('inputmode', 'tel');
                            tempArr[i].div.maxLength = '4';
                            if (i === 0) tempArr[0].div.maxLength = '7';
                            tempArr[i].div.name = 'phone';
                            tempArr[i].div.required = true;
                            tempArr[i].div.placeholder = `${tempArr[i].placeH}`
                            telInputDiv.appendChild(tempArr[i].div);

                            tempArr[i].div.addEventListener('input', () => {
                                warning = ValidationCheck.forTelephone(tempArr[i].div);
                                if (telInputDiv.lastChild === warning) warning.remove();
                            });

                            tempArr[i].div.addEventListener('keyup', () => {    
                                if(warning === undefined) {
                                    if (telInputContainer.lastChild === temp) telInputContainer.lastChild.remove();
                                } else {
                                    if (telInputDiv.lastChild === greenTick) greenTick.remove();
                                    if (telInputContainer.lastChild === temp) telInputContainer.lastChild.remove();
                                    temp = warning;
                                    telInputContainer.appendChild(warning);
                                };
                                // var temp;
                                tempArr.map(item => {
                                    // console.log(item);
                                    console.log(item.div.value);
                                    if(item.div.value) {
                                        // temp = true;
                                    } 
                                    // else temp =  false;
                                }) 
                                // console.log(temp);
                                // if(!(temp.includes(false))) setTimeout(() => telInputDiv.appendChild(greenTick), 2000);
                            });

                        }
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
                        cityInput.maxLength = '31';
                        cityInput.name = 'city';
                        cityInput.required = true;
                        cityInput.placeholder = 'Moorpark';
                        cityInputDiv.appendChild(cityInput);

                        var warning1;
                        var temp;

                        cityInput.addEventListener('input', (e) => {
                            if(cityInput.nextElementSibling !== null) cityInput.nextElementSibling.remove();
                            warning1 = ValidationCheck.forCity(cityInput);
                            APIcalls.onInputChanges(cityInputDiv, e.target.value, APIcalls.selectCity, 'city', cityInput, cityInputDiv);
                        });

                        cityInput.addEventListener('keyup', () => {
                            if(warning1 === undefined) {
                                if (cityInputContainer.lastChild === temp) cityInputContainer.lastChild.remove();
                            } else {
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
                        zipcodeInput.maxLength = '11';
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
    }

    const countyNCountryDiv = () => {
        var addressDiv = document.querySelector('.address-houseN-container');

        const countryContainer = document.createElement('div');
        countryContainer.classList.add('info-container', 'county-country-container');
        addressDiv.appendChild(countryContainer);

        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper-flex-column');
        countryContainer.appendChild(wrapper);

        const countryInputContainer = document.createElement('div');
        countryInputContainer.classList.add('input-container-w-label');
        wrapper.appendChild(countryInputContainer);

            const countryLabel = document.createElement('label');
            countryLabel.classList.add('smaller-label-text');
            countryLabel.setAttribute('for', 'countryName');
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
                    countryInput.maxLength = '31';
                    countryInput.required = true;
                    countryInput.placeholder = 'USA';
                    countryInputDiv.appendChild(countryInput);

                    var warning2;
                    var temp2;

                    countryInput.addEventListener('input', (e) => {
                        if(countryInput.nextElementSibling !== null) countryInput.nextElementSibling.remove();
                        warning2 = ValidationCheck.forCountry(countryInput);
                        APIcalls.onInputChanges(countryInputDiv, e.target.value, APIcalls.selectCountry, 'country', countryInput, countryInputDiv);
                    });

                    countryInput.addEventListener('keyup', () => {
                        if(warning2 === undefined) {
                            if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
                        } else {
                            if (countryInputContainer.lastChild === temp2) countryInputContainer.lastChild.remove();
                            temp2 = warning2;
                            countryInputContainer.appendChild(warning2);
                        };
                    });

        const countyInputContainer = document.createElement('div');
        countyInputContainer.classList.add('input-container-w-label');
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
                    countyInput.maxLength = '31';
                    countyInput.placeholder = 'California';
                    countyInputDiv.appendChild(countyInput);

                    var warning1;
                    var temp;

                    countyInput.addEventListener('input', (e) => {
                        if(countyInput.nextElementSibling !== null) countyInput.nextElementSibling.remove();
                        warning1 = ValidationCheck.forCounty(countyInput);
                        APIcalls.onInputChanges(countyInputDiv, e.target.value, APIcalls.selectCounty, 'county', countyInput, countyInputDiv);
                    });

                    countyInput.addEventListener('keyup', () => {
                        if(warning1 === null) {
                            if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                        } else if(warning1 === undefined) {
                            if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                        } else {
                            if (countyInputContainer.lastChild === temp) countyInputContainer.lastChild.remove();
                            temp = warning1;
                            countyInputContainer.appendChild(warning1);
                        };
                    });
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
                        enterEmailInput.maxLength = '31';
                        enterEmailInput.placeholder = 'oogieboogie@yahoo.com';
                        emailSetInputDiv.appendChild(enterEmailInput);

                        const greenTick1 = MsgPop.greenTick();
                        var warning;
                        var temp;

                        enterEmailInput.addEventListener('input', () => {
                            warning = ValidationCheck.emailChecker(enterEmailInput);
                            if(confirmEmailInput.value.length !== 0) confirmEmailInput.value = '';
                            if (confirmInputContainer.lastChild === noMatch) confirmInputContainer.lastChild.remove();
                            if (emailConfirmInputDiv.lastChild === greenTick2) greenTick2.remove();
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
                        confirmEmailInput.maxLength = '31';
                        emailConfirmInputDiv.appendChild(confirmEmailInput);

                        const greenTick2 = MsgPop.greenTick();
                        const noMatch = MsgPop.requiredMsg('The emails do not match');
                        var warning2;

                        confirmEmailInput.addEventListener('input', () => {
                            warning2 = ValidationCheck.emailChecker(confirmEmailInput);
                            console.log('warning for confirm email:');
                            console.log(warning2.textContent);
                            if(enterEmailInput.value.length !== 0) {
                                if(confirmEmailInput.value === enterEmailInput.value) {
                                    if (confirmInputContainer.lastChild === noMatch) confirmInputContainer.lastChild.remove();
                                    emailConfirmInputDiv.appendChild(greenTick2);
                                } else {
                                    if (emailConfirmInputDiv.lastChild === greenTick2) greenTick2.remove();
                                    confirmInputContainer.appendChild(noMatch);
                                }
                            }
                        });
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
                        createpasswordInput.maxLength = '11';
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
                                const arrText = ['At least 8 characters', 'At least one lowercase character', 'At least one uppercase character', 'At least one number', 'At least one special character', 'No space between characters', 'Invalid character', 'Maximum character limit reached (10)']; 
                                for(let i = 0; i < 8; i++) {
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
                                    if(confirmPasswordInput.value.length !== 0) confirmPasswordInput.value = '';
                                    if (confirmPasswordContainer.lastChild === noMatch) confirmPasswordContainer.lastChild.remove();
                                    if (confirmPasswordInputDiv.lastChild === greenTick) greenTick.remove();
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
                        confirmPasswordInput.maxLength = '11';
                        confirmPasswordInput.placeholder = 'Confirm password';
                        confirmPasswordInputDiv.appendChild(confirmPasswordInput);

                        const greenTick = MsgPop.greenTick();
                        const noMatch = MsgPop.requiredMsg('The passwords do not match');
                        var warning2;

                        confirmPasswordInput.addEventListener('input', () => {
                            warning2 = ValidationCheck.passwordConfirmChecker(confirmPasswordInput);
                            console.log('warning for confirm password:');
                            console.log(warning2);
                            if(createpasswordInput.value.length !== 0) {
                                if(confirmPasswordInput.value === createpasswordInput.value) {
                                    if (confirmPasswordContainer.lastChild === noMatch) confirmPasswordContainer.lastChild.remove();
                                    confirmPasswordInputDiv.appendChild(greenTick);
                                } else {
                                    if (confirmPasswordInputDiv.lastChild === greenTick) greenTick.remove();
                                    confirmPasswordContainer.appendChild(noMatch);
                                };
                            }
                        });
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
            form.autocomplete = 'off';
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
                        ValidationCheck.bdayEmpty.checkBdayInput();
                    });

        return wrapper;

    };

    return { basicGUI }

})();

window.addEventListener('onload', FormBasicGui.basicGUI()); 