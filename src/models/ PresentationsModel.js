import mongoose from 'mongoose';

const presentationsSchema = mongoose.Schema({
	title: String,
	room: String
});
const PresentationsModel = mongoose.model("Presentation", presentationsSchema);

export default PresentationsModel;