var board = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];


let queen = {
    position: {
        x: 3,
        y: 3
    }
};





function changedirection(direction, steps) {

    let tempx;
    let tempy;
    console.log("Queen previous position:" + board[queen.position.x][queen.position.y]);
    document.write("Queen previous position:" + board[queen.position.x][queen.position.y] + "  " + "   ");
    switch (direction)

    {
        case "N": //Change South-West Direction//
            tempx = queen.position.x - steps;
            if ((tempx < 0 || tempx >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "S": //Change South-West Direction//
            tempx = queen.position.x + steps;
            if ((tempx < 0 || tempx >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "W": //Change South-West Direction//
            tempy = queen.position.y - steps;
            if ((tempy < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "E": //Change South-West Direction//
            tempy = queen.position.y + steps;
            if ((tempy < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "NE": //Change South-West Direction//
            tempx = queen.position.x - steps;
            tempy = queen.position.y + steps;
            if ((tempy < 0 || tempy >= 8) || (tempx < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "NW": //Change South-West Direction//
            tempx = queen.position.x - steps;
            tempy = queen.position.y - steps;
            if ((tempy < 0 || tempy >= 8) || (tempx < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "SE": //Change South-West Direction//
            tempx = queen.position.x + steps;
            tempy = queen.position.y + steps;
            if ((tempy < 0 || tempy >= 8) || (tempx < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        case "SW": //Change South-West Direction//
            tempx = queen.position.x + steps;
            tempy = queen.position.y - steps;
            if ((tempy < 0 || tempy >= 8) || (tempx < 0 || tempy >= 8)) {
                console.log("Queen is out of Board");
                document.write("Queen is out of Board");
            } else {
                queen.position.x = tempx;
                queen.position.y = tempy;
                console.log("Current Position : " + board[queen.position.x][queen.position.y]);
                document.write("Current Position : " + board[queen.position.x][queen.position.y]);
            }
            break;

        default:
            console.log("Invalid Input");
            document.write("Invalid Input");
    }
}

function sub() {
    let c = document.getElementById("const").value;
    let steps = Number(c.slice(c.length - 1));
    let direction = c.slice(0, (c.length - 1));
    changedirection(direction, steps);

}