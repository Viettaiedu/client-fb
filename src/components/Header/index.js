import "./header.scss";

import { BsSearch } from "react-icons/bs";
import { AiFillHome,  } from "react-icons/ai";
import { RiYoutubeLine,  RiGovernmentLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { Link } from "react-router-dom";
//-------My import
import TextHover from "./TextHover";
import { routesPublic } from "../../config/routes";
import AccountFuture from './AccountFuture';
import HeaderRight from "./HeaderRight";
function Header() {
  return (
    <div className="header">
      <Link to={routesPublic.home} className="header__left">
        <img src="/logo.png" alt="facebook" />
        <div className="header__left__search">
          <BsSearch />
          <input
            type="text"
            name="search"
            placeholder="Tìm kiểm trên Facebook"
          />
        </div>
        <div className="header__left__search mobile-display screen-large-992-node">
          <TiThMenu />
        </div>
      </Link>
      <div className="header__center">
        <Link to={routesPublic.home} className="header__center__icon select">
          {" "}
          <AiFillHome />
          <TextHover text={"Trang chủ"} />{" "}
        </Link>
        <span className="header__center__icon">
          {" "}
          <RiYoutubeLine />
          <TextHover text={"Watch"} />
        </span>
        <Link to="" className="header__center__icon">
          {" "}
          <RiGovernmentLine />
          <TextHover text={"Marketplace"} />
        </Link>
        <Link to="" className="header__center__icon">
          {" "}
          <HiOutlineUserGroup />
          <TextHover text={"Nhóm"} />
        </Link>
        <Link to="" className="header__center__icon">
          {" "}
          <CgGames />
          <TextHover text={"Trò chơi"} />
        </Link>
      </div>
       <HeaderRight />
    </div>
  );
}

export default Header;
