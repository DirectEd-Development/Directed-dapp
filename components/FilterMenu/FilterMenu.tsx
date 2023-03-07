import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

const FilterMenu = () => {
	return (
		<div className='filter-menu'>
			<div className='filter-menu__filter-button'>
				<BsFilter size={30} />
			</div>

			{/* <div>
					<div>
						<div>
							<div>
								<div>Filter Menu</div>
								<button>
									<GrClose />
								</button>
							</div>
							<select>
								<option>Language</option>
								<option className=''>Javascript</option>
								<option className=''>PHP</option>
							</select>
						</div>
					</div>
					<hr />
					<div>
						<div>
							<select>
								<option>Gender</option>
								<option className=''>Female</option>
								<option className=''>Male</option>
								<option className=''>Co-Ed</option>
							</select>
							<div>
								<i className='fas fa-chevron-down'></i>
							</div>
						</div>
					</div>
					<hr />
					<div>
						<div className='relative text-gray-500 outline-0 w-full border-none'>
							<select className='border-none outline-none cursor-pointer inline-block py-2 pl-3 pl-10 w-full'>
								<option className='pt-6'>Location</option>
								<option className=''>Location 1</option>
								<option className=''>Location 2</option>
								<option className=''>Location 3</option>
							</select>
							<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
								<i className='fas fa-chevron-down text-gray-400'></i>
							</div>
						</div>
					</div>
					<hr />
					<div>
						<div>
							<button className='text-white w-3/5 items-center text-gray-100 text-center rounded-md px-2 py-2 text-sm bg-[#385140]'>
								Apply Filters
							</button>
						</div>
						<div>
							<button>Clear All Filters</button>
						</div>
					</div>
				</div> */}
		</div>
	)
}

export default FilterMenu
