const express = require('express');
const app = express();
const PORT = 3000;
// this is making a GET request ti the server
app.get('/', (req, res) => {
    res.send('Hello from EL-SALIF LDT\n This is a GET request');
});
// making POST request to the server
app.post('/', (req, res)=> {
    res.send("This is a POST request")
})
 app.listen(PORT, () => {
    console.log('App is listening on port ' + PORT);
 });