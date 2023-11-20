const express = require('express');
const app = express();

require('./db/connection')


app.use(express.json());
app.use(express.urlencoded({extended : true}));


//This is the root route
app.get('/', (req, res) => {
    res.send('Welcome');
})


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})