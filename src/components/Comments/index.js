import { useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import { MdInsertEmoticon } from "react-icons/md";
import CEmojiPicker from "../CEmojiPicker";
import "./commnents.scss";
function Commnents({ showCommnent }) {
  const [value, setValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [loading ,setLoading] = useState(false);
  const comments = [
    {
      id: "",
      desc: "Hello",
      userId: "",
      postId: "",
      profilePic: "/no-image.webp",
      name: "Thủy Phan",
      createdAt: "3 giờ",
    },
    {
      id: "",
      desc: "Hello",
      userId: "",
      postId: "",
      profilePic: "/no-image.webp",
      name: "Thủy Phan",
      createdAt: "3 giờ",
    },
    {
      id: "",
      desc: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello ",
      userId: "",
      postId: "",
      profilePic: "/no-image.webp",
      name: "Thủy Phan",
      createdAt: "3 giờ",
    },
  ];
  const handleEmoijClick = (event, emoij) => {
    setValue((prev) => prev + event.emoji);
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
  const handleChange = (e) => {
    setValue(e.target.value);
  };
 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000)
  },[showCommnent])

 
  return (
    <div className={`comments ${loading ? "loading":""}`}>
      {comments.map((comment, index) => (
        <div key={index} className="comments__comment">
          <span className="comments__comment__image">
            <img src={comment.profilePic} alt="" />
          </span>
          <span className="comments__comment__info">
            <span className="comments__comment__info__name">
              {comment.name}
            </span>
            <p>{comment.desc}</p>
          </span>
          <span className="comments__comment__createdAt">
            {comment.createdAt}
          </span>
        </div>
      ))}

      <div className="comments__current-user">
        <span className="comments__current-user__image">
          <img alt="" src="/no-image.webp" />
        </span>
        <span className="comments__current-user__input">
          <input
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Viết bình luận..."
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
        </span>
        <button className="comments__current-user__send">
          <BiSend />
        </button>
      </div>
    </div>
  );
}

export default Commnents;
