import _ from "lodash";
import { useLocation } from "react-router-dom";
import useAllRoutes from "./useAllRoutes";

const useCurrentRoute = () => {
  const location = useLocation();

  const menu = useAllRoutes();

  const currentRoute = _.find(menu, { path: location.pathname });

  return currentRoute;
};

export default useCurrentRoute;
