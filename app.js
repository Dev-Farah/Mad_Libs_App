"use strict";

let userInputs = [];

// Declaring Total number of Questions and counter
let numberOfQuestions = 12;
let questionCounter = 0;

// All unique questions
let questionArray = [
    "Enter a name",
    "Enter a noun(thing)",
    "Enter a name",
    "Enter a verb(action)",
    "Enter a name",
    "Enter a color",
    "Enter a City(state)",
    "Enter a verb(action)",
    "Enter a verb(action)",
    "Enter a verb(action)",
    "Enter a noun",
    "Enter a food",
    "Enter a name of school"
];

for (let i = numberOfQuestions; i >= 0; i--) {
    // console.log(i);
    // console.log(questionCounter);
    // console.log(questionArray[questionCounter]);
    console.log(questionArray[questionCounter] + `; (${numberOfQuestions} questions left)`);
    userInputs.push(prompt(questionArray[questionCounter] + `; (${numberOfQuestions} questions left)`));
    console.log(userInputs.slice(-1));
    questionCounter++;
    numberOfQuestions--;
}

for (let i = 0; i < questionArray.length; i++) {
    if (userInputs[i] === "") {
        userInputs[i] = "the user didn't write anything";
    }
}

alert("All done! Ready for your totally-accurate, not-at-all confusing story of " + userInputs.slice(0, 1) + "?");

let originalStory = `<section><div><h1>All About Me</h1><h2>Hi! My name is <u>${userInputs[0]}</u> and I have a 
    secret to share with you. I'm a normal child by day, and a <u>${userInputs[1]}</u> by night.
    Only you and my best friend <u>${userInputs[2]}</u> knows my secret. You may be wondering
    how this happened? Well, one night I was <u>${userInputs[3]}</u>
    at home, and then BOOM! The lights went out and <u>${userInputs[4]}</u> showed up.
    He/she said in a booming voice, because your favorite color is <u>${userInputs[5]}</u>
    you have been chosen to be a <u>${userInputs[1]}</u> My mission is to save the people of
    <u>${userInputs[6]}</u> by doing my favorite things: <u>${userInputs[7]}</u>,
    <u>${userInputs[8]}</u> and <u>${userInputs[9]}</u>.
    This may sound easy, but it is no walk in the park. It requires hard work and
    <u>${userInputs[10]}</u>. My weakness is eating <u>${userInputs[11]}</u>.
    They are gross!! Keep that away from me! I save the world every night. But when I wake up in the
    morning, I go back to my normal life at <u>${userInputs[12]}</u> School!</h2></div></section>`;

console.log(originalStory);
document.write(originalStory);


// Hi! My name is Sam and I have a secret to share
// with you. I'm a normal child by day, and a Superman by night.
// Only you and my best friend Jack knows my secret. You may be wondering
// how this happened? Well, one night I was doing my homework
// at home, and then BOOM! The lights went out and Filly the fairy showed up.
// He/she said in a booming voice, because your favorite color is blue
// you have been chosen to be a Superman My mission is to save the people of
// New York City by doing my favorite things: flying,
// running and jumping.
// This may sound easy, but it is no walk in the park. It requires hard work and
// dedication. My weakness is eating noodles.
// They are gross!! Keep that away from me! I save the world every night. But when I wake up in the
// morning, I go back to my normal life at New York City School!
