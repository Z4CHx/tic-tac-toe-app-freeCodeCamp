  var boardSpace = $(".board-space");
  var playerMark = prompt("X or O").toUpperCase();
  var npcMark = function(){
    if ( playerMark === "X" ) {
      return "O";
    } else {
      return "X";
    }
  };
  var allPossNpcMoves = [];
  var possNpcMoves = [];
  var moveCount = 0;
  // these are possible winning lines
  var boardLines = {
    1 : ["1","2","3"], // 1,2,3
    2 : ["1","4","7"], // 1,4,7
    3 : ["1","5","9"], // 1,5,9
    4 : ["2","5","8"], // 2,5,8
    5 : ["3","5","7"], // 3,5,7
    6 : ["3","6","9"], // 3,6,9
    7 : ["4","5","6"], // 4,5,6
    8 : ["7","8","9"]  // 7,8,9
  };
  
  var keys = Object.keys(boardLines);
  
  boardSpace.click(function(){
    var spaceIdRaw = this.id; // string "1"
    spaceId = spaceIdRaw.slice(1);
    console.log(spaceId);
    if($(this).html() === "") { // if space empty
      console.log("empty"); 
      $(this).html(playerMark); // put player's mark
      moveCount += 1;
      console.log("move count: " + moveCount);
      for( var i = 1; i < keys.length; i++) { // cycle through keys
        for ( var j = 0; j < 3; j++ ) { // cycle through values
          if ( spaceId === boardLines[i][j] ) { 
            console.log("this space was found in one of the lines");
            allPossNpcMoves.push(...boardLines[i]);
            possNpcMoves = allPossNpcMoves.filter(function(possibleMoves){
              return possibleMoves !== spaceId;
            });
            // (1) , 2, 3...if user clicked one,the other spaces that would lead to success are logged for the pc to choose to counter from
            console.log(possNpcMoves);
          } // end check for space in a winning row
        } // end inner loop that searches a keys values to match the click
      } // end outer loop to loop through keys
    } // end check if space blank
    for( var i = 0 ; i < possNpcMoves.length ; i++ ){ // loop through poss moves
      if($("#s" + possNpcMoves[i]).html() === ""){ // if space is empty
        $("#s" + possNpcMoves[i]).html(npcMark); // mark npcs mark
        moveCount += 1;
        console.log("move count: " + moveCount);
        console.log("tried to mark npc in slot " + possNpcMoves[i]);
        break; // was successfull, so loop can stop
      }
    }
    if (moveCount === 9) {
      console.log("game over");
    }
  });