{
    // Global variables
    let score = 0;
    let game = true;

    // Constructor Function for Questions
    class Question {
        constructor(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }
    };

    // Display question and answers in the console
    Question.prototype.displayQ = function () {
        console.log(this.question)
        for (var i = 1; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`)
        }
    };

    // Prompt box to input user answer
    Question.prototype.promptQ = function () {
        this.input = prompt(`Please type in the corresponding number to select your answer.\n                    Type 'exit' to leave the game.`);
    };

    // Check answer
    Question.prototype.checkAns = function () {
        let i = 1;
        while (i < questions.length) {
            if (this.input === 'exit') {
                game = false;
            }
            else if (this.input === this.correct) {
                score = score + 1;
                console.log(`You are correct!`);
            } else {
                console.log(`Sorry, you are wrong.`);
            }
            console.log(`Score: ${score}`)
            console.log('\n')
            return score;
        }
    };

    // Array of questions to instantiate
    let questions = [
        new Question(
            (`What fictional city is the home of Batman?`),
            [, 'New York City', 'Gotham', 'Metropolis'],
            '2'),
        new Question(
            (`Babe Ruth is associated with which sport?`),
            [, 'Baseball', 'Golf', 'Football'],
            '1'),
        new Question(
            (`What’s the total number of dots on a pair of dice?`),
            [, '40', '56', '42'],
            '3'),
        new Question(
            (`Which planet is the closest to Earth?`),
            [, 'Mercury', 'Venus', 'Jupiter'],
            '2'),
        new Question(
            (`Who directed the movie Jaws?`),
            [, 'George Lucas', 'James Cameron', 'Steven Spielberg'],
            '3'),
    ]

    // Shuffle the order of the array
    Question.prototype.shuffle = function () {
        this.i = questions.length,
            this.j = 0,
            this.newArr = [];
        this.questions = [];

        while (this.i--) {
            this.j = Math.floor(Math.random() * (this.i + 1));
            this.newArr = questions[this.i];

            questions[this.i] = questions[this.j];
            questions[this.j] = this.newArr;
            this.questions.push(questions[this.i])
        }
        return this.questions;
    }

    // Call the shuffle method
    const randQ = questions[0].shuffle();

    // Run the sequence to display questions, show prompt, and check answer
    Question.prototype.sequence = function () {
        for (let i = 0; i < randQ.length; i++) {
            if (game === true) {
                randQ[i].displayQ();
                randQ[i].promptQ();
                randQ[i].checkAns();
            }
        }
    }

    // Call sequence method
    randQ[0].sequence();

    // Display final score when the game is over
    console.log(`Game over!\nYour final score is: ${score}`)
}