"use client";
import Image from "next/image";

export default function Skill({ srcImage, text }) {
  return (
    <div className = "flex flex-col items-center justify-center transition-all ease-in w-36 h-36 lg:h-60 lg:w-60 rounded-3xl bg-card text-textMuted hover:bg-secondary hover:text-textMain hover:scale-105">
    <div className = "flex items-center w-[40px] h-[40px] lg:w-[100px] lg:h-[100px]">
        <Image
          src={srcImage}
          width={100}
          height={100}
          quality={100}
          alt={text}
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold lg:mt-10 lg:text-xl ">
        {text}
      </h3>
    </div>
  );
}
