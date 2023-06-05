import _ from "lodash";
import { useLocation } from "react-router-dom";
import useMenu from "./useMenu";

const useCurrentRoute = () => {
  const location = useLocation();

  const menu = useMenu();

  const currentRoute = _.find(menu, { path: location.pathname });

  return currentRoute;
};

export default useCurrentRoute;
