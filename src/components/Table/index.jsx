import { useState } from "react";
import ActionMenu from "../ActionMenu";

const Table = ({ heads = [], data = [], actions = [], count = 0 }) => {
  const [page, setPage] = useState(0);

  const hasActions = !!actions.length;
  const pageCount = Math.ceil(count / 10);

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  {heads.map((head, idx) => (
                    <th key={idx} scope="col" className="px-6 py-3">
                      {head.title}
                    </th>
                  ))}
                  {hasActions && (
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.slice(page * 10, (page + 1) * 10).map((row, idx) => (
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                      {idx + 1}
                    </td>
                    {heads.map((head, idx) => {
                      let value = row[head.key];
                      let tagClasses = "";
                      if (head.showAsBooleanTag) {
                        tagClasses = `${
                          !!value
                            ? "text-green-600 bg-green-100"
                            : "text-red-600 bg-red-100"
                        } px-3 py-1 rounded-md font-medium`;
                      }
                      if (head.convertor) {
                        value = head.convertor(value);
                      }
                      return (
                        <td key={idx} className="whitespace-nowrap px-6 py-3">
                          <span className={tagClasses}>{value}</span>
                        </td>
                      );
                    })}
                    {hasActions && (
                      <td className="whitespace-nowrap px-6 py-3 font-medium">
                        <ActionMenu actions={actions} />
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px my-4">
          <li>
            <button
              href="#"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {new Array(pageCount).fill(0).map((_, idx) => {
            return (
              <li key={idx}>
                <button
                  onClick={() => setPage(idx)}
                  className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {idx + 1}
                </button>
              </li>
            );
          })}
          <li>
            <button
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
