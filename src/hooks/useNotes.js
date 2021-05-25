import { useState } from 'react'

const useNotes = () => {
  const [notes, setNotes] = useState([])

  const createNote = (category, title, text) => {
    const note = { category, title, text }
    const newNote = [...notes, note]
    setNotes(newNote)
  }

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => index !== i)
    setNotes(newNotes)
  }

  return {
    notes,
    createNote,
    deleteNote,
  }
}

export default useNotes
