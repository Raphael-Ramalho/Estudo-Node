var http = require('http');

http.createServer (function (req,res)
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body>');
    res.write('<p>Hello World!</p>');
    res.end  ('</body></html>');
}).listen(3000);

console.log('Servidor ativo na porta 3000...');
