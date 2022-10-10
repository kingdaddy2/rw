const fs = require('fs')

module.exports = {
	path: '/api/v1/client/data',
	method: 'get',
	run: async (req , res , client) => {

res.status(200).json({"guilds.size": client.guilds.size, "users.size": client.guilds.reduce((a, g) => a + g.memberCount, 0)})
  }
}