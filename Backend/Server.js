//step 1: create a folder.
//step 2: move to that folder in terminal
//step 3: npm init -y
//step 4: install express
//step 5:  create server.js file

const express = require('express');
const app = express(); // instantiated express's instance called app.

//specificallty parse json and adds it to the req.body object
const bodyParser = require('body-parser'); // for post or put
app.use(bodyParser.json());

// mongoose is used to connect express server -> backend
const mongoose = require('mongooose')
mongoose.connect('mongodb://localhost:27017/myDB',{ //.connect is a promise
    useNewUrlParser:true,
    useUnifiedTopology:true // these are some configs that are mandat.
}) // "myDB", if the db with same name exists then it will enter the db and if not then it will create a new db.

.then(()=>{console.log("Connection Succesfull")}) // resolve state of promise
.catch( (error)=>{console.log("Recived an error")}) // reject state of promise

//server listens to some port , set the port -> 8000 (totally choice)
const port = 8000;

app.listen(port,()=>{
    console.log(`server running at `,port);  //made the app listen to the specfic port and created a callback
    //on running the server would be live at port no. 8000
})
//now create routes

//GET
app.get('/',(req,res)=>{
    res.send("response sent using get req on path '/' ");
}) // this means:  whenever you reach to the '/' path or basically home screen, you will get the string in response sent using res.send.

//POST - for post req we cannout use '/' so we can give any path let say /api/cars/ we can access it as:
//https://localhost:3000/api/cars/

app.post('/api/cars/',(req,res)=>{
    const {carName, carBrand} = req.body; // the data we want to post would def be present in the request body, that's why we used req.body for fetching data.
    console.log(carName);
    console.log(carBrand);
    res.send("Car Submitted successfully");
}) // on going to the browser at address - https://localhost:3000/api/cars/, we'll not see any thing CUZ we can see the post requests like that in the browsers.

//FOR POST REQ WE WILL USE POSTMAN
//~POSTMAN STEPS:
//1. click new -> HTTP req 
//2. set the req type to POST
//3. body->raw :  data type -> json
//4. enter the data in json format to send as request to the server.
//5. now to parse the data body parser of speicific (JSON) type is required.

// //code without comments:


// const express = require('express');
// const app = express();
// const bodyParser =  require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/27017/mydb',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{console.log("connected to db succesfully")})
// .catch((error)=>{console.log("error recieved")})

// app.use(bodyParser.json());

// const port = 8001;

// app.listen(port,(req,res)=>{
//     console.log("app listening on port: ", port);
// });

// app.get('/',(req,res)=>{
//     res.send("server listening");
// })
// app.post('/api/cars',(req,res)=>{
//     const {carName, carBrand} = req.body;
//     console.log(carName);
//     console.log(carBrand);

//     res.send("car submitted successfully");
// });



