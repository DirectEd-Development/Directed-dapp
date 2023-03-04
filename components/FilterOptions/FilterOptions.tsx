import { useState } from 'react'
import { MenuIcon, CaretDownIcon, CaretUpIcon } from '../../icons'

type Props = {}

const FilterOptions = (props: Props) => {
	const [lastName, setLastName] = useState<boolean>(false)
	const [firstName, setFirstName] = useState<boolean>(false)
	const [progress, setProgress] = useState<boolean>(false)
	const [issuance, setIssuance] = useState<boolean>(false)

	return (
		<div className='filter-options flex-gap'>
			<MenuIcon />
			<div className='flex-gap'>
				<div className='filter-options__toggle flex-gap'>
					<span className='text-base text-primary'>Last Name</span>
					{lastName ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-options__toggle flex-gap'>
					<span className='text-base text-primary'>First Name</span>
					{firstName ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-options__toggle flex-gap'>
					<span className='text-base text-primary'>Progress</span>
					{progress ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
				<div className='filter-options__toggle flex-gap'>
					<span className='text-base text-primary'>Issuance</span>
					{issuance ? <CaretUpIcon /> : <CaretDownIcon />}
				</div>
			</div>
		</div>
	)
}

export default FilterOptions
