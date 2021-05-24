import React, { useState } from 'react'

import FormNote from './components/FormNote'
import ListCategories from './components/ListCategories'
import ListNote from './components/ListNote'

import './components/style.css'

function App() {
  const [categories, setCategories] = useState([])
  const [notes, setNotes] = useState([])

  const createCategory = (name) => {
    const newCategories = [...categories, name]
    setCategories(newCategories)
  }

  const createNote = (category, title, text) => {
    const note = { category, title, text }
    const newNote = [...notes, note]
    setNotes(newNote)
  }

  const deleteNote = (index) => {
    const newNotes = notes.filter((note, i) => index !== i)
    setNotes(newNotes)
  }

  return (
    <section className="content">
      <FormNote categories={categories} createNote={createNote} />
      <main className="main-content">
        <ListCategories
          categories={categories}
          createCategory={createCategory}
        />
        <ListNote notes={notes} deleteNote={deleteNote} />
      </main>
    </section>
  )
}

export default App
