$(document).ready(function () {

    $.function.trivia = function () {

        var my_choice = null;
        var trivia = this;
        trivia_answers = {
            true: 0,
            false: 0
        }

        trivia_questions = [{

            question: "What are the names of the 'street tuffs' who harass the gang?",
            choices: ["Cedric & Bob", "Albert & Bruce", "SFargaseth & John", "Jose & Carl"],
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

    }
});