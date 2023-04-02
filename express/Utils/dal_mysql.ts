import mysql from 'mysql'
import config from './Config'

//creating  a connection object
const connection = mysql.createPool({
  host: config.mySQLhost,
  user: config.mySQLuser,
  password: config.mySQLpass,
  database: config.mySQLdatabase,
})

console.log('connection created to mySQL')

const execute = (Sql: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    //execute the sql on MYSQL
    connection.query(Sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
}

export default {
  execute,
}
