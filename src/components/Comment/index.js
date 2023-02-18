
import moment from 'moment';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
let isFirstLoading = true;
function Comment({comment}) {
    const [skeleton , setSkeleton] = useState(true);
     useEffect(() => {
        setTimeout(() => {
            setSkeleton(false);
            isFirstLoading = false;
        },(3* 1000))
     },[])
    return (  
        <div  className="comments__comment">
        {skeleton && isFirstLoading ? 
      
          <div  className='skeleton-avatar' >
          <Skeleton />
          </div>
       
        :   <span className="comments__comment__image">
          <img src={'/uploads/'+comment.profilePic} alt="" />
        </span>}
      
        <span className="comments__comment__info">
        {skeleton && isFirstLoading ? 
      
      <div  className='skeleton-name' >
      <Skeleton />
      </div>
   
    :   <span className="comments__comment__info__name">
            {comment.name}
          </span>}
          {skeleton && isFirstLoading ? 
      
      <div  className='skeleton-desc' >
      <Skeleton />
      </div>
   
    :    <p>{comment.desc}</p>}
         
        </span>
        {skeleton && isFirstLoading ? 
      
      <div  className='skeleton-time' >
      <Skeleton />
      </div>
   
    :   <span className="comments__comment__createdAt">
          {moment(comment.createdAt).fromNow('mm')    }
        </span>}
        
      </div>
    );
}

export default Comment;