import { useImperativeHandle, useState, ReactNode, forwardRef } from 'react'
import { createPortal } from 'react-dom'

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
				<div className='modal__content'>{children}</div>
			</div>,
			document.getElementById('modal-root') as Element
		)
	}
	return null
})

export default Modal
