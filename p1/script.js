//component Vue instance
Vue.component("game-statistic", {
  data: function() {
    return {};
  },
  props: ["playerWin", "playerLose", "playerDraw", "totalGame"],
  template: "#game-statistic"
});

//root Vue instance
let app = new Vue({
  el: "#app",
  data: {
    playerSelected: "",
    computerSelected: "",
    playerFirstName: null,
    playerLastName: null,
    playerFullName: null, // used in statistic button
    playerFullNames: [],
    RandomNumber: null,
    RandomNumbers: [],
    Result: {},
    Results: [],

    playerWin: 0, // used in statistic button
    playerLose: 0, // used in statistic button
    playerDraw: 0, // used in statistic button

    winIsTrue: null,
    feedbackMessage: "",
    soHistory: false,
    sStatistic: false // used in statistic button
  },
  methods: {
    combineToFullName: function() {
      this.playerFullName = this.playerFirstName + " " + this.playerLastName;
      this.playerFullNames.push(this.playerFullName);
    },
    genRanNumber: function() {
      // console.log("genRanNumber function is working!");
      let s = Math.floor(Math.random() * 20) % 3;
      let temp = {};
      this.RandomNumber = s;
      this.RandomNumbers.push(s);
      if (this.RandomNumber == 0) {
        temp.computer = "Rock";
        this.computerSelected = "Rock";
      } else if (this.RandomNumber == 1) {
        temp.computer = "Paper";
        this.computerSelected = "Paper";
      } else {
        temp.computer = "Scissor";
        this.computerSelected = "Scissor";
      }
      temp.player = this.playerSelected;

      if (temp.player === "Rock") {
        if (temp.computer === "Rock") {
          temp.result = "Draw";
          this.playerDraw++;
          this.feedbackMessage = "Draw Game!";
        } else if (temp.computer === "Paper") {
          temp.result = "Lose";
          this.playerLose++;
          this.winIsTrue = false;
          this.feedbackMessage = "Sorry, let's play again!";
        } else {
          temp.result = "Win";
          this.playerWin++;
          this.winIsTrue = true;
          this.feedbackMessage = "Congratulations! You win!";
        }
      } else if (temp.player === "Paper") {
        if (temp.computer === "Paper") {
          temp.result = "Draw";
          this.playerDraw++;
          this.feedbackMessage = "Draw Game!";
        } else if (temp.computer === "Scissor") {
          temp.result = "Lose";
          this.winIsTrue = false;
          this.playerLose++;
          this.feedbackMessage = "Sorry, let's play again!";
        } else {
          temp.result = "Win";
          this.playerWin++;
          this.winIsTrue = true;
          this.feedbackMessage = "Congratulations! You win!";
        }
      } else if (temp.player === "Scissor") {
        if (temp.computer === "Scissor") {
          temp.result = "Draw";
          this.feedbackMessage = "Draw Game!";
          this.playerDraw++;
        } else if (temp.computer === "Rock") {
          temp.result = "Lose";
          this.winIsTrue = false;
          this.playerLose++;
          this.feedbackMessage = "Sorry, let's play again!";
        } else {
          temp.result = "Win";
          this.playerWin++;
          this.winIsTrue = true;
          this.feedbackMessage = "Congratulations! You win!";
        }
      }
      this.Results.push(temp);
    },

    clearDataProperty: function() {
      this.playerSelected = "";
      this.computerSelected = "";
      this.playerFirstName = null;
      this.playerLastName = null;
      this.playerFullName = null;
      this.playerFullNames = [];
      this.RandomNumber = null;
      this.RandomNumbers = [];
      this.Result = {};
      this.Results = [];
      this.playerWin = 0;
      this.playerLose = 0;
      this.playerDraw = 0;
      this.winIsTrue = null;
      this.feedbackMessage = "";
      this.soHistory = false;
      this.sStatistic = false;
    },

    showOrHideHistory: function() {
      if (this.soHistory == false) {
        return (this.soHistory = true);
      } else return (this.soHistory = false);
    },

    showOrHideStatistic: function() {
      if (this.sStatistic == false) {
        return (this.sStatistic = true);
      } else return (this.sStatistic = false);
    }
  },
  // used in statistic button
  computed: {
    totalGame: function() {
      return this.Results.length;
    }
  },
  watch: {
    playerFullName: function() {
      console.log("Full name is " + this.playerFullName);
    },
    RandomNumbers: function() {
      console.log(this.RandomNumbers);
    },
    RandomNumber: function() {
      console.log("Random Number now is " + this.RandomNumber);
    },
    Results: function() {
      console.log(this.Results);
    }
  }
});
