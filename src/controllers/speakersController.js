import SpeakersModel from '../models/speakersModel.js';

export const getAllSpeakers = async () => {
	const speakers = await SpeakersModel.find({});
	return speakers;
}