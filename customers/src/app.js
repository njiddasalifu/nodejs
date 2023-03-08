const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Customer = require('./models/customer')
dotenv.config(); 
const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

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

// creating a customer to be saved in mongodb
const customer = new Customer({
    name: 'Salifu',
    industry: 'Tech'
});
 

app.get('/', (req, res)=> {
    res.send('Welcome !');
});

// this is making a GET request t0 the server
app.get('/', async (req, res) => {
    const result = await Customer.find();
    res.send({ "customers": results});
});


// making POST request to the server
app.post('/api/customers', (req, res)=> {
    console.log(req.body);
    res.send(req.body);
});
 

 // start of mongodb connect
  const start = async() => {
    try{
        await mongoose.connect(CONNECTION);

        // starting the application after mongoDB connects 
        app.listen(PORT, () => {
            console.log('App is listening on port ' + PORT);
        });
    } catch(e){
        console.log(e.message);
    }
  };

  start();