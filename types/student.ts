export interface GetStudents {
	results: Student[]
}

export type Student = {
	[key: string]: any
	name: string
	email: string
	school: string
	gender: string
	pseudonym: string
	personal_id: string
	cohort: string
	phone_number: string
	cardano_wallet: string
	atala_prism_did: string
	milestones_achieved: number
	pschool_token: string
	pAcceptance_token: string
	grant_received: number
	total_grant: number
}
