import('formidable').then((formidable) => {

    var http = require('http');

http.createServer((req, res) => {
    if(res.url == '/fileupload') {
        var forms = new formidable.IncomingForm();
        forms.parse(req,(err,filed,files)=>{
            res.write("File Upload");
            res.end();
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.end();
    }
}).listen(8080);
}).catch((err) => {console.error(err)})
// const formidable = require('formidable');
