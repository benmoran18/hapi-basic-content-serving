/**
 * Example of serving static content using hapi.
 */

const Hapi = require('hapi')

// Create a new hapi server.
const server = new Hapi.Server()

// Define the connection details.
server.connection({
  host: 'localhost',
  port: 8080
})

// To handle files we must require a hapi module called
// called inert which allows file handling.
server.register(require('inert'), err => {
  if(err) throw err
  
  // Once we have loaded the module without errors,
  // we can then define our static directory and use
  // the directory handler for requests to this resource.
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
  })

})

// Obviously start the server.
server.start(error => {
  if(error) throw error

  console.log('Server listening...')
})