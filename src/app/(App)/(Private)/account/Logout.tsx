"use client";
import { TbLogout } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../redux/services/AuthSlice";
import { useLogoutMutation } from "../../../../../redux/services/AuthApiSlice";

const LogoutComp = () => {
  const dispatch = useDispatch();
  const [logoutUser, { isSuccess }] = useLogoutMutation();

  const onClick = async () => {
    try {
      await logoutUser().unwrap();

      dispatch(logout());
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <aside onClick={onClick} className="account-links cursor-pointer">
      <TbLogout className="account-icon" />
      <span>Logout</span>
    </aside>
  );
};

export default LogoutComp;
