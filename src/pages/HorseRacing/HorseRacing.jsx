import HorseGreyhound from "../../components/modules/HorseGreyhound/HorseGreyhound";
import { useGroupQuery } from "../../redux/features/events/events";

const HorseRacing = () => {
  const { data } = useGroupQuery(
    { sportsType: 7 },
    {
      pollingInterval: 1000,
    },
  );
  return (
    <div
      role="tabpanel"
      aria-labelledby
      className="tab-pane active ng-star-inserted"
    >
      <div
        className="w-full h-full
lg:w-[54%] lg:pt-2 horse-greyhound"
      >
        {" "}
        <HorseGreyhound data={data} title="Horse Racing" eventTypeId={7} />;
      </div>
    </div>
  );
};

export default HorseRacing;
