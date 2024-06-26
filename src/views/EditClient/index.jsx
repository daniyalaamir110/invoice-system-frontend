import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { CheckIcon } from "../../icons";
import _ from "lodash";
import clients from "../Clients/clients.json";

const EditClient = () => {
  const navigate = useNavigate();

  const params = useParams();

  const id = +params.id;

  const client = _.find(clients, { id });

  const [name, setName] = useState(client.name);
  const [company, setCompany] = useState(client.company);
  const [phone, setPhone] = useState(client.phone);

  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-5 w-[50%]">
      <TextInput
        label="Client Name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <TextInput
        label="Company Name"
        value={company}
        onChange={({ target: { value } }) => setCompany(value)}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChange={({ target: { value } }) => setPhone(value)}
      />
      <Button
        text="Submit"
        variant="primary"
        action={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/client");
          }, 1000);
        }}
        loading={loading}
        icon={<CheckIcon />}
      />
    </div>
  );
};

export default EditClient;
