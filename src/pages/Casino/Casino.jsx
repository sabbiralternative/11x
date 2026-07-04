import { useEffect, useMemo, useState } from "react";
import Tab1 from "../../components/modules/Casino/Tab1";
import Tab2 from "../../components/modules/Casino/Tab2";
import CasinoThumbnail from "../../components/modules/Casino/CasinoThumbnail";
import { useGetIndex } from "../../hooks";
import { useLocation } from "react-router-dom";

const Casino = () => {
  const { data } = useGetIndex({
    type: "99_all_casino",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const product = params.get("product");
  const category = params.get("category");

  // const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const allTables = data?.data?.allTables;
  // const tables = data?.data?.tables?.[100000];

  // const handleNavigateToIFrame = (casino) => {
  //   if (!token) return navigate("/login");
  //   navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  // };

  // const allGames =
  //   allTables &&
  //   Object.values(allTables).flatMap((provider) =>
  //     Object.values(provider).flat(),
  //   );
  const allGames = useMemo(() => {
    if (!allTables) return [];
    return Object.values(allTables).flatMap((provider) =>
      Object.values(provider).flat(),
    );
  }, [allTables]);
  // const tablesGames =
  //   tables &&
  //   Object.values(tables).flatMap((provider) => Object.values(provider).flat());

  const categories =
    allGames && Array.from(new Set(allGames?.map((game) => game?.product)));

  // const a =
  //   allGames && allGames?.find((game) => game.product === "BIKINI GAMES");
  // console.log(a);
  // console.log(categories);

  const subCategories = useMemo(() => {
    if (allGames && categories && product === "All") {
      return Array.from(new Set(allGames?.map((game) => game?.category)));
    }
    if (allGames && categories && product !== "All") {
      const allCategory = allGames?.filter((game) => game?.product === product);
      return Array.from(new Set(allCategory?.map((game) => game?.category)));
    }
  }, [categories, allGames, product]);

  const filteredData = useMemo(() => {
    if (allGames && categories && subCategories) {
      if (search) {
        return allGames?.filter((game) => game?.category?.includes(search));
      }
      if (!search) {
        if (product === "All" && category === "All") {
          return allGames;
        }
        if (product === "All" && category !== "All") {
          return allGames?.filter((game) => game?.category === category);
        }
        if (product !== "All" && category === "All") {
          return allGames?.filter((game) => game?.product === product);
        }
        if (product !== "All" && category !== "All") {
          return allGames?.filter(
            (game) => game?.product === product && game?.category === category,
          );
        }
      }
    }
  }, [allGames, categories, category, subCategories, product, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
                            selectedCategory={product}
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
                                    product={product}
                                    selectedSubCategory={category}
                                    subCategories={subCategories}
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

export default Casino;
