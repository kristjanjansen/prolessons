import settings from './settings.js' 

fetch(settings.filename)
    .then(res => res.text())
    .then(text => console.log(text))