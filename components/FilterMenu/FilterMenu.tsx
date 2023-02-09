import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const FilterMenu = () => {
	return (
		<div className='z-10'>
			<Menu as='div' className='relative inline-block text-left'>
				<div>
					<Menu.Button className=''>
						<BsFilter className='text-[30px]' />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter='transition ease-out duration-100'
					enterFrom='transform opacity-0 scale-95'
					enterTo='transform opacity-100 scale-100'
					leave='transition ease-in duration-75'
					leaveFrom='transform opacity-100 scale-100'
					leaveTo='transform opacity-0 scale-95'
				>
					<Menu.Items className='absolute right-0 -mt-10 w-56 origin-top-right border border-gray-500 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
						<div className='px-1 py-1 '>
							<div className='relative text-gray-500 outline-0 w-full border-none'>
								<div className='flex'>
									<div className='py-5 px-2 w-full'>Filter Menu</div>
									<Menu.Button className=''>
										<GrClose className='text-[30px] pr-3 text-gray-500' />
									</Menu.Button>
								</div>
								<div className='border border-transparent border-t-gray-500 w-11/12'></div>
								<select className='border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5'>
									<option className='pt-6'>Language</option>
									<option className=''>Javascript</option>
									<option className=''>PHP</option>
								</select>

								<div className='border border-transparent border-t-gray-500 w-11/12'></div>
							</div>
						</div>
						<div className='px-1 py-1 '>
							<div className='relative text-gray-500 outline-0 w-full border-none'>
								<select className='border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5'>
									<option className='pt-6'>Gender</option>
									<option className=''>Female</option>
									<option className=''>Male</option>
									<option className=''>Co-Ed</option>
								</select>
								<div className='border border-transparent border-t-gray-500 w-11/12'></div>

								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
									<i className='fas fa-chevron-down text-gray-400'></i>
								</div>
							</div>
						</div>
						<div className='px-1 py-1 '>
							<div className='relative text-gray-500 outline-0 w-full border-none'>
								<select className='border-none cursor-pointer inline-block py-2 pl-3 pl-10 w-4/5 invalid:outline-0'>
									<option className='pt-6'>Location</option>
									<option className=''>Location 1</option>
									<option className=''>Location 2</option>
									<option className=''>Location 3</option>
								</select>
								<div className='border border-transparent border-t-gray-500 w-11/12'></div>

								<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
									<i className='fas fa-chevron-down text-gray-400'></i>
								</div>
							</div>
						</div>
						<div className='px-1 py-5 flex justify-center flex-col items-center'>
							<Menu.Item>
								<button className='text-white w-3/5 items-center text-gray-100 text-center rounded-md px-2 py-2 text-sm bg-[#385140]'>
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

export default FilterMenu
