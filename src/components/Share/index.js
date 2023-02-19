import "./share.scss";
import img1 from "../../assets/share-icons/1.png";
import img2 from "../../assets/share-icons/2.png";
import img3 from "../../assets/share-icons/3.png";
import CreatePost from "./CreatePost";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useContext, useEffect, useRef, useState } from "react";
import ErrorMesssage from "../Model/ErrorMessage";
import { Link } from "react-router-dom";
import { routesPublic } from "../../config/routes";
import Spinner from "../Model/Spinner";
import { UserContext } from "../../context/authContext";
let isFirstLoading = true;
function Share() {
  const [skeleton, setSkeleton] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);
  const {currentUser} = useContext(UserContext);
  const [showCreateShare, setShowCreateShare] = useState(false);
  const createShareRef = useRef();
  const [showError, setShowError] = useState(false);
    const errorRef = useRef();
    useEffect(() => {
      setTimeout(() => {
        setSkeleton(false)
        isFirstLoading = false;
      },(4 * 1000))
    },[])
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        createShareRef.current &&
        !createShareRef.current.contains(event.target)
      ) {
        setShowCreateShare(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [createShareRef]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (errorRef.current && !errorRef.current.contains(event.target)) {
        setShowError(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [errorRef]);
  return (
    <div className="share">
      <div className="share__top">
        <Link to={routesPublic.profile+"/"+currentUser.id} className="share__top__avatar">
          {skeleton && isFirstLoading? <Skeleton className="avatar"/> :  <img src={currentUser.profilePic ? "/uploads/"+currentUser.profilePic :"/uploads/no-image.webp"} alt={currentUser.firstName}  />}
        </Link>

        <div className="share__top__search">
        {skeleton && isFirstLoading? <Skeleton className="skeleton"/> :     <input onFocus={() => setShowCreateShare(true)} type="text" placeholder={`${currentUser.firstName} ơi,bạn đang nghĩ gì thế?`}   />}
       
        </div>
      </div>
      <div className="share__bottom">
      
        <div
          className="share__bottom__icon"
          onClick={()=>setShowError(true)}
        >
        {skeleton && isFirstLoading? <div className="wrapper-skeleton" ><Skeleton    className="skeleton"/></div> :   
          <>
          <img src={img1} alt="" />
          <span>Video trực tiếp</span>
          </>
          }

       
        </div>
        <div
          className="share__bottom__icon"
          onClick={() => setShowCreateShare(true)}
        >
         {skeleton && isFirstLoading? <div className="wrapper-skeleton" ><Skeleton    className="skeleton"/></div> :   
          <>
          <img src={img2} alt="" />
          <span>Đăng bài</span>
          </>
         }
        </div>
        <div className="share__bottom__icon">

        {skeleton && isFirstLoading? <div className="wrapper-skeleton" ><Skeleton    className="skeleton"/></div> :   
          <>
          <img src={img3} alt="" />
          <span   onClick={()=>setShowError(true)}>Cảm xúc/Hoạt động</span>
          </>
         }
     
        </div>
      </div>

      {showCreateShare && (
        <CreatePost
        setShowSpinner={setShowSpinner}
          ref={createShareRef}
          setShowCreateShare={setShowCreateShare}
        />
      )}
     {showError &&  <ErrorMesssage ref={errorRef} setShowError={setShowError} message={"Chức năng này tui không có làm hihi!"}/>}
     {showSpinner && <Spinner />}
    </div>
  );
}

export default Share;
