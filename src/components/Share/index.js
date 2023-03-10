import "./share.scss";
import img1 from "../../assets/share-icons/1.png";
import img2 from "../../assets/share-icons/2.png";
import img3 from "../../assets/share-icons/3.png";
import CreatePost from "./CreatePost";


import { useContext, useEffect, useRef, useState } from "react";
import ErrorMesssage from "../Modal/ErrorMessage";
import { Link } from "react-router-dom";
import { routesPublic } from "../../config/routes";
import Spinner from "../Modal/Spinner";
import { UserContext } from "../../context/authContext";
import LoadingSkeleton from "../LoadingSkeleton";
import Avatar from "../Avatar";
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
        {skeleton && isFirstLoading ? <LoadingSkeleton circle="true"/> :  <Avatar src={currentUser.profilePic} alt={currentUser.firstName}/>}
   
        </Link>

        <div className="share__top__search">
        {skeleton && isFirstLoading ? <LoadingSkeleton  height={30}/> :  <input onFocus={() => setShowCreateShare(true)} type="text" placeholder={`${currentUser.firstName} ??i,b???n ??ang ngh?? g?? th????`}    />}
   
       
        </div>
      </div>
      <div className="share__bottom">
      
        <div
          className="share__bottom__icon"
          onClick={()=>setShowError(true)}
        >
      {skeleton && isFirstLoading ? <LoadingSkeleton  /> : <>
          <img src={img1} alt="" />
          <span>Video tr???c ti???p</span>
          </>}  
          

       
        </div>
        <div
          className="share__bottom__icon"
          onClick={() => setShowCreateShare(true)}
        >
       {skeleton && isFirstLoading ? <LoadingSkeleton  /> : <>
          <img src={img2} alt="" />
          <span>????ng b??i</span>
          </>}  
         
        </div>
        <div className="share__bottom__icon">
        {skeleton && isFirstLoading ? <LoadingSkeleton  /> :  <>
          <img src={img3} alt="" />
          <span   onClick={()=>setShowError(true)}>C???m x??c/Ho???t ?????ng</span>
          </>} 
         
     
        </div>
      </div>

      {showCreateShare && (
        <CreatePost
        setShowSpinner={setShowSpinner}
          ref={createShareRef}
          setShowCreateShare={setShowCreateShare}
        />
      )}
     {showError &&  <ErrorMesssage ref={errorRef} setShowError={setShowError} message={"Ch???c n??ng n??y tui kh??ng c?? l??m hihi!"}/>}
     {showSpinner && <Spinner />}
    </div>
  );
}

export default Share;
