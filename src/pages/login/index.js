import { Link } from "react-router-dom";
import "./login.scss";
function Login() {
  return (
    <div className="wrapper">
     <div className="wrapper__logo">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt=""
          />
        </div>
      <div className="login">
       
        <div className="login__header">
          <h3>Đăng nhập Facebook</h3>
          <span>Lướt facebook thả ga</span>
        </div>
        <form id="form-login" className='login__form' action='POST'>
            <div className="login__form__control">
            <input type="email" placeholder="Email"/>
            </div>
            <div className="login__form__control">
            <input type="password" placeholder="Mật khẩu"/>
            </div>
    <button>Đăng nhập</button>
        </form>
    <Link to='/register' className="login__to-register" >Bạn chưa có tài khoản ư?</Link>
      </div>
    </div>
  );
}

export default Login;
