const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res) =>{

})

app.listen(3000, () =>{
    console.log("app started on port 3000")
})