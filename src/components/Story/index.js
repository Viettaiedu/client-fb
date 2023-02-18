import { useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
    {skeleton && isFirstLoading ? <Skeleton className="wrapper-skeleton" borderRadius={"10px"}/> : 
    <div
        className="stories__story__image-story"
        style={{ backgroundImage: `url('${story.imageStory}')` }}
      ></div>
    }
      {!reels && (
        <img
          className="stories__story__profile-pic"
          src={story.profilePic}
          alt=""
        />
      )}
      <span className="stories__story__name">
        {reels ? (
          <span style={{ display: "flex", alignItems: "center" }}>
            <BsFillPlayFill />
            {story.views} triệu
          </span>
        ) : (
          story.name
        )}
      </span>
    </div>
  );
}

export default Story;
