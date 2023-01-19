const { server } = require('@hapi/hapi');
const path = require('path');

const index = (req,h) => {
    return h.file(path.join(__dirname, '../src/dashboard.html')).code(200);
}

module.exports = {index}