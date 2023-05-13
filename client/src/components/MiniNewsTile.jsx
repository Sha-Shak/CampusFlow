import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './MiniNewsCard';
function MiniNewsTile() {
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
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {news.slice(0, 1).map((news, index) => (
          <NewsCard
            key={news.publishedAt}
            news={news}
            index={index}
            noImg={false}
          />
        ))}
      </div>
      <div>
        {news.slice(1, 2).map((news, index) => (
          <NewsCard
            key={news.publishedAt}
            news={news}
            index={index}
            noImg={true}
          />
        ))}
      </div>
      {/* <div>
        {news.slice(2, 3).map((news, index) => (
          <NewsCard
            key={news.publishedAt}
            news={news}
            index={index}
            noImg={true}
          />
        ))}
      </div> */}
    </>
  );
}
export default MiniNewsTile;
