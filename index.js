 console.log("js connected")
 
 let firstCard =11;
 let secondCard =10;
 let sum = firstCard + secondCard;
 let hasblackjack =false;
 let isAlive = true;
 let message =""

function  startGame(){

      if(sum<=20){
            message="do you want to draw a new card?";

         }
         else if (sum==21){
            message="wohoo you've won the blackjacck game.";
            hasblackjack=true;
         }
         else{
            message="You're out of the game.";
            isAlive=false; 
         }
         console.log(message);
         console.log(hasblackjack)
      }
   




      // if(sum<=20){
      //       console.log("do you want to draw a new card?");

      //    }
      //    else if (sum==21){
      //       console.log("wohoo you've won the blackjacck game.");
      //       hasblackjack=true;
      //    }
      //    else{
      //       console.log("You're out of the game.");
      //       isAlive=false;
            
      //    }
      //    console.log(isAlive);
 





 





