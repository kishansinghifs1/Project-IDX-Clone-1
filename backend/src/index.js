import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import chokidar from "chokidar";
import path from "path";
/*important */
const app = express();
const server = createServer(app); //create http module server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
}); //work websocket connection + http connection
//work on same code + same server

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

io.on("connection", (socket) => {
  console.log(` a user connected`);
}); //"Whenever a new client connects to the server, run the following function.”

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("âœ… Server is running properly!");
});

const editorNamespace = io.of("/editor");
editorNamespace.on("connection", (socket) => {
  console.log("editor is connected");
  //somehow we will get projectId from frontend
  let projectId = "1234";
  if (projectId) {
    var watcher = chokidar.watch(`./projects/${projectId}`, {
      ignored: (path) => path.includes("node_modules"), //ignoring node_modules folder
      persistwnt: true /** keeps the watcher in running state till the time app is runing */,
      awaitWriteFinish: {
        stabilityThreshold: 2000 /**wait for 2 sec after writing the file +
      ensure stability of files before triggering event */,
      },
      ignoreInitial: true /**ignore the initial add events when watcher is started */,
    });

    watcher.on("all", (event, path) => {
      console.log(event, path);
    });
  }
  socket.on("message", (data) => {
    console.log("got a message event", data);
  });
  socket.on("disconnect", async() => {
    await watcher.close(); //stop watching the project folder
    console.log("editor disconnected");
});

});

server.listen(PORT, () => {
  console.log(`dev Server is running on port ${PORT}`);
}); //not app.listen bcz we r using http module server so we have to use server.listen
