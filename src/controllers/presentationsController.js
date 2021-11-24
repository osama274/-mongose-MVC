import PresentationsModel from '../models/ PresentationsModel.js';
export const getAllPresentations = async () => {
	const presentations = await PresentationsModel.find({});
	return presentations;
}