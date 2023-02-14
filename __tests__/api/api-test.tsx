import axios from "axios";
import { GET_REQUEST, POST_REQUEST, POST_REQUEST_WITH_TOKEN } from "../../app/api/index";

let TOKEN: string;
let COMMENT_ID: string;

beforeEach(() => {});

test("GET_SLIDER SERVICE", async () => {
    await GET_REQUEST('app/get/slider').then(async res => {
        await expect(res).toBeTruthy();
        await expect(res.status).toBe(1);
        await expect(res.data.length).toBeGreaterThan(0)
    })
});

test("POST_LOGIN SERVICE", async () => {
    const body = {
        "EMAIL": "zaferr@protonmail.com",
        "PASSWORD": "1234",
        "DEVICE_ID": "123",
        "IP_ADDRESS": "127.0.0.1",
        "VERSION": "0.0.1"
    }
    await POST_REQUEST('user/login', body).then(async res => {
        await expect(res).toBeTruthy();
        await expect(res.status).toBe(1);
        await expect(res.accessToken).toBeTruthy()
        TOKEN = res.accessToken
    })
});

test("ADD_COMMENT SERVICE", async () => {
    const body = {
        "RES_ID": 1,
        "COMMENT": "Çok güzeldi",
        "STAR": "4.3",
        "IP_ADDRESS" : "1.1.1.1",
        "DEVICE_ID" : "1",
        "VERSION" : "0.1.0"
    }
    await POST_REQUEST_WITH_TOKEN('userAccess/comment/insert', body, TOKEN).then(async res => {
        await expect(res).toBeTruthy();
        await expect(res.status).toBe(1);
        await expect(res.data.insertId).toBeTruthy()
        COMMENT_ID = res.data.insertId;
    })
});

test("UPDATE_COMMENT SERVICE", async () => {
    const body = {
        "COMMENT_ID": COMMENT_ID,
        "COMMENT": "Çok güzel değildi",
        "STAR": "4.3",
        "IP_ADDRESS" : "1.1.1.1",
        "DEVICE_ID" : "1",
        "VERSION" : "0.1.0"
    }
    await POST_REQUEST_WITH_TOKEN('userAccess/comment/edit', body, TOKEN).then(async res => {
        await expect(res).toBeTruthy();
        await expect(res.status).toBe(1);
        await expect(res.data.affectedRows).toBe(1);
    })
});


test("REMOVE_COMMENT SERVICE", async () => {
    const body = {
        "COMMENT_ID": COMMENT_ID,
        "IP_ADDRESS" : "1.1.1.1",
        "DEVICE_ID" : "1",
        "VERSION" : "0.1.0"
    }
    await POST_REQUEST_WITH_TOKEN('userAccess/comment/remove', body, TOKEN).then(async res => {
        await expect(res).toBeTruthy();
        await expect(res.status).toBe(1);
        await expect(res.data.affectedRows).toBe(1);
    })
});
