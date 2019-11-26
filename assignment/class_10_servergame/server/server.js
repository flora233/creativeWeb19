const Express = require("express")();
const Http = require("http").Server(Express);
const server = require("socket.io")(Http);

var user = {
    x: 200,
    y: 200,
}

Http.listen(3000, () => {
    console.log("listening to port 3000...")
})

server.on("connection", () => {
    socket.emit("user", user)
    socket.on("disconnect", () => {
        console.log("user disconnected!")
    })
})
