import { useEffect, useState } from "react";
import ShipmentTracker from "./ShipmentTracker";
import OrderHistory from "./OrderHistory";
import useWebSocket from "react-use-websocket";
import { OrderItem } from "../types/OrderInterface";

const OrderTracking = () => {
  const [openHistoryModal, setOpenHistoryModal] = useState<boolean>(false);
  const [orderIndex, setOrderIndex] = useState<number>(0);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const { lastMessage } = useWebSocket("ws://localhost:8080");

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage?.data);

      setOrderItems(data);
    }
  }, [lastMessage]);

  const handleOrderHistory = (index: number) => {
    setOpenHistoryModal(true);
    setOrderIndex(index);
  };
  return (
    <section className="bg-white flex items-center justify-center min-h-screen py-8 dark:bg-gray-900 md:py-16 min-w-[1440px]">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl text-center font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Track the Delivery of Your Order
        </h2>

        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
          <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 dark:divide-gray-700 dark:border-gray-700 lg:max-w-xl xl:max-w-2xl">
            {orderItems.map((item, index) => (
              <div key={index} className="space-y-4 p-6">
                <div className="  p-4">
                  <ShipmentTracker currentStage={item.deliveryStage} />
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="h-14 w-14 shrink-0">
                    <img
                      className="h-full w-full dark:hidden"
                      src={item.lightImage}
                      alt={item.name}
                    />
                    <img
                      className="hidden h-full w-full dark:block"
                      src={item.darkImage}
                      alt={item.name}
                    />
                  </a>
                  <a
                    href="#"
                    className="min-w-0 flex-1 font-medium text-gray-900 hover:underline dark:text-white"
                    onClick={() => handleOrderHistory(index)}
                  >
                    {item.name}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Product ID:
                    </span>{" "}
                    {item.id}
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <p className="text-base font-normal text-gray-900 dark:text-white">
                      x{item.quantity}
                    </p>
                    <p className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="fixed top-20 right-30 w-[375px]">
            <OrderHistory
              showOrder={openHistoryModal}
              setShowOrder={setOpenHistoryModal}
              orderItems={orderItems[orderIndex]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;
