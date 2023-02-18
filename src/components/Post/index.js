import {RiMoreLine} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr';
import {AiOutlineLike} from 'react-icons/ai';
import {GoComment} from 'react-icons/go';
import {CiShare2} from 'react-icons/ci';
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
/// _my imports
import './post.scss';
import Commnents from '../Comments';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { routesPublic } from '../../config/routes';
let isFirstLoading = true;
function Post({post }) {
    const [showCommnent , setShowComment] = useState(false);
    const [skeleton , setSkeleton] = useState(true);
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
    useEffect(() => {
            setTimeout(() => {
                setSkeleton(false);
                isFirstLoading = false;
            },(4 * 1000))
    },[])
    return (  <div className='post'>
    <div className='post__header'>
        <Link to={routesPublic.profile+"/"+post.userId} className='post__header__avatar'>
        {skeleton && isFirstLoading ?  <Skeleton className='post__header__avatar' count={1} />  :  <img src={post.profilePic ? "/uploads/"+post.profilePic : "/no-image.webp" } alt={post.fistName}/>}
        </Link>
        <div className='post__header__info '>
           <>
           {skeleton && isFirstLoading ?  <Skeleton className='post__header__info__name' count={1} />  :  <span className='post__header__info__name'>
            {post.firstName + " "+post.lastName}</span>
            }

            <>
            {skeleton && isFirstLoading ?  <Skeleton className='post__header__info__createdAt' count={1} />  :   <span  className='post__header__info__createdAt '>
                {moment(post.createdAt).fromNow('mm') }
            </span>
            }

            </>
           
           </>
        </div>
        {skeleton && isFirstLoading ?  <Skeleton className='post__header__options' count={1} width={"200px"}  height={"30px"}/>  :   <div className='post__header__options'>
            <span className='post__header__options__icon'><RiMoreLine/></span>
            <span className='post__header__options__icon'><GrClose/></span>
        </div>
            }
    </div>
    <div className='post__body '>
    {skeleton && isFirstLoading ?  <Skeleton className='post__body__desc' count={1} />  :   <p className='post__body__desc '>
                        {post.desc}
        </p>
            }
            {skeleton && isFirstLoading ?  <Skeleton className='post__body__image' count={1} />  :   <span className='post__body__image'>
       <img  src={"/uploads/"+post.image} alt={post.fistName}/>
       </span>
            }
       
    </div>  
    <div className='post__bottom '>
    {skeleton && isFirstLoading ?  <Skeleton count={1}  width={"150px"} height={"40px"}/>  :  <div 
   
    className='post__bottom__one'> <AiOutlineLike/>12 Thích</div>
            }
    {skeleton && isFirstLoading ?  <Skeleton count={1}  width={"150px"} height={"40px"}/>  :   <div className='post__bottom__one ' onClick={() => setShowComment(!showCommnent)}><GoComment/>12 Bình luận</div>
            }
    {skeleton && isFirstLoading ?  <Skeleton count={1}  width={"150px"} height={"40px"}/>  : 
        <div className='post__bottom__one '> <CiShare2/>12 Chia sẻ </div>
            }
    </div>
   {showCommnent && <Commnents comments={comments} showCommnent={showCommnent} /> }
</div> );
}

export default Post;