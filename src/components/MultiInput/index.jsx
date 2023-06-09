import { useState } from "react";
import { DeleteIcon, PlusIcon } from "../../icons";
import tags from "../../views/Tags/tags.json";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";

const initialValue = {
  tag: null,
  description: "",
  price: 0,
};

const MultiInput = ({ fullWidth = false }) => {
  const [values, setValues] = useState([]);

  const addValue = () => {
    setValues((values) => [...values, { ...initialValue }]);
  };

  const removeValue = (idx) => {
    setValues((values) => {
      const newValues = [...values];
      newValues.splice(idx, 1);
      return newValues;
    });
  };

  const changeValue = (idx, key, value) => {
    setValues((values) => {
      const newValues = [...values];
      newValues[idx] = { ...newValues[idx], [key]: value };
      return newValues;
    });
  };

  return (
    <div>
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <label className="block mb-2 text-md font-bold text-gray-900 dark:text-white">
          Tags
        </label>
        {values.map((value, idx) => {
          const { tag, description, price } = value;
          return (
            <div className="flex flex-row gap-2" key={idx}>
              <div className="mt-6">
                <button
                  type="button"
                  className="text-white bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm p-3 text-center inline-flex items-center mr-2 dark:bg-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
                  onClick={() => removeValue(idx)}
                >
                  <DeleteIcon />
                  <span className="sr-only">Add New</span>
                </button>
              </div>
              <SelectInput
                label="Tag"
                labelKey="name"
                valueKey="id"
                value={tag?.id}
                options={tags}
                setValue={(value) => {
                  changeValue(idx, "tag", value);
                }}
                fullWidth
              />
              <TextInput
                label="Description"
                onChange={({ target: { value } }) => {
                  changeValue(idx, "description", value);
                }}
                value={description}
                fullWidth
              />
              <TextInput
                label="Price"
                onChange={({ target: { value } }) => {
                  changeValue(idx, "price", value);
                }}
                value={price}
              />
            </div>
          );
        })}
        <button
          type="button"
          className="mb-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-md text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={addValue}
        >
          <PlusIcon />
          <span className="sr-only">Add New</span>
        </button>
      </div>
    </div>
  );
};

export default MultiInput;
