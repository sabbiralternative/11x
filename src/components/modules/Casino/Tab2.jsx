import img from "../../../assets/img";

const Tab2 = ({ categories, setSelectedSubCategory, selectedSubCategory }) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      <li
        onClick={() => setSelectedSubCategory("All")}
        className={`${
          selectedSubCategory === "All" ? "active " : ""
        } nav-item ng-star-inserted`}
      >
        <a
          role="tab"
          className={`nav-link ${
            selectedSubCategory === "All" ? "active " : ""
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
            <img className="img-fluid" src={img.all} />
            all{" "}
          </span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            onClick={() => setSelectedSubCategory(category)}
            key={category}
            className={`${
              selectedSubCategory === category ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${
                selectedSubCategory === category ? "active" : ""
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
                  src={`/src/assets/icon/${category
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
