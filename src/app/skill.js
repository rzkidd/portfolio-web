'use client'
import Image from "next/image";

export default function Skill({srcImage, text}){
    return (
        <div className="h-48 w-48 sm:h-60 sm:w-60 rounded-3xl bg-color-med-green/30 text-color-green hover:bg-color-light-green hover:text-color-med-green hover:scale-105 transition-all ease-in flex flex-col justify-center items-center">
            <div className="flex items-center w-[100px] h-[100px]">
                <Image src={srcImage} width={100} height={100} quality={100} alt={text}/>
            </div>
            <h3 className="mt-10 text-xl font-semibold ">{text}</h3>
        </div>
    )
}