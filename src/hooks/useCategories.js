import { useState } from 'react'

const useCategories = () => {
  const [categories, setCategories] = useState([])

  const createCategory = (name) => {
    const newCategories = [...categories, name]
    setCategories(newCategories)
  }

  return {
    categories,
    createCategory,
  }
}

export default useCategories
