import { takeLatest, takeEvery, call, put, select, delay } from 'redux-saga/effects';
import * as $ from './actions';
import { apiUrl, DEVICE_ID, DEVICE_INFO, DEVICE_IP, headerConfig, setToken, VERSION, } from '../config/'
import axios from 'axios';
import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV()

function* handler() {
    yield takeLatest($.GET_SLIDER, FUNC_GET_SLIDER);
}

function* FUNC_GET_SLIDER(action) {
    try {
        yield put({
            type: $.GET_SLIDER_REQUEST
        })
        const response = yield axios.get(`${apiUrl}/app/get/slider`);
        if (response.data.status == 1) {
            yield put({
                type: $.GET_SLIDER_REQUEST_SUCCESS,
                SLIDER: response.data.data
            })
        }
        else {
            yield put({
                type: $.GET_SLIDER_REQUEST_FAILURE,
                MESSAGE: "Hata oluştu."
            })
        }
    } catch (error) {
        yield put({
            type: $.GET_SLIDER_REQUEST_FAILURE,
            MESSAGE: "Catch hata oluştu."
        })
    }
    finally {
        yield put({
            type: $.GET_SLIDER_REQUEST_END,
        })
    }
}

export { handler };