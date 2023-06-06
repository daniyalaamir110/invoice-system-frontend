import Button from "../../components/Button";
import ActionBar from "../../components/ActionBar";
import Table from "../../components/Table";
import clients from "./clients.json";

const Clients = () => {
  return (
    <div>
      <ActionBar>
        <Button
          text="Add new client"
          icon="bi bi-plus"
          variant="primary"
          action={() => {}}
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
            convertor: (active) => (active ? "Yes" : "No"),
          },
        ]}
        data={clients}
      />
    </div>
  );
};

export default Clients;
