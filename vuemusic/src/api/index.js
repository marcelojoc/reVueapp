import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=Egypt&api_key=${apiKey}&format=json`
 // adiciono en la url la variable
console.log(URL);

export default function getArtist(){

    return fetch(URL)


    .then(res => res.json())
    .then(json => json.topartists.artist)

}