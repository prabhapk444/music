"use client";

import { useRouter } from "next/navigation";
import React, { useReducer } from "react";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";


interface ListItemProps {
    image:string,
    name:string,
    href:string

}

const ListItem :React.FC<ListItemProps>  =({image,href,name})=>{

  const router =useRouter();


    const onClick =()=>{
         router.push(href)
    }


    return(
          <button  onClick={onClick}    className="relative group flex items-center overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
            <div className="relative">
             <Image src={image} alt="image" width={100} height={100}/>
            </div>
            <p className="font=medium truncate py-5">{name}</p>
            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-100" style={{ backgroundColor: '#18ffff' }}>
           <FaPlay className='text-black' />
          </div>

          </button>
    )
}

export default ListItem;