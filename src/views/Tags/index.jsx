import { useNavigate } from "react-router-dom";
import ActionBar from "../../components/ActionBar";
import Button from "../../components/Button";
import Table from "../../components/Table";
import tags from "./tags.json";

const Tags = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ActionBar>
        <Button
          text="Add new tag"
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          }
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
