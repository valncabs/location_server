const pool = require('../db');

const City = {

    getAll: async () => {
        const result = await pool.query(`
            SELECT ci.*, d.name AS department
            FROM cities ci
            JOIN departments d ON ci.department_id = d.id
            ORDER BY ci.id
        `);
        return result.rows;
    },

};

module.exports = City;
