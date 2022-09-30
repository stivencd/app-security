const authRepository = require('../repositories/auth.repository')
const logProvider = require('../middlewares/logprovider');
const logger = require('../middlewares/graylogprovider');

const authService = {
    getUsersByCredentials: async (userName, password) => {
        logProvider.info('Start getUsersByCredentials in auth.services.js')
        logger.log("Simple message graylog2");
        return await authRepository.getUsersByCredentials(userName, password)
    }
}

module.exports = authService