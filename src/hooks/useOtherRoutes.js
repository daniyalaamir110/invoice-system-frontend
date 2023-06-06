import AddClient from "../views/AddClient";

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
  ];
};

export default useOtherRoutes;
