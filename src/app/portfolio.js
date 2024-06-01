'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "flowbite-react";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Portfolio(){

    return (
        <section className="w-full mt-10 pt-10" id="portfolio">
            <div className="w-full flex flex-col items-center delay-[150ms] duration-[600ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]" data-taos-offset="300">
                <h2 className="text-3xl font-semibold text-color-green" >Portfolio</h2>
                <div className=" h-96 md:h-[30rem] w-4/5 mt-10">
                    <Carousel 
                        leftControl={<FontAwesomeIcon icon={faCircleChevronLeft} className="text-3xl text-color-med-green" />} 
                        rightControl={<FontAwesomeIcon icon={faCircleChevronRight} className="text-3xl text-color-med-green" />}
                    >
                            <img src="/iot-smart-classroom.jpeg" className="h-4/5 object-contain"/>
                            <img src="/kliniku.jpeg" className="h-4/5 object-contain"/>
                            <img src="/bts.png" className="h-4/5 object-contain"/>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}