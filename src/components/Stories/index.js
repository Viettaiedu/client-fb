import { BsFillBookFill, BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//--My imports
import Story from "../Story";
import "./stories.scss";
import { useRef } from "react";
import {stories,stories2 } from '../../assets/data-stories';
function Stories() {
    const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
    const handleStories = (e) => {
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
        <div className="stories-menu__item select" onClick={handleStories}>
          <BsFillBookFill className="stories-menu__item__icon" />
          <span>Tin</span>
        </div>
        <div className="stories-menu__item" onClick={handleStories}>
          <BsFillBookFill />
          <span>Reels</span>
        </div>
        <div className="stories-menu__item" onClick={handleStories}>
          <BsFillBookFill />
          <span className="mobile-none">Phòng họp mặt</span>
          <span className="screen-large-992-node mobile-display">Phòng họp</span>
        </div>
      </div>
      {/* Stories bottom */}
      <div className="stories select">
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
                  <div className="stories__story">
                    <div className="stories__story__image-story"></div>
                    <div className="stories__story__current-user"></div>
                    <div
                      className="stories__story__up-story"
                      style={{ backgroundImage: "url('/no-image.wepb')" }}
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
                    <Story story={story} />
                  </SwiperSlide>
                </>
              )}
            </>
          ))}
        </Swiper>
            <button ref={navigationPrevRef} className="stories__btn stories__btn__prev" ><AiOutlineLeft/></button>
            <button ref={navigationNextRef} className="stories__btn stories__btn__next " ><AiOutlineRight/></button>
      </div>
      <div className="stories">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={3}
          slidesPerView={5}
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
                      style={{ backgroundImage: "url('/no-image.wepb')" }}
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
