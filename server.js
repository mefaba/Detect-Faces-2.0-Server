const express = require("express")
const bcrypt = require("bcrypt-nodejs")
const cors = require("cors")
const knex = require("knex")

const image = require("./controllers/image.js")
const profile = require("./controllers/profile.js")
const register = require("./controllers/register.js")
const signin = require("./controllers/signin.js")

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'facedetect-base'
    }
  });

const app = express()
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cors())

/* app.get("/",(req,res)=>{res.json(database.users)}) */


app.post("/signin",(req,res) => { signin.handleSignin(req,res,db,bcrypt) })

app.post("/register",(req,res) => { register.handleRegister(req,res,db,bcrypt) })

app.get("/profile/:id",(req,res) => { profile.handleProfile(req,res,db) })

app.put("/image",(req,res) => { image.handleImage(req,res,db) })

app.post("/imageURL",(req,res) => { image.handleApiCall(req,res) })


app.listen(3000, () => {
    console.log("app is running on 3000")
})



/*

/signin ----> POST = success/fail
/register ----> POST = user
/profile/:userId ----> GET = user
/image ----> PUT ---> user

*/

/* bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
}); */

    /* database.users.push({
        id: "125",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date() */


            /* bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash)
    }); */

 /*    const database = {
        users:[
            {
                id: "123",
                name: "John",
                email: "john@gmail.com",
                password: "cookies",
                entries: 0,
                joined: new Date()
            },
            {
                id: "124",
                name: "Sally",
                email: "sally@gmail.com",
                password: "cookies",
                entries: 0,
                joined: new Date()
            }
        ],
        login: [
            {
                id: "987",
                hash: "",
                email: "john@gmail.com"
            }
        ]
    } */