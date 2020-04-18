import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "adbf7e69-395e-47f3-b53e-29bfd52e456c", }
});

export const getPageNumber = (pageNumber, pageSize) => {
    return instance.get(`${baseUrl}users?page=${pageNumber}&count=${pageSize}`, 
    {
        withCredentials: true  
    }).then(response => response.data)
}

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, 
    {
        withCredentials: true
    }).then(response => response.data)
}

export const getUserId = (userId) => {
    return axios.get(`${baseUrl}profile/` + userId).then(response => response.data)
}


export const getUserlogin = () => {
    return axios.get(`${baseUrl}auth/me`, {
        withCredentials: true
    }).then(response => response.data)
}

export const unfollowUser = (id) => {
    return axios.delete(`${baseUrl}follow/${id}`, {
        withCredentials: true, 
        headers: {"API-KEY": "adbf7e69-395e-47f3-b53e-29bfd52e456c"},
}).then(response => response.data)
}

export const followUser = (id) => {
    return axios.post(`${baseUrl}follow/${id}`, {}, {      
        withCredentials: true,
        headers: {"API-KEY": "adbf7e69-395e-47f3-b53e-29bfd52e456c"},
    }).then(response => response.data)
}