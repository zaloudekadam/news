
const express = require('express');

const app = express();

app.use("/", express.static("public"))
//const api = new NewsAPI(process.env.TOKEN);

const port = process.env.PORT || 3000;

const news = require("./news");
const hn = require("./hn");
const reddit = require("./reddit");

app.get("/api/general", async (req, res) => {
    res.send(await news.general());
})
app.get("/api/cz", async (req, res) => {
    res.send(await news.cz())
})
app.get("/api/getTech", async (resq, res) => {
    res.send(await news.tech());
})

app.get("/api/search", async (req, res) => {
    res.send(await news.search(req.query.q));
})

app.get("/api/hn", async (req, res) => {
    res.send(await hn.best());
})


app.get("/frontpage", async (req, res) => {
    res.send(await reddit.front());
})


app.listen(port, () => {

    console.log(`listening at ${port}`);

})





/*
{
      "src": "/",

      "methods": ["GET"],

      "dest": "/public/general_news.html"
    },
    {
      "src": "/tech",

      "methods": ["GET"],

      "dest": "/public/tech_news.html"
    },
    {
      "src": "/hacker",

      "methods": ["GET"],

      "dest": "/public/hn.html"
    },
    {
      "src": "/front",

      "methods": ["GET"],

      "dest": "/public/reddit.html"
    },

    {
      "src": "/cz",

      "dest": "/index.js",

      "methods": ["GET"]
    },

    {
      "src": "/getTech",

      "dest": "/index.js",

      "methods": ["GET"]
    },

    {
      "src": "/general",

      "dest": "/index.js",

      "methods": ["GET"]
    },
    {
      "src": "/hn",

      "dest": "/index.js",

      "methods": ["GET"]
    },
    {
      "src": "/frontpage",

      "dest": "/index.js",

      "methods": ["GET"]
    },

    {
      "src": "/search",

      "dest": "/index.js",

      "methods": ["GET"]
    } */