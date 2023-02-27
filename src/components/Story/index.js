import { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";


import { Link } from "react-router-dom";
import { routesPublic } from "../../config/routes";
import "./story.scss";
let isFirstLoading = true;
function Story({ story, reels }) {
  const [skeleton, setSkeleton] = useState(true);
  useEffect(() => {
   setTimeout(() => {
     setSkeleton(false)
     isFirstLoading = false;
   },(4 * 1000))
 },[])
  return (
    <div className="stories__story">
   
    <Link to={routesPublic.storiesShow}>
    <video
        className="stories__story__image-story"
        src={"/uploads/"+story.video}
        alt=""
      />
    </Link>
   
      {!reels && (
        <Link to={routesPublic.profile +"/"+story.userId}>
        <img
          className="stories__story__profile-pic"
          src={"/uploads/"+story.profilePic}
          alt=""
        />
        </Link>
      )}
      <span className="stories__story__name">
        {reels ? (
          <span style={{ display: "flex", alignItems: "center" }}>
            <BsFillPlayFill />
            {story.views} triệu
          </span>
        ) : (
          story.firstName + " "+story.lastName
        )}
      </span>
    </div>
  );
}

export default Story;
