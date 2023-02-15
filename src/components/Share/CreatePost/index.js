import { forwardRef, useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
//-my imports
import "./create-post.scss";
import CEmojiPicker from "../../CEmojiPicker";
import { MdLibraryAdd } from "react-icons/md";
import ErrorMesssage from "../../ErrorMessage";



const CreatePost = forwardRef(({setShowCreateShare} , ref ) => 
{

  const [showEmoji, setShowEmoji] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const handleEmoijClick = (event, emoij) => {
    setValue((prev) => prev + event.emoji);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
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
  return (
    <div className="model-create" >
      <div className="create-post" ref={ref}>
        <div className="create-post__header">
          <h3>Tạo bài viết</h3>
          <span className="create-post__header__close" onClick={() => setShowCreateShare(false)} >
            <GrClose />
          </span>
        </div>
        <div className="create-post__center">
          <div className="create-post__center__info">
            <span className="create-post__center__info__avatar">
              {" "}
              <img src="/no-image.webp" alt="" />
            </span>
            <span className="create-post__center__info__name">Viết Tài <span>đang cảm thấy</span></span>
          </div>
          <div className="create-post__center__search">
            <input
              value={value}
              placeholder="Viết ơi,bạn đang nghĩ gì vậy"
              onChange={handleChange}
            />
            <CEmojiPicker
              showEmoji={showEmoji}
              handleEmoijClick={handleEmoijClick}
              ref={emojiRef}
              handleClick={handleClick}
            />
          </div>
          <div className="create-post__center__upload">
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
                <img src={URL.createObjectURL(file)} alt="" />
              </div>
            )}
          </div>
        </div>
        <button disabled={file || value ? true :false} className={`create-post__submit ${file || value ? "":"disable"}`}>Đăng</button>
      </div>

      
    </div>
  );
})

export default CreatePost;
