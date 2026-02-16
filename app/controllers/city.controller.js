const City = require('../models/city.model');

exports.getCities = async (req, res) => {
    try {
        const cities = await City.getAll();
        res.json(cities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
