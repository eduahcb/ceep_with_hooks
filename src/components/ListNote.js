import React from 'react'
import PropTypes from 'prop-types'
import CardNote from './CardNote'

const ListNote = ({ notes, deleteNote }) => {
  return (
    <ul className="list">
      {notes.map((note, index) => (
        <li key={index} className="list-item">
          <CardNote
            index={index}
            category={note.category}
            title={note.title}
            text={note.text}
            deleteNote={deleteNote}
          />
        </li>
      ))}
    </ul>
  )
}

ListNote.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
}

export default ListNote
