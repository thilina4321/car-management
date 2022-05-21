import axios from 'axios'
export const httpRequest = async ({url, method, data})=>{
    const requset = await axios({
        url : 'https://car-management-app-university.herokuapp.com/' + url,
        method,
        data : data
    })

    return requset['data']
}