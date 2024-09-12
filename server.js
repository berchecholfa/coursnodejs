 const http=require('http')




 const server=http.createServer((req,res)=>{
  
//  res.setHeader('content-type','text/html')
//   res.write(req.url)
   if(req.url=='/home'){
    res.write('welcom from home')
  }else if(req.url=='/contact')
    {
        res.write('welcome from contact')
    } else if(req.url=='/about'){
        res.write('welcome from about')
    }else{
        res.statusCode=404

        res.write('not found')
    }


  res.end()
 })
 server.listen(5000,()=>{console.log('server running')})