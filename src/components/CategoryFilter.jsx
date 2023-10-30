/* eslint-disable react/prop-types */
const CategoryFilter = ({
  categories,
  selectedCategory,
  handleCategorySelect,
}) => {
  return (
    <div className="flex w-full items-end border-b border-gray-400">
      {categories.map((filter) => (
        <div
          className={`cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-black  ${
            filter === selectedCategory
              ? "text-green-500 border-b-2 border-green-500"
              : ""
          }`}
          key={filter}
          onClick={() => handleCategorySelect(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
