"use strict";

let userInputs = [];

let originalStory = `Hi! My name is ${userInputs[0]} and I have a secret to share
    with you. I'm a normal child by day, and a ${userInputs[1]} by night.
    Only you and my best friend ${userInputs[2]} knows my secret. You may be wondering
    how this happened? Well, one night I was ${userInputs[3]}
    at home, and then BOOM! The lights went out and ${userInputs[4]} showed up.
    He/she said in a booming voice, because your favorite color is ${userInputs[5]}
    you have been chosen to be a ${userInputs[1]} My mission is to save the people of
    ${userInputs[6]} by doing my favorite things: ${userInputs[7]},
    ${userInputs[8]} and ${userInputs[9]}.
    This may sound easy, but it is no walk in the park. It requires hard work and
    ${userInputs[10]}. My weakness is eating ${userInputs[11]}.
    They are gross!! Keep that away from me! I save the world every night. But when I wake up in the
    morning, I go back to my normal life at ${userInputs[12]} School!`;

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

alert("All done! Ready for your totally-accurate, not-at-all confusing story about " + userInputs.slice(0, 1) + "?");



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
