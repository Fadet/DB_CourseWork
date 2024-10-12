import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import './Order.css';
import {useAuthUser} from "react-auth-kit";
import {UserOrdersDataContext} from "./MainComponent";

function formatDate(date) {
  return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}


export function Orders() {
  const userData = useAuthUser();
  const [userOrdersData, setUserOrdersData] = useContext(UserOrdersDataContext);
  const [orders, setOrders] = useState(undefined);

  useEffect(() => {
    // setOrders({data: ORDERS});
    const index = userOrdersData.findIndex((obj) => obj.id === userData().email);
    if (index !== -1) {
      setOrders(userOrdersData[index]);
    }
  }, []);

  return (
    (orders !== undefined) && orders.data.map((order) =>
      <Order
        key={order.id}
        {...order}
      />
    )
  );
}

function Order({id, date, price, status}) {
  return <>
    <div className={'order_card d-flex flex-row align-items-center justify-content-between'}>
      <h3>Заказ №{id}</h3>
      <h4 className={'text-secondary opacity-75'}>{formatDate(new Date(date))}</h4>
      <h4>{status}</h4>
      <h4>{price}</h4>
    </div>
  </>
}