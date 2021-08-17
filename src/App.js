
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
  return (<div>
{/*<!-- variables
	$(usr.page)$      = pagina del usuario
	$(inicioPage)$   = pagina de inicio
	$(red-social)$    = nombre de nuestra app
	$(usr.name)$    = nombre del usuario
	$(usr.amigos)$    = cantidad de amigos del usuario
	$(usr.twits)$     = cantidad de twits del usuario
	$(configuration)$ = pagina de configuracion del usuario
	$(usr.img)$       = link de la imagen del usuario
--> */}

    <h1>funcion inicio</h1>
      <Menu/>
      <h1>copia de discord</h1>
      <h2>twits</h2>
      <Twits idTwit={12}/>
    <hr></hr>

    <h1>funcion usuario</h1>
      <Menu/>
      <h1>$(usr.name)$</h1>
      <p>$(usr.amigos)$ amigos</p>
      <p>$(usr.twits)$ twits</p>
      <a href="$(configuration)$">
        <button>configuracion</button>
      </a>
    <hr></hr>

    <h1>funcion otro-usuario</h1>
      <Menu/>
      <img src="$(usr.img)$"></img>
      <h1>$(usr.name)$</h1>
      <p>$(usr.amigos)$ amigos</p>
      <p>$(usr.twits)$ twits</p>
      <button>agregar amigo</button>
    <hr></hr>

    </div>);
}

export default App;
