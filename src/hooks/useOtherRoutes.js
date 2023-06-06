import AddClient from "../views/AddClient";
import AddTag from "../views/AddTag";

const useOtherRoutes = () => {
  return [
    {
      path: "/client/add",
      title: "Add client",
      element: <AddClient />,
      breadcrumbs: [
        {
          path: "/client",
          title: "Clients",
        },
        {
          path: "/client/add",
          title: "Add client",
        },
      ],
      
    },
    {
      path: "/tag/add",
      title: "Add tag",
      element: <AddTag />,
      breadcrumbs: [
        {
          path: "/tag",
          title: "Tags",
        },
        {
          path: "/tag/add",
          title: "Add tag",
        },
      ],
    }
  ];
};

export default useOtherRoutes;
