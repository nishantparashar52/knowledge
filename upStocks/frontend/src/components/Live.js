import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
const ENDPOINT = "http://127.0.0.1:4001";

function Live() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('data', data => console.log('Response: ' + data));
    socket.on('hello', data => console.log('Response: ' + data));
    socket.on('error', error => console.log("error" + error));
    socket.on("FromAPI", data => {
      setResponse(data);
    });
    socket.on('cpu', cpuPercent => {
      setResponse(currData => [...currData, cpuPercent]);
    })
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <LineChart width={500} height={300} data={response}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" />
      </LineChart>
    </div>
  );
}

export default Live;