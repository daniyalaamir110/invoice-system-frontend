import _ from "lodash";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children, menu }) => {
  const location = useLocation();

  const currentRoute = _.find(menu, { path: location.pathname });

  return (
    <main className="flex flex-row">
      <Sidebar menu={menu} />
      <div className="flex-1 p-5">
        <h1 className="text-4xl font-bold my-4">{currentRoute.title}</h1>
        {children}
      </div>
    </main>
  );
};

export default Layout;
