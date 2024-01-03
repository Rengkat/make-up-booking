"use client";
import { Fragment } from "react";
import { headings } from "../../../../utilities/extras";
import { useDispatch } from "react-redux";
import { changeGrid } from "../../../../redux/services/AppSlice";

const ShopGrid = () => {
  const dispatch = useDispatch();

  return (
    <div className="hidden xl:flex gap-5">
      {headings.map((icon) => {
        return (
          <Fragment key={icon.icon}>
            <div onClick={() => dispatch(changeGrid(icon.num))}>
              <icon.icon className="text-xl cursor-pointer" />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default ShopGrid;
