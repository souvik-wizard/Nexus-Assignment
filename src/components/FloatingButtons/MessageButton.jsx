"use client"
import { BiSolidMessage } from 'react-icons/bi';



const MessageButton = () => {

  return (
    <div>
      <button
        className="fixed bottom-20 right-6 lg:right-8 z-40 bg-[#252525] border border-white  text-white p-2 rounded-[50%] shadow-lg transition-all duration-300"
      >
        <BiSolidMessage size={18}/>
      </button>
    </div>
  );
};

export default MessageButton;
