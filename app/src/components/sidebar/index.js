import React from 'react';

// Components
import SidebarRow from './SidebarRow';

// avatar image
import AvatarImage from '../../images/avatar.jpg';

// Style
import './index.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Side Bar Rows */}
      <SidebarRow
        title="ElBeqqal Youssef"
        avatar={AvatarImage}
      />

      <SidebarRow
        title="COVID-19 Help Center"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/-IzNHGBZk_X.png"
      />

      <SidebarRow
        title="Friends"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png"
      />

      <SidebarRow
        title="Groups"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/L2qlIhGe55v.png"
      />

      <SidebarRow
        title="Videos"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/ob1CgXwDORG.png"
      />

      <SidebarRow
        title="Events"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/rvdJw9pk06Q.png"
      />

      <SidebarRow
        title="Memories"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ZfcXL61Fl6I.png"
      />

      <SidebarRow
        title="Saves"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/EygD86pCwoD.png"
      />

      <SidebarRow
        title="Pages"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/TbOx5lWkw-N.png"
      />

      <SidebarRow
        title="Memories"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ZfcXL61Fl6I.png"
      />

      <SidebarRow
        title="Recent Activities"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/u6E3qp8lSIK.png"
      />
    </div>
  );
};

export default Sidebar;
