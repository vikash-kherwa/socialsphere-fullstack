import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PostListProvider from "./store/post-list-store";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedTab =
    location.pathname === "/create-post" ? "Create Post" : "Home";

  const handleSelectTab = (tab) => {
    const nextPath = tab === "Create Post" ? "/create-post" : "/";
    navigate(nextPath);
    setIsSidebarOpen(false);
  };

  return (
    <PostListProvider>
      <div className="app-container">
        <div
          className={`sidebar-backdrop ${isSidebarOpen ? "show" : ""}`}
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={handleSelectTab}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        ></Sidebar>

        <div className="content">
          <Header
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
            isSidebarOpen={isSidebarOpen}
          ></Header>

          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
