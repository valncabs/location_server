const pool = require('../db');



const Country = {

    getAll: async () => {
        const result = await pool.query(
            'SELECT * FROM countries ORDER BY id'
        );
        return result.rows;
    },


};

module.exports = Country;
