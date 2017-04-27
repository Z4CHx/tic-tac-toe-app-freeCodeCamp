  var boardSpace = $(".board-space");
  var playersMark = prompt("X or O").toUpperCase();
  var npcMark = function(){
    if ( playersMark === "X" ) {
      return "O";
    } else {
      return "X";
    }
  };
  var allPossNpcMoves = [];
  var possNpcMoves = [];
  var winningLines = { 
    1 : ["1","2","3"], // 1,2,3
    2 : ["1","4","7"], // 1,4,7
    3 : ["1","5","9"], // 1,5,9
    4 : ["2","5","8"], // 2,5,8
    5 : ["3","5","7"], // 3,5,7
    6 : ["3","6","9"], // 3,6,9
    7 : ["4","5","6"], // 4,5,6
    8 : ["7","8","9"]  // 7,8,9
  };
  var keys = Object.keys(winningLines);
  
  boardSpace.click(function(){
    var spaceIdRaw = this.id; // string "1"
    var spaceId = spaceIdRaw.slice(1); // remove "s" from ID 
    
    if( $(this).html() === "" ) { 
     
        $(this).html(playersMark); 
      
        for( var i = 1; i < keys.length; i++ ) {
        
          for ( var j = 0 ; j < 3 ; j++ ) {
              
              if ( spaceId === winningLines[i][j] ) { // get winning line 
                  allPossNpcMoves.push(...winningLines[i]);
                  possNpcMoves = allPossNpcMoves.filter(function(possibleMoves){
                    return possibleMoves !== spaceId;
                  });
                  
              } 
          } // end cycle through this key's values, wich are spaces in line 
        } // end cycle through each board winning space key 
    } // end check if clicked space is blank
    
      for( var i = 0 ; i < possNpcMoves.length ; i++ ) { 
          
          if($( "#s" + possNpcMoves[i]).html() === "" ) { 
              $( "#s" + possNpcMoves[i]).html(npcMark);
              break; // was successfull, so loop can stop
          } // end check if space is empty
          
      } // end loop through possible NPC moves ; add more logic here force win
  });


