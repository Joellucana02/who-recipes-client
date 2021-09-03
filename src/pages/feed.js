import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//link de la api: "https://randomuser.me/api/"
//realizar el consumo dentro de la funcion
const Feed = () => {
  const [apiData, setApiData] = useState("");
  const api = "";

  return (
    <>
      <h3>DATA WILL RENDER HERE</h3>
      {apiData ? (
        <>
          <h4>hi there</h4>
          <h4>data: {apiData}</h4>
        </>
      ) : (
        "no data"
      )}
    </>
  );
};

export default Feed;

/* 
const api = "https://randomuser.me/ap i/";
useEffect(() => {
  const consumirApi = async () => {
    try {
      const rawData = await axios.get(api);
      const usuarioObj = await rawData.data.results[0];
      console.log(usuarioObj);
      console.log(usuarioObj.name.first);
      setApiData(usuarioObj);
    } catch (error) {
      console.log(error);
    }
  };
  consumirApi();
}, []);
return (
  <>
    <h3>DATA WILL RENDER HERE</h3>
    {apiData ? (
      <>
        <h4>hi there</h4>
        <h4>username: {apiData.name.first}</h4>
      </>
    ) : (
      "no data"
    )}
  </>
); */
