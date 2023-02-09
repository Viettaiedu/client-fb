import { useContext } from "react";
import { accountFutures, screenFutures } from "../../../../assets/futures";
import { DarkModeContext } from "../../../../context/darkModeContext";
function Future({ future, fcShowFutures, typeOther }) {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
  const handleSetFuture = (e) => {
      if(!e.target === document.querySelector('.account__futures__future')) return;
    switch (e.target.textContent.trim()) {
      case accountFutures[0].text.trim():
          fcShowFutures.setShowFuturesSetting(true);
        fcShowFutures.setShowFuturesAccount(false);
        fcShowFutures.setShowFuturesHelper(false);
        fcShowFutures.setShowFuturesDarkMode(false);
        break;
      case accountFutures[1].text.trim():
          fcShowFutures.setShowFuturesHelper(true);
        fcShowFutures.setShowFuturesAccount(false);
        fcShowFutures.setShowFuturesSetting(false);
        fcShowFutures.setShowFuturesDarkMode(false);
        break;
        case accountFutures[2].text.trim():
            fcShowFutures.setShowFuturesDarkMode(true);
            fcShowFutures.setShowFuturesAccount(false);
            fcShowFutures.setShowFuturesHelper(false);
            fcShowFutures.setShowFuturesSetting(false);
            break;
      default:
        alert("Chức năng này chưa có,quay trở lại thử chức năng khác nhé");
    }
  };

  const handleSetOff = () => {
    if(!darkMode ) return ;
    toggleDarkMode()
  }
  const handleSetOn = () => {
    if(darkMode ) return ;
    toggleDarkMode();
}
  return (
    <>
      {typeOther ? (
        <>
          <div className="account__futures__future account__futures__disable-hover" onClick={handleSetFuture}>
            <div>
            <span className="account__futures__future__one">
              {" "}
              <span className="account__futures__future__one__icon">
                {future.icon}
              </span>
              <p className="account__futures__future__one__text-other">Điều chỉnh giao diện của Facebook để giảm độ chói và cho đôi mắt được nghỉ ngơi.</p>
            {future.text}
            </span>
            </div>
          </div>
          <div className="account__futures__future__nodes">
          {future.text === screenFutures[0].text &&  <>
            <div className="account__futures__future__nodes__node"><span>Tắt</span>  <span  className={`account__futures__future__nodes__node__${darkMode ? "turn-off":"turn-on"}`} onClick={handleSetOff}></span></div>
                <div className="account__futures__future__nodes__node"><span>Bật</span> <span  className={`account__futures__future__nodes__node__${!darkMode ? "turn-off":"turn-on"}`} onClick={handleSetOn}></span></div>
          </>}
          {future.text === screenFutures[1].text &&  <>
            <div className="account__futures__future__nodes__node"><span>Tắt</span>  <span  className={`account__futures__future__nodes__node__turn-off`}></span></div>
                <div className="account__futures__future__nodes__node"><span>Bật</span> <span  className={`account__futures__future__nodes__node__turn-on`}></span></div>
          </>}
               
          </div>
        </>
      ) : (
        <>
          <div className="account__futures__future" onClick={handleSetFuture}>
            <span className="account__futures__future__one">
              {" "}
              <span className="account__futures__future__one__icon">
                {future.icon}
              </span>
              {future.text}
            </span>
            {future.iconRight}
          </div>
        </>
      )}
    </>
  );
}

export default Future;
