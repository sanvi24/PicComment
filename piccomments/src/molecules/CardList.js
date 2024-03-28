import React from "react";
import { isEmpty } from "lodash";
import Card from "../molecules/Card";

const CardList = ({ articles }) => (
  <div className="flex flex-wrap h-screen w-full items-center justify-center mt-14">
    {!isEmpty(articles) &&
      articles.map((article) => <Card article={article} />)}
  </div>
);

export default CardList;
