import { useRef } from "react";

const TextInput = ({ value, onChange, label }) => {
  const inputRef = useRef();

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        onClick={handleLabelClick}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
