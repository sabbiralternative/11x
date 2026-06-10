import { useEffect, useState } from "react";
import Tab1 from "../../components/modules/IntCasino/Tab1";
import Tab2 from "../../components/modules/IntCasino/Tab2";
import CasinoThumbnail from "../../components/modules/IntCasino/CasinoThumbnail";
import useGetUltraLobby from "../../hooks/ultraLobby";
import { Loader } from "rsuite";

const IntCasino = () => {
  const { data, isLoading } = useGetUltraLobby();
  const [subProvider, setSubProvider] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedSubProvider, setSelectedSubProvider] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  /* Search by games name */
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    const searchGames = data.filter((game) =>
      game.gameName.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredData(searchGames);
  };

  /* Create unique sub provider name and category */
  useEffect(() => {
    if (data?.length > 0) {
      const subProviderNames = Array.from(
        new Set(data.map((item) => item.subProviderName)),
      );
      const categories = Array.from(new Set(data.map((item) => item.category)));

      setCategories(categories);
      setSubProvider(subProviderNames);
    }
  }, [data]);

  /* Load all data initially */
  useEffect(() => {
    if (data?.length > 0) {
      if (
        selectedCategory === "all" &&
        selectedSubProvider === "all" &&
        searchQuery === ""
      ) {
        setFilteredData(data);
      }
    }
  }, [data, selectedCategory, selectedSubProvider, searchQuery]);

  /* Filter By Category */
  useEffect(() => {
    if (data?.length > 0) {
      if (selectedCategory !== "all" && searchQuery === "") {
        const filterByCategory = data?.filter(
          (d) => d.category === selectedCategory,
        );
        return setFilteredData(filterByCategory);
      }
    }
  }, [data, selectedCategory, searchQuery]);

  // /* Filter By SubProvider */
  useEffect(() => {
    if (data?.length > 0) {
      if (selectedSubProvider !== "all" && searchQuery === "") {
        const filterByCategory = data?.filter(
          (d) => d.subProviderName === selectedSubProvider,
        );
        return setFilteredData(filterByCategory);
      }
    }
  }, [data, selectedSubProvider, searchQuery]);

  if (isLoading) {
    return <Loader />;
  }

  return (
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
                          src="/images/menu-99998.png"
                        />
                        &nbsp; Int Casino
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
                            selectedSubProvider={selectedSubProvider}
                            subProvider={subProvider}
                            setSelectedSubProvider={setSelectedSubProvider}
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
                                    selectedCategory={selectedCategory}
                                    categories={categories}
                                    setSelectedCategory={setSelectedCategory}
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
  );
};

export default IntCasino;
