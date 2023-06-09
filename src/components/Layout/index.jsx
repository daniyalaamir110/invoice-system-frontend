import { useParams } from "react-router-dom";
import useCurrentRoute from "../../hooks/useCurrentRoute";
import Breadcrumbs from "../Breadcrumbs";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const currentRoute = useCurrentRoute();

  const params = useParams();

  console.log(params);

  return (
    <main className="flex flex-row">
      <Sidebar />
      <div className="flex-1 p-5">
        <Breadcrumbs breadcrumbs={currentRoute?.breadcrumbs} />
        <h1 className="text-4xl font-bold my-4">{currentRoute?.title}</h1>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
