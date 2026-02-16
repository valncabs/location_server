const express = require('express');
const app = express();

app.use(express.json());

const countryRoutes = require('./routes/country.routes');
const departmentRoutes = require('./routes/department.routes');
const cityRoutes = require('./routes/city.routes');

app.use('/api/countries', countryRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/cities', cityRoutes);

module.exports = app;
