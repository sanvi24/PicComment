import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBlogDetails } from "./blogs";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogDetails());
  });
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
