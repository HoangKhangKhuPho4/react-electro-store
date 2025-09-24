import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/" className="logo-link">
        <div className="logo-icon">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#FF6B35" />
            <path
              d="M12 28V12H16.5L20 18L23.5 12H28V28H24V18.5L20 24L16 18.5V28H12Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="logo-text">Electro</span>
      </a>
    </div>
  );
};

export default Logo;
