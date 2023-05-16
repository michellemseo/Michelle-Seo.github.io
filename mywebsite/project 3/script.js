// const names = [
//     'Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank', 'Grace', 'Heidi', 'Ivan', 'Judy', 'Kevin', 'Laura', 'Mike', 'Nancy', 'Oscar', 'Patty', 'Quincy', 'Ralph', 'Samantha', 'Tom', 'Ursula', 'Victor', 'Wendy', 'Xander', 'Yvonne', 'Zachary'
//   ];
  
//   const rollDiceButton = document.getElementById('rollDice');
//   const outputDiv = document.getElementById('output');
  
//   function rollDice() {
//     const randomIndex = Math.floor(Math.random() * names.length);
//     outputDiv.textContent = names[randomIndex];
//   }
  
//   rollDiceButton.addEventListener('click', rollDice);
  
// Function to generate a random number between 1 and 6
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
//   }
  
//   // Get the dice element
//   const dice = document.querySelector(".dice");
  
//   // Add event listener to the dice element
//   dice.addEventListener("click", function() {
//     // Generate a random number between 1 and 6
//     const randomNumber = rollDice();
  
//     // Remove all the dots from the dice
//     const dots = document.querySelectorAll(".dot");
//     dots.forEach(dot => dot.style.display = "none");
  
//     // Display the appropriate number of dots
//     switch (randomNumber) {
//       case 1:
//         dots[2].style.display = "block";
//         break;
//       case 2:
//         dots[0].style.display = "block";
//         dots[4].style.display = "block";
//         break;
//       case 3:
//         dots[0].style.display = "block";
//         dots[2].style.display = "block";
//         dots[4].style.display = "block";
//         break;
//       case 4:
//         dots[0].style.display = "block";
//         dots[1].style.display = "block";
//         dots[3].style.display = "block";
//         dots[4].style.display = "block";
//         break;
//       case 5:
//         dots[0].style.display = "block";
//         dots[1].style.display = "block";
//         dots[2].style.display = "block";
//         dots[3].style.display = "block";
//         dots[4].style.display = "block";
//         break;
//       case 6:
//         dots[0].style.display = "block";
//         dots[1].style.display = "block";
//         dots[2].style.display = "block";
//         dots[3].style.display = "block";
//         dots[4].style.display = "block";
//         dots[5].style.display = "block";
//         break;
//     }
//   });
  

const diceSides = ['A', 'B', 'C', 'D', 'E', 'F'];
const nameList = ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Grace', 'Henry', 'Isabel', 'John', 'Katherine', 'Liam', 'Mary', 'Nancy', 'Oliver', 'Pamela', 'Quentin', 'Rachel', 'Sarah', 'Tom', 'Ursula', 'Victoria', 'William', 'Xavier', 'Yvonne', 'Zack'];

function rollDice() {
	const dice = document.querySelector('.dice');
	const name = document.querySelector('#name');
	const rolledSide = Math.floor(Math.random() * 6);
	const rolledLetter = diceSides[rolledSide];
	
	dice.style.animation = 'none';
	dice.offsetHeight;
	dice.style.animation = 'roll-dice 0.5s ease-in-out forwards';
	
	const filteredNames = nameList.filter(name => name.charAt(0) === rolledLetter);
	const randomName =
