import { useNavigate } from "react-router-dom";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { PlusIcon } from "../../icons";
import invoices from "./invoices.json";

const Invoices = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ActionBar>
        <Button
          action={() => {
            navigate("/invoice/create");
          }}
          icon={<PlusIcon />}
          text="Create new invoice"
        />
      </ActionBar>
      <Table
        count={100}
        heads={[
          {
            title: "Invoice ID",
            key: "id",
          },
          {
            title: "Client Name",
            key: "clientName",
          },
          {
            title: "Created",
            key: "created",
          },
          {
            title: "Status",
            key: "status",
            convertor: (active) => (active ? "Unpaid" : "Paid"),
            showAsBooleanTag: true,
          },
          {
            title: "Paid",
            key: "paid",
          },
          {
            title: "Amount",
            key: "amount",
            convertor: (amount) => `$${amount}`,
          },
        ]}
        data={invoices}
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

export default Invoices;
