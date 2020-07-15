const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log('Note exist')
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
   saveNotes(notesToKeep) 
   if (notesToKeep.length !== notes.length){
       console.log(chalk.bgGreen('Note removed!'))
   } else {
       console.log(chalk.bgRed('No note found!'))
   }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse('Your notes:'))
    notes.forEach(note => {
        console.log(note)
    });
}

const readNote = (noteTitle) => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === noteTitle)
    if (noteToRead){
        console.log(noteToRead)
    } else {console.log(chalk.red.inverse('No note found!'))}
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}