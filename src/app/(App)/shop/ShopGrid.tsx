"use client";
import { Fragment } from "react";
import { headings } from "../../../../utilities/extras";
import { useDispatch, useSelector } from "react-redux";
import { changeGrid } from "../../../../redux/services/AppSlice";
import { storeGridNum } from "../../../../redux/localStorage";

const ShopGrid = () => {
  const { shopGrid } = useSelector((store: any) => store.app);
  const dispatch = useDispatch();

  return (
    <div className="hidden xl:flex gap-5">
      {headings.map((list) => {
        return (
          <Fragment key={list.id}>
            <div
              onClick={() => {
                dispatch(changeGrid(list.num));
                storeGridNum(list.num);
              }}>
              <list.icon className="text-xl cursor-pointer" />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ShopGrid;
