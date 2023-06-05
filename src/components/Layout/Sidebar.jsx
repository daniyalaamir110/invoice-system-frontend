import { useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ menu }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = ({ target: { value } }) => setSearch(value);

  const navItems = menu.filter((item) =>
    item.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <aside className="bg-blue-600">
      <div className="sidebar p-2 w-[300px] h-[100vh] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl my-4">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-upc-scan px-2 py-1 rounded-md bg-violet-600"></i>
            <h1 className="font-bold text-gray-200 text-[20px] ml-3">
              Invoice System
            </h1>
          </div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        {navItems.map((item, idx) => (
          <SidebarItem
            path={item.path}
            title={item.title}
            icon={item.icon}
            key={idx}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
