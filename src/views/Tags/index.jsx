import { useNavigate } from "react-router-dom";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import tags from "./tags.json";
import { PlusIcon } from "../../icons";

const Tags = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ActionBar>
        <Button
          text="Add new tag"
          icon={<PlusIcon />}
          variant="primary"
          action={() => {
            navigate("/tag/add");
          }}
        />
      </ActionBar>
      <Table
        count={100}
        heads={[
          {
            title: "Tag ID",
            key: "id",
          },
          {
            title: "Tag Name",
            key: "name",
          },
          {
            title: "Price",
            key: "price",
            convertor: (price) => `$${price}`,
          },
        ]}
        data={tags}
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

export default Tags;
