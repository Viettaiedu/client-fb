

import {Link} from 'react-router-dom'
import {  useContext, useState } from 'react';
import { BsChevronCompactDown,BsChevronCompactUp } from 'react-icons/bs';

//---My imports
import './left-bar.scss';
import {imagesLeftBar , imagesBottomLeftBar} from '../../assets/image-icons';
import {routesPublic} from '../../config/routes';
import { UserContext } from '../../context/authContext';

function LeftBar() {
    const {currentUser} = useContext(UserContext);
    const [items , setItems] = useState(imagesLeftBar.slice(0,5));
    const [itemsShortcuts , setItemsShortcuts] = useState(imagesBottomLeftBar.slice(0,5));
    const [showAdd , setShowAdd] = useState(true);
    const [shortcuts , setShortcuts] = useState(true);
    const handleShow = () => {
        setItems(imagesLeftBar);
        setShowAdd(false);
    }
    const handleHide = () => {
        setItems(imagesLeftBar.slice(0,5));
        setShowAdd(true);
    }
    const handleShowShortcuts = () => {
        setItemsShortcuts(imagesBottomLeftBar);
        setShortcuts(false);
    }
    const handleHideShortcuts = () => {
        setItemsShortcuts(imagesBottomLeftBar.slice(0,5));
        setShortcuts(true);
    }
    return (<div className='left-bar'>
            <div className="left-bar__items">
                    <Link to={routesPublic.profile+'/1'} className="left-bar__items__item">
                        <img src={currentUser.profilePic ? "/uploads/"+currentUser.profilePic :"/no-image.webp"} alt={currentUser.firstName}/>
                        <span className="left-bar__items__item__name">{currentUser.firstName +" "+currentUser.lastName }</span>
                    </Link>
                    {items.map((item ,index)=> (
                        <div key={index} className="left-bar__items__item">
                        <img src={item.image}  alt=""/>
                        <span className="left-bar__items__item__name">{item.name}</span>
                    </div>
                  
                    ))}
                    {showAdd ? <>
                        <div className="left-bar__items__item" onClick={handleShow}>
                            <span className='left-bar__items__item__icon'><BsChevronCompactDown/></span>
                        <span className="left-bar__items__item__name">Xem thêm</span>
                    </div>
                    </> : <>
                    <div className="left-bar__items__item" onClick={handleHide}>
                            <span className='left-bar__items__item__icon'><BsChevronCompactUp/></span>
                        <span className="left-bar__items__item__name">Ẩn bớt</span>
                    </div>
                    </>}
            </div>
            <div className="left-bar__items">
                        
                    <div className="left-bar__items__item">
                        <span className="left-bar__items__item__name left-bar__items__item__title">Lối tắt của bạn</span>
                    </div>
                    {itemsShortcuts.map((item ,index)=> (
                        <div key={index} className="left-bar__items__item">
                        <img src={item.image}  alt=""/>
                        <span className="left-bar__items__item__name">{item.name}</span>
                    </div>
                  
                    ))}
                    {shortcuts ? <>
                        <div className="left-bar__items__item" onClick={handleShowShortcuts}>
                            <span className='left-bar__items__item__icon'><BsChevronCompactDown/></span>
                        <span className="left-bar__items__item__name">Xem thêm</span>
                    </div>
                    </> : <>
                    <div className="left-bar__items__item" onClick={handleHideShortcuts}>
                            <span className='left-bar__items__item__icon'><BsChevronCompactUp/></span>
                        <span className="left-bar__items__item__name">Ẩn bớt</span>
                    </div>
                    </>}
            </div>
    </div>  );
}

export default LeftBar;