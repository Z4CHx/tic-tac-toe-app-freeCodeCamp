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
  var thisLinesOpenings = 0;
  

  var boardLines = { // these are possible winning lines
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
    var spaceId = spaceIdRaw.slice(1);
    console.log(spaceId);
    
    if($(this).html() === "") { // if space empty
      console.log("Where player clicked was empty"); 
      $(this).html(playerMark); // put player's mark
      for( var i = 1; i < keys.length; i++) { // cycle through keys
        for ( var j = 0; j < 3; j++ ) { // cycle through values
            thisLinesOpenings = 0;
            if(boardLines[i][j] === ""){ // if just 1 open
                thisLinesOpenings++;
            }
            
            if ( spaceId === boardLines[i][j] ) { // get winning line 
            console.log("this space was found in one of the lines");
            allPossNpcMoves.push(...boardLines[i]);
            possNpcMoves = allPossNpcMoves.filter(function(possibleMoves){
              return possibleMoves !== spaceId;
            });
            console.log("NPC poss moves are " + possNpcMoves);
                
          } // end check for space in a winning row
        } // end inner loop that searches a keys values to match the click
      } // end outer loop to loop through keys
    } // end check if space blank
    
      for( var i = 0 ; i < possNpcMoves.length ; i++ ){ // loop through poss moves
      if($("#s" + possNpcMoves[i]).html() === ""){ // if space is empty
        $("#s" + possNpcMoves[i]).html(npcMark); // mark npcs mark
        console.log("tried to mark npc in slot " + possNpcMoves[i]);
        break; // was successfull, so loop can stop
      }
    }
      // put AI here
  });


