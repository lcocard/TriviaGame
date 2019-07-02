$(document).ready(function () {
    var Trivia;
    $("#start_button").click(function () {
        $(this).hide();
        $('.result').remove();
        $('.container').html('');
        Trivia = new $(window).trivia();
        //Trivia.ask();
    });
    $.fn.trivia = function () {
        $("body")
            .css({
                "background-size": "cover",
            });
        $(".container")
            .css({
                "background-color": "#e6ecff",
            });

        var thisvalue = this;
        thisvalue.userPick = null;
        thisvalue.answers = {
            correct: 0,
            incorrect: 0
        };
        thisvalue.count = 120;
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

        //Display timer

        if ($("#timer").length[0]) {
            console.log("Timer" + " Exists");
        } else {
            console.log("Timer" + " Does Not Exist");
            var timerRow = $("<div>");
            timerRow.addClass("row justify-content-md-center");
            timerRow.attr("id", "timer");
            var timerItem = $("<p>");
            timerItem.attr("class", "display_timer");
            timerItem.html("Time remaining: " + thisvalue.count + " secs");
            timerRow = timerRow.append(timerItem);
            $(".container").append(timerRow);
        }

        for (var i = 0; i < thisvalue.questions.length; i++) {
            // Get the question value and store it in a variable
            var t_question = (thisvalue.questions)[i].question;
            console.log("t_question = " + thisvalue.questions[i].question);
            // Create a var to hold a <p> tag to keep the question,
            // Then give it an ID in the form t_question0, t_question1, ..., t_question9 using an increment
            // Then set the <p> tag as the value of this 
            var questionItem = $("<p>");
            questionItem.attr("class", "trivia_question" + i);
            questionItem.text(t_question);
            // Create a variable with a div for a bootstrap row
            // Add class="row justify-content-md-center"> to the row
            // Give the row a data attribute to add the questionItem from above
            // Add div to container
            var questionRow = $("<div>");
            questionRow.addClass("row justify-content-md-center");
            questionRow.attr("id", "trivia_question_row" + i);
            $(".container").append(questionRow);
            var questionCol = $("<div>");
            questionCol.addClass("col-md-auto");
            questionCol = questionCol.append(questionItem);
            $("#trivia_question_row" + i).append(questionCol);
            //***************************************************************************************** */
            // Create variable for the first div for a bootstrap form-check-inline row with all the choices
            // Add class="row justify-content-md-center" for the first div
            // Append this div to container
            //
            if ($("#D1" + i).length[0]) {
                console.log("D1" + i + " Exists");
            } else {
                console.log("D1" + i + " Does Not Exist");
                var choicesRowD1 = $("<div>");
                choicesRowD1.addClass("row justify-content-md-center");
                choicesRowD1.attr("id", "D1" + i);
                $(".container").append(choicesRowD1);
            }
            // Create variable for the second div for a bootstrap form-check-inline row with all the choices
            // Add class="col-md-auto" to the second div
            // Append this div to above div
            //
            if ($("#D2" + i).length[0]) {
                console.log("D2" + i + " Exists");
            } else {
                console.log("D2" + i + " Does Not Exist");
                var choicesRowD2 = $("<div>");
                choicesRowD2.addClass("col-md-auto");
                choicesRowD2.attr("id", "D2" + i);
                $("#D1" + i).append(choicesRowD2);
            }
            for (var j = 0; j < thisvalue.questions[i].choices.length; j++) {
                console.log("choices array length = ", + thisvalue.questions[i].choices.length);
                // Get the answer choice value and store it in a variable
                var t_choice = (thisvalue.questions)[i].choices[j];
                console.log("t_choice = " + (thisvalue.questions)[i].choices[j]);
                // Create a var to hold a <p> tag to keep one choice for answering
                // Then give it an ID in the form t_choice0, t_choice1, ..., t_choice3 using an increment
                // Then set the <p> tag as the value of this
                var choiceItem = $("<p>");
                choiceItem.attr("class", "choices" + j);
                choiceItem.text(t_choice);

                // Create variable for 1 nested div for the rest of the bootstrap form-check-inline row with all the choices
                // Add class="form-check form-check-inline" to the third div
                //Append this to the second div
                //
                if ($("#D3" + i + j).length[0]) {
                    console.log("D3" + i + j + " Exists");
                } else {
                    console.log("D3" + i + j + " Does Not Exist");
                    var choicesRowD3 = $("<div>");
                    choicesRowD3.addClass("form-check form-check-inline");
                    choicesRowD3.attr("id", "D3" + i + j);
                    $("#D2" + i).append(choicesRowD3);
                }
                // Create variable for 1 radio button input for the rest of the bootstrap form-check-inline row with all the choices
                // Add class="form-check-input" to the input tag
                // Add type = "radio" to the input tag
                // Add id="inlineCheckbox" + j to the input tag
                // Add "value='" + j + "'" to the input tag
                console.log("value='" + j + "'");
                //Append this to the third div
                //
                if ($("#D4" + i + j).length[0]) {
                    console.log("D4" + i + j + " Exists");
                } else {
                    console.log("D4" + i + j + " Does Not Exist");
                    var choicesRowD4 = $("<input>");
                    choicesRowD4.addClass("form-check-input");
                    choicesRowD4.attr("id", "D4" + i + j);
                    choicesRowD4.attr("type", "radio");
                    choicesRowD4.attr("name", "inlineRadioOptions" + i);
                    choicesRowD4.attr("id", "inlineRadio" + j);
                    choicesRowD4.attr("value", "" + j);
                    $("#D3" + i + j).append(choicesRowD4);
                }
                // Create variable for 1 label button input for the rest of the bootstrap form-check-inline row with all the choices
                // Add class="form-check-label" to the label tag
                // Add for="inlineCheckbox" + j to the label tag
                // Add <p> class="choices3" to the label tag ---> see choiceItem above
                //Append this to the third div
                //
                if ($("#D5" + i + j).length[0]) {
                    console.log("D5" + i + j + " Exists");
                } else {
                    console.log("D5" + i + j + " Does Not Exist");
                    var choicesRowD5 = $("<label>");
                    choicesRowD5.addClass("form-check-label");
                    choicesRowD5.attr("id", "D5" + i + j);
                    choicesRowD5.attr("for", "inlineRadio" + j);
                    choicesRowD5 = choicesRowD5.append(choiceItem);
                    $("#D3" + i + j).append(choicesRowD5);
                }


            }

        }
        //Create the "Done" button
        if ($("#doneRow").length[0]) {
            console.log("Done Button" + " Exists");
        } else {
            console.log("Done Button" + " Does Not Exist");
            var doneButtonRow = $("<div>");
            doneButtonRow.addClass("row justify-content-md-center");
            doneButtonRow.attr("id", "doneRow");
            $(".container").append(doneButtonRow);

            var doneButtonCol = $("<div>");
            doneButtonCol.addClass("col-md-auto");
            doneButtonCol.attr("id", "doneCol");
            $("#doneRow").append(doneButtonCol);

            var doneButton = $("<button>");
            doneButton.attr("type", "button");
            doneButton.addClass("btn btn-outline-dark");
            doneButton.attr("id", "doneButton");
            var doneItem = $("<p>");
            doneItem.attr("id", "display_done");
            doneItem.html("Done");
            doneButton = doneButton.append(doneItem);
            $("#doneCol").append(doneButton);
        }
        /* ********************************************* Timing *********************************************************** */
        triviaTimer = function () {
            if (thisvalue.questions[thisvalue.current]) {
                $("#timer").html("Time remaining: " + "00:" + thisvalue.count + " secs");
                $("#question_div").html(thisvalue.questions[thisvalue.current].question);
                var choicesArr = thisvalue.questions[thisvalue.current].choices;
                var buttonsArr = [];
                for (var i = 0; i < choicesArr.length; i++) {
                    var button = $('<button>');
                    button.text(choicesArr[i]);
                    button.attr('data-id', i);
                    $('#choices_div').append(button);
                }
                window.triviaCounter = setInterval(thisvalue.timer, 1000);
            } else {
                $('body').append($('<div />', {
                    text: 'Unanswered: ' + (
                        thisvalue.questions.length - (thisvalue.answers.correct + thisvalue.answers.incorrect)),
                    class: 'result'
                }));
                $('#start_button').text('Restart').appendTo('body').show();
            }
        };
    }
});