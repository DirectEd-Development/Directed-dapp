const ProgressBar = ({ progress }: { progress: number }) => (
	<div className='flex items-center space-x-4'>
		{Array.from(Array(4).keys()).map((pro: number) => (
			<div
				className={`w-4 md:w-16 h-2 ${
					pro <= progress - 1 ? 'bg-primary' : 'bg-gray-300'
				}`}
			/>
		))}
	</div>
)

export default ProgressBar
