class GuessingGame {

    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = Math.ceil( (this.max + this.min) / 2 );
    }

    lower() {
        this.max = this.result;
    }
    
    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;
