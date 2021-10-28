var http = require('http');

http.createServer (function (req,res)//O req é a requisição e o res é o response. A requisição representa a solicitação do cliente
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body>');
    res.write('<p>Hello World!</p>');
    res.end  ('</body></html>');
}).listen(3000);

console.log('Servidor ativo na porta 3000...');


//para subir o servidor, digite o comando node nomeDoArquivo.Extensão. Certifique-se de estar na pasta do arquivo

