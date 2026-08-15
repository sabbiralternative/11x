import { Settings } from "../../../api";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";
import "./maintenance.css";

const MaintenanceMessage = () => {
  const { getLanguage } = useLanguage();
  return (
    <div className="maintenance_container">
      <div className="container">
        <h1>{getLanguage(LanguageKey.SCHEDULED_MAINTENANCE)}</h1>
        <p>
          {getLanguage(LanguageKey.OUR_WEBSITE_IS_CURRENTLY_UNDER_MAINTENANCE)}.
        </p>

        <div className="reason">{Settings.maintenance_message}</div>
      </div>
    </div>
  );
};

export default MaintenanceMessage;
