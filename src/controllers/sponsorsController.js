import SponsorsModel from '../models/sponsorsModel.js';

export const getAllSponsors = () => async () => {
	const sponsors = await SponsorsModel.find({});
	return sponsors;
}