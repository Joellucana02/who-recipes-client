
function Menu() {
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

function Twits(idTwit) {
  let usr={
    img: "direccion de la imagen",
    name: "Juan Pedro Mendoza"
  }
  let twit={
    img: "holanda",
    texto: "fdsdlfjlsañjldfjlñajslkfsñlad"
  }
  return (<div>
    {/* <img src={usr.img}></img> */}
    <p>{usr.name}</p>
    {()=>{
      // return (<p>holandaaaa</p>)
      if (twit.img == "") {
        return
      }else{
        return (<img src={twit.img}></img>)
      }
    }}
  </div>)
  
}


function App() {
  return <div>hello world!</div>
}

export default App;