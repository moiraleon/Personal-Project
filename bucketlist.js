const express = require('express')
const app = express()
app.use(express.json()) 
// const packageJson = require('package.json');

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.post("/api/bucketlist-form", (req,res)=>{
    let{name,age,mail,animal,creature, color}=req.body;
    console.log(req.body)
    res.status(200).send(`Congratulations ${name},! please check your email for your destination spot`)
})

app.listen(5500, () => {
    console.log(`Server is up and running`)
  })