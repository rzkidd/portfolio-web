"use client";

import { Fragment, useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="heading-home"
      className="!bg-background h-[100vh] w-full flex flex-col items-center shadow-lg relative after:sm:w-72 after:md:w-1/2 z-50"
    >
      <nav
        className="flex items-center justify-between w-4/5 pt-5 mx-auto"
        aria-label="Global"
      >
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-secondary "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon
              icon={fas.faBars}
              className="w-6 h-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="items-center justify-between hidden w-1/2 font-medium md:flex lg:w-1/4 text-textMain">
          <a href="#about" className="hover:text-secondary">
            About
          </a>
          <a href="#portfolio" className="hover:text-secondary">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-secondary">
            Contact
          </a>
        </div>
        {/* <label className="relative z-10 flex justify-end">
                    <span className="absolute inset-y-0 flex items-center pl-2 right-5">
                    <FontAwesomeIcon icon={fas.faMagnifyingGlass} className="w-5 h-5 text-color-green"/>
                    </span>
                    <input type={"text"} className="w-3/4 font-medium border-none form-input rounded-xl bg-color-green/30 placeholder:text-color-green text-color-light-green focus:ring-color-green" placeholder="Search"></input>
                </label> */}
      </nav>
      <Dialog
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto border-0 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-card">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-textMain"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon
                icon={fas.faXmark}
                className="w-6 h-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y ">
              <div className="py-6 space-y-2 text-textMain">
                <a
                  href="#about"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#portfolio"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <div className="flex flex-col justify-center w-4/5 h-full text-textMain ">
        <h1 className="text-3xl">
          I&apos;m{" "}
          <span className="text-4xl font-bold text-textMain">Reza Saputra</span>
        </h1>
        <h2 className="text-xl font-medium text-secondary">Web Developer</h2>
        <a
          href="#contact"
          className="px-8 py-3 mt-5 transition duration-200 ease-in rounded-lg w-fit text-textMain bg-card hover:shadow-md"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
