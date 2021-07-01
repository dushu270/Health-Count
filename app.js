const express=require("express")
const bodyparser=require("body-parser")
const ejs=require("ejs")
const path=require("path")
const session=require('express-session')
const bmiRoute=require("./routes/bmi")
const calorieRoute=require("./routes/calorie")
const app=express()

app.set("view engine", "ejs");


app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/")));
app.use(session({
    secret:"dushu270",
    resave:false,
    saveUninitialized: false
}))

app.use("/",bmiRoute)
app.use("/",calorieRoute)

app.get("/",function(req,res){
   
    res.render("home")
})



app.use((req, res, next) => {
    res.status(404).render("error")
   })

   let port = process.env.PORT;
   if (port == null || port == "") {
     port = 3000;
   }

   
   

app.listen(port,function(req,res){
    console.log("server started")
})    
