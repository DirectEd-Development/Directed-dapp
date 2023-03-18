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
	const [showOption, setShowOption] = useState<boolean>(false)

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
						<>
							<div className='multi-select__radio' key={d.name}>
								<div className='multi-select__input-container'>
									<input
										type='checkbox'
										name={d.name.toLowerCase()}
										id={d.name.toLowerCase()}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											getOption(e.target.value)
										}
										value={d.name}
									/>
									<span className='checkmark'></span>
								</div>
								<label htmlFor={d.name.toLowerCase()}>{d.name}</label>
							</div>
							<hr className='multi-select__radio-divider' />
						</>
					))}
				</>
			)}
		</div>
	)
}

export default RadioMultiSelect
