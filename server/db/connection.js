const mongoose=require('mongoose');
const url=`mongodb+srv://ayushisharmacs21:eDRLulRs5jvNESjn@cluster0.tmedbod.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log('connected to db')).catch((e)=>console.log('error',e))
 