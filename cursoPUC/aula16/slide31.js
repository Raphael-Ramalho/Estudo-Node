var http = require('http'); //modulo http é baixado pelo 'required' e guardado na variável http 

http.createServer (function (req,res)
{
    res.writeHead(200, {'Content-Type':'texthtml'});
    res.write('<html><body>');
    res.write('<p>' + req.url + '</p>');// o req possui uma proprierade 'url' que contém a url do domínio. A url do domíno é a parte final dele. Procure na internet sobre caso tenha alguma duvida.
    res.end('</html></body>');
}).listen(3000);

console.log('Servidor ativo na porta 3000...');
