const fetch = require('node-fetch');

module.exports = {
    front: async function () {

        return fetch("https://www.reddit.com/.json")
            .then(res => res.json())
            .then(body => {
                return body;
            })

    }
}

//https://www.reddit.com/r/tumblr/top/.json?t=day/.json