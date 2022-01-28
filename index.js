require('dotenv').config()

const server = require('./api/server')
const port = process.env.PORT || 3300
server.listen(port, () => console.log(`
  \n**listening on port ${port}**\n
   environment: ${process.env.NODE_ENV}
`))
