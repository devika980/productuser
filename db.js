var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Devika:devikakd@cluster0.sqgpign.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
     console.log("CONNECTED TO DB")
})
.catch((err)=>{console.log(err)})