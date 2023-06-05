import Clients from "../views/Clients";
import Invoices from "../views/Invoices";
import Tags from "../views/Tags";

const useMenu = () => {
  return [
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
};

export default useMenu;
