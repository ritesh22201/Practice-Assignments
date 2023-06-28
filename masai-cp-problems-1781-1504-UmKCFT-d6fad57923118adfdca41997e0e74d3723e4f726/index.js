// index.js

//  import the crypto module
const crypto = require('node:crypto');

//  get a commands using process.argv
const operation = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];

// complete the  function



switch (operation) {
  case 'add' : {
    console.log(num1 + num2)
    break;
  }

  case 'sub' : {
    console.log(Math.abs(num1 - num2));
    break;
  }

  case 'mult' : {
    console.log(num1 * num2);
    break;
  }

  case 'divide' : {
    console.log(num1 / num2);
    break;
  }

  case 'sin' : {
    console.log(Math.sin(num1));
    break;
  }

  case 'cos' : {
    console.log(Math.cos(num1));
    break;
  }

  case 'tan' : {
    console.log(Math.tan(num1));
    break;
  }

  case 'random' : {
    if(!num1){
      console.log("Provide length for random number generation.");
    }
    else{
      let data = crypto.randomBytes(num1).toString('binary');
      console.log(data);
    }
    break;
  }

  default:
    console.log("Invalid operation");
}
