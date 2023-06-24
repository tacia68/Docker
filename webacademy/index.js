const http= require("http");

const servidor = http.createServer((req, res) =>{


    res.end("<h1>Singelo servidor node dentro de conteiner docker<h1>");

});

servidor.listen(3000, () => console.log("SERVIDOR NODE RODANDO 3000"));