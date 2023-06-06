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
      <Layout menu={menu}>
        <Routes>
          {routes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          <Route path="/*" element={<Navigate to="/client" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
