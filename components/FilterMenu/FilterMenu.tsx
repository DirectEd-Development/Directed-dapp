import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsFilter } from "react-icons/bs"
import { GrClose } from "react-icons/gr"

const FilterMenu = () => {
  return (
    <div className="z-10">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <BsFilter className='text-[30px]' />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 -mt-10 w-56 origin-top-right border border-gray-500 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            <div className="relative text-gray-500 outline-0 w-full border-none">
                <div className="flex">
                <div className='py-5 px-2 w-full'>Filter Menu</div>
                <Menu.Button className="">
            <GrClose className='text-[30px] pr-3 text-gray-500' />
          </Menu.Button>
                </div>
            <div className="border border-transparent border-t-gray-500 w-11/12">
        </div>
        <select className="border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5">
            <option className="pt-6">Language</option>
            <option className="">Javascript</option>
            <option className="">PHP</option>
        </select>
        
        <div className="border border-transparent border-t-gray-500 w-11/12">
        </div>
      </div>
            </div>
            <div className="px-1 py-1 ">
            <div className="relative text-gray-500 outline-0 w-full border-none">
            <select className="border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5">
            <option className="pt-6">Gender</option>
            <option className="">Female</option>
            <option className="">Male</option>
            <option className="">Co-Ed</option>
        </select>
        <div className="border border-transparent border-t-gray-500 w-11/12">
        </div>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <i className="fas fa-chevron-down text-gray-400"></i>
        </div>
      </div>
            </div>
            <div className="px-1 py-1 ">
            <div className="relative text-gray-500 outline-0 w-full border-none">
            <select className="border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5 invalid:outline-0">
            <option className="pt-6">Location</option>
            <option className="">Location 1</option>
            <option className="">Location 2</option>
            <option className="">Location 3</option>
        </select>
        <div className="border border-transparent border-t-gray-500 w-11/12">
        </div>
        
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <i className="fas fa-chevron-down text-gray-400"></i>
        </div>
      </div>
            </div>
            <div className="px-1 py-5 flex justify-center flex-col items-center">
            <Menu.Item>
                  <button
                    className='text-white w-3/5 items-center text-gray-100 text-center rounded-md px-2 py-2 text-sm bg-[#385140]'
                  >
                    Apply Filters
                  </button>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'no-underline' : 'text-gray-900'
                    } w-4/5 items-center text-center underline rounded-md px-2 py-2 text-sm`}
                  >
                    Clear All Filters
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EditInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props:any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}


export default FilterMenu;