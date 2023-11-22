import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (route) => location.pathname === route;

  return (
    <>
      <div className='navbar'>
        <div
          onClick={() => navigate('/all')}
          className={`nav-item ${isActive('/all') ? 'active' : ''}`}
        >
          ALL
        </div>
        <div
          onClick={() => navigate('/fsd')}
          className={`nav-item ${isActive('/fsd') ? 'active' : ''}`}
        >
          FULL STACK DEVELOPMENT
        </div>
        <div
          onClick={() => navigate('/ds')}
          className={`nav-item ${isActive('/ds') ? 'active' : ''}`}
        >
          DATA SCIENCE
        </div>
        <div
          onClick={() => navigate('/cb')}
          className={`nav-item ${isActive('/cb') ? 'active' : ''}`}
        >
          CYBERSECURITY
        </div>
        <div
          onClick={() => navigate('/career')}
          className={`nav-item ${isActive('/career') ? 'active' : ''}`}
        >
          CAREER
        </div>
      </div>
    </>
  );
}

export default Navbar;
