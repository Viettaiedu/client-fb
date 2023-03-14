import "./profile.scss";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { CiImageOn, CiTrash } from "react-icons/ci";
import { IoIosMore, IoMdAdd } from "react-icons/io";
import { FaCamera, FaUserFriends } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { UserContext } from "../../context/authContext";
import { routesPublic } from "../../config/routes";
import Header from "../../components/Header";
import httpsRequest from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriends, getUserProfile, updateUser } from "../../redux/actions/user";
import { AiFillCamera, AiOutlineToTop } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
import ImageUser from "../../components/Modal/ImageUser";
import Spinner from "../../components/Modal/Spinner";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";

function Profile() {
  const { userId } = useParams();
  const [showEditCoverPic, setShowEditCoverPic] = useState(false);
  const [showImageUser, setShowImageUser] = useState(false);
  const [showModalRemove, setShowModalRemove] = useState(false);
  const [coverPic, setCoverPic] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const { currentUser , update } = useContext(UserContext);

  const { userFriends } = useSelector((state) => state.userFriends);
  const { userProfile } = useSelector((state) => state.userProfile);
  const editCoverPicRef = useRef();
  const imageUserRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        editCoverPicRef.current &&
        !editCoverPicRef.current.contains(event.target)
      ) {
        setShowEditCoverPic(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editCoverPicRef]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        imageUserRef.current &&
        !imageUserRef.current.contains(event.target)
      ) {
        setShowImageUser(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imageUserRef]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(getUserFriends(userId));
  }, [userId]);
  const handleCoverPic = async (e) => {
    setShowSpinner(true);
    setTimeout(() => {
        setCoverPic(e.target.files[0]);
        setShowSpinner(false);
    },(3*1000))
  };
  const handleFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await httpsRequest.post("/upload", formData);
      return data.file;
    } catch (e) {
      console.log("Error", e);
    }
  };
  const handleSave = async () => {
      const newCoverPic = await handleFile(coverPic);
      const {coverPic : coverPicOld, ...others} = userProfile;
      setShowSpinner(true);
      setCoverPic(null);
      setTimeout( async () => {
        await   dispatch(updateUser({...others , coverPic : newCoverPic}))
        update({...others , coverPic : newCoverPic})
        setShowSpinner(false);
        setShowEditCoverPic(false);
        
      },(3 * 1000))
  }
  console.log(coverPic);
  const handleRemoveCoverPic = () => {
    const {coverPic : coverPicOld, ...others} = userProfile;
    setShowModalRemove(false);
    setShowSpinner(true);
    setTimeout( async () => {
      await   dispatch(updateUser({...others , coverPic : null}))
      update({...others , coverPic : null})
      setShowSpinner(false);
      setShowEditCoverPic(false);
    },(3 * 1000))
  }
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__top">
          <div className="profile__top__info">
            <div
              className="profile__top__info__cover-pic"
              style={{
                backgroundImage: coverPic
                  ? `url(${URL.createObjectURL(coverPic)})`
                  : `url(/uploads/${userProfile.coverPic})`,
              }}
            >
              {!coverPic && currentUser.id === parseInt(userId) && (
                <button
                  className="profile__top__info__cover-pic__edit"
                  onClick={() => setShowEditCoverPic(true)}
                  ref={editCoverPicRef}
                >
                  {
                    <AiFillCamera
                      style={{ fontSize: "2rem" }}
                      className="screen-large-992-none tablet-display"
                    />
                  }
                  <span className="tablet-none">
                    <FaCamera /> Chỉnh sửa ảnh bìa
                  </span>
                  {!showImageUser && showEditCoverPic && (
                    <div className="profile__top__info__cover-pic__edit__modal">
                      <span
                        className="profile__top__info__cover-pic__edit__modal__one"
                        onClick={() => {
                          setShowImageUser(true);
                        }}
                      >
                        <CiImageOn /> Chọn ảnh
                      </span>
                      <label
                        htmlFor="cover-pic__edit"
                        className="profile__top__info__cover-pic__edit__modal__one"
                      >
                        <AiOutlineToTop /> Tải lên
                      </label>
                      <input
                        type="file"
                        hidden
                        onChange={handleCoverPic}
                        id="cover-pic__edit"
                      />
                      <span className="profile__top__info__cover-pic__edit__modal__one" onClick={() => setShowModalRemove(true)}>
                        <CiTrash  /> Gỡ

                    
                      </span>
                    </div>
                  )}
                </button>
              )}
            {showSpinner &&   <Spinner coverPic={true}/>}
            </div>
            <div className="profile__top__info__user">
              <div className="profile__top__info__user__left">
                <span className="profile__top__info__user__left__avatar">
                  <span className="profile__top__info__user__left__avatar__image">
                  <Avatar src={     userProfile.profilePic} alt={userProfile.fistName}/>
                  </span>

                  <div>
                    <BsCameraFill />
                  </div>
                </span>
                <div className="profile__top__info__user__left__info">
                  <h3>{userProfile.firstName + " " + userProfile.lastName}</h3>
                  <span>{userFriends.length} bạn bè</span>
                  <div className="profile__top__info__user__left__info__list-image">
                    {userFriends.slice(0, 7).map((friend, index) => (
                      <Link
                        key={index}
                        to={routesPublic.profile + "/" + friend.id}
                      >
                        <img src={"/uploads/" + friend.profilePic} alt="" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="profile__top__info__user__right">
                {currentUser.id === parseInt(userId) ? (
                  <>
                    <button className="profile__top__info__user__right__primary">
                      <IoMdAdd /> Thêm vào tin
                    </button>
                    <button className="profile__top__info__user__right__gray">
                      <MdModeEditOutline />
                      Chỉnh sửa trang cá nhân
                    </button>
                  </>
                ) : (
                  <>
                    {!userFriends.some(
                      (userFriend) => userFriend.id === currentUser.id
                    ) ? (
                      <button className="profile__top__info__user__right__primary">
                        <IoMdAdd /> Thêm bạn
                      </button>
                    ) : (
                      <button className="profile__top__info__user__right__primary">
                        <FaUserFriends /> Bạn bè
                      </button>
                    )}

                    <button className="profile__top__info__user__right__gray">
                      <RiMessengerFill />
                      Nhắn tin
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="profile__top__info__desc">
              <div className="profile__top__info__desc__left">
                <span className="select">Bài viết</span>
                <span>Giới thiệu</span>
                <span>Bạn bè</span>
                <span>Ảnh</span>
                <span>Video</span>
                <span>Sự kiện</span>
                <span>Xem thêm</span>
              </div>
              <div className="profile__top__info__desc__right">
                <IoIosMore />
              </div>
            </div>
          </div>

          {coverPic && (
            <div className="profile__top__confirm-edit">
              <button
                className="profile__top__confirm-edit__reject"
                onClick={() => setCoverPic(null)}
              >
                Hủy
              </button>
              <button className="profile__top__confirm-edit__save"
              onClick={handleSave}
              >
                Lưu thay đổi
              </button>
            </div>
          )}
        </div>
        {showImageUser && (
          <ImageUser
          setShowImageUser={setShowImageUser}
            ref={imageUserRef}
          />
        )}
       {showModalRemove && <div className="modal-remove">
                              <div className="modal-remove__wrapper">
                                   <span> <h3>Gỡ ảnh bìa</h3>  </span>
                                   <p>Bạn có chắc chắn muốn gỡ ảnh bìa không?</p>
                                   <div className="btns">
                                     <Button  onClick={() => setShowModalRemove(false)} text="Hủy" btnReject/>
                                     <Button onClick={handleRemoveCoverPic} text="Xác nhận" btnConfirm/>
                                   </div>
                              </div>
                        </div>}
      </div>
    </>
  );
}
export default Profile;
