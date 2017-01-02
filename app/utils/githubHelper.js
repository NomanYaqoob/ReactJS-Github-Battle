var axios = require('axios');



var id = "";
var sec = "";
var params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get("https://api.github.com/users/" + username + params)
}

function getRepos(username) {
    //fetch user repos
    console.log("REPOS", username)
    return axios.get("https://api.github.com/users/" + username + "/repos" + params + "&per_page=100");
}

function getTotalStars(repos) {
    return repos.data.reduce((prev, curent) => {
        return prev + curent.stargazers_count
    }, 0);
    // calculate the total starts
}

function getPlayersData(player) {
    //get repos
    //get TotalStars
    //return object with the data

    return getRepos(player.login)
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}
function calculateScores(players) {
    console.log('zxzzzzzzzzzzzz', players)
    //returns an array of scores
    return [
        players[0].followers * 3 * players[0].totalStars,
        players[1].followers * 3 * players[1].totalStars
    ]
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(username => {
            return getUserInfo(username);
        })).then(info => {
            console.log(info);
            return info.map(userInfo => {
                return userInfo.data;
            })
        }).catch(err => {
            console.log("err", err);
        })
    },

    battle: function (players) {
        let playerOneData = getPlayersData(players[0]);
        let playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch(err => { console.log("err in getPlayersInfo", err) })
    }
}


module.exports = helpers;