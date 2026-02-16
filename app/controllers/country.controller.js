const Country = require('../models/country.model');

exports.getCountries = async (req, res) => {
    try {
        const countries = await Country.getAll();
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

