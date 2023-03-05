const express = require('express');
const app = express();
const PORT = 3000;

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
// this is making a GET request ti the server
app.get('/', (req, res) => {
    res.send({ "customers": customers});
});
// making POST request to the server
app.post('/', (req, res)=> {
    res.send("This is a POST request")
})
 app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
 });