import React from 'react';
import style from "./table.module.css"
const Table = () => {
  const salesData = [
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'Alex Doe', order_name: 'Burger', total: '$204.98' },
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'David Mart', order_name: 'Pizza', total: '$240.55' },
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'Roe Parter', order_name: 'Pizza', total: '$250.88' },
    { date: '02 Aug 2024',order_mode:"Online", customer: 'Diana Penty', order_name: 'Burger', total: '$1700.66' },
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'Martin Paw', order_name: 'Pizza', total: '$560.56' },
    { date: '02 Aug 2024',order_mode:"Online", customer: 'Doe Alex', order_name: 'Pizza', total: '$440.95' },
    { date: '02 Aug 2024',order_mode:"Online", customer: 'Alana Lexa', order_name: 'Burger', total: '$607.33' },
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'Rexel Mags', order_name: 'Pizza', total: '$203.53' },
    { date: '02 Aug 2024',order_mode:"Offline", customer: 'Tiana Loths', order_name: 'Burger', total: '$406.52' },
  ];

  const topSellingProducts = [
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Burger', price: '$1142' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Pizza', price: '$1567' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Ice-cream', price: '$1234' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Momos', price: '$2312' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Gobi Chili', price: '$1456' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Pizza', price: '$1567' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Ice-cream', price: '$1234' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Momos', price: '$2312' },
    { src:'https://cdn-icons-png.flaticon.com/256/889/889783.png',product: 'Gobi Chili', price: '$1456' },
    
  ];

  return (
    <div className={style.container}>
      <div className={style.section}>
        <h1>Recent Sales</h1>
        <table>
          <thead>
            <tr>
              <th><h2>Date</h2></th>
              <th><h2>Order Mode</h2></th>
              <th><h2>Customer</h2></th>
              <th><h2>Order</h2></th>
              <th><h2>Total</h2></th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index}>
                <td>{sale.date}</td>
                <td>{sale.order_mode}</td>
                <td>{sale.customer}</td>
                <td>{sale.order_name}</td>
                <td>{sale.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={style.section1}>
        <h1>Top Selling Product</h1>
        <table>
          <thead>
            <tr>
              <th colSpan={2} ><h2  style={{marginLeft:"-50px"}}>Product</h2></th>
              <th><h2 style={{marginLeft:"50px"}}>Price</h2></th>
            </tr>
          </thead>
          <tbody>
            {topSellingProducts.map((product, index) => (
              <tr key={index}>
                <img style={{ width: "20px", height: "18",borderRadius:'5px' ,marginLeft:"40px", marginTop: "10px"}} src={product.src} />
                <td style={{paddingRight:"30px"}}>{product.product}</td>
                <td style={{paddingLeft:"120px"}}>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;