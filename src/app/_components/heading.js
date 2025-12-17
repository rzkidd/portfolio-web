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
import Hero from "./hero";
import { usePathname } from "next/navigation";

export default function Heading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathName = usePathname();
  return (
    <header
      id={pathName === "/" ? "heading-home" : ""}
      className={`!bg-background ${
        pathName === "/" ? "h-[100vh]" : "h-16"
      } w-full flex flex-col items-center shadow-lg relative after:sm:w-72 after:md:w-1/2 z-50`}
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
        <div
          className={`items-center justify-between hidden w-1/2 font-medium md:flex text-textMain ${
            pathName === "/" ? "lg:w-1/4" : "lg:w-1/3"
          }`}
        >
          {pathName !== "/" && (
            <a href="/" className="text-xl font-bold hover:text-secondary">
              Reza Saputra
            </a>
          )}
          <a
            href="http://localhost:3000/#about"
            className="hover:text-secondary"
          >
            About
          </a>
          <a
            href="/#portfolio"
            className={`hover:text-secondary ${
              pathName === "/portfolio" ? "text-secondary" : ""
            }`}
          >
            Portfolio
          </a>
          <a href="/#contact" className="hover:text-secondary">
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
                  href="/#about"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/#portfolio"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 rounded-lg hover:text-secondary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="/#contact"
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

      {pathName === "/" && <Hero />}
    </header>
  );
}
