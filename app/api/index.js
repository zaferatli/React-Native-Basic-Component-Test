import axios from 'axios';
import {API_URL} from '../config';

export const GET_REQUEST = function (url) {
    return axios
    .get(`${API_URL}${url}`)
    .then((response) => {
    return response.data;
    });
};


export const POST_REQUEST = function (url, body) {
    return axios
    .post(`${API_URL}${url}`, body)
    .then((response) => {
    return response.data;
    });
};

export const POST_REQUEST_WITH_TOKEN = function (url, body, token) {
    return axios
    .post(`${API_URL}${url}`, body, { headers:{
        "Authorization": `Bearer ${token}`,
        Accept: "application/json",
    }
    })
    .then((response) => {
    return response.data;
    });
};

export const GET_REQUEST_WITH_TOKEN = function (url, token) {
    return axios
    .post(`${API_URL}${url}`, {
        "Authorization": `Bearer ${token}`,
        Accept: "application/json",
      })
    .then((response) => {
    return response.data;
    });
};


export const SERVIS_TEST = (url, token) => {
    return axios.get(url).then()
}