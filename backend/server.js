import express from 'express';
import mongoose from "mongoose";
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';


const app = express();
const conn = mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/quadrifoglio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

conn.catch(err => console.log(err));


//use Routers
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});