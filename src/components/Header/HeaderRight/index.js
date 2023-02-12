import { FaFacebookMessenger } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { IoMdNotifications } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import TextHover from "../TextHover";
import ComNotification from '../../Notification';
import AccountFuture from "../AccountFuture";
import { useEffect, useRef, useState } from "react";
import './header-right.scss';
function HeaderRight({isHideMessage}) {
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
    return ( <div className="header__right">
    <div className="header__right__one mobile-none ">
      <TiThMenu className="header__right__one__icon " />
      <TextHover text={"Menu"} />
    </div>
    <div className="header__right__one mobile-display screen-large-992-node">
      <GrAdd className="header__right__one__icon " />
    </div>
    {!isHideMessage && <div className="header__right__one">
      <FaFacebookMessenger className="header__right__one__icon" />
      <TextHover text={"Messenger"} />
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
        <AccountFuture
          setShowAccountSetting={setShowAccountSetting}
          accountRef={accountRef}
        />
      )}
    </div>
  </div>  );
}
export default HeaderRight;