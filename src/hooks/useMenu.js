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
      breadcrumbs: [
        {
          path: "/client",
          title: "Clients"
        }
      ]
    },
    {
      path: "/tag",
      title: "Tags",
      element: <Tags />,
      icon: "bi bi-tags-fill",
      breadcrumbs: [
        {
          path: "/tag",
          title: "Tags"
        }
      ]
    },
    {
      path: "/invoice",
      title: "Invoices",
      element: <Invoices />,
      icon: "bi bi-receipt",
      breadcrumbs: [
        {
          path: "/invoice",
          title: "Invoices"
        }
      ]
    },
  ];
};

export default useMenu;
