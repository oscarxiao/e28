let app = new Vue({
    el: '#app',
    data: {
        playerName: '',
        gameType: 'numeric',
        answer: 45,
        guess: '',
        guessCount: 0,
        guesses: [],
        settings: {
            max: 200,
            type: 'numeric',
            guessLimit: 15
        },
        guessesDetailed: [
            { guess: 25, result: 'low' },
            { guess: 60, result: 'high' },
            { guess: 35, result: 'low' }
        ],
    },
    methods: {
        submitGuess: function (event) {
            console.log(event);
            this.guesses.push(this.guess);
            this.guessCount++;
        }
    }
})
