const Tab1 = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      {categories?.map((category) => {
        return (
          <li
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={`${
              category === selectedCategory ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${
                category === selectedCategory ? "active" : ""
              }`}
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <span tabIndex={0} id="parentTab-0" className="ng-star-inserted">
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab1;
