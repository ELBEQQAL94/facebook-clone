import React from 'react';

// Material UI Components
import { Avatar, IconButton } from '@material-ui/core';

// Material UI Icons
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// avatar image
import AvatarImage from '../../images/avatar.jpg';

// Style
import './ProfileAccount.scss';

const ProfileAccount = () => {
  return (
    <div className="profile__account">
      <div className="avatar__container">
        <Avatar alt="Elbeqqal" src={AvatarImage} />
        <h4>el beqqal</h4>
      </div>
      <div className="button__icon__container">
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
      <div className="button__icon__container">
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
      </div>
      <div className="button__icon__container">
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProfileAccount;
