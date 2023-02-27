import "./show-story.scss";
import HeaderRight from "../../Header/HeaderRight";
import { Link } from "react-router-dom";
import { routesPublic } from "../../../config/routes";
import { AiOutlineClose } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import {  useEffect, useState } from "react";
import { getStories } from "../../../redux/actions/story";
import moment from "moment";
import Videos from "../../Videos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
function ShowStory() {
  const storiesRe = useSelector((state) => state.stories);
  const { stories } = storiesRe;
  const [idShow, setIdShow] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);
  const handleChangeSlide = (swiper) => {
    const videos = document.querySelectorAll(
      ".show-story__right__videos__video video"
    );
    videos.forEach((video) => {
      video.play();
      video.currentTime = 0;
    });
    setIdShow(swiper.activeIndex);
  };
  return (
    <div className="show-story">
      <div className="show-story__left">
        <div className="show-story__left__header">
          <Link
            to={routesPublic.home}
            className="show-story__left__header__close"
          >
            <AiOutlineClose />
          </Link>
          <Link
            to={routesPublic.home}
            className="show-story__left__header__img"
          >
            {" "}
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="show-story__left__setting">
          <div className="show-story__left__setting__title">
            <h5>Tin </h5>
          </div>
        </div>
        <div className="show-story__left__details">
          <span>Kho lưu trữ</span>
          <span>Cài đặt</span>
        </div>
        <h4 className="show-story__left__your-stories">Tin của bạn</h4>
        <Link
          to={routesPublic.storiesCreate}
          className="show-story__left__create-your-story"
        >
          <span className="show-story__left__create-your-story__image">
            <MdAdd />
          </span>
          <div className="show-story__left__create-your-story__info">
            <h4>Tạo tin</h4>
            <span>Bạn có thể chia sẻ ảnh hoặc viết gì đó</span>
          </div>
        </Link>
        <h4 className="show-story__left__your-stories">Tất cả tin</h4>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          activeIndex={idShow}
          onSlideChange={handleChangeSlide}
          className="show-story__left__all-stories"
        >
          {stories.map((story, index) => (
  <SwiperSlide key={index}>
              <div
                className={`show-story__left__all-stories__item ${
                  index === idShow ? "select" : ""
                }`}
              >
                <span className="show-story__left__all-stories__item__image">
                  <img
                    src={"/uploads/" + story.profilePic}
                    alt={story.firstName}
                  />
                </span>
                <div className="show-story__left__all-stories__item__info">
                  <h4>{story.firstName + " " + story.lastName}</h4>
                  <span>{moment(story.createdAt).fromNow("mm")}</span>
                </div>
              </div>
            </SwiperSlide>

          
          ))}
        </Swiper>
        <div></div>
      </div>
      <div className="show-story__right">
        <Videos
          handleChangeSlide={handleChangeSlide}
          stories={stories}
          idShow={idShow}
          setIdShow={setIdShow}
        />
      </div>
      <div className="show-story__right-header">
        <HeaderRight />
      </div>
    </div>
  );
}

export default ShowStory;
