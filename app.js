var express = require('express');
require('./db')
var userRoutes = require('./routes/userRoute')
var productRoutes = require('./routes/productRoutes')
var app = express();

app.use(express.json());
var port = 4000;

app.use('/api',userRoutes);
app.use('/app',productRoutes);
app.listen(port,(req,res)=>{
    console.log(`server is up and running in ${port}`)
})