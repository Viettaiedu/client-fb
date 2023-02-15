import "./share.scss";
import img1 from "../../assets/share-icons/1.png";
import img2 from "../../assets/share-icons/2.png";
import img3 from "../../assets/share-icons/3.png";
import CreatePost from "./CreatePost";
import { useEffect, useRef, useState } from "react";
import ErrorMesssage from "../ErrorMessage";
function Share() {
  const [showCreateShare, setShowCreateShare] = useState(false);
  const createShareRef = useRef();
  const [showError, setShowError] = useState(false);
    const errorRef = useRef();
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
        <span className="share__top__avatar">
          <img src="/no-image.webp" alt="" />
        </span>

        <div className="share__top__search">
          <input type="text" placeholder="Viết ơi,bạn đang nghĩ gì thế?" />
        </div>
      </div>
      <div className="share__bottom">
        <div
          className="share__bottom__icon"
          onClick={()=>setShowError(true)}
        >
          <img src={img1} alt="" />
          <span>Video trực tiếp</span>
        </div>
        <div
          className="share__bottom__icon"
          onClick={() => setShowCreateShare(true)}
        >
          <img src={img2} alt="" />
          <span>Ảnh/video</span>
        </div>
        <div className="share__bottom__icon">
          <img src={img3} alt="" />
          <span   onClick={()=>setShowError(true)}>Cảm xúc/Hoạt động</span>
        </div>
      </div>

      {showCreateShare && (
        <CreatePost
          ref={createShareRef}
          setShowCreateShare={setShowCreateShare}
        />
      )}
     {showError &&  <ErrorMesssage ref={errorRef} setShowError={setShowError} message={"Chức năng này tui không có làm hihi!"}/>}
    </div>
  );
}

export default Share;
