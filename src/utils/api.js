const onResponce = (data) =>
    data.ok ? data.json() : Promise.reject(`Error: ${data}`);

class Api {
    constructor({baseUrl, token}) {
        this._token = token;
        this._baseUrl = baseUrl;
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }

    getPostAll() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }

    getPostOfId(id) {
        return fetch(`${this._baseUrl}/posts/${id}`, {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }

    deletePostId(id) {
        return fetch(`${this._baseUrl}/posts/${id}`, {
            method: "DELETE",
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }

    setLike(id, method) {
        return fetch(`${this._baseUrl}/posts/likes/${id}`, {
            method: method,
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }

}

const config = {
    baseUrl: "https://api.react-learning.ru",
    token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do",
};

const api = new Api(config);

export default api;
