const pool = require('../db');



const Department = {

    getAll: async () => {
        const result = await pool.query(`
            SELECT d.*, c.name AS country
            FROM departments d
            JOIN countries c ON d.country_id = c.id
            ORDER BY d.id
        `);
        return result.rows;
    },

};

module.exports = Department;
