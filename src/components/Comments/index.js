import { useContext, useEffect, useRef, useState } from "react";
import { BiSend } from "react-icons/bi";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { MdInsertEmoticon } from "react-icons/md";
import CEmojiPicker from "../CEmojiPicker";
import "./commnents.scss";
import Comment from "../Comment";
import { UserContext } from "../../context/authContext";
import { useDispatch } from "react-redux";
import {addComment, getComments} from '../../redux/actions/comment';
let isFirstLoading = true;
function Commnents({ showCommnent  ,comments , postId}) {
  const [skeleton , setSkeleton] = useState(true);
  const {currentUser} = useContext(UserContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const [loading ,setLoading] = useState(false);
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
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
      isFirstLoading = false;
  },(3* 1000))
  },[])
  const handleSend =  async() => {
    if(!value) return;
     await dispatch(addComment({desc:value,postId:postId}))
  }
  return (
    <div className={`comments ${loading ? "loading":""}`}>
      {comments.map((comment, index) => (
       <Comment postId={postId} comment={comment} key={index} />
      ))}
      <div className="comments__current-user">

      {skeleton && isFirstLoading ?<div className="wrapper-skeleton">

      <Skeleton  count={2}  />
      </div> : <>
        <span className="comments__current-user__image">
          <img alt={currentUser.firstName}  src={currentUser.profilePic ? "/uploads/"+currentUser.profilePic :"/uploads/no-image.webp"} />
        </span>
        <span className="comments__current-user__input">
          <input
            value={value}
            onChange={handleChange}
            type="text"
            placeholder={`${currentUser.firstName} bình luận...`}
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
        <button className="comments__current-user__send" onClick={handleSend}>
          <BiSend />
        </button>
        
      </>}
       
      </div>
    </div>
  );
}

export default Commnents;
