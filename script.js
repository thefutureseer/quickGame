var startwins = 0;
var startlost = 0;

//Random number between 0-2 and get that index of the letters array
//This will be the computers pick
const randomNum = Math.floor(Math.random() * 10 % 3);

sessionStorage.setItem("looses", JSON.stringify(startlost));
sessionStorage.setItem("wins", JSON.stringify(startwins));

//Function to get computers random pick 
function computerPick(randoNumo) {
  var conf;
  const lettersArray = ["1", "2", "3"];
  
  var compPicked = lettersArray[randoNumo]
  console.log(compPicked, "comp picked!")
  
  conf = confirm(`so far you have ${startlost} looses & ${startwins} wins.`);
  
  //conditional to play or not to play
  if (conf) {
    const myPick = prompt("pick 1, 2, or 3");
    if (myPick) {
     if(compPicked === myPick) {
      //wins tick up once
      startwins++;
      //set wins into session storage
      sessionStorage.setItem("wins", JSON.stringify(startwins));
      
      alert("you choose wisely, lets see if you can do it again")
      confirm(" you Win! Would you like to play again?");
      console.log(startwins,"wins after set?")
      //game loads 
      computerPick(randomNum);
     } else {
      console.log('you lost');
      //looses ticks up
      startlost++;
      //put looses into session storage
      sessionStorage.setItem("looses", JSON.stringify(startlost));
      alert("bad gamble, lets see if you can win now!")

      //confirm you lost
      confirm("you lost, would you like to play again?");

      //game loads agian
      computerPick(randomNum);
     }
    } 
  } else {
    alert("see ya")
  }
}
 
//game loads onclick
function play() {
  console.log("clicked")
  computerPick(randomNum);
}
