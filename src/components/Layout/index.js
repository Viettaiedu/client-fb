import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import Header from "../Header";
import LeftBar from "../LeftBar";
import RightBar from "../RightBar";
import './layout.scss';
  const Layout = ({children}) => {
    const {darkMode} = useContext(DarkModeContext);
    return (
      <div className={`theme-${darkMode?"dark":"light"}`}>
      <Header />
      <div className="main">
      <LeftBar />
        <div style={{flex:"1"}}>{children}</div>
        <RightBar />
      </div>
    </div>
    )
  };

  export default Layout;