import React from 'react'
import './feed.css'
import {
  useEffect,
  useState
} from 'react'
import extraerDatos from "../api/myApi"

function Twit(props){
  const [userInfo, setUserInfo] = useState()
  const [twitInfo, setTwitInfo] = useState()
  // console.log(props.id); //test-123
  try {
    useEffect (async () => {
      setTwitInfo (extraerDatos.twit(props.id))
    },[])
    // console.log(twitInfo);//test-123
    return (
      <div className='twit'>
        <h2>{twitInfo.title}</h2>
        <p>{twitInfo.difficulty}</p>
        <p>{twitInfo.cockingTime}</p>
        <p>{twitInfo.desc}</p>
        <p>{twitInfo.dishes}</p>
        <p>{twitInfo.date}</p>
      </div>
    )
  } catch (error) {
    return <></>
  }
}


function Feed () {
  const idTwits = [0,1,2]
  return (<>
    <div className='principal'>
      {idTwits.map ((props)=>{
        return <Twit id={props}/>
      })}
    </div>
  </>)
}

export default Feed
