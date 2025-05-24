import HorseGreyhound from "../../components/modules/HorseGreyhound/HorseGreyhound";
import Tab from "../../components/modules/LoggedInHome/Tab";
import { useGroupQuery } from "../../redux/features/events/events";

const GreyhoundRacing = () => {
  const { data } = useGroupQuery(
    { sportsType: 4339 },
    {
      pollingInterval: 1000,
    }
  );
  return (
    <main id="main" className="main">
      <div className="ng-star-inserted">
        <div className="">
          <div className="main_navigation_menu">
            <div className="tab-container">
              <Tab />
              <div className="tab-content">
                <div
                  role="tabpanel"
                  aria-labelledby
                  className="tab-pane active ng-star-inserted"
                >
                  <div
                    className="w-full h-full
   lg:w-[54%] lg:pt-2 horse-greyhound"
                  >
                    <HorseGreyhound
                      data={data}
                      title="Greyhound Racing"
                      eventTypeId={4339}
                    />
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

export default GreyhoundRacing;
