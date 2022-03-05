const express = require('express')
const app = express()
const port = 4000
const socket = require('socket.io')

var server =app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));

//socket
var io = socket(server);
io.on('connection',function(socket){
  console.log('made socket connection')
});