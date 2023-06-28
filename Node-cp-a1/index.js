const fs = require("fs");
const path = require("path");

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case 'read' : {
    fs.readFile(file, 'utf-8', (err, data) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(data);
      }
    });
    break;
  }

  case 'append' : {
    fs.appendFile(file, `\n${content}`, (err) => {
      if(err){
        console.log(err)
      }
    })
    break;
  }

  case 'delete' : {
    fs.unlink(file, (err) => {
      if(err){
        console.log(err);
      }
    })
    break;
  }

  case 'create' : {
    fs.writeFile(file, '', (err) => {
      if(err){
        console.log(err);
      }
    })
    break;
  }

  case 'rename' : {
    fs.rename(file, content, (err) => {
      if(err){
        console.log(err)
      }
    })
    break;
  }

  case 'list' : {
    const dirr = path.join(__dirname, file);
    fs.readdir(dirr, (err, data) => {
      if(err){
        console.log(err)
      }
      data.forEach((el) => {
        console.log(el);
      })
    })
    break;
  }

  default:
    console.log(`Invalid operation '${operation}'`);
}
