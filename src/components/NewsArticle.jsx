/* eslint-disable react/prop-types */
const NewsArticle = ({ article }) => {
  return (
    <div className="border border-gray-400 rounded-md p-2">
      <img
        src={article.attributes.newsIcon}
        className="aspect-video w-full rounded-md"
        alt=""
      />
      <div className="min-h-min p-3">
        <p className="mt-4 w-full text-xs font-semibold leading-tight text-white flex">
          <span className="bg-green-500 px-2 py-1 rounded-2xl">
            #{article.attributes.category}
          </span>
        </p>
        <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
          {article.attributes.headline}
        </p>
        <div className="mt-4 flex space-x-3">
          <div>
            <p className="text-sm font-semibold leading-tight text-gray-900">
              {article.attributes.newsSource}
            </p>
            <p className="text-sm leading-tight text-black">
              {new Date(article.attributes.publishedAt).toDateString()}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
