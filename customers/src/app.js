const express = require('express');
const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//dotenv.config(); 
const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

// adding some JSON 
const customers = [
    {
        "name": "Salif",
        "Industry": "Tech"
    },
    {
        "name": "Harrisu",
        "Industry": "TeleMed"
    },
    {
        "name": "Santus",
        "Industry": "FinTech"
    }
];
// this is making a GET request t0 the server
app.get('/', (req, res) => {
    res.send({ "customers": customers});
});
// making POST request to the server
app.post('/api/customers', (req, res)=> {
    console.log(req.body);
    res.send(req.body);
});
 

 // start of mongodb connect
  const start = async() => {
    try{
        await mongoose.connect('mongodb+srv://njiddasalifu:Salifu@cluster0.npdgefe.mongodb.net/?retryWrites=true&w=majority');

        // starting the application after mongoDB connects 
        app.listen(PORT, () => {
            console.log('App is listening on port ' + PORT);
        });
    } catch(e){
        console.log(e.message);
    }
  };

  start();