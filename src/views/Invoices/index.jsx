import { useNavigate } from "react-router-dom";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { PlusIcon } from "../../icons";
import invoices from "./invoices.json";
import SelectInput from "../../components/SelectInput";
import { useState } from "react";
import _ from "lodash";

const Invoices = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("all");

  const filteredInvoices =
    status === "all"
      ? invoices
      : _.filter(invoices, (invoice) => invoice.status === (status === "paid"));

  const count = filteredInvoices.length;

  return (
    <div>
      <ActionBar>
        <SelectInput
          label="Status"
          options={[
            {
              label: "All",
              value: "all",
            },
            {
              label: "Paid",
              value: "paid",
            },
            {
              label: "Unpaid",
              value: "unpaid",
            },
          ]}
          labelKey="label"
          valueKey="value"
          value={status}
          setValue={setStatus}
        />
        <Button
          action={() => {
            navigate("/invoice/create");
          }}
          icon={<PlusIcon />}
          text="Create new invoice"
        />
      </ActionBar>
      <Table
        count={count}
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
            convertor: (active) => (active ? "Paid" : "Unpaid"),
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
        data={filteredInvoices}
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
