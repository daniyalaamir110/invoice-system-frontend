import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import useMenu from "../hooks/useMenu";
import useOtherRoutes from "../hooks/useOtherRoutes";

const Router = () => {
  const menu = useMenu();
  const otherRoutes = useOtherRoutes();

  const routes = [...menu, ...otherRoutes];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => (
          <Route
            path={route.path}
            element={<Layout menu={menu}>{route.element}</Layout>}
            key={idx}
          />
        ))}
        <Route path="/*" element={<Navigate to="/client" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
