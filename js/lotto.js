
// Identify the objects

// player object - properties: firstnumber, secondnumber, thirdnumber,
// dealer object -
// dealer - methods: checkNumbers, generateNumbers

var config = {
    number_of_options: 3,
    max: 30,
    min: 20
};

var player = {
    numbers: []
};

var dealer = {
    numbers: [], // store all dealer numbers
    checkNumbers: function(player){
        // compares the numbers of the player with the numbers of the dealer
        for (var i = 0, len = config.number_of_options; i < len; i++){
            if (this.numbers[i] !== player.numbers[i]){
                return false;
            }
        }
        return true;
    },
    generateNumbers: function(){
        this.numbers = [];
        for (var i = 0, len = config.number_of_options; i < len; i++){
            // create a random number within the configuration min and max
            // push it into the array of dealer numbers
            this.numbers.push(generateNumber(config.min, config.max));
        }
    }
};

var scenarios = {
    testScenarios: function(){
        var obj = {
            '111': 'win',
            '101': 'mid-win',
            '000': 'lose'
        }
    }
};




function generateNumberAsString(min, max){
    var rnd = Math.random(); // lie between 0 and 1

    /*
     * rnd = 0.34654654514351
     * max = 30
     * min = 20
     *
     * interval = 10
     * rnd * interval = 3
     * 3 + min = 23
     *
     * */

    return (Math.floor(rnd * (max - min + 1) + min)).toString();
}

function generateNumber(min, max){
    var rnd = Math.random(); // lie between 0 and 1

    /*
    * rnd = 0.34654654514351
    * max = 30
    * min = 20
    *
    * interval = 10
    * rnd * interval = 3
    * 3 + min = 23
    *
    * */

    return Math.floor(rnd * (max - min + 1) + min);
}