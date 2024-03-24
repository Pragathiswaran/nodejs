var fs = require('fs');

fs.rename('demo.txt','janda.txt',(err)=>{
    if (err) throw err; 
    console.log('Renamed!');
})