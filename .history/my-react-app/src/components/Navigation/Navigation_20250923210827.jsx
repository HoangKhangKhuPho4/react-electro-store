import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const mainMenuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Single Page", path: "/single" },
    {
      name: "Pages",
      path: "/pages",
      hasDropdown: true,
      subItems: [
        { name: "About Us", path: "/about" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
        { name: "Terms", path: "/terms" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  const categories = [
    "Electronics",
    "Computers & Laptops",
    "Smartphones & Tablets",
    "Cameras & Photography",
    "Audio & Headphones",
    "Gaming",
    "Home & Garden",
    "Sports & Outdoors",
  ];

  return (
    <nav className="navigation">
      <div className="navigation-container">
        {/* All Categories Section */}
        <div className="nav-categories">
          <button className="categories-btn">
            <svg
              className="hamburger-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3 6H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 12H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3 18H17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>All Categories</span>
            <svg
              className="dropdown-arrow"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Categories Dropdown */}
          <div className="categories-dropdown">
            <ul className="categories-list">
              {categories.map((category, index) => (
                <li key={index} className="category-item">
                  <a
                    href={`/category/${category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spacer để đẩy menu về phải */}
        <div className="nav-spacer"></div>

        {/* Main Navigation Menu */}
        <div className="nav-menu">
          <ul className="menu-list">
            {mainMenuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${
                  item.hasDropdown ? "has-dropdown" : ""
                }`}
              >
                <a href={item.path} className="menu-link">
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="dropdown-arrow"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </a>

                {/* Sub Menu */}
                {item.hasDropdown && (
                  <ul className="sub-menu">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="sub-menu-item">
                        <a href={subItem.path} className="sub-menu-link">
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="nav-contact">
          <div className="contact-info">
            <svg
              className="phone-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.3 15.92L16.04 13.66C15.34 12.96 14.22 12.96 13.52 13.66L12.21 14.97C11.96 15.22 11.59 15.3 11.26 15.18C10.25 14.82 8.52 13.69 7.02 12.19C5.52 10.69 4.39 8.96 4.03 7.95C3.91 7.62 3.99 7.25 4.24 7L5.55 5.69C6.25 4.99 6.25 3.87 5.55 3.17L3.29 0.91C2.59 0.21 1.47 0.21 0.77 0.91L0.02 1.66C-0.74 2.42 -1.08 3.49 -0.91 4.56C-0.38 7.56 1.12 11.61 4.41 14.9C7.7 18.19 11.75 19.69 14.75 20.22C15.82 20.39 16.89 20.05 17.65 19.29L18.4 18.54C19.1 17.84 19.1 16.72 18.4 16.02L18.3 15.92Z"
                fill="currentColor"
              />
            </svg>
            <span className="phone-number">+0123 456 7890</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
