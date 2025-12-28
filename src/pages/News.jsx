import React, { useEffect } from "react";
import Wrapper from "../component/wrapper/Wrapper";
import { useNewsContext } from "./Context";
import Loader from "../component/Loader";
const News = () => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  //load data on initial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (!!loading) return <Loader className={"m-auto w-fit py-20"} />;

  return (
    <Wrapper>
      <div className="grid grid-cols-4 gap-6">
        {news.map((item) => {
          if (!item?.urlToImage) return null;
          return <NewsCard details={item} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {
  return (
    <div className="card bg-base-200  shadow-sm">
      <figure>
        <img
          src={details.urlToImage}
          alt={details.author}
          className="object-cover aspect-video"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details.title}</h2>
        <p className="line-clamp-3">{details.description}</p>
        <div className="card-actions justify-end mt-4">
          <button
            className="badge-outline btn"
            onClick={() => window.open(details.url)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
