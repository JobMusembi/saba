import * as React from "react"
//import { useLocation } from "@reach/router"

const Header = ({ menuState, setMenuState }) => {
  // const location = useLocation()
  // useEffect(() => {
  //   setMenuState(false)
  // }, [location])
  return (
    <div className="container">
      <div className="header-wrap">
        <div className="header-inner">
        <div 
         onClick={() => setMenuState(!menuState)}
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



