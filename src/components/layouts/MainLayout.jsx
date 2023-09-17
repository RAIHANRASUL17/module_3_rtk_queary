import { Outlet } from "react-router-dom";
import Home from "./Home";


const MainLayout = () => {
  return (
    <div className="w-full">
      <Outlet />
      <Home></Home>
    </div>
  );
};

export default MainLayout;
