import {  useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoMute } from "react-icons/go";
import StoryProgress from "../StoryProgress";
import moment from "moment";
function Video({story ,idShow   }) {
    const [isPlaying,setIsPlaying] = useState(false);
    const videoRef = useRef(null);
 
    const handlePlay = () => {
        if(isPlaying) {
            videoRef.current.play();
            setIsPlaying(!isPlaying);
        }else{
            videoRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    }
    useEffect(() => {
        setIsPlaying(false);
    },[idShow])
    return (  
        <div className={`show-story__right__videos__video`}>
        <video autoPlay={true}  ref={videoRef} playsInline  src="/uploads/1677074013957_408901.mp4" alt=""></video>
        <div className="show-story__right__videos__video__duration">
         <StoryProgress setIsPlaying={setIsPlaying} ref={videoRef} />
        </div>
        <div className="show-story__right__videos__video__info">
            <p>
              <img src="/uploads/no-image.webp" alt=""/>
              <span>
                    <h5>{story.firstName+" "+story.lastName } <span>{moment(story.createdAt).fromNow()}</span></h5>
              </span>
            </p>
            <span>
          <span onClick={handlePlay}>{isPlaying  ? <FaPlay className="play"/> :   <FaPause className="pause"/>}</span> 
            <span  className="controls-mute show-pause">
             <GoMute />
            </span>
              <FiMoreHorizontal/>
            </span>
        </div>
      </div>
    );
}

export default Video;