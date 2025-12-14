"use client";
import { Badge, Button } from "flowbite-react";
import Image from "next/image";

export default function Portfolio() {
  const portfolios = [
    {
      name: "BTS Management System",
      title: "bts",
      link: "/bts.png",
      skills: ["Laravel", "JQuery", "MySQL"],
    },
    {
      name: "POS Bengkel",
      title: "pos-bengkel",
      link: "/pos-bengkel.png",
      skills: ["PHP", "MySQL", "Javascript"],
    },
    {
      name: "Fashion Campus e-Commerce Project",
      title: "fashion-campus",
      link: "/fashion-campus.png",
      skills: ["React", "Flask", "Docker", "REST API"],
    },
  ];

  return (
    <section className="w-full mt-20" id="portfolio">
      <div
        className="w-full flex flex-col items-center delay-[150ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]"
        data-taos-offset="0"
      >
        <h2 className="text-3xl font-semibold text-textMain">Portfolio</h2>
        <div className="w-4/5 mt-5 lg:w-3/5">
          {portfolios.map((portfolio) => (
            <div
              className="flex flex-col w-full mb-5 h-[24rem] md:h-48 md:flex-row "
              key={portfolio.title}
            >
              <div className="relative w-full h-full mb-5 md:me-5 md:w-1/2 lg:w-1/3 md:mb-0">
                <Image
                  src={portfolio.link}
                  alt={portfolio.title}
                  className="object-cover h-full rounded-lg md:me-5"
                  fill={true}
                  // width = {100}
                  // height={100}
                />
              </div>
              <div className="flex flex-col text-textMain">
                <h3 className="text-lg ">
                  <a
                    href=""
                    className="hover:underline hover:decoration-secondary"
                  >
                    {portfolio.name}
                  </a>
                </h3>
                <div className="flex">
                  {portfolio.skills.map((skill) => (
                    <Badge
                      className="rounded-full bg-card text-secondary me-2"
                      key={portfolio + "_" + skill}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex mt-5 space-x-3">
                  <Button className="bg-transparent border-secondary text-secondary hover:!bg-transparent hover:text-textMain hover:scale-105 transition-all">
                    Live Demo
                  </Button>
                  <Button className="bg-transparent border-secondary text-secondary hover:!bg-transparent hover:text-textMain hover:scale-105 transition-all">
                    Github Repo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
