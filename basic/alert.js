// alert("hii ");
// let notify = prompt("enter the num", "458");
// console.log("notify");
// window.console.log(window);
// console.log(document.body);
// document.body.style.background = "blue";

//practise set
//Q.1 write program using prompt function to take input of age as a value from the user and use alert to tell him if  the can drive.
// let age = prompt("Enter your age");
// Number.parseInt(age);
// if (age <= 18) {
//   alert("you age is less than 18 ");
// } else {
//   alert("you can drive");
// }

//Q2 in the Q1 use confirm to ask  user if he wants to see the prompt again
// let age = prompt("Enter your age");
// Number.parseInt(age);
// let runagain = true;
// while (runagain) {
//   const candrive = (age) => {
//     return age >= 18 ? true : false;
//   };
//   if (candrive(age)) {
//     alert("you age is less than 18 ");
//   } else {
//     alert("you can drive");
//   }
//   runagain = confirm("do you want to play again");
// }

//Q3 use console error the error if thr age in negative
let age = prompt("Enter your age");
Number.parseInt(age);
let runagain = true;
while (runagain) {
  if (age <= 0) {
    console.error("enter correct num");
    break;
  }

  if (candrive(age)) {
    alert("you age is less than 18 ");
  } else {
    alert("you can drive");
  }
  runagain = confirm("do you want to play again");
}
