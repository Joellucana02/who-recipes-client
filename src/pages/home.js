import React from 'react'
import Menu from '../context/authContext' 
import Feed from './feed'
  
function Pages() {
  let usr={
    name: 'pepe',
    amigos: 24,
    twits: 48
  }
  return (<>
    <Menu/>
    <h1>copia de discord</h1>
    <div className='twits'>
      <h2>twits</h2>
      <Feed/>
    </div>

    <hr></hr>

    <h1>funcion otro-usuario</h1>
    <Menu/>
    <img src={usr.img}></img>
    <h1>{usr.name}</h1>
    <p>{usr.amigos} amigos</p>
    <p>{usr.twits} twits</p>
    <button>agregar amigo</button>

  </>);
}
  
export default Pages
