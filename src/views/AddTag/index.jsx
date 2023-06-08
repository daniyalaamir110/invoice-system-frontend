import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { CheckIcon } from "../../icons";

const AddTag = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-5">
      <TextInput label="Tag Name" />
      <TextInput label="Price ($)" />
      <Button
        text="Submit"
        variant="primary"
        action={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/tag");
          }, 1000);
        }}
        loading={loading}
        icon={<CheckIcon />}
      />
    </div>
  );
};

export default AddTag;
