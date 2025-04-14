import { useEffect, useState } from "react";
import Tab from "../../components/modules/LoggedInHome/Tab";
import { useMac88AllQuery } from "../../redux/features/casino/casino.api";
import Tab1 from "../../components/modules/Casino/Tab1";
import Tab2 from "../../components/modules/Casino/Tab2";
import CasinoThumbnail from "../../components/modules/Casino/CasinoThumbnail";

const Casino = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MAC88");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const { data } = useMac88AllQuery();

  /* tables key data */
  const tables = data?.data?.tables?.[100000];

  useEffect(() => {
    const getCategory = () => {
      if (tables) {
        /* Get only four key */
        const {
          MAC88,
          ["Mac88 Virtuals"]: mac88Virtuals,
          ["Color Prediction"]: colorPrediction,
          ["Fun Games"]: funGames,
        } = tables;
        /* Make a object of four key */
        const filteredData = {
          MAC88,
          mac88Virtuals,
          colorPrediction,
          funGames,
        };
        /* Get data in a single array from four object */
        const tableKeyData =
          filteredData &&
          Object.values(filteredData)
            .flatMap((obj) => Object.values(obj))
            .flat();

        /*get category for first tab */
        const categories = Array.from(
          new Set(tableKeyData.map((item) => item.product))
        );
        setCategories(categories);
        /* get category for first tab */

        /* get sub category for first tabt */
        const filterCasinoByProduct = tableKeyData?.filter(
          (item) => item?.product === selectedCategory
        );
        const subCategory = Array.from(
          new Set(filterCasinoByProduct.map((item) => item.category))
        );

        setSubCategories(subCategory);
        /*get sub category for first tab*/

        /* Get actual data by  category */
        if (selectedSubCategory !== "All") {
          const filterCasinoByCategory = filterCasinoByProduct?.filter(
            (item) => item?.category === selectedSubCategory
          );
          setFilterCategoryData(filterCasinoByCategory);
        } else {
          setFilterCategoryData(filterCasinoByProduct);
        }
      }
    };
    getCategory();
  }, [tables, selectedCategory, selectedSubCategory]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);
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
                                      src="/images/menu-99999.png"
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
                                        categories={categories}
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
                                                categories={subCategories}
                                              />
                                              <div className="tab-content">
                                                <div
                                                  role="tabpanel"
                                                  aria-labelledby
                                                  className="tab-pane active ng-star-inserted"
                                                >
                                                  <div className="row row-casino ng-star-inserted">
                                                    <CasinoThumbnail
                                                      casinoData={
                                                        filterCategoryData
                                                      }
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

export default Casino;
