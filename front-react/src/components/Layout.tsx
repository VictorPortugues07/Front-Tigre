import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const layout = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default layout;
