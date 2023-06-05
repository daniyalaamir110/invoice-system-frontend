import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { getMenu } from "./menu";

const Router = () => {
  const menu = getMenu();

  return (
    <BrowserRouter>
      <Layout menu={menu}>
        <Routes>
          {menu.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
