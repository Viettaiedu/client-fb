

import {AiTwotoneSetting} from 'react-icons/ai';
import {IoIosHelpCircle } from 'react-icons/io';
import {FaMoon} from 'react-icons/fa';
import {RiFolderWarningFill ,RiLogoutBoxRFill} from 'react-icons/ri';
import {BsArrowLeft, BsChevronCompactRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

//-my imports
import './account.scss';
import {routesPublic} from '../../../config/routes';
import React, { useState } from 'react';
import Futures from '../Futures';
import {accountFutures , settingFutures , heplerFutures , screenFutures} from '../../../assets/futures';
function Account({accountRef,setShowAccountSetting}) {
    const [showFuturesAccount , setShowFuturesAccount] = useState(true);
    const [showFuturesSetting , setShowFuturesSetting] = useState(false);
    const [showFuturesHelper , setShowFuturesHelper] = useState(false);
    const [showFuturesDarkMode , setShowFuturesDarkMode] = useState(false);
    return (    
    <div className="account" ref={accountRef}>
           {showFuturesAccount &&  <>
            <Link onClick={() => setShowAccountSetting(false)} to={routesPublic.profile + "/1"} className="account__info">
                    <img src='/no-image.webp' alt="no-image"/>
                    <span className='account__info__name'>Viết Tài</span>
                </Link>
                <Futures fcShowFutures={{setShowFuturesSetting ,setShowFuturesHelper ,setShowFuturesAccount,setShowFuturesDarkMode}} futures={accountFutures}/>
           </>}   
                {showFuturesSetting && <>
                    <div className='account__setting'>
                        <BsArrowLeft onClick={() => {
                            setShowFuturesAccount(true)
                            setShowFuturesSetting(false)
                        }} className='account__setting__back'/> <h3>Cài đặt & riêng tư</h3>
                    </div>
                <Futures fcShowFutures={{setShowFuturesSetting ,setShowFuturesHelper ,setShowFuturesAccount,setShowFuturesDarkMode}} futures={settingFutures}/>
                </>}    

              {showFuturesHelper && <>
                <div className='account__setting'>
                        <BsArrowLeft onClick={() => {
                            setShowFuturesAccount(true)
                            setShowFuturesHelper(false)
                        }} className='account__setting__back'/> <h3>Trợ giúp & hỗ trợ</h3>
                    </div>
                <Futures  fcShowFutures={{setShowFuturesSetting ,setShowFuturesHelper ,setShowFuturesAccount,setShowFuturesDarkMode}} futures={heplerFutures}/>
              </>}  

              {showFuturesDarkMode && <>
                <div className='account__setting'>
                        <BsArrowLeft onClick={() => {
                            setShowFuturesAccount(true)
                            setShowFuturesDarkMode(false);
                        }} className='account__setting__back'/> <h3>Màn hình & trợ năng</h3>
                    </div>
                <Futures  typeOther={true} fcShowFutures={{setShowFuturesSetting ,setShowFuturesHelper ,setShowFuturesAccount,setShowFuturesDarkMode}} futures={screenFutures}/>
              </>}  
    </div>  );
}

export default React.forwardRef(Account);