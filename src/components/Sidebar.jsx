function Sidebar({
  selectedTab,
  setSelectedTab,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <span className="brand-name">SocialSphere</span>
        <button
          type="button"
          className="sidebar-close"
          aria-label="Close menu"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✕
        </button>
      </div>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto sidebar-nav">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${selectedTab === "Home" ? "active" : ""}`}
            onClick={() => setSelectedTab("Home")}
          >
            Home
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${selectedTab === "Create Post" ? "active" : ""}`}
            onClick={() => setSelectedTab("Create Post")}
          >
            Create Post
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
