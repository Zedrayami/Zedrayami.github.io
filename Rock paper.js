// let input = prompt("1.Rock 2.Paper 3.Scissors");
// let X = Number(input);
const Click = (X) => {
    var A = (Math.floor(Math.random() * 3)) + 1;


    if (X == 1) {
        if (X - A == 0) {
            console.log("Tie");
        }
        else if (X - A == -1) {
            console.log("Lose")
        }
        else if (X - A == -2) {
            console.log("Win")
        }
    } else if (X == 2) {
        if (X - A == 1) {
            console.log("Win");
        }
        else if (X - A == 0) {
            console.log("Tie")
        }
        else if (X - A == -1) {
            console.log("Lose")
        }
    } else if (X == 3) {
        if (X - A == 2) {
            console.log("Lose");
        }
        else if (X - A == -1) {
            console.log("Win")
        }
        else if (X - A == 0) {
            console.log("Tie")
        }
    } else {
        console.log("Please in put only 1-3");
    }
    if (X == 1) {
        console.log("Human: Rock")
    }
    else if (X == 2) {
        console.log("Human: Paper")
    }
    else if (X == 3) {
        console.log("Human: Scissors")
    }
    if (A == 1) {
        console.log("Ai: Rock")
    }
    else if (A == 2) {
        console.log("Ai: Paper")
    }
    else if (A == 3) {
        console.log("Ai: Scissors")
    }
}