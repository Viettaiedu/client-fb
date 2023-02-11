import { BsFillPlayFill } from "react-icons/bs";


function  Story({story , reels}) {
    return (  <div className="stories__story">
    <div className="stories__story__image-story" style={{backgroundImage:`url('${story.imageStory}')`}}></div>
    {!reels && <img
       className="stories__story__profile-pic"
       src={story.profilePic}
       alt=""
     /> }
     <span className="stories__story__name">{reels ?<span style={{display:"flex",alignItems:"center"}}>
        <BsFillPlayFill/>
        {story.views} triệu
     </span>:story.name}</span>
   </div> );
}

export default  Story;