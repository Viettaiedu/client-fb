
import { forwardRef } from 'react';
import './error-message.scss';

const ErrorMesssage = forwardRef(({message , setShowError} , ref) => {
    return ( 
        <div className="error-message" >
            <span ref={ref}>
            {message}
            <button onClick={() => setShowError(false)}>Nhấn vào tôi để <b>THOÁT</b> nào bạn tui</button>
            </span>
        </div>
     
     );


})
    
export default ErrorMesssage;