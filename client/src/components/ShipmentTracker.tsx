import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, Package, Home } from "lucide-react";


const shipmentStages = [
  { id: 1, label: "Order Placed", icon: Package },
  { id: 2, label: "Shipped", icon: Truck },
  { id: 3, label: "Out for Delivery", icon: Home },
  { id: 4, label: "Delivered", icon: CheckCircle },
];

interface ShipmentProps {
  currentStage: number;
}

const ShipmentTracker: React.FC<ShipmentProps> = ({ currentStage }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Shipment Tracking</h2>
      <div className="flex items-center w-full justify-between relative">
      <motion.div
          className="absolute top-5 left-0 h-1 bg-gray-300"
          animate={{ width: `${(currentStage / (shipmentStages.length - 1)) * 100}%`, backgroundColor: "#16a34a" }}
          style={{ transition: "width 0.3s ease-in-out" }}
        />
        {shipmentStages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center relative">
            <motion.div
              animate={{ backgroundColor: index <= currentStage ? "#16a34a" : "#d1d5db" }}
              className="w-10 h-10 flex items-center justify-center rounded-full text-white"
            >
              {React.createElement(stage.icon, { size: 20, className: "text-white" })}
            </motion.div>
            <p className={`mt-2 text-sm ${index <= currentStage ? "text-green-600" : "text-gray-400"}`}>
              {stage.label}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ShipmentTracker;
