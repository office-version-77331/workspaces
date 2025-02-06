import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h1 className="mt-4 text-lg font-semibold text-gray-700">Loading Product List...</h1>
    </div>
  );
};

export default Loading;
