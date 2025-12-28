import { useContext, createContext, useState } from "react";
import apiInstance from "./config/Axios";

const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=india") => {
    try {
      setLoading(true);
      const res = await apiInstance.get(
        `${url}&apiKey=${import.meta.env.VITE_API_URL_NEWS_KEY}`
      );
      setLoading(false);
      return res.data;
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
    setLoading(false);
  };

  const value = {
    news,
    setNews,
    fetchNews,
    loading,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
