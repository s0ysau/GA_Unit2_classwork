const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({msg: 'Hello Universe'})
})

app.get('/superman', (req, res) => {
    res.status(200).json({msg: 'Superman'})
})

app.get('/:num1/:num2', (req, res) => {
    const ans = parseInt(req.params.num1) + parseInt(req.params.num2)
    res.status(200).json({msg: `The anwser is ${ans}`})
})

app.listen(3000, () => {
    console.log('I am listening to all requests now on port 3000')
})