import { useState } from "react";

const ActionMenu = ({ actions }) => {
  const [collapsed, setCollapsed] = useState(true);

  const hide = () => {
    setCollapsed(true);
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  if (!actions?.length) {
    return null;
  }

  return (
    <div>
      <button
        className="inline-flex p-2 items-center text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
        onClick={toggle}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
        </svg>
      </button>

      <div
        className={`z-10 absolute ${
          collapsed ? "hidden" : ""
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 dark:divide-gray-600`}
        onBlur={hide}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {actions.map((action, idx) => (
            <li key={idx}>
              <button
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left ${
                  action.variant === "danger" ? "text-red-500" : ""
                }`}
                onClick={action.handler}
              >
                {action.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionMenu;
