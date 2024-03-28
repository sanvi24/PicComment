import React from "react";

const ErrorMessage = () => (
  <div className="flex-col items-center justify-center mt-64">
    <h1 className="text-red-700 text-center text-3xl font-extrabold">
      Oops! Something went wrong. Please try again later.
    </h1>
    <div className="m-4 ml-80 p-4 items-center justify-center"></div>
  </div>
);

export default ErrorMessage;
