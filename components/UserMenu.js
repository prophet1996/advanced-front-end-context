/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

function UserMenu({ currentUser, onLogout }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const avatarRef = useRef();

  useEffect(() => {
    document.addEventListener("click", hideMenu);

    return () => {
      document.removeEventListener("click", hideMenu);
    };
  }, []);

  const hideMenu = (e) => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== avatarRef.current) {
      setMenuVisible(false);
    }
  };

  const toggleMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  return (
    <div className="UserMenu">
      <img
        className="UserAvatar"
        alt="User avatar"
        src={currentUser.avatar}
        onClick={toggleMenu}
        ref={avatarRef}
      />
      {menuVisible && (
        <ul>
          <li onClick={onLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
