var http = require('http');
var fs   = require('fs'); // o modulo fs serve para abrir arquivos

http.createServer (function (req,res)
{
    fs.readFile(req.url.slice(1), function(err, data)
    {
        res.writeHead(200, {'Content-Type':'text/html'});

        if (err)
            console.log('Arquivo inexistente!');
        else
            res.write(data);

        res.end();
    });
}).listen(3000);

console.log('Servidor ativo na porta 3000...');

