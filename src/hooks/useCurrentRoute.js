import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAllRoutes from "./useAllRoutes";

const useCurrentRoute = () => {
  const location = useLocation();

  const params = useParams();

  console.log("params", params);

  const allRoutes = useAllRoutes();

  const currentRoute = _.find(allRoutes, (route) => {
    let path = route.path;
    for (const key in params) {
      path = path.replace(`:${key}`, params[key]);
    }
    return path === location.pathname;
  });

  return currentRoute;
};

export default useCurrentRoute;
