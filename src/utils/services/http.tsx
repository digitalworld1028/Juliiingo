import { BASE_URL } from "../../constants";

async function http(url: string, options: object | {}) {
    console.log(`${BASE_URL}/${url}`, options);
    try {
        let response;

        if (!options) response = await fetch(`${BASE_URL}/${url}`);

        if (options) response = await fetch(`${BASE_URL}/${url}`, options);

        response = await response?.json();

        if (!response.success) console.log("some thing went wrong", response.message);

        return response;
    } catch (error) {
        console.log(`network request failed ${error}`);
    }
};

export default http;