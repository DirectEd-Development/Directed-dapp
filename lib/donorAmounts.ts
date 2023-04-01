import { OptionTiers } from '../types/tiers'

export const lionOptions: OptionTiers[] = [
	{
		amount: '₳2000 (~$500)',
		title: 'Royal',
		image: '/static/images/1.png',
	},
	{
		amount: '₳1000 (~$300-$350)',
		title: 'Hero',
		image: '/static/images/2.png',
	},
	{
		amount: '40ADA (~$10)',
		title: 'Warrior',
		image: '/static/images/3.png',
	},
]

export const noLionOptions: OptionTiers[] = [
	{
		amount: '₳1000',
		title: '1 Full Access Scholarship',
	},
	{
		amount: 'custom',
		title: 'Custom',
	},
]
