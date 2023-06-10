import { useNavigate } from "react-router-dom";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { PlusIcon } from "../../icons";
import clients from "./clients.json";

const Clients = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ActionBar>
        <Button
          text="Add new client"
          icon={<PlusIcon />}
          variant="primary"
          action={() => {
            navigate("/client/add");
          }}
        />
      </ActionBar>
      <Table
        count={100}
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
            title: "Phone",
            key: "phone",
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
            handler: (id) => {
              console.log("click");
              navigate(`/client/edit/${id}`);
            },
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
