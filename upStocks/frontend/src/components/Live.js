// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchHistoricalData } from '../redux/actions'

// const Live = () => {
//     const dispath = useDispatch();
//     const { historicalData } = useSelector(state => state.market);
//     useEffect(() => {
//         dispath(fetchHistoricalData());
//     }, []);
//     return (
//         <div>Live</div>
//     )
// };
// export default Live;
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function Live() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('data', data => console.log('Response: ' + data));
    socket.on('error', error => console.log("error" + error));
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  return (
    <p>
      It's {response && response.map((item, index) => {
        return (
          <div key={index}>{item}</div>
        );
      })}
    </p>
  );
}

export default Live;