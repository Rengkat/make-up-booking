"use client";
import React, { Fragment } from "react";
import { convertDate, formatter } from "../../../../../../utilities/extras";
import { useGetAllUserOrdersQuery } from "../../../../../../redux/services/OrderApiSlice";

const title = ["order", "date", "status", "total", "action"];

const Orders = () => {
  const { data, isLoading, isError } = useGetAllUserOrdersQuery({});
  const orders = data?.data;
  console.log(orders);
  if (isLoading) {
    return <div className="text-center py-5">Loading your orders...</div>;
  }

  if (isError) {
    return (
      <div className="text-center py-5 text-red-500">
        Failed to load orders. Please try again later.
      </div>
    );
  }

  if (!orders?.length) {
    return <div className="text-center py-5">You have no orders yet.</div>;
  }

  return (
    <div className="bg-white p-2 lg:py-3 lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      <div className="order-grid bg-dark-gold text-white capitalize p-2">
        {title.map((head) => (
          <div key={head}>{head}</div>
        ))}
      </div>
      <div className="text-sm lg:text-base mt-[1rem]">
        {orders.map((order: any) => (
          <Fragment key={order._id}>
            <div className="order-grid py-2">
              <div>#{order?.paymentIntentId}</div>
              <div>{convertDate(order?.createdAt)}</div>
              <div>{order?.status}</div>
              <div>
                {formatter.format(order?.total)} for {order.orderItems.length} item(s)
              </div>
              <div>
                <button className="py-2 px-5 bg-dark-green hover:bg-dark-gold text-white">
                  View
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Orders;
