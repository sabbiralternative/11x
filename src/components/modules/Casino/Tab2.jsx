import { useEffect, useRef } from "react";
import img from "../../../assets/img";
import { useNavigate } from "react-router-dom";

const Tab2 = ({ subCategories, product, selectedSubCategory }) => {
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
  }, [selectedSubCategory, subCategories, product]);
  return (
    <ul
      style={{ scrollBehavior: "smooth" }}
      role="tablist"
      className="nav nav-tabs"
      aria-label="Tabs"
    >
      <li
        ref={selectedSubCategory === "All" ? activeRef : null}
        className={`${
          selectedSubCategory === "All" ? "active " : ""
        } nav-item ng-star-inserted`}
      >
        <a
          onClick={() => {
            navigate(`/casino?product=${product}&category=All`);
          }}
          role="tab"
          className={`nav-link ${selectedSubCategory === "All" ? "active " : ""}`}
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
      {subCategories?.map((subCategory) => {
        return (
          <li
            ref={subCategory === selectedSubCategory ? activeRef : null}
            key={subCategory}
            className={`${
              selectedSubCategory === subCategory ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              onClick={() => {
                navigate(`/casino?product=${product}&category=${subCategory}`);
              }}
              role="tab"
              className={`nav-link ${
                selectedSubCategory === subCategory ? "active" : ""
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
                  src={`/icon/${subCategory
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                />
                {subCategory}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab2;
