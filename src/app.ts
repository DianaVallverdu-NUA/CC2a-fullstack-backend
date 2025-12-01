import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


// create express app & choose port
const app = express();
const port = 3000;

app.use(cors({
  origin: "https://cc-2a-fullstack-frontend.vercel.app",
  methods: "GET,POST,OPTIONS",
  allowedHeaders: "Content-Type",
}));

// app.options("*", (req, res) => {
//   res.sendStatus(200);
// });

let counter = 0;



// setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// setup JSON & body Parser
app.use(bodyParser.json()); // parse json requests
app.use(bodyParser.urlencoded({ extended: false })); // parse url encoded requests

// hello world response
app.get('/', (req, res) => {
  res.send({ message: 'Hello World!' })
})

// setup JSON & body Parser
app.use(bodyParser.json()); // parse json requests
app.use(bodyParser.urlencoded({ extended: false })); // parse url encoded requests

// counter
app.get('/counter', (req, res) => {
  res.send({ counter: counter });
})

app.post('/counter', (req, res) => {
  counter = req.body.counter;
  res.send({ message: 'This method has not been implemented yet' })
})

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

