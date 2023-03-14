import "./right-bar.scss";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneVideoCamera, AiOutlineSearch } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Button from "../Button";
import { getUserFriends, getUserOthers } from "../../redux/actions/user";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { routesPublic } from "../../config/routes";
import { UserContext } from "../../context/authContext";
function RightBar() {
  const { userFriends } = useSelector((state) => state.userFriends);
  const { userOthers } = useSelector((state) => state.userOthers);
  const dispatch = useDispatch();
  const {currentUser} =useContext(UserContext);
  useEffect(() => {
    dispatch(getUserFriends(currentUser.id));
    dispatch(getUserOthers(currentUser.id));
  }, [dispatch]);
  const suggestAddFriends = [
    {
      image:
        "https://scontent.xx.fbcdn.net/v/t39.30808-1/315959947_134717736032068_2244124226436372272_n.jpg?stp=dst-jpg_p120x120&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-nXppn8qYXYAX-o5s3Y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfCAbM9upe2-GnzY3O-lVLvMaLaJqQ0hEgLgXE4doiiohw&oe=63E9F127",
      name: "Thúy vi CodeGym",
      createdAt: "7 giờ",
    },
  ];
  return (
    <div className="right-bar">
      <div className="right-bar__items">
        <div className="right-bar__items__title">
          <h4>Lời mời kết bạn</h4>
          <span>Xem tất cả</span>
        </div>
        {suggestAddFriends.map((item, index) => (
          <div key={index} className="right-bar__items__item">
            <img src={item.image} alt="" />
            <div className="right-bar__items__item__right">
              <div className="right-bar__items__item__right__title">
                <h6>{item.name}</h6>
                <span>{item.createdAt}</span>
              </div>
              <div className="btns">
                <Button btnConfirm={true} text="Xác nhận" />
                <Button btnReject={true} text="Xóa" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sinh nhật */}
      <div className="right-bar__items">
        <div className="right-bar__items__title">
          <h4>Sinh nhật</h4>
        </div>
        <div className="right-bar__items__item">
          <img
            className="right-bar__items__item__birthday-img"
            src="https://static.vecteezy.com/system/resources/previews/002/476/508/original/color-glossy-happy-birthday-balloons-banner-background-illustration-free-vector.jpg"
            alt=""
          />
          <p className="right-bar__items__item__birthday">
            Hôm nay là sinh nhật của <a href="">Giàng An Quản</a> và{" "}
            <a href="">Thùy Trang</a>
          </p>
        </div>
      </div>

      {/* Người liên hệ  */}
      <div className="right-bar__items">
        <div className="right-bar__items__title">
          <h4>Bạn của tôi</h4>
          <div className="right-bar__items__title__icons">
            <AiTwotoneVideoCamera />
            <AiOutlineSearch />
            <HiOutlineDotsHorizontal />
          </div>
        </div>
        <div className="right-bar__items__accounts">
          {userFriends.map((user, index) => (
            currentUser.id !== user.id && (<Link to={routesPublic.profile+"/"+user.id} key={index} className="right-bar__items__accounts__account">
              <div className="right-bar__items__accounts__account__image">
                <img src={"/uploads/"+user.profilePic} alt="" />
                <span className="right-bar__items__accounts__account__image__circle"></span>
              </div>
              <span className="right-bar__items__accounts__account__name">
                {user.firstName +" "+user.lastName}
              </span>
            </Link>)
            
          ))}
        </div>
      </div>
   
      <div className="right-bar__items">
        <div className="right-bar__items__title">
          <h4>Gợi ý kết bạn</h4>
        </div>
        <div className="right-bar__items__accounts">
          {userOthers.map((user, index) => (
            currentUser.id !== user.id && (<Link to={routesPublic.profile+"/"+user.id} key={index} className="right-bar__items__accounts__account">
              <div className="right-bar__items__accounts__account__image">
                <img src={"/uploads/"+user.profilePic} alt="" />
                <span className="right-bar__items__accounts__account__image__circle"></span>
              </div>
              <span className="right-bar__items__accounts__account__name">
                {user.firstName +" "+user.lastName}
              </span>
            </Link>)
            
          ))}
        </div>
      </div>
   
    </div>
  );
}

export default RightBar;
