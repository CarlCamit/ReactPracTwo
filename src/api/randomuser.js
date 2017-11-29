const axios = require('axios')

const randomUser = axios.create({
  baseURL: 'https://randomuser.me/api/'
})

function getRandomUser() {
  return randomUser.get()
}

module.exports = { getRandomUser }
