import AddClient from "../views/AddClient";
import AddTag from "../views/AddTag";
import CreateInvoice from "../views/CreateInvoice";
import EditClient from "../views/EditClient";
import EditTag from "../views/EditTag";
import ViewInvoice from "../views/ViewInvoice";

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
      path: "/client/edit/:id",
      title: "Edit client",
      element: <EditClient />,
      breadcrumbs: [
        {
          path: "/client",
          title: "Clients",
        },
        {
          path: "/client/edit/:id",
          title: "Edit client",
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
      path: "/tag/edit/:id",
      title: "Edit tag",
      element: <EditTag />,
      breadcrumbs: [
        {
          path: "/tag",
          title: "Tags",
        },
        {
          path: "/tag/edit/:id",
          title: "Edit tag",
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
    {
      path: "/invoice/view/:id",
      title: "Invoice Details",
      element: <ViewInvoice />,
      breadcrumbs: [
        {
          path: "/invoice",
          title: "Invoices",
        },
        {
          path: "/invoice/view/:id",
          title: "Invoice Details",
        },
      ],
    },
  ];
};

export default useOtherRoutes;
