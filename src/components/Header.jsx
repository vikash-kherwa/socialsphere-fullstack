const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div>
      <header className="p-3 text-bg-dark desktop-header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start header-row">
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
              onClick={onToggleSidebar}
            >
              {isSidebarOpen ? "✕" : "☰"}
            </button>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 header-nav">
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Feed
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Friends
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Messages
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Notifications
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Profile
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 header-search"
              role="search"
            >
              <input
                type="search"
                className="form-control search-input"
                placeholder="Search people or posts..."
                aria-label="Search"
              />
            </form>

            <div className="text-end header-actions">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>

              <button type="button" className="btn btn-warning">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
