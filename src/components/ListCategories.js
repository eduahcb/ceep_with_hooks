import React from 'react'
import PropTypes from 'prop-types'

const ListCategories = ({ categories, createCategory }) => {
  const handleCreateCategory = (e) => {
    if (e.key !== 'Enter') return

    const category = e.target.value
    createCategory(category)
  }

  return (
    <section className="categories-container">
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} className="categories-item">
            {category}
          </li>
        ))}
      </ul>
      <input
        className="category-input"
        type="text"
        placeholder="Adicionar categoria"
        onKeyUp={handleCreateCategory}
      />
    </section>
  )
}

ListCategories.propTypes = {
  categories: PropTypes.array,
  createCategory: PropTypes.func,
}

export default ListCategories
