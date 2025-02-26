import { useEffect, useState } from "react";
import Tab from "../../components/modules/LoggedInHome/Tab";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import Tab1 from "../../components/modules/Casino/Tab1";
import Tab2 from "../../components/modules/Casino/Tab2";
import CasinoThumbnail from "../../components/modules/Casino/CasinoThumbnail";
import { useLocation } from "react-router-dom";

const IntCasino = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const { data } = useMac88AllQuery();
  /* all tables key data */
  const allTables = data?.data?.allTables;
  /* tables key data */
  const tables = data?.data?.tables?.[100000];
  /* Table category */
  const tablesCategory = tables && Object.keys(tables);

  const filterSubCategory = () => {
    if (selectedCategory !== "All") {
      const tableKeyData =
        tables &&
        Object.values(tables)
          .flatMap((obj) => Object.values(obj))
          .flat();
      /* Filter the category data which in clicked on first tab */
      const subCategoryData = tableKeyData?.filter(
        (item) => item?.product === selectedCategory
      );
      /* Make unique array of category from filtered result  */
      const subCategory =
        subCategoryData &&
        Array.from(new Set(subCategoryData.map((item) => item.category)));

      return subCategory;
    } else {
      const allTablesCategory = allTables && Object.keys(allTables);
      return allTablesCategory;
    }
  };

  useEffect(() => {
    const filterData = () => {
      if (selectedCategory !== "All") {
        if (selectedSubCategory !== "All") {
          const tableKeyData =
            tables &&
            Object.values(tables)
              .flatMap((obj) => Object.values(obj))
              .flat();
          const casinoData = tableKeyData?.filter(
            (item) => item?.category === selectedSubCategory
          );
          return casinoData;
        } else {
          const tableKeyData =
            tables &&
            Object.values(tables)
              .flatMap((obj) => Object.values(obj))
              .flat();
          const casinoData = tableKeyData?.filter(
            (item) => item?.product === selectedCategory
          );

          return casinoData;
        }
      } else {
        const casinoData =
          allTables && typeof allTables === "object"
            ? selectedSubCategory === "All"
              ? Object.values(allTables).flat()
              : Object.values(allTables)
                  .flat()
                  .filter((item) => item?.category === selectedSubCategory)
            : [];

        return casinoData;
      }
    };
    setFilteredData(filterData());
  }, [selectedCategory, selectedSubCategory, allTables, tables]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

  useEffect(() => {
    if (category) {
      if (category === "Fun Games") {
        setSelectedCategory(category);
      } else {
        setSelectedSubCategory(category);
      }
    }
  }, [category]);
  return (
    <main id="main" className="main">
      <div className="ng-star-inserted">
        <div className="section listing_page">
          <div className="main_navigation_menu">
            <div className="tab-container">
              <Tab />
              <div className="tab-content">
                <div
                  role="tabpanel"
                  aria-labelledby
                  className="tab-pane active ng-star-inserted"
                >
                  <div className="ng-star-inserted">
                    <div className="row ng-star-inserted">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body card-content p-0">
                            <div className="bet-table-header">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <span className="list-sport-title">
                                    <img
                                      className="img-fluid game-icon-img"
                                      src="/src/assets/img/tabs-menu/menu-99999.png"
                                    />
                                    &nbsp; Casino
                                  </span>
                                </div>
                                <div className="col-md-2 text-center d-none d-md-block" />
                                <div className="col-md-2 text-center d-none d-md-block" />
                                <div className="col-md-2 text-center d-none d-md-block" />
                              </div>
                            </div>
                            <div className="bet-table-body">
                              <div className="home-products-container mt-1 ng-star-inserted">
                                <div className="row row5">
                                  <div className="col-md-12 main_navigation_menu">
                                    <div className="casino_tabs_ul tab-container">
                                      <Tab1
                                        categories={tablesCategory}
                                        selectedCategory={selectedCategory}
                                        setSelectedCategory={
                                          setSelectedCategory
                                        }
                                      />
                                      <div className="tab-content">
                                        <div
                                          role="tabpanel"
                                          aria-labelledby
                                          className="tab-pane active ng-star-inserted"
                                        >
                                          <div className="icasino_ul_tabs">
                                            <div className="tab-container">
                                              <Tab2
                                                setSelectedSubCategory={
                                                  setSelectedSubCategory
                                                }
                                                selectedSubCategory={
                                                  selectedSubCategory
                                                }
                                                categories={filterSubCategory()}
                                              />
                                              <div className="tab-content">
                                                <div
                                                  role="tabpanel"
                                                  aria-labelledby
                                                  className="tab-pane active ng-star-inserted"
                                                >
                                                  <div className="row row-casino ng-star-inserted">
                                                    <CasinoThumbnail
                                                      casinoData={filteredData}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IntCasino;
