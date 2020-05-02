const NewsAPI = require('newsapi');
const api = new NewsAPI(process.env.TOKEN);

module.exports = {
    general: async function () {
        return api.v2.topHeadlines({

            sources: "cnn, bbc-news, google-news, reuters,the-washington-pos, time, vice-news "

        }).then(response => {

            return response;

        });
    },
    cz: async function () {

        return api.v2.topHeadlines({

            country: "cz"

        }).then(response => {

            let result = {};
            result.articles = [];

            let newsSources = ["Seznamzpravy.cz", "Ides.cz", "Aktualne.cz", "Zive.cz", "Ceskatelevize.cz"]

            for (let n of response.articles) {

                if (newsSources.includes(n.source.name)) {
                    result.articles.push(n);
                }
            }
            return (result);
        });
    },
    tech: async function () {
        return api.v2.topHeadlines({

            sources: "ars-technica, techcrunch, techradar, the-verge, wired"
            //category: "technology"

        }).then(response => {

            return (response);

        });
    },
    search: async function (q) {
        return api.v2.everything({

            q,

            language: 'en',

            sortBy: 'popularity',

        }).then(response => {

            return (response);

        });
    }
}