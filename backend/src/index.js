
import express from "express";
import cors from 'cors';
import { PORT } from "./config/serverConfig.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ Server is running properly!");
});


app.get("/ping" , (req,res)=> {
  res.json({
    "message" : "pong cutie pie"
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`); 
});
