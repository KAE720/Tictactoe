


let GameBoard = {
    array:
    [["","",""],
    ["","",""],
    ["","",""]]
}

console.log(GameBoard.array)




function Player(name, score){
    this.name = name;
    this.score = score;
}

let player1 = new Player("john", 0)
let player2 = new Player("heidi",0)


let GameLogic = {
    currentPlayer: player1,

    switchTurn: function(){
        if (this.currentPlayer == player1){
            this.currentPlayer = player2
        }
        else this.currentPlayer = player1;
    },

    increaseScore: function(){
    let a = GameBoard.array;



if (
  // Rows
  (a[0][0] === "X" && a[0][1] === "X" && a[0][2] === "X") ||
  (a[1][0] === "X" && a[1][1] === "X" && a[1][2] === "X") ||
  (a[2][0] === "X" && a[2][1] === "X" && a[2][2] === "X") ||

  // Columns
  (a[0][0] === "X" && a[1][0] === "X" && a[2][0] === "X") ||
  (a[0][1] === "X" && a[1][1] === "X" && a[2][1] === "X") ||
  (a[0][2] === "X" && a[1][2] === "X" && a[2][2] === "X") ||

  // Diagonals
  (a[0][0] === "X" && a[1][1] === "X" && a[2][2] === "X") ||
  (a[0][2] === "X" && a[1][1] === "X" && a[2][0] === "X")
) {
player1.score += 1;
console.log(`${this.currentPlayer.name} wins!`);

this.restart();
return;
}

if (
  // Rows
  (a[0][0] === "O" && a[0][1] === "O" && a[0][2] === "O") ||
  (a[1][0] === "O" && a[1][1] === "O" && a[1][2] === "O") ||
  (a[2][0] === "O" && a[2][1] === "O" && a[2][2] === "O") ||

  // Columns
  (a[0][0] === "O" && a[1][0] === "O" && a[2][0] === "O") ||
  (a[0][1] === "O" && a[1][1] === "O" && a[2][1] === "O") ||
  (a[0][2] === "O" && a[1][2] === "O" && a[2][2] === "O") ||

  // Diagonals
  (a[0][0] === "O" && a[1][1] === "O" && a[2][2] === "O") ||
  (a[0][2] === "O" && a[1][1] === "O" && a[2][0] === "O")
) {
player2.score += 1;
console.log(`${this.currentPlayer.name} wins!`);
this.restart();
return;
}

    },



    checkWin: function(){
        if (player1.score == 3 || player2.score == 3){
            this.restart();
        }

    },

    restart: function(){
        GameBoard.array = [["","",""],["","",""],["","",""]];
    },

    placeMove: function(x,y){
        if (this.currentPlayer == player1 && GameBoard.array[x][y] === ""){
            GameBoard.array[x][y] = "X"
                }

             if (this.currentPlayer == player2 && GameBoard.array[x][y] === ""){
            GameBoard.array[x][y] = "O"
                }

          this.increaseScore()
    this.switchTurn()
    }



}
