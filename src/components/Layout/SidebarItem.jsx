import { Link } from "react-router-dom";

const SidebarItem = ({ title, path, icon }) => {
  return (
    <Link
      to={path}
      className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
    >
      <i className={icon}></i>
      <span className="text-[15px] ml-4 text-gray-200 font-bold">{title}</span>
    </Link>
  );
};

export default SidebarItem;
