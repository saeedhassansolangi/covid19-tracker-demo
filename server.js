const express = require("express");
const bodyparser = require('body-parser');
const fetch = require("node-fetch");
const app = express()
const PORT = 3000

const URL = "https://covid19.mathdro.id/api";

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


app.use(express.static("public"))


app.get("/", (req, res) => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            res.render("home.ejs", { data: data })
        })
    .catch(err => console.log(err))  

})

app.listen(PORT,_=>console.log(`Server is Running on the PORT ${PORT}`))