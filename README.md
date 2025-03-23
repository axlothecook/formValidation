# forms

## What is forms?
Forms is a practice project where I play around with creating a registration form, API fetching, async & await, different validations & different warnings on input fields and submiting the form. The original task was to practice on name, email and password inputs, but I believe I took it too far.

# FAQ
## ***How do you employ APIs?***
I'm using [Postman API](https://documenter.getpostman.com/view/1134062/T1LJjU52) to fetch all available countries, then based on selected one, counties, cities and dial code are fetched. 
## ***Do you employ any frameworks or Tailwind?***
No not yet, I still have to learn them.

## ***How are you validating inputs?***
+ If the fetched country dial code was edited, I fetch all dial codes of all countries. That list is then parsed throught and compares the newly edited dial code to all dial codes it sotres. If it finds a dial code matching the new one, there's no error, otherwise warning shows.
+ For this one and all other inputs I'm using Regex to filter for any characters that are/aren't alphabetical, numberical, white space, special ones, etc. and show warnings whether they do or don't appear.
Every input also has maximum allowed character limited, and some have minimum character limit too.
+ On submit button, there are three validations. They all prevent data submission if they aren't true (valid):  
    (1) All input fields need to have some input.  
    (2) A custom function ensures birthday selection dropdowns have inputs too  
    (3) All required fields need to have a green tick (be true), and if optional fields have input, they need a tick too. If there are any errors (be false), including optional fields, the form won't be submitted. If optional fields are empty, but all required fields have the green tick, the form will be submitted.

## ***How is project scalability?***
The focus of this project was to gain experience with forms, fetching data and validations, so scalability was not in mind. The project poorly scales down on screens smaller than 1200px width.

## Any notes on improvement for next time?
+ Finish logic first, then build GUI around it
+ use classes over id for css
+ use id over classes for fetching an element

# Demo video
[![ssss](https://github.com/user-attachments/assets/95d3d5a0-5e72-4362-bf7b-e5c1fbc81ba2)](https://youtu.be/pg-GD2zO77I)
