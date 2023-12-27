import React, {useContext, useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useAuthUser} from "react-auth-kit";
import {UserOrdersDataContext} from "./MainComponent";
import data from "bootstrap/js/src/dom/data";

export function Orders() {
    const userData = useAuthUser();
    const [userOrdersData, setUserOrdersData] = useContext(UserOrdersDataContext);
    const [orders, setOrders] = useState(undefined);

    useEffect(() => {
        const index = userOrdersData.findIndex((obj) => obj.id === userData().email);
        if (index !== -1) {
            setOrders(userOrdersData[index]);
        }
    }, []);

    return (
        <>
            {(orders !== undefined) && orders.data.map((order)=>(
                <div>
                    <h1>Заказ №{order.id}</h1>
                    <div>
                        <h2>Дата покупки: {order.date}</h2>
                        <h3>Сумма заказа: {order.price}</h3>
                    </div>
                    <div>
                        Статус: {order.status}
                    </div>
                </div>
            ))}
        </>
    );
}