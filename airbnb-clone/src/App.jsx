import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
import data from './data.js'
function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key= {item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="card--lists">
        {cards}
      </section>
    </div>
  )
}

export default App
