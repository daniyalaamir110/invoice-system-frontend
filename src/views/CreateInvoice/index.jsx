import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AutoComplete from "../../components/Autocomplete";
import Button from "../../components/Button";
import { CheckIcon } from "../../icons";
import clients from "../Clients/clients.json";

const CreateInvoice = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [client, setClient] = useState(null);

  return (
    <div className="pt-5">
      <AutoComplete
        label="Client"
        value={client}
        setValue={setClient}
        options={clients}
        convertor={(client) => `${client.id} - ${client.name}`}
        searchBy={["id", "name"]}
      />
      <Button
        text="Submit"
        variant="primary"
        action={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/invoice");
          }, 1000);
        }}
        loading={loading}
        icon={<CheckIcon />}
      />
    </div>
  );
};

export default CreateInvoice;
