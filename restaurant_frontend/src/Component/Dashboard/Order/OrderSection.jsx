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
    // <div className={style.orderContainer}>
    //   <h2>Orders</h2>
    //   <ul className={style.orderList}>
    //     {
    //       orders.map((order) => (
    //       <li key={order._id} className={style.orderItem}>
    //         <p>Table: {order.table_id.table_number}</p>
    //         <p>Status: {order.status}</p>
    //         <p>Total: {order.total_amount}</p>
    //         <button onClick={() => handleUpdateStatus(order._id, 'completed')}>Mark as Completed</button>
    //         <button onClick={() => handleUpdateStatus(order._id, 'cancelled')}>Cancel Order</button>
    //       </li>
    //     ))
    //     }
    //   </ul>
    // </div>

    <div className={style.OrderWrapper}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">SL No</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Biriyani</td>
            <td>Rs.120.00</td>
            <td>2</td>
            <td>12.09.2024</td>
            <td><button className='btn btn-warning text-white'>Pending</button></td>
            <td>Rs.240.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Biriyani</td>
            <td>Rs.120.00</td>
            <td>2</td>
            <td>12.09.2024</td>
            <td><button className='btn btn-success text-white'>Prepared</button></td>
            <td>Rs.240.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Biriyani</td>
            <td>Rs.120.00</td>
            <td>2</td>
            <td>12.09.2024</td>
            <td><button className='btn btn-warning text-white'>Pending</button></td>
            <td>Rs.240.00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Biriyani</td>
            <td>Rs.120.00</td>
            <td>2</td>
            <td>12.09.2024</td>
            <td><button className='btn btn-warning text-white'>Pending</button></td>
            <td>Rs.240.00</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Biriyani</td>
            <td>Rs.120.00</td>
            <td>2</td>
            <td>12.09.2024</td>
            <td><button className='btn btn-success text-white'>Prepared</button></td>
            <td>Rs.240.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderSection;
