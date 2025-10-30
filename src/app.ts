import express from "express";
import cors from "cors";

let counter = 0; 

// create express app & choose port
const app = express();
const port = 3000;

// setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// hello world response
app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

// counter
app.get('/counter', (req, res) => {
  res.send({counter: counter});
})

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

