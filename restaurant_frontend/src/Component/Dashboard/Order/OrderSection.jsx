import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './orders.module.css';

const OrderSection = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/restaurant/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(response.data.orders);
      } catch (error) {
        console.log('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  const handleUpdateStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:8000/api/order/status`, {
        orderID: orderId,
        status,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedOrders = orders.map((order) => {
        if (order._id === orderId) {
          return { ...order, status };
        }
        return order;
      });

      setOrders(updatedOrders);
    } catch (error) {
      console.log('Error updating order status:', error);
    }
  };

  return (
    <div className={style.orderContainer}>
      <h2>Orders</h2>
      <ul className={style.orderList}>
        {orders.map((order) => (
          <li key={order._id} className={style.orderItem}>
            <p>Table: {order.table_id.table_number}</p>
            <p>Status: {order.status}</p>
            <p>Total: {order.total_amount}</p>
            <button onClick={() => handleUpdateStatus(order._id, 'completed')}>Mark as Completed</button>
            <button onClick={() => handleUpdateStatus(order._id, 'cancelled')}>Cancel Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSection;
