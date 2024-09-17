const mongoose = require('mongoose')


const grievanceSchema = new mongoose.Schema({
    name: String,
    email: String,
    district: String,
    phone: String,
    complaint: String,
    dateSubmitted: String,
    
});



const Grievance = mongoose.model('Grievance', grievanceSchema);
module.exports = Grievance