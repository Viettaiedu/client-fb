import { BsFillBookFill, BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//--My imports
import Story from "../Story";
import "./stories.scss";
import { useContext, useEffect, useRef, useState } from "react";
import {stories,stories2 } from '../../assets/data-stories';
import { routesPublic } from "../../config/routes";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/authContext";
let isFirstLoading = true;
function Stories() {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const [skeleton, setSkeleton] = useState(true);
  const {currentUser} = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false)
      isFirstLoading = false;
    },(4 * 1000))
  },[])
  console.log()
    const handleStories = (e) => {
      if(skeleton) return;
        const items = document.querySelectorAll('.stories-menu__item');
        const stories = document.querySelectorAll('.stories');
        items.forEach(item => {
            item.classList.remove('select');
        })
        stories.forEach(story => {
            story.classList.remove('select');
        })
        items.forEach((item,index) => {
            if(item.contains(e.target)) {
                stories[index].classList.add('select');
                item.classList.add('select');
               return;
            }
        })
    }
  return (
    <>
      <div className="stories-menu" >
     
      <div className={`stories-menu__item ${skeleton && isFirstLoading ? "":"select"}`} onClick={handleStories}>
      {skeleton && isFirstLoading ?<div className="wrapper-skeleton">
      <Skeleton  />

      </div>  : 
        <>
        <BsFillBookFill className="stories-menu__item__icon" />
          <span>Tin</span>
        </>
      }
        </div>
     
      <div className="stories-menu__item" onClick={handleStories}>
      {skeleton && isFirstLoading ?<div className="wrapper-skeleton">
      <Skeleton  />

      </div>  : 
        <>
          <BsFillBookFill className="stories-menu__item__icon"/>
          <span>Reels</span>
        </>
      }
        </div>
    
  
    <div className="stories-menu__item" onClick={handleStories}>
    {skeleton && isFirstLoading ?<div className="wrapper-skeleton">
      <Skeleton  />

      </div>  : 
        <>
        <BsFillBookFill />
          <span className="mobile-none">Phòng họp mặt</span>
          <span className="screen-large-992-none mobile-display">Phòng họp</span>
        </>
      }
        
        </div>
     
       
      </div>
      {/* Stories bottom */}
      <div className={`stories ${skeleton && isFirstLoading ? "":"select"}`}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView= {3}
            spaceBetween= {3}
        onInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      breakpoints= {{
          768 : {
            slidesPerView: 4,
            spaceBetween: 6,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 6,
          },
      }}
        >
          {stories.map((story, index) => (
            <>
              {story.current ? (
                <SwiperSlide key={index}>
                {skeleton && isFirstLoading ? <Skeleton style={{
                  width:"110px",
                  height:"200px",
                  borderRadius:"10px"
                }} /> : 
                
                <Link to={routesPublic.storiesCreate} className="stories__story">
                    <div className="stories__story__image-story" style={{backgroundImage:`url(${currentUser.profilePic})`}}></div>
                    <div className="stories__story__current-user"></div>
                    <div
                      className="stories__story__up-story"
                      style={{ backgroundImage: "url('/uploads/no-image.wepb')" }}
                    ></div>
                    <div className="stories__story__icon">
                      <GrAddCircle />
                      <span>Tạo tin</span>
                    </div>
                  </Link>
                }
                 
                </SwiperSlide>
              ) : (
                <>
                  <SwiperSlide key={index}>
                    <Story story={story} />
                  </SwiperSlide>
                </>
              )}
            </>
          ))}
        </Swiper>
            <button ref={navigationPrevRef} className="stories__btn stories__btn__prev" >

                  {skeleton && isFirstLoading ? <Skeleton width={"100%"} height={"100%"}  /> : <AiOutlineLeft/> } 

            </button>
            <button ref={navigationNextRef} className="stories__btn stories__btn__next " >

            {skeleton && isFirstLoading ? <Skeleton width={"100%"} height={"100%"}  /> : <AiOutlineRight/> } 
            </button>
      </div>
      <div className="stories">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={3}
          slidesPerView={3}
                    navigation
                    breakpoints= {{
          768 : {
            slidesPerView: 4,
            spaceBetween: 6,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 6,
          },
      }}
        >
          {stories2.map((story, index) => (
            <>
              {story.current ? (
                <SwiperSlide key={index}>
                  <div className="stories__story ">
                    <div className="stories__story__image-story"></div>
                    <div className="stories__story__current-user"></div>
                    <div
                      className="stories__story__up-story"
                      style={{ backgroundImage: "url('/uploads/no-image.wepb')" }}
                    ></div>
                    <div className="stories__story__icon">
                      <GrAddCircle />
                      <span>Tạo tin</span>
                    </div>
                  </div>
                </SwiperSlide>
              ) : (
                <>
                  <SwiperSlide key={index}>
                    <Story reels story={story} />
                  </SwiperSlide>
                </>
              )}
            </>
          ))}
        </Swiper>
      </div>
      <div className="stories">
            <span>Khong có gi ne ...</span>         
      </div>
    </>
  );
}

export default Stories;
