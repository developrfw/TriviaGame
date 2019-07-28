var card = $("#quiz-area");

var questions = [
  {
    question: "What is the third sign of the Zodiac?",
    answers: ["Scopio", "Aquarius", "Gemini", "Leo"],
    correctAnswer: "Gemini"
  },
  {
    question: "What is the largest bone in the human body?",
    answers: ["Femur", "Patella", "Tibia", "Fibula"],
    correctAnswer: "Femur"
  },
  {
    question: "Entomology is the branch of science that studies what?",
    answers: ["Frogs", "Mammals", "Atmosphere", "Insects"],
    correctAnswer: "Insects"
  },
  {
    question: "What is a Geiger Counter used to detect?",
    answers: ["Asteroids", "Radiation", "Earthquakes", "Tsunamis"],
    correctAnswer: "Radiation"
  },
  {
    question: "In the film Babe, what type of animal was Babe?",
    answers: ["Monkey", "Horse", "Pig", "Cat"],
    correctAnswer: "Pig"
  },
  {
    question:
      "Which planet is the closest to Earth",
    answers: ["Mars", "Mercury", "Pluto", "Venus"],
    correctAnswer: "Venus"
  },
  {
    question: "Which is the tallest mammal?",
    answers: ["Giraffe", "Rhino", "Kangaroo", "Elephant"],
    correctAnswer: "Giraffe"
  },
  {
    question: "How many track events are there in a decathlon?",
    answers: ["Two", "Seven", "Four", "Five"],
    correctAnswer: "Four"
  }
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};






  $(document).on("click", "#start", function() {
  game.start();
  });

  $(document).on("click", "#done", function() {
  game.done();
  });
