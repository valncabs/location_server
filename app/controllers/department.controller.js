const Department = require('../models/department.model');

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.getAll();
        res.json(departments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
