type ProgressBarProps = {}

const ProgressBar = ({}: ProgressBarProps) => {
	return (
		<div className='font-semibold'>
			<div className='text-primary text-base md:flex items-start justify-between'>
				<span className='flex items-center space-x-2'>
					{/* <MdOutlineAccessTime /> <span>6 days left</span> */}
					<span className='text-sm'>₳3,108</span>
				</span>
				<span className='text-sm'>Goal: $40,000</span>
			</div>
			<progress
				className='hidden md:block rounded-none progress-primary w-full bg-slate-300'
				value='13'
				max='100'
			></progress>
			<h1 className='hidden md:block italic text-xs text-end text-gray-600'>
				₳1000 to fund the next scholarship
			</h1>
		</div>
	)
}

export default ProgressBar
