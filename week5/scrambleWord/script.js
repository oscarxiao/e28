let app = new Vue({
  el: "#app",
  data: {
    playerName: null,
    guess: "",
    words: [
      ["apple", "Sometimes red, sometimes delicious"],
      ["washington", "rushmore's left edge"],
      ["pumpkin", "Halloween's favorite fruit"],
      ["football", "Play with your hands or feet, depending on your location"]
    ],
    word: null,
    scrambledWord: null,
    hint: null,
    playAgain: false,
    feedback: "",
    comparedResult: null
  },
  methods: {
    generateRandomNumber: function(n) {
      return Math.floor(Math.random() * n);
    },

    shuffleWord: function(s) {
      var randomNumber = this.generateRandomNumber(4);
      this.word = this.words[randomNumber][0];
      this.hint = this.words[randomNumber][1];
      var s = this.words[randomNumber][0];
      //this.temp = s;
      var arr = s.split(""); // Convert String to array
      var n = arr.length; // Length of the array

      for (var i = 0; i < n - 1; ++i) {
        var j = this.generateRandomNumber(n); // Get random of [0, n-1]

        var temp = arr[i]; // Swap arr[i] and arr[j]
        arr[i] = arr[j];
        arr[j] = temp;
        s = arr.join("");
        this.scrambledWord = s;
        return s;
      }
    },
    compareWords: function() {
      if (this.guess == this.word) {
        this.feedback = "You got it! Nice work.";
        this.comparedResult = true;
        return true;
      } else {
        this.feedback = "Sorry, that's not correct. Please try again.";
        this.comparedResult = false;
        return false;
      }
    },
    playAgainButton: function() {
      var s = "";
      this.guess = "";
      this.word = "";
      this.hint = "";
      this.shuffleWord(s);
    }
  }
});
