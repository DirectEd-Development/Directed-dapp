export interface GetSchools {
	results: School[]
}

export type School = {
	name: string
	country: string
	city: string
	gender_school: string
}
