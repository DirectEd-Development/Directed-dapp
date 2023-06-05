export const getLink = (name: string) =>
	name.split(' ').join('-').toLowerCase().split("'").join('')
