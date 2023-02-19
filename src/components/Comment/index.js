import moment from "moment";
import {TfiClose} from 'react-icons/tfi';
import {GoKebabHorizontal} from 'react-icons/go';
import { useContext, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import {deleteComment} from '../../redux/actions/comment';
import { UserContext } from "../../context/authContext";
import EditComment from "../Model/EditComment";
let isFirstLoading = true;
function Comment({ comment, postId }) {
  const [skeleton, setSkeleton] = useState(true);
  const [showEditComment, setShowEditComment] = useState(false);
  const {currentUser} = useContext(UserContext);
  
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
      isFirstLoading = false;
    }, 3 * 1000);
  }, []);

  return (
    <>
      {postId !== comment.postId ? (
        ""
      ) : (
        <div>
          <div className="comments__comment">
            {skeleton && isFirstLoading ? (
              <div className="skeleton-avatar">
                <Skeleton />
              </div>
            ) : (
              <span className="comments__comment__image">
                <img src={"/uploads/" + comment.profilePic} alt="" />
              </span>
            )}
              <div className="comments__comment__wrapper">
              <span className="comments__comment__info">

{skeleton && isFirstLoading ? (
  <div className="skeleton-name">
    <Skeleton />
  </div>
) : (
  <span className="comments__comment__info__name">
    {comment.firstName + " " + comment.lastName}
  </span>
)}
{skeleton && isFirstLoading ? (
  <div className="skeleton-desc">
    <Skeleton />
  </div>
) : (
  <p>{comment.desc}</p>
)}
</span>
{comment.userId === currentUser.id && 
           <>
           <div className="comments__comment__options"> 
           <span className="comments__comment__options__edit" onClick={() => setShowEditComment(true)}>Chỉnh sửa
           </span>
          <span className="comments__comment__options__delete" onClick={() => dispatch(deleteComment(comment.id))}><TfiClose/></span>
          </div>
           </>}  
              </div>
           
              
         
            {skeleton && isFirstLoading ? (
              <div className="skeleton-time">
                <Skeleton />
              </div>
            ) : (
              <span className="comments__comment__createdAt">
                {moment(comment.createdAt).fromNow("mm")}
              </span>
            )}
          </div>
      {showEditComment &&  <EditComment id={comment.id} setShowEditComment={setShowEditComment}  desc={comment.desc}/>} 
        </div>
      )}
    </>
  );
}

export default Comment;
