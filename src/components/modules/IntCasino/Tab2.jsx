import img from "../../../assets/img";

const Tab2 = ({ selectedCategory, categories, setSelectedCategory }) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      <li
        onClick={() => setSelectedCategory("all")}
        className={`${
          selectedCategory === "all" ? "active " : ""
        } nav-item ng-star-inserted`}
      >
        <a
          role="tab"
          className={`nav-link ${selectedCategory === "all" ? "active " : ""}`}
          aria-controls
          aria-selected="true"
          id
        >
          <span />
          <span
            className="must ng-star-inserted"
            tabIndex={0}
            id="childTab-0-0"
          >
            <img className="img-fluid" src={img.all} />
            all{" "}
          </span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={`${
              selectedCategory === category ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${
                selectedCategory === category ? "active" : ""
              }`}
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <span
                className="must ng-star-inserted"
                tabIndex={0}
                id="childTab-0-0"
              >
                <img
                  className="img-fluid"
                  src={`/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                />
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab2;
