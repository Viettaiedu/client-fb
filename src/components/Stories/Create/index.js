import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import { BsImageFill} from "react-icons/bs";
import { CgMenuGridR} from "react-icons/cg";
import { FaFont} from "react-icons/fa";
import { Link } from "react-router-dom";




// -my imports
import './create.scss';
import { routesPublic } from "../../../config/routes";
import { useEffect, useRef, useState } from "react";
import Account from "../../Header/Account";
import TextHover from "../../Header/TextHover";
import { IoMdNotifications } from "react-icons/io";
function Create() {
    const [showAccountSetting , setShowAccountSetting] = useState(false);
    const accountRef = useRef();
    useEffect(() => {
        //    function handleClickOutsideAccount(e) {
        //           if(accountRef.current &&  !accountRef.current.contains(e.target)) {
        //                  setShowAccountSetting(false);
        //           }
        //    }
        //    document.addEventListener('mousedown', handleClickOutsideAccount);
        //    return () => {
        //           document.removeEventListener('mousedown', handleClickOutsideAccount);
        //    }
    },[accountRef])
    return ( 
        <div className="stories-create">
                <div className="stories-create__left">
                    <div className="stories-create__left__header">
                            <Link to={routesPublic.home} className="stories-create__left__header__close" ><AiOutlineClose/></Link>
                          <Link to={routesPublic.home} className="stories-create__left__header__img">  <img src="/logo.png" alt=""/></Link>
                    </div>
                    <div className="stories-create__left__setting">
                            <div className="stories-create__left__setting__title">
                                <h5>Tin của bạn</h5>
                                <span className="stories-create__left__setting__title__icon" onClick={() => alert("Chưa làm chức năng này!")}><AiFillSetting/></span>
                            </div>
                            <div className="stories-create__left__setting__user">
                                <img src="/no-image.webp" alt=""/>
                                <span>Viết Tài</span>
                            </div>
</div>
                </div>
                <div className="stories-create__right">
                    <label htmlFor="stories-create-file" className="stories-create__right__create stories-create__right__create--image">
                            <p><BsImageFill/></p>
                            <span>Tạo tin ảnh</span>
                    </label>
                    <input type="file" id="stories-create-file" hidden/>
                    <div className="stories-create__right__create stories-create__right__create--text">
                            <p><FaFont/></p>
                            <span>Tạo tin dạng văn bảng</span>
                    </div>
                </div>
                <div className="stories-create__right-header">
                        <span className="stories-create__right-header__icon"><CgMenuGridR/>
                        <TextHover text={"Menu"}/>
                        </span>
                        <span className="stories-create__right-header__icon"><IoMdNotifications/>
                        <TextHover text={"Thông báo"}/>
                             <span className='stories-create__right-header__icon__notifi'>5</span>
                        </span>
                        <span className="stories-create__right-header__icon">
                        <TextHover text={"Tài khoản"}/>
                        <img src='/no-image.webp' alt='' onClick={() => setShowAccountSetting(!showAccountSetting)}/>
                          {showAccountSetting &&  <Account setShowAccountSetting={setShowAccountSetting} accountRef={accountRef}/>} 
                        
                        </span>
                </div>
        </div>
     );
}

export default Create;