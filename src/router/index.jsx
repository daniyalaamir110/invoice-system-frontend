import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import useMenu from "../hooks/useMenu";
import Clients from "../views/Clients";

const Router = () => {
  const menu = useMenu();

  return (
    <BrowserRouter>
      <Layout menu={menu}>
        <Routes>
          {menu.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
          <Route path="/*" element={<Navigate to="/client" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
