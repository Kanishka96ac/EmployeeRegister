const mongoose = require('mongoose');

const dburl = 'mongodb+srv://admin:1234@employeereg.e9g61ag.mongodb.net/employee_db?retryWrites=true&w=majority&appName=EmployeeReg';

module.exports = () => {
    return mongoose.connect(dburl)
}

