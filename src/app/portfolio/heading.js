"use client";

import { Fragment, useState } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default function Heading() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header id="heading" className="!bg-color-med-green/30 h-16 w-full flex flex-col items-center shadow-lg relative after:sm:w-72 after:md:w-1/2 z-50">
            <nav
                className="mx-auto flex w-4/5 items-center justify-between pt-5"
                aria-label="Global"
            >
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md text-color-green hover:text-color-light-green"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={fas.faBars} className="h-6 w-6" aria-hidden="true"/>
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-between w-1/2 lg:w-1/3 text-color-green font-medium">
                    <a href="/" className="hover:text-color-light-green font-bold text-xl">Reza Saputra</a>
                    <a href="/#about" className="hover:text-color-light-green">About</a>
                    <a href="/#portfolio" className="hover:text-color-light-green text-color-light-green">Portfolio</a>
                    <a href="/#contact" className="hover:text-color-light-green">Contact</a>
                </div>
            </nav>
            <Dialog
                className="md:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-20" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-0" style={{ backgroundColor: 'rgba(6, 70, 78,1)' }}>
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-color-green hover:text-color-light-green"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FontAwesomeIcon icon={fas.faXmark} className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y ">
                            <div className="space-y-2 py-6 text-color-green">
                                <a
                                    href="#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color-light-green hover:text-color-med-green"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </a>
                                <a
                                    href="#portfolio"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color-light-green hover:text-color-med-green"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color-light-green hover:text-color-med-green"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
