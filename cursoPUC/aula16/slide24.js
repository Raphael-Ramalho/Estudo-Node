var http = require('http');

http.createServer (function (req,res)
{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<html><body>');
    res.write('<h1>Titulo de nivel 1</h1>');
    res.write('<h2>Titulo de nivel 2</h2>');
    res.write('<h3>Titulo de nivel 3</h3>');
    res.write('<h4>Titulo de nivel 4</h4>');
    res.write('<h5>Titulo de nivel 5</h5>');
    res.write('<h6>Titulo de nivel 6</h6>');
    res.end  ('</body></html>');
}).listen(3000);

console.log('Servidor ativo na porta 3000...');
