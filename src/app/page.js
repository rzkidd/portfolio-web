"use client";
import About from "./_components/about";
import Contact from "./_components/contact";
import Experience from "./_components/experience";
import Heading from "./_components/heading";
import Portfolio from "./_components/portfolio";
import Skill from "./_components/skill";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleChevronUp,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Checkbox,
  createTheme,
  Footer,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateTime } from "luxon";

const customTheme = createTheme({
  textInput: {
    field: {
      input: {
        colors: {
          secondary:
            "bg-card text-textMain border-secondary focus:border-secondary focus:ring-secondary",
        },
      },
    },
  },
  textArea: {
    colors: {
      secondary:
        "bg-card text-textMain border-secondary focus:border-secondary focus:ring-secondary",
    },
  },
});

export default function Home() {
  const mySkills = [
    {
      srcImage: "/html5.png",
      text: "HTML",
    },
    {
      srcImage: "/css3.png",
      text: "CSS",
    },
    {
      srcImage: "/bootstrap.png",
      text: "Bootstrap",
    },
    {
      srcImage: "/tailwind.png",
      text: "Tailwind",
    },
    {
      srcImage: "/javascript.png",
      text: "Javascript",
    },
    {
      srcImage: "/react.png",
      text: "React JS",
    },
    {
      srcImage: "/express-js.png",
      text: "Express JS",
    },
    {
      srcImage: "/php.png",
      text: "PHP",
    },
    {
      srcImage: "/laravel.png",
      text: "Laravel",
    },
    {
      srcImage: "/mysql.png",
      text: "MySQL",
    },
    {
      srcImage: "/postgresql.png",
      text: "PostgreSQL",
    },
    {
      srcImage: "/git.png",
      text: "Git",
    },
  ];

  const experience = [
    {
      date: "March 2023 - August 2023",
      role: "Technical Developer | Part time",
      company: "Acunomic",
      link: "https://acunomic.com",
      content: [
        `Championed the development of a cutting-edge library for extracting bank information from EBICS, demonstrating expertise in financial data integration. Seamlessly integrated the library into the Acumatica ERP system, optimizing financial processes and enhancing efficiency. This achievement underscores proficiency in both software development and ERP integration, contributing to streamlined operations and improved decision-making within the organization.`,
      ],
    },
    {
      date: "January 2023 - December 2023",
      role: "Software Developer | Internship",
      company: "UPT Teknologi Informasi dan Komunikasi UNS",
      link: "https://tik.uns.ac.id/",
      content: [
        `Led the development of extensive software documentation for the college graduation website and the "Rekognisi Pembelajaran Lampau" module.`,
        `Led a cross-functional team of 3 in executing projects assigned by project coordinator.`,
      ],
    },
    {
      date: "September 2022 - December 2022",
      role: "Software Developer | Part time",
      company: "Cloud-based School ERP Project by Informatics Department UNS",
      link: "",
      content: [
        `Successfully developed and deployed School ERP administration web applications using Laravel framework in collaboration with 5+ peoples. Specialized in creating tailored solutions to streamline educational institution operations. Delivered innovative features enhancing administrative efciency and student learning experiences.`,
      ],
    },
    {
      date: "August 2022 - December 2022",
      role: "Fullstack Developer | Project",
      company:
        "Fashion Campus e-commerce API project by Startup Campus Bootcamp Program",
      link: "",
      content: [
        `Engineered a robust API for the Fashion Campus e-commerce platform utilizing Python and Flask, facilitating seamless communication between frontend and backend systems.`,
        `Successfully orchestrated the deployment of both frontend and backend components of Fashion Campus on the Google Cloud Platform, ensuring scalability, reliability, and optimal performance.`,
        `Spearheaded a team of 3 full-stack developers in building a robust API for an e-commerce application.`,
      ],
    },
  ];

  const contacts = [
    {
      icon: faGithub,
      name: "Github",
      link: "https://github.com/rzkidd/",
      color: "bg-black",
    },
    {
      icon: faLinkedin,
      name: "Linkedin",
      link: "https://www.linkedin.com/in/rezaakbarsaputra",
      color: "bg-blue-700",
    },
    {
      icon: faWhatsapp,
      name: "Whatsapp",
      link: "https://wa.me/6289525550206",
      color: "bg-green-600",
    },
    {
      icon: faEnvelope,
      name: "Mail",
      link: "mailto:rezasaputra878@gmail.com",
      color: "bg-red-700",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Heading />
      <a href="#" className="fixed right-5 bottom-5">
        <FontAwesomeIcon
          icon={faCircleChevronUp}
          className="text-5xl text-secondary"
        />
      </a>
      <About />
      <section className="w-full mt-20" id="mySkills">
        <div
          className="w-full flex flex-col items-center delay-[150ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]"
          data-taos-offset="0"
        >
          <h2 className="text-3xl font-semibold text-textMain">My Skills</h2>
          <div className="grid grid-cols-2 gap-5 mt-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
            {mySkills.map((mySkill) => (
              <Skill
                srcImage={mySkill.srcImage}
                text={mySkill.text}
                key={1 + "_" + mySkill.text}
              />
            ))}
          </div>
        </div>
      </section>
      <Portfolio />
      <section className="w-full mt-20 bg-card">
        <div
          className="w-full flex flex-col items-center delay-[150ms] duration-[300ms] taos:[transform:translate3d(0,200px,0)_scale(0.6)] taos:opacity-0 [animation-iteration-count:infinite]"
          data-taos-offset="0"
        >
          <h2 className="mt-20 text-3xl font-semibold text-textMain">
            Experience
          </h2>
          <div className="w-4/5 mt-10 lg:w-1/2">
            {experience.map((exp) => (
              <Experience
                date={exp.date}
                role={exp.role}
                company={exp.company}
                link={exp.link}
                content={exp.content}
                key={1 + "_" + exp.role}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center w-full my-10">
        <h2 className="text-3xl font-semibold text-textMain" id="contact">
          Contact Me
        </h2>
        <form className="flex flex-col w-4/5 gap-4 lg:w-1/2">
          <div>
            <div className="block mb-2 ">
              <Label htmlFor="email" className="text-textMain ">
                Your email
              </Label>
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your email address"
              required
              theme={customTheme.textInput}
              color="secondary"
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label htmlFor="message" className="text-textMain">
                Message
              </Label>
            </div>
            <Textarea
              id="message"
              type="text"
              required
              sizing="lg"
              rows={4}
              theme={customTheme.textArea}
              color={"secondary"}
              placeholder="Your message here..."
            />
          </div>
          <Button
            type="submit"
            className="bg-secondary border-secondary text-textMain hover:!bg-card hover:border-secondary hover:text-textMain"
          >
            Send
          </Button>
        </form>
        <div className="grid w-4/5 grid-cols-2 gap-5 mt-10 lg:grid-cols-4">
          {contacts.map((contact) => (
            <Contact
              icon={contact.icon}
              name={contact.name}
              link={contact.link}
              color={contact.color}
              key={`1_${contact.name}`}
            />
          ))}
        </div>
      </section>
      <Footer container className="bg-background">
        <Footer.Copyright
          href="#"
          by="Reza Akbar Saputra"
          year={DateTime.now().toFormat("yyyy")}
          className="text-lg text-textMuted"
        />
      </Footer>
    </main>
  );
}
