// @ts-nocheck
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import "./Orders.scss";

import { Order } from "../../components";

import { useStateValue } from "../../StateProvider";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const {
    state: { user, basket },
    dispatch
  } = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot => {
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders.map((order, i) => {
          return <Order key={i} order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
