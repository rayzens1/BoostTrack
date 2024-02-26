var express = require('express')
var cors = require('cors')
const axios = require('axios')

var app = express()

app.use(cors())

const API_KEY = 'RGAPI-6d1feb40-bef5-4d46-980a-48bcd17e33dd'

function getPlayerPUUID(gameName, gameTag, regionName) {
    return axios.get(`https://${regionName}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${gameTag}?api_key=${API_KEY}`)
        .then(response => {
            console.log(response.data)
            return response.data
        }).catch(err => err)
}

app.get('/playerPUUID', async (req, res) => {
    const gameName = req.query.gameName;
    const gameTag = req.query.gameTag;
    const regionName = req.query.regionName;

    const playerPUUID = await getPlayerPUUID(gameName,gameTag,regionName)

    console.log(playerPUUID)

    res.json(playerPUUID)
})

app.listen(4000, function() {
    console.log("server started on port 4000")
})