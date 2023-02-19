import { RiMoreLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
/// _my imports
import "./post.scss";
import Commnents from "../Comments";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routesPublic } from "../../config/routes";
import { getComments } from "../../redux/actions/comment";
import { addLike, deleteLike, getLikes } from "../../redux/actions/like";
import { UserContext } from "../../context/authContext";
import { deletePost } from "../../redux/actions/post";
let isFirstLoading = true;
function Post({ post }) {
  const [showCommnent, setShowComment] = useState(false);
  const { currentUser } = useContext(UserContext);
  const [skeleton, setSkeleton] = useState(true);
  const commentsRe = useSelector((state) => state.comments);
  const { isLoading, comments } = commentsRe;
  const likesRe = useSelector((state) => state.likes);
  const { likes } = likesRe;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments());
    dispatch(getLikes());
  }, [dispatch]);
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
      isFirstLoading = false;
    }, 4 * 1000);
  }, []);
  const handleLike = async () => {
    if (
      likes &&
      likes.length > 0 &&
      likes.find(
        (like) => like.postId === post.id && like.userId === currentUser.id
      )
    ) {
      await dispatch(deleteLike({ postId: post.id , userId:currentUser.id }));
    } else {
      await dispatch(addLike({ postId: post.id }));
    }
  };
  const handleDelete = async () => {
    await dispatch(deletePost(post.id));

  };
  return (
    <div className="post">
      <div className="post__header">
        <Link
          to={routesPublic.profile + "/" + post.userId}
          className="post__header__avatar"
        >
          {skeleton && isFirstLoading ? (
            <Skeleton className="post__header__avatar" count={1} />
          ) : (
            <img
              src={
                post.profilePic
                  ? "/uploads/" + post.profilePic
                  : "/uploads/no-image.webp"
              }
              alt={post.fistName}
            />
          )}
        </Link>
        <div className="post__header__info ">
          <>
            {skeleton && isFirstLoading ? (
              <Skeleton className="post__header__info__name" count={1} />
            ) : (
              <span className="post__header__info__name">
                {post.firstName + " " + post.lastName}
              </span>
            )}

            <>
              {skeleton && isFirstLoading ? (
                <Skeleton className="post__header__info__createdAt" count={1} />
              ) : (
                <span className="post__header__info__createdAt ">
                  {moment(post.createdAt).fromNow("mm")}
                </span>
              )}
            </>
          </>
        </div>
        {skeleton && isFirstLoading ? (
          <Skeleton
            className="post__header__options"
            count={1}
            width={"200px"}
            height={"30px"}
          />
        ) : (
          <div className="post__header__options">
            <span className="post__header__options__icon">
              <RiMoreLine />
            </span>
            {post.userId === currentUser.id && (
              <span
                className="post__header__options__icon"
                onClick={handleDelete}
              >
                <MdOutlineClose />
              </span>
            )}
          </div>
        )}
      </div>
      <div className="post__body ">
        {skeleton && isFirstLoading ? (
          <Skeleton className="post__body__desc" count={1} />
        ) : (
          <p className="post__body__desc ">{post.desc}</p>
        )}
        {skeleton && isFirstLoading ? (
          <Skeleton className="post__body__image" count={1} />
        ) : (
          <span className="post__body__image">
            <img src={"/uploads/" + post.image} alt={post.fistName} />
          </span>
        )}
      </div>
      <div className="post__bottom ">
        {skeleton && isFirstLoading ? (
          <Skeleton count={1} width={"150px"} height={"40px"} />
        ) : (
          <div className="post__bottom__one" onClick={handleLike}>
            {likes.find(
              (like) =>
                like.postId === post.id && like.userId === currentUser.id
            ) ? (
              <AiFillLike />
            ) : (
              <AiOutlineLike />
            )}

            {likes.filter((like) => like.postId === post.id).length} Thích
          </div>
        )}
        {skeleton && isFirstLoading ? (
          <Skeleton count={1} width={"150px"} height={"40px"} />
        ) : (
          <div
            className="post__bottom__one "
            onClick={() => setShowComment(!showCommnent)}
          >
            <GoComment />
            {comments.filter((com) => com.postId === post.id).length} Bình luận
          </div>
        )}
        {skeleton && isFirstLoading ? (
          <Skeleton count={1} width={"150px"} height={"40px"} />
        ) : (
          <div className="post__bottom__one ">
            {" "}
            <CiShare2 />
            12 Chia sẻ{" "}
          </div>
        )}
      </div>
      {isLoading
        ? "Loading..."
        : showCommnent && (
            <Commnents
              postId={post.id}
              comments={comments}
              showCommnent={showCommnent}
            />
          )}
    </div>
  );
}

export default Post;
