const API_BASE_URL = "http://localhost:9090";
const headers = {
    "Content-Type": "application/json"
}

const handleResonse = response => {
    if (response.status === 200) {
        return response.json();
    }
    throw new Error(response.statusText);
}

export default {
    get(path) {
        console.log(`${API_BASE_URL}${path}`)
        return fetch(`${API_BASE_URL}${path}`, { headers }).then(handleResonse);
    },

    post(path, body) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "POST",
            body: JSON.parse(body),
            headers
        }).then(handleResonse);
    },

    patch(path, body) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "PATCH",
            body: JSON.parse(body),
            headers
        }).then(handleResonse);
    },

    delete(path) {
        return fetch(`${API_BASE_URL}${path}`, {
            method: "DELETE".
                headers
        }).then(handleResonse);
    }
}