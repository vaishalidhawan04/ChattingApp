const express=require('express')
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


require('./db/connection')
const port=process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send('welcome');
})

app.listen(port,()=>{
    console.log('listening on port'+port);
})