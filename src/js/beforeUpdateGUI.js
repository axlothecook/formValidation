import '/src/css/style.css';
import warningSignVar from '/src/image/triangle-exclamation-solid.svg';
import roundWarningVar from '/src/image/circle-exclamation-solid.svg';
import greenTickVar from '/src/image/check-solid.svg';

const div = document.getElementById('div');

// class Form {
//     constructor(firstName, lastName, userName, birthday, street, houseNumber, city, zipcode, county, country, telephone, emailSet, emailConfirm, passwordSet, passwordConfirm) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.userName = userName;
//         this.birthday = birthday;
//         this.address = address;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.county = county;
//         this.country = country;
//         this.telephone = telephone;
//         this.emailSet = emailSet;
//         this.emailConfirm = emailConfirm;
//         this.passwordSet = passwordSet;
//         this.passwordConfirm = passwordConfirm;
//     }

const MsgPop = (function() {
    const requiredMsg = () => {
        const warningDiv = document.createElement('div');
        warningDiv.classList.add('warning-div');

            const warningSign = document.createElement('object');
            warningSign.setAttribute('type', 'image/svg+xml');
            warningSign.classList.add('warning-svg');
            warningSign.data = warningSignVar;
            warningDiv.appendChild(warningSign);

            const warningText = document.createElement('h3');
            warningText.classList.add('warning-text');
            warningText.textContent = `Empty Field`;
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

const FormBasicGui = (function() {

    const fullNameDiv = (parent) => {
        /// first and last name
        const firstNameWarning = MsgPop.requiredMsg();
        const lastNameWarning = MsgPop.requiredMsg();

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

                        const greenTick1 = MsgPop.greenTick();

                            const firstNameInput = document.createElement('input');
                            firstNameInput.setAttribute('type', 'text');
                            firstNameInput.setAttribute('id', 'firstName')
                            firstNameInput.name = 'given-name';
                            firstNameInput.required = true;
                            firstNameInput.placeholder = 'Angelica';
                            firstNameInputDiv.appendChild(firstNameInput);

                            firstNameInput.addEventListener('keydown', function() {
                                if (fnameInputContainer.lastChild === firstNameWarning) firstNameWarning.remove();
                            });
                            firstNameInput.addEventListener('keyup', function() {
                                if (firstNameInput.value === '') {
                                    if (firstNameInputDiv.lastChild === greenTick1) greenTick1.remove();
                                    fnameInputContainer.appendChild(firstNameWarning);
                                } else firstNameInputDiv.appendChild(greenTick1); 
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

                        const greenTick2 = MsgPop.greenTick();

                            const lastNameInput = document.createElement('input');
                            lastNameInput.setAttribute('type', 'text');
                            lastNameInput.setAttribute('id', 'lastName');
                            lastNameInput.name = 'family-name';
                            lastNameInput.required = true;
                            lastNameInput.placeholder = 'Demonlord';
                            lastNameInputDiv.appendChild(lastNameInput);

                            lastNameInput.addEventListener('keydown', function() {
                                if(lnameInputContainer.lastChild === lastNameWarning) lastNameWarning.remove();
                            });
                            lastNameInput.addEventListener('keyup', function() {
                                if(lastNameInput.value === '') {
                                    if (lastNameInputDiv.lastChild === greenTick2) greenTick2.remove();
                                    lnameInputContainer.appendChild(lastNameWarning); 
                                } else lastNameInputDiv.appendChild(greenTick2); 
                            });
    
            let object = {
                container: nameContainer,
                firstName: firstNameInput.value,
                lastName: lastNameInput.value
            }

        return object;
    }

    const usernameDiv = (parent) => {
        const userNameRequiredWarning = MsgPop.requiredMsg();
        const usernameTaken = MsgPop.usernameTaken();

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

                        const greenTick = MsgPop.greenTick();
                
                            const userNameInput = document.createElement('input');
                            userNameInput.setAttribute('type', 'text');
                            userNameInput.setAttribute('id', 'userName');
                            userNameInput.name = 'name';
                            userNameInput.required = true;
                            userNameInput.placeholder = 'mattheyddrGnSlyr54';
                            usernameInputDiv.appendChild(userNameInput);

                            userNameInput.addEventListener('keydown', function() {
                                if(usernameInputContainer.lastChild === userNameRequiredWarning) userNameRequiredWarning.remove();
                                if(usernameInputContainer.lastChild === usernameTaken) usernameTaken.remove();
                            });
                            userNameInput.addEventListener('keyup', function() {
                                if(userNameInput.value === '') {
                                    if (usernameInputDiv.lastChild === greenTick) greenTick.remove();
                                    usernameInputContainer.appendChild(userNameRequiredWarning);
                                } else {
                                    if (userNameInput.value === 'testing') {
                                        if (usernameInputDiv.lastChild === greenTick) greenTick.remove();
                                        usernameInputContainer.appendChild(usernameTaken); 
                                    } else usernameInputDiv.appendChild(greenTick); 
                                }
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
            dayInputContainer.classList.add('input-container-w-label', 'bday-w-label');
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
        const streetWarning = MsgPop.requiredMsg();

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

                    const greenTick1 = MsgPop.greenTick();

                        const streetNameInput = document.createElement('input');
                        streetNameInput.setAttribute('type', 'text');
                        streetNameInput.setAttribute('id', 'streetName');
                        streetNameInput.name = 'address';
                        streetNameInput.required = true;
                        streetNameInput.placeholder = '305 Edgemont St.';
                        streetNameInputDiv.appendChild(streetNameInput);
                        
                        streetNameInput.addEventListener('keydown', function() {
                            if(streetInputContainer.lastChild === streetWarning) streetWarning.remove();
                        });
                        streetNameInput.addEventListener('keyup', function() {
                            if(streetNameInput.value === '') {
                                if (streetNameInputDiv.lastChild === greenTick1) greenTick1.remove();
                                streetInputContainer.appendChild(streetWarning); 
                            } else streetNameInputDiv.appendChild(greenTick1); 
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

                    const greenTick2 = MsgPop.greenTick();

                        const houseNInput = document.createElement('input');
                        houseNInput.setAttribute('type', 'text');
                        houseNInput.setAttribute('id', 'houseNumber');
                        houseNInput.name = 'address';
                        houseNInput.placeholder = '66A';
                        houseNInputDiv.appendChild(houseNInput);

                        // houseNInput.addEventListener('keydown', function() {
                        //     if(houseNInputContainer.lastChild === streetWarning) streetWarning.remove();
                        // });
                        houseNInput.addEventListener('keyup', function() {
                            if(houseNInput.value === '') {
                                if (houseNInputDiv.lastChild === greenTick2) greenTick2.remove();
                                // houseNInputContainer.appendChild(streetWarning); 
                            } else houseNInputDiv.appendChild(greenTick2); 
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
        const cityWarning = MsgPop.requiredMsg();
        const zipcodeWarning = MsgPop.requiredMsg();

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

                    const greenTick1 = MsgPop.greenTick();
                    
                        const cityInput = document.createElement('input');
                        cityInput.setAttribute('type', 'text');
                        cityInput.setAttribute('id', 'cityName');
                        cityInput.name = 'city';
                        cityInput.required = true;
                        cityInput.placeholder = 'Moorpark';
                        cityInputDiv.appendChild(cityInput);

                        cityInputDiv.addEventListener('keydown', function() {
                            if(cityInputContainer.lastChild === cityWarning) cityWarning.remove();
                        });
                        cityInputDiv.addEventListener('keyup', function() {
                            if(cityInput.value === '') {
                                if (cityInputDiv.lastChild === greenTick1) greenTick1.remove();
                                cityInputContainer.appendChild(cityWarning); 
                            } else cityInputDiv.appendChild(greenTick1); 
                        });
    
            const zipcodeInputContainer = document.createElement('div');
            zipcodeInputContainer.classList.add('input-container-w-label', 'smaller-div-20');
            wrapper.appendChild(zipcodeInputContainer);

                const zipcodeLabel = document.createElement('label');
                zipcodeLabel.classList.add('smaller-label-text');
                zipcodeLabel.textContent = 'Postal / Zipcode';
                zipcodeInputContainer.appendChild(zipcodeLabel);
                MsgPop.turnStarRedClr(zipcodeLabel);

                    const zipcodenputDiv = document.createElement('div');
                    zipcodenputDiv.classList.add('input-container');
                    zipcodeInputContainer.appendChild(zipcodenputDiv);

                    const greenTick2 = MsgPop.greenTick();

                        const zipcodeInput = document.createElement('input');
                        zipcodeInput.setAttribute('type', 'text');
                        zipcodeInput.name = 'zipcode';
                        zipcodeInput.required = true;
                        zipcodeInput.placeholder = '91706';
                        zipcodenputDiv.appendChild(zipcodeInput);

                        zipcodeInput.addEventListener('keydown', function() {
                            if(zipcodeInputContainer.lastChild === zipcodeWarning) zipcodeWarning.remove();
                        });
                        zipcodeInput.addEventListener('keyup', function() {
                            if(zipcodeInput.value === '') {
                                if (zipcodenputDiv.lastChild === greenTick2) greenTick2.remove();
                                zipcodeInputContainer.appendChild(zipcodeWarning); 
                            } else zipcodenputDiv.appendChild(greenTick2); 
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
        const warning = MsgPop.requiredMsg();

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

                    const greenTick1 = MsgPop.greenTick();

                        const countyInput = document.createElement('input');
                        countyInput.setAttribute('type', 'text');
                        countyInput.setAttribute('id', 'countyName');
                        countyInput.placeholder = 'California';
                        countyInputDiv.appendChild(countyInput);

                        countyInput.addEventListener('keyup', function() {
                            if(countyInput.value === '') {
                                if (countyInputDiv.lastChild === greenTick1) greenTick1.remove();
                            } else countyInputDiv.appendChild(greenTick1); 
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

                const greenTick2 = MsgPop.greenTick();
    
                    const countryInput = document.createElement('input');
                    countryInput.setAttribute('type', 'text');
                    countryInput.setAttribute('id', 'countryName');
                    countryInput.name = 'country';
                    countryInput.required = true;
                    countryInput.placeholder = 'USA';
                    countryInputDiv.appendChild(countryInput);

                    countryInput.addEventListener('keydown', function() {
                        if(countryInputContainer.lastChild === warning) warning.remove();
                    });
                    countryInput.addEventListener('keyup', function() {
                        if(countryInput.value === '') {
                            if (countryInputDiv.lastChild === greenTick2) greenTick2.remove();
                            countryInputContainer.appendChild(warning); 
                        } else countryInputDiv.appendChild(greenTick2); 
                    });
    
            let object = {
                container: countryContainer,
                countyCode: countyInput.value,
                city: countryInput.value
            }

        return object;
    }

    const emailDiv = (parent) => {
        const warning1 = MsgPop.requiredMsg();
        const warning2 = MsgPop.requiredMsg();

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

                    const greenTick1 = MsgPop.greenTick();
        
                        const enterEmailInput = document.createElement('input');
                        enterEmailInput.setAttribute('type', 'text');
                        enterEmailInput.setAttribute('id', 'setEmail');
                        enterEmailInput.setAttribute('inputmode', 'email');
                        enterEmailInput.required = true;
                        enterEmailInput.placeholder = 'oogieboogie@yahoo.com';
                        emailSetInputDiv.appendChild(enterEmailInput);

                        enterEmailInput.addEventListener('keydown', function() {
                            if (emailInputContainer.lastChild === warning1) warning1.remove();
                        });
                        enterEmailInput.addEventListener('keyup', function() {
                            if (enterEmailInput.value === '') {
                                if (emailSetInputDiv.lastChild === greenTick1) greenTick1.remove();
                                emailInputContainer.appendChild(warning1);
                            } else emailSetInputDiv.appendChild(greenTick1); 
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

                    const greenTick2 = MsgPop.greenTick();
        
                        const confirmEmailInput = document.createElement('input');
                        confirmEmailInput.setAttribute('type', 'text');
                        confirmEmailInput.required = true;
                        emailConfirmInputDiv.appendChild(confirmEmailInput);

                        confirmEmailInput.addEventListener('keydown', function() {
                            if (confirmInputContainer.lastChild === warning2) warning2.remove();
                        });
                        confirmEmailInput.addEventListener('keyup', function() {
                            if (confirmEmailInput.value === '') {
                                if (emailConfirmInputDiv.lastChild === greenTick2) greenTick2.remove();
                                confirmInputContainer.appendChild(warning2);
                            } else emailConfirmInputDiv.appendChild(greenTick2); 
                        });
    
            let object = {
                container: emailContainer,
                enterEmail: enterEmailInput.value,
                confirmEmail: confirmEmailInput.value
            }

        return object;
    }

    const passwordDiv = (parent) => {
        const warning1 = MsgPop.requiredMsg();
        const warning2 = MsgPop.requiredMsg();

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
            passwordInputContainer.classList.add('input-container-w-label');
            wrapper.appendChild(passwordInputContainer);

                const createPasswordLabel = document.createElement('label');
                createPasswordLabel.classList.add('smaller-label-text');
                createPasswordLabel.textContent = 'Confirm email';
                passwordInputContainer.appendChild(createPasswordLabel);
                MsgPop.turnStarRedClr(createPasswordLabel);

                    const createPasswordInputDiv = document.createElement('div');
                    createPasswordInputDiv.classList.add('input-container');
                    passwordInputContainer.appendChild(createPasswordInputDiv);

                    const greenTick1 = MsgPop.greenTick();
        
                        const createpasswordInput = document.createElement('input');
                        createpasswordInput.setAttribute('type', 'text');
                        createpasswordInput.required = true;
                        createpasswordInput.placeholder = 'Set password';
                        createPasswordInputDiv.appendChild(createpasswordInput);

                        createpasswordInput.addEventListener('keydown', function() {
                            if (passwordInputContainer.lastChild === warning1) warning1.remove();
                        });
                        createpasswordInput.addEventListener('keyup', function() {
                            if (createpasswordInput.value === '') {
                                if (createPasswordInputDiv.lastChild === greenTick1) greenTick1.remove();
                                passwordInputContainer.appendChild(warning1);
                            } else createPasswordInputDiv.appendChild(greenTick1); 
                        });

            const confirmPasswordContainer = document.createElement('div');
            confirmPasswordContainer.classList.add('input-container-w-label');
            wrapper.appendChild(confirmPasswordContainer);

                const confirmPasswordLabel = document.createElement('label');
                confirmPasswordLabel.classList.add('smaller-label-text');
                confirmPasswordLabel.textContent = 'Confirm email';
                confirmPasswordContainer.appendChild(confirmPasswordLabel);
                MsgPop.turnStarRedClr(confirmPasswordLabel);

                    const confirmPasswordInputDiv = document.createElement('div');
                    confirmPasswordInputDiv.classList.add('input-container');
                    confirmPasswordContainer.appendChild(confirmPasswordInputDiv);

                    const greenTick2 = MsgPop.greenTick();
        
                        const confirmPasswordInput = document.createElement('input');
                        confirmPasswordInput.setAttribute('type', 'text');
                        confirmPasswordInput.required = true;
                        confirmPasswordInput.placeholder = 'Confirm password';
                        confirmPasswordInputDiv.appendChild(confirmPasswordInput);

                        confirmPasswordInput.addEventListener('keydown', function() {
                            if (confirmPasswordContainer.lastChild === warning2) warning2.remove();
                        });
                        confirmPasswordInput.addEventListener('keyup', function() {
                            if (confirmPasswordInput.value === '') {
                                if (confirmPasswordInputDiv.lastChild === greenTick2) greenTick2.remove();
                                confirmPasswordContainer.appendChild(warning2);
                            } else confirmPasswordInputDiv.appendChild(greenTick2); 
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