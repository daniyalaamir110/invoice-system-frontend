import AddClient from "../views/AddClient";
import AddTag from "../views/AddTag";
import CreateInvoice from "../views/CreateInvoice";

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
    },
    {
      path: "/invoice/create",
      title: "Create invoice",
      element: <CreateInvoice />,
      breadcrumbs: [
        {
          path: "/invoice",
          title: "Invoices",
        },
        {
          path: "/invoice/create",
          title: "Create invoice",
        },
      ],
    },
  ];
};

export default useOtherRoutes;
