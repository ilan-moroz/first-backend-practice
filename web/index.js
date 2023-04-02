const banner = require('./banner')
const http = require('http')

console.log(banner.getBanner())
console.log('server ip : 10.100.102.131')
console.log('server port :4578')

// WEB SERVER(createServer), CODE 200(OK), TEXT(data response format), PORT(8080), MSG('murder'), REQ/RES(req-server gets/NO USE HERE!, res-server returns ), TCP/IP
http
  .createServer((request, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/plain',
    })
    response.write('FIND VICTIM.....\n\n')
    response.end('GIVE VICTIM A SHEKEL.....')
  })
  .listen(4578)
