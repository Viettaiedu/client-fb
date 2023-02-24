import Video from "../Video";

import { Navigation, Pagination , Autoplay, Thumbs  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useEffect, useState } from "react";
import {FreeMode} from 'swiper';
function Videos({ stories ,idShow ,handleChangeSlide ,thumbsSwiper }) {
    
  return (
    <Swiper
    spaceBetween={50}
    grabCursor={true}
    slidesPerView={1}
    thums={{swiper : thumbsSwiper }}
    modules={[Navigation, Pagination,Autoplay ,FreeMode,Thumbs]}
    activeIndex={idShow}
    navigation = {{
      nextEl :  '.swiper-button-next',
      prevEl : '.swiper-button-prev',
    }}
    autoplay
    scrollbar={{ draggable: true }}
    onSlideChange={handleChangeSlide}
    className='show-story__right__videos'
  >
    {stories.map((story, index) => (
      <SwiperSlide key={index}>
    <Video
            story={story}  idShow={idShow}
          />
      </SwiperSlide>
    ))}
    <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
  </Swiper>
    
  );
}

export default Videos;
