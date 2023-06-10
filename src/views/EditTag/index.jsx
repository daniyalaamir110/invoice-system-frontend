import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { CheckIcon } from "../../icons";
import _ from "lodash";
import tags from "../Tags/tags.json";

const EditTag = () => {
  const navigate = useNavigate();

  const params = useParams();

  const id = +params.id;

  const tag = _.find(tags, { id });

  const [name, setName] = useState(tag.name);
  const [price, setPrice] = useState(tag.price);

  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-5 w-[50%]">
      <TextInput
        label="Tag Name"
        value={name}
        onChange={({ target: { value } }) => setName(value)}
      />
      <TextInput
        label="Price ($)"
        value={price}
        onChange={({ target: { value } }) => setPrice(value)}
      />
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

export default EditTag;
