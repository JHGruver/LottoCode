document.addEventListener('DOMContentLoaded', function (){

    // register an event handler for the play button
    document.getElementById('play_btn').addEventListener('click', function (){

        // pick the input values from the input boxes and print them out
        // document.body --> reference to the body element in the DOM structure
        //   .firstElementChild --> reference to the div class container
        //   .firstElementChild --> reference to the first div row
        //   .children --> collection which has all the input elements in the first div row
        var inputs = document.body.firstElementChild.firstElementChild.children;

        player.numbers = [];
        for (var i = 0, len = inputs.length; i < len; i++){
            player.numbers.push(Number(inputs[i].value));
            console.log(inputs[i].value);
        }
        console.log(player);
        dealer.generateNumbers();
        // dealer.numbers = [21,22,23];



        // document.body --> reference to the body element in the DOM structure
        //   .firstElementChild --> reference to the div class container
        //   .children[2] --> reference to the last div row
        //   .children --> collection which has all the input elements in the first div row
        var outputs = document.body.firstElementChild.lastElementChild.children;
        //console.log(outputs);
        for (i = 0, len = outputs.length; i < len; i++){
            console.log(player.numbers);
            console.log(dealer.numbers);
            outputs[i].value = dealer.numbers[i];
            if (dealer.numbers[i] === player.numbers[i]){
                console.log('match for ' + player.numbers[i]);
                inputs[i].className = 'circle match';
            } else {
                inputs[i].className = 'circle no_match';
            }
        }

    });

});




function testCase1(){
    player.numbers = [22,25,26];
    dealer.generateNumbers();
    console.log(dealer);
    console.log(player);
    var win = dealer.checkNumbers(player);
    console.log('Is there a match? ' + win);
}

