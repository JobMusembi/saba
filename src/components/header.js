import React, { useEffect } from "react"
import { useLocation } from "@reach/router"

const Header = ({ menuState, setMenuState }) => {
  const location = useLocation()

  useEffect(() => {
    setMenuState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])
  return (
    <div className="container">
      <div className="header-wrap">
        <div className="header-inner">
        <div 
        role = "button"
        tabIndex={0}
         onClick={() => setMenuState(!menuState)}
         onKeyDown={() => setMenuState(!menuState)}
        className="hamburger-menu">
            <span></span>
            <span></span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;



