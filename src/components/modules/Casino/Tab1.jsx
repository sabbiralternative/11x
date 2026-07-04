import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab1 = ({ categories, selectedCategory }) => {
  const activeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedCategory, categories]);
  return (
    <ul
      style={{ scrollBehavior: "smooth" }}
      role="tablist"
      className="nav nav-tabs"
      aria-label="Tabs"
    >
      <li
        ref={selectedCategory === "All" ? activeRef : null}
        className={`${
          selectedCategory === "All" ? "active" : ""
        } nav-item ng-star-inserted`}
      >
        <a
          onClick={() => {
            navigate(`/casino?product=All&category=All`);
          }}
          role="tab"
          className={`nav-link ${selectedCategory === "All" ? "active" : ""}`}
          aria-controls
          aria-selected="true"
          id
        >
          <span />
          <span tabIndex={0} id="parentTab-0" className="ng-star-inserted">
            All
          </span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            ref={category === selectedCategory ? activeRef : null}
            key={category}
            className={`${
              category === selectedCategory ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              onClick={() => {
                navigate(`/casino?product=${category}&category=All`);
              }}
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
