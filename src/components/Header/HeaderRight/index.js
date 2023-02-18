import { FaFacebookMessenger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import TextHover from "../TextHover";
import ComNotification from '../../Notification';
import AccountFuture from "../AccountFuture";
import { useContext, useEffect, useRef, useState } from "react";
import './header-right.scss';
import Chat from "../../Chat";
import Menu from "../../Menu";
import { UserContext } from "../../../context/authContext";
function HeaderRight({isHideMessage}) {
  const {currentUser} = useContext(UserContext);
    const [showAccountSetting, setShowAccountSetting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const accountRef = useRef();
  const notificationRef = useRef();
  const chatRef = useRef();
  const menuRef = useRef();
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
  useEffect(() => {
    function handleClickOutsideAccount(e) {
      const el = document.querySelector(".header__right__one.select");
      if (el && el.title === "chat" && el.contains(e.target)) {
        setShowChat(true);
      } else {
        if (
          chatRef.current &&
          !chatRef.current.contains(e.target)
        ) {
          setShowChat(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutsideAccount);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAccount);
    };
  }, [chatRef]);
  useEffect(() => {
    function handleClickOutsideAccount(e) {
      const el = document.querySelector(".header__right__one.select");
      if (el && el.title === "menu" && el.contains(e.target)) {
        setShowMenu(true);
      } else {
        if (
          menuRef.current &&
          !menuRef.current.contains(e.target)
        ) {
          setShowMenu(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutsideAccount);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideAccount);
    };
  }, [menuRef]);
    return ( <div className="header__right">
    <div className={`header__right__one ${showMenu ? "select" : ""} mobile-none`} title="menu">
      <TiThMenu className="header__right__one__icon " onClick={() => setShowMenu(!showMenu)}/>
      <TextHover text={"Menu"} />
     {showMenu &&  <Menu ref={menuRef}/>}
    </div>
    <div className="header__right__one mobile-display screen-large-992-none">
      <GrAdd className="header__right__one__icon " />
    </div>
    {!isHideMessage && <div className={`header__right__one ${showChat ? "select" : ""}`} title="chat">
      <FaFacebookMessenger className="header__right__one__icon"   onClick={() => setShowChat(!showChat)}/>
      <TextHover text={"Messenger"} />
    {showChat &&  <Chat  ref={chatRef}/>} 
    </div>}
    
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
        <ComNotification ref={notificationRef} />
      )}
    </div>
    <div
      className={`header__right__one ${showAccountSetting ? "select" : ""}`}
      title="account"
    >
      <TextHover text={"Tài khoản"} />
      <img
        className="header__right__one__avatar"
        src={currentUser.profilePic ? "/uploads/"+currentUser.profilePic : "/no-image.webp"  }
        alt={currentUser.name}
        onClick={() => setShowAccountSetting(!showAccountSetting)}
      />
      {showAccountSetting && (
        <AccountFuture
          setShowAccountSetting={setShowAccountSetting}
          ref={accountRef}
        />
      )}
    </div>
  </div>  );
}
export default HeaderRight;