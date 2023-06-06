import useCurrentRoute from "../../hooks/useCurrentRoute";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const currentRoute = useCurrentRoute();

  if (!currentRoute) {
    // TODO: Handle other routes, that are not in menu
  }

  return (
    <main className="flex flex-row">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1 className="text-4xl font-bold my-4">{currentRoute?.title}</h1>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
