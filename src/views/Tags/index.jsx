import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import tags from "./tags.json";

const Tags = () => {
  return (
    <div>
      <ActionBar>
        <Button
          text="Add new tag"
          icon="bi bi-plus"
          variant="primary"
          action={() => {}}
        />
      </ActionBar>
      <Table
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
