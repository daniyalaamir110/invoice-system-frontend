import ActionMenu from "../ActionMenu";

const Table = ({ heads = [], data = [], actions = [] }) => {
  const hasActions = !!actions.length;

  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  {heads.map((head, idx) => (
                    <th key={idx} scope="col" className="px-6 py-4">
                      {head.title}
                    </th>
                  ))}
                  {hasActions && (
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
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
                        <td key={idx} className="whitespace-nowrap px-6 py-4">
                          <span className={tagClasses}>{value}</span>
                        </td>
                      );
                    })}
                    {hasActions && (
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
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
    </div>
  );
};

export default Table;
