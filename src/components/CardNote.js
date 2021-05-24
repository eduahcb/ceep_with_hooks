import React from 'react'
import PropTypes from 'prop-types'

import deleteIcon from '../assets/delete.svg'

const CardNote = ({ index, category, title, text, deleteNote }) => {
  const handleDeleteNote = () => {
    deleteNote(index)
  }

  return (
    <section className="card-note">
      <img
        className="delete-icon"
        src={deleteIcon}
        onClick={handleDeleteNote}
      />
      <header>
        {category !== 'Sem categoria' && (
          <h4 className="category-text">{category}</h4>
        )}
        <h3 className="card-title">{title}</h3>
      </header>
      <p className="card-text">{text}</p>
    </section>
  )
}

CardNote.propTypes = {
  index: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  deleteNote: PropTypes.func,
}

export default CardNote
