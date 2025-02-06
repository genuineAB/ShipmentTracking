const { WebSocketServer } = require("ws");
const express = require("express");
const cors = require("cors");
const { orderItems } = require("./data/orderItems");

const app = express();
app.use(cors());

app.get("/", (req, res) => res.json(orderItems));

const server = app.listen(8080, () =>
  console.log("Server running on http://localhost:8080")
);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send(JSON.stringify(orderItems));

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

setInterval(() => {
  orderItems.forEach((order) => {
    
    order.deliveryStage = Math.floor(Math.random() * 4);

    order.orderPlaced.date = "19 Nov, 2023";
    order.orderPlaced.time = `${Math.floor(Math.random() * 12) + 10}:${Math.floor(Math.random() * 60)}`;

    order.paymentAccepted.date = "19 Nov, 2023";
    order.paymentAccepted.time = `${Math.floor(Math.random() * 12) + 10}:${Math.floor(Math.random() * 60)}`;
    order.paymentAccepted.paymentMethod = Math.random() > 0.5 ? "Visa Credit" : "MasterCard";

    order.inTransit.date = "19 Nov, 2023";
    order.inTransit.time = `${Math.floor(Math.random() * 12) + 10}:${Math.floor(Math.random() * 60)}`;
    order.inTransit.courier = Math.random() > 0.5 ? "DHL Express" : "FedEx";

    order.inWarehouse.date = "19 Nov, 2023";
    order.inWarehouse.time = `${Math.floor(Math.random() * 12) + 10}:${Math.floor(Math.random() * 60)}`;
    order.inWarehouse.courier = Math.random() > 0.5 ? "DHL Express" : "FedEx";
  });

  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(JSON.stringify(orderItems));
    }
  });
}, 5000);

