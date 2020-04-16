const express = require("express");
const bodyparser = require('body-parser');
const fetch = require("node-fetch");
const app = express()
const PORT = process.env.PORT ||3000


const URL = "https://covid19.mathdro.id/api";
const countriesURL = "https://covid19.mathdro.id/api/countries/";

app.use(express.static("public"))
app.use(bodyparser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.render("home.ejs")
})


app.get("/total", (req, res) => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            res.render("total.ejs", {
                data: data
            })
        })
        .catch(err => console.log(err))

})




app.post("/", (req, res) => {
    let query = req.body.search;
    // console.log(typeof query);

    const URL = countriesURL + query
    // console.log(URL);
    if (query !== "") {
        fetch(URL)
            .then(response => response.json())
            .then(datas => {
                if (typeof datas.error !== "object") {
                    // console.log(typeof datas.error !== "object");
                    res.render("home.ejs", {
                        countryInfo: datas,
                        countryName: query.toUpperCase()
                    })
                } else {
                    res.redirect("back")
                }
            })
            .catch(err => console.log(err))
    } else {
        res.redirect("back")
    }

})

app.listen(PORT, _ => console.log(`Server is Running on the PORT ${PORT}`))