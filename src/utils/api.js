import axios from './axios'

export function test(data){
 return axios.post('/test',data)
}
