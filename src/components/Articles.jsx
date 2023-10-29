import { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          "https://linesnews.onrender.com/api/news-datas"
        );
        setNewsData(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10">
      <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
        <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
          Explore the Latest Headlines
        </p>
        <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Discover the most up-to-date headlines and gain valuable insights from
          across the globe. Our news dashboard provides you with a curated
          selection of news articles, covering a wide range of categories.
        </p>

        <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search Topics"
          ></input>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
        <div className="flex w-full items-end border-b border-gray-300">
          {["SPORTS", "POLITICS", "WORLD", "TECHNOLOGY", "HEALTH"].map(
            (filter) => (
              <div
                className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                key={filter}
              >
                {filter}
              </div>
            )
          )}
        </div>
      </div>
      
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {newsData &&
          newsData.map(
            (article) => (
              
              (
                <div key={article.id} className="border">
                  <img
                    src={article.attributes.newsIcon} 
                    className="aspect-video w-full rounded-md"
                    alt=""
                  />
                  <div className="min-h-min p-3">
                    <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                      #{article.attributes.category}
                    </p>
                    <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                      {article.attributes.headline}
                    </p>
                    <div className="mt-4 flex space-x-3">
                      <div>
                        <p className="text-sm font-semibold leading-tight text-gray-900">
                          {article.attributes.newsSource}
                        </p>
                        <p className="text-sm leading-tight text-gray-600">
                          {new Date(
                            article.attributes.publishedAt
                          ).toDateString()}{" "}
                          
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          )}
      </div>
      <div className="w-full border-t border-gray-300">
        <div className="mt-2 flex items-center justify-between">
          <div className="hidden md:block">
            <p>
              showing <strong>1</strong> to <strong>10</strong> of{" "}
              <strong>20</strong> results
            </p>
          </div>
          <div className="space-x-2">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
