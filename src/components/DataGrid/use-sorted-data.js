import { useState } from "react";
import { orderBy } from "lodash-es";

// @param defaultOrders: example [['user', 'age'], ['asc', 'desc']]
function useSortedData(data, defaultOrders = []) {
  const [orders, setOrders] = useState(defaultOrders);

  function changeOrder(field) {
    // if data is not sorted or sorted by another filed
    if (orders.length === 0 || orders[0][0] !== field) {
      return setOrders([[field], ["asc"]]);
    }

    // if data sorted asc change to desc
    if (orders[1][0] === "asc") {
      return setOrders([[field], ["desc"]]);
    }

    // if sorted desc reset orders to default order of data
    return setOrders([]);
  }

  function toOrderObject(ordersArray = []) {
    const fields = ordersArray[0];
    const orders = ordersArray[1];
    const result = {};

    fields?.map((field, index) => {
      result[field] = orders[index];
    });

    return result;
  }

  return {
    sortedData: orderBy(data, ...orders),
    changeOrder,
    orders: toOrderObject(orders),
  };
}

export default useSortedData;
