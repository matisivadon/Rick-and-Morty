import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardCharacter from '../../common/cardCharacter/CardCharacter'
import './characters.css'

const Characters = () => {

    const [characters, setCharactes] = useState([])

    useEffect(()=>{

        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setCharactes(res.data.results))
    }, [])


  return (
    <>
    <h2 className='characters-title'>Characters</h2>
    <div className='characters-container'>
    {
        characters.map((character)=> {
            return (<CardCharacter character={character} key={character.id}/>)
        })
    }
    </div>
    </>
  )
}

export default Characters