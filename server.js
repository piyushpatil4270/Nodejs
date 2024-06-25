const http=require('http')


function reqListener(req,res){
   const url=req.url
   console.log(url)
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   if(url==='/home')  res.write("Welcome home")
   else if(url==='/about') res.write("Welcome to About Us")
   else if(url==='/node') res.write("Welcome to my Node-js Project")
   else res.write("Page does'nt exist")
  res.end()
}


const server=http.createServer(reqListener)


server.listen(4000,()=>console.log("server started"))



