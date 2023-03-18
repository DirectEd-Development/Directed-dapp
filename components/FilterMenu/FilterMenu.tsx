import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import Button from '../Button/Button'
import RadioMultiSelect from '../RadioMultiSelect/RadioMultiSelect'
import { languages, gender, location } from '../../lib/radioOptions'

const FilterMenu = () => {
	const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false)
	const [language, setLanguage] = useState<string>('')
	const [userGender, setUserGender] = useState<string>('')
	const [userLocation, setUserLocation] = useState<string>('')

	const getLanguage = (option: string): void => {
		setLanguage(option)
	}

	const getGender = (option: string): void => {
		setUserGender(option)
	}

	const getLocation = (option: string): void => {
		setUserLocation(option)
	}

	const clearFilter = () => {
		setLanguage('')
		setUserGender('')
		setUserLocation('')
	}

	return (
		<div className='filter-menu'>
			<div className='filter-menu__filter-button'>
				<BsFilter size={30} onClick={() => setShowFilterMenu(true)} />
			</div>

			{showFilterMenu && (
				<div className='filter-menu__content'>
					<div className='filter-menu__head'>
						<p>Filter Menu</p>
						<GrClose size={20} onClick={() => setShowFilterMenu(false)} />
					</div>

					<RadioMultiSelect
						name='Languages'
						options={languages}
						getOption={getLanguage}
					/>
					<RadioMultiSelect
						name='Gender'
						options={gender}
						getOption={getGender}
					/>
					<RadioMultiSelect
						name='Location'
						options={location}
						getOption={getLocation}
					/>

					<div className='filter-menu__buttons'>
						<Button variant='secondary' size='small-height'>
							Apply Filters
						</Button>
						<Button variant='link' onClick={clearFilter}>
							Clear All Filters
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export default FilterMenu
