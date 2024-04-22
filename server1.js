//19/04 - Criar o primeiro servidor web usando node
const http = require('http');

const server =http.createServer((req,res)=>{
    console.log("Efetuando o pedido\n");
    //declarando um heder
    res.setHeader('cont - type','text/html');
    res.send("Tá querendo u quer seu sem noção?</h1>");
    res.write("<h1>Tá querendo u quer seu sem noção?</h1>");
    res.write("<h3> Uma Pizzaaa!<h3>");
   
    res.end();
})
 
    
server.listen(3000,'localhost',()=>{
    console.log("Servidor está ativo");
})

server.listen(porta,host,()=>{
    console.log("servidor está ativo");
})












