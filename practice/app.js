// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.writeHead(200,{'ContentType': 'plain/text'})
//     res.write(req.url)
//     res.end();
// }).listen('3000');

const express = require('express');
const app = express();
app.use(express.json());
const users = []

app.get('/users',(req,res)=>{
    res.json(users.length === 0 ? {message:'No user found'} : users).status(200)
});

app.post('/users',(req,res)=>{
    const user = users.push(req.body)
    if(user){
        res.json({message:"the value has been added"}).status(200)
    } else {
        res.status(500).json({message:"server error"})
    }
})

app.put('/users/:id',(req,res)=>{ 
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(index => index.id === id)
    if(userIndex !== -1){
        users[userIndex] = req.body;
        res.json({message:"the value has been updated"})
    } else {
        res.status(404).json({message: 'User not found'})
    }
})

app.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(index => index.id === id);
    if(userIndex !== -1){
        users.splice(userIndex,1)
        res.json({message:"deleted successfully"})
    } else {
        res.status(404).json({message: 'User not found'})
    }
    // res.status(204).send()
})

// const logger = (req,res,next) =>{
//     console.log(`${req.method} ${req.url}`)
//     next()
// }
// app.use(logger)
// app.get('/about',(req,res)=>{
//     res.send('About Page')
// })

// app.get('/contact',(req,res)=>{
//     res.send('conatact Page')
// })

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
