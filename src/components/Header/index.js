import "./header.scss";

import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { RiYoutubeLine, RiYoutubeFill, RiGovernmentLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";
import { IoMdNotifications } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
//-------My import
import TextHover from "./TextHover";
import { routesPublic } from "../../config/routes";
import Account from "./Account";
import ComNotification from "../../components/notification";
function Header() {
  const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const accountRef = useRef();
  const notificationRef = useRef();
  useEffect(() => {
    function handleClickOutsideAccount(e) {
      const el = document.querySelector(".header__right__one.select");
      if (el && el.title === "account" && el.contains(e.target)) {
        setShowAccountSetting(true);
      } else {
        if (accountRef.current && !accountRef.current.contains(e.target)) {
          setShowAccountSetting(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutsideAccount);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAccount);
    };
  }, [accountRef]);

  useEffect(() => {
    function handleClickOutsideAccount(e) {
      const el = document.querySelector(".header__right__one.select");
      if (el && el.title === "notifi" && el.contains(e.target)) {
        setShowNotification(true);
      } else {
        if (
          notificationRef.current &&
          !notificationRef.current.contains(e.target)
        ) {
          setShowNotification(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutsideAccount);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAccount);
    };
  }, [notificationRef]);
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
      <div className="header__right">
        <div className="header__right__one mobile-none ">
          <TiThMenu className="header__right__one__icon " />
          <TextHover text={"Menu"} />
        </div>
        <div className="header__right__one mobile-display screen-large-992-node">
          <GrAdd className="header__right__one__icon " />
        </div>
        <div className="header__right__one">
          <FaFacebookMessenger className="header__right__one__icon" />
          <TextHover text={"Messenger"} />
        </div>
        <div
          className={`header__right__one ${showNotification ? "select" : ""}`}
          title="notifi"
        >
          <TextHover text={"Thông báo"} />
          <IoMdNotifications
            className="header__right__one__icon"
            onClick={() => setShowNotification(!showNotification)}
          />
          <span className="header__right__one__notifi">5</span>
          {showNotification && (
            <ComNotification notificationRef={notificationRef} />
          )}
        </div>
        <div
          className={`header__right__one ${showAccountSetting ? "select" : ""}`}
          title="account"
        >
          <TextHover text={"Tài khoản"} />
          <img
            className="header__right__one__avatar"
            src="/no-image.webp"
            alt=""
            onClick={() => setShowAccountSetting(!showAccountSetting)}
          />
          {showAccountSetting && (
            <Account
              setShowAccountSetting={setShowAccountSetting}
              accountRef={accountRef}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
