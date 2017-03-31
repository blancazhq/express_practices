var express = require("express");
var app = express();
var path = require('path');

var animals = [
  { name: 'cats', favorite: true },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: true },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
];

app.use(express.static(path.join(__dirname,'public')));

app.set("view engine", "hbs");


app.get("/fav_animals", function(req, res){
  res.render("fav_animals.hbs", {
    title:"favorite animal",
    animals:animals
  })
});

// app.get("/:name", function(req, res){
//   var name=req.params.name;
//   res.send("Hello "+name+"!");
// });

app.get("/greet/:name", function(req, res){
  var name=req.params.name;
  var age = req.query.age;
  var born_year= 2017-age;
  res.render("age.hbs", {
    title:"Tell your age",
    name:name,
    born_year:born_year
  })
});

app.listen(3000, function(){
  console.log("listening...")
});
