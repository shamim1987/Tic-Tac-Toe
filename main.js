/*var winner = if (true) {

} else {

}

var newGame = document.getElementById('reset')[0];
newGame.addEventListener('click',function() {

} */

var blocks = document.getelementsByclass('board');
// blocks = [topLeft,topMiddle,topRight,midLeft,midCentre,midRight,bottomLeft,bottomMiddle,bottomRight]
var game = blocks.addEventListener('click'.function()
var round = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    for (var i = 0; i < round.length; i++) {
        if () {
            for (var i = 0; i < blocks.length; i = i + 2) {
                //display X
                var X = document.createElement("div");
                X.textContent = "X";
                blocks[i].appendChild(X);
            }
        } else if () {
            for (var i = 1; i < blocks.length; i = i + 2) {
                //display O
                var O = document.createElement("div");
                O.textContent = "O";
                blocks[i].appendChild(O);
            }
        };
    })

var winner = function() {
        switch (expression) {
            case expression:
                (X || 0 in (blocks[0] && blocks[1] && blocks[2])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[0] && blocks[3] && blocks[6])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[3] && blocks[4] && blocks[5])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[1] && blocks[4] && blocks[7])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[6] && blocks[7] && blocks2[8])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[2] && blocks[5] && blocks2[8])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[0] && blocks[4] && blocks2[8])) {
                    alert('You Win Mate!')
                }
                break;
            case expression:
                (X || O in (blocks[2] && blocks[4] && blocks2[6])) {
                    alert('You Win Mate!')
                }
                break;
            default:
                alert('Better Luck Next Time !!')
        }
        var btn1 = document.getElementById('Reset');
        btn1[0].addEventListener('click', function() {
            alert("test");
        })
