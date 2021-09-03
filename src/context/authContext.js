import React from 'react'

function Menu () {
    let inicioPage = "/",usr={page: "#"};
    return(
    <ul>
      <li>
        <a href={inicioPage}>inicio</a>
      </li>
      <li>salas</li>
      <li>amigos</li>
      <li>
        <a href={usr.page}>yo</a>
      </li>
      <li>sobre nobreAPP...</li> 
    </ul>
  
    )
}

export default Menu
