import React from 'react';
import NewsCard from '../NewsCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NewsFetchPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bc2186588b3547278e5b0b82f9588a09'
      );

      // filter out the news that doesn't have an image
      const filteredNews = response.data.articles.filter((news) => {
        return news.author !== null && news.urlToImage !== null;
      });
      setNews(filteredNews);
      console.log(filteredNews);
    };
    fetchData();
  }, []);

  return (
    <div className="p-24">
      {news.slice(0, 2).map((news, index) => (
        <NewsCard key={news.publishedAt} news={news} index={index} />
      ))}
    </div>
  );
};

export default NewsFetchPage;
