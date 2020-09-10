import React, { useState } from 'react'

// Material UI Icons
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import HomeIcon from '@material-ui/icons/Home';
// Style
import './Navbar.scss'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const handleActiveLink = (active) => {
    setActiveLink(active)
  }

  return (
    <nav className="main__nav">
      <ul className="links">
        <li
          onClick={() => handleActiveLink('home')}
          className={`link__item ${
            activeLink === 'home' && 'link__item--active'
          }`}
        >
          <div className="icon__container">
            <HomeIcon />
          </div>
          <span />
          <p className="label">home</p>
        </li>
        <li
          onClick={() => handleActiveLink('friend')}
          className={`link__item ${
            activeLink === 'friend' && 'link__item--active'
          }`}
        >
          <div className="icon__container">
            <PeopleOutlineIcon />
          </div>
          <span />
          <p className="label">friend</p>
        </li>
        <li
          onClick={() => handleActiveLink('watch')}
          className={`link__item ${
            activeLink === 'watch' && 'link__item--active'
          }`}
        >
          <div className="icon__container">
            <LiveTvIcon />
          </div>
          <span />
          <p className="label">watch</p>
        </li>
        <li
          onClick={() => handleActiveLink('groups')}
          className={`link__item ${
            activeLink === 'groups' && 'link__item--active'
          }`}
        >
          <div className="icon__container">
            <SupervisedUserCircleOutlinedIcon />
          </div>
          <span />
          <p className="label">groups</p>
        </li>
        <li
          onClick={() => handleActiveLink('game')}
          className={`link__item ${
            activeLink === 'game' && 'link__item--active'
          }`}
        >
          <div className="icon__container">
            <SportsEsportsOutlinedIcon />
          </div>
          <span />
          <p className="label">game</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
