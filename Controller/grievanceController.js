const Grievance = require('../Model/Grievance')
const moment = require('moment-timezone');



// submit grievance

exports.submit = async (req, res) => {
    const { name, email, complaint, district, phone } = req.body;
    const dateSubmitted = moment().tz('Asia/Kolkata').format('DD-MM-YYYY h:mm A'); // Current time in IST

    try {
        const newGrievance = new Grievance({
            name,
            email,
            complaint,
            district,
            phone,
            dateSubmitted,

        });

        await newGrievance.save();
        res.status(200).json({ message: 'Grievance submitted successfully!', name });

    } catch (error) {
        res.status(500).send({ message: 'Error submitting grievance.' });
    }

}

// get grievance

exports.getGrievance = async (req, res) => {
    try {
        const grievances = await Grievance.find().limit(50);  // Fetch all complaints from MongoDB
        res.status(200).json(grievances);  // Send data back as JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching grievances' });
    }
}


// delete grievance

exports.deleteGrievance = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Grievance.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).send('Grievance not found');
        }

        res.status(200).send('Grievance deleted successfully');
    } catch (error) {
        console.error('Error deleting grievance:', error);
        res.status(500).send('Internal Server Error');
    }
}