import React from 'react';

// prop types
import PropTypes from 'prop-types';

// Material UI Components
import { Avatar } from '@material-ui/core';

// Style
import './SidebarRow.scss';

const SidebarRow = ({title, avatar, src}) => {
  return (
    <div className="sidebar__row">
      { avatar && <Avatar alt={title} src={avatar} />}
      { src && <img src={src} alt={title} title={title} />}
      <p>{title}</p>
    </div>
  );
};

SidebarRow.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  src: PropTypes.string,
};

export default SidebarRow;
