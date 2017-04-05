const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "mytopsecret",
  cookie:{
    maxAge: 60000
  }
}))

app.get("/ask", function(req, res){
  res.render("ask.hbs", {
    title:"asking name"
  })
})

app.post("/submit_name", function(req, res){
  var name = req.body.name;
  req.session.name = name;
  console.log(req.session.name);
  res.redirect("/greet");
})

app.get("/greet", function(req, res){
  res.render("greet.hbs", {
    name: req.session.name
  })
})

app.listen(3000, function(){
  console.log("listening to 3000...weather is awful")
})
