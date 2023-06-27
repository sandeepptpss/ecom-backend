require('dotenv').config()
const express = require('express');
 const cors = require('cors');
const mongoose = require('mongoose');
const path=require('path');
const app = express();
const bodyParser = require('body-parser')
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');





//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecom');
  console.log('database connected')
}

app.use(express.json());
app.use(cors());
app.use(express.static(process.env.PUBLIC_DIR));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/registers',userRouter.router);
app.use('/products',productRouter.router);
app.use('/',authRouter.router);

app.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'))
})
app.listen(process.env.PORT, () => {
  console.log('app started on port',process.env.PORT);
});


