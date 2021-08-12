const express = require('express')
const app = express()
app.use(express.json()) 
const path = require('path')


//ACCESS PHOTOS
app.use(express.static('public'))

app.use('/public', express.static(path.join(__dirname, '../public')))
//GET REQUESTS
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../project.html'))
  })

app.get('/visited', (req, res) => {
    res.sendFile(path.join(__dirname, '../visited.html'))
  })

app.get('/unvisited', (req, res) => {
    res.sendFile(path.join(__dirname, '../unvisited.html'))
  })

app.get('/bucketlist', (req, res) => {
    res.sendFile(path.join(__dirname, '../bucketlist.html'))
  })

app.get('/stories', (req, res) => {
    res.sendFile(path.join(__dirname, '../stories.html'))
  })

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../gallery.html'))
  })

app.get('/project.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../project.css'))
  })

app.post("/api/bucketlist-form", (req,res)=>{
    let{name,age,mail,animal,creature, color}=req.body;
    console.log(req.body)
    res.status(200).send(`Congratulations ${name}! Please check your email for your destination spot.`)
})



const port = process.env.PORT||5200

app.listen(5500, () => {
    console.log(`Server is up and running`)
  })

