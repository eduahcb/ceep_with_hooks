import React from 'react'

import FormNote from './components/FormNote'
import ListCategories from './components/ListCategories'
import ListNote from './components/ListNote'

import './components/style.css'

function App() {
  return (
    <section className="content">
      <FormNote />
      <main className="main-content">
        <ListCategories />
        <ListNote />
      </main>
    </section>
  )
}

export default App
