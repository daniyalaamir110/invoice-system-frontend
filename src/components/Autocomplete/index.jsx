import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const AutoComplete = ({
  value,
  setValue,
  label,
  options,
  convertor,
  searchBy = [],
}) => {
  const inputRef = useRef();

  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);

  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    const handleFocus = () => {
      const focused = document.activeElement === inputRef.current;
      setFocused(focused);
    };
    document.addEventListener("focus", handleFocus, true);
  }, []);

  const filteredOptions = _.filter(options, (option) => {
    for (const field of searchBy) {
      if (`${option[field]}`.toLowerCase().includes(text.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const valueToShow = focused
    ? text
    : !value
    ? ""
    : convertor
    ? convertor(value)
    : value;

  return (
    <div className="mb-6 relative">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        onClick={handleLabelClick}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500 outline-none w-80"
        value={valueToShow}
        onChange={({ target: { value } }) => setText(value)}
        onFocus={({ target }) => {
          target.select();
        }}
        onBlur={() => setText(valueToShow)}
      />
      <div
        className={`absolute ${
          !focused && "hidden"
        } w-full bg-white border-2 border-violet-100 max-h-[256px] overflow-y-scroll`}
      >
        {filteredOptions.map((option, idx) => {
          const value = convertor ? convertor(option) : option;
          return (
            <button
              key={idx}
              className="p-1 w-full hover:bg-gray-200 text-left"
              onClick={() => {
                setText(value);
                setValue(option);
                inputRef.current.blur();
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AutoComplete;
