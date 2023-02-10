import { useState, useEffect } from 'react'

type StateType<T> = [T, (value: T) => void]

function usePersistedState<T>(key: string, defaultValue: T): StateType<T> {
	const [state, setState] = useState<T>(() => {
		const storedValue = localStorage.getItem(key)
		return storedValue ? JSON.parse(storedValue) : defaultValue
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state))
	}, [key, state])

	return [state, setState]
}

export default usePersistedState
