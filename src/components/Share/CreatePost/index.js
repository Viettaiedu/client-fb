import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
//-my imports
import "./create-post.scss";
import CEmojiPicker from "../../CEmojiPicker";
import { MdInsertEmoticon, MdLibraryAdd } from "react-icons/md";
import httpsRequest from "../../../api/axios";
import { useDispatch   } from "react-redux";
import { addPost  } from "../../../redux/actions/post";
import { UserContext } from "../../../context/authContext";
import Skeleton from "react-loading-skeleton";
import { AiOutlineClose } from "react-icons/ai";
let isFirstLoading = true;
const CreatePost = forwardRef(({ setShowCreateShare,setShowSpinner }, ref) => {
  const [showEmoji, setShowEmoji] = useState(false);
 const {currentUser} = useContext(UserContext);
 const [skeleton, setSkeleton] = useState(true);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
    const dispatch = useDispatch();
  const handleEmoijClick = (event, emoij) => {
    setDesc((prev) => prev + event.emoji);
  };
  const handleChange = (e) => {
    setDesc(e.target.value);
  };
  const emojiRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setShowEmoji(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [emojiRef]);
  const handleClick = (e) => {
    setShowEmoji(!showEmoji);
  };
  const handleClose = (e) => {
    setFile(null);
  };
  const handleFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await httpsRequest.post("/upload", formData);
      return data.file;
    } catch (e) {
      console.log("Error", e);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let image = "/no-background.png";
    if(file) { image = await handleFile(file)};
    setShowCreateShare(false);
    setShowSpinner(true);
    setTimeout(async () => {
      setShowSpinner(false);
     await dispatch(addPost({image,desc}))
      setTimeout(() => {
      },(300))
    },(3 * 1000))
  };
  useEffect(() => {
      setTimeout(() => {
        isFirstLoading  = false;
        setSkeleton(false);
      },(3 * 1000))
  },[])
  return (
    <div className="model-create">
      <div className="create-post" ref={ref}>
        <div className="create-post__header">
            {skeleton && isFirstLoading ?  <div className="wrapper-skeleton">
              <Skeleton />
            </div>: <h3>Tạo bài viết</h3>} 
          <span
            className="create-post__header__close"
            onClick={() => setShowCreateShare(false)}
          >
            <AiOutlineClose  />
          </span>
        </div>
        <div className="create-post__center">
          <div className="create-post__center__info">
          {skeleton && isFirstLoading ? 
          <div className="skeleton-avatar">
              <Skeleton />
          </div>
           : <span className="create-post__center__info__avatar">
              <img src={currentUser.profilePic ? "/uploads/"+currentUser.profilePic : "/uploads/no-image.webp"} alt="" />
            </span>} 
            {skeleton && isFirstLoading ? 
          <div className="skeleton-name">
              <Skeleton  count={2}/>
          </div>
           :   <span className="create-post__center__info__name">
             {currentUser.firstName + " "+currentUser.lastName} <span></span>
            </span>} 
          
          </div>
          <div className="create-post__center__search">
          {skeleton && isFirstLoading ? 
          <div className="wrapper-skeleton">
              <Skeleton  count={2}/>
          </div>
           :  <>
           <input
              value={desc}
              autoFocus={true}
              placeholder={`${currentUser.firstName} ơi,bạn đang nghĩ gì vậy`}
              onChange={handleChange}
            />
              <span className="emoij">
              <MdInsertEmoticon onClick={handleClick} />

              {showEmoji && (
                <CEmojiPicker
                  handleEmoijClick={handleEmoijClick}
                  ref={emojiRef}
                  handleClick={handleClick}
                />
              )}
            </span>
           </>
            } 
           
          
          </div>
          <div className="create-post__center__upload">

          {skeleton && isFirstLoading ? 
          <div className="wrapper-skeleton">
              <Skeleton  count={2}/>
          </div>
           : <>
           {!file && (
              <label
                className="create-post__center__upload__wrap"
                htmlFor="create-post-image"
              >
                <span className="create-post__center__upload__wrap__image">
                  <span className="create-post__center__upload__wrap__image__icon">
                    <MdLibraryAdd />
                  </span>
                  <p>Thêm ảnh/video</p>
                  <span>hoặc kéo và thả</span>
                </span>
              </label>
            )}
            {!file && (
              <input
                id="create-post-image"
                hidden
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            )}
            <div
              className="create-post__center__upload__close"
              onClick={handleClose}
            >
              <GrClose />
            </div>
            {file && (
              <div className="create-post__center__upload__file-image">
              {file.name.endsWith('.mov') || file.name.endsWith('.mp4') ?<video playsInline controls src={URL.createObjectURL(file)} alt="" /> : <img src={URL.createObjectURL(file)} alt="" />}
                
              </div>
            )}
           </>
            } 
           
          </div>
        </div>
        <button
          onClick={handleSubmit}
          disabled={file || desc ? false : true}
          className={`create-post__submit ${file || desc ? "" : "disable"}`}
        >
         {skeleton && isFirstLoading ? 
          <div className="wrapper-skeleton">
              <Skeleton  count={2}/>
          </div>
           : <>
           Đăng
           </>
            } 
        </button>
      </div>
     
    </div>
  );
});

export default CreatePost;
