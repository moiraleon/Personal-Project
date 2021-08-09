

app.post("/api/bucketlist-form", (req,res)=>{
    let{name,age,mail,animal,creature, color}=req.body;
    console.log(req.body)
    res.status(200).send(`Congratulations ${name},! please check your email for your destination spot`)
})