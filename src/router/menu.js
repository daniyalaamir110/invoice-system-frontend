import Clients from "../views/Clients";
import Invoices from "../views/Invoices";
import Tags from "../views/Tags";

export const getMenu = () => [
  {
    path: "/client",
    title: "Clients",
    element: <Clients />,
    icon: "bi bi-people-fill",
  },
  {
    path: "/tag",
    title: "Tags",
    element: <Tags />,
    icon: "bi bi-tags-fill",
  },
  {
    path: "/invoice",
    title: "Invoices",
    element: <Invoices />,
    icon: "bi bi-receipt",
  },
];
