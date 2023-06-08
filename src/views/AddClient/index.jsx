import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { CheckIcon } from "../../icons";

const AddClient = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-5">
      <TextInput label="Client ID" />
      <TextInput label="Client Name" />
      <TextInput label="Company Name" />
      <TextInput label="Phone" />
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

export default AddClient;
