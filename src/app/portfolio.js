'use client'
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Portfolio(){

    return (
        <section className="w-full flex flex-col items-center mt-20">
            <h2 className="text-3xl font-semibold text-color-green" id="portfolio">Portfolio</h2>
            <div className=" h-96 w-4/5 mt-10">
                <Carousel >
                    <Image src="/git.png" width={100} height={100} quality={100}/>
                    <Image src="/git.png" width={100} height={100} quality={100}/>
                    <Image src="/git.png" width={100} height={100} quality={100}/>
                </Carousel>
            </div>
        </section>
    )
}