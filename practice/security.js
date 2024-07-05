const express = require('express')
const app = express()

app.get('/error',(req,res,next)=>{
    const err = new Error('something is wrong')
    err.status = 500
    next(err)
})
app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(err.stack || 500).json({
        message: err.message,
        status : err.status || 500
    })
})
app.listen(3000,()=>{
    console.log(
        'Server is running on port 3000'
    )
})