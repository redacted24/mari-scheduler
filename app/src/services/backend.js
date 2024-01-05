import axios from 'axios'

const baseURL = "http://localhost:3001/courses"

const getData = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export default {getData}