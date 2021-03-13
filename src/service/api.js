
const BASE_API_URL = 'https://try.enablex.io/';
const username = 'demo';
const password = 'enablex';

const fetchOptions = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: 'Basic ' + btoa(username + ':' + password)
    }
};

/**
 * Create Room xhr request
 */
export const createRoom = async () => {
    Object.assign(fetchOptions, {
        method: "POST",
        body: ''
    });
    const response = await fetch(BASE_API_URL + 'createRoom/', fetchOptions);
    return await response.json();
}


/**
 * Join room method to make an xhr request to get new token
 */
export const joinRoom = async (payload) => {
    Object.assign(fetchOptions, {
        method: "POST",
        body: JSON.stringify(payload)
    });
    const response = await fetch(BASE_API_URL + 'createToken/', fetchOptions);
    return await response.json();
}
