import PropTypes from "prop-types";
import { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import "./image-user.scss";
const images = ["1678787189507_908651.jpeg",'1678788302778_5569612.webp','1678790727251_768883.jpeg','1678783557275_86440321321.jpeg','1678031566301_4421anh1_1.jpeg'];
const ImageUser = forwardRef(({ setShowImageUser }, ref) => {
  return (
    <div className="modal-image-user">
      <div className="modal-image-user__wrapper" ref={ref}>
        <div className="modal-image-user__wrapper__top">
          <h4>Chọn ảnh</h4>
          <span onClick={() => setShowImageUser(false)}>
            <MdClose />
          </span>
        </div>
        <div className="modal-image-user__wrapper__images">
          {images.map((image, index) => (
            <span
              key={index}
              className="modal-image-user__wrapper__images__image"
            >
              <img alt="" src={"/uploads/"+image} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
ImageUser.propTypes = {
  setShowImageUser: PropTypes.func,
};

export default ImageUser;
