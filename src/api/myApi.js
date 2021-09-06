import React from 'react'
import {
  useEffect,
  useState
} from 'react'
import axios from 'axios'
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
const dbDirectory = 'https://randomuser.me/api'

// function twitInfo () {
//   const twitInfo = axios.get (dbDirectory)
//   console.log(twitInfo)
//   return (twitInfo.data) 
// }
const data = {
  "posts": [
    {
      "tags": [],
      "ingredients": [],
      "steps": [],
      "difficulty": "easy",
      "dishes": "1",
      "cockingTime": "30min",
      "votes": [],
      "favs": [],
      "_id": "611e112f695186367cc77b94",
      "title": "some kind of food title 1",
      "desc": "made for testing porpuses 1",
      "userId": "611c12aa27ba4a1dc86b971d",
      "comments": [],
      "date": "2021-08-19T08:07:11.017Z",
      "__v": 0
    },
    {
      "tags": [],
      "ingredients": [],
      "steps": [],
      "difficulty": "easy",
      "dishes": "1",
      "cockingTime": "30min",
      "votes": [],
      "favs": [],
      "_id": "611e18cabbecb4254877e6f6",
      "title": "some kind of food title 2",
      "desc": "made for testing porpuses 2",
      "userId": "611c12aa27ba4a1dc86b971d",
      "comments": [],
      "date": "2021-08-19T08:39:38.034Z",
      "__v": 0
    },
    {
      "tags": [],
      "ingredients": [],
      "steps": [],
      "difficulty": "easy",
      "dishes": "1",
      "cockingTime": "30min",
      "votes": [],
      "favs": [],
      "_id": "611e18f92897b629f098876e",
      "title": "some kind of food 3",
      "desc": "made for testing porpuses 3",
      "userId": "611c12aa27ba4a1dc86b971d",
      "comments": [],
      "date": "2021-08-19T08:40:25.251Z",
      "__v": 0
    }
  ]
}


const extraerDatos = {
  idTwits: {
    principal: () => {
      const twitsMaximos = 10
      let princTwits = []
      let maxTwits
      if (data.users.length < 10){
        maxTwits = data.users.length
      }else{
        maxTwits = twitsMaximos
      }
      for (let i=0;i<data.users.length;i++){
        princTwits[i] = i
      }
      return princTwits
    }
  },
  twit: (numero) => {
    // console.log("id que buzca el algoritmo = "+numero);//test-123
    // console.log(data.posts[numero]);//test-123
    return data.posts[numero]
  },
  usuario: (usuario) => {
    let i = 0
    let puntero
    while (i<data.users.length || !puntero == null) {
      if (data.users[i]._id == usuario){
        puntero = data.users[i]
      }
      i++
    }
    return
  }
}

// const MyApi = () => {
//   const [userInfo, setUserInfo] = useState(null)
//   useEffect (async () => {
//     try {
//       setUserInfo(await axios.get(dbDirectory))
//       // console.log(userInfo) // test-123 
//     } catch (error) {
//       console.error('no se pudo obtener datos de la api')
//     }
//   },[])
//   return(<>
//     <h1>hola</h1>
//     <p>{userInfo?userInfo.data.results[0].name.first:"no data"}</p>
//   </>)
// }

export default extraerDatos
