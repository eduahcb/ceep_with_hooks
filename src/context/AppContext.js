import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { useCategories, useNotes } from '../hooks'

const AppContext = React.createContext()
AppContext.displayName = 'AppContext'

const useDataContext = () => {
  const context = useContext(AppContext)

  if (typeof context === 'undefined') {
    throw new Error('useDataContext must be used within a AppProvider')
  }

  return context
}

const AppProvider = ({ children }) => {
  const { categories, createCategory } = useCategories()
  const { notes, createNote, deleteNote } = useNotes()

  const value = {
    categories,
    createCategory,
    notes,
    createNote,
    deleteNote,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.any,
}

export { AppProvider, AppContext, useDataContext }
