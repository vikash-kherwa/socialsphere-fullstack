const Header = () => {
  return (
    <div>
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Privacy
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Terms
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Help
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Contact
            </a>
          </li>
        </ul>

        <p className="text-center text-body-secondary">
          © 2026 SocialSphere
        </p>
      </footer>
    </div>
  );
};

export default Header;