"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "flowbite-react";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Portfolio() {
  const portfolios = [
    {
      title: "bts",
      link: "/bts.png",
    },
    {
      title: "pos-bengkel",
      link: "/pos-bengkel.png",
    },
    {
      title: "fashion-campus",
      link: "/fashion-campus.png",
    },
  ];

  return (
    <section className="w-full mt-20" id="portfolio">
      <div
        className="w-full flex flex-col items-center delay-[150ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]"
        data-taos-offset="0"
      >
        <h2 className="text-3xl font-semibold text-color-green">Portfolio</h2>
        <div className=" h-96 md:h-[30rem] w-4/5 mt-5">
          <Carousel
            leftControl={
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                className="text-3xl text-color-med-green"
              />
            }
            rightControl={
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                className="text-3xl text-color-med-green"
              />
            }
          >
            {portfolios.map((portfolio) => (
              <div className="flex justify-center h-full" key={portfolio.title}>
                <a href={"/portfolio?title=" + portfolio.title} className="">
                  <Image
                    src={portfolio.link}
                    alt={portfolio.title}
                    className="object-contain h-full"
                    fill={true}
                  />
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
