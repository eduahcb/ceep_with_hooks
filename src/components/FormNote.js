import React, { useState } from 'react'
import { useDataContext } from '../context/AppContext'

const FormNote = () => {
  const [category, setCategory] = useState('Sem categoria')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const { categories, createNote } = useDataContext()

  const handleCreateNote = async (e) => {
    e.preventDefault()

    if (title === '' || text === '') return

    createNote(category, title, text)
    clearForm()
  }

  const clearForm = () => {
    setCategory('Sem categoria')
    setTitle('')
    setText('')
  }

  return (
    <form className="form">
      <select
        className="categories"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option defaultValue={category} value={category}>
          Selecione uma categoria
        </option>
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
      <input
        className="form-input"
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="5"
        className="form-note"
        placeholder="Escreva a sua nota..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="button-group">
        <button className="form-button" onClick={handleCreateNote}>
          Criar Nota
        </button>
      </div>
    </form>
  )
}

export default FormNote
