const Button = ({ text, action, icon }) => {
  return (
    <button
      type="button"
      className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      onClick={action}
    >
      <i className={`${icon} mr-1`}></i>
      {text}
    </button>
  );
};

export default Button;
