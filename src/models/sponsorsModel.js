import mongoose from 'mongoose';
const sponsorsSchema = mongoose.Schema({
	name: String,
	country: String
});
const SponsorsModel = mongoose.model("Sponsor", sponsorsSchema);
export default SponsorsModel;