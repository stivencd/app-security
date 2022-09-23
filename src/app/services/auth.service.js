const authRepository = require('../repositories/auth.repository')
const logProvider = require('../middlewares/logprovider');

const authService = {
    getUsersByCredentials: async (userName, password) => {
        logProvider.info('Start getUsersByCredentials in auth.services.js')
        return await authRepository.getUsersByCredentials(userName, password)
    }
}

module.exports = authService