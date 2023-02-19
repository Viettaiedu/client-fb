import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaFont } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState ,useEffect} from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// -my imports
import "./create.scss";
import { routesPublic } from "../../../config/routes";
import HeaderRight from "../../Header/HeaderRight";
import { useContext } from "react";
import { UserContext } from "../../../context/authContext";
let isFirstLoading = true;
function Create() {
  const { currentUser } = useContext(UserContext);
  const [skeleton, setSkeleton] = useState(true);
  useEffect (() => {
    setTimeout(() => {
        setSkeleton(false);
        isFirstLoading = false;
    },(3 * 1000))
  },[])
  return (
    <div className="stories-create">
      <div className="stories-create__left">
        <div className="stories-create__left__header">
          {skeleton && isFirstLoading ? (
            <div className="skeleton-avatar">
              <Skeleton />
            </div>
          ) : (
            <Link
              to={routesPublic.home}
              className="stories-create__left__header__close"
            >
              <AiOutlineClose />
            </Link>
          )}
          {skeleton && isFirstLoading ? (
            <div className="skeleton-avatar">
              <Skeleton />
            </div>
          ) : (
            <Link
              to={routesPublic.home}
              className="stories-create__left__header__img"
            >
              {" "}
              <img src="/logo.png" alt="" />
            </Link>
          )}
        </div>
        <div className="stories-create__left__setting">
          <div className="stories-create__left__setting__title">
          {skeleton && isFirstLoading ? (
            <div className="skeleton-name">
              <Skeleton />
            </div>
          ) :  <h5>Tin của bạn</h5>}
          {skeleton && isFirstLoading ? (
            <div className="skeleton-avatar">
              <Skeleton />
            </div>
          ) :  <span
              className="stories-create__left__setting__title__icon"
              onClick={() => alert("Chưa làm chức năng này!")}
            >
              <AiFillSetting />
            </span>}
          </div>
          <Link
            to={routesPublic.profile + "/" + currentUser.id}
            className="stories-create__left__setting__user"
          >
          {skeleton && isFirstLoading ? (
            <div className="skeleton-avatar">
              <Skeleton />
            </div>
          ) :  <img
              src={
                currentUser.profilePic
                  ? "/uploads/"+currentUser.profilePic
                  : "/uploads/no-image.webp"
              }
              alt=""
            />}
          {skeleton && isFirstLoading ? (
            <div className="wrapper-skeleton">
              <Skeleton />
            </div>
          ) :   <span>{currentUser.firstName + " " + currentUser.lastName}</span>}
           
           
          </Link>
        </div>
      </div>
      <div className="stories-create__right">
      {skeleton && isFirstLoading ? (
            <div className="skeleton-name">
              <Skeleton count={18} />
            </div>
          ) :   <label
          htmlFor="stories-create-file"
          className="stories-create__right__create stories-create__right__create--image"
        >
          <p>
            <BsImageFill />
          </p>
          <span>Tạo tin ảnh</span>
        </label>}
       
        <input type="file" id="stories-create-file" hidden />
        
        {skeleton && isFirstLoading ? (
            <div className="skeleton-name">
              <Skeleton count={18} />
            </div>
          ) :   
        <div className="stories-create__right__create stories-create__right__create--text">
         <>
         <p>
            <FaFont />
          </p>
          <span>Tạo tin dạng văn bảng</span>
         </>
        </div>
         
         }
        
      </div>
      <div className="stories-create__right-header">
      {skeleton && isFirstLoading ? (
            <div className="wrapper-skeleton">
              <Skeleton />
            </div>
          ) :  <HeaderRight isHideMessage={true} />}
        
      </div>
    </div>
  );
}

export default Create;
