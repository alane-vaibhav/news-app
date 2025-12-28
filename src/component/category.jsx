import React from "react";
import Wrapper from "./wrapper/Wrapper";
import { useNewsContext } from "../pages/Context";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleClick = async (category) => {
    const data = await fetchNews(`/everything?q=${category}`);
    setNews(data.articles);
  };
  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`max-w-full w-fit overflow-x-auto flex m-auto px-4 gap-5 scrollbar-none `}
        >
          {categories?.map((item, index) => {
            return (
              <button
                key={item}
                className="btn btn-primary"
                onClick={() => handleClick(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
