//Random number between 0-2 and get that index of the letters array
//This will be the computers pick
const randomNum = Math.floor(Math.random() * 10 % 3);
console.log(randomNum, " random number");

let lost = localStorage.setItem("losses", 0);
let wins = localStorage.setItem("wins", 0);

//reach into local storage
lost = localStorage.getItem("looses");
wins = localStorage.getItem("wins");

//Function to get computers random pick on page load
function computerPick(randoNumo) {
  const lettersArray = ["r", "p", "s"];

 var compPicked = lettersArray[randoNumo]
 console.log(compPicked, "comp picked!")
 
 
 var conf = confirm(`so far you have ${lost} looses & ${wins} wins.`+"Ok to play?");
 //add switch
  if (conf) {
    const myPick = prompt("pick r,p,s..");
    if (myPick) {
     if(compPicked === myPick) {
      //  console.log("r");
      //wins tick up once
      //and set wins into local storage
      wins++;
      // localStorage.setItem("wins", wins);

      alert("you choose wisely, lets see if you can do it again")
      confirm(" you Win! Would you like to play again?");
      //game loads 
      computerPick(randomNum);
     } else {
      console.log('you lost');
      //looses ticks up
      //and put looses into local storage
      lost++;
      // localStorage.setItem("looses", lost);
      // lost = localStorage.getItem("looses");
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
//game loads on page load
computerPick(randomNum);
