function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "180px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">SocialSphere</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>

          <li
            onClick={() => {
              setSelectedTab("Create Post");
            }}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
            >
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
