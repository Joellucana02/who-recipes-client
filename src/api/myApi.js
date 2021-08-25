import React from 'react'
import {
  useEffect,
  useState
} from 'react'
import axios from 'axios'
const randomUser = 'https://randomuser.me/api'


const MyApi = () => {
  let [userInfo, setUserInfo] = useState(null)
  useEffect (() => {
    const callApi =async ()=>{
      
      const usuario = await axios.get(randomUser)
      const usuarioData = await usuario.data
      console.log(usuarioData.results) // test-123
      setUserInfo(usuarioData)
      console.log(userInfo) // test-123
      /* try {
      } catch (error) {
        console.error('no se pudo obtener datos de la api')
      } */
    }
    callApi()
  },[])
  return(<>
    <h1>holaa</h1>
    <p>{userInfo?userInfo.results[0].name.first:"no data"}</p>
  </>)
}

export default MyApi
