const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const workerrouter = require('./routes/WorkerRouter')
const Userrouter = require('./routes/UserRouter');
const Cartrouter = require('./routes/CartRouter');


const app = express();
const dotenv = require('dotenv');

dotenv.config();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("*",cors({ origin:'http://localhost:3001', credentials: true,optionSuccessStatus:200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
mongoose
  .connect(
  'mongodb+srv://paragrane:P%40rane999@cluster0.ozsdbxl.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err, "something went wrong"));

app.use('/worker',workerrouter);
app.use('/user',Userrouter);
app.use('/cart',Cartrouter)


app.listen(3000,console.log("server started on 3000"));