import EmojiPicker from "emoji-picker-react";
import { forwardRef } from "react";
import { MdInsertEmoticon } from "react-icons/md";

import './emoji-picker.scss';
const CEmojiPicker = forwardRef(({handleClick,handleEmoijClick ,showEmoji} , ref) => {
    return ( 
       
         <div  ref={ref} className="emoij__picker">
        <EmojiPicker height={300} onEmojiClick={handleEmoijClick} width={400} />
        </div> 
     );


}) ;

export default CEmojiPicker;