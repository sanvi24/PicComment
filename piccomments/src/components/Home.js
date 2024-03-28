import React from "react";
import { useSelector } from "react-redux";
import { get, isEmpty } from "lodash";
import Cover from "./Cover";
import { CardList } from "../molecules";
import ErrorMessage from "./ErrorMessage";

const Home = () => {
  const blogDetails = useSelector((state) => state.blogDetails);
  const error = useSelector((state) => state.isError);
  const articles = get(blogDetails, "articles", []);
  return (
    <div className="w-full">
      {error ? (
        <ErrorMessage />
      ) : (
        <div>
          {!isEmpty(articles) ? <CardList articles={articles} /> : Cover}
        </div>
      )}
    </div>
  );
};

export default Home;
