const  getFilms  = require('./handler')
const { emptyForms, sendMovie } = require('./form')

getFilms()

const clearButton = document.getElementById('buttonClear')
clearButton.addEventListener('click', emptyForms)

const sendButton = document.getElementById('buttonSend')
sendButton.addEventListener('click', sendMovie)









