import React from 'react';
import { format } from 'date-fns';
import { getOrderStatus } from '../lib/helpers';

const recentOrderData = [
    {
        id: '1',
        product_id: '1004',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2024-01-17T03:24:00',
        order_total: '$19.99',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '2',
        product_id: '1006',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2024-02-14T05:24:00',
        order_total: '$23.99',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '3',
        product_id: '1001',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2024-02-17T07:14:00',
        order_total: '$1419.99',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '4',
        product_id: '1005',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2024-01-16T12:40:00',
        order_total: '$15.89',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '5',
        product_id: '1002',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '2024-03-10T03:24:00',
        order_total: '$1199.99',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '6',
        product_id: '1003',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '2024-02-14T05:24:00',
        order_total: '$999.99',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]

const RecentOrders = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Orders Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-gray-800">
          <thead>
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Product ID</th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Order Total</th>
              <th className="p-4">Shipping Address</th>
              <th className="p-4">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-100 transition-all border-b border-gray-200"
              >
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.product_id}</td>
                <td className="p-4">{order.customer_name}</td>
                <td className="p-4">{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                <td className="p-4">{order.order_total}</td>
                <td className="p-4">{order.shipment_address}</td>
                <td className={`p-4 ${getOrderStatusColor(order.current_order_status)}`}>
                  {getOrderStatus(order.current_order_status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Function to determine the color based on order status
const getOrderStatusColor = (status) => {
  switch (status) {
    case 'PLACED':
      return 'text-blue-500';
    case 'CONFIRMED':
      return 'text-green-500';
    case 'SHIPPED':
      return 'text-yellow-500';
    case 'OUT_FOR_DELIVERY':
      return 'text-orange-500';
    case 'DELIVERED':
      return 'text-green-700';
    default:
      return 'text-gray-700';
  }
};

export default RecentOrders;
