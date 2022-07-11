import Header from "./header";
import Footer from "./footer";
import axios from "../config/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  authenticateUser,
  setLoadingTrue,
  unauthorizeUser,
} from "store/features/auth/authSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async () => {
    try {
      const res = await axios.get("api/customer/auth/verifyUser");

      if (res.status == 200) dispatch(authenticateUser(res.data.user));
    } catch (errr) {
      dispatch(unauthorizeUser());
    }
  };
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
