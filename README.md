```markdown
# Order Tracking Application

This is a full-stack application that tracks the delivery status of orders using a WebSocket server for real-time updates and a React frontend. The app provides live updates about order statuses like "Order Placed," "Payment Accepted," "In Transit," and "In Warehouse."

## Project Structure

The project consists of two main parts:
- **Server**: A siple Node.js WebSocket server that sends real-time order updates.
- **Client**: A React frontend application that receives and displays these updates.

```
- server/          (Contains Node.js server code)
  - server.js      (WebSocket server code)
- client/          (Contains React app code)
  - src/           (React source code)
  - public/        (Public assets)
  - package.json   (React app dependencies and scripts)
- package.json     (Root level package file, including both client and server scripts)
```

## Features

- Real-time updates on order statuses via WebSocket.
- Server dynamically updates order details every 5 seconds (order stage, placed date, payment accepted, etc.).
- Frontend (React) listens to WebSocket messages and updates the UI accordingly.
- Easy-to-use development setup using npm scripts.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/genuineAB/ShipmentTracking.git
cd order-tracking-app
```

### 2. Install dependencies for both client and server
To install dependencies for both parts of the app, run the following commands:

```bash
npm run install-server    # Install server dependencies
npm run install-client    # Install client dependencies
```

This will install the necessary dependencies for both the React frontend and Node.js backend.

### 3. Run the application
Once the dependencies are installed, you can start both the server and client by running the following:

```bash
npm start
```

This will run the following scripts concurrently:
- The **Node.js WebSocket server** at `http://localhost:8080`.
- The **React frontend** at `http://localhost:3000`.

### 4. Visit the application
Once both the client and server are running, open your browser and navigate to `http://localhost:3000` to view the React app. The order details will be displayed with live updates.

## How it Works

- **Backend (Node.js)**:
  The WebSocket server is built using `ws` library and sends order updates every 5 seconds. The data includes information like the order stage (`inWarehouse`, `inTransit`, etc.), payment status, courier details, etc.

- **Frontend (React)**:
  The frontend listens to the WebSocket server and receives updated order details. The data is then displayed dynamically on the page.

### Example Order Data:
```json
{
  "orderPlaced": {
    "date": "19 Nov, 2023",
    "time": "10:47",
    "receiptNo": "#6473254"
  },
  "paymentAccepted": {
    "date": "19 Nov, 2023",
    "time": "10:47",
    "paymentMethod": "Visa Credit"
  },
  "inTransit": {
    "date": "19 Nov, 2023",
    "time": "10:47",
    "courier": "DHL Express"
  },
  "inWarehouse": {
    "date": "19 Nov, 2023",
    "time": "10:47",
    "courier": "DHL Express"
  },
  "deliveryStage": 0
}
```

## Scripts

- `npm run start`: Starts both the React app and the Node.js WebSocket server concurrently.
- `npm run install-client`: Installs React app dependencies.
- `npm run install-server`: Installs server dependencies.
- `npm run server`: Starts the Node.js server (`node server.js`).
- `npm run client`: Starts the React app (`npm start --prefix client`).

## Technologies Used

- **Node.js** (with `express`, `ws`, and `cors`): Backend WebSocket server.
- **React**: Frontend for displaying order details and listening for updates.
- **WebSockets**: Used for real-time communication between the server and the frontend.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Bamigboye Abiola](https://github.com/genuineAB)

## Acknowledgments

- This project is built using `ws` for WebSocket communication.
- React is used for building the frontend.
- Thanks to open-source libraries that made this project easier to develop.

```

You can copy and paste this directly into your `README.md` file.

Let me know if you need any modifications or further assistance!