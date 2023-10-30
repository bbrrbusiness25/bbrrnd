import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import NewsArticle from "../components/NewsArticle";

const Articles = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  useEffect(() => {
    const filteredNewsData = newsData.filter((article) => {
      const categoryMatch =
        selectedCategory === "All" ||
        article.attributes.category === selectedCategory;
      const searchMatch =
        searchQuery === "" ||
        article.attributes.headline
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });

    setFilteredData(filteredNewsData);
  }, [searchQuery, selectedCategory, newsData]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const categories = [
    "All",
    "SPORTS",
    "POLITICS",
    "WORLD",
    "TECHNOLOGY",
    "HEALTH",
  ];

  return (
    <div className="mx-auto max-w-7xl px-2 py-10">
      <Header />
      <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
      </div>

      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((article) => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
