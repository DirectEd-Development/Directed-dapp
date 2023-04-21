import { useState } from 'react'
import { MenuIcon, CaretDownIcon, CaretUpIcon } from '../../icons'
import { Student } from '../../types/student'

type Data = {
	[key: string]: any
}

type FilterOptionsProps = {
	data: Student[]
	initialSortKey: string
	children: (sortedData: Student[]) => React.ReactNode
}

const FilterOptions = ({
	data,
	initialSortKey,
	children,
}: FilterOptionsProps) => {
	const [sortedData, setSortedData] = useState<Student[]>(data)
	const [sortKey, setSortKey] = useState<string>()
	const [studentName, setStudentName] = useState<boolean>(false)
	const [progress, setProgress] = useState<boolean>(false)
	const [issuance, setIssuance] = useState<boolean>(false)

	const sortData = (key: string) => {
		const sorted = [...data].sort((a, b) => (a[key] > b[key] ? 1 : -1))
		setSortedData(sorted)
		setSortKey(key)
	}

	return (
		<div className='filter-options'>
			<div className='flex-gap filter-options__buttons'>
				<MenuIcon />
				<div className='flex-gap'>
					<div
						className='filter-options__toggle flex-gap'
						onClick={() => sortData('name')}
					>
						<span className='filter-options__filter-type'>Name</span>
						{studentName ? <CaretUpIcon /> : <CaretDownIcon />}
					</div>
					<div
						className='filter-options__toggle flex-gap'
						onClick={() => sortData('pschool_token')}
					>
						<span className='filter-options__filter-type'>Progress</span>
						{progress ? <CaretUpIcon /> : <CaretDownIcon />}
					</div>
					<div className='filter-options__toggle flex-gap'>
						<span className='filter-options__filter-type'>Issuance</span>
						{issuance ? <CaretUpIcon /> : <CaretDownIcon />}
					</div>
				</div>
			</div>
			<div className='filter-options__children'>{children(sortedData)}</div>
		</div>
	)
}

export default FilterOptions
