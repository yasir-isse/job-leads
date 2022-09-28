import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { MdExpandMore, MdQueryStats } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { AiOutlineFileAdd, AiOutlineBarChart } from 'react-icons/ai';
import { RiUserSettingsLine } from 'react-icons/ri';
import Logo from '../logo/Logo';
import './header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  return (
    <header className='header-section'>
      <div className='header-container'>
        {isNavOpen && (
          <div className='header-nav'>
            <div className='nav-overlay'>
              <nav className='nav-container'>
                <div className='nav-close'>
                  <IoClose
                    className='nav-close-icon'
                    onClick={() => setIsNavOpen(!isNavOpen)}
                  />
                </div>

                <div className='nav-logo'>
                  <Logo />
                </div>

                <div className='nav-list-container'>
                  <div className='nav-list-item'>
                    <AiOutlineBarChart className='nav-list-icon' />
                    <span>Stats</span>
                  </div>

                  <div className='nav-list-item'>
                    <MdQueryStats className='nav-list-icon' />
                    <span>All Jobs</span>
                  </div>

                  <div className='nav-list-item active-link'>
                    <AiOutlineFileAdd className='nav-list-icon' />
                    <span>Add a Job</span>
                  </div>

                  <div className='nav-list-item'>
                    <RiUserSettingsLine className='nav-list-icon' />
                    <span>Profile</span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
        <div className='header-toggle'>
          <HiMenuAlt2
            className='nav-open'
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        </div>
        <div className='header-logo'>
          <Logo />
        </div>

        <div className='header-middle-text'>
          <span>Dashboard</span>
        </div>

        <div className='profile-container'>
          <FaUserCircle className='profile-icon' />
          <span className='profile-name'>User</span>
          <MdExpandMore className='profile-more-icon' />
        </div>
      </div>
    </header>
  );
};

export default Header;
