
import './header.scss';

import {BsSearch} from 'react-icons/bs';
import {AiFillHome , AiOutlineHome} from 'react-icons/ai';
import {RiYoutubeLine , RiYoutubeFill ,RiGovernmentLine} from 'react-icons/ri';
import {FaFacebookMessenger} from 'react-icons/fa';
import {GrAdd} from 'react-icons/gr';
import {HiOutlineUserGroup} from 'react-icons/hi';
import {TiThMenu } from 'react-icons/ti';
import {IoMdNotifications } from 'react-icons/io';
import {CgGames } from 'react-icons/cg';
import {Link} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

//-------My import
import TextHover from './TextHover';
import {routesPublic} from '../../config/routes';
import Account from './Account';

function Header() {
       const [showAccountSetting , setShowAccountSetting] = useState(false);
       const accountRef = useRef();
       useEffect(() => {
              function handleClickOutsideAccount(e) {
                     if(accountRef.current &&  !accountRef.current.contains(e.target)) {
                            setShowAccountSetting(false);
                     }
              }
              document.addEventListener('mousedown', handleClickOutsideAccount);
              return () => {
                     document.removeEventListener('mousedown', handleClickOutsideAccount);
              }
       })
    return (
        <div className='header'>
                 <Link  to={routesPublic.home} className='header__left'>
               <img src='/logo.png' alt="facebook"/>
                   <div className="header__left__search">
                        <BsSearch/>
                        <input type='text' name='search' placeholder='Tìm kiểm trên Facebook' />
                   </div>
                   <div className="header__left__search mobile-display screen-large-992-node">
                            <TiThMenu/>
                   </div>
                 </Link>
                 <div className='header__center'>
                       <Link to={routesPublic.home} className='header__center__icon select'> <AiFillHome/><TextHover   text={"Trang chủ"}/> </Link>
                       <span className='header__center__icon'> <RiYoutubeLine/>
                       <TextHover text={"Watch"}/>
                         </span>
                       <Link to="" className='header__center__icon'  >  <RiGovernmentLine/>
                        <TextHover text={"Marketplace"}/>
                        </Link>
                       <Link to="" className='header__center__icon'  > <HiOutlineUserGroup/>
                       <TextHover text={"Nhóm"}/>
                       </Link>
                       <Link to="" className='header__center__icon'  > <CgGames/>
                       <TextHover text={"Trò chơi"}/>
                       </Link>

                 </div>
                 <div className='header__right'>
                     <div className='header__right__one mobile-none '  >
                            <TiThMenu className='header__right__one__icon '/>
                            <TextHover text={"Menu"}/>
                     </div>
                     <div className='header__right__one mobile-display screen-large-992-node'   >
                            <GrAdd className='header__right__one__icon '/>
                           
                     </div>
                     <div className='header__right__one'  >
                     <FaFacebookMessenger className='header__right__one__icon'/>
                            <TextHover text={"Messenger"}/>
                     </div>
                     <div className='header__right__one'  >
                            <TextHover text={"Thông báo"}/>
                            <IoMdNotifications className='header__right__one__icon'/>
                            <span className='header__right__one__notifi'>5</span>
                     </div>
                     <div className='header__right__one'>
                            <TextHover text={"Tài khoản"}/>
                            <img className='header__right__one__avatar' src='/no-image.webp' alt='' onClick={() => setShowAccountSetting(true)}/>
                          {showAccountSetting &&  <Account setShowAccountSetting={setShowAccountSetting} accountRef={accountRef}/>} 
                     </div>
                 </div>
        </div> 
        );
}

export default Header;