import { useEffect, useState } from "react";
import OrderHistoryModal from "./Modal";
import { OrderItem } from "../types/OrderInterface";
import {
  BadgeDollarSign,
  Box,
  Bus,
  Check,
  Cross,
  House,
  Plane,
  Truck,
  X,
} from "lucide-react";

interface OrderHistoryProps {
  showOrder: boolean;
  setShowOrder: (show: boolean) => void;
  orderItems: OrderItem;
}

const OrderHistory: React.FC<OrderHistoryProps> = ({
  showOrder,
  setShowOrder,
  orderItems,
}) => {
  const [openModal, setOpenModal] = useState(showOrder);

  useEffect(() => {
    if (showOrder) {
      setOpenModal(true);
    }
  }, [showOrder]);

  const handleCloseModal = () => {
    setOpenModal(false);
    setShowOrder(false);
  };

  return (
    <>
      <OrderHistoryModal isOpen={openModal} onClose={handleCloseModal}>
        <div className="">
          <div className="space-y-6 min-w-[375px] rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Order history
            </h3>

            <ol className="relative ms-3 border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-700 dark:ring-blue-800">
                  {orderItems?.deliveryStage > 2 ? <Check /> : <X />}
                </span>
                <h4 className="mb-0.5 text-base font-semibold text-blue-700">
                  Today
                </h4> 
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Delivered
                </p>
              </li>

              <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-700 dark:ring-blue-800">
                  {orderItems?.deliveryStage > 1 ? <Check /> : <Plane />}
                </span>
                <h4 className="mb-0.5 font-semibold">
                  {orderItems?.inWarehouse?.date},{" "}
                  {orderItems?.inWarehouse?.time}
                </h4>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Products our for delivery</p>
              </li>

              <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-700 dark:ring-blue-800">
                  {orderItems?.deliveryStage > 1 ? <Check /> : <Truck />}
                </span>
                <h4 className="mb-0.5 text-base font-semibold">
                  {orderItems?.inTransit?.date}, {orderItems?.inTransit?.time}
                </h4>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Product Shipped - {orderItems?.inTransit?.courier}
                </p>
              </li>

              <li className="mb-10 ms-6 text-primary-700 dark:text-primary-500">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-700 dark:ring-blue-800">
                  {orderItems?.deliveryStage > 0 ? (
                    <Check />
                  ) : (
                    <BadgeDollarSign />
                  )}
                </span>
                <h4 className="mb-0.5 font-semibold">
                  {orderItems?.paymentAccepted?.date},{" "}
                  {orderItems?.paymentAccepted?.time}
                </h4>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Payment accepted -{" "}
                  {orderItems?.paymentAccepted?.paymentMethod}
                </p>
              </li>

              <li className="ms-6 text-primary-700 dark:text-primary-500">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-700 dark:ring-blue-800">
                  <Check />
                </span>
                <div>
                  <h4 className="mb-0.5 font-semibold">
                    {orderItems?.orderPlaced?.date},{" "}
                    {orderItems?.orderPlaced?.time}
                  </h4>
                  <a href="#" className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Order placed - Receipt {orderItems?.orderPlaced?.receiptNo}
                  </a>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </OrderHistoryModal>
    </>
  );
};

export default OrderHistory;
