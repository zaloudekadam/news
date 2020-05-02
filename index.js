
const express = require('express');

const app = express();

app.use("/", express.static("public"))
//const api = new NewsAPI(process.env.TOKEN);

const port = process.env.PORT || 3000;

const news = require("./news");
const hn = require("./hn");
const reddit = require("./reddit");

app.get("/general", async (req, res) => {
    res.send(await news.general());
})
app.get("/cz", async (req, res) => {
    res.send(await news.cz())
})
app.get("/getTech", async (resq, res) => {
    res.send(await news.tech());
})

app.get("/search", async (req, res) => {
    res.send(await news.search(req.query.q));
})

app.get("/hn", async (req, res) => {
    res.send(await hn.best());
})


app.get("/frontpage", async (req, res) => {
    res.send(await reddit.front());
})


app.listen(port, () => {

    console.log(`listening at ${port}`);

})