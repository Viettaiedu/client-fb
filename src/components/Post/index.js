import {RiMoreLine} from 'react-icons/ri';
import {GrClose} from 'react-icons/gr';
import {AiOutlineLike} from 'react-icons/ai';
import {GoComment} from 'react-icons/go';
import {CiShare2} from 'react-icons/ci';


import './post.scss';
import Commnents from '../Comments';
import { useState } from 'react';
function Post({post}) {
    const [showCommnent , setShowComment] = useState(false);
    return (  <div className='post'>
    <div className='post__header '>
        <span className='post__header__avatar '>
            <img src={post.profilePic} alt=""/>
        </span>
        <div className='post__header__info '>
            <span className='post__header__info__name '>{post.name}</span>
            <span className='post__header__info__createdAt '>
                {post.createdAt}
            </span>
        </div>
        <div className='post__header__options '>
            <span className='post__header__options__icon'><RiMoreLine/></span>
            <span className='post__header__options__icon'><GrClose/></span>
        </div>
    </div>
    <div className='post__body '>
        <p className='post__body__desc '>
        Yêu cầu:có kinh nghiệm,nhanh nhẹn, trung thực, siêng năng
        </p>
        <img className='image' src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329968347_470766035121112_4247709180779181734_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=15vlc530YOcAX8N5dz5&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDXKLoWK9jn_WbG-LjVJFdDGk0tw9r6-t2mPRq5yEnKyA&oe=63F0778B" alt=""/>
    </div>  

    <div className='post__bottom '>
        <div className='post__bottom__one '> <AiOutlineLike/>12 Thích</div>
        <div className='post__bottom__one ' onClick={() => setShowComment(!showCommnent)}><GoComment/>12 Bình luận</div>
        <div className='post__bottom__one '> <CiShare2/>12 Chia sẻ </div>
    </div>

   {showCommnent && <Commnents showCommnent={showCommnent} /> }
</div> );
}

export default Post;