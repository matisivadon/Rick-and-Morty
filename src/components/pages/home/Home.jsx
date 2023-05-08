import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
    <h1 className='home-tittle'>RICK AND MORTY</h1>
    <Link to="/characters" className='link-to-characters'>Ver personajes</Link>
    </div>
  )
}

export default Home