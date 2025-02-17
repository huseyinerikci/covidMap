import React from "react";

const HeaderLoader = () => {
  return (
    <div data-testid="header-loader" className="flex items-center gap-2">
      <div className="bg-gray-300 h-10 w-[120px] rounded-md animate-pulse " />
      <div className="bg-gray-300 h-10 w-16 md:w-20 rounded-md animate-pulse " />
    </div>
  );
};

export default HeaderLoader;
