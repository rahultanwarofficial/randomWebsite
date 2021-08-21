const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/nerdy', {useNewUrlParser: true, useUnifiedTopology: true});

const port = 80;

const nerdySchema = new mongoose.Schema({
    name: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,
    msg: String
});

const nerdy = mongoose.model("nerdy" , nerdySchema);

// Express Specific Stuff

app.use('/static' , express.static('static')); // for serving static files
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())

app.get('/' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "index.html"))
});

app.get('/about.html' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "about.html"))
});

app.get('/service.html' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "service.html"))
});

app.get('/login.html' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "login.html"))
});

app.get('/signup.html' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "signup.html"))
});

app.get('/index.html' , (req , res)=>{
    res.status(200).sendFile(path.join(__dirname , "index.html"))
});

app.post('/contact' , (req , res)=>{
    let msg = new nerdy(req.body);
    msg.save().then(()=>{
        res.send("Your Message Has been devivered");
    }).catch(()=>{
        res.status(404).send("404 error")
    })
})

app.post('/login.html' , (req , res)=>{
    let loginData = new nerdy(req.body);
    loginData.save().then(()=>{
        res.send("Login Successful");
    }).catch(()=>{
        res.status(404).send("404 error")
    })
})

app.post('/signup.html' , (req , res)=>{
    let signupData = new nerdy(req.body);
    signupData.save().then(()=>{
        res.send("Now You can login With This Id");
    }).catch(()=>{
        res.status(404).send("404 error")
    })
})

// app.post('/email' , (req, res)=>{
//     console.log("data: " + req.body)
//     res.json({message: 'yeah!'})
// })

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});