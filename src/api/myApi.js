import React from 'react'
import {
  useEffect,
  useState
} from 'react'
import axios from 'axios'
const randomUser = 'https://randomuser.me/api'


const MyApi = () => {
  let [userInfo, setUserInfo] = useState(null)
  useEffect (async () => {
    try {
      const usuario = await axios.get(randomUser)
      console.log(usuario.data) // test-123
      setUserInfo(usuario.data)
      console.log(userInfo) // test-123 
    } catch (error) {
      console.error('no se pudo obtener datos de la api')
    }
  },[])
  return(<>
    <h1>holaa</h1>
    <p>{userInfo?userInfo.results[0].name.first:"no data"}</p>
  </>)
}

export default MyApi
