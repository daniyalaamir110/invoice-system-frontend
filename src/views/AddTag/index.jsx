import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const AddTag = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <div>
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
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        }
      />
    </div>
  );
};

export default AddTag;
