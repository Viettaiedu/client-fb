

function  Story({story}) {
    return (  <div className="stories__story">
    <div className="stories__story__image-story" style={{backgroundImage:`url('${story.imageStory}')`}}></div>
     <img
       className="stories__story__profile-pic"
       src={story.profilePic}
       alt=""
     />
     <span className="stories__story__name">{story.name}</span>
   </div> );
}

export default  Story;