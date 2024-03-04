import React from 'react'
import data from './data.js'
import Hero from '../components/Hero.jsx'
import Header from '../components/Header.jsx'

function App() {
  const heroComp= data.map(heroComp => {
    return (
      <Hero 
        key = {heroComp.id}
        {...heroComp}
      />
    )
  })

  return (
    <div className="final-score">
      <Header />
      <main>
        {heroComp}
      </main>
    </div>
    
  )
}

export default App
