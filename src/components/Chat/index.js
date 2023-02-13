
import {IoIosMore} from 'react-icons/io';
import {MdOutlineZoomOutMap} from 'react-icons/md';
import {HiVideoCamera} from 'react-icons/hi';
import {BsArrowLeft, BsBoxArrowInDownLeft, BsChevronCompactRight} from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';
import {SiGooglemessages} from 'react-icons/si';
import { forwardRef } from 'react';
//-My imports
import './chat.scss';
import { useState } from 'react';

const Chat = forwardRef((props,ref) => {
        const [showIconSearch, setShowIconSearch] = useState(true);
        const chat = [
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:true,
                        seen:true,
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:false,
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:true,
                        seen:true
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:true,
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:false,
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ",
                        status:true,
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
                {
                        id:1,
                        message:"Hello truong an",
                        userId:1,
                        profilePic:"https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/327314349_1325807021322315_2343132419771637367_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zW9UGsRWZhoAX-ORB68&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfA2O_sksNoPNqqLzTaV-vh2py-cvi0tKEGu-IKz2CjjkA&oe=63EE790A",
                        name:"Phạm Nguyễn Trường Ân",
                        createdAt:"3 giờ"
                },
            ]
            return ( <div className="chat" ref={ref}>
                    <div className='chat__header'>
                        <span>Chat</span>
                        <div className='chat__header__icons'>
                           <span className='chat__header__icons__icon'> <IoIosMore/>
                           </span>
                           <span className='chat__header__icons__icon'> <MdOutlineZoomOutMap/></span>
                           <span className='chat__header__icons__icon'> <HiVideoCamera/></span>
                           <span className='chat__header__icons__icon'> <BsBoxArrowInDownLeft/></span>
                           
                        </div>
                    </div>
                    <div className='chat__search'>
        
        {!showIconSearch && <div className='chat__search__back'>
        <BsArrowLeft  className='chat__search__back__icon'/>
        </div>}
        <div className='chat__search__wrap'>
        {showIconSearch && <AiOutlineSearch className='chat__search__wrap__icon'/>}
        
         <input type="text" placeholder='Tìm kiếm trên Messenger' onFocus={() =>  setShowIconSearch(false)} onBlur={() => setShowIconSearch(true)}/>
        </div>
                    </div>
                    <div className='chat__options'>
                        <span className='chat__options__item select'>Hộp thư</span>
                        <span className='chat__options__item'>Cộng đồng</span>
                    </div>
                    <div className='chat__message-watting'>
                    <div className='chat__message-watting__left'>
                            <SiGooglemessages className='chat__message-watting__left__icon'/>
                    </div>
                    <div className='chat__message-watting__right'>
                            <span className='chat__message-watting__right__top'>Tin nhắn đang chờ mới</span>
                            <span className='chat__message-watting__right__bottom'>Từ Liều Kyn và 4 người khác</span>
                    </div>
                    <BsChevronCompactRight className='chat__message-watting__icon'/>
                    </div>
                    <div className='chat__accounts'>
                    {chat.map((item,index) => (
                        <div key={index} className='chat__accounts__account'>
                            <div className='chat__accounts__account__avatar'>
                                <img alt="" src={item.profilePic}/>
                               
                                {item.status &&  <span className='chat__accounts__account__avatar__status'></span>}
                            </div>
                            <div className='chat__accounts__account__right'>
                                <span className='chat__accounts__account__right__name'>{item.name}</span>
                                <span className='chat__accounts__account__right__message'>Bạn: {item.message}  {item.createdAt}</span>
                            </div>
        
                            {item.seen &&   <span className='chat__accounts__account__seen'>
                                <img src={item.profilePic} alt=""/>
                            </span> }
                          
                        </div>
                    ))}
                      
                    </div>
            </div> )

})


export default Chat;