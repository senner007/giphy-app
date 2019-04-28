
import key from "./keyfile.js";

console.log(key)

var wrapGif = (gif) => {
    return  "<img src=" + gif + ">";
}

function getGifs(input) {
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${key}&limit=5`)
    .then(response => response.json())
    .then((response) => {

        document.querySelector('.container').innerHTML = 
        response.data.map(gif => wrapGif(gif.images.fixed_width.url)).join('')

    });
}

document.querySelector('button').addEventListener('click', () => {
    getGifs(document.querySelector('input').value)
})