import React from 'react'

import { useDataContext } from '../context/AppContext'

const ListCategories = () => {
  const { categories, createCategory } = useDataContext()

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

export default ListCategories
