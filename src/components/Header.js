import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';
import icon from '../assets/icon.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header limit">
      <div
        className="back-arrow header-icon"
        onClick={() => navigate('/')}
        aria-hidden="true"
      >
        <IoChevronBackSharp /><span className="year">2023</span>
      </div>
      <p className="header-text">
        <Link className="logo flex" to="/">
          <img src={`${icon}`} alt="application logo" />
          CRYPTOIST
        </Link>
      </p>
      <p className="setting-icon header-icon">
        <CiSettings />
      </p>
    </div>
  );
};

export default Header;
