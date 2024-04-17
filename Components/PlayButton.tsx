import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return ( 
    <button
      className="
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center
        p-4 
        drop-shadow-md 
        translate
        translate-y-1/4
        group-hover:opacity-100 
        group-hover:translate-y-0
        hover:scale-110
      "
      style={{ backgroundColor: '#18ffff' }}
    >
      <FaPlay className="text-black" />
    </button>
   );
}
 
export default PlayButton;