import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onmessage = (event) => setData(JSON.parse(event.data));
    ws.onclose = () => console.log("Disconnected from WebSocket");

    return () => ws.close();
  }, [url]);

  return data;
};

export default useWebSocket;
