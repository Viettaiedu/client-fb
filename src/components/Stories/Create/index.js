import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { FaFont } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useState ,useEffect} from "react";


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
  const [file, setFile] = useState(null);
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
        
            <Link
              to={routesPublic.home}
              className="stories-create__left__header__close"
            >
              <AiOutlineClose />
            </Link>
         
            <Link
              to={routesPublic.home}
              className="stories-create__left__header__img"
            >
              {" "}
              <img src="/logo.png" alt="" />
            </Link>
        </div>
        <div className="stories-create__left__setting">
          <div className="stories-create__left__setting__title">
           <h5>Tin của bạn</h5>
         
           <span
              className="stories-create__left__setting__title__icon"
              onClick={() => alert("Chưa làm chức năng này!")}
            >
              <AiFillSetting />
            </span>
          </div>
          <Link
            to={routesPublic.profile + "/" + currentUser.id}
            className="stories-create__left__setting__user"
          >
          <img
              src={
                currentUser.profilePic
                  ? "/uploads/"+currentUser.profilePic
                  : "/uploads/no-image.webp"
              }
              alt=""
            />
            <span>{currentUser.firstName + " " + currentUser.lastName}</span>
           
           
          </Link>
        </div>
      </div>
      <div className="stories-create__right">
      {true ? <div className="stories-create__right__box">
              <p className="stories-create__right__box__title">
                Xem trước
              </p>
              <div className="stories-create__right__box__background">
              <span className="stories-create__right__box__image">
                  <img src="/uploads/no-image.webp" /> 

              </span>
              </div>
      </div>: <>
      <label
          htmlFor="stories-create-file"
          className="stories-create__right__create stories-create__right__create--image"
        >
          <p>
            <BsImageFill />
          </p>
          <span>Tạo tin ảnh</span>
        </label>
       
        <input type="file" id="stories-create-file" hidden  onChange={(e) => setFile(e.target.files[0])}/>
        
        
        <div className="stories-create__right__create stories-create__right__create--text">
         <>
         <p>
            <FaFont />
          </p>
          <span>Tạo tin dạng văn bảng</span>
         </>
        </div>
      </> }
      
         
        
      </div>
      <div className="stories-create__right-header">
       <HeaderRight isHideMessage={true} />
        
      </div>
     <Link to={routesPublic.home}  className="stories-create__back tablet-display" > 
      <img src='/logo.png' alt='facebook'/>
      </Link>
    </div>
  );
}

export default Create;
