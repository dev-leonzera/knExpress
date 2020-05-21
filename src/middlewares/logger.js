var morgan = require('morgan')

var logger = morgan(':date[clf] - :method - :url - :status - :response-time ms')

module.exports = logger
    