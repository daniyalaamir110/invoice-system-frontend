const ActionBar = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-end gap-2">
      {children}
    </div>
  );
};

export default ActionBar;
