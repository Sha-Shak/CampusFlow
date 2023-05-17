import { BiLinkExternal } from 'react-icons/bi';
const NewsCard = ({ news, index, noImg }) => {
  const gotoNewsUrl = () => {
    window.open(news.url, '_blank');
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-sm mb-2">
      {!noImg && (
        <figure>
          <img className="" src={news.urlToImage} alt="news-picture" />
        </figure>
      )}

      <div className="card-body">
        <h2 className="text-lg font-bold">{news.title}</h2>
        <div className="card-actions justify-end">
          <div
            onClick={gotoNewsUrl}
            className="text-md flex gap-2 cursor-pointer"
          >
            <div>Read More</div>
            <div className="mt-1">
              <BiLinkExternal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
