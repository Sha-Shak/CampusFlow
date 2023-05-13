import React from 'react';

const NewsCard = ({ news, index }) => {
  const gotoNewsUrl = () => {
    window.open(news.url, '_blank');
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={news.urlToImage} alt="news-picture" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{news.title}</h2>
        <div className="badge badge-primary text-md p-2">{news?.author}</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={gotoNewsUrl}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
