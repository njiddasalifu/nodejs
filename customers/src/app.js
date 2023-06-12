const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer')

const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if(process.env.NODE_Env !== 'production'){
    require('dotenv').config();
}
//processing the port from env file
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
    res.send('customer');
});

// this is making a GET request to the server to get the customer
app.get('/', async (req, res) => {
    const result = await Customer.find();
    res.send({ "customers": results});
});


// making POST request to the server
// saving data to database 
app.post('/api/customers', (req, res)=> {
    console.log(req.body);
    const customer = new Customer({
        name: req.body.name,
        industry: req.body.industry
    });
    customer.save();
    //saving the cutomer data to the mongodb cluster

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