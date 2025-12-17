"use client";
import Heading from "../_components/heading";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import FooterComponent from "../_components/footer";

export default function Home() {
  function Portfolio() {
    const title = useSearchParams().get("title");

    const portfolios = [
      {
        title: "bts",
        link: "/bts.png",
        name: "Base Transceiver Station Monitoring System",
        totalFiles: 0,
      },
      {
        title: "pos-bengkel",
        link: "/pos-bengkel.png",
        name: "Aplikasi POS Bengkel Mobil",
        totalFiles: 9,
      },
      {
        title: "fashion-campus",
        link: "/fashion-campus.png",
        name: "Fashion Campus e-commerce",
        totalFiles: 12,
      },
    ];

    const [portfolio, setPortfolio] = useState(
      portfolios.find((portfolio) => portfolio.title == title)
    );
    // const [files, setFiles] = useState([])
    let total = [];
    for (let i = 1; i <= portfolio.totalFiles; i++) {
      total.push(`/${portfolio.title}/${i}.png`);
    }

    return (
      <main className="flex flex-col min-h-screen bg-card">
        <Heading />
        <a href="#" className="fixed right-5 bottom-5">
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            className="text-5xl text-secondary"
          />
        </a>

        <div className="flex flex-col items-center w-full ">
          <h2 className="mt-10 text-3xl font-semibold text-textMain">
            {portfolio.name}
          </h2>
          <div className="grid w-4/5 grid-cols-1 gap-5 my-10">
            <img src={portfolio.link} className="w-full rounded" />
            <div className="grid grid-cols-2 gap-5 mt-5">
              {total.map((file) => (
                <img src={file} key={file} className="w-full rounded" />
              ))}
            </div>
          </div>
        </div>

        <FooterComponent />
      </main>
    );
  }
  // setFiles(total)

  return (
    <Suspense>
      <Portfolio />
    </Suspense>
  );
}
