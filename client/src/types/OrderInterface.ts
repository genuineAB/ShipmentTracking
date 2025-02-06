export interface OrderStatus {
    date: string;
    time: string;
    paymentMethod?: string;
    courier?: string;
    receiptNo?: string;
  }
  
  export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    price: string;
    lightImage: string;
    darkImage: string;
    deliveryStage: number;
    orderPlaced?: OrderStatus;
    paymentAccepted?: OrderStatus;
    inTransit?: OrderStatus;
    inWarehouse?: OrderStatus;
  }