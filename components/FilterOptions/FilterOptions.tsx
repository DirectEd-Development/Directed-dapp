import { useState } from 'react'
import { MenuIcon, CaretDownIcon, CaretUpIcon } from '../../icons'

type Props = {}

const FilterOptions = (props: Props) => {
	const [lastName, setLastName] = useState<boolean>(false)
	const [firstName, setFirstName] = useState<boolean>(false)
	const [progress, setProgress] = useState<boolean>(false)
	const [issuance, setIssuance] = useState<boolean>(false)

	return (
		<div className='flex items-center gap-4'>
			<MenuIcon />
			<div className='flex items-center gap-4'>
				<div className='filter-button'>
					<span className='text-base text-primary'>Last Name</span>
					{lastName ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-button'>
					<span className='text-base text-primary'>First Name</span>
					{firstName ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-button'>
					<span className='text-base text-primary'>Progress</span>
					{progress ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-button'>
					<span className='text-base text-primary'>Issuance</span>
					{issuance ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
			</div>
		</div>
	)
}

export default FilterOptions
