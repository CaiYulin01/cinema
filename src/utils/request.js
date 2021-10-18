import axios from 'axios'

const service = axios.create({
  baseURL: 'https://m.maizuo.com/'
})

export default service
