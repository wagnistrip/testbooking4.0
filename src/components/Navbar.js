import React from 'react';
// import './index.css';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
  } from '@headlessui/react'
  import { MdFlight } from "react-icons/md";
  import { CiLogin } from "react-icons/ci";
  import { FaCalendarAlt } from "react-icons/fa";
  import { LiaHotelSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { LiaFlagUsaSolid } from "react-icons/lia";
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 left-0 right-0 shadow-md p-4 gap-x-8 flex items-center justify-center">
      <div className="flex gap-x-4 items-center">
        <img src="https://www.flight.wagnistrip.com/assets/images/logo.png" alt="Wagnistrip Logo" className="h-16 mr-4" />
        <nav className="flex text-[#0164a3] font-bold space-x-4">
          <Link to="#" className=" border-r-[2px] border-gray-400 flex items-center justify-center gap-x-1 pr-3 "><MdFlight className='rotate-45' /> FLIGHTS</Link>
          <Link to="#" className=" border-r-[2px] border-gray-400 pr-3 items-center flex justify-center gap-x-1 "><LiaHotelSolid/> HOTELS</Link>
          <Link to="#" className=" border-r-[2px] border-gray-400 pr-3 items-center flex justify-center gap-x-1 "><FaCalendarAlt/> HOLIDAYS</Link>
          <Link to="#" className=" border-r-[2px] border-gray-400 pr-3 items-center flex justify-center gap-x-1 "><FaCalendarAlt/> EVENTS</Link>
          {/* <a href="#" className="text-blue-600">MORE</a> */}
          <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-md text-[#0164a3] uppercase px-4 font-bold  text-base focus:outline-none focus:ring-offset-2 ">
                         More <span className="ml-2">&#9660;</span>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-base text-[#0164a3]')}
                          >
                            CUSTOMER CARE
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-1 text-base text-[#0164a3]')}
                          >
                            MORE INSURANCE
                          </a>
                        )}
                      </MenuItem>
                    
                    </MenuItems>
                  </Transition>
                </Menu>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
      <Menu as="div" className="relative">
                  <div>
                  <MenuButton className="relative flex rounded-md bg-blue-600 px-4 text-white py-2 text-base font-normal focus:outline-none  ">
                         My Account <span className="ml-2">&#9660;</span>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-[#0164a3]' : '', 'block bg-[#0164a3] font-medium text-base px-4 py-2 text-gray-100')}
                          >
                            User login/Sign Up
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'flex items-center justify-start gap-x-1 px-2 py-2 text-base text-gray-700')}
                          >
                            <CiLogin/>Partner login or Signup
                          </a>
                        )}
                      </MenuItem>
                      
                    </MenuItems>
                  </Transition>
                </Menu>
        <div className="flex flex-col items-end">
        <Menu as="div" className="relative">
                  <div>
                    <MenuButton className="relative flex rounded-md text-[#0164a3] uppercase px-4 font-bold  text-base focus:outline-none focus:ring-offset-2 ">
                    Toll free <span className="ml-2">&#9660;</span>
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'flex items-center justify-start gap-x-1 font-medium px-4 py-2 text-base text-[#0164a3]')}
                          >
                            <LiaFlagUsaSolid/> : 8069145571
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                        
                          <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'flex items-center justify-start gap-x-1 font-medium px-4 py-2 text-base text-[#0164a3]')}
                          >
                            <LiaFlagUsaSolid/> : 18009965152
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                            <a
                            href="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'flex items-center justify-start gap-x-1 font-medium px-4 py-2 text-base text-[#0164a3]')}
                          >
                            <LiaFlagUsaSolid/> : 18009965152
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
