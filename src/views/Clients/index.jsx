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
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
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
