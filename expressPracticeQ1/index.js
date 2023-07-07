const express = require("express");
const fs = require("fs");

const { validator } = require("./middleware/validator.middleware")
const { logger } = require("./middleware/logger.middleware");
const app = express();
app.use(express.json());
app.use(logger)



app.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html; charset=utf-8");
    res.write(`<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>`);
    res.end()
})

app.post("/marvel/addnew",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    // console.log(data);
    data.marvel.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("New superhero has been added")
})

app.post("/dc/addnew",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    // console.log(data);
    data.dc.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("New superhero has been added")
})

app.get("/marvel",(req,res)=>{
    let query = req.query.alias;
    // console.log(query)
    if(query){
        let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
        let responce;
        data.marvel.map(element=>{
            if(element.alias == query) responce = element;
        });
        res.send(responce);
    }else{
        let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
        res.send(data.marvel)
    }
})

app.get("/dc",(req,res)=>{
    let query = req.query.alias;
    // console.log(query)
    if(query){
        let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
        let responce;
        data.dc.map(element=>{
            if(element.alias == query) responce = element;
        });
        res.send(responce);
    }else{
        let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
        res.send(data.dc)
    }
})

app.get("/marvel/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let responce;
    data.marvel.map(element=>{
        if(element.id == id) responce = element;
    });
    res.send(responce);
});

app.get("/dc/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let responce;
    data.dc.map(element=>{
        if(element.id == id) responce = element;
    });
    res.send(responce);
});

app.get("/winningteam",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let marvelSum =0;
    let dcSum =0;
    data.marvel.forEach(element => {
        marvelSum+=element.power_level;
    });
    data.dc.forEach(element => {
        dcSum+=element.power_level;
    });
    if(marvelSum>dcSum) res.send(data.marvel);
    else res.send(data.dc)
});

app.use(validator);

app.patch("/marvel/update/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.marvel.map((element)=>{
        
        if(element.id == id){
            // console.log(element)
            element.power_level = req.body.power_level;
            element.role = req.body.role;
        }
    })
    // console.log(data.marvel);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Patched Character Details")
})


app.patch("/dc/update/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.dc.map((element)=>{
        
        if(element.id == id){
            // console.log(element)
            element.power_level = req.body.power_level;
            element.role = req.body.role;
        }
    })
    // console.log(data.dc);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Patched Character Details")
})

app.delete("/marvel/delete/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.marvel = data.marvel.filter(element=>{
        return element.id != id;
    })
    // console.log(data.marvel);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Deleted Character Details")
})


app.delete("/dc/delete/:id",(req,res)=>{
    let id = req.params.id;
    // console.log(id);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.dc = data.dc.filter(element=>{
        return element.id != id;
    })
    // console.log(data.marvel);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Deleted Character Details")
})


app.listen(8080,()=>{
    console.log("Server listening")
})
// Do not forget to export the server.
// e.g => 
module.exports = app;
