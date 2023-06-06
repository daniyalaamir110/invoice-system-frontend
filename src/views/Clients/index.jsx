import Button from "../../components/Button";
import ActionBar from "../../components/ActionBar";
import Table from "../../components/Table";
import clients from "./clients.json";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ActionBar>
        <Button
          text="Add new client"
          icon="bi bi-plus"
          variant="primary"
          action={() => {
            navigate("/client/add");
          }}
        />
      </ActionBar>
      <Table
        heads={[
          {
            title: "Client ID",
            key: "id",
          },
          {
            title: "Client Name",
            key: "name",
          },
          {
            title: "Company Name",
            key: "company",
          },
          {
            title: "Active",
            key: "active",
            convertor: (active) => (active ? "Active" : "Inactive"),
            showAsBooleanTag: true,
          },
        ]}
        data={clients}
        actions={[
          {
            title: "Edit",
            handler: () => {},
          },
          {
            title: "Delete",
            variant: "danger",
            handler: () => {},
          },
        ]}
      />
    </div>
  );
};

export default Clients;
