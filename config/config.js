/* eslint-disable quote-props */
require('dotenv').config();

module.exports = {

  'development': {
    'username': process.env.MYSQL_DB_USERNAME,
    'password': process.env.MYSQL_DB_PASSWORD,
    'database': process.env.MYSQL_DB_NAME,
    'host': process.env.MYSQL_DB_HOST,
    'dialect': 'mysql'
  },
  'test': {
    'username': 'root',
    'password': '',
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'rb6a546b8caf36c',
    'password': '7c4a449c',
    'database': 'database_production',
    'host': 'us-cdbr-east-02.cleardb.com',
    'dialect': 'mysql'
  }
};