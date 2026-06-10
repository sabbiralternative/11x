const Tab1 = ({ selectedSubProvider, subProvider, setSelectedSubProvider }) => {
  return (
    <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
      <li
        onClick={() => setSelectedSubProvider("all")}
        className={`${
          selectedSubProvider === "all" ? "active" : ""
        } nav-item ng-star-inserted`}
      >
        <a
          role="tab"
          className={`nav-link ${
            selectedSubProvider === "all" ? "active" : ""
          }`}
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
      {subProvider?.map((provider) => {
        return (
          <li
            onClick={() => setSelectedSubProvider(provider)}
            key={provider}
            className={`${
              provider === selectedSubProvider ? "active" : ""
            } nav-item ng-star-inserted`}
          >
            <a
              role="tab"
              className={`nav-link ${
                provider === selectedSubProvider ? "active" : ""
              }`}
              aria-controls
              aria-selected="true"
              id
            >
              <span />
              <span tabIndex={0} id="parentTab-0" className="ng-star-inserted">
                {provider}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab1;
