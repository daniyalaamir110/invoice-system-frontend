import TextInput from "../../components/TextInput";

const AddClient = () => {
  return (
    <div>
      <TextInput label="Client ID" />
      <TextInput label="Client Name" />
      <TextInput label="Company Name" />
    </div>
  );
};

export default AddClient;
