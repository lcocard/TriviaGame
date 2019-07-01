//$.fn.trivia = function () {
var thisvalue = this;
var questionsArr = [""];
var choicesArr = [""];
var thisvalue = this;
thisvalue.userPick = null;
thisvalue.answers = {
    correct: 0,
    incorrect: 0
};
thisvalue.count = 30;
thisvalue.current = 0;
thisvalue.questions = [{
    question: "What are the names of the 'street tuffs' who harass the gang?",
    choices: ["Cedric & Bob", "Albert & Bruce", "Seth & John", "Jose & Carl"],
    correct: 0
}, {
    question: "What is the name of Bizarro Newman?",
    choices: ["Vargas", "Vernon", "Schulman", "Fargas"],
    correct: 0
}, {
    question: "Who loses 'The Contest' first?",
    choices: ["George", "Kramer", "Jerry", "Elaine"],
    correct: 1
}, {
    question: "What TV show is Jerry's guilty pleasure?",
    choices: ["Red Shoe Diaries", "90210", "Party of Five", "Melrose Place"],
    correct: 3
}, {
    question: "Who does Jerry think converts to Judaism for the jokes??",
    choices: ["Sally Weaver", "Jake Jarmel", "Tim Whatley", "The Maestrol"],
    correct: 2
}, {
    question: "What does Elaine try to make her song? ",
    choices: ["Paint it Black", "Witchy Woman", "Blackbird", "Landslide"],
    correct: 1
}, {
    question: "Who claims to have invented the 'it's not you it's me' breakup speech?",
    choices: ["George", "Jerry", "Elaine", "Newman"],
    correct: 0
}, {
    question: "What is the made-up disease Jerry says makes him unable to hold his pee?",
    choices: ["Impulsitory Uriasis", "Urethratic Embolism", "Incontinental Compulsion", "Uromisitisis"],
    correct: 3
}, {
    question: "What is the name of the crepe shop run by the Mandelbaums?",
    choices: ["The Great Escrape", "The Crepery", "Magic Pan", "Crepe Station"],
    correct: 2
}, {
    question: "What is the name of the retirement community where Jerry's parents live?",
    choices: ["Vista Del Mar", "Del Boca Vista", "Del Bicco Baston", "Chateau Raton"],
    correct: 1

}];
//questionArr = thisvalue.questions[thisvalue.current];
//choicesArr = thisvalue.questions[thisvalue.current];
for (var i = 0; i < thisvalue.questions.length; i++) {
    // Get the question value and store it in a variable
    var t_question = (thisvalue.questions)[i].question;
    console.log("t_question = " + thisvalue.questions[i].question);
    // Create a var to hold a <p> tag to keep the question,
    // Then give it an ID in the form t_question0, t_question1, ..., t_question10 using an incrementot
    // Then set the <p> tag as the value of this 
    var questionItem = $("<p>");
    questionItem.attr("class", "trivia_question" + i);
    questionItem.text(t_question);
    // Create a variable with a div for a bootstrap row
    // Add class="row justify-content-md-center"> to the row
    // Give the row a data attribute to add the questionItem from above
    // Add div to container
    var questionRow = $("<div>")
    questionRow.addClass("row justify-content-md-center");
    questionRow = questionRow.append(questionItem);
    $(".container").append(questionRow);
    /* $(".t_question").append("<span>" + (thisvalue.questions)[i].question + "</span>");
    for (var j = 0; j < (thisvalue.questions)[i].choices.length; j++) {
        console.log("choicesArr = " + thisvalue.questions[i].choices[j]);
        $(".choices" + j).prepend("<span>" + (thisvalue.questions)[i].choices[j] + "</span>");
    } */
}
//}