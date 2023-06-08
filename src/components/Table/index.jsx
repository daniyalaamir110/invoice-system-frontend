import { useState } from "react";
import ActionMenu from "../ActionMenu";
import { NextIcon, PrevIcon } from "../../icons";

const Table = ({ heads = [], data = [], actions = [], count = 0 }) => {
  const [page, setPage] = useState(0);

  const hasActions = !!actions.length;
  const pageCount = Math.ceil(count / 10);

  const isFirst = page === 0;
  const isLast = page + 1 === pageCount;

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
                  <tr className="border-b dark:border-neutral-500" key={idx}>
                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                      {page * 10 + idx + 1}
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
              disabled={isFirst}
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                if (!isFirst) {
                  setPage(page - 1);
                }
              }}
            >
              <span className="sr-only">Previous</span>
              <PrevIcon />
            </button>
          </li>
          {new Array(pageCount).fill(0).map((_, idx) => {
            const isCurrent = page === idx;
            return (
              <li key={idx}>
                <button
                  onClick={() => setPage(idx)}
                  disabled={isCurrent}
                  className={`block px-3 py-2 ml-0 leading-tight ${
                    isCurrent && "font-medium text-black"
                  } text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {idx + 1}
                </button>
              </li>
            );
          })}
          <li>
            <button
              disabled={isLast}
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => {
                if (!isLast) {
                  setPage(page + 1);
                }
              }}
            >
              <span className="sr-only">Next</span>
              <NextIcon />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
