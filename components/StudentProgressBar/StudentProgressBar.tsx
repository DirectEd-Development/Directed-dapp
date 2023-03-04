const StudentProgressBar = ({ progress }: { progress: number }) => (
	<div className='flex-gap student-progressbar'>
		{Array.from(Array(4).keys()).map((pro: number) => (
			<div
				key={pro}
				className={`student-progressbar__progression ${
					pro <= progress - 1 ? 'bg-primary' : 'bg-gray-300'
				}`}
			/>
		))}
	</div>
)

export default StudentProgressBar
