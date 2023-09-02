import {AiOutlineArrowRight} from 'react-icons/ai'

const Animatedbtn = ({ isWidthFull, text, textSize,className }) => {
    return (
        <button className={`flex justify-between min-w-[240px] w-80 items-center  py-4 px-8 text-sm text-center font-medium cursor-pointer border  transition-all ease-in-out duration-150  ${className} 
        ${isWidthFull ? "w-full" : ""} ${textSize ? `text-${textSize}` : ""}`} >
            {text}
            <AiOutlineArrowRight />
        </button>
    );
};

export default Animatedbtn;