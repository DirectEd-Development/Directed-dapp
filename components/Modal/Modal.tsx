import { useImperativeHandle, useState, ReactNode, forwardRef } from 'react'
import { createPortal } from 'react-dom'
import { GrFormClose } from 'react-icons/gr'

export type ModalHandler = {
	openModal: () => void
	closeModal: () => void
}

type ModalProps = {
	children: ReactNode
}

const Modal = forwardRef<ModalHandler, ModalProps>(({ children }, ref) => {
	const [display, setDisplay] = useState<boolean>(false)

	useImperativeHandle(ref, () => {
		return { openModal: () => open(), closeModal: () => close() }
	})

	const open = (): void => {
		setDisplay(true)
	}

	const close = (): void => {
		setDisplay(false)
	}

	if (display) {
		return createPortal(
			<div className='modal'>
				<div className='modal__content'>
					<GrFormClose size={30} className='modal__icon' onClick={close} />
					{children}
				</div>
			</div>,
			document.getElementById('modal-root') as Element
		)
	}
	return null
})

export default Modal
