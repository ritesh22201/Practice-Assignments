What does thread of execution means in JavaScript?


Where the JavaScript code gets executed?


What does context means in Global Execution Context?


When do you create a global execution context.


Execution context consists of what all things?


What are the different types of execution context? There are two types of execution : 

But when any function get executed it create function execution context

When global and function execution context gets created?


Create a execution context diagram of the following code on your notebook. Take a screenshot/photo and store it in the folder named img. Use ![](./img/image-name.png) to display it here.

```js
var user = "Arya";

function sayHello() {
  return `Hello ${user}`;
}

var userMsg = sayHello(user);


var marks = 400;
var total = 500;

function getPercentage(amount, totalAmount) {
  return (amount * 100) / totalAmount;
}

var percentageMarks = getPercentage(marks, total);
var percentageProfit = getPercentage(400, 200);


var age = 21;

function customeMessage(userAge) {
  if (userAge > 18) {
    return `You are an adult`;
  } else {
    return `You are a kid`;
  }
}

var whoAmI = customeMessage(age);
var whoAmIAgain = customeMessage(12);

```