import React from 'react'
import CardNote from './CardNote'

import { useDataContext } from '../context/AppContext'

const ListNote = () => {
  const { notes } = useDataContext()

  return (
    <ul className="list">
      {notes.map((note, index) => (
        <li key={index} className="list-item">
          <CardNote
            index={index}
            category={note.category}
            title={note.title}
            text={note.text}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListNote
