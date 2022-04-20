// const body = document.body;
// const div = document.createElement("div");
// const button = document.createElement("Button");
// body.append(div);
// body.append(button);
// div.innerHTML = "Hey There";
// button.innerHTML = "Click here";

// document.querySelector("button").style.background = "Yellow";
// document.querySelector("div").textContent = "Project";

// you can only append child on nodes
//body.appendChild('Hello')

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

// myArray.length;
// //myArray.push(10);
// //myArray.pop[0];
// console.log(myArray.length);
// console.log(myArray.indexOf(1));

// console.log(`let's do some algorithm`);
// var num = 3;
// function number () {
//     return 1 + num;
// }
// number();
// console.log(number());

// DIFFERENCE BETWEEN TEXTCONTENT AND INNERTEXT IN THE DOM

// const div = document.querySelector("div");
// // Text content will take the HTML
// //as is and display the text
// console.log(div.textContent);

// // InnerText looks at the CSS as well as
// // In this case since the span as a
// // display: none, it will just print the text what's visible,...
// console.log(div.innerText);

// ***** CREATE ELEMENT AND APPEND THEM TO THE PARENTS

// // create a variable to store the targeted element
// const body = document.body;
// // create another variable of the object/tag we want to create;
// // use the createElement method to create it.
// const div = document.createElement('div');
// const firstTag = document.createElement('h1');
// //Add a content to the element you created
// div.textContent = "Hey There";
// firstTag.textContent = "This is the big Title";
// //append the element to its parent node
// div.append(firstTag);
// body.append(div);

const body = document.body;
const div = document.createElement("div");
const firstTag = document.createElement("h2");
const span = document.createElement("span");
const ul = document.createElement('ul');


//innerHTML will remove the strong tag. This is not safe
span.innerHTML = "<strong>Hello Wold </strong>";
//span.innerText = "<strong>Hello Wold</strong>";

//BEST WAY TO DO IT is
// const strong = document.createElement("strong");
// strong.innerText = "Hello world 2: This is much better";

firstTag.textContent = "This is a second tag";
ul.textContent = "my list";
div.append(firstTag);
div.append(span);

body.append(div);
