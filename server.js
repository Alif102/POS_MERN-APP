const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');


const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { bgCyan } = require('colors');
const connectMG = require('./config/config');
const path = require('path')

require('colors');
 
dotenv.config();
connectMG();




//rest object
const app = express();

//middlewares 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));

//static

 app.use(express.static(path.join(__dirname,"./client/build")));
 app.get('*', function(req,res){
 res.sendFile(path.join(__dirname,'./client/build/index.html'));

 })
 



//routes
 //app.get('/', (req,res)=> {
   // res.send(" <h1> pos backend <h1> ");
//}); 

app.use("/api/items", require('./routes/itemRoutes'));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute")); 


//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, ()=>{
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
  
})



