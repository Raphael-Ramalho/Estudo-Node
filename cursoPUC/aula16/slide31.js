var http = require('http');

http.createServer (function (req,res)
{
    res.writeHead(200, {'Content-Type':'texthtml'});
    res.write('<html><body>');
    res.write('<p>' + req.url + '</p>');
    res.end('</html></body>');
}).listen(3000);

console.log('Servidor ativo na porta 3000...');
