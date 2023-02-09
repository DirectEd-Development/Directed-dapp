import React from 'react'

import { GrFormClose } from 'react-icons/gr'

type ModalPropsType = {
	open: boolean
	onClose?(): void
	children: React.ReactNode
	className?: string
}

const Modal = ({ open, onClose, children, className }: ModalPropsType) => {
	const handleStopPropagation = (event: React.MouseEvent) => {
		event.stopPropagation()
	}
	const handleClose = (event: React.MouseEvent) => {
		handleStopPropagation(event)
		if (onClose) {
			onClose()
		}
	}
	return (
		<>
			<input
				type='checkbox'
				checked={open}
				id='my-modal'
				className='modal-toggle'
				readOnly
			/>
			<div className='modal p-10' onClick={onClose}>
				<div
					onClick={handleStopPropagation}
					className={`modal-box ${className}`}
				>
					<button
						onClick={handleClose}
						className='text-primary absolute top-2 right-2 z-50'
					>
						<GrFormClose size={20} />
					</button>

					{children}
				</div>
			</div>
		</>
	)
}

export default Modal
