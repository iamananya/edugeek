import axios from "axios";

const baseUrl = 'https://edugeeksuser.pythonanywhere.com/';

export const createBatch = async (batch_start, batch_code, course,category,subject) => {
    var body = {
        'batch_start' : batch_start, 
        'batch_code' : batch_code,
        'course' : course,
        'category':category,
        'subject':subject

    }
    await axios.post(baseUrl + '/batch/', body)
}

export const getBatches = async () => {
    const res = await axios.get(baseUrl + '/batch/')
    return res
}

export const getVideos = async (batch_code) => {
    const res = await axios.get(baseUrl + '/video/?batch_code=' + batch_code)
    return res
}

export const addVideos = async (title, batch_code, video) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('batch_code', batch_code);
    for (let i = 0 ; i < video.length ; i++) {
        formdata.append("video", video[i]);
    }

    const res = await axios.post(baseUrl + '/video/', formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
          }
    });
    return res;
}

export const getMaterial = async (batch_code) => {
    const res = await axios.get(baseUrl + '/study_material/?batch_code=' + batch_code)
    return res;
}

export const addMaterial = async (title, batch_code, material) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('batch_code', batch_code);
    for (let i = 0 ; i < material.length ; i++) {
        formdata.append("material", material[i]);
    }

    const res = await axios.post(baseUrl + '/study_material/', formdata, {
        headers: {
            "Content-Type": "multipart/form-data",
          }
    });
    return res;
}
export const getNotif = async () => {
    const res = await axios.get(baseUrl + '/notif/')
    return res
}

export const getAdmin = async () => {
    const res = await axios.get(baseUrl + '/admins/')

    return res
}

export const getStudents = async () => {
    const res = await axios.get(baseUrl + '/user/')
    return res
}