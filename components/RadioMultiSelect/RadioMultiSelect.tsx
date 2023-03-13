import { ChangeEvent, useState } from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'

type Options = {
	name: string
}

type RadioMultiSelectProps = {
	name: string
	options: Options[]
	getOption: (option: string) => void
}

const RadioMultiSelect = ({
	name,
	options,
	getOption,
}: RadioMultiSelectProps) => {
	const [showOption, setShowOption] = useState<boolean>(true)

	return (
		<div className='multi-select__options'>
			<div
				className='multi-select__options-title'
				onClick={() => setShowOption(!showOption)}
			>
				<p>{name}</p>
				{showOption ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
			</div>
			{showOption && (
				<>
					{options.map((d: { name: string }) => (
						<div className='multi-select__radio' key={d.name}>
							<input
								type='radio'
								name={d.name.toLowerCase()}
								id={d.name.toLowerCase()}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									getOption(e.target.value)
								}
								value={d.name}
							/>
							<label htmlFor={d.name.toLowerCase()}>{d.name}</label>
						</div>
					))}
				</>
			)}
		</div>
	)
}

export default RadioMultiSelect
