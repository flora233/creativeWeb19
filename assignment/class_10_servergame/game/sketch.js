const io = require("socket.io-client")
const socket = io("http://localhost:3000")

var w = windowWidth
var h = windowHeight

function setup(){
    createCanvas(w,h);
}

function draw(){
    background(100,10)
}