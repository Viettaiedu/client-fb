import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
function Register() {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errFirstName, setErrFirstName] = useState("");
  const [errLastName, setErrLastName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    e.target.style.border = "1px solid rgba(128, 128, 128, 0.679)";
    setErrFirstName("");
    setErrLastName("");
    setErrEmail("");
    setErrPassword("");
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "firstname":
        if (inputs[e.target.name]) break;
        setErrFirstName("Tên của bạn là gì");
        e.target.style.border = "1px solid red";
        break;
      case "lastname":
        if (inputs[e.target.name]) break;
        setErrLastName("Họ của bạn là gì");
        e.target.style.border = "1px solid red";
        break;
      case "email":
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const check = re.test(inputs[e.target.name]);
        if (check) break;
        setErrEmail("Yêu cầu là phải là email");
        e.target.style.border = "1px solid red";

        break;
      case "password":
        if (inputs[e.target.name].length >= 6) break;
        setErrPassword(
          "Mật khẩu có tối thiểu 6 chữ số bao gồm số,chữ cái và dấu câu (như ! và & )"
        );
        e.target.style.border = "1px solid red";
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper__logo">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt=""
        />
      </div>
      <div className="register">
        <div className="register__header">
          <h3>Tạo tài khoản mới</h3>
          <span>Nhanh chóng và dễ dàng.</span>
        </div>

        <form id="form-register" className="register__form" action="POST">
          <div className="register__form__control ">
            <div>
              <span>
                {" "}
                <input
                  type="text"
                  placeholder="Họ"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errFirstName && <span>{errFirstName}</span>}
              </span>
              <span>
                {" "}
                <input
                  type="text"
                  placeholder="Tên"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errLastName && <span>{errLastName}</span>}
              </span>
            </div>
          </div>
          <div className="register__form__control">
            <span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errEmail && <span>{errEmail}</span>}
            </span>
          </div>
          <div className="register__form__control">
            <span>
              <input
                type="password"
                placeholder="Mật khẩu mới"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errPassword && <span>{errPassword}</span>}
            </span>
          </div>
          <button>Đăng ký</button>
        </form>
        <Link to="/login" className="register__to-login ">
          Bạn đã có tài khoản ư? 
        </Link>
      </div>
    </div>
  );
}

export default Register;
