import React from 'react'
import Menu from '../context/authContext'
const user = () => {
    var usr ={name: 'hola'}
    return (
      <div>
      <Menu/>
      <h1>{usr.name}</h1>
      <p>$(usr.amigos)$ amigos</p>
      <p>$(usr.twits)$ twits</p>
      <a href="$(configuration)$">
        <button>configuracion</button>
      </a>
      </div>
    )
}

export default user
