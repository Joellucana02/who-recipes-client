import React from 'react'
import MyApi from "../api/myApi"

function Twit(idTwit) {
  let usr={
    img: "direccion de la imagen",
    name: "Juan Pedro Mendoza"
  }
  let twit={
    img: "principal image.png",
    texto: "fdsdlfjlsañjldfjlñajslkfsñlad",
    likes: 20,
    dislikes: 4
  }
  return (
  <div className='twit'>
    <img src={usr.img}></img>
    <p>{usr.name}</p>
    <p>{twit.likes}</p>
    <p>{twit.dislikes}</p>
    {/* las imagenes a utilizar */}
  </div>
  )
}

function Feed () {

  return (
    <div>
      <Twit/>
    </div>
  )
}

export default Feed
