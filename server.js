const { clear } = require('console')
const http=require('http')


function reqListener(req,res){
  console.log("My name is Piyush")
}


const server=http.createServer(reqListener)


server.listen(4000)



