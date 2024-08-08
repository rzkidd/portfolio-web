'use client'
import Heading from "./heading";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export default function Home() {
  
  const title = useSearchParams().get('title')

  const portfolios = [
    {
      title: 'bts',
      link: '/bts.png',
      name: 'Base Transceiver Station Monitoring System',
      totalFiles: 0
    },
    {
      title: 'pos-bengkel',
      link: '/pos-bengkel.png',
      name: 'Aplikasi POS Bengkel Mobil',
      totalFiles: 9
    },
    {
      title: 'fashion-campus',
      link: '/fashion-campus.png',
      name: 'Fashion Campus e-commerce',
      totalFiles: 12
    },
  ]

  const [portfolio, setPortfolio] = useState(portfolios.find((portfolio) => portfolio.title == title))
  // const [files, setFiles] = useState([])
  let total = []
  for (let i = 1; i <= portfolio.totalFiles; i++){
    total.push(`/${portfolio.title}/${i}.png`)
  }
  // setFiles(total)

  return (
    <main className="flex min-h-screen flex-col bg-color-dark-green">
      <Heading />
      <a href="#" className="fixed right-5 bottom-5">
        <FontAwesomeIcon icon={faCircleChevronUp} className="text-5xl text-color-light-green"/>
      </a>
      
      <div className="w-full flex flex-col items-center " >
        <h2 className="text-3xl font-semibold text-color-green mt-10">{portfolio.name}</h2>
        <div className="my-10 grid grid-cols-1 gap-5 w-4/5">
          <img src={portfolio.link} className="w-full rounded" />
          <div className="mt-5 grid grid-cols-2 gap-5">
            {
              total.map((file) => 
                <img src={file} key={file} className="w-full rounded" />
              )
            }
          </div>
        </div>
      </div>

      <Footer container className="bg-color-med-green/30">
        <Footer.Copyright href="#" by="Reza Akbar Saputra" year={2024} className="text-color-green text-lg" />
      </Footer>
    </main>
  );
}
