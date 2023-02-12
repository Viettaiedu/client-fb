

import './button.scss';
function Button({btnConfirm , btnReject , text}) {
    const btnClasses = []

    if(btnConfirm) {
        btnClasses.push("btns__confirm");
    }
    if(btnReject) {
        btnClasses.push("btns__reject");
    }
    return ( 
        <button className={[...btnClasses]}>{text}</button>
     );
}

export default Button;