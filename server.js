const express = require("express");
const bodyparser = require('body-parser');
const fetch = require("node-fetch");
const app = express()
const PORT = 3000
var flash = require('connect-flash');

const URL = "https://covid19.mathdro.id/api";
const countriesURL = "https://covid19.mathdro.id/api/countries/";
// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


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
                    console.log(typeof datas.error !== "object");

                    res.render("home.ejs", {
                        countryInfo: datas,
                        countryName:query.toUpperCase()
                    })
                    // res.render("home.ejs", { data: data })
                } else {
                    res.send("This city is not in our database")
                }
            })
            .catch(err => console.log(err))
    } else {
        console.log("send send correct info");

        res.send("Send COrrect INfo")
    }

})

app.listen(PORT, _ => console.log(`Server is Running on the PORT ${PORT}`))