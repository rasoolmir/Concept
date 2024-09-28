import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-left">
          <span className="hamburger-btn">☰</span>
          <div className="nav__logo">
            <a href="#" className="nav__logo">
              <img src="/public/logonav.png" alt="Logo" />
            </a>
          </div>
        </div>

        <div className="nav__search-bar">
          <input
            type="text"
            className="nav__search-bar--search-input"
            placeholder="جستجوی کسب و کار"
          />
        </div>

        <div className="nav__btn">
          <button className="button button-first">
            <a href="#">رایگان شروع کنید</a>
          </button>

          <button className="button button-secondary">
            <a href="#">ورود / ثبت نام</a>
          </button>
        </div>
      </header>

      <nav>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#">شرکت‌ها</a>
          </li>

          <li>
            <a href="#">توسعه دهندگان</a>
          </li>

          <li className="nav__link">
            <a href="#">اخبار و رویدادها</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
